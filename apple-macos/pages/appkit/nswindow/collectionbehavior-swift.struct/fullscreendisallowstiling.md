> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/collectionbehavior-swift.struct/fullscreendisallowstiling](https://developer.apple.com/documentation/appkit/nswindow/collectionbehavior-swift.struct/fullscreendisallowstiling)

# fullScreenDisallowsTiling (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.11+

The window doesn’t support being a full-screen tile window, but may support being a full-screen window.

## Declaration

```swift
static var fullScreenDisallowsTiling: NSWindow.CollectionBehavior { get }
```

<a id="Discussion"></a>

## Discussion

For more information about full-screen tile window support, see [fullScreenAllowsTiling](fullscreenallowstiling.md).

## See Also

### Full screen

- [fullScreenPrimary](fullscreenprimary.md): The window can enter full-screen mode.
- [fullScreenAuxiliary](fullscreenauxiliary.md): The window displays on the same space as the full screen window.
- [fullScreenNone](fullscreennone.md): The window doesn’t support full-screen mode.
- [fullScreenAllowsTiling](fullscreenallowstiling.md): The window can be a secondary full screen tile even if it can’t be a full screen window itself.

# NSWindowCollectionBehaviorFullScreenDisallowsTiling (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.11+

The window doesn’t support being a full-screen tile window, but may support being a full-screen window.

## Declaration

```objectivec
NSWindowCollectionBehaviorFullScreenDisallowsTiling
```

<a id="Discussion"></a>

## Discussion

For more information about full-screen tile window support, see [NSWindowCollectionBehaviorFullScreenAllowsTiling](fullscreenallowstiling.md).

## See Also

### Full screen

- [NSWindowCollectionBehaviorFullScreenPrimary](fullscreenprimary.md): The window can enter full-screen mode.
- [NSWindowCollectionBehaviorFullScreenAuxiliary](fullscreenauxiliary.md): The window displays on the same space as the full screen window.
- [NSWindowCollectionBehaviorFullScreenNone](fullscreennone.md): The window doesn’t support full-screen mode.
- [NSWindowCollectionBehaviorFullScreenAllowsTiling](fullscreenallowstiling.md): The window can be a secondary full screen tile even if it can’t be a full screen window itself.
