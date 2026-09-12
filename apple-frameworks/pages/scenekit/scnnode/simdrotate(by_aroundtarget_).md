> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/simdrotate(by:aroundtarget:)](https://developer.apple.com/documentation/scenekit/scnnode/simdrotate(by:aroundtarget:))

# simdRotate(by:aroundTarget:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Changes the node’s position and orientation, relative to its current transform, through a rotation around the specified point in scene space.

## Declaration

```swift
func simdRotate(by worldRotation: simd_quatf, aroundTarget worldTarget: simd_float3)
```

## Parameters

- `worldRotation`: The axis and angle of rotation to apply, in scene space, expressed as a quaternion.
- `worldTarget`: The center point, in scene space, about which to rotate.

<a id="Discussion"></a>

## Discussion

The effects of this method are animatable; that is, calling this method during an implicit-animation transaction animates the rotation effect. (See [Animating SceneKit Content](../animating-scenekit-content.md).)

## See Also

### Related Documentation

- [rotate(by:aroundTarget:)](rotate%28by_aroundtarget_%29.md): Changes the node’s position and orientation, relative to its current transform, through a rotation around the specified point in scene space.

### Performing Node-Relative Operations

- [simdLocalTranslate(by:)](simdlocaltranslate%28by_%29.md): Changes the node’s position relative to its current position.
- [simdLocalRotate(by:)](simdlocalrotate%28by_%29.md): Changes the node’s orientation relative to its current orientation.
- [simdLook(at:)](simdlook%28at_%29.md): Changes the node’s orientation so that its local forward vector points toward the specified location.
- [simdLook(at:up:localFront:)](simdlook%28at_up_localfront_%29.md): Changes the node’s orientation so that the specified forward vector points toward the specified location.

# simdRotateBy:aroundTarget: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Changes the node’s position and orientation, relative to its current transform, through a rotation around the specified point in scene space.

## Declaration

```objectivec
- (void) simdRotateBy:(simd_quatf) worldRotation aroundTarget:(simd_float3) worldTarget;
```

## Parameters

- `worldRotation`: The axis and angle of rotation to apply, in scene space, expressed as a quaternion.
- `worldTarget`: The center point, in scene space, about which to rotate.

<a id="Discussion"></a>

## Discussion

The effects of this method are animatable; that is, calling this method during an implicit-animation transaction animates the rotation effect. (See [Animating SceneKit Content](../animating-scenekit-content.md).)

## See Also

### Related Documentation

- [rotateBy:aroundTarget:](rotate%28by_aroundtarget_%29.md): Changes the node’s position and orientation, relative to its current transform, through a rotation around the specified point in scene space.

### Performing Node-Relative Operations

- [simdLocalTranslateBy:](simdlocaltranslate%28by_%29.md): Changes the node’s position relative to its current position.
- [simdLocalRotateBy:](simdlocalrotate%28by_%29.md): Changes the node’s orientation relative to its current orientation.
- [simdLookAt:](simdlook%28at_%29.md): Changes the node’s orientation so that its local forward vector points toward the specified location.
- [simdLookAt:up:localFront:](simdlook%28at_up_localfront_%29.md): Changes the node’s orientation so that the specified forward vector points toward the specified location.
