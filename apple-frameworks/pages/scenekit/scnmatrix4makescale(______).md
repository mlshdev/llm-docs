> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmatrix4makescale(_:_:_:)](https://developer.apple.com/documentation/scenekit/scnmatrix4makescale(_:_:_:))

# SCNMatrix4MakeScale(\_:\_:\_:) (Swift)

**Framework:** SceneKit  
**Kind:** Function  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Returns a matrix describing a scale transformation.

## Declaration

```swift
func SCNMatrix4MakeScale(_ sx: Float, _ sy: Float, _ sz: Float) -> SCNMatrix4
```

```swift
func SCNMatrix4MakeScale(_ sx: CGFloat, _ sy: CGFloat, _ sz: CGFloat) -> SCNMatrix4
```

## Parameters

- `sx`: The scale factor in the x-axis direction.
- `sy`: The scale factor in the y-axis direction.
- `sz`: The scale factor in the z-axis direction.

<a id="return-value"></a>

## Return Value

A new scale matrix.

## See Also

### Creating Transform Matrices

- [SCNMatrix4MakeTranslation(\_:\_:\_:)](scnmatrix4maketranslation%28______%29.md): Returns a matrix describing a translation transformation.
- [SCNMatrix4MakeRotation(\_:\_:\_:\_:)](scnmatrix4makerotation%28________%29.md): Returns a matrix describing a rotation transformation.

# SCNMatrix4MakeScale (Objective-C)

**Framework:** SceneKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a matrix describing a scale transformation.

## Declaration

```objectivec
static SCNMatrix4 SCNMatrix4MakeScale(float sx, float sy, float sz);
```

```objectivec
static SCNMatrix4 SCNMatrix4MakeScale(CGFloat sx, CGFloat sy, CGFloat sz);
```

## Parameters

- `sx`: The scale factor in the x-axis direction.
- `sy`: The scale factor in the y-axis direction.
- `sz`: The scale factor in the z-axis direction.

<a id="return-value"></a>

## Return Value

A new scale matrix.

## See Also

### Creating Transform Matrices

- [SCNMatrix4MakeTranslation](scnmatrix4maketranslation%28______%29.md): Returns a matrix describing a translation transformation.
- [SCNMatrix4MakeRotation](scnmatrix4makerotation%28________%29.md): Returns a matrix describing a rotation transformation.
