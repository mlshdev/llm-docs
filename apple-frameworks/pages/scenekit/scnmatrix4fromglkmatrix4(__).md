> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmatrix4fromglkmatrix4(_:)](https://developer.apple.com/documentation/scenekit/scnmatrix4fromglkmatrix4(_:))

# SCNMatrix4FromGLKMatrix4(\_:) (Swift)

**Framework:** SceneKit  
**Kind:** Function  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Returns a SceneKit matrix corresponding to a GLKit matrix.

## Declaration

```swift
func SCNMatrix4FromGLKMatrix4(_ mat: GLKMatrix4) -> SCNMatrix4
```

```swift
func SCNMatrix4FromGLKMatrix4(_ mat: GLKMatrix4) -> SCNMatrix4
```

## Parameters

- `mat`: A GLKit matrix.

<a id="return-value"></a>

## Return Value

A SceneKit matrix representing the same 3D transformation.

## See Also

### Converting Matrix Types

- [SCNMatrix4ToGLKMatrix4(\_:)](scnmatrix4toglkmatrix4%28__%29.md): Returns a GLKit matrix corresponding to a SceneKit matrix.

# SCNMatrix4FromGLKMatrix4 (Objective-C)

**Framework:** SceneKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · macOS 10.10+ · tvOS

Returns a SceneKit matrix corresponding to a GLKit matrix.

## Declaration

```objectivec
extern SCNMatrix4 SCNMatrix4FromGLKMatrix4(GLKMatrix4 mat);
```

```objectivec
extern SCNMatrix4 SCNMatrix4FromGLKMatrix4(GLKMatrix4 mat);
```

## Parameters

- `mat`: A GLKit matrix.

<a id="return-value"></a>

## Return Value

A SceneKit matrix representing the same 3D transformation.

## See Also

### Converting Matrix Types

- [SCNMatrix4ToGLKMatrix4](scnmatrix4toglkmatrix4%28__%29.md): Returns a GLKit matrix corresponding to a SceneKit matrix.
