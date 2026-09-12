> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/collectionbehavior-swift.struct/fullscreenallowstiling](https://developer.apple.com/documentation/appkit/nswindow/collectionbehavior-swift.struct/fullscreenallowstiling)

# fullScreenAllowsTiling (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.11+

The window can be a secondary full screen tile even if it can’t be a full screen window itself.

## Declaration

```swift
static var fullScreenAllowsTiling: NSWindow.CollectionBehavior { get }
```

<a id="Discussion"></a>

## Discussion

The default behavior is to allow any window to participate in full-screen tiling, as long as it isn’t a panel or sheet and it meets certain requirements, such as being resizable. Windows that aren’t full screen capable can still become a secondary tile in full-screen.

A window can explicitly allow the system to place the window into a full-screen tile by including [fullScreenAllowsTiling](fullscreenallowstiling.md). Even if a window allows full-screen tiling, the system may not put it in the tile if the window’s [minFullScreenContentSize](../minfullscreencontentsize.md) is too large.

A window can explicitly disallow the system from placing the window in a full-screen tile by including [fullScreenDisallowsTiling](fullscreendisallowstiling.md). Windows that don’t support full-screen mode can use [fullScreenDisallowsTiling](fullscreendisallowstiling.md) to prevent the system from putting the window into a full-screen tile. Full-screen windows can use [fullScreenDisallowsTiling](fullscreendisallowstiling.md) to prevent the system from placing any other windows in its full-screen tile.

> **Note**

>  The system raises an exception if you set both [fullScreenAllowsTiling](fullscreenallowstiling.md) and [fullScreenDisallowsTiling](fullscreendisallowstiling.md).

## See Also

### Full screen

- [fullScreenPrimary](fullscreenprimary.md): The window can enter full-screen mode.
- [fullScreenAuxiliary](fullscreenauxiliary.md): The window displays on the same space as the full screen window.
- [fullScreenNone](fullscreennone.md): The window doesn’t support full-screen mode.
- [fullScreenDisallowsTiling](fullscreendisallowstiling.md): The window doesn’t support being a full-screen tile window, but may support being a full-screen window.

# NSWindowCollectionBehaviorFullScreenAllowsTiling (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.11+

The window can be a secondary full screen tile even if it can’t be a full screen window itself.

## Declaration

```objectivec
NSWindowCollectionBehaviorFullScreenAllowsTiling
```

<a id="Discussion"></a>

## Discussion

The default behavior is to allow any window to participate in full-screen tiling, as long as it isn’t a panel or sheet and it meets certain requirements, such as being resizable. Windows that aren’t full screen capable can still become a secondary tile in full-screen.

A window can explicitly allow the system to place the window into a full-screen tile by including [NSWindowCollectionBehaviorFullScreenAllowsTiling](fullscreenallowstiling.md). Even if a window allows full-screen tiling, the system may not put it in the tile if the window’s [minFullScreenContentSize](../minfullscreencontentsize.md) is too large.

A window can explicitly disallow the system from placing the window in a full-screen tile by including [NSWindowCollectionBehaviorFullScreenDisallowsTiling](fullscreendisallowstiling.md). Windows that don’t support full-screen mode can use [NSWindowCollectionBehaviorFullScreenDisallowsTiling](fullscreendisallowstiling.md) to prevent the system from putting the window into a full-screen tile. Full-screen windows can use [NSWindowCollectionBehaviorFullScreenDisallowsTiling](fullscreendisallowstiling.md) to prevent the system from placing any other windows in its full-screen tile.

> **Note**

>  The system raises an exception if you set both [NSWindowCollectionBehaviorFullScreenAllowsTiling](fullscreenallowstiling.md) and [NSWindowCollectionBehaviorFullScreenDisallowsTiling](fullscreendisallowstiling.md).

## See Also

### Full screen

- [NSWindowCollectionBehaviorFullScreenPrimary](fullscreenprimary.md): The window can enter full-screen mode.
- [NSWindowCollectionBehaviorFullScreenAuxiliary](fullscreenauxiliary.md): The window displays on the same space as the full screen window.
- [NSWindowCollectionBehaviorFullScreenNone](fullscreennone.md): The window doesn’t support full-screen mode.
- [NSWindowCollectionBehaviorFullScreenDisallowsTiling](fullscreendisallowstiling.md): The window doesn’t support being a full-screen tile window, but may support being a full-screen window.
