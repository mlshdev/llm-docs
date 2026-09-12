> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/look(at:)](https://developer.apple.com/documentation/scenekit/scnnode/look(at:))

# look(at:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Changes the node’s orientation so that its local forward vector points toward the specified location.

## Declaration

```swift
func look(at worldTarget: SCNVector3)
```

## Parameters

- `worldTarget`: The point, in world space, to face the node toward.

<a id="Discussion"></a>

## Discussion

Using this method is equivalent to calling the [look(at:up:localFront:)](look%28at_up_localfront_%29.md) method and passing the node’s [worldUp](worldup.md) and [localFront](localfront.md) vectors for the corresponding parameters.

The effects of this method are animatable; that is, calling this method during an implicit-animation transaction animates the rotation effect. (See [Animating SceneKit Content](../animating-scenekit-content.md).)

## See Also

### Related Documentation

- [simdLook(at:)](simdlook%28at_%29.md): Changes the node’s orientation so that its local forward vector points toward the specified location.

### Performing Node-Relative Operations (SceneKit Types)

- [rotate(by:aroundTarget:)](rotate%28by_aroundtarget_%29.md): Changes the node’s position and orientation, relative to its current transform, through a rotation around the specified point in scene space.
- [localTranslate(by:)](localtranslate%28by_%29.md): Changes the node’s position relative to its current position.
- [localRotate(by:)](localrotate%28by_%29.md): Changes the node’s orientation relative to its current orientation.
- [look(at:up:localFront:)](look%28at_up_localfront_%29.md): Changes the node’s orientation so that the specified forward vector points toward the specified location.

# lookAt: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Changes the node’s orientation so that its local forward vector points toward the specified location.

## Declaration

```objectivec
- (void) lookAt:(SCNVector3) worldTarget;
```

## Parameters

- `worldTarget`: The point, in world space, to face the node toward.

<a id="Discussion"></a>

## Discussion

Using this method is equivalent to calling the [lookAt:up:localFront:](look%28at_up_localfront_%29.md) method and passing the node’s [worldUp](worldup.md) and [localFront](localfront.md) vectors for the corresponding parameters.

The effects of this method are animatable; that is, calling this method during an implicit-animation transaction animates the rotation effect. (See [Animating SceneKit Content](../animating-scenekit-content.md).)

## See Also

### Related Documentation

- [simdLookAt:](simdlook%28at_%29.md): Changes the node’s orientation so that its local forward vector points toward the specified location.

### Performing Node-Relative Operations (SceneKit Types)

- [rotateBy:aroundTarget:](rotate%28by_aroundtarget_%29.md): Changes the node’s position and orientation, relative to its current transform, through a rotation around the specified point in scene space.
- [localTranslateBy:](localtranslate%28by_%29.md): Changes the node’s position relative to its current position.
- [localRotateBy:](localrotate%28by_%29.md): Changes the node’s orientation relative to its current orientation.
- [lookAt:up:localFront:](look%28at_up_localfront_%29.md): Changes the node’s orientation so that the specified forward vector points toward the specified location.
