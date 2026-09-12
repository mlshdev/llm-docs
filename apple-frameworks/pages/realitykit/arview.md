> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/arview](https://developer.apple.com/documentation/realitykit/arview)

# ARView

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+

A view that enables you to display an AR experience with RealityKit.

## Declaration

```swift
@MainActor @objc @preconcurrency class ARView
```

## Mentioned In

- [Handling different-sized objects in physics simulations](handling-different-sized-objects-in-physics-simulations.md)
- [Implementing postprocess effects using Metal compute functions](implementing-postprocess-effects-using-metal-compute-functions.md)
- [Applying core image filters as a postprocess effect](applying-core-image-filters-as-a-postprocess-effect.md)
- [Designing scene hierarchies for efficient physics simulation](designing-scene-hierarchies-for-efficient-physics-simulation.md)
- [Implementing systems for entities in a scene](implementing-systems-for-entities-in-a-scene.md)
- [Loading remote assets in multiplayer apps](loading-remote-assets.md)
- [Implementing scene understanding and reconstruction in your RealityKit app](realitykit-scene-understanding.md)
- [Using Metal performance shaders to create custom postprocess effects](using-metal-performance-shaders-to-create-custom-postprocess-effects.md)

<a id="overview"></a>

## Overview

Use an [ARView](arview.md) instance to display rendered 3D graphics to the user. You typically add a single view to your app’s storyboard, and then provide an outlet for that view in your code. Alternatively, you can create and add a view to your view hierarchy programmatically at runtime, as you would any other view.

A view has a single [Scene](scene.md) instance that you access through the read-only [scene](arview/scene.md) property. To the view’s [Scene](scene.md) instance you add one or more [AnchorEntity](anchorentity.md) instances that tell the view’s AR [session](arview/session.md) how to tether content to something in the real world. To each anchor, you attach a hierarchy of other [Entity](entity.md) instances that make up the content of the scene.

![Block diagram highlighting the AR view as the root object that you](https://developer.apple.com/images/com.apple.RealityKit/ARView-1@2x.png)

Additionally, you can use the view to:

- Configure render options, environmental characteristics, and the camera mode.
- Handle platform-appropriate user interaction in the form of mouse, keyboard, or gesture input.
- Find entities at a given point in the view.
- Access statistics and visualizations that help you debug your app.

Note that with [ARView](arview.md), a [ModelEntity](modelentity.md) casts a grounding shadow on a physical surface by default.  [RealityView](realityview.md) does not have this default behavior.

## Topics

### Creating a view

- [init(frame:)](arview/init%28frame_%29.md): Creates an AR view with the specified dimensions.
- [init(frame:cameraMode:automaticallyConfigureSession:)](arview/init%28frame_cameramode_automaticallyconfiguresession_%29.md): Creates an AR view with the specified dimensions, camera mode, and session configuration state.
- [init(coder:)](arview/init%28coder_%29.md): Creates an AR view initialized from data in a given decoder.
- [init(frame:cameraMode:)](arview/init%28frame_cameramode_%29.md): Deprecated. Creates an AR view with the specified dimensions and camera mode.

### Working with the scene

- [scene](arview/scene.md): The scene that the view renders and simulates.

### Configuring the AR session

- [session](arview/session.md): The AR session that supports the view’s rendering.
- [automaticallyConfigureSession](arview/automaticallyconfiguresession.md): An indication of whether to use an automatically configured AR session.
- [renderOptions](arview/renderoptions-swift.property.md): The render options that configure the view’s AR session.
- [renderCallbacks](arview/rendercallbacks-swift.property.md): A container that holds the view’s render callbacks.

### Providing environmental context

- [environment](arview/environment-swift.property.md): The view’s background, lighting, and acoustic properties.
- [physicsOrigin](arview/physicsorigin.md): The entity that defines the origin of the scene’s physics simulation.
- [audioListener](arview/audiolistener.md): The entity that defines the listener position and orientation for spatial audio.

### Managing the camera

- [cameraMode](arview/cameramode-swift.property.md): A setting that chooses between the AR session’s camera and a virtual one.
- [cameraTransform](arview/cameratransform.md): The transform of the currently active camera.

### Finding entities at a point in the view

- [entity(at:)](arview/entity%28at_%29.md): Finds the entity in the AR scene closest to the specified point.
- [entities(at:)](arview/entities%28at_%29.md): Finds the collection of entities at the specified point in the scene.
- [hitTest(\_:query:mask:)](arview/hittest%28__query_mask_%29.md): Searches for objects corresponding to a point in the view based on a query and a collision mask.
- [hitTest(\_:types:)](arview/hittest%28__types_%29.md): Searches for objects corresponding to a point in the view based on a set of result types.
- [makeRaycastQuery(from:allowing:alignment:)](arview/makeraycastquery%28from_allowing_alignment_%29.md): Creates a ray-cast query originating from a point in the view, centered on the camera’s field of view.
- [raycast(from:allowing:alignment:)](arview/raycast%28from_allowing_alignment_%29.md): Performs a ray cast, where a ray is cast into the scene from the center of the camera through a point in the view, and the results are immediately returned.
- [trackedRaycast(from:allowing:alignment:updateHandler:)](arview/trackedraycast%28from_allowing_alignment_updatehandler_%29.md): Performs a tracked ray cast, where a ray is cast into the scene from the center of the camera through a point in the view.

### Adding gesture recognizers to entities

- [installGestures(\_:for:)](arview/installgestures%28__for_%29.md): Installs standard gestures onto the given entity, configured to be recognized simultaneously.
- [gestureRecognizer(\_:shouldRecognizeSimultaneouslyWith:)](arview/gesturerecognizer%28__shouldrecognizesimultaneouslywith_%29.md)

### Mapping between coordinate spaces

- [project(\_:)](arview/project%28__%29.md): Projects a point from the 3D world coordinate system of the scene to the 2D pixel coordinate system of the view.
- [unproject(\_:ontoPlane:relativeToCamera:)](arview/unproject%28__ontoplane_relativetocamera_%29.md): Unproject a 2D point from the view onto a plane in 3D world coordinates.
- [unproject(\_:ontoPlane:)](arview/unproject%28__ontoplane_%29.md): Maps a 2D point from the view’s coordinate system onto the given plane in 3D space.
- [unproject(\_:viewport:)](arview/unproject%28__viewport_%29.md): Maps a 2D point from the pixel coordinate system of a viewport into a 3D coordinate space. The point lies on this view’s near clipping plane.
- [ray(through:)](arview/ray%28through_%29.md): Determines the position and direction of a ray through the given point in the 2D space of the view.

### Handling touch input

- [touchesBegan(\_:with:)](arview/touchesbegan%28__with_%29.md): Tells the view that one or more new touches occurred.
- [touchesMoved(\_:with:)](arview/touchesmoved%28__with_%29.md): Tells the view when one or more touches associated with an event changed.
- [touchesEnded(\_:with:)](arview/touchesended%28__with_%29.md): Tells the view when one or more fingers are raised from the view.
- [touchesCancelled(\_:with:)](arview/touchescancelled%28__with_%29.md): Tells the view when a system event (such as a system alert) cancels a touch sequence.

### Handling keyboard input

- [acceptsFirstResponder](arview/acceptsfirstresponder.md): A Boolean value that indicates whether the view accepts first responder status.
- [keyDown(with:)](arview/keydown%28with_%29.md): Informs the view that the user has pressed a key.
- [keyUp(with:)](arview/keyup%28with_%29.md): Informs the view that the user has released a key.

### Handling mouse input

- [mouseDown(with:)](arview/mousedown%28with_%29.md): Informs the view that the user has pressed the left mouse button.
- [mouseDragged(with:)](arview/mousedragged%28with_%29.md): Informs the view that the user has moved the mouse with the left button pressed.
- [mouseUp(with:)](arview/mouseup%28with_%29.md): Informs the view that the user has released the left mouse button.
- [mouseMoved(with:)](arview/mousemoved%28with_%29.md): Informs the view that the mouse has moved.
- [rightMouseDown(with:)](arview/rightmousedown%28with_%29.md): Informs the view that the user has pressed the right mouse button.
- [rightMouseDragged(with:)](arview/rightmousedragged%28with_%29.md): Informs the view that the user has moved the mouse with the right button pressed.
- [rightMouseUp(with:)](arview/rightmouseup%28with_%29.md): Informs the view that the user has released the right mouse button.
- [otherMouseDown(with:)](arview/othermousedown%28with_%29.md): Informs the view that the user has pressed a mouse button other than the left or right one.
- [otherMouseDragged(with:)](arview/othermousedragged%28with_%29.md): Informs the view that the user has moved the mouse with a button other than the left or right button pressed.
- [otherMouseUp(with:)](arview/othermouseup%28with_%29.md): Informs the view that the user has released a mouse button other than the left or right button.
- [scrollWheel(with:)](arview/scrollwheel%28with_%29.md): Informs the view that the mouse’s scroll wheel has moved.

### Managing the view

- [frame](arview/frame.md): The frame rectangle, which describes the view’s location and size in the coordinate system of the view’s superview.
- [contentScaleFactor](arview/contentscalefactor.md): The scale factor of the content in the view.
- [didMoveToSuperview()](arview/didmovetosuperview%28%29.md): Tells the view that its superview changed.
- [didMoveToWindow()](arview/didmovetowindow%28%29.md): Tells the view that its window property is set to a new value.
- [layoutSubviews()](arview/layoutsubviews%28%29.md): Lays out subviews.
- [layout()](arview/layout%28%29.md)
- [layerClass](arview/layerclass.md): The class used to create the layer for view instances.
- [makeBackingLayer()](arview/makebackinglayer%28%29.md): Creates the view’s backing layer.
- [viewDidChangeBackingProperties()](arview/viewdidchangebackingproperties%28%29.md): Tells the view when its backing store properties change.
- [viewDidMoveToSuperview()](arview/viewdidmovetosuperview%28%29.md): Tells the view that it has a new superview or that the view’s superview has been removed.

### Taking a snapshot

- [snapshot(saveToHDR:completion:)](arview/snapshot%28savetohdr_completion_%29-66jzu.md): Takes a screenshot.
- [snapshot(saveToHDR:completion:)](arview/snapshot%28savetohdr_completion_%29-91ifk.md): Takes a screenshot.
- [ARView.Image](arview/image.md)

### Debugging the session

- [Improving the Performance of a RealityKit App](improving-the-performance-of-a-realitykit-app.md): Measure CPU and GPU utilization to find ways to improve your app’s performance.
- [debugOptions](arview/debugoptions-swift.property.md): The current debugging options.

### Structures

- [ARView.DebugOptions](arview/debugoptions-swift.struct.md): Options for drawing overlay content in a scene that can aid in debugging.
- [ARView.EntityGestures](arview/entitygestures.md): The set of possible entity gesture recognizers.
- [ARView.Environment](arview/environment-swift.struct.md): A description of background, lighting, and acoustic properties for a view’s content.
- [ARView.PostProcessContext](arview/postprocesscontext.md): An object the framework uses to pass data to a postprocess callback.
- [ARView.RenderCallbacks](arview/rendercallbacks-swift.struct.md): A container that holds the view’s render callbacks.
- [ARView.RenderOptions](arview/renderoptions-swift.struct.md): The available rendering options that you use to selectively disable certain rendering effects.

### Instance Methods

- [gestureRecognizer(\_:shouldReceive:)](arview/gesturerecognizer%28__shouldreceive_%29.md)
- [snapshot(saveToHDR:completion:)](arview/snapshot%28savetohdr_completion_%29.md): Takes a screenshot.

### Enumerations

- [ARView.CameraMode](arview/cameramode-swift.enum.md): The available camera modes.

### Default Implementations

- [ARSessionProviding Implementations](arview/arsessionproviding-implementations.md)

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)
- [UIView](../uikit/uiview.md)

### Conforms To

- [ARSessionProviding](../arkit/arsessionproviding.md)
- [CALayerDelegate](../quartzcore/calayerdelegate.md)
- [CLBodyIdentifiable](../corelocation/clbodyidentifiable.md)
- [CMBodyIdentifiable](../coremotion/cmbodyidentifiable.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityelementprotocol)
- [NSAccessibilityProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityprotocol)
- [NSAnimatablePropertyContainer](https://developer.apple.com/documentation/appkit/nsanimatablepropertycontainer)
- [NSAppearanceCustomization](https://developer.apple.com/documentation/appkit/nsappearancecustomization)
- [NSCoding](../foundation/nscoding.md)
- [NSDraggingDestination](https://developer.apple.com/documentation/appkit/nsdraggingdestination)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)
- [UIAccessibilityIdentification](../uikit/uiaccessibilityidentification.md)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearance](../uikit/uiappearance.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UICoordinateSpace](../uikit/uicoordinatespace.md)
- [UIDynamicItem](../uikit/uidynamicitem.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIFocusItem](../uikit/uifocusitem.md)
- [UIFocusItemContainer](../uikit/uifocusitemcontainer.md)
- [UIGestureRecognizerDelegate](../uikit/uigesturerecognizerdelegate.md)
- [UILargeContentViewerItem](../uikit/uilargecontentvieweritem.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIPopoverPresentationControllerSourceItem](../uikit/uipopoverpresentationcontrollersourceitem.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### UIKit and AppKit presentation

- [ARView.DebugOptions](arview/debugoptions-swift.struct.md): Options for drawing overlay content in a scene that can aid in debugging.
- [ARViewBase](arviewbase.md): The platform-specific base class for the view into which RealityKit renders content.
