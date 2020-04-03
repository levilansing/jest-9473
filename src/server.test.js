require('jest');

describe('server', () => {
  it('detects open handles', () => {
    // In this case, we start a local server but don't close it.
    // Jest can detect this open handle when run with --detectOpenHandles
    require('./server');
    expect(1).toBe(1);
  });
});
