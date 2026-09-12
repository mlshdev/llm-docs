> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmatrix4toglkmatrix4(_:)](https://developer.apple.com/documentation/scenekit/scnmatrix4toglkmatrix4(_:))

# SCNMatrix4ToGLKMatrix4(\_:) (Swift)

**Framework:** SceneKit  
**Kind:** Function  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Returns a GLKit matrix corresponding to a SceneKit matrix.

## Declaration

```swift
func SCNMatrix4ToGLKMatrix4(_ mat: SCNMatrix4) -> GLKMatrix4
```

```swift
func SCNMatrix4ToGLKMatrix4(_ mat: SCNMatrix4) -> GLKMatrix4
```

## Parameters

- `mat`: A SceneKit matrix.

<a id="return-value"></a>

## Return Value

A GLKit matrix representing the same 3D transformation.

## See Also

### Converting Matrix Types

- [SCNMatrix4FromGLKMatrix4(\_:)](scnmatrix4fromglkmatrix4%28__%29.md): Returns a SceneKit matrix corresponding to a GLKit matrix.

# SCNMatrix4ToGLKMatrix4 (Objective-C)

**Framework:** SceneKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · macOS 10.10+ · tvOS

Returns a GLKit matrix corresponding to a SceneKit matrix.

## Declaration

```objectivec
extern GLKMatrix4 SCNMatrix4ToGLKMatrix4(SCNMatrix4 mat);
```

```objectivec
extern GLKMatrix4 SCNMatrix4ToGLKMatrix4(SCNMatrix4 mat);
```

## Parameters

- `mat`: A SceneKit matrix.

<a id="return-value"></a>

## Return Value

A GLKit matrix representing the same 3D transformation.

## See Also

### Converting Matrix Types

- [SCNMatrix4FromGLKMatrix4](scnmatrix4fromglkmatrix4%28__%29.md): Returns a SceneKit matrix corresponding to a GLKit matrix.
