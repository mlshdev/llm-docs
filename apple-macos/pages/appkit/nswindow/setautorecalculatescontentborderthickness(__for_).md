> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/setautorecalculatescontentborderthickness(_:for:)](https://developer.apple.com/documentation/appkit/nswindow/setautorecalculatescontentborderthickness(_:for:))

# setAutorecalculatesContentBorderThickness(\_:for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Specifies whether the window calculates the thickness of a given border automatically.

## Declaration

```swift
func setAutorecalculatesContentBorderThickness(_ flag: Bool, for edge: NSRectEdge)
```

## Parameters

- `flag`: If [true](https://developer.apple.com/documentation/swift/true), the window calculates the thickness of the edge automatically; if [false](https://developer.apple.com/documentation/swift/false), it does not.
- `edge`: The border to set auto-recalculation on or off:

  - `NSMaxYEdge`: Top border.
  - `NSMinYEdge`: Bottom border.

<a id="Discussion"></a>

## Discussion

Turning off a border’s auto-recalculation status sets its border thickness to `0.0`.

In a nontextured window calling `setAutorecalculatesContentBorderThickness:forEdge:` passing `NSMaxYEdge` will raise an exception (in a nontextured window, it’s only valid to set the content border thickness of the bottom edge). It is only valid to set the content border thickness of the top edge in a textured window.

Typically, if you call `setContentBorderThickness:forEdge:`, you should also call `setAutorecalculatesContentBorderThickness:NO forEdge:`.

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
- [isOnActiveSpace](isonactivespace.md): A Boolean value that indicates whether the window is on the currently active space.
- [hidesOnDeactivate](hidesondeactivate.md): A Boolean value that indicates whether the window is removed from the screen when its application becomes inactive.
- [collectionBehavior](collectionbehavior-swift.property.md): A value that identifies the window’s behavior in window collections.
- [isOpaque](isopaque.md): A Boolean value that indicates whether the window is opaque.
- [hasShadow](hasshadow.md): A Boolean value that indicates whether the window has a shadow.
- [invalidateShadow()](invalidateshadow%28%29.md): Invalidates the window shadow so that it is recomputed based on the current window shape.

# setAutorecalculatesContentBorderThickness:forEdge: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Specifies whether the window calculates the thickness of a given border automatically.

## Declaration

```objectivec
- (void) setAutorecalculatesContentBorderThickness:(BOOL) flag forEdge:(NSRectEdge) edge;
```

## Parameters

- `flag`: If [true](https://developer.apple.com/documentation/swift/true), the window calculates the thickness of the edge automatically; if [false](https://developer.apple.com/documentation/swift/false), it does not.
- `edge`: The border to set auto-recalculation on or off:

  - `NSMaxYEdge`: Top border.
  - `NSMinYEdge`: Bottom border.

<a id="Discussion"></a>

## Discussion

Turning off a border’s auto-recalculation status sets its border thickness to `0.0`.

In a nontextured window calling `setAutorecalculatesContentBorderThickness:forEdge:` passing `NSMaxYEdge` will raise an exception (in a nontextured window, it’s only valid to set the content border thickness of the bottom edge). It is only valid to set the content border thickness of the top edge in a textured window.

Typically, if you call `setContentBorderThickness:forEdge:`, you should also call `setAutorecalculatesContentBorderThickness:NO forEdge:`.

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
- [onActiveSpace](isonactivespace.md): A Boolean value that indicates whether the window is on the currently active space.
- [hidesOnDeactivate](hidesondeactivate.md): A Boolean value that indicates whether the window is removed from the screen when its application becomes inactive.
- [collectionBehavior](collectionbehavior-swift.property.md): A value that identifies the window’s behavior in window collections.
- [opaque](isopaque.md): A Boolean value that indicates whether the window is opaque.
- [hasShadow](hasshadow.md): A Boolean value that indicates whether the window has a shadow.
- [invalidateShadow](invalidateshadow%28%29.md): Invalidates the window shadow so that it is recomputed based on the current window shape.
