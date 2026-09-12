> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/graphicscontext](https://developer.apple.com/documentation/appkit/nswindow/graphicscontext)

# graphicsContext (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.14)

The graphics context associated with the window for the current thread.

> Add instances of NSView to display content in a window.

## Declaration

```swift
var graphicsContext: NSGraphicsContext? { get }
```

## See Also

### Properties

- [backingLocation](backinglocation-swift.property.md): Deprecated. The location of the window’s backing store.
- [preferredBackingLocation](preferredbackinglocation.md): Deprecated. A Boolean value that indicates the preferred location for the window’s backing store.
- [isOneShot](isoneshot.md): Deprecated. A Boolean value that indicates whether the window device the window manages is freed when it’s removed from the screen list.
- [drawers](drawers.md): Deprecated. The collection of drawers associated with the window.
- [showsResizeIndicator](showsresizeindicator.md): Deprecated. A Boolean value that indicates whether the window’s resize indicator is visible.
- [isFlushWindowDisabled](isflushwindowdisabled.md): Deprecated. A Boolean value that indicates whether the window’s flushing ability is disabled.
- [isAutodisplay](isautodisplay.md): Deprecated. A Boolean value that indicates whether the window automatically displays views that need to be displayed.
- [windowRef](windowref.md): Deprecated. The Carbon window reference associated with the window, creating one if necessary.

# graphicsContext (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.14)

The graphics context associated with the window for the current thread.

> Add instances of NSView to display content in a window.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSGraphicsContext * graphicsContext;
```

## See Also

### Properties

- [backingLocation](backinglocation-swift.property.md): Deprecated. The location of the window’s backing store.
- [preferredBackingLocation](preferredbackinglocation.md): Deprecated. A Boolean value that indicates the preferred location for the window’s backing store.
- [oneShot](isoneshot.md): Deprecated. A Boolean value that indicates whether the window device the window manages is freed when it’s removed from the screen list.
- [drawers](drawers.md): Deprecated. The collection of drawers associated with the window.
- [showsResizeIndicator](showsresizeindicator.md): Deprecated. A Boolean value that indicates whether the window’s resize indicator is visible.
- [flushWindowDisabled](isflushwindowdisabled.md): Deprecated. A Boolean value that indicates whether the window’s flushing ability is disabled.
- [autodisplay](isautodisplay.md): Deprecated. A Boolean value that indicates whether the window automatically displays views that need to be displayed.
- [windowRef](windowref.md): Deprecated. The Carbon window reference associated with the window, creating one if necessary.
