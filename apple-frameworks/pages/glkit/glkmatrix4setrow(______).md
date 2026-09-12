> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkmatrix4setrow(_:_:_:)](https://developer.apple.com/documentation/glkit/glkmatrix4setrow(_:_:_:))

# GLKMatrix4SetRow(\_:\_:\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a new `4x4` matrix with one row replaced by a new vector.

## Declaration

```swift
func GLKMatrix4SetRow(_ matrix: GLKMatrix4, _ row: Int32, _ vector: GLKVector4) -> GLKMatrix4
```

## Parameters

- `matrix`: The source matrix.
- `row`: The index of the row to replace, which must be a number between `0` and `3`, inclusive.
- `vector`: A vector holding the replacement component values.

<a id="return-value"></a>

## Return Value

A new matrix.

<a id="Discussion"></a>

## Discussion

The last component of rows `0` through `2` correspond to the translation values `tx`, `ty`, and `tz`, respectively.

## See Also

### Working With Parts of a Matrix

- [GLKMatrix4GetMatrix2(\_:)](glkmatrix4getmatrix2%28__%29.md): Returns the upper-left `2x2` section of a `4x4` matrix.
- [GLKMatrix4GetMatrix3(\_:)](glkmatrix4getmatrix3%28__%29.md): Returns the upper-left `3x3` section of a `4x4` matrix.
- [GLKMatrix4GetColumn(\_:\_:)](glkmatrix4getcolumn%28____%29.md): Retrieves a column from a `4x4` matrix.
- [GLKMatrix4GetRow(\_:\_:)](glkmatrix4getrow%28____%29.md): Retrieves a row from a `4x4` matrix.
- [GLKMatrix4SetColumn(\_:\_:\_:)](glkmatrix4setcolumn%28______%29.md): Returns a new `4x4` matrix with one column replaced by a new vector.

# GLKMatrix4SetRow (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a new `4x4` matrix with one row replaced by a new vector.

## Declaration

```objectivec
static GLKMatrix4 GLKMatrix4SetRow(GLKMatrix4 matrix, int row, GLKVector4 vector);
```

## Parameters

- `matrix`: The source matrix.
- `row`: The index of the row to replace, which must be a number between `0` and `3`, inclusive.
- `vector`: A vector holding the replacement component values.

<a id="return-value"></a>

## Return Value

A new matrix.

<a id="Discussion"></a>

## Discussion

The last component of rows `0` through `2` correspond to the translation values `tx`, `ty`, and `tz`, respectively.

## See Also

### Working With Parts of a Matrix

- [GLKMatrix4GetMatrix2](glkmatrix4getmatrix2%28__%29.md): Returns the upper-left `2x2` section of a `4x4` matrix.
- [GLKMatrix4GetMatrix3](glkmatrix4getmatrix3%28__%29.md): Returns the upper-left `3x3` section of a `4x4` matrix.
- [GLKMatrix4GetColumn](glkmatrix4getcolumn%28____%29.md): Retrieves a column from a `4x4` matrix.
- [GLKMatrix4GetRow](glkmatrix4getrow%28____%29.md): Retrieves a row from a `4x4` matrix.
- [GLKMatrix4SetColumn](glkmatrix4setcolumn%28______%29.md): Returns a new `4x4` matrix with one column replaced by a new vector.
