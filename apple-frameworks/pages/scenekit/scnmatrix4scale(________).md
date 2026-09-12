> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmatrix4scale(_:_:_:_:)](https://developer.apple.com/documentation/scenekit/scnmatrix4scale(_:_:_:_:))

# SCNMatrix4Scale(\_:\_:\_:\_:) (Swift)

**Framework:** SceneKit  
**Kind:** Function  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Returns a new matrix created by concatenating the specified matrix with a scale transformation.

## Declaration

```swift
func SCNMatrix4Scale(_ m: SCNMatrix4, _ sx: Float, _ sy: Float, _ sz: Float) -> SCNMatrix4
```

```swift
func SCNMatrix4Scale(_ m: SCNMatrix4, _ sx: CGFloat, _ sy: CGFloat, _ sz: CGFloat) -> SCNMatrix4
```

## Parameters

- `m`: The matrix to be combined with a translation.
- `sx`: The scale factor in the x-axis direction.
- `sy`: The scale factor in the y-axis direction.
- `sz`: The scale factor in the z-axis direction.

<a id="return-value"></a>

## Return Value

A new matrix.

<a id="Discussion"></a>

## Discussion

The resulting transformation consists of the specified scale followed by the transformation represented by the `mat` parameter.

## See Also

### Performing Matrix Operations

- [SCNMatrix4Translate(\_:\_:\_:\_:)](scnmatrix4translate%28________%29.md): Returns a new matrix created by concatenating the specified matrix with a translation transformation.
- [SCNMatrix4Rotate(\_:\_:\_:\_:\_:)](scnmatrix4rotate%28__________%29.md): Returns a new matrix created by concatenating the specified matrix with a rotation transformation.
- [SCNMatrix4Invert(\_:)](scnmatrix4invert%28__%29.md): Returns the inverse of the specified matrix.
- [SCNMatrix4Mult(\_:\_:)](scnmatrix4mult%28____%29.md): Returns the product of two matrices.

# SCNMatrix4Scale (Objective-C)

**Framework:** SceneKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Returns a new matrix created by concatenating the specified matrix with a scale transformation.

## Declaration

```objectivec
extern SCNMatrix4 SCNMatrix4Scale(SCNMatrix4 m, float sx, float sy, float sz);
```

```objectivec
extern SCNMatrix4 SCNMatrix4Scale(SCNMatrix4 m, CGFloat sx, CGFloat sy, CGFloat sz);
```

## Parameters

- `m`: The matrix to be combined with a translation.
- `sx`: The scale factor in the x-axis direction.
- `sy`: The scale factor in the y-axis direction.
- `sz`: The scale factor in the z-axis direction.

<a id="return-value"></a>

## Return Value

A new matrix.

<a id="Discussion"></a>

## Discussion

The resulting transformation consists of the specified scale followed by the transformation represented by the `mat` parameter.

## See Also

### Performing Matrix Operations

- [SCNMatrix4Translate](scnmatrix4translate%28________%29.md): Returns a new matrix created by concatenating the specified matrix with a translation transformation.
- [SCNMatrix4Rotate](scnmatrix4rotate%28__________%29.md): Returns a new matrix created by concatenating the specified matrix with a rotation transformation.
- [SCNMatrix4Invert](scnmatrix4invert%28__%29.md): Returns the inverse of the specified matrix.
- [SCNMatrix4Mult](scnmatrix4mult%28____%29.md): Returns the product of two matrices.
