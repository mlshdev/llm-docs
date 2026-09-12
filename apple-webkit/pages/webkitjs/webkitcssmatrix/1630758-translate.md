> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/webkitcssmatrix/1630758-translate](https://developer.apple.com/documentation/webkitjs/webkitcssmatrix/1630758-translate)

# translate

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Instance Method  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

Returns the result of translating this matrix by a given vector.

## Declaration

```
WebKitCSSMatrix translate(
    optional unrestricted double x, 
    optional unrestricted double y, 
    optional unrestricted double z
);
```

## Parameters

- `x`: The x component in the vector.
- `y`: The y component in the vector.
- `z`: The z component in the vector. If undefined, `0` is used.

<a id="return_value"></a>

## Return Value

A new matrix that is the result of translating this matrix.

<a id="discussion"></a>

## Discussion

This matrix is not modified by this method.

## See Also

### Applying Operations

- [multiply](1631528-multiply.md): Returns the result of multiplying this matrix by a given matrix that is on the right.
- [inverse](1633805-inverse.md): Returns the inverse of this matrix.
- [scale](1632184-scale.md): Returns the result of scaling this matrix by a given vector.
- [rotate](1629773-rotate.md): Returns the result of rotating this matrix by a given vector.
- [rotateAxisAngle](1632317-rotateaxisangle.md): Returns the result of rotating this matrix by a given vector and angle.
- [skewX](1633353-skewx.md): Specifies a skew transformation along the x-axis by the given angle.
- [skewY](1631022-skewy.md): Specifies a skew transformation along the y-axis by the given angle.
