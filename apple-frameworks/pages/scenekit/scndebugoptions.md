> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scndebugoptions](https://developer.apple.com/documentation/scenekit/scndebugoptions)

# SCNDebugOptions (Swift)

**Framework:** SceneKit  
**Kind:** Structure  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Options for drawing overlays with SceneKit content that can aid in debugging, used with the [debugOptions](scnscenerenderer/debugoptions.md) property.

## Declaration

```swift
struct SCNDebugOptions
```

<a id="overview"></a>

## Overview

Debug options are bit mask patterns. To display multiple debugging overlays, combine options using the bitwise OR operator.

## Topics

### Debugging Geometry and Animation

- [showBoundingBoxes](scndebugoptions/showboundingboxes.md): Display the bounding boxes for any nodes with content.
- [showWireframe](scndebugoptions/showwireframe.md): Display geometries in the scene with wireframe rendering.
- [renderAsWireframe](scndebugoptions/renderaswireframe.md): Display only wireframe placeholders for geometries in the scene.
- [showSkeletons](scndebugoptions/showskeletons.md): Display visualizations of the skeletal animation parameters for relevant geometries.
- [showCreases](scndebugoptions/showcreases.md): Display nonsmoothed crease regions for geometries affected by surface subdivision.
- [showConstraints](scndebugoptions/showconstraints.md): Display visualizations of the constraint objects acting on nodes in the scene.

### Debugging Cameras and Lighting

- [showCameras](scndebugoptions/showcameras.md): Display visualizations for nodes in the scene with attached cameras and their fields of view.
- [showLightInfluences](scndebugoptions/showlightinfluences.md): Display the locations of each [SCNLight](scnlight.md) object in the scene.
- [showLightExtents](scndebugoptions/showlightextents.md): Display the regions affected by each [SCNLight](scnlight.md) object in the scene.

### Debugging Physics

- [showPhysicsShapes](scndebugoptions/showphysicsshapes.md): Display the physics shapes for any nodes with attached [SCNPhysicsBody](scnphysicsbody.md) objects.
- [showPhysicsFields](scndebugoptions/showphysicsfields.md): Display the regions affected by each [SCNPhysicsField](scnphysicsfield.md) object in the scene.

### Initializers

- [init(rawValue:)](scndebugoptions/init%28rawvalue_%29.md): Deprecated.

### Type Properties

- [showFeaturePoints](scndebugoptions/showfeaturepoints.md): Deprecated. Display a point cloud showing intermediate results of the scene analysis that ARKit uses to track device position.
- [showWorldOrigin](scndebugoptions/showworldorigin.md): Deprecated. Display a coordinate axis visualization indicating the position and orientation of the AR world coordinate system.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Managing Scene Display

- [pointOfView](scnscenerenderer/pointofview.md): The node from which the scene’s contents are viewed for rendering.
- [autoenablesDefaultLighting](scnscenerenderer/autoenablesdefaultlighting.md): A Boolean value that determines whether SceneKit automatically adds lights to a scene.
- [isJitteringEnabled](scnscenerenderer/isjitteringenabled.md): A Boolean value that determines whether SceneKit applies jittering to reduce aliasing artifacts.
- [showsStatistics](scnscenerenderer/showsstatistics.md): A Boolean value that determines whether SceneKit displays rendering performance statistics in an accessory view.
- [debugOptions](scnscenerenderer/debugoptions.md): Options for drawing overlay content in a scene that can aid debugging.
- [renderingAPI](scnscenerenderer/renderingapi.md): The graphics technology SceneKit uses to render the scene.
- [SCNRenderingAPI](scnrenderingapi.md): Options for choosing the graphics technology for an [SCNView](scnview.md) object (or other SceneKit renderer) to use for drawing its contents. Used by the [renderingAPI](scnscenerenderer/renderingapi.md) property and the [preferredRenderingAPI](scnview/option/preferredrenderingapi.md) option when initializing an [SCNView](scnview.md) object.

# SCNDebugOptions (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options for drawing overlays with SceneKit content that can aid in debugging, used with the [debugOptions](scnscenerenderer/debugoptions.md) property.

## Declaration

```objectivec
enum SCNDebugOptions : NSUInteger;
```

<a id="overview"></a>

## Overview

Debug options are bit mask patterns. To display multiple debugging overlays, combine options using the bitwise OR operator.

## Topics

### Debugging Geometry and Animation

- [SCNDebugOptionShowBoundingBoxes](scndebugoptions/showboundingboxes.md): Display the bounding boxes for any nodes with content.
- [SCNDebugOptionShowWireframe](scndebugoptions/showwireframe.md): Display geometries in the scene with wireframe rendering.
- [SCNDebugOptionRenderAsWireframe](scndebugoptions/renderaswireframe.md): Display only wireframe placeholders for geometries in the scene.
- [SCNDebugOptionShowSkeletons](scndebugoptions/showskeletons.md): Display visualizations of the skeletal animation parameters for relevant geometries.
- [SCNDebugOptionShowCreases](scndebugoptions/showcreases.md): Display nonsmoothed crease regions for geometries affected by surface subdivision.
- [SCNDebugOptionShowConstraints](scndebugoptions/showconstraints.md): Display visualizations of the constraint objects acting on nodes in the scene.

### Debugging Cameras and Lighting

- [SCNDebugOptionShowCameras](scndebugoptions/showcameras.md): Display visualizations for nodes in the scene with attached cameras and their fields of view.
- [SCNDebugOptionShowLightInfluences](scndebugoptions/showlightinfluences.md): Display the locations of each [SCNLight](scnlight.md) object in the scene.
- [SCNDebugOptionShowLightExtents](scndebugoptions/showlightextents.md): Display the regions affected by each [SCNLight](scnlight.md) object in the scene.

### Debugging Physics

- [SCNDebugOptionShowPhysicsShapes](scndebugoptions/showphysicsshapes.md): Display the physics shapes for any nodes with attached [SCNPhysicsBody](scnphysicsbody.md) objects.
- [SCNDebugOptionShowPhysicsFields](scndebugoptions/showphysicsfields.md): Display the regions affected by each [SCNPhysicsField](scnphysicsfield.md) object in the scene.

### Enumeration Cases

- [SCNDebugOptionNone](scndebugoptions/scndebugoptionnone.md): Deprecated. Disable all debugging overlays.

## See Also

### Managing Scene Display

- [pointOfView](scnscenerenderer/pointofview.md): The node from which the scene’s contents are viewed for rendering.
- [autoenablesDefaultLighting](scnscenerenderer/autoenablesdefaultlighting.md): A Boolean value that determines whether SceneKit automatically adds lights to a scene.
- [jitteringEnabled](scnscenerenderer/isjitteringenabled.md): A Boolean value that determines whether SceneKit applies jittering to reduce aliasing artifacts.
- [showsStatistics](scnscenerenderer/showsstatistics.md): A Boolean value that determines whether SceneKit displays rendering performance statistics in an accessory view.
- [debugOptions](scnscenerenderer/debugoptions.md): Options for drawing overlay content in a scene that can aid debugging.
- [renderingAPI](scnscenerenderer/renderingapi.md): The graphics technology SceneKit uses to render the scene.
- [SCNRenderingAPI](scnrenderingapi.md): Options for choosing the graphics technology for an [SCNView](scnview.md) object (or other SceneKit renderer) to use for drawing its contents. Used by the [renderingAPI](scnscenerenderer/renderingapi.md) property and the [SCNPreferredRenderingAPIKey](scnview/option/preferredrenderingapi.md) option when initializing an [SCNView](scnview.md) object.
