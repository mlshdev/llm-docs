> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmatrix4maketranslation(_:_:_:)](https://developer.apple.com/documentation/scenekit/scnmatrix4maketranslation(_:_:_:))

# SCNMatrix4MakeTranslation(\_:\_:\_:) (Swift)

**Framework:** SceneKit  
**Kind:** Function  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Returns a matrix describing a translation transformation.

## Declaration

```swift
func SCNMatrix4MakeTranslation(_ tx: Float, _ ty: Float, _ tz: Float) -> SCNMatrix4
```

```swift
func SCNMatrix4MakeTranslation(_ tx: CGFloat, _ ty: CGFloat, _ tz: CGFloat) -> SCNMatrix4
```

## Parameters

- `tx`: The translation distance in the x-axis direction.
- `ty`: The translation distance in the y-axis direction.
- `tz`: The translation distance in the z-axis direction.

<a id="return-value"></a>

## Return Value

A new translation matrix.

## See Also

### Creating Transform Matrices

- [SCNMatrix4MakeRotation(\_:\_:\_:\_:)](scnmatrix4makerotation%28________%29.md): Returns a matrix describing a rotation transformation.
- [SCNMatrix4MakeScale(\_:\_:\_:)](scnmatrix4makescale%28______%29.md): Returns a matrix describing a scale transformation.

# SCNMatrix4MakeTranslation (Objective-C)

**Framework:** SceneKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a matrix describing a translation transformation.

## Declaration

```objectivec
static SCNMatrix4 SCNMatrix4MakeTranslation(float tx, float ty, float tz);
```

```objectivec
static SCNMatrix4 SCNMatrix4MakeTranslation(CGFloat tx, CGFloat ty, CGFloat tz);
```

## Parameters

- `tx`: The translation distance in the x-axis direction.
- `ty`: The translation distance in the y-axis direction.
- `tz`: The translation distance in the z-axis direction.

<a id="return-value"></a>

## Return Value

A new translation matrix.

## See Also

### Creating Transform Matrices

- [SCNMatrix4MakeRotation](scnmatrix4makerotation%28________%29.md): Returns a matrix describing a rotation transformation.
- [SCNMatrix4MakeScale](scnmatrix4makescale%28______%29.md): Returns a matrix describing a scale transformation.
