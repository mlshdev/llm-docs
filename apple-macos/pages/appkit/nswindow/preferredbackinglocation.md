> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/preferredbackinglocation](https://developer.apple.com/documentation/appkit/nswindow/preferredbackinglocation)

# preferredBackingLocation (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+ (deprecated in 10.14)

A Boolean value that indicates the preferred location for the window’s backing store.

> This property does not do anything and should not be used

## Declaration

```swift
var preferredBackingLocation: NSWindow.BackingLocation { get set }
```

<a id="Discussion"></a>

## Discussion

See [NSWindow.BackingLocation](backinglocation-swift.enum.md) for possible values. It’s recommended that you set this property only when optimizing for performance.

## See Also

### Properties

- [backingLocation](backinglocation-swift.property.md): Deprecated. The location of the window’s backing store.
- [isOneShot](isoneshot.md): Deprecated. A Boolean value that indicates whether the window device the window manages is freed when it’s removed from the screen list.
- [drawers](drawers.md): Deprecated. The collection of drawers associated with the window.
- [showsResizeIndicator](showsresizeindicator.md): Deprecated. A Boolean value that indicates whether the window’s resize indicator is visible.
- [isFlushWindowDisabled](isflushwindowdisabled.md): Deprecated. A Boolean value that indicates whether the window’s flushing ability is disabled.
- [isAutodisplay](isautodisplay.md): Deprecated. A Boolean value that indicates whether the window automatically displays views that need to be displayed.
- [graphicsContext](graphicscontext.md): Deprecated. The graphics context associated with the window for the current thread.
- [windowRef](windowref.md): Deprecated. The Carbon window reference associated with the window, creating one if necessary.

# preferredBackingLocation (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+ (deprecated in 10.14)

A Boolean value that indicates the preferred location for the window’s backing store.

> This property does not do anything and should not be used

## Declaration

```objectivec
@property NSWindowBackingLocation preferredBackingLocation;
```

<a id="Discussion"></a>

## Discussion

See [NSWindowBackingLocation](backinglocation-swift.enum.md) for possible values. It’s recommended that you set this property only when optimizing for performance.

## See Also

### Properties

- [backingLocation](backinglocation-swift.property.md): Deprecated. The location of the window’s backing store.
- [oneShot](isoneshot.md): Deprecated. A Boolean value that indicates whether the window device the window manages is freed when it’s removed from the screen list.
- [drawers](drawers.md): Deprecated. The collection of drawers associated with the window.
- [showsResizeIndicator](showsresizeindicator.md): Deprecated. A Boolean value that indicates whether the window’s resize indicator is visible.
- [flushWindowDisabled](isflushwindowdisabled.md): Deprecated. A Boolean value that indicates whether the window’s flushing ability is disabled.
- [autodisplay](isautodisplay.md): Deprecated. A Boolean value that indicates whether the window automatically displays views that need to be displayed.
- [graphicsContext](graphicscontext.md): Deprecated. The graphics context associated with the window for the current thread.
- [windowRef](windowref.md): Deprecated. The Carbon window reference associated with the window, creating one if necessary.
