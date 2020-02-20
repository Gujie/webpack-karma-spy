// eslint-disable-next-line import/named
import { foo, __RewireAPI__ as RewireAPI } from '../src/index';
import { MyNameSpace } from '../src/myNameSpace';

describe('test foo', () => {
  it('should call bar', () => {
    const barSpy = jasmine.createSpy('bar');
    RewireAPI.__Rewire__('bar', barSpy);
    spyOn(MyNameSpace, 'doSomething');
    foo();
    expect(barSpy).toHaveBeenCalledWith();
    expect((MyNameSpace.doSomething)).toHaveBeenCalledWith();
  });
});
