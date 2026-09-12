> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/stylemask-swift.property](https://developer.apple.com/documentation/appkit/nswindow/stylemask-swift.property)

# styleMask (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Flags that describe the window’s current style, such as if it’s resizable or in full-screen mode.

## Declaration

```swift
var styleMask: NSWindow.StyleMask { get set }
```

<a id="Discussion"></a>

## Discussion

The [styleMask](stylemask-swift.property.md) is settable on macOS 10.6 and later. Setting this property has the same restrictions as the `styleMask` parameter of [init(contentRect:styleMask:backing:defer:)](init%28contentrect_stylemask_backing_defer_%29.md). Changing the style mask may cause the view hierarchy to be rebuilt.

## See Also

### Configuring the Window’s Appearance

- [NSWindow.StyleMask](stylemask-swift.struct.md): Constants that specify the style of a window, and that you can combine with the C bitwise OR operator.
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

# styleMask (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Flags that describe the window’s current style, such as if it’s resizable or in full-screen mode.

## Declaration

```objectivec
@property NSWindowStyleMask styleMask;
```

<a id="Discussion"></a>

## Discussion

The [styleMask](stylemask-swift.property.md) is settable on macOS 10.6 and later. Setting this property has the same restrictions as the `styleMask` parameter of [initWithContentRect:styleMask:backing:defer:](init%28contentrect_stylemask_backing_defer_%29.md). Changing the style mask may cause the view hierarchy to be rebuilt.

## See Also

### Configuring the Window’s Appearance

- [NSWindowStyleMask](stylemask-swift.struct.md): Constants that specify the style of a window, and that you can combine with the C bitwise OR operator.
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
