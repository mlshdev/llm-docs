> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/simdlocalrotate(by:)](https://developer.apple.com/documentation/scenekit/scnnode/simdlocalrotate(by:))

# simdLocalRotate(by:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Changes the node’s orientation relative to its current orientation.

## Declaration

```swift
func simdLocalRotate(by rotation: simd_quatf)
```

## Parameters

- `rotation`: The axis and angle of rotation to apply, in node-local space, expressed as a quaternion.

<a id="Discussion"></a>

## Discussion

This method rotates the node according to its [simdPivot](simdpivot.md) transform.

The effects of this method are animatable; that is, calling this method during an implicit-animation transaction animates the rotation effect. (See [Animating SceneKit Content](../animating-scenekit-content.md).)

## See Also

### Related Documentation

- [localRotate(by:)](localrotate%28by_%29.md): Changes the node’s orientation relative to its current orientation.

### Performing Node-Relative Operations

- [simdRotate(by:aroundTarget:)](simdrotate%28by_aroundtarget_%29.md): Changes the node’s position and orientation, relative to its current transform, through a rotation around the specified point in scene space.
- [simdLocalTranslate(by:)](simdlocaltranslate%28by_%29.md): Changes the node’s position relative to its current position.
- [simdLook(at:)](simdlook%28at_%29.md): Changes the node’s orientation so that its local forward vector points toward the specified location.
- [simdLook(at:up:localFront:)](simdlook%28at_up_localfront_%29.md): Changes the node’s orientation so that the specified forward vector points toward the specified location.

# simdLocalRotateBy: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Changes the node’s orientation relative to its current orientation.

## Declaration

```objectivec
- (void) simdLocalRotateBy:(simd_quatf) rotation;
```

## Parameters

- `rotation`: The axis and angle of rotation to apply, in node-local space, expressed as a quaternion.

<a id="Discussion"></a>

## Discussion

This method rotates the node according to its [simdPivot](simdpivot.md) transform.

The effects of this method are animatable; that is, calling this method during an implicit-animation transaction animates the rotation effect. (See [Animating SceneKit Content](../animating-scenekit-content.md).)

## See Also

### Related Documentation

- [localRotateBy:](localrotate%28by_%29.md): Changes the node’s orientation relative to its current orientation.

### Performing Node-Relative Operations

- [simdRotateBy:aroundTarget:](simdrotate%28by_aroundtarget_%29.md): Changes the node’s position and orientation, relative to its current transform, through a rotation around the specified point in scene space.
- [simdLocalTranslateBy:](simdlocaltranslate%28by_%29.md): Changes the node’s position relative to its current position.
- [simdLookAt:](simdlook%28at_%29.md): Changes the node’s orientation so that its local forward vector points toward the specified location.
- [simdLookAt:up:localFront:](simdlook%28at_up_localfront_%29.md): Changes the node’s orientation so that the specified forward vector points toward the specified location.
