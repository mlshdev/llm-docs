> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/ishidden](https://developer.apple.com/documentation/scenekit/scnnode/ishidden)

# isHidden (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A Boolean value that determines the visibility of the node’s contents. Animatable.

## Declaration

```swift
var isHidden: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is NO, specifying that SceneKit should render geometries and use lights attached to the node or its children. Change this property’s value to [true](https://developer.apple.com/documentation/swift/true) to exclude attached geometries and lights from rendering. (Cameras attached to the node or its children are not affected by this property.) Hiding a node also hides its child nodes recursively.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md). Hiding or showing a node in an animation results in a fade-in or fade-out effect.

## See Also

### Modifying the Node Visibility

- [opacity](opacity.md): The opacity value of the node. Animatable.
- [renderingOrder](renderingorder.md): The order the node’s content is drawn in relative to that of other nodes.
- [castsShadow](castsshadow.md): A Boolean value that determines whether SceneKit renders the node’s contents into shadow maps.
- [movabilityHint](movabilityhint.md): A value that indicates how SceneKit should handle the node when rendering movement-related effects.
- [SCNMovabilityHint](../scnmovabilityhint.md): Values that inform SceneKit’s rendering for movement-related effects, used by the [movabilityHint](movabilityhint.md) property.

# hidden (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that determines the visibility of the node’s contents. Animatable.

## Declaration

```objectivec
@property (nonatomic, getter=isHidden) BOOL hidden;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is NO, specifying that SceneKit should render geometries and use lights attached to the node or its children. Change this property’s value to [true](https://developer.apple.com/documentation/swift/true) to exclude attached geometries and lights from rendering. (Cameras attached to the node or its children are not affected by this property.) Hiding a node also hides its child nodes recursively.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md). Hiding or showing a node in an animation results in a fade-in or fade-out effect.

## See Also

### Modifying the Node Visibility

- [opacity](opacity.md): The opacity value of the node. Animatable.
- [renderingOrder](renderingorder.md): The order the node’s content is drawn in relative to that of other nodes.
- [castsShadow](castsshadow.md): A Boolean value that determines whether SceneKit renders the node’s contents into shadow maps.
- [movabilityHint](movabilityhint.md): A value that indicates how SceneKit should handle the node when rendering movement-related effects.
- [SCNMovabilityHint](../scnmovabilityhint.md): Values that inform SceneKit’s rendering for movement-related effects, used by the [movabilityHint](movabilityhint.md) property.
