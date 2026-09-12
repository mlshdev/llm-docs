> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmatrix4makerotation(_:_:_:_:)](https://developer.apple.com/documentation/scenekit/scnmatrix4makerotation(_:_:_:_:))

# SCNMatrix4MakeRotation(\_:\_:\_:\_:) (Swift)

**Framework:** SceneKit  
**Kind:** Function  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Returns a matrix describing a rotation transformation.

## Declaration

```swift
func SCNMatrix4MakeRotation(_ angle: Float, _ x: Float, _ y: Float, _ z: Float) -> SCNMatrix4
```

```swift
func SCNMatrix4MakeRotation(_ angle: CGFloat, _ x: CGFloat, _ y: CGFloat, _ z: CGFloat) -> SCNMatrix4
```

## Parameters

- `angle`: The amount of rotation, in radians, measured counterclockwise around the rotation axis.
- `x`: The x-component of the rotation axis.
- `y`: The y-component of the rotation axis.
- `z`: The z-component of the rotation axis.

<a id="return-value"></a>

## Return Value

A new rotation matrix.

## See Also

### Creating Transform Matrices

- [SCNMatrix4MakeTranslation(\_:\_:\_:)](scnmatrix4maketranslation%28______%29.md): Returns a matrix describing a translation transformation.
- [SCNMatrix4MakeScale(\_:\_:\_:)](scnmatrix4makescale%28______%29.md): Returns a matrix describing a scale transformation.

# SCNMatrix4MakeRotation (Objective-C)

**Framework:** SceneKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Returns a matrix describing a rotation transformation.

## Declaration

```objectivec
extern SCNMatrix4 SCNMatrix4MakeRotation(float angle, float x, float y, float z);
```

```objectivec
extern SCNMatrix4 SCNMatrix4MakeRotation(CGFloat angle, CGFloat x, CGFloat y, CGFloat z);
```

## Parameters

- `angle`: The amount of rotation, in radians, measured counterclockwise around the rotation axis.
- `x`: The x-component of the rotation axis.
- `y`: The y-component of the rotation axis.
- `z`: The z-component of the rotation axis.

<a id="return-value"></a>

## Return Value

A new rotation matrix.

## See Also

### Creating Transform Matrices

- [SCNMatrix4MakeTranslation](scnmatrix4maketranslation%28______%29.md): Returns a matrix describing a translation transformation.
- [SCNMatrix4MakeScale](scnmatrix4makescale%28______%29.md): Returns a matrix describing a scale transformation.
