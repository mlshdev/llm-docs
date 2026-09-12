> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/isflushwindowdisabled](https://developer.apple.com/documentation/appkit/nswindow/isflushwindowdisabled)

# isFlushWindowDisabled (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.14)

A Boolean value that indicates whether the window’s flushing ability is disabled.

> Use +\[NSAnimationContext runAnimationGroup:completionHandler:\] to perform atomic updates across runloop invocations.

## Declaration

```swift
var isFlushWindowDisabled: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the window’s flushing ability has been disabled; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [disableFlushing()](disableflushing%28%29.md): Deprecated. Disables the [flush()](flush%28%29.md) method for the window.
- [enableFlushing()](enableflushing%28%29.md): Deprecated. Reenables the [flush()](flush%28%29.md) method for the window after it was disabled through a previous [disableFlushing()](disableflushing%28%29.md) message.

### Properties

- [backingLocation](backinglocation-swift.property.md): Deprecated. The location of the window’s backing store.
- [preferredBackingLocation](preferredbackinglocation.md): Deprecated. A Boolean value that indicates the preferred location for the window’s backing store.
- [isOneShot](isoneshot.md): Deprecated. A Boolean value that indicates whether the window device the window manages is freed when it’s removed from the screen list.
- [drawers](drawers.md): Deprecated. The collection of drawers associated with the window.
- [showsResizeIndicator](showsresizeindicator.md): Deprecated. A Boolean value that indicates whether the window’s resize indicator is visible.
- [isAutodisplay](isautodisplay.md): Deprecated. A Boolean value that indicates whether the window automatically displays views that need to be displayed.
- [graphicsContext](graphicscontext.md): Deprecated. The graphics context associated with the window for the current thread.
- [windowRef](windowref.md): Deprecated. The Carbon window reference associated with the window, creating one if necessary.

# flushWindowDisabled (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.14)

A Boolean value that indicates whether the window’s flushing ability is disabled.

> Use +\[NSAnimationContext runAnimationGroup:completionHandler:\] to perform atomic updates across runloop invocations.

## Declaration

```objectivec
@property (readonly, getter=isFlushWindowDisabled) BOOL flushWindowDisabled;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the window’s flushing ability has been disabled; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [disableFlushWindow](disableflushing%28%29.md): Deprecated. Disables the [flushWindow](flush%28%29.md) method for the window.
- [enableFlushWindow](enableflushing%28%29.md): Deprecated. Reenables the [flushWindow](flush%28%29.md) method for the window after it was disabled through a previous [disableFlushWindow](disableflushing%28%29.md) message.

### Properties

- [backingLocation](backinglocation-swift.property.md): Deprecated. The location of the window’s backing store.
- [preferredBackingLocation](preferredbackinglocation.md): Deprecated. A Boolean value that indicates the preferred location for the window’s backing store.
- [oneShot](isoneshot.md): Deprecated. A Boolean value that indicates whether the window device the window manages is freed when it’s removed from the screen list.
- [drawers](drawers.md): Deprecated. The collection of drawers associated with the window.
- [showsResizeIndicator](showsresizeindicator.md): Deprecated. A Boolean value that indicates whether the window’s resize indicator is visible.
- [autodisplay](isautodisplay.md): Deprecated. A Boolean value that indicates whether the window automatically displays views that need to be displayed.
- [graphicsContext](graphicscontext.md): Deprecated. The graphics context associated with the window for the current thread.
- [windowRef](windowref.md): Deprecated. The Carbon window reference associated with the window, creating one if necessary.
