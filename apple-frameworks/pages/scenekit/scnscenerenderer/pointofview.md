> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscenerenderer/pointofview](https://developer.apple.com/documentation/scenekit/scnscenerenderer/pointofview)

# pointOfView (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The node from which the scene’s contents are viewed for rendering.

## Declaration

```swift
var pointOfView: SCNNode? { get set }
```

<a id="Discussion"></a>

## Discussion

Use a node with an [SCNCamera](../scncamera.md) instance assigned to its [camera](../scnnode/camera.md) property to view a scene. The node provides the position and direction of a virtual camera, and the camera object provides rendering parameters such as field of view and focus.

For debugging lights and shadows, you can also designate a spotlight (an [SCNLight](../scnlight.md) object whose [type](../scnlight/type.md) property is [spot](../scnlight/lighttype/spot.md)) as a point of view. In this case, the light’s [spotInnerAngle](../scnlight/spotinnerangle.md) property determines the field of view, and its [zNear](../scnlight/znear.md) and [zFar](../scnlight/zfar.md) properties determine the near and far extents of the region that is visible onscreen (also known as the *viewing frustum*).

In either case, the direction of view is along the negative z-axis of the node’s local coordinate space.

## See Also

### Managing Scene Display

- [autoenablesDefaultLighting](autoenablesdefaultlighting.md): A Boolean value that determines whether SceneKit automatically adds lights to a scene.
- [isJitteringEnabled](isjitteringenabled.md): A Boolean value that determines whether SceneKit applies jittering to reduce aliasing artifacts.
- [showsStatistics](showsstatistics.md): A Boolean value that determines whether SceneKit displays rendering performance statistics in an accessory view.
- [debugOptions](debugoptions.md): Options for drawing overlay content in a scene that can aid debugging.
- [renderingAPI](renderingapi.md): The graphics technology SceneKit uses to render the scene.
- [SCNDebugOptions](../scndebugoptions.md): Options for drawing overlays with SceneKit content that can aid in debugging, used with the [debugOptions](debugoptions.md) property.
- [SCNRenderingAPI](../scnrenderingapi.md): Options for choosing the graphics technology for an [SCNView](../scnview.md) object (or other SceneKit renderer) to use for drawing its contents. Used by the [renderingAPI](renderingapi.md) property and the [preferredRenderingAPI](../scnview/option/preferredrenderingapi.md) option when initializing an [SCNView](../scnview.md) object.

# pointOfView (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The node from which the scene’s contents are viewed for rendering.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) SCNNode * pointOfView;
```

<a id="Discussion"></a>

## Discussion

Use a node with an [SCNCamera](../scncamera.md) instance assigned to its [camera](../scnnode/camera.md) property to view a scene. The node provides the position and direction of a virtual camera, and the camera object provides rendering parameters such as field of view and focus.

For debugging lights and shadows, you can also designate a spotlight (an [SCNLight](../scnlight.md) object whose [type](../scnlight/type.md) property is [SCNLightTypeSpot](../scnlight/lighttype/spot.md)) as a point of view. In this case, the light’s [spotInnerAngle](../scnlight/spotinnerangle.md) property determines the field of view, and its [zNear](../scnlight/znear.md) and [zFar](../scnlight/zfar.md) properties determine the near and far extents of the region that is visible onscreen (also known as the *viewing frustum*).

In either case, the direction of view is along the negative z-axis of the node’s local coordinate space.

## See Also

### Managing Scene Display

- [autoenablesDefaultLighting](autoenablesdefaultlighting.md): A Boolean value that determines whether SceneKit automatically adds lights to a scene.
- [jitteringEnabled](isjitteringenabled.md): A Boolean value that determines whether SceneKit applies jittering to reduce aliasing artifacts.
- [showsStatistics](showsstatistics.md): A Boolean value that determines whether SceneKit displays rendering performance statistics in an accessory view.
- [debugOptions](debugoptions.md): Options for drawing overlay content in a scene that can aid debugging.
- [renderingAPI](renderingapi.md): The graphics technology SceneKit uses to render the scene.
- [SCNDebugOptions](../scndebugoptions.md): Options for drawing overlays with SceneKit content that can aid in debugging, used with the [debugOptions](debugoptions.md) property.
- [SCNRenderingAPI](../scnrenderingapi.md): Options for choosing the graphics technology for an [SCNView](../scnview.md) object (or other SceneKit renderer) to use for drawing its contents. Used by the [renderingAPI](renderingapi.md) property and the [SCNPreferredRenderingAPIKey](../scnview/option/preferredrenderingapi.md) option when initializing an [SCNView](../scnview.md) object.
