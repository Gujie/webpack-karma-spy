import * as Index from '../src/index';

describe('test foo', () => {
  it('should call bar', () => {
    spyOn(Index, 'bar');
    Index.foo();
    expect(Index.bar).toHaveBeenCalledWith();
  });
});
