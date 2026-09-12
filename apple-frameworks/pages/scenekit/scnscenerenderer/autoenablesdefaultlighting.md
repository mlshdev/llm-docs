> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscenerenderer/autoenablesdefaultlighting](https://developer.apple.com/documentation/scenekit/scnscenerenderer/autoenablesdefaultlighting)

# autoenablesDefaultLighting (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A Boolean value that determines whether SceneKit automatically adds lights to a scene.

## Declaration

```swift
var autoenablesDefaultLighting: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If this property’s value is [false](https://developer.apple.com/documentation/swift/false) (the default), the only light sources SceneKit uses for rendering a scene are those contained in the scene graph. If you change the value to [true](https://developer.apple.com/documentation/swift/true), SceneKit automatically adds and places an omnidirectional light source when rendering scenes that contain no lights or only contain ambient lights.

## See Also

### Managing Scene Display

- [pointOfView](pointofview.md): The node from which the scene’s contents are viewed for rendering.
- [isJitteringEnabled](isjitteringenabled.md): A Boolean value that determines whether SceneKit applies jittering to reduce aliasing artifacts.
- [showsStatistics](showsstatistics.md): A Boolean value that determines whether SceneKit displays rendering performance statistics in an accessory view.
- [debugOptions](debugoptions.md): Options for drawing overlay content in a scene that can aid debugging.
- [renderingAPI](renderingapi.md): The graphics technology SceneKit uses to render the scene.
- [SCNDebugOptions](../scndebugoptions.md): Options for drawing overlays with SceneKit content that can aid in debugging, used with the [debugOptions](debugoptions.md) property.
- [SCNRenderingAPI](../scnrenderingapi.md): Options for choosing the graphics technology for an [SCNView](../scnview.md) object (or other SceneKit renderer) to use for drawing its contents. Used by the [renderingAPI](renderingapi.md) property and the [preferredRenderingAPI](../scnview/option/preferredrenderingapi.md) option when initializing an [SCNView](../scnview.md) object.

# autoenablesDefaultLighting (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that determines whether SceneKit automatically adds lights to a scene.

## Declaration

```objectivec
@property (nonatomic) BOOL autoenablesDefaultLighting;
```

<a id="Discussion"></a>

## Discussion

If this property’s value is [false](https://developer.apple.com/documentation/swift/false) (the default), the only light sources SceneKit uses for rendering a scene are those contained in the scene graph. If you change the value to [true](https://developer.apple.com/documentation/swift/true), SceneKit automatically adds and places an omnidirectional light source when rendering scenes that contain no lights or only contain ambient lights.

## See Also

### Managing Scene Display

- [pointOfView](pointofview.md): The node from which the scene’s contents are viewed for rendering.
- [jitteringEnabled](isjitteringenabled.md): A Boolean value that determines whether SceneKit applies jittering to reduce aliasing artifacts.
- [showsStatistics](showsstatistics.md): A Boolean value that determines whether SceneKit displays rendering performance statistics in an accessory view.
- [debugOptions](debugoptions.md): Options for drawing overlay content in a scene that can aid debugging.
- [renderingAPI](renderingapi.md): The graphics technology SceneKit uses to render the scene.
- [SCNDebugOptions](../scndebugoptions.md): Options for drawing overlays with SceneKit content that can aid in debugging, used with the [debugOptions](debugoptions.md) property.
- [SCNRenderingAPI](../scnrenderingapi.md): Options for choosing the graphics technology for an [SCNView](../scnview.md) object (or other SceneKit renderer) to use for drawing its contents. Used by the [renderingAPI](renderingapi.md) property and the [SCNPreferredRenderingAPIKey](../scnview/option/preferredrenderingapi.md) option when initializing an [SCNView](../scnview.md) object.
