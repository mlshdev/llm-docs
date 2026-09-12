> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/isautodisplay](https://developer.apple.com/documentation/appkit/nswindow/isautodisplay)

# isAutodisplay (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.14)

A Boolean value that indicates whether the window automatically displays views that need to be displayed.

> Use +\[NSAnimationContext runAnimationGroup:completionHandler:\] to temporarily prevent AppKit's automatic deferred display mechanism from drawing.

## Declaration

```swift
var isAutodisplay: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the window automatically displays views that need to be displayed; otherwise, [false](https://developer.apple.com/documentation/swift/false). If `autodisplay` is [false](https://developer.apple.com/documentation/swift/false), the window or its views must be explicitly displayed.

Automatic display typically occurs on each pass through the event loop.

## See Also

### Related Documentation

- [needsDisplay](../nsview/needsdisplay.md): A Boolean value that determines whether the view needs to be redrawn before being displayed.
- [displayIfNeeded()](displayifneeded%28%29.md): Passes a display message down the window’s view hierarchy, thus redrawing all views that need displaying.

### Properties

- [backingLocation](backinglocation-swift.property.md): Deprecated. The location of the window’s backing store.
- [preferredBackingLocation](preferredbackinglocation.md): Deprecated. A Boolean value that indicates the preferred location for the window’s backing store.
- [isOneShot](isoneshot.md): Deprecated. A Boolean value that indicates whether the window device the window manages is freed when it’s removed from the screen list.
- [drawers](drawers.md): Deprecated. The collection of drawers associated with the window.
- [showsResizeIndicator](showsresizeindicator.md): Deprecated. A Boolean value that indicates whether the window’s resize indicator is visible.
- [isFlushWindowDisabled](isflushwindowdisabled.md): Deprecated. A Boolean value that indicates whether the window’s flushing ability is disabled.
- [graphicsContext](graphicscontext.md): Deprecated. The graphics context associated with the window for the current thread.
- [windowRef](windowref.md): Deprecated. The Carbon window reference associated with the window, creating one if necessary.

# autodisplay (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.14)

A Boolean value that indicates whether the window automatically displays views that need to be displayed.

> Use +\[NSAnimationContext runAnimationGroup:completionHandler:\] to temporarily prevent AppKit's automatic deferred display mechanism from drawing.

## Declaration

```objectivec
@property (getter=isAutodisplay) BOOL autodisplay;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the window automatically displays views that need to be displayed; otherwise, [false](https://developer.apple.com/documentation/swift/false). If `autodisplay` is [false](https://developer.apple.com/documentation/swift/false), the window or its views must be explicitly displayed.

Automatic display typically occurs on each pass through the event loop.

## See Also

### Related Documentation

- [needsDisplay](../nsview/needsdisplay.md): A Boolean value that determines whether the view needs to be redrawn before being displayed.
- [displayIfNeeded](displayifneeded%28%29.md): Passes a display message down the window’s view hierarchy, thus redrawing all views that need displaying.

### Properties

- [backingLocation](backinglocation-swift.property.md): Deprecated. The location of the window’s backing store.
- [preferredBackingLocation](preferredbackinglocation.md): Deprecated. A Boolean value that indicates the preferred location for the window’s backing store.
- [oneShot](isoneshot.md): Deprecated. A Boolean value that indicates whether the window device the window manages is freed when it’s removed from the screen list.
- [drawers](drawers.md): Deprecated. The collection of drawers associated with the window.
- [showsResizeIndicator](showsresizeindicator.md): Deprecated. A Boolean value that indicates whether the window’s resize indicator is visible.
- [flushWindowDisabled](isflushwindowdisabled.md): Deprecated. A Boolean value that indicates whether the window’s flushing ability is disabled.
- [graphicsContext](graphicscontext.md): Deprecated. The graphics context associated with the window for the current thread.
- [windowRef](windowref.md): Deprecated. The Carbon window reference associated with the window, creating one if necessary.
