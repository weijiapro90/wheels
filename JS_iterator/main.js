/**
 * Created by weijiaPro on 2017/12/10.
 */
{
    function iterator(x) {
        var i = 0;
        return function () {
            return x[i++];
        }
    }

    var example = ['a', 'b', 'c'];
    var next = iterator(example);

    next(); // 'a'
    next(); // 'b'
}