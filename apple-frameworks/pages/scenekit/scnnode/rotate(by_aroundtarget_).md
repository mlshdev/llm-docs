> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/rotate(by:aroundtarget:)](https://developer.apple.com/documentation/scenekit/scnnode/rotate(by:aroundtarget:))

# rotate(by:aroundTarget:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Changes the node’s position and orientation, relative to its current transform, through a rotation around the specified point in scene space.

## Declaration

```swift
func rotate(by worldRotation: SCNQuaternion, aroundTarget worldTarget: SCNVector3)
```

## Parameters

- `worldRotation`: The axis and angle of rotation to apply, in scene space, expressed as a quaternion.
- `worldTarget`: The center point, in scene space, about which to rotate.

<a id="Discussion"></a>

## Discussion

The effects of this method are animatable; that is, calling this method during an implicit-animation transaction animates the rotation effect. (See [Animating SceneKit Content](../animating-scenekit-content.md).)

## See Also

### Related Documentation

- [simdRotate(by:aroundTarget:)](simdrotate%28by_aroundtarget_%29.md): Changes the node’s position and orientation, relative to its current transform, through a rotation around the specified point in scene space.

### Performing Node-Relative Operations (SceneKit Types)

- [localTranslate(by:)](localtranslate%28by_%29.md): Changes the node’s position relative to its current position.
- [localRotate(by:)](localrotate%28by_%29.md): Changes the node’s orientation relative to its current orientation.
- [look(at:)](look%28at_%29.md): Changes the node’s orientation so that its local forward vector points toward the specified location.
- [look(at:up:localFront:)](look%28at_up_localfront_%29.md): Changes the node’s orientation so that the specified forward vector points toward the specified location.

# rotateBy:aroundTarget: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Changes the node’s position and orientation, relative to its current transform, through a rotation around the specified point in scene space.

## Declaration

```objectivec
- (void) rotateBy:(SCNQuaternion) worldRotation aroundTarget:(SCNVector3) worldTarget;
```

## Parameters

- `worldRotation`: The axis and angle of rotation to apply, in scene space, expressed as a quaternion.
- `worldTarget`: The center point, in scene space, about which to rotate.

<a id="Discussion"></a>

## Discussion

The effects of this method are animatable; that is, calling this method during an implicit-animation transaction animates the rotation effect. (See [Animating SceneKit Content](../animating-scenekit-content.md).)

## See Also

### Related Documentation

- [simdRotateBy:aroundTarget:](simdrotate%28by_aroundtarget_%29.md): Changes the node’s position and orientation, relative to its current transform, through a rotation around the specified point in scene space.

### Performing Node-Relative Operations (SceneKit Types)

- [localTranslateBy:](localtranslate%28by_%29.md): Changes the node’s position relative to its current position.
- [localRotateBy:](localrotate%28by_%29.md): Changes the node’s orientation relative to its current orientation.
- [lookAt:](look%28at_%29.md): Changes the node’s orientation so that its local forward vector points toward the specified location.
- [lookAt:up:localFront:](look%28at_up_localfront_%29.md): Changes the node’s orientation so that the specified forward vector points toward the specified location.
