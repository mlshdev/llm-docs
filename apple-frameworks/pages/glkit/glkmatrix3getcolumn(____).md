> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkmatrix3getcolumn(_:_:)](https://developer.apple.com/documentation/glkit/glkmatrix3getcolumn(_:_:))

# GLKMatrix3GetColumn(\_:\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Retrieves a column from a `3x3` matrix.

## Declaration

```swift
func GLKMatrix3GetColumn(_ matrix: GLKMatrix3, _ column: Int32) -> GLKVector3
```

## Parameters

- `matrix`: A `3x3` matrix.
- `column`: The column index, which must be a number between `0` and `2`, inclusive.

<a id="return-value"></a>

## Return Value

A vector representing the column retrieved from the matrix.

## See Also

### Working With Parts of a Matrix

- [GLKMatrix3GetMatrix2(\_:)](glkmatrix3getmatrix2%28__%29.md): Returns the upper-left `2x2` section of a `3x3` matrix.
- [GLKMatrix3GetRow(\_:\_:)](glkmatrix3getrow%28____%29.md): Retrieves a row from a `3x3` matrix.
- [GLKMatrix3SetColumn(\_:\_:\_:)](glkmatrix3setcolumn%28______%29.md): Returns a new `3x3` matrix with one column replaced by a new vector.
- [GLKMatrix3SetRow(\_:\_:\_:)](glkmatrix3setrow%28______%29.md): Returns a new `3x3` matrix with one row replaced by a new vector.

# GLKMatrix3GetColumn (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Retrieves a column from a `3x3` matrix.

## Declaration

```objectivec
static GLKVector3 GLKMatrix3GetColumn(GLKMatrix3 matrix, int column);
```

## Parameters

- `matrix`: A `3x3` matrix.
- `column`: The column index, which must be a number between `0` and `2`, inclusive.

<a id="return-value"></a>

## Return Value

A vector representing the column retrieved from the matrix.

## See Also

### Working With Parts of a Matrix

- [GLKMatrix3GetMatrix2](glkmatrix3getmatrix2%28__%29.md): Returns the upper-left `2x2` section of a `3x3` matrix.
- [GLKMatrix3GetRow](glkmatrix3getrow%28____%29.md): Retrieves a row from a `3x3` matrix.
- [GLKMatrix3SetColumn](glkmatrix3setcolumn%28______%29.md): Returns a new `3x3` matrix with one column replaced by a new vector.
- [GLKMatrix3SetRow](glkmatrix3setrow%28______%29.md): Returns a new `3x3` matrix with one row replaced by a new vector.
