> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkmatrix4getmatrix2(_:)](https://developer.apple.com/documentation/glkit/glkmatrix4getmatrix2(_:))

# GLKMatrix4GetMatrix2(\_:) (Swift)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns the upper-left `2x2` section of a `4x4` matrix.

## Declaration

```swift
func GLKMatrix4GetMatrix2(_ matrix: GLKMatrix4) -> GLKMatrix2
```

## Parameters

- `matrix`: A `4x4` matrix.

<a id="return-value"></a>

## Return Value

A new `2x2` matrix.

## See Also

### Working With Parts of a Matrix

- [GLKMatrix4GetMatrix3(\_:)](glkmatrix4getmatrix3%28__%29.md): Returns the upper-left `3x3` section of a `4x4` matrix.
- [GLKMatrix4GetColumn(\_:\_:)](glkmatrix4getcolumn%28____%29.md): Retrieves a column from a `4x4` matrix.
- [GLKMatrix4GetRow(\_:\_:)](glkmatrix4getrow%28____%29.md): Retrieves a row from a `4x4` matrix.
- [GLKMatrix4SetColumn(\_:\_:\_:)](glkmatrix4setcolumn%28______%29.md): Returns a new `4x4` matrix with one column replaced by a new vector.
- [GLKMatrix4SetRow(\_:\_:\_:)](glkmatrix4setrow%28______%29.md): Returns a new `4x4` matrix with one row replaced by a new vector.

# GLKMatrix4GetMatrix2 (Objective-C)

**Framework:** GLKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Returns the upper-left `2x2` section of a `4x4` matrix.

## Declaration

```objectivec
static GLKMatrix2 GLKMatrix4GetMatrix2(GLKMatrix4 matrix);
```

## Parameters

- `matrix`: A `4x4` matrix.

<a id="return-value"></a>

## Return Value

A new `2x2` matrix.

## See Also

### Working With Parts of a Matrix

- [GLKMatrix4GetMatrix3](glkmatrix4getmatrix3%28__%29.md): Returns the upper-left `3x3` section of a `4x4` matrix.
- [GLKMatrix4GetColumn](glkmatrix4getcolumn%28____%29.md): Retrieves a column from a `4x4` matrix.
- [GLKMatrix4GetRow](glkmatrix4getrow%28____%29.md): Retrieves a row from a `4x4` matrix.
- [GLKMatrix4SetColumn](glkmatrix4setcolumn%28______%29.md): Returns a new `4x4` matrix with one column replaced by a new vector.
- [GLKMatrix4SetRow](glkmatrix4setrow%28______%29.md): Returns a new `4x4` matrix with one row replaced by a new vector.
