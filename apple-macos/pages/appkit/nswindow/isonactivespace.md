> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/isonactivespace](https://developer.apple.com/documentation/appkit/nswindow/isonactivespace)

# isOnActiveSpace (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

A Boolean value that indicates whether the window is on the currently active space.

## Declaration

```swift
var isOnActiveSpace: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the window is on the currently active space; otherwise, [false](https://developer.apple.com/documentation/swift/false). For visible windows, this property indicates whether the window is currently visible on the active space. For nonvisible windows, it indicates whether ordering the window onscreen would cause it to be on the active space.

## See Also

### Configuring the Window’s Appearance

- [styleMask](stylemask-swift.property.md): Flags that describe the window’s current style, such as if it’s resizable or in full-screen mode.
- [NSWindow.StyleMask](stylemask-swift.struct.md): Constants that specify the style of a window, and that you can combine with the C bitwise OR operator.
- [toggleFullScreen(\_:)](togglefullscreen%28__%29.md): Takes the window into or out of fullscreen mode,
- [worksWhenModal](workswhenmodal.md): A Boolean value that indicates whether the window is able to receive keyboard and mouse events even when some other window is being run modally.
- [alphaValue](alphavalue.md): The window’s alpha value.
- [backgroundColor](backgroundcolor.md): The color of the window’s background.
- [colorSpace](colorspace.md): The window’s color space.
- [setDynamicDepthLimit(\_:)](setdynamicdepthlimit%28__%29.md): Sets a Boolean value that indicates whether the window’s depth limit can change to match the depth of the screen it’s on.
- [canHide](canhide.md): A Boolean value that indicates whether the window can hide when its application becomes hidden.
- [hidesOnDeactivate](hidesondeactivate.md): A Boolean value that indicates whether the window is removed from the screen when its application becomes inactive.
- [collectionBehavior](collectionbehavior-swift.property.md): A value that identifies the window’s behavior in window collections.
- [isOpaque](isopaque.md): A Boolean value that indicates whether the window is opaque.
- [hasShadow](hasshadow.md): A Boolean value that indicates whether the window has a shadow.
- [invalidateShadow()](invalidateshadow%28%29.md): Invalidates the window shadow so that it is recomputed based on the current window shape.
- [autorecalculatesContentBorderThickness(for:)](autorecalculatescontentborderthickness%28for_%29.md): Indicates whether the window calculates the thickness of a given border automatically.

# onActiveSpace (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

A Boolean value that indicates whether the window is on the currently active space.

## Declaration

```objectivec
@property (readonly, getter=isOnActiveSpace) BOOL onActiveSpace;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the window is on the currently active space; otherwise, [false](https://developer.apple.com/documentation/swift/false). For visible windows, this property indicates whether the window is currently visible on the active space. For nonvisible windows, it indicates whether ordering the window onscreen would cause it to be on the active space.

## See Also

### Configuring the Window’s Appearance

- [styleMask](stylemask-swift.property.md): Flags that describe the window’s current style, such as if it’s resizable or in full-screen mode.
- [NSWindowStyleMask](stylemask-swift.struct.md): Constants that specify the style of a window, and that you can combine with the C bitwise OR operator.
- [toggleFullScreen:](togglefullscreen%28__%29.md): Takes the window into or out of fullscreen mode,
- [worksWhenModal](workswhenmodal.md): A Boolean value that indicates whether the window is able to receive keyboard and mouse events even when some other window is being run modally.
- [alphaValue](alphavalue.md): The window’s alpha value.
- [backgroundColor](backgroundcolor.md): The color of the window’s background.
- [colorSpace](colorspace.md): The window’s color space.
- [setDynamicDepthLimit:](setdynamicdepthlimit%28__%29.md): Sets a Boolean value that indicates whether the window’s depth limit can change to match the depth of the screen it’s on.
- [canHide](canhide.md): A Boolean value that indicates whether the window can hide when its application becomes hidden.
- [hidesOnDeactivate](hidesondeactivate.md): A Boolean value that indicates whether the window is removed from the screen when its application becomes inactive.
- [collectionBehavior](collectionbehavior-swift.property.md): A value that identifies the window’s behavior in window collections.
- [opaque](isopaque.md): A Boolean value that indicates whether the window is opaque.
- [hasShadow](hasshadow.md): A Boolean value that indicates whether the window has a shadow.
- [invalidateShadow](invalidateshadow%28%29.md): Invalidates the window shadow so that it is recomputed based on the current window shape.
- [autorecalculatesContentBorderThicknessForEdge:](autorecalculatescontentborderthickness%28for_%29.md): Indicates whether the window calculates the thickness of a given border automatically.
