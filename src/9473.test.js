require('jest');

describe('9473', () => {
  it('fails to detect open handles', async () => {
    const Redis = require('ioredis');
    const redis = new Redis(6379, 'localhost');
    // redis needs to be disconnected
    // if we do not disconnect, jest will warn us it did not exit
    // if we run jest with --detectOpenHandles, it displays no output regarding the redis connection
    expect(1).toBe(0);

    // In this case we intentionally caused the test to fail so this line wouldn't be executed.
    // In a real-world example, this might be a logic error somewhere deep in our code that we
    // would hope to find using --detectOpenHandles to know where to look.
    redis.disconnect();
  });
});
