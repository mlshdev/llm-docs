> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsborderlesswindowmask](https://developer.apple.com/documentation/appkit/nsborderlesswindowmask)

# NSBorderlessWindowMask

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 10.12)

The window displays none of the usual peripheral elements.

## Declaration

```objectivec
static const NSWindowStyleMask NSBorderlessWindowMask;
```

<a id="discussion"></a>

## Discussion

Useful only for display or caching purposes. A window that uses `NSBorderlessWindowMask` can’t become key or main, unless the value of [canBecomeKeyWindow](nswindow/canbecomekey.md) or [canBecomeMainWindow](nswindow/canbecomemain.md) is [true](https://developer.apple.com/documentation/swift/true). Note that you can set a window’s or panel’s style mask to `NSBorderlessWindowMask` in Interface Builder by deselecting Title Bar in the Appearance section of the Attributes inspector.

## See Also

### Deprecated

- [NSTitledWindowMask](nstitledwindowmask.md): Deprecated. The window displays a title bar.
- [NSClosableWindowMask](nsclosablewindowmask.md): Deprecated. The window displays a close button.
- [NSMiniaturizableWindowMask](nsminiaturizablewindowmask.md): Deprecated. The window displays a minimize button.
- [NSResizableWindowMask](nsresizablewindowmask.md): Deprecated. The window displays a resize control.
- [NSTexturedBackgroundWindowMask](nstexturedbackgroundwindowmask.md): Deprecated. The window displays with a metal-textured background. Additionally, the window may be moved by clicking and dragging anywhere in the window background. A bordered window with this mask gets rounded bottom corners.
- [NSUnifiedTitleAndToolbarWindowMask](nsunifiedtitleandtoolbarwindowmask.md): Deprecated. The window’s title bar and toolbar have a unified look—that is, a continuous background. A horizontal separator line appears under the title bar and toolbar .
- [NSFullScreenWindowMask](nsfullscreenwindowmask.md): Deprecated. The window can appear full screen. A fullscreen window does not draw its title bar, and may have special handling for its toolbar. This mask is automatically toggled when [toggleFullScreen:](nswindow/togglefullscreen%28__%29.md) is called.
- [NSFullSizeContentViewWindowMask](nsfullsizecontentviewwindowmask.md): Deprecated. When set, the content view consumes the full size of the window; it can be combined with other window style masks, but is only respected for windows with a title bar. Using this mask opts in to layer backing. Use the [contentLayoutRect](nswindow/contentlayoutrect.md) or [contentLayoutGuide](nswindow/contentlayoutguide.md) to lay out views underneath the title bar-toolbar area.
- [NSUnscaledWindowMask](nsunscaledwindowmask.md): Deprecated.
