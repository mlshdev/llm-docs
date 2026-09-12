> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnvector3fromglkvector3(_:)](https://developer.apple.com/documentation/scenekit/scnvector3fromglkvector3(_:))

# SCNVector3FromGLKVector3(\_:) (Swift)

**Framework:** SceneKit  
**Kind:** Function  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Returns a three-element SceneKit vector structure corresponding to a GLKit vector structure.

## Declaration

```swift
func SCNVector3FromGLKVector3(_ vector: GLKVector3) -> SCNVector3
```

## Parameters

- `vector`: A three-element GLKit vector structure.

<a id="return-value"></a>

## Return Value

A three-element SceneKit vector structure representing the same vector as the input parameter.

## See Also

### Converting Vector Types

- [SCNVector3ToGLKVector3(\_:)](scnvector3toglkvector3%28__%29.md): Returns a three-element GLKit vector structure corresponding to a SceneKit vector structure.

# SCNVector3FromGLKVector3 (Objective-C)

**Framework:** SceneKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · macOS · tvOS

Returns a three-element SceneKit vector structure corresponding to a GLKit vector structure.

## Declaration

```objectivec
static SCNVector3 SCNVector3FromGLKVector3(GLKVector3 vector);
```

## Parameters

- `vector`: A three-element GLKit vector structure.

<a id="return-value"></a>

## Return Value

A three-element SceneKit vector structure representing the same vector as the input parameter.

## See Also

### Converting Vector Types

- [SCNVector3ToGLKVector3](scnvector3toglkvector3%28__%29.md): Returns a three-element GLKit vector structure corresponding to a SceneKit vector structure.
- [SCNVector3FromFloat3](scnvector3fromfloat3.md): Deprecated.
- [SCNVector3ToFloat3](scnvector3tofloat3.md): Deprecated.
