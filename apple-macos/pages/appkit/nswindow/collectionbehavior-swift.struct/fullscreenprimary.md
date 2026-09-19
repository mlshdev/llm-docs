> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nswindow/collectionbehavior-swift.struct/fullscreenprimary

# fullScreenPrimary (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

The window can enter full-screen mode.

## Declaration

```swift
static var fullScreenPrimary: NSWindow.CollectionBehavior { get }
```

## See Also

### Full screen

- [fullScreenAuxiliary](fullscreenauxiliary.md): The window displays on the same space as the full screen window.
- [fullScreenNone](fullscreennone.md): The window doesn’t support full-screen mode.
- [fullScreenAllowsTiling](fullscreenallowstiling.md): The window can be a secondary full screen tile even if it can’t be a full screen window itself.
- [fullScreenDisallowsTiling](fullscreendisallowstiling.md): The window doesn’t support being a full-screen tile window, but may support being a full-screen window.

# NSWindowCollectionBehaviorFullScreenPrimary (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.7+

The window can enter full-screen mode.

## Declaration

```objectivec
NSWindowCollectionBehaviorFullScreenPrimary
```

## See Also

### Full screen

- [NSWindowCollectionBehaviorFullScreenAuxiliary](fullscreenauxiliary.md): The window displays on the same space as the full screen window.
- [NSWindowCollectionBehaviorFullScreenNone](fullscreennone.md): The window doesn’t support full-screen mode.
- [NSWindowCollectionBehaviorFullScreenAllowsTiling](fullscreenallowstiling.md): The window can be a secondary full screen tile even if it can’t be a full screen window itself.
- [NSWindowCollectionBehaviorFullScreenDisallowsTiling](fullscreendisallowstiling.md): The window doesn’t support being a full-screen tile window, but may support being a full-screen window.
