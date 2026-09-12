> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/contentmaxsize](https://developer.apple.com/documentation/appkit/nswindow/contentmaxsize)

# contentMaxSize (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The maximum size of the window’s content view in the window’s base coordinate system.

## Declaration

```swift
var contentMaxSize: NSSize { get set }
```

<a id="Discussion"></a>

## Discussion

The maximum size constraint is enforced for resizing by the user as well as for the [setContentSize(\_:)](setcontentsize%28__%29.md) method and the `setFrame...` methods other than [setFrame(\_:display:)](setframe%28__display_%29.md) and [setFrame(\_:display:animate:)](setframe%28__display_animate_%29.md). This method takes precedence over the [maxSize](maxsize.md) property.

## See Also

### Sizing Content

- [contentAspectRatio](contentaspectratio.md): The window’s content aspect ratio.
- [contentMinSize](contentminsize.md): The minimum size of the window’s content view in the window’s base coordinate system.
- [setContentSize(\_:)](setcontentsize%28__%29.md): Sets the size of the window’s content view to a given size, which is expressed in the window’s base coordinate system.
- [contentResizeIncrements](contentresizeincrements.md): The window’s content-view resizing increments.
- [contentLayoutGuide](contentlayoutguide.md): A value used by Auto Layout constraints to automatically bind to the value of [contentLayoutRect](contentlayoutrect.md).
- [contentLayoutRect](contentlayoutrect.md): The area inside the window that is for non-obscured content, in window coordinates.
- [maxFullScreenContentSize](maxfullscreencontentsize.md): A maximum size that is used to determine if a window can fit when it is in full screen in a tile.
- [minFullScreenContentSize](minfullscreencontentsize.md): A minimum size that is used to determine if a window can fit when it is in full screen in a tile.

# contentMaxSize (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The maximum size of the window’s content view in the window’s base coordinate system.

## Declaration

```objectivec
@property NSSize contentMaxSize;
```

<a id="Discussion"></a>

## Discussion

The maximum size constraint is enforced for resizing by the user as well as for the [setContentSize:](setcontentsize%28__%29.md) method and the `setFrame...` methods other than [setFrame:display:](setframe%28__display_%29.md) and [setFrame:display:animate:](setframe%28__display_animate_%29.md). This method takes precedence over the [maxSize](maxsize.md) property.

## See Also

### Sizing Content

- [contentAspectRatio](contentaspectratio.md): The window’s content aspect ratio.
- [contentMinSize](contentminsize.md): The minimum size of the window’s content view in the window’s base coordinate system.
- [setContentSize:](setcontentsize%28__%29.md): Sets the size of the window’s content view to a given size, which is expressed in the window’s base coordinate system.
- [contentResizeIncrements](contentresizeincrements.md): The window’s content-view resizing increments.
- [contentLayoutGuide](contentlayoutguide.md): A value used by Auto Layout constraints to automatically bind to the value of [contentLayoutRect](contentlayoutrect.md).
- [contentLayoutRect](contentlayoutrect.md): The area inside the window that is for non-obscured content, in window coordinates.
- [maxFullScreenContentSize](maxfullscreencontentsize.md): A maximum size that is used to determine if a window can fit when it is in full screen in a tile.
- [minFullScreenContentSize](minfullscreencontentsize.md): A minimum size that is used to determine if a window can fit when it is in full screen in a tile.
