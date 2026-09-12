> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/contentlayoutguide](https://developer.apple.com/documentation/appkit/nswindow/contentlayoutguide)

# contentLayoutGuide (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A value used by Auto Layout constraints to automatically bind to the value of [contentLayoutRect](contentlayoutrect.md).

## Declaration

```swift
var contentLayoutGuide: Any? { get }
```

## See Also

### Sizing Content

- [contentAspectRatio](contentaspectratio.md): The window’s content aspect ratio.
- [contentMinSize](contentminsize.md): The minimum size of the window’s content view in the window’s base coordinate system.
- [setContentSize(\_:)](setcontentsize%28__%29.md): Sets the size of the window’s content view to a given size, which is expressed in the window’s base coordinate system.
- [contentMaxSize](contentmaxsize.md): The maximum size of the window’s content view in the window’s base coordinate system.
- [contentResizeIncrements](contentresizeincrements.md): The window’s content-view resizing increments.
- [contentLayoutRect](contentlayoutrect.md): The area inside the window that is for non-obscured content, in window coordinates.
- [maxFullScreenContentSize](maxfullscreencontentsize.md): A maximum size that is used to determine if a window can fit when it is in full screen in a tile.
- [minFullScreenContentSize](minfullscreencontentsize.md): A minimum size that is used to determine if a window can fit when it is in full screen in a tile.

# contentLayoutGuide (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A value used by Auto Layout constraints to automatically bind to the value of [contentLayoutRect](contentlayoutrect.md).

## Declaration

```objectivec
@property (readonly, nullable) id contentLayoutGuide;
```

## See Also

### Sizing Content

- [contentAspectRatio](contentaspectratio.md): The window’s content aspect ratio.
- [contentMinSize](contentminsize.md): The minimum size of the window’s content view in the window’s base coordinate system.
- [setContentSize:](setcontentsize%28__%29.md): Sets the size of the window’s content view to a given size, which is expressed in the window’s base coordinate system.
- [contentMaxSize](contentmaxsize.md): The maximum size of the window’s content view in the window’s base coordinate system.
- [contentResizeIncrements](contentresizeincrements.md): The window’s content-view resizing increments.
- [contentLayoutRect](contentlayoutrect.md): The area inside the window that is for non-obscured content, in window coordinates.
- [maxFullScreenContentSize](maxfullscreencontentsize.md): A maximum size that is used to determine if a window can fit when it is in full screen in a tile.
- [minFullScreenContentSize](minfullscreencontentsize.md): A minimum size that is used to determine if a window can fit when it is in full screen in a tile.
