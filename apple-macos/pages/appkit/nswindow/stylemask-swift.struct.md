> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/stylemask-swift.struct](https://developer.apple.com/documentation/appkit/nswindow/stylemask-swift.struct)

# NSWindow.StyleMask (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Constants that specify the style of a window, and that you can combine with the C bitwise OR operator.

## Declaration

```swift
struct StyleMask
```

## Topics

### Constants

- [borderless](stylemask-swift.struct/borderless.md): The window displays none of the usual peripheral elements.
- [titled](stylemask-swift.struct/titled.md): The window displays a title bar.
- [closable](stylemask-swift.struct/closable.md): The window displays a close button.
- [miniaturizable](stylemask-swift.struct/miniaturizable.md): The window displays a minimize button.
- [resizable](stylemask-swift.struct/resizable.md): The window can be resized by the user.
- [texturedBackground](stylemask-swift.struct/texturedbackground.md): Deprecated. The window uses a textured background that darkens when the window is key or main and lightens when it is inactive, and may have a second gradient in the section below the window content.
- [unifiedTitleAndToolbar](stylemask-swift.struct/unifiedtitleandtoolbar.md): This constant has no effect, because all windows that include a toolbar use the unified style.
- [fullScreen](stylemask-swift.struct/fullscreen.md): The window can appear full screen. A fullscreen window does not draw its title bar, and may have special handling for its toolbar. (This mask is automatically toggled when [toggleFullScreen(\_:)](togglefullscreen%28__%29.md) is called.)
- [fullSizeContentView](stylemask-swift.struct/fullsizecontentview.md): When set, the window’s [contentView](contentview.md) consumes the full size of the window. Although you can combine this constant with other window style masks, it is respected only for windows with a title bar. Note that using this mask opts in to layer-backing. Use the [contentLayoutRect](contentlayoutrect.md) or the [contentLayoutGuide](contentlayoutguide.md) to lay out views underneath the title bar–toolbar area.
- [utilityWindow](stylemask-swift.struct/utilitywindow.md): The window is a panel or a subclass of [NSPanel](../nspanel.md).
- [docModalWindow](stylemask-swift.struct/docmodalwindow.md): The window is a document-modal panel (or a subclass of [NSPanel](../nspanel.md)).
- [nonactivatingPanel](stylemask-swift.struct/nonactivatingpanel.md): The window is a panel or a subclass of [NSPanel](../nspanel.md) that does not activate the owning app.
- [hudWindow](stylemask-swift.struct/hudwindow.md): The window is a HUD panel.

### Style Mask Creation

- [init(rawValue:)](stylemask-swift.struct/init%28rawvalue_%29.md): Creates a style mask using the given raw value.

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

### Configuring the Window’s Appearance

- [styleMask](stylemask-swift.property.md): Flags that describe the window’s current style, such as if it’s resizable or in full-screen mode.
- [toggleFullScreen(\_:)](togglefullscreen%28__%29.md): Takes the window into or out of fullscreen mode,
- [worksWhenModal](workswhenmodal.md): A Boolean value that indicates whether the window is able to receive keyboard and mouse events even when some other window is being run modally.
- [alphaValue](alphavalue.md): The window’s alpha value.
- [backgroundColor](backgroundcolor.md): The color of the window’s background.
- [colorSpace](colorspace.md): The window’s color space.
- [setDynamicDepthLimit(\_:)](setdynamicdepthlimit%28__%29.md): Sets a Boolean value that indicates whether the window’s depth limit can change to match the depth of the screen it’s on.
- [canHide](canhide.md): A Boolean value that indicates whether the window can hide when its application becomes hidden.
- [isOnActiveSpace](isonactivespace.md): A Boolean value that indicates whether the window is on the currently active space.
- [hidesOnDeactivate](hidesondeactivate.md): A Boolean value that indicates whether the window is removed from the screen when its application becomes inactive.
- [collectionBehavior](collectionbehavior-swift.property.md): A value that identifies the window’s behavior in window collections.
- [isOpaque](isopaque.md): A Boolean value that indicates whether the window is opaque.
- [hasShadow](hasshadow.md): A Boolean value that indicates whether the window has a shadow.
- [invalidateShadow()](invalidateshadow%28%29.md): Invalidates the window shadow so that it is recomputed based on the current window shape.
- [autorecalculatesContentBorderThickness(for:)](autorecalculatescontentborderthickness%28for_%29.md): Indicates whether the window calculates the thickness of a given border automatically.

# NSWindowStyleMask (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that specify the style of a window, and that you can combine with the C bitwise OR operator.

## Declaration

```objectivec
enum NSWindowStyleMask : NSUInteger;
```

## Topics

### Constants

- [NSWindowStyleMaskBorderless](stylemask-swift.struct/borderless.md): The window displays none of the usual peripheral elements.
- [NSWindowStyleMaskTitled](stylemask-swift.struct/titled.md): The window displays a title bar.
- [NSWindowStyleMaskClosable](stylemask-swift.struct/closable.md): The window displays a close button.
- [NSWindowStyleMaskMiniaturizable](stylemask-swift.struct/miniaturizable.md): The window displays a minimize button.
- [NSWindowStyleMaskResizable](stylemask-swift.struct/resizable.md): The window can be resized by the user.
- [NSWindowStyleMaskTexturedBackground](stylemask-swift.struct/texturedbackground.md): Deprecated. The window uses a textured background that darkens when the window is key or main and lightens when it is inactive, and may have a second gradient in the section below the window content.
- [NSWindowStyleMaskUnifiedTitleAndToolbar](stylemask-swift.struct/unifiedtitleandtoolbar.md): This constant has no effect, because all windows that include a toolbar use the unified style.
- [NSWindowStyleMaskFullScreen](stylemask-swift.struct/fullscreen.md): The window can appear full screen. A fullscreen window does not draw its title bar, and may have special handling for its toolbar. (This mask is automatically toggled when [toggleFullScreen:](togglefullscreen%28__%29.md) is called.)
- [NSWindowStyleMaskFullSizeContentView](stylemask-swift.struct/fullsizecontentview.md): When set, the window’s [contentView](contentview.md) consumes the full size of the window. Although you can combine this constant with other window style masks, it is respected only for windows with a title bar. Note that using this mask opts in to layer-backing. Use the [contentLayoutRect](contentlayoutrect.md) or the [contentLayoutGuide](contentlayoutguide.md) to lay out views underneath the title bar–toolbar area.
- [NSWindowStyleMaskUtilityWindow](stylemask-swift.struct/utilitywindow.md): The window is a panel or a subclass of [NSPanel](../nspanel.md).
- [NSWindowStyleMaskDocModalWindow](stylemask-swift.struct/docmodalwindow.md): The window is a document-modal panel (or a subclass of [NSPanel](../nspanel.md)).
- [NSWindowStyleMaskNonactivatingPanel](stylemask-swift.struct/nonactivatingpanel.md): The window is a panel or a subclass of [NSPanel](../nspanel.md) that does not activate the owning app.
- [NSWindowStyleMaskHUDWindow](stylemask-swift.struct/hudwindow.md): The window is a HUD panel.

### Deprecated

- [NSBorderlessWindowMask](../nsborderlesswindowmask.md): Deprecated. The window displays none of the usual peripheral elements.
- [NSTitledWindowMask](../nstitledwindowmask.md): Deprecated. The window displays a title bar.
- [NSClosableWindowMask](../nsclosablewindowmask.md): Deprecated. The window displays a close button.
- [NSMiniaturizableWindowMask](../nsminiaturizablewindowmask.md): Deprecated. The window displays a minimize button.
- [NSResizableWindowMask](../nsresizablewindowmask.md): Deprecated. The window displays a resize control.
- [NSTexturedBackgroundWindowMask](../nstexturedbackgroundwindowmask.md): Deprecated. The window displays with a metal-textured background. Additionally, the window may be moved by clicking and dragging anywhere in the window background. A bordered window with this mask gets rounded bottom corners.
- [NSUnifiedTitleAndToolbarWindowMask](../nsunifiedtitleandtoolbarwindowmask.md): Deprecated. The window’s title bar and toolbar have a unified look—that is, a continuous background. A horizontal separator line appears under the title bar and toolbar .
- [NSFullScreenWindowMask](../nsfullscreenwindowmask.md): Deprecated. The window can appear full screen. A fullscreen window does not draw its title bar, and may have special handling for its toolbar. This mask is automatically toggled when [toggleFullScreen:](togglefullscreen%28__%29.md) is called.
- [NSFullSizeContentViewWindowMask](../nsfullsizecontentviewwindowmask.md): Deprecated. When set, the content view consumes the full size of the window; it can be combined with other window style masks, but is only respected for windows with a title bar. Using this mask opts in to layer backing. Use the [contentLayoutRect](contentlayoutrect.md) or [contentLayoutGuide](contentlayoutguide.md) to lay out views underneath the title bar-toolbar area.
- [NSUnscaledWindowMask](../nsunscaledwindowmask.md): Deprecated.

## See Also

### Configuring the Window’s Appearance

- [styleMask](stylemask-swift.property.md): Flags that describe the window’s current style, such as if it’s resizable or in full-screen mode.
- [toggleFullScreen:](togglefullscreen%28__%29.md): Takes the window into or out of fullscreen mode,
- [worksWhenModal](workswhenmodal.md): A Boolean value that indicates whether the window is able to receive keyboard and mouse events even when some other window is being run modally.
- [alphaValue](alphavalue.md): The window’s alpha value.
- [backgroundColor](backgroundcolor.md): The color of the window’s background.
- [colorSpace](colorspace.md): The window’s color space.
- [setDynamicDepthLimit:](setdynamicdepthlimit%28__%29.md): Sets a Boolean value that indicates whether the window’s depth limit can change to match the depth of the screen it’s on.
- [canHide](canhide.md): A Boolean value that indicates whether the window can hide when its application becomes hidden.
- [onActiveSpace](isonactivespace.md): A Boolean value that indicates whether the window is on the currently active space.
- [hidesOnDeactivate](hidesondeactivate.md): A Boolean value that indicates whether the window is removed from the screen when its application becomes inactive.
- [collectionBehavior](collectionbehavior-swift.property.md): A value that identifies the window’s behavior in window collections.
- [opaque](isopaque.md): A Boolean value that indicates whether the window is opaque.
- [hasShadow](hasshadow.md): A Boolean value that indicates whether the window has a shadow.
- [invalidateShadow](invalidateshadow%28%29.md): Invalidates the window shadow so that it is recomputed based on the current window shape.
- [autorecalculatesContentBorderThicknessForEdge:](autorecalculatescontentborderthickness%28for_%29.md): Indicates whether the window calculates the thickness of a given border automatically.
