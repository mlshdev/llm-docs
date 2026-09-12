> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/simdlook(at:up:localfront:)](https://developer.apple.com/documentation/scenekit/scnnode/simdlook(at:up:localfront:))

# simdLook(at:up:localFront:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Changes the node’s orientation so that the specified forward vector points toward the specified location.

## Declaration

```swift
func simdLook(at worldTarget: simd_float3, up worldUp: simd_float3, localFront: simd_float3)
```

## Parameters

- `worldTarget`: The point, in world space, to face the node toward.
- `worldUp`: The direction vector, in world space, that should appear as “up” from the rotated node’s point of view.
- `localFront`: The direction vector, in the node’s local space, that should orient toward the target point.

<a id="Discussion"></a>

## Discussion

The effects of this method are animatable; that is, calling this method during an implicit-animation transaction animates the rotation effect. (See [Animating SceneKit Content](../animating-scenekit-content.md).)

## See Also

### Related Documentation

- [look(at:up:localFront:)](look%28at_up_localfront_%29.md): Changes the node’s orientation so that the specified forward vector points toward the specified location.

### Performing Node-Relative Operations

- [simdRotate(by:aroundTarget:)](simdrotate%28by_aroundtarget_%29.md): Changes the node’s position and orientation, relative to its current transform, through a rotation around the specified point in scene space.
- [simdLocalTranslate(by:)](simdlocaltranslate%28by_%29.md): Changes the node’s position relative to its current position.
- [simdLocalRotate(by:)](simdlocalrotate%28by_%29.md): Changes the node’s orientation relative to its current orientation.
- [simdLook(at:)](simdlook%28at_%29.md): Changes the node’s orientation so that its local forward vector points toward the specified location.

# simdLookAt:up:localFront: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Changes the node’s orientation so that the specified forward vector points toward the specified location.

## Declaration

```objectivec
- (void) simdLookAt:(simd_float3) worldTarget up:(simd_float3) worldUp localFront:(simd_float3) localFront;
```

## Parameters

- `worldTarget`: The point, in world space, to face the node toward.
- `worldUp`: The direction vector, in world space, that should appear as “up” from the rotated node’s point of view.
- `localFront`: The direction vector, in the node’s local space, that should orient toward the target point.

<a id="Discussion"></a>

## Discussion

The effects of this method are animatable; that is, calling this method during an implicit-animation transaction animates the rotation effect. (See [Animating SceneKit Content](../animating-scenekit-content.md).)

## See Also

### Related Documentation

- [lookAt:up:localFront:](look%28at_up_localfront_%29.md): Changes the node’s orientation so that the specified forward vector points toward the specified location.

### Performing Node-Relative Operations

- [simdRotateBy:aroundTarget:](simdrotate%28by_aroundtarget_%29.md): Changes the node’s position and orientation, relative to its current transform, through a rotation around the specified point in scene space.
- [simdLocalTranslateBy:](simdlocaltranslate%28by_%29.md): Changes the node’s position relative to its current position.
- [simdLocalRotateBy:](simdlocalrotate%28by_%29.md): Changes the node’s orientation relative to its current orientation.
- [simdLookAt:](simdlook%28at_%29.md): Changes the node’s orientation so that its local forward vector points toward the specified location.
