> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/order(_:relativeto:)](https://developer.apple.com/documentation/appkit/nswindow/order(_:relativeto:))

# order(\_:relativeTo:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Repositions the window’s window device in the window server’s screen list.

## Declaration

```swift
func order(_ place: NSWindow.OrderingMode, relativeTo otherWin: Int)
```

## Parameters

- `place`: \- [NSWindow.OrderingMode.out](orderingmode/out.md): The window is removed from the screen list and `otherWin` is ignored.

  - [NSWindow.OrderingMode.above](orderingmode/above.md): The window is ordered immediately in front of the window whose window number is `otherWin`
  - [NSWindow.OrderingMode.below](orderingmode/below.md): The window is placed immediately behind the window represented by `otherWin`.
- `otherWin`: The number of the window the window is to be placed in front of or behind. Pass `0` to place the window in front of (when `place` is `NSWindowAbove`) or behind (when `place` is `NSWindowBelow`) all other windows in its level.

## See Also

### Related Documentation

- [windowNumber](windownumber.md): The window number of the window’s window device.
- [makeKeyAndOrderFront(\_:)](makekeyandorderfront%28__%29.md): Moves the window to the front of the screen list, within its level, and makes it the key window; that is, it shows the window.

### Managing Window Layers

- [orderOut(\_:)](orderout%28__%29.md): Removes the window from the screen list, which hides the window.
- [orderBack(\_:)](orderback%28__%29.md): Moves the window to the back of its level in the screen list, without changing either the key window or the main window.
- [orderFront(\_:)](orderfront%28__%29.md): Moves the window to the front of its level in the screen list, without changing either the key window or the main window.
- [orderFrontRegardless()](orderfrontregardless%28%29.md): Moves the window to the front of its level, even if its application isn’t active, without changing either the key window or the main window.
- [level](level-swift.property.md): The window level of the window.
- [NSWindow.Level](level-swift.struct.md): The standard window levels in macOS.

# orderWindow:relativeTo: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Repositions the window’s window device in the window server’s screen list.

## Declaration

```objectivec
- (void) orderWindow:(NSWindowOrderingMode) place relativeTo:(NSInteger) otherWin;
```

## Parameters

- `place`: \- [NSWindowOut](orderingmode/out.md): The window is removed from the screen list and `otherWin` is ignored.

  - [NSWindowAbove](orderingmode/above.md): The window is ordered immediately in front of the window whose window number is `otherWin`
  - [NSWindowBelow](orderingmode/below.md): The window is placed immediately behind the window represented by `otherWin`.
- `otherWin`: The number of the window the window is to be placed in front of or behind. Pass `0` to place the window in front of (when `place` is `NSWindowAbove`) or behind (when `place` is `NSWindowBelow`) all other windows in its level.

## See Also

### Related Documentation

- [windowNumber](windownumber.md): The window number of the window’s window device.
- [makeKeyAndOrderFront:](makekeyandorderfront%28__%29.md): Moves the window to the front of the screen list, within its level, and makes it the key window; that is, it shows the window.

### Managing Window Layers

- [orderOut:](orderout%28__%29.md): Removes the window from the screen list, which hides the window.
- [orderBack:](orderback%28__%29.md): Moves the window to the back of its level in the screen list, without changing either the key window or the main window.
- [orderFront:](orderfront%28__%29.md): Moves the window to the front of its level in the screen list, without changing either the key window or the main window.
- [orderFrontRegardless](orderfrontregardless%28%29.md): Moves the window to the front of its level, even if its application isn’t active, without changing either the key window or the main window.
- [level](level-swift.property.md): The window level of the window.
- [NSWindowLevel](level-swift.struct.md): The standard window levels in macOS.
