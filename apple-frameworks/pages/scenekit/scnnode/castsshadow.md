> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/castsshadow](https://developer.apple.com/documentation/scenekit/scnnode/castsshadow)

# castsShadow (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A Boolean value that determines whether SceneKit renders the node’s contents into shadow maps.

## Declaration

```swift
var castsShadow: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

SceneKit renders shadows by rendering a *shadow map* image containing silhouettes of the scene’s contents, and then projecting that image onto the scene. SceneKit performs this process once for each [SCNLight](../scnlight.md) object in the scene whose [castsShadow](../scnlight/castsshadow.md) property is [true](https://developer.apple.com/documentation/swift/true). Because shadow map rendering re-renders portions of the scene, it incurs a performance cost. To minimize this performance cost, exclude nodes from shadow map rendering by setting the node’s [castsShadow](castsshadow.md) property to [false](https://developer.apple.com/documentation/swift/false).

For more details on shadow rendering, see [SCNLight](../scnlight.md).

## See Also

### Modifying the Node Visibility

- [isHidden](ishidden.md): A Boolean value that determines the visibility of the node’s contents. Animatable.
- [opacity](opacity.md): The opacity value of the node. Animatable.
- [renderingOrder](renderingorder.md): The order the node’s content is drawn in relative to that of other nodes.
- [movabilityHint](movabilityhint.md): A value that indicates how SceneKit should handle the node when rendering movement-related effects.
- [SCNMovabilityHint](../scnmovabilityhint.md): Values that inform SceneKit’s rendering for movement-related effects, used by the [movabilityHint](movabilityhint.md) property.

# castsShadow (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

A Boolean value that determines whether SceneKit renders the node’s contents into shadow maps.

## Declaration

```objectivec
@property (nonatomic) BOOL castsShadow;
```

<a id="Discussion"></a>

## Discussion

SceneKit renders shadows by rendering a *shadow map* image containing silhouettes of the scene’s contents, and then projecting that image onto the scene. SceneKit performs this process once for each [SCNLight](../scnlight.md) object in the scene whose [castsShadow](../scnlight/castsshadow.md) property is [true](https://developer.apple.com/documentation/swift/true). Because shadow map rendering re-renders portions of the scene, it incurs a performance cost. To minimize this performance cost, exclude nodes from shadow map rendering by setting the node’s [castsShadow](castsshadow.md) property to [false](https://developer.apple.com/documentation/swift/false).

For more details on shadow rendering, see [SCNLight](../scnlight.md).

## See Also

### Modifying the Node Visibility

- [hidden](ishidden.md): A Boolean value that determines the visibility of the node’s contents. Animatable.
- [opacity](opacity.md): The opacity value of the node. Animatable.
- [renderingOrder](renderingorder.md): The order the node’s content is drawn in relative to that of other nodes.
- [movabilityHint](movabilityhint.md): A value that indicates how SceneKit should handle the node when rendering movement-related effects.
- [SCNMovabilityHint](../scnmovabilityhint.md): Values that inform SceneKit’s rendering for movement-related effects, used by the [movabilityHint](movabilityhint.md) property.
