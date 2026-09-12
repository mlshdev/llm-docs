> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnvector4toglkvector4(_:)](https://developer.apple.com/documentation/scenekit/scnvector4toglkvector4(_:))

# SCNVector4ToGLKVector4(\_:) (Swift)

**Framework:** SceneKit  
**Kind:** Function  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Returns a four-element GLKit vector structure corresponding to a SceneKit vector structure.

## Declaration

```swift
func SCNVector4ToGLKVector4(_ vector: SCNVector4) -> GLKVector4
```

## Parameters

- `vector`: A four-element SceneKit vector structure.

<a id="return-value"></a>

## Return Value

A four-element GLKit vector structure representing the same vector as the input parameter.

## See Also

### Converting Vector Types

- [SCNVector4FromGLKVector4(\_:)](scnvector4fromglkvector4%28__%29.md): Returns a four-element SceneKit vector structure corresponding to a GLKit vector structure.

# SCNVector4ToGLKVector4 (Objective-C)

**Framework:** SceneKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · macOS · tvOS

Returns a four-element GLKit vector structure corresponding to a SceneKit vector structure.

## Declaration

```objectivec
static GLKVector4 SCNVector4ToGLKVector4(SCNVector4 vector);
```

## Parameters

- `vector`: A four-element SceneKit vector structure.

<a id="return-value"></a>

## Return Value

A four-element GLKit vector structure representing the same vector as the input parameter.

## See Also

### Converting Vector Types

- [SCNVector4FromGLKVector4](scnvector4fromglkvector4%28__%29.md): Returns a four-element SceneKit vector structure corresponding to a GLKit vector structure.
- [SCNVector4FromFloat4](scnvector4fromfloat4.md): Deprecated.
- [SCNVector4ToFloat4](scnvector4tofloat4.md): Deprecated.
