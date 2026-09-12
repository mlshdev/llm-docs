> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arscnview](https://developer.apple.com/documentation/arkit/arscnview)

# ARSCNView (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 26.0) · iPadOS 11.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · visionOS

A view that blends virtual 3D content from SceneKit into your augmented reality experience.

> Use [RealityView](../realitykit/realityview.md) instead.

## Declaration

```swift
class ARSCNView
```

<a id="overview"></a>

## Overview

> **Important**

> SceneKit is deprecated, use [RealityKit](../realitykit.md) instead. For more information, see WWDC25 session 288: [Bring your SceneKit projects to RealityKit](https://developer.apple.com/videos/play/wwdc2025/288/).

The [ARSCNView](arscnview.md) class provides an easy way to create augmented reality experiences that blend virtual 3D content with a device camera view of the real world. When you run the view’s provided [ARSession](arsession.md) object:

- The view automatically renders the live video feed from the device camera as the scene background.
- The world coordinate system of the view’s SceneKit scene directly responds to the AR world coordinate system established by the session configuration.
- The view automatically moves its SceneKit camera to match the real-world movement of the device.

ARKit automatically matches SceneKit’s coordinate space to the real world, so after you place your app’s virtual content, it maintains the illusion of resting in the real-world as the user moves the device. See [Providing 3D Virtual Content with SceneKit](providing-3d-virtual-content-with-scenekit.md).

You don’t necessarily need to use the [ARAnchor](aranchor.md) class to track positions of objects you add to the scene, but by implementing [ARSCNViewDelegate](arscnviewdelegate.md) methods, you can add SceneKit content to any anchors that are automatically detected by ARKit.

Because ARKit requires Metal, use only Metal features of SceneKit. For example:

- This class supports only [SCNProgram](../scenekit/scnprogram.md) instances with Metal Shading Language code.
- If you set the [preferredRenderingAPI](../scenekit/scnview/option/preferredrenderingapi.md) property to [SCNRenderingAPI.openGLES2](../scenekit/scnrenderingapi/opengles2.md), the framework reverts the value to  [SCNRenderingAPI.metal](../scenekit/scnrenderingapi/metal.md).

## Topics

### Essentials

- [Providing 3D Virtual Content with SceneKit](providing-3d-virtual-content-with-scenekit.md): Use SceneKit to add realistic three-dimensional objects to your AR experience.
- [session](arscnview/session.md): The AR session that manages motion tracking and camera image processing for the view’s contents.
- [scene](arscnview/scene.md): The SceneKit scene to be displayed in the view.

### Responding to AR Updates

- [delegate](arscnview/delegate.md): An object you provide to mediate synchronization of the view’s AR scene information with SceneKit content.
- [ARSCNViewDelegate](arscnviewdelegate.md): Deprecated. Methods you can implement to mediate the automatic synchronization of SceneKit content with an AR session.

### Finding Real-World Surfaces

- [hitTest(\_:types:)](arscnview/hittest%28__types_%29.md): Deprecated. Searches for real-world objects or AR anchors in the captured camera image corresponding to a point in the SceneKit view.
- [raycastQuery(from:allowing:alignment:)](arscnview/raycastquery%28from_allowing_alignment_%29.md): Creates a raycast query that originates from a point on the view, aligned with the center of the camera’s field of view.

### Mapping Content to Real-World Positions

- [anchor(for:)](arscnview/anchor%28for_%29.md): Returns the AR anchor associated with the specified SceneKit node, if any.
- [node(for:)](arscnview/node%28for_%29.md): Returns the SceneKit node associated with the specified AR anchor, if any.
- [unprojectPoint(\_:ontoPlane:)](arscnview/unprojectpoint%28__ontoplane_%29.md): Returns the projection of a point from 2D view onto a plane in the 3D world space detected by ARKit.

### Managing Lighting

- [automaticallyUpdatesLighting](arscnview/automaticallyupdateslighting.md): A Boolean value that specifies whether ARKit creates and updates SceneKit lights in the view’s scene.

### Debugging AR Display

- [ARSCNDebugOptions](arscndebugoptions.md): Options for drawing overlay content to aid debugging of AR tracking in a SceneKit view.

### Managing Rendering Effects

- [rendersMotionBlur](arscnview/rendersmotionblur.md): Determines whether the view renders motion blur.
- [rendersCameraGrain](arscnview/renderscameragrain.md): A flag that determines whether SceneKit applies image noise characteristics to your app’s virtual content.

## Relationships

### Inherits From

- [SCNView](../scenekit/scnview.md)

### Conforms To

- [ARSessionProviding](arsessionproviding.md)
- [CALayerDelegate](../quartzcore/calayerdelegate.md)
- [CLBodyIdentifiable](../corelocation/clbodyidentifiable.md)
- [CMBodyIdentifiable](../coremotion/cmbodyidentifiable.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [SCNSceneRenderer](../scenekit/scnscenerenderer.md)
- [SCNTechniqueSupport](../scenekit/scntechniquesupport.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIAccessibilityIdentification](../uikit/uiaccessibilityidentification.md)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearance](../uikit/uiappearance.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UICoordinateSpace](../uikit/uicoordinatespace.md)
- [UIDynamicItem](../uikit/uidynamicitem.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIFocusItem](../uikit/uifocusitem.md)
- [UIFocusItemContainer](../uikit/uifocusitemcontainer.md)
- [UILargeContentViewerItem](../uikit/uilargecontentvieweritem.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIPopoverPresentationControllerSourceItem](../uikit/uipopoverpresentationcontrollersourceitem.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Views

- [RealityView](../realitykit/realityview.md): A view that contains RealityKit content.
- [ARView](../realitykit/arview.md): A view that enables you to display an AR experience with RealityKit.
- [ARSKView](arskview.md): Deprecated. A view that blends virtual 2D content from SpriteKit into the 3D space of an augmented reality experience.
- [ARCoachingOverlayView](arcoachingoverlayview.md): Deprecated. A view that displays standardized onboarding instructions to direct users toward a specific goal.

# ARSCNView (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · visionOS 1.0+ (deprecated in 1.0)

A view that blends virtual 3D content from SceneKit into your augmented reality experience.

> Use [RealityView](../realitykit/realityview.md) instead.

## Declaration

```objectivec
@interface ARSCNView : SCNView
```

<a id="overview"></a>

## Overview

> **Important**

> SceneKit is deprecated, use [RealityKit](../realitykit.md) instead. For more information, see WWDC25 session 288: [Bring your SceneKit projects to RealityKit](https://developer.apple.com/videos/play/wwdc2025/288/).

The [ARSCNView](arscnview.md) class provides an easy way to create augmented reality experiences that blend virtual 3D content with a device camera view of the real world. When you run the view’s provided [ARSession](arsession.md) object:

- The view automatically renders the live video feed from the device camera as the scene background.
- The world coordinate system of the view’s SceneKit scene directly responds to the AR world coordinate system established by the session configuration.
- The view automatically moves its SceneKit camera to match the real-world movement of the device.

ARKit automatically matches SceneKit’s coordinate space to the real world, so after you place your app’s virtual content, it maintains the illusion of resting in the real-world as the user moves the device. See [Providing 3D Virtual Content with SceneKit](providing-3d-virtual-content-with-scenekit.md).

You don’t necessarily need to use the [ARAnchor](aranchor.md) class to track positions of objects you add to the scene, but by implementing [ARSCNViewDelegate](arscnviewdelegate.md) methods, you can add SceneKit content to any anchors that are automatically detected by ARKit.

Because ARKit requires Metal, use only Metal features of SceneKit. For example:

- This class supports only [SCNProgram](../scenekit/scnprogram.md) instances with Metal Shading Language code.
- If you set the [SCNPreferredRenderingAPIKey](../scenekit/scnview/option/preferredrenderingapi.md) property to [SCNRenderingAPIOpenGLES2](../scenekit/scnrenderingapi/opengles2.md), the framework reverts the value to  [SCNRenderingAPIMetal](../scenekit/scnrenderingapi/metal.md).

## Topics

### Essentials

- [Providing 3D Virtual Content with SceneKit](providing-3d-virtual-content-with-scenekit.md): Use SceneKit to add realistic three-dimensional objects to your AR experience.
- [session](arscnview/session.md): The AR session that manages motion tracking and camera image processing for the view’s contents.
- [scene](arscnview/scene.md): The SceneKit scene to be displayed in the view.

### Responding to AR Updates

- [delegate](arscnview/delegate.md): An object you provide to mediate synchronization of the view’s AR scene information with SceneKit content.
- [ARSCNViewDelegate](arscnviewdelegate.md): Deprecated. Methods you can implement to mediate the automatic synchronization of SceneKit content with an AR session.

### Finding Real-World Surfaces

- [hitTest:types:](arscnview/hittest%28__types_%29.md): Deprecated. Searches for real-world objects or AR anchors in the captured camera image corresponding to a point in the SceneKit view.
- [raycastQueryFromPoint:allowingTarget:alignment:](arscnview/raycastquery%28from_allowing_alignment_%29.md): Creates a raycast query that originates from a point on the view, aligned with the center of the camera’s field of view.

### Mapping Content to Real-World Positions

- [anchorForNode:](arscnview/anchor%28for_%29.md): Returns the AR anchor associated with the specified SceneKit node, if any.
- [nodeForAnchor:](arscnview/node%28for_%29.md): Returns the SceneKit node associated with the specified AR anchor, if any.
- [unprojectPoint:ontoPlaneWithTransform:](arscnview/unprojectpoint_ontoplanewithtransform_.md): Returns the projection of a point from 2D view onto a plane in the 3D world space detected by ARKit.

### Managing Lighting

- [automaticallyUpdatesLighting](arscnview/automaticallyupdateslighting.md): A Boolean value that specifies whether ARKit creates and updates SceneKit lights in the view’s scene.

### Debugging AR Display

- [ARSCNDebugOptions](arscndebugoptions.md): Options for drawing overlay content to aid debugging of AR tracking in a SceneKit view.

### Managing Rendering Effects

- [rendersMotionBlur](arscnview/rendersmotionblur.md): Determines whether the view renders motion blur.
- [rendersCameraGrain](arscnview/renderscameragrain.md): A flag that determines whether SceneKit applies image noise characteristics to your app’s virtual content.

## Relationships

### Inherits From

- [SCNView](../scenekit/scnview.md)

### Conforms To

- [ARSessionProviding](arsessionproviding.md)

## See Also

### Views

- [ARSKView](arskview.md): Deprecated. A view that blends virtual 2D content from SpriteKit into the 3D space of an augmented reality experience.
- [ARCoachingOverlayView](arcoachingoverlayview.md): Deprecated. A view that displays standardized onboarding instructions to direct users toward a specific goal.
