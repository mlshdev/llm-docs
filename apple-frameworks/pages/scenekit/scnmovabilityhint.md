> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmovabilityhint](https://developer.apple.com/documentation/scenekit/scnmovabilityhint)

# SCNMovabilityHint (Swift)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Values that inform SceneKit’s rendering for movement-related effects, used by the [movabilityHint](scnnode/movabilityhint.md) property.

## Declaration

```swift
enum SCNMovabilityHint
```

## Topics

### Constants

- [SCNMovabilityHint.fixed](scnmovabilityhint/fixed.md): The node is not expected to move over time.
- [SCNMovabilityHint.movable](scnmovabilityhint/movable.md): The node is expected to move over time.

### Initializers

- [init(rawValue:)](scnmovabilityhint/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Modifying the Node Visibility

- [isHidden](scnnode/ishidden.md): A Boolean value that determines the visibility of the node’s contents. Animatable.
- [opacity](scnnode/opacity.md): The opacity value of the node. Animatable.
- [renderingOrder](scnnode/renderingorder.md): The order the node’s content is drawn in relative to that of other nodes.
- [castsShadow](scnnode/castsshadow.md): A Boolean value that determines whether SceneKit renders the node’s contents into shadow maps.
- [movabilityHint](scnnode/movabilityhint.md): A value that indicates how SceneKit should handle the node when rendering movement-related effects.

# SCNMovabilityHint (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Values that inform SceneKit’s rendering for movement-related effects, used by the [movabilityHint](scnnode/movabilityhint.md) property.

## Declaration

```objectivec
enum SCNMovabilityHint : NSInteger;
```

## Topics

### Constants

- [SCNMovabilityHintFixed](scnmovabilityhint/fixed.md): The node is not expected to move over time.
- [SCNMovabilityHintMovable](scnmovabilityhint/movable.md): The node is expected to move over time.

## See Also

### Modifying the Node Visibility

- [hidden](scnnode/ishidden.md): A Boolean value that determines the visibility of the node’s contents. Animatable.
- [opacity](scnnode/opacity.md): The opacity value of the node. Animatable.
- [renderingOrder](scnnode/renderingorder.md): The order the node’s content is drawn in relative to that of other nodes.
- [castsShadow](scnnode/castsshadow.md): A Boolean value that determines whether SceneKit renders the node’s contents into shadow maps.
- [movabilityHint](scnnode/movabilityhint.md): A value that indicates how SceneKit should handle the node when rendering movement-related effects.
