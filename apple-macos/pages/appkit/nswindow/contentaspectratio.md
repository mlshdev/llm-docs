> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/contentaspectratio](https://developer.apple.com/documentation/appkit/nswindow/contentaspectratio)

# contentAspectRatio (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The window’s content aspect ratio.

## Declaration

```swift
var contentAspectRatio: NSSize { get set }
```

<a id="Discussion"></a>

## Discussion

By default, the content aspect ratio (that is, height in relation to width) is `(0, 0)`. If you set the aspect ratio of a window’s content view, the dimensions of its content rectangle are constrained to integral multiples of that ratio when users resize it. You can set a window’s content view to any size programmatically, regardless of its aspect ratio. The value of this property takes precedence over [aspectRatio](aspectratio.md).

## See Also

### Sizing Content

- [contentMinSize](contentminsize.md): The minimum size of the window’s content view in the window’s base coordinate system.
- [setContentSize(\_:)](setcontentsize%28__%29.md): Sets the size of the window’s content view to a given size, which is expressed in the window’s base coordinate system.
- [contentMaxSize](contentmaxsize.md): The maximum size of the window’s content view in the window’s base coordinate system.
- [contentResizeIncrements](contentresizeincrements.md): The window’s content-view resizing increments.
- [contentLayoutGuide](contentlayoutguide.md): A value used by Auto Layout constraints to automatically bind to the value of [contentLayoutRect](contentlayoutrect.md).
- [contentLayoutRect](contentlayoutrect.md): The area inside the window that is for non-obscured content, in window coordinates.
- [maxFullScreenContentSize](maxfullscreencontentsize.md): A maximum size that is used to determine if a window can fit when it is in full screen in a tile.
- [minFullScreenContentSize](minfullscreencontentsize.md): A minimum size that is used to determine if a window can fit when it is in full screen in a tile.

# contentAspectRatio (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The window’s content aspect ratio.

## Declaration

```objectivec
@property NSSize contentAspectRatio;
```

<a id="Discussion"></a>

## Discussion

By default, the content aspect ratio (that is, height in relation to width) is `(0, 0)`. If you set the aspect ratio of a window’s content view, the dimensions of its content rectangle are constrained to integral multiples of that ratio when users resize it. You can set a window’s content view to any size programmatically, regardless of its aspect ratio. The value of this property takes precedence over [aspectRatio](aspectratio.md).

## See Also

### Sizing Content

- [contentMinSize](contentminsize.md): The minimum size of the window’s content view in the window’s base coordinate system.
- [setContentSize:](setcontentsize%28__%29.md): Sets the size of the window’s content view to a given size, which is expressed in the window’s base coordinate system.
- [contentMaxSize](contentmaxsize.md): The maximum size of the window’s content view in the window’s base coordinate system.
- [contentResizeIncrements](contentresizeincrements.md): The window’s content-view resizing increments.
- [contentLayoutGuide](contentlayoutguide.md): A value used by Auto Layout constraints to automatically bind to the value of [contentLayoutRect](contentlayoutrect.md).
- [contentLayoutRect](contentlayoutrect.md): The area inside the window that is for non-obscured content, in window coordinates.
- [maxFullScreenContentSize](maxfullscreencontentsize.md): A maximum size that is used to determine if a window can fit when it is in full screen in a tile.
- [minFullScreenContentSize](minfullscreencontentsize.md): A minimum size that is used to determine if a window can fit when it is in full screen in a tile.
