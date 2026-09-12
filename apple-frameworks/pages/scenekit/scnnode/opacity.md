> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/opacity](https://developer.apple.com/documentation/scenekit/scnnode/opacity)

# opacity (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The opacity value of the node. Animatable.

## Declaration

```swift
var opacity: CGFloat { get set }
```

## Mentioned In

- [Animating SceneKit Content](../animating-scenekit-content.md)

<a id="Discussion"></a>

## Discussion

Possible values are between `0.0` (fully transparent) and `1.0` (fully opaque). The default is `1.0`.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Modifying the Node Visibility

- [isHidden](ishidden.md): A Boolean value that determines the visibility of the node’s contents. Animatable.
- [renderingOrder](renderingorder.md): The order the node’s content is drawn in relative to that of other nodes.
- [castsShadow](castsshadow.md): A Boolean value that determines whether SceneKit renders the node’s contents into shadow maps.
- [movabilityHint](movabilityhint.md): A value that indicates how SceneKit should handle the node when rendering movement-related effects.
- [SCNMovabilityHint](../scnmovabilityhint.md): Values that inform SceneKit’s rendering for movement-related effects, used by the [movabilityHint](movabilityhint.md) property.

# opacity (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The opacity value of the node. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat opacity;
```

## Mentioned In

- [Animating SceneKit Content](../animating-scenekit-content.md)

<a id="Discussion"></a>

## Discussion

Possible values are between `0.0` (fully transparent) and `1.0` (fully opaque). The default is `1.0`.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Modifying the Node Visibility

- [hidden](ishidden.md): A Boolean value that determines the visibility of the node’s contents. Animatable.
- [renderingOrder](renderingorder.md): The order the node’s content is drawn in relative to that of other nodes.
- [castsShadow](castsshadow.md): A Boolean value that determines whether SceneKit renders the node’s contents into shadow maps.
- [movabilityHint](movabilityhint.md): A value that indicates how SceneKit should handle the node when rendering movement-related effects.
- [SCNMovabilityHint](../scnmovabilityhint.md): Values that inform SceneKit’s rendering for movement-related effects, used by the [movabilityHint](movabilityhint.md) property.
