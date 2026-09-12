> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkmatrix4getrow(_:_:)](https://developer.apple.com/documentation/glkit/glkmatrix4getrow(_:_:))

# GLKMatrix4GetRow(\_:\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Retrieves a row from a `4x4` matrix.

## Declaration

```swift
func GLKMatrix4GetRow(_ matrix: GLKMatrix4, _ row: Int32) -> GLKVector4
```

## Parameters

- `matrix`: A `4x4` matrix.
- `row`: The row index, which must be a number between `0` and `3`, inclusive.

<a id="return-value"></a>

## Return Value

A vector representing the row retrieved from the matrix.

<a id="Discussion"></a>

## Discussion

The last component of rows `0` through `2` correspond to the translation values `tx`, `ty`, and `tz`, respectively.

## See Also

### Working With Parts of a Matrix

- [GLKMatrix4GetMatrix2(\_:)](glkmatrix4getmatrix2%28__%29.md): Returns the upper-left `2x2` section of a `4x4` matrix.
- [GLKMatrix4GetMatrix3(\_:)](glkmatrix4getmatrix3%28__%29.md): Returns the upper-left `3x3` section of a `4x4` matrix.
- [GLKMatrix4GetColumn(\_:\_:)](glkmatrix4getcolumn%28____%29.md): Retrieves a column from a `4x4` matrix.
- [GLKMatrix4SetColumn(\_:\_:\_:)](glkmatrix4setcolumn%28______%29.md): Returns a new `4x4` matrix with one column replaced by a new vector.
- [GLKMatrix4SetRow(\_:\_:\_:)](glkmatrix4setrow%28______%29.md): Returns a new `4x4` matrix with one row replaced by a new vector.

# GLKMatrix4GetRow (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Retrieves a row from a `4x4` matrix.

## Declaration

```objectivec
static GLKVector4 GLKMatrix4GetRow(GLKMatrix4 matrix, int row);
```

## Parameters

- `matrix`: A `4x4` matrix.
- `row`: The row index, which must be a number between `0` and `3`, inclusive.

<a id="return-value"></a>

## Return Value

A vector representing the row retrieved from the matrix.

<a id="Discussion"></a>

## Discussion

The last component of rows `0` through `2` correspond to the translation values `tx`, `ty`, and `tz`, respectively.

## See Also

### Working With Parts of a Matrix

- [GLKMatrix4GetMatrix2](glkmatrix4getmatrix2%28__%29.md): Returns the upper-left `2x2` section of a `4x4` matrix.
- [GLKMatrix4GetMatrix3](glkmatrix4getmatrix3%28__%29.md): Returns the upper-left `3x3` section of a `4x4` matrix.
- [GLKMatrix4GetColumn](glkmatrix4getcolumn%28____%29.md): Retrieves a column from a `4x4` matrix.
- [GLKMatrix4SetColumn](glkmatrix4setcolumn%28______%29.md): Returns a new `4x4` matrix with one column replaced by a new vector.
- [GLKMatrix4SetRow](glkmatrix4setrow%28______%29.md): Returns a new `4x4` matrix with one row replaced by a new vector.
