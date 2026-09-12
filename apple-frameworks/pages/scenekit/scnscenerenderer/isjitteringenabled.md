> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscenerenderer/isjitteringenabled](https://developer.apple.com/documentation/scenekit/scnscenerenderer/isjitteringenabled)

# isJitteringEnabled (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A Boolean value that determines whether SceneKit applies jittering to reduce aliasing artifacts.

## Declaration

```swift
var isJitteringEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Jittering is a process that SceneKit uses to improve the visual quality of a rendered scene. While the scene’s content is still, SceneKit moves the [pointOfView](pointofview.md) location very slightly (by less than a pixel in projected screen space). It then composites images rendered after several such moves to create the final rendered scene, creating an antialiasing effect that smooths the edges of rendered geometry.

By default, the value of this property is [false](https://developer.apple.com/documentation/swift/false), specifying that SceneKit should not perform jittering. Change the value to [true](https://developer.apple.com/documentation/swift/true) to enable jittering.

Because the [SCNView](../scnview.md) and [SCNLayer](../scnlayer.md) classes perform jittering automatically and asynchronously, enabling jittering for these classes has minimal impact on rendering performance. The [SCNRenderer](../scnrenderer.md) class performs jittering synchronously, incurring a high performance cost. With this class, jittering is suitable for rendering single frames on demand, but not for real-time rendering.

## See Also

### Managing Scene Display

- [pointOfView](pointofview.md): The node from which the scene’s contents are viewed for rendering.
- [autoenablesDefaultLighting](autoenablesdefaultlighting.md): A Boolean value that determines whether SceneKit automatically adds lights to a scene.
- [showsStatistics](showsstatistics.md): A Boolean value that determines whether SceneKit displays rendering performance statistics in an accessory view.
- [debugOptions](debugoptions.md): Options for drawing overlay content in a scene that can aid debugging.
- [renderingAPI](renderingapi.md): The graphics technology SceneKit uses to render the scene.
- [SCNDebugOptions](../scndebugoptions.md): Options for drawing overlays with SceneKit content that can aid in debugging, used with the [debugOptions](debugoptions.md) property.
- [SCNRenderingAPI](../scnrenderingapi.md): Options for choosing the graphics technology for an [SCNView](../scnview.md) object (or other SceneKit renderer) to use for drawing its contents. Used by the [renderingAPI](renderingapi.md) property and the [preferredRenderingAPI](../scnview/option/preferredrenderingapi.md) option when initializing an [SCNView](../scnview.md) object.

# jitteringEnabled (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that determines whether SceneKit applies jittering to reduce aliasing artifacts.

## Declaration

```objectivec
@property (nonatomic, getter=isJitteringEnabled) BOOL jitteringEnabled;
```

<a id="Discussion"></a>

## Discussion

Jittering is a process that SceneKit uses to improve the visual quality of a rendered scene. While the scene’s content is still, SceneKit moves the [pointOfView](pointofview.md) location very slightly (by less than a pixel in projected screen space). It then composites images rendered after several such moves to create the final rendered scene, creating an antialiasing effect that smooths the edges of rendered geometry.

By default, the value of this property is [false](https://developer.apple.com/documentation/swift/false), specifying that SceneKit should not perform jittering. Change the value to [true](https://developer.apple.com/documentation/swift/true) to enable jittering.

Because the [SCNView](../scnview.md) and [SCNLayer](../scnlayer.md) classes perform jittering automatically and asynchronously, enabling jittering for these classes has minimal impact on rendering performance. The [SCNRenderer](../scnrenderer.md) class performs jittering synchronously, incurring a high performance cost. With this class, jittering is suitable for rendering single frames on demand, but not for real-time rendering.

## See Also

### Managing Scene Display

- [pointOfView](pointofview.md): The node from which the scene’s contents are viewed for rendering.
- [autoenablesDefaultLighting](autoenablesdefaultlighting.md): A Boolean value that determines whether SceneKit automatically adds lights to a scene.
- [showsStatistics](showsstatistics.md): A Boolean value that determines whether SceneKit displays rendering performance statistics in an accessory view.
- [debugOptions](debugoptions.md): Options for drawing overlay content in a scene that can aid debugging.
- [renderingAPI](renderingapi.md): The graphics technology SceneKit uses to render the scene.
- [SCNDebugOptions](../scndebugoptions.md): Options for drawing overlays with SceneKit content that can aid in debugging, used with the [debugOptions](debugoptions.md) property.
- [SCNRenderingAPI](../scnrenderingapi.md): Options for choosing the graphics technology for an [SCNView](../scnview.md) object (or other SceneKit renderer) to use for drawing its contents. Used by the [renderingAPI](renderingapi.md) property and the [SCNPreferredRenderingAPIKey](../scnview/option/preferredrenderingapi.md) option when initializing an [SCNView](../scnview.md) object.
