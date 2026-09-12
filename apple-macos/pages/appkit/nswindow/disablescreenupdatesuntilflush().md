> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/disablescreenupdatesuntilflush()](https://developer.apple.com/documentation/appkit/nswindow/disablescreenupdatesuntilflush())

# disableScreenUpdatesUntilFlush() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 15.0)

Disables the window’s screen updates until the window is flushed.

> This method does not do anything and should not be called.

## Declaration

```swift
func disableScreenUpdatesUntilFlush()
```

<a id="Discussion"></a>

## Discussion

This method can be invoked to synchronize hardware surface flushes with the window’s flushes. The window immediately disables screen updates using the [NSDisableScreenUpdates()](../nsdisablescreenupdates%28%29.md) function and reenables screen updates when the window flushes. Sending this message multiple times during a window update cycle has no effect.

To ensure that screen updates are reenabled in a timely manner, it’s crucial that the window is marked as needing display and that the display will occur soon (that is, within the next second). When you invoke `disableScreenUpdatesUntilFlush`, you can make sure that a marked window gets displayed by returning control to the run loop on the main thread or by sending the window [displayIfNeeded()](displayifneeded%28%29.md) or [display()](display%28%29.md). If it’s unclear whether the window is marked as needing display, you can also ensure that a display occurs by using [setNeedsDisplay(\_:)](../nsview/setneedsdisplay%28__%29.md) for a view that’s visible in the window.

## See Also

### Updating Windows

- [update()](update%28%29.md): Updates the window.

# disableScreenUpdatesUntilFlush (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 15.0)

Disables the window’s screen updates until the window is flushed.

> This method does not do anything and should not be called.

## Declaration

```objectivec
- (void) disableScreenUpdatesUntilFlush;
```

<a id="Discussion"></a>

## Discussion

This method can be invoked to synchronize hardware surface flushes with the window’s flushes. The window immediately disables screen updates using the [NSDisableScreenUpdates](../nsdisablescreenupdates%28%29.md) function and reenables screen updates when the window flushes. Sending this message multiple times during a window update cycle has no effect.

To ensure that screen updates are reenabled in a timely manner, it’s crucial that the window is marked as needing display and that the display will occur soon (that is, within the next second). When you invoke `disableScreenUpdatesUntilFlush`, you can make sure that a marked window gets displayed by returning control to the run loop on the main thread or by sending the window [displayIfNeeded](displayifneeded%28%29.md) or [display](display%28%29.md). If it’s unclear whether the window is marked as needing display, you can also ensure that a display occurs by using [setNeedsDisplayInRect:](../nsview/setneedsdisplay%28__%29.md) for a view that’s visible in the window.

## See Also

### Updating Windows

- [update](update%28%29.md): Updates the window.
