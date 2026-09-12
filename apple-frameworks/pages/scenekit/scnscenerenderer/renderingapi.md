> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscenerenderer/renderingapi](https://developer.apple.com/documentation/scenekit/scnscenerenderer/renderingapi)

# renderingAPI (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The graphics technology SceneKit uses to render the scene.

## Declaration

```swift
var renderingAPI: SCNRenderingAPI { get }
```

<a id="Discussion"></a>

## Discussion

You choose a graphics technology when initializing a scene renderer:

- When initializing a [SCNView](../scnview.md) object, use the [init(frame:options:)](../scnview/init%28frame_options_%29.md) initializer and the [preferredRenderingAPI](../scnview/option/preferredrenderingapi.md) key. Alternatively, create a view in Interface Builder and use the Rendering API control in the inspector. During initialization, the view will attempt to use the preferred API, but will fall back to a different API if the preferred one is not supported on the current hardware.
- To create a [SCNRenderer](../scnrenderer.md) object that renders into your own OpenGL contect, use the [init(context:options:)](../scnrenderer/init%28context_options_%29.md) initializer. To create a renderer for use in your own Metal workflow, use the [init(device:options:)](../scnrenderer/init%28device_options_%29.md) initializer.
- The rendering technology used by a [SCNLayer](../scnlayer.md) object is determined by Core Animation.

After initializing a renderer, this property reflects the rendering technology in use.

## See Also

### Managing Scene Display

- [pointOfView](pointofview.md): The node from which the scene’s contents are viewed for rendering.
- [autoenablesDefaultLighting](autoenablesdefaultlighting.md): A Boolean value that determines whether SceneKit automatically adds lights to a scene.
- [isJitteringEnabled](isjitteringenabled.md): A Boolean value that determines whether SceneKit applies jittering to reduce aliasing artifacts.
- [showsStatistics](showsstatistics.md): A Boolean value that determines whether SceneKit displays rendering performance statistics in an accessory view.
- [debugOptions](debugoptions.md): Options for drawing overlay content in a scene that can aid debugging.
- [SCNDebugOptions](../scndebugoptions.md): Options for drawing overlays with SceneKit content that can aid in debugging, used with the [debugOptions](debugoptions.md) property.
- [SCNRenderingAPI](../scnrenderingapi.md): Options for choosing the graphics technology for an [SCNView](../scnview.md) object (or other SceneKit renderer) to use for drawing its contents. Used by the [renderingAPI](renderingapi.md) property and the [preferredRenderingAPI](../scnview/option/preferredrenderingapi.md) option when initializing an [SCNView](../scnview.md) object.

# renderingAPI (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The graphics technology SceneKit uses to render the scene.

## Declaration

```objectivec
@property (nonatomic, readonly) SCNRenderingAPI renderingAPI;
```

<a id="Discussion"></a>

## Discussion

You choose a graphics technology when initializing a scene renderer:

- When initializing a [SCNView](../scnview.md) object, use the [initWithFrame:options:](../scnview/init%28frame_options_%29.md) initializer and the [SCNPreferredRenderingAPIKey](../scnview/option/preferredrenderingapi.md) key. Alternatively, create a view in Interface Builder and use the Rendering API control in the inspector. During initialization, the view will attempt to use the preferred API, but will fall back to a different API if the preferred one is not supported on the current hardware.
- To create a [SCNRenderer](../scnrenderer.md) object that renders into your own OpenGL contect, use the [rendererWithContext:options:](../scnrenderer/init%28context_options_%29.md) initializer. To create a renderer for use in your own Metal workflow, use the [rendererWithDevice:options:](../scnrenderer/init%28device_options_%29.md) initializer.
- The rendering technology used by a [SCNLayer](../scnlayer.md) object is determined by Core Animation.

After initializing a renderer, this property reflects the rendering technology in use.

## See Also

### Managing Scene Display

- [pointOfView](pointofview.md): The node from which the scene’s contents are viewed for rendering.
- [autoenablesDefaultLighting](autoenablesdefaultlighting.md): A Boolean value that determines whether SceneKit automatically adds lights to a scene.
- [jitteringEnabled](isjitteringenabled.md): A Boolean value that determines whether SceneKit applies jittering to reduce aliasing artifacts.
- [showsStatistics](showsstatistics.md): A Boolean value that determines whether SceneKit displays rendering performance statistics in an accessory view.
- [debugOptions](debugoptions.md): Options for drawing overlay content in a scene that can aid debugging.
- [SCNDebugOptions](../scndebugoptions.md): Options for drawing overlays with SceneKit content that can aid in debugging, used with the [debugOptions](debugoptions.md) property.
- [SCNRenderingAPI](../scnrenderingapi.md): Options for choosing the graphics technology for an [SCNView](../scnview.md) object (or other SceneKit renderer) to use for drawing its contents. Used by the [renderingAPI](renderingapi.md) property and the [SCNPreferredRenderingAPIKey](../scnview/option/preferredrenderingapi.md) option when initializing an [SCNView](../scnview.md) object.
