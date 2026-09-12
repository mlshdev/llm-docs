> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnview](https://developer.apple.com/documentation/scenekit/scnview)

# SCNView (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A view for displaying 3D SceneKit content.

## Declaration

```swift
class SCNView
```

<a id="overview"></a>

## Overview

In macOS, [SCNView](scnview.md) is a subclass of [NSView](https://developer.apple.com/documentation/appkit/nsview). In iOS and tvOS, [SCNView](scnview.md) is a subclass of [UIView](../uikit/uiview.md). As part of either operating system’s view hierarchy, an [SCNView](scnview.md) object provides a place for SceneKit content in your app’s user interface. You can create a SceneKit view by using its [init(frame:options:)](scnview/init%28frame_options_%29.md) method or by adding it to a nib file or storyboard.  To provide content for a SceneKit view, assign an [SCNScene](scnscene.md) object to its [scene](scnview/scene.md) property.

For additional important methods and properties for working with SceneKit views, see the [SCNSceneRenderer](scnscenerenderer.md) protocol. (You can also render SceneKit content into an arbitrary Metal command queue or OpenGL context using the [SCNRenderer](scnrenderer.md) class, or into a Core Animation layer on macOS using the [SCNLayer](scnlayer.md) class. The [SCNSceneRenderer](scnscenerenderer.md) protocol defines functionality common to all three SceneKit rendering classes.)

## Topics

### Initializing a SceneKit View

- [init(frame:options:)](scnview/init%28frame_options_%29.md): Initializes and returns a newly allocated SceneKit view object with the specified frame rectangle and options.
- [SCNView.Option](scnview/option.md): Dictionary keys specifying initialization options, used when initializing a SceneKit view.

### Specifying a Scene

- [scene](scnview/scene.md): The scene to be displayed in the view.

### Configuring a View

- [backgroundColor](scnview/backgroundcolor.md): The background color of the view.
- [preferredFramesPerSecond](scnview/preferredframespersecond.md): The animation frame rate that the view uses to render its scene.
- [rendersContinuously](scnview/renderscontinuously.md): A Boolean value that determines whether the view always renders at its preferred frame rate or only when its visible content changes.
- [antialiasingMode](scnview/antialiasingmode.md): The antialiasing mode used for rendering the view’s scene.
- [SCNAntialiasingMode](scnantialiasingmode.md): Modes for antialiased rendering of the view’s scene, used by the [SCNView](scnview.md) property.

### Managing Camera Controls

- [allowsCameraControl](scnview/allowscameracontrol.md): A Boolean value that determines whether the user can manipulate the current point of view that is used to render the scene.
- [cameraControlConfiguration](scnview/cameracontrolconfiguration.md): The current configuration for the camera controller’s event-handling behavior.
- [SCNCameraControlConfiguration](scncameracontrolconfiguration.md): Properties affecting the behavior of a camera controller.
- [defaultCameraController](scnview/defaultcameracontroller.md)
- [SCNCameraController](scncameracontroller.md)

### Playing Action and Animation in a View’s Scene

- [pause(\_:)](scnview/pause%28__%29.md): Pauses playback of the view’s scene.
- [play(\_:)](scnview/play%28__%29.md): Resumes playback of the view’s scene.
- [stop(\_:)](scnview/stop%28__%29.md): Stops playback of the view’s scene and resets the scene time to its start time.

### Capturing a View Snapshot

- [snapshot()](scnview/snapshot%28%29.md): Renders the view’s scene into a new image object.

### Working with a View’s OpenGL ES Context

- [eaglContext](scnview/eaglcontext.md): Deprecated. The OpenGL ES context that the view uses to render its contents.

### Working with a View’s OpenGL Context

- [openGLContext](scnview/openglcontext.md): Deprecated. The OpenGL context that the view uses to render its contents.
- [pixelFormat](scnview/pixelformat.md): Deprecated. The view’s OpenGL pixel format.

### Instance Properties

- [drawableResizesAsynchronously](scnview/drawableresizesasynchronously.md)

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)
- [UIView](../uikit/uiview.md)

### Conforms To

- [CALayerDelegate](../quartzcore/calayerdelegate.md)
- [CLBodyIdentifiable](../corelocation/clbodyidentifiable.md)
- [CMBodyIdentifiable](../coremotion/cmbodyidentifiable.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
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
- [SCNSceneRenderer](scnscenerenderer.md)
- [SCNTechniqueSupport](scntechniquesupport.md)
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

### Essentials

- [SCNScene](scnscene.md): A container for the node hierarchy and global properties that together form a displayable 3D scene.
- [SceneView](sceneview.md): Deprecated. A SwiftUI view for displaying 3D SceneKit content.

# SCNView (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A view for displaying 3D SceneKit content.

## Declaration

```objectivec
@interface SCNView : UIView
```

```objectivec
@interface SCNView : NSView
```

<a id="overview"></a>

## Overview

In macOS, [SCNView](scnview.md) is a subclass of [NSView](https://developer.apple.com/documentation/appkit/nsview). In iOS and tvOS, [SCNView](scnview.md) is a subclass of [UIView](../uikit/uiview.md). As part of either operating system’s view hierarchy, an [SCNView](scnview.md) object provides a place for SceneKit content in your app’s user interface. You can create a SceneKit view by using its [initWithFrame:options:](scnview/init%28frame_options_%29.md) method or by adding it to a nib file or storyboard.  To provide content for a SceneKit view, assign an [SCNScene](scnscene.md) object to its [scene](scnview/scene.md) property.

For additional important methods and properties for working with SceneKit views, see the [SCNSceneRenderer](scnscenerenderer.md) protocol. (You can also render SceneKit content into an arbitrary Metal command queue or OpenGL context using the [SCNRenderer](scnrenderer.md) class, or into a Core Animation layer on macOS using the [SCNLayer](scnlayer.md) class. The [SCNSceneRenderer](scnscenerenderer.md) protocol defines functionality common to all three SceneKit rendering classes.)

## Topics

### Initializing a SceneKit View

- [initWithFrame:options:](scnview/init%28frame_options_%29.md): Initializes and returns a newly allocated SceneKit view object with the specified frame rectangle and options.
- [SCNViewOption](scnview/option.md): Dictionary keys specifying initialization options, used when initializing a SceneKit view.

### Specifying a Scene

- [scene](scnview/scene.md): The scene to be displayed in the view.

### Configuring a View

- [backgroundColor](scnview/backgroundcolor.md): The background color of the view.
- [preferredFramesPerSecond](scnview/preferredframespersecond.md): The animation frame rate that the view uses to render its scene.
- [rendersContinuously](scnview/renderscontinuously.md): A Boolean value that determines whether the view always renders at its preferred frame rate or only when its visible content changes.
- [antialiasingMode](scnview/antialiasingmode.md): The antialiasing mode used for rendering the view’s scene.
- [SCNAntialiasingMode](scnantialiasingmode.md): Modes for antialiased rendering of the view’s scene, used by the [SCNView](scnview.md) property.

### Managing Camera Controls

- [allowsCameraControl](scnview/allowscameracontrol.md): A Boolean value that determines whether the user can manipulate the current point of view that is used to render the scene.
- [cameraControlConfiguration](scnview/cameracontrolconfiguration.md): The current configuration for the camera controller’s event-handling behavior.
- [SCNCameraControlConfiguration](scncameracontrolconfiguration.md): Properties affecting the behavior of a camera controller.
- [defaultCameraController](scnview/defaultcameracontroller.md)
- [SCNCameraController](scncameracontroller.md)

### Playing Action and Animation in a View’s Scene

- [pause:](scnview/pause%28__%29.md): Pauses playback of the view’s scene.
- [play:](scnview/play%28__%29.md): Resumes playback of the view’s scene.
- [stop:](scnview/stop%28__%29.md): Stops playback of the view’s scene and resets the scene time to its start time.

### Capturing a View Snapshot

- [snapshot](scnview/snapshot%28%29.md): Renders the view’s scene into a new image object.

### Working with a View’s OpenGL ES Context

- [eaglContext](scnview/eaglcontext.md): Deprecated. The OpenGL ES context that the view uses to render its contents.

### Working with a View’s OpenGL Context

- [openGLContext](scnview/openglcontext.md): Deprecated. The OpenGL context that the view uses to render its contents.
- [pixelFormat](scnview/pixelformat.md): Deprecated. The view’s OpenGL pixel format.

### Instance Properties

- [drawableResizesAsynchronously](scnview/drawableresizesasynchronously.md)

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)
- [UIView](../uikit/uiview.md)

### Conforms To

- [SCNSceneRenderer](scnscenerenderer.md)
- [SCNTechniqueSupport](scntechniquesupport.md)

## See Also

### Essentials

- [SCNScene](scnscene.md): A container for the node hierarchy and global properties that together form a displayable 3D scene.
