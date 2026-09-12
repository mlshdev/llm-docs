> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/windows](https://developer.apple.com/documentation/swiftui/windows)

# Windows

**Framework:** SwiftUI  
**Kind:** API Collection

Display user interface content in a window or a collection of windows.

<a id="Overview"></a>

## Overview

The most common way to present a view hierarchy in your app’s interface is with a [WindowGroup](windowgroup.md), which produces a platform-specific behavior and appearance.

![](https://developer.apple.com/images/com.apple.SwiftUI/windows-hero@2x.png)

On platforms that support it, people can open multiple windows from the group simultaneously. Each window relies on the same root view definition, but retains its own view state. On some platforms, you can also supplement your app’s user interface with a single-instance window using the [Window](window.md) scene type.

Configure windows using scene modifiers that you add to the window declaration, like [windowStyle(\_:)](scene/windowstyle%28__%29.md) or [defaultPosition(\_:)](scene/defaultposition%28__%29.md). You can also indicate how to configure new windows that you present from a view hierarchy by adding the [presentedWindowStyle(\_:)](view/presentedwindowstyle%28__%29.md) view modifier to a view in the hierarchy.

For design guidance, see [Windows](https://developer.apple.com/design/human-interface-guidelines/windows) in the Human Interface Guidelines.

## Topics

### Essentials

- [Customizing window styles and state-restoration behavior in macOS](customizing-window-styles-and-state-restoration-behavior-in-macos.md): Configure how your app’s windows look and function in macOS to provide an engaging and more coherent experience.
- [Bringing multiple windows to your SwiftUI app](bringing-multiple-windows-to-your-swiftui-app.md): Compose rich views by reacting to state changes and customize your app’s scene presentation and behavior on iPadOS and macOS.

### Creating windows

- [WindowGroup](windowgroup.md): A scene that presents a group of identically structured windows.
- [Window](window.md): A scene that presents its content in a single, unique window.
- [UtilityWindow](utilitywindow.md): A specialized window scene that provides secondary utility to the content of the main scenes of an application.
- [WindowStyle](windowstyle.md): A specification for the appearance and interaction of a window.
- [windowStyle(\_:)](scene/windowstyle%28__%29.md): Sets the style for windows created by this scene.

### Styling the associated toolbar

- [windowToolbarStyle(\_:)](scene/windowtoolbarstyle%28__%29.md): Sets the style for the toolbar defined within this scene.
- [windowToolbarLabelStyle(\_:)](scene/windowtoolbarlabelstyle%28__%29.md): Sets the label style of items in a toolbar and enables user customization.
- [windowToolbarLabelStyle(fixed:)](scene/windowtoolbarlabelstyle%28fixed_%29.md): Sets the label style of items in a toolbar.
- [WindowToolbarStyle](windowtoolbarstyle.md): A specification for the appearance and behavior of a window’s toolbar.

### Opening windows

- [Presenting windows and spaces](https://developer.apple.com/documentation/visionos/presenting-windows-and-spaces): Open and close the scenes that make up your app’s interface.
- [supportsMultipleWindows](environmentvalues/supportsmultiplewindows.md): A Boolean value that indicates whether the current platform supports opening multiple windows.
- [openWindow](environmentvalues/openwindow.md): A window presentation action stored in a view’s environment.
- [OpenWindowAction](openwindowaction.md): An action that presents a window.
- [PushWindowAction](pushwindowaction.md): An action that opens the requested window in place of the window the action is called from.

### Closing windows

- [dismissWindow](environmentvalues/dismisswindow.md): A window dismissal action stored in a view’s environment.
- [DismissWindowAction](dismisswindowaction.md): An action that dismisses a window associated to a particular scene.
- [dismiss](environmentvalues/dismiss.md): An action that dismisses the current presentation.
- [DismissAction](dismissaction.md): An action that dismisses a presentation.
- [DismissBehavior](dismissbehavior.md): Programmatic window dismissal behaviors.

### Sizing a window

- [Positioning and sizing windows](https://developer.apple.com/documentation/visionos/positioning-and-sizing-windows): Influence the initial geometry of windows that your app presents.
- [defaultSize(\_:)](scene/defaultsize%28__%29.md): Sets a default size for a window.
- [defaultSize(width:height:)](scene/defaultsize%28width_height_%29.md): Sets a default width and height for a window.
- [defaultSize(width:height:depth:)](scene/defaultsize%28width_height_depth_%29.md): Sets a default size for a volumetric window.
- [defaultSize(\_:in:)](scene/defaultsize%28__in_%29.md): Sets a default size for a volumetric window.
- [defaultSize(width:height:depth:in:)](scene/defaultsize%28width_height_depth_in_%29.md): Sets a default size for a volumetric window.
- [windowResizability(\_:)](scene/windowresizability%28__%29.md): Sets the kind of resizability to use for a window.
- [WindowResizability](windowresizability.md): The resizability of a window.
- [windowIdealSize(\_:)](scene/windowidealsize%28__%29.md): Specifies how windows derived form this scene should determine their size when zooming.
- [WindowIdealSize](windowidealsize.md): A type which defines the size a window should use when zooming.

### Positioning a window

- [defaultPosition(\_:)](scene/defaultposition%28__%29.md): Sets a default position for a window.
- [WindowLevel](windowlevel.md): The level of a window.
- [windowLevel(\_:)](scene/windowlevel%28__%29.md): Sets the window level of this scene.
- [WindowLayoutRoot](windowlayoutroot.md): A proxy which represents the root contents of a window.
- [WindowPlacement](windowplacement.md): A type which represents a preferred size and position for a window.
- [defaultWindowPlacement(\_:)](scene/defaultwindowplacement%28__%29.md): Defines a function used for determining the default placement of windows.
- [windowIdealPlacement(\_:)](scene/windowidealplacement%28__%29.md): Provides a function which determines a placement to use when windows of a scene zoom.
- [WindowPlacementContext](windowplacementcontext.md): A type which represents contextual information used for sizing and positioning windows.
- [WindowProxy](windowproxy.md): The proxy for an open window in the app.
- [DisplayProxy](displayproxy.md): A type which provides information about display hardware.

### Configuring window visibility

- [WindowVisibilityToggle](windowvisibilitytoggle.md): A specialized button for toggling the visibility of a window.
- [defaultLaunchBehavior(\_:)](scene/defaultlaunchbehavior%28__%29.md): Sets the default launch behavior for this scene.
- [restorationBehavior(\_:)](scene/restorationbehavior%28__%29.md): Sets the restoration behavior for this scene.
- [SceneLaunchBehavior](scenelaunchbehavior.md): The launch behavior for a scene.
- [SceneRestorationBehavior](scenerestorationbehavior.md): The restoration behavior for a scene.
- [persistentSystemOverlays(\_:)](scene/persistentsystemoverlays%28__%29.md): Sets the preferred visibility of the non-transient system views overlaying the app.
- [windowToolbarFullScreenVisibility(\_:)](view/windowtoolbarfullscreenvisibility%28__%29.md): Configures the visibility of the window toolbar when the window enters full screen mode.
- [WindowToolbarFullScreenVisibility](windowtoolbarfullscreenvisibility.md): The visibility of the window toolbar with respect to full screen mode.

### Managing window behavior

- [WindowManagerRole](windowmanagerrole.md): Options for defining how a scene’s windows behave when used within a managed window context, such as full screen mode and Stage Manager.
- [windowManagerRole(\_:)](scene/windowmanagerrole%28__%29.md): Configures the role for windows derived from `self` when participating in a managed window context, such as full screen or Stage Manager.
- [WindowInteractionBehavior](windowinteractionbehavior.md): Options for enabling and disabling window interaction behaviors.
- [windowDismissBehavior(\_:)](view/windowdismissbehavior%28__%29.md): Configures the dismiss functionality for the window enclosing `self`.
- [windowFullScreenBehavior(\_:)](view/windowfullscreenbehavior%28__%29.md): Configures the full screen functionality for the window enclosing `self`.
- [windowMinimizeBehavior(\_:)](view/windowminimizebehavior%28__%29.md): Configures the minimize functionality for the window enclosing `self`.
- [windowResizeBehavior(\_:)](view/windowresizebehavior%28__%29.md): Configures the resize functionality for the window enclosing `self`.
- [windowBackgroundDragBehavior(\_:)](scene/windowbackgrounddragbehavior%28__%29.md): Configures the behavior of dragging a window by its background.
- [allowsWindowActivationEvents()](view/allowswindowactivationevents%28%29.md): Configures gestures in this view hierarchy to handle events that activate the containing window.
- [allowsWindowActivationEvents(\_:)](view/allowswindowactivationevents%28__%29.md): Configures whether gestures in this view hierarchy can handle events that activate the containing window.

### Interacting with volumes

- [onVolumeViewpointChange(updateStrategy:initial:\_:)](view/onvolumeviewpointchange%28updatestrategy_initial___%29.md): Adds an action to perform when the viewpoint of the volume changes.
- [supportedVolumeViewpoints(\_:)](view/supportedvolumeviewpoints%28__%29.md): Specifies which viewpoints are supported for the window bar and ornaments in a volume.
- [VolumeViewpointUpdateStrategy](volumeviewpointupdatestrategy.md): A type describing when the action provided to [onVolumeViewpointChange(updateStrategy:initial:\_:)](view/onvolumeviewpointchange%28updatestrategy_initial___%29.md) should be called.
- [Viewpoint3D](viewpoint3d.md): A type describing what direction something is being viewed from.
- [SquareAzimuth](squareazimuth.md): A type describing what direction something is being viewed from along the horizontal plane and snapped to 4 directions.
- [WorldAlignmentBehavior](worldalignmentbehavior.md): A type representing the world alignment behavior for a scene.
- [volumeWorldAlignment(\_:)](scene/volumeworldalignment%28__%29.md): Specifies how a volume should be aligned when moved in the world.
- [WorldScalingBehavior](worldscalingbehavior.md): Specifies the scaling behavior a window should have within the world.
- [defaultWorldScaling(\_:)](scene/defaultworldscaling%28__%29.md): Specify the world scaling behavior for the window.
- [WorldScalingCompensation](worldscalingcompensation.md): Indicates whether returned metrics will take dynamic scaling into account.
- [worldTrackingLimitations](environmentvalues/worldtrackinglimitations.md): The current limitations of the device tracking the user’s surroundings.
- [WorldTrackingLimitation](worldtrackinglimitation.md): A structure to represent limitations of tracking the user’s surroundings.
- [SurfaceSnappingInfo](surfacesnappinginfo.md): A type representing information about the window scenes snap state.

### Deprecated Types

- [ControlActiveState](controlactivestate.md): Deprecated. The active appearance expected of controls in a window.

## See Also

### App structure

- [App organization](app-organization.md): Define the entry point and top-level structure of your app.
- [Scenes](scenes.md): Declare the user interface groupings that make up the parts of your app.
- [Immersive spaces](immersive-spaces.md): Display unbounded content in a person’s surroundings.
- [Documents](documents.md): Enable people to open and manage documents.
- [Navigation](navigation.md): Enable people to move between different parts of your app’s view hierarchy within a scene.
- [Modal presentations](modal-presentations.md): Present content in a separate view that offers focused interaction.
- [Toolbars](toolbars.md): Provide immediate access to frequently used commands and controls.
- [Search](search.md): Enable people to search for text or other content within your app.
- [App extensions](app-extensions.md): Extend your app’s basic functionality to other parts of the system, like by adding a Widget.
