> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/simdlocaltranslate(by:)](https://developer.apple.com/documentation/scenekit/scnnode/simdlocaltranslate(by:))

# simdLocalTranslate(by:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Changes the node’s position relative to its current position.

## Declaration

```swift
func simdLocalTranslate(by translation: simd_float3)
```

## Parameters

- `translation`: The distance, in node-local space, by which to move the node.

<a id="Discussion"></a>

## Discussion

The effects of this method are animatable; that is, calling this method during an implicit-animation transaction animates the move. (See [Animating SceneKit Content](../animating-scenekit-content.md).)

## See Also

### Related Documentation

- [localTranslate(by:)](localtranslate%28by_%29.md): Changes the node’s position relative to its current position.

### Performing Node-Relative Operations

- [simdRotate(by:aroundTarget:)](simdrotate%28by_aroundtarget_%29.md): Changes the node’s position and orientation, relative to its current transform, through a rotation around the specified point in scene space.
- [simdLocalRotate(by:)](simdlocalrotate%28by_%29.md): Changes the node’s orientation relative to its current orientation.
- [simdLook(at:)](simdlook%28at_%29.md): Changes the node’s orientation so that its local forward vector points toward the specified location.
- [simdLook(at:up:localFront:)](simdlook%28at_up_localfront_%29.md): Changes the node’s orientation so that the specified forward vector points toward the specified location.

# simdLocalTranslateBy: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Changes the node’s position relative to its current position.

## Declaration

```objectivec
- (void) simdLocalTranslateBy:(simd_float3) translation;
```

## Parameters

- `translation`: The distance, in node-local space, by which to move the node.

<a id="Discussion"></a>

## Discussion

The effects of this method are animatable; that is, calling this method during an implicit-animation transaction animates the move. (See [Animating SceneKit Content](../animating-scenekit-content.md).)

## See Also

### Related Documentation

- [localTranslateBy:](localtranslate%28by_%29.md): Changes the node’s position relative to its current position.

### Performing Node-Relative Operations

- [simdRotateBy:aroundTarget:](simdrotate%28by_aroundtarget_%29.md): Changes the node’s position and orientation, relative to its current transform, through a rotation around the specified point in scene space.
- [simdLocalRotateBy:](simdlocalrotate%28by_%29.md): Changes the node’s orientation relative to its current orientation.
- [simdLookAt:](simdlook%28at_%29.md): Changes the node’s orientation so that its local forward vector points toward the specified location.
- [simdLookAt:up:localFront:](simdlook%28at_up_localfront_%29.md): Changes the node’s orientation so that the specified forward vector points toward the specified location.
