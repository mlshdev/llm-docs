> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkmatrix3getmatrix2(_:)](https://developer.apple.com/documentation/glkit/glkmatrix3getmatrix2(_:))

# GLKMatrix3GetMatrix2(\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns the upper-left `2x2` section of a `3x3` matrix.

## Declaration

```swift
func GLKMatrix3GetMatrix2(_ matrix: GLKMatrix3) -> GLKMatrix2
```

## Parameters

- `matrix`: A matrix.

<a id="return-value"></a>

## Return Value

A new `2x2` matrix.

## See Also

### Working With Parts of a Matrix

- [GLKMatrix3GetColumn(\_:\_:)](glkmatrix3getcolumn%28____%29.md): Retrieves a column from a `3x3` matrix.
- [GLKMatrix3GetRow(\_:\_:)](glkmatrix3getrow%28____%29.md): Retrieves a row from a `3x3` matrix.
- [GLKMatrix3SetColumn(\_:\_:\_:)](glkmatrix3setcolumn%28______%29.md): Returns a new `3x3` matrix with one column replaced by a new vector.
- [GLKMatrix3SetRow(\_:\_:\_:)](glkmatrix3setrow%28______%29.md): Returns a new `3x3` matrix with one row replaced by a new vector.

# GLKMatrix3GetMatrix2 (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns the upper-left `2x2` section of a `3x3` matrix.

## Declaration

```objectivec
static GLKMatrix2 GLKMatrix3GetMatrix2(GLKMatrix3 matrix);
```

## Parameters

- `matrix`: A matrix.

<a id="return-value"></a>

## Return Value

A new `2x2` matrix.

## See Also

### Working With Parts of a Matrix

- [GLKMatrix3GetColumn](glkmatrix3getcolumn%28____%29.md): Retrieves a column from a `3x3` matrix.
- [GLKMatrix3GetRow](glkmatrix3getrow%28____%29.md): Retrieves a row from a `3x3` matrix.
- [GLKMatrix3SetColumn](glkmatrix3setcolumn%28______%29.md): Returns a new `3x3` matrix with one column replaced by a new vector.
- [GLKMatrix3SetRow](glkmatrix3setrow%28______%29.md): Returns a new `3x3` matrix with one row replaced by a new vector.
