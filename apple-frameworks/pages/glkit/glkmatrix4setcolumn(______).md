> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkmatrix4setcolumn(_:_:_:)](https://developer.apple.com/documentation/glkit/glkmatrix4setcolumn(_:_:_:))

# GLKMatrix4SetColumn(\_:\_:\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a new `4x4` matrix with one column replaced by a new vector.

## Declaration

```swift
func GLKMatrix4SetColumn(_ matrix: GLKMatrix4, _ column: Int32, _ vector: GLKVector4) -> GLKMatrix4
```

## Parameters

- `matrix`: The source matrix.
- `column`: The index of the column to replace, which must be a number between `0` and `3`, inclusive.
- `vector`: A vector holding the replacement component values.

<a id="return-value"></a>

## Return Value

A new matrix.

<a id="Discussion"></a>

## Discussion

The first three components of column `3` provide the translation values `tx`, `ty` and `tz`.

## See Also

### Working With Parts of a Matrix

- [GLKMatrix4GetMatrix2(\_:)](glkmatrix4getmatrix2%28__%29.md): Returns the upper-left `2x2` section of a `4x4` matrix.
- [GLKMatrix4GetMatrix3(\_:)](glkmatrix4getmatrix3%28__%29.md): Returns the upper-left `3x3` section of a `4x4` matrix.
- [GLKMatrix4GetColumn(\_:\_:)](glkmatrix4getcolumn%28____%29.md): Retrieves a column from a `4x4` matrix.
- [GLKMatrix4GetRow(\_:\_:)](glkmatrix4getrow%28____%29.md): Retrieves a row from a `4x4` matrix.
- [GLKMatrix4SetRow(\_:\_:\_:)](glkmatrix4setrow%28______%29.md): Returns a new `4x4` matrix with one row replaced by a new vector.

# GLKMatrix4SetColumn (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns a new `4x4` matrix with one column replaced by a new vector.

## Declaration

```objectivec
static GLKMatrix4 GLKMatrix4SetColumn(GLKMatrix4 matrix, int column, GLKVector4 vector);
```

## Parameters

- `matrix`: The source matrix.
- `column`: The index of the column to replace, which must be a number between `0` and `3`, inclusive.
- `vector`: A vector holding the replacement component values.

<a id="return-value"></a>

## Return Value

A new matrix.

<a id="Discussion"></a>

## Discussion

The first three components of column `3` provide the translation values `tx`, `ty` and `tz`.

## See Also

### Working With Parts of a Matrix

- [GLKMatrix4GetMatrix2](glkmatrix4getmatrix2%28__%29.md): Returns the upper-left `2x2` section of a `4x4` matrix.
- [GLKMatrix4GetMatrix3](glkmatrix4getmatrix3%28__%29.md): Returns the upper-left `3x3` section of a `4x4` matrix.
- [GLKMatrix4GetColumn](glkmatrix4getcolumn%28____%29.md): Retrieves a column from a `4x4` matrix.
- [GLKMatrix4GetRow](glkmatrix4getrow%28____%29.md): Retrieves a row from a `4x4` matrix.
- [GLKMatrix4SetRow](glkmatrix4setrow%28______%29.md): Returns a new `4x4` matrix with one row replaced by a new vector.
