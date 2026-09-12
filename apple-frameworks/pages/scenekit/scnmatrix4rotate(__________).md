> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmatrix4rotate(_:_:_:_:_:)](https://developer.apple.com/documentation/scenekit/scnmatrix4rotate(_:_:_:_:_:))

# SCNMatrix4Rotate(\_:\_:\_:\_:\_:) (Swift)

**Framework:** SceneKit  
**Kind:** Function  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Returns a new matrix created by concatenating the specified matrix with a rotation transformation.

## Declaration

```swift
func SCNMatrix4Rotate(_ m: SCNMatrix4, _ angle: Float, _ x: Float, _ y: Float, _ z: Float) -> SCNMatrix4
```

```swift
func SCNMatrix4Rotate(_ m: SCNMatrix4, _ angle: CGFloat, _ x: CGFloat, _ y: CGFloat, _ z: CGFloat) -> SCNMatrix4
```

## Parameters

- `m`: The matrix to be combined with a rotation.
- `angle`: The amount of rotation, in radians, measured counterclockwise around the rotation axis.
- `x`: The x-component of the rotation axis.
- `y`: The y-component of the rotation axis.
- `z`: The z-component of the rotation axis.

<a id="return-value"></a>

## Return Value

A new matrix.

<a id="Discussion"></a>

## Discussion

The resulting transformation consists of the specified rotation followed by the transformation represented by the `mat` parameter.

## See Also

### Performing Matrix Operations

- [SCNMatrix4Translate(\_:\_:\_:\_:)](scnmatrix4translate%28________%29.md): Returns a new matrix created by concatenating the specified matrix with a translation transformation.
- [SCNMatrix4Scale(\_:\_:\_:\_:)](scnmatrix4scale%28________%29.md): Returns a new matrix created by concatenating the specified matrix with a scale transformation.
- [SCNMatrix4Invert(\_:)](scnmatrix4invert%28__%29.md): Returns the inverse of the specified matrix.
- [SCNMatrix4Mult(\_:\_:)](scnmatrix4mult%28____%29.md): Returns the product of two matrices.

# SCNMatrix4Rotate (Objective-C)

**Framework:** SceneKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Returns a new matrix created by concatenating the specified matrix with a rotation transformation.

## Declaration

```objectivec
extern SCNMatrix4 SCNMatrix4Rotate(SCNMatrix4 m, float angle, float x, float y, float z);
```

```objectivec
extern SCNMatrix4 SCNMatrix4Rotate(SCNMatrix4 m, CGFloat angle, CGFloat x, CGFloat y, CGFloat z);
```

## Parameters

- `m`: The matrix to be combined with a rotation.
- `angle`: The amount of rotation, in radians, measured counterclockwise around the rotation axis.
- `x`: The x-component of the rotation axis.
- `y`: The y-component of the rotation axis.
- `z`: The z-component of the rotation axis.

<a id="return-value"></a>

## Return Value

A new matrix.

<a id="Discussion"></a>

## Discussion

The resulting transformation consists of the specified rotation followed by the transformation represented by the `mat` parameter.

## See Also

### Performing Matrix Operations

- [SCNMatrix4Translate](scnmatrix4translate%28________%29.md): Returns a new matrix created by concatenating the specified matrix with a translation transformation.
- [SCNMatrix4Scale](scnmatrix4scale%28________%29.md): Returns a new matrix created by concatenating the specified matrix with a scale transformation.
- [SCNMatrix4Invert](scnmatrix4invert%28__%29.md): Returns the inverse of the specified matrix.
- [SCNMatrix4Mult](scnmatrix4mult%28____%29.md): Returns the product of two matrices.
