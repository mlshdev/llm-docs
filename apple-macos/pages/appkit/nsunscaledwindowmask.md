> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsunscaledwindowmask](https://developer.apple.com/documentation/appkit/nsunscaledwindowmask)

# NSUnscaledWindowMask

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 10.9)

## Declaration

```objectivec
static const NSWindowStyleMask NSUnscaledWindowMask;
```

## See Also

### Deprecated

- [NSBorderlessWindowMask](nsborderlesswindowmask.md): Deprecated. The window displays none of the usual peripheral elements.
- [NSTitledWindowMask](nstitledwindowmask.md): Deprecated. The window displays a title bar.
- [NSClosableWindowMask](nsclosablewindowmask.md): Deprecated. The window displays a close button.
- [NSMiniaturizableWindowMask](nsminiaturizablewindowmask.md): Deprecated. The window displays a minimize button.
- [NSResizableWindowMask](nsresizablewindowmask.md): Deprecated. The window displays a resize control.
- [NSTexturedBackgroundWindowMask](nstexturedbackgroundwindowmask.md): Deprecated. The window displays with a metal-textured background. Additionally, the window may be moved by clicking and dragging anywhere in the window background. A bordered window with this mask gets rounded bottom corners.
- [NSUnifiedTitleAndToolbarWindowMask](nsunifiedtitleandtoolbarwindowmask.md): Deprecated. The window’s title bar and toolbar have a unified look—that is, a continuous background. A horizontal separator line appears under the title bar and toolbar .
- [NSFullScreenWindowMask](nsfullscreenwindowmask.md): Deprecated. The window can appear full screen. A fullscreen window does not draw its title bar, and may have special handling for its toolbar. This mask is automatically toggled when [toggleFullScreen:](nswindow/togglefullscreen%28__%29.md) is called.
- [NSFullSizeContentViewWindowMask](nsfullsizecontentviewwindowmask.md): Deprecated. When set, the content view consumes the full size of the window; it can be combined with other window style masks, but is only respected for windows with a title bar. Using this mask opts in to layer backing. Use the [contentLayoutRect](nswindow/contentlayoutrect.md) or [contentLayoutGuide](nswindow/contentlayoutguide.md) to lay out views underneath the title bar-toolbar area.
