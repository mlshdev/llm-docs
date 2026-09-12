> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/renderingorder](https://developer.apple.com/documentation/scenekit/scnnode/renderingorder)

# renderingOrder (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The order the node’s content is drawn in relative to that of other nodes.

## Declaration

```swift
var renderingOrder: Int { get set }
```

<a id="Discussion"></a>

## Discussion

Nodes with greater rendering orders are rendered last. Defaults to zero.

## See Also

### Modifying the Node Visibility

- [isHidden](ishidden.md): A Boolean value that determines the visibility of the node’s contents. Animatable.
- [opacity](opacity.md): The opacity value of the node. Animatable.
- [castsShadow](castsshadow.md): A Boolean value that determines whether SceneKit renders the node’s contents into shadow maps.
- [movabilityHint](movabilityhint.md): A value that indicates how SceneKit should handle the node when rendering movement-related effects.
- [SCNMovabilityHint](../scnmovabilityhint.md): Values that inform SceneKit’s rendering for movement-related effects, used by the [movabilityHint](movabilityhint.md) property.

# renderingOrder (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The order the node’s content is drawn in relative to that of other nodes.

## Declaration

```objectivec
@property (nonatomic) NSInteger renderingOrder;
```

<a id="Discussion"></a>

## Discussion

Nodes with greater rendering orders are rendered last. Defaults to zero.

## See Also

### Modifying the Node Visibility

- [hidden](ishidden.md): A Boolean value that determines the visibility of the node’s contents. Animatable.
- [opacity](opacity.md): The opacity value of the node. Animatable.
- [castsShadow](castsshadow.md): A Boolean value that determines whether SceneKit renders the node’s contents into shadow maps.
- [movabilityHint](movabilityhint.md): A value that indicates how SceneKit should handle the node when rendering movement-related effects.
- [SCNMovabilityHint](../scnmovabilityhint.md): Values that inform SceneKit’s rendering for movement-related effects, used by the [movabilityHint](movabilityhint.md) property.
