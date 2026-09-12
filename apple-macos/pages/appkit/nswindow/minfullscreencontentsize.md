> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/minfullscreencontentsize](https://developer.apple.com/documentation/appkit/nswindow/minfullscreencontentsize)

# minFullScreenContentSize (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

A minimum size that is used to determine if a window can fit when it is in full screen in a tile.

## Declaration

```swift
var minFullScreenContentSize: NSSize { get set }
```

<a id="Discussion"></a>

## Discussion

By default, the system uses Auto Layout to determine the minimum size, so applications that don’t change window content upon entering full screen should not need to set the value of [minFullScreenContentSize](minfullscreencontentsize.md). (If Auto Layout is not used, the system queries [contentMinSize](contentminsize.md) and [contentMaxSize](contentmaxsize.md).) If an application does significant rework of the user interface in full screen, then it may be necessary to set the value of [minFullScreenContentSize](minfullscreencontentsize.md). You can use this property even if the window does not support full screen, but can be implicitly opted into supporting a full screen tile based on resizing behavior and window properties (for more information, see the [collectionBehavior](collectionbehavior-swift.property.md) property).

## See Also

### Sizing Content

- [contentAspectRatio](contentaspectratio.md): The window’s content aspect ratio.
- [contentMinSize](contentminsize.md): The minimum size of the window’s content view in the window’s base coordinate system.
- [setContentSize(\_:)](setcontentsize%28__%29.md): Sets the size of the window’s content view to a given size, which is expressed in the window’s base coordinate system.
- [contentMaxSize](contentmaxsize.md): The maximum size of the window’s content view in the window’s base coordinate system.
- [contentResizeIncrements](contentresizeincrements.md): The window’s content-view resizing increments.
- [contentLayoutGuide](contentlayoutguide.md): A value used by Auto Layout constraints to automatically bind to the value of [contentLayoutRect](contentlayoutrect.md).
- [contentLayoutRect](contentlayoutrect.md): The area inside the window that is for non-obscured content, in window coordinates.
- [maxFullScreenContentSize](maxfullscreencontentsize.md): A maximum size that is used to determine if a window can fit when it is in full screen in a tile.

# minFullScreenContentSize (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

A minimum size that is used to determine if a window can fit when it is in full screen in a tile.

## Declaration

```objectivec
@property NSSize minFullScreenContentSize;
```

<a id="Discussion"></a>

## Discussion

By default, the system uses Auto Layout to determine the minimum size, so applications that don’t change window content upon entering full screen should not need to set the value of [minFullScreenContentSize](minfullscreencontentsize.md). (If Auto Layout is not used, the system queries [contentMinSize](contentminsize.md) and [contentMaxSize](contentmaxsize.md).) If an application does significant rework of the user interface in full screen, then it may be necessary to set the value of [minFullScreenContentSize](minfullscreencontentsize.md). You can use this property even if the window does not support full screen, but can be implicitly opted into supporting a full screen tile based on resizing behavior and window properties (for more information, see the [collectionBehavior](collectionbehavior-swift.property.md) property).

## See Also

### Sizing Content

- [contentAspectRatio](contentaspectratio.md): The window’s content aspect ratio.
- [contentMinSize](contentminsize.md): The minimum size of the window’s content view in the window’s base coordinate system.
- [setContentSize:](setcontentsize%28__%29.md): Sets the size of the window’s content view to a given size, which is expressed in the window’s base coordinate system.
- [contentMaxSize](contentmaxsize.md): The maximum size of the window’s content view in the window’s base coordinate system.
- [contentResizeIncrements](contentresizeincrements.md): The window’s content-view resizing increments.
- [contentLayoutGuide](contentlayoutguide.md): A value used by Auto Layout constraints to automatically bind to the value of [contentLayoutRect](contentlayoutrect.md).
- [contentLayoutRect](contentlayoutrect.md): The area inside the window that is for non-obscured content, in window coordinates.
- [maxFullScreenContentSize](maxfullscreencontentsize.md): A maximum size that is used to determine if a window can fit when it is in full screen in a tile.
