> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/showsresizeindicator](https://developer.apple.com/documentation/appkit/nswindow/showsresizeindicator)

# showsResizeIndicator (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 15.0)

A Boolean value that indicates whether the window’s resize indicator is visible.

> This property does not do anything and should not be used.

## Declaration

```swift
var showsResizeIndicator: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the window’s resize indicator is visible; otherwise, [false](https://developer.apple.com/documentation/swift/false). This property does not affect whether the window is resizable.

## See Also

### Properties

- [backingLocation](backinglocation-swift.property.md): Deprecated. The location of the window’s backing store.
- [preferredBackingLocation](preferredbackinglocation.md): Deprecated. A Boolean value that indicates the preferred location for the window’s backing store.
- [isOneShot](isoneshot.md): Deprecated. A Boolean value that indicates whether the window device the window manages is freed when it’s removed from the screen list.
- [drawers](drawers.md): Deprecated. The collection of drawers associated with the window.
- [isFlushWindowDisabled](isflushwindowdisabled.md): Deprecated. A Boolean value that indicates whether the window’s flushing ability is disabled.
- [isAutodisplay](isautodisplay.md): Deprecated. A Boolean value that indicates whether the window automatically displays views that need to be displayed.
- [graphicsContext](graphicscontext.md): Deprecated. The graphics context associated with the window for the current thread.
- [windowRef](windowref.md): Deprecated. The Carbon window reference associated with the window, creating one if necessary.

# showsResizeIndicator (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 15.0)

A Boolean value that indicates whether the window’s resize indicator is visible.

> This property does not do anything and should not be used.

## Declaration

```objectivec
@property BOOL showsResizeIndicator;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the window’s resize indicator is visible; otherwise, [false](https://developer.apple.com/documentation/swift/false). This property does not affect whether the window is resizable.

## See Also

### Properties

- [backingLocation](backinglocation-swift.property.md): Deprecated. The location of the window’s backing store.
- [preferredBackingLocation](preferredbackinglocation.md): Deprecated. A Boolean value that indicates the preferred location for the window’s backing store.
- [oneShot](isoneshot.md): Deprecated. A Boolean value that indicates whether the window device the window manages is freed when it’s removed from the screen list.
- [drawers](drawers.md): Deprecated. The collection of drawers associated with the window.
- [flushWindowDisabled](isflushwindowdisabled.md): Deprecated. A Boolean value that indicates whether the window’s flushing ability is disabled.
- [autodisplay](isautodisplay.md): Deprecated. A Boolean value that indicates whether the window automatically displays views that need to be displayed.
- [graphicsContext](graphicscontext.md): Deprecated. The graphics context associated with the window for the current thread.
- [windowRef](windowref.md): Deprecated. The Carbon window reference associated with the window, creating one if necessary.
