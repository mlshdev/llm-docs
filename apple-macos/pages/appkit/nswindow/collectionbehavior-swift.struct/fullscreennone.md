> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nswindow/collectionbehavior-swift.struct/fullscreennone

# fullScreenNone (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

The window doesn’t support full-screen mode.

## Declaration

```swift
static var fullScreenNone: NSWindow.CollectionBehavior { get }
```

## See Also

### Full screen

- [fullScreenPrimary](fullscreenprimary.md): The window can enter full-screen mode.
- [fullScreenAuxiliary](fullscreenauxiliary.md): The window displays on the same space as the full screen window.
- [fullScreenAllowsTiling](fullscreenallowstiling.md): The window can be a secondary full screen tile even if it can’t be a full screen window itself.
- [fullScreenDisallowsTiling](fullscreendisallowstiling.md): The window doesn’t support being a full-screen tile window, but may support being a full-screen window.

# NSWindowCollectionBehaviorFullScreenNone (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.7+

The window doesn’t support full-screen mode.

## Declaration

```objectivec
NSWindowCollectionBehaviorFullScreenNone
```

## See Also

### Full screen

- [NSWindowCollectionBehaviorFullScreenPrimary](fullscreenprimary.md): The window can enter full-screen mode.
- [NSWindowCollectionBehaviorFullScreenAuxiliary](fullscreenauxiliary.md): The window displays on the same space as the full screen window.
- [NSWindowCollectionBehaviorFullScreenAllowsTiling](fullscreenallowstiling.md): The window can be a secondary full screen tile even if it can’t be a full screen window itself.
- [NSWindowCollectionBehaviorFullScreenDisallowsTiling](fullscreendisallowstiling.md): The window doesn’t support being a full-screen tile window, but may support being a full-screen window.
