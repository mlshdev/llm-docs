> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/contentlayoutrect](https://developer.apple.com/documentation/appkit/nswindow/contentlayoutrect)

# contentLayoutRect (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The area inside the window that is for non-obscured content, in window coordinates.

## Declaration

```swift
var contentLayoutRect: NSRect { get }
```

<a id="Discussion"></a>

## Discussion

Typically, the area represented by this property is the same as the frame of the [contentView](contentview.md). However, for windows with [NSFullSizeContentViewWindowMask](../nsfullsizecontentviewwindowmask.md) set, there needs to be a way to determine the portion that is not under the toolbar. The [contentLayoutRect](contentlayoutrect.md) property contains the portion of the layout that is not obscured under the toolbar. This property is KVO compliant.

## See Also

### Sizing Content

- [contentAspectRatio](contentaspectratio.md): The window’s content aspect ratio.
- [contentMinSize](contentminsize.md): The minimum size of the window’s content view in the window’s base coordinate system.
- [setContentSize(\_:)](setcontentsize%28__%29.md): Sets the size of the window’s content view to a given size, which is expressed in the window’s base coordinate system.
- [contentMaxSize](contentmaxsize.md): The maximum size of the window’s content view in the window’s base coordinate system.
- [contentResizeIncrements](contentresizeincrements.md): The window’s content-view resizing increments.
- [contentLayoutGuide](contentlayoutguide.md): A value used by Auto Layout constraints to automatically bind to the value of [contentLayoutRect](contentlayoutrect.md).
- [maxFullScreenContentSize](maxfullscreencontentsize.md): A maximum size that is used to determine if a window can fit when it is in full screen in a tile.
- [minFullScreenContentSize](minfullscreencontentsize.md): A minimum size that is used to determine if a window can fit when it is in full screen in a tile.

# contentLayoutRect (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The area inside the window that is for non-obscured content, in window coordinates.

## Declaration

```objectivec
@property (readonly) NSRect contentLayoutRect;
```

<a id="Discussion"></a>

## Discussion

Typically, the area represented by this property is the same as the frame of the [contentView](contentview.md). However, for windows with [NSFullSizeContentViewWindowMask](../nsfullsizecontentviewwindowmask.md) set, there needs to be a way to determine the portion that is not under the toolbar. The [contentLayoutRect](contentlayoutrect.md) property contains the portion of the layout that is not obscured under the toolbar. This property is KVO compliant.

## See Also

### Sizing Content

- [contentAspectRatio](contentaspectratio.md): The window’s content aspect ratio.
- [contentMinSize](contentminsize.md): The minimum size of the window’s content view in the window’s base coordinate system.
- [setContentSize:](setcontentsize%28__%29.md): Sets the size of the window’s content view to a given size, which is expressed in the window’s base coordinate system.
- [contentMaxSize](contentmaxsize.md): The maximum size of the window’s content view in the window’s base coordinate system.
- [contentResizeIncrements](contentresizeincrements.md): The window’s content-view resizing increments.
- [contentLayoutGuide](contentlayoutguide.md): A value used by Auto Layout constraints to automatically bind to the value of [contentLayoutRect](contentlayoutrect.md).
- [maxFullScreenContentSize](maxfullscreencontentsize.md): A maximum size that is used to determine if a window can fit when it is in full screen in a tile.
- [minFullScreenContentSize](minfullscreencontentsize.md): A minimum size that is used to determine if a window can fit when it is in full screen in a tile.
