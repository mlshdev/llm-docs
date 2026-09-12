> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/isoneshot](https://developer.apple.com/documentation/appkit/nswindow/isoneshot)

# isOneShot (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.14)

A Boolean value that indicates whether the window device the window manages is freed when it’s removed from the screen list.

> This property does not do anything and should not be used

## Declaration

```swift
var isOneShot: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the window’s window device is freed when it’s removed from the screen list (that is, hidden) and another is created when it’s returned to the screen. When the value is [false](https://developer.apple.com/documentation/swift/false), the window device is reused. Freeing the window device when it’s removed from the screen list can result in memory savings and performance improvement for window objects that don’t take long to display. Doing so is particularly appropriate for window objects the user might use once or twice, but not display continually.

## See Also

### Properties

- [backingLocation](backinglocation-swift.property.md): Deprecated. The location of the window’s backing store.
- [preferredBackingLocation](preferredbackinglocation.md): Deprecated. A Boolean value that indicates the preferred location for the window’s backing store.
- [drawers](drawers.md): Deprecated. The collection of drawers associated with the window.
- [showsResizeIndicator](showsresizeindicator.md): Deprecated. A Boolean value that indicates whether the window’s resize indicator is visible.
- [isFlushWindowDisabled](isflushwindowdisabled.md): Deprecated. A Boolean value that indicates whether the window’s flushing ability is disabled.
- [isAutodisplay](isautodisplay.md): Deprecated. A Boolean value that indicates whether the window automatically displays views that need to be displayed.
- [graphicsContext](graphicscontext.md): Deprecated. The graphics context associated with the window for the current thread.
- [windowRef](windowref.md): Deprecated. The Carbon window reference associated with the window, creating one if necessary.

# oneShot (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.14)

A Boolean value that indicates whether the window device the window manages is freed when it’s removed from the screen list.

> This property does not do anything and should not be used

## Declaration

```objectivec
@property (getter=isOneShot) BOOL oneShot;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the window’s window device is freed when it’s removed from the screen list (that is, hidden) and another is created when it’s returned to the screen. When the value is [false](https://developer.apple.com/documentation/swift/false), the window device is reused. Freeing the window device when it’s removed from the screen list can result in memory savings and performance improvement for window objects that don’t take long to display. Doing so is particularly appropriate for window objects the user might use once or twice, but not display continually.

## See Also

### Properties

- [backingLocation](backinglocation-swift.property.md): Deprecated. The location of the window’s backing store.
- [preferredBackingLocation](preferredbackinglocation.md): Deprecated. A Boolean value that indicates the preferred location for the window’s backing store.
- [drawers](drawers.md): Deprecated. The collection of drawers associated with the window.
- [showsResizeIndicator](showsresizeindicator.md): Deprecated. A Boolean value that indicates whether the window’s resize indicator is visible.
- [flushWindowDisabled](isflushwindowdisabled.md): Deprecated. A Boolean value that indicates whether the window’s flushing ability is disabled.
- [autodisplay](isautodisplay.md): Deprecated. A Boolean value that indicates whether the window automatically displays views that need to be displayed.
- [graphicsContext](graphicscontext.md): Deprecated. The graphics context associated with the window for the current thread.
- [windowRef](windowref.md): Deprecated. The Carbon window reference associated with the window, creating one if necessary.
