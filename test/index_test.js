// eslint-disable-next-line import/named
import { foo, __RewireAPI__ as RewireAPI } from '../src/index';

describe('test foo', () => {
  it('should call bar', () => {
    const barSpy = jasmine.createSpy('bar');
    RewireAPI.__Rewire__('bar', barSpy);
    foo();
    expect(barSpy).toHaveBeenCalledWith();
  });
});
