> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkmatrix3setrow(_:_:_:)](https://developer.apple.com/documentation/glkit/glkmatrix3setrow(_:_:_:))

# GLKMatrix3SetRow(\_:\_:\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a new `3x3` matrix with one row replaced by a new vector.

## Declaration

```swift
func GLKMatrix3SetRow(_ matrix: GLKMatrix3, _ row: Int32, _ vector: GLKVector3) -> GLKMatrix3
```

## Parameters

- `matrix`: The source matrix.
- `row`: The index of the row to replace, which must be a number between `0` and `2`, inclusive.
- `vector`: A vector holding the replacement component values.

<a id="return-value"></a>

## Return Value

A new matrix.

## See Also

### Working With Parts of a Matrix

- [GLKMatrix3GetMatrix2(\_:)](glkmatrix3getmatrix2%28__%29.md): Returns the upper-left `2x2` section of a `3x3` matrix.
- [GLKMatrix3GetColumn(\_:\_:)](glkmatrix3getcolumn%28____%29.md): Retrieves a column from a `3x3` matrix.
- [GLKMatrix3GetRow(\_:\_:)](glkmatrix3getrow%28____%29.md): Retrieves a row from a `3x3` matrix.
- [GLKMatrix3SetColumn(\_:\_:\_:)](glkmatrix3setcolumn%28______%29.md): Returns a new `3x3` matrix with one column replaced by a new vector.

# GLKMatrix3SetRow (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a new `3x3` matrix with one row replaced by a new vector.

## Declaration

```objectivec
static GLKMatrix3 GLKMatrix3SetRow(GLKMatrix3 matrix, int row, GLKVector3 vector);
```

## Parameters

- `matrix`: The source matrix.
- `row`: The index of the row to replace, which must be a number between `0` and `2`, inclusive.
- `vector`: A vector holding the replacement component values.

<a id="return-value"></a>

## Return Value

A new matrix.

## See Also

### Working With Parts of a Matrix

- [GLKMatrix3GetMatrix2](glkmatrix3getmatrix2%28__%29.md): Returns the upper-left `2x2` section of a `3x3` matrix.
- [GLKMatrix3GetColumn](glkmatrix3getcolumn%28____%29.md): Retrieves a column from a `3x3` matrix.
- [GLKMatrix3GetRow](glkmatrix3getrow%28____%29.md): Retrieves a row from a `3x3` matrix.
- [GLKMatrix3SetColumn](glkmatrix3setcolumn%28______%29.md): Returns a new `3x3` matrix with one column replaced by a new vector.
