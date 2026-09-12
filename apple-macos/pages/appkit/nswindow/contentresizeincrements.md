> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/contentresizeincrements](https://developer.apple.com/documentation/appkit/nswindow/contentresizeincrements)

# contentResizeIncrements (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The window’s content-view resizing increments.

## Declaration

```swift
var contentResizeIncrements: NSSize { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property restricts the user’s ability to resize the window so the width and height of its content view change by multiples of width and height increments. As the user resizes the window, the size of its content view changes by integral multiples of `contentResizeIncrements.width` and `contentResizeIncrements.height`. However, you can set a window’s size to any width and height programmatically. This property takes precedence over [resizeIncrements](resizeincrements.md).

## See Also

### Sizing Content

- [contentAspectRatio](contentaspectratio.md): The window’s content aspect ratio.
- [contentMinSize](contentminsize.md): The minimum size of the window’s content view in the window’s base coordinate system.
- [setContentSize(\_:)](setcontentsize%28__%29.md): Sets the size of the window’s content view to a given size, which is expressed in the window’s base coordinate system.
- [contentMaxSize](contentmaxsize.md): The maximum size of the window’s content view in the window’s base coordinate system.
- [contentLayoutGuide](contentlayoutguide.md): A value used by Auto Layout constraints to automatically bind to the value of [contentLayoutRect](contentlayoutrect.md).
- [contentLayoutRect](contentlayoutrect.md): The area inside the window that is for non-obscured content, in window coordinates.
- [maxFullScreenContentSize](maxfullscreencontentsize.md): A maximum size that is used to determine if a window can fit when it is in full screen in a tile.
- [minFullScreenContentSize](minfullscreencontentsize.md): A minimum size that is used to determine if a window can fit when it is in full screen in a tile.

# contentResizeIncrements (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The window’s content-view resizing increments.

## Declaration

```objectivec
@property NSSize contentResizeIncrements;
```

<a id="Discussion"></a>

## Discussion

The value of this property restricts the user’s ability to resize the window so the width and height of its content view change by multiples of width and height increments. As the user resizes the window, the size of its content view changes by integral multiples of `contentResizeIncrements.width` and `contentResizeIncrements.height`. However, you can set a window’s size to any width and height programmatically. This property takes precedence over [resizeIncrements](resizeincrements.md).

## See Also

### Sizing Content

- [contentAspectRatio](contentaspectratio.md): The window’s content aspect ratio.
- [contentMinSize](contentminsize.md): The minimum size of the window’s content view in the window’s base coordinate system.
- [setContentSize:](setcontentsize%28__%29.md): Sets the size of the window’s content view to a given size, which is expressed in the window’s base coordinate system.
- [contentMaxSize](contentmaxsize.md): The maximum size of the window’s content view in the window’s base coordinate system.
- [contentLayoutGuide](contentlayoutguide.md): A value used by Auto Layout constraints to automatically bind to the value of [contentLayoutRect](contentlayoutrect.md).
- [contentLayoutRect](contentlayoutrect.md): The area inside the window that is for non-obscured content, in window coordinates.
- [maxFullScreenContentSize](maxfullscreencontentsize.md): A maximum size that is used to determine if a window can fit when it is in full screen in a tile.
- [minFullScreenContentSize](minfullscreencontentsize.md): A minimum size that is used to determine if a window can fit when it is in full screen in a tile.
