> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowcontroller/showwindow(_:)](https://developer.apple.com/documentation/appkit/nswindowcontroller/showwindow(_:))

# showWindow(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Displays the window associated with the receiver.

## Declaration

```swift
@IBAction func showWindow(_ sender: Any?)
```

## Parameters

- `sender`: The control sending the message; can be `nil`.

<a id="Discussion"></a>

## Discussion

If the window is an [NSPanel](../nspanel.md) object and has its [becomesKeyOnlyIfNeeded](../nspanel/becomeskeyonlyifneeded.md) flag set to [true](https://developer.apple.com/documentation/swift/true), the window is displayed in front of all other windows but is not made key; otherwise it is displayed in front and is made key. This method is useful for menu actions.

## See Also

### Related Documentation

- [orderFront(\_:)](../nswindow/orderfront%28__%29.md): Moves the window to the front of its level in the screen list, without changing either the key window or the main window.
- [makeKeyAndOrderFront(\_:)](../nswindow/makekeyandorderfront%28__%29.md): Moves the window to the front of the screen list, within its level, and makes it the key window; that is, it shows the window.

### Loading and Displaying the Window

- [loadWindow()](loadwindow%28%29.md): Loads the receiver’s window from the nib file.
- [isWindowLoaded](iswindowloaded.md): A Boolean value that indicates whether the nib file containing the receiver’s window has been loaded.
- [window](window.md): The window owned by the receiver.
- [windowDidLoad()](windowdidload%28%29.md): Sent after the window owned by the receiver has been loaded.
- [windowWillLoad()](windowwillload%28%29.md): Sent before the window owned by the receiver is loaded.

# showWindow: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Displays the window associated with the receiver.

## Declaration

```objectivec
- (void) showWindow:(id) sender;
```

## Parameters

- `sender`: The control sending the message; can be `nil`.

<a id="Discussion"></a>

## Discussion

If the window is an [NSPanel](../nspanel.md) object and has its [becomesKeyOnlyIfNeeded](../nspanel/becomeskeyonlyifneeded.md) flag set to [true](https://developer.apple.com/documentation/swift/true), the window is displayed in front of all other windows but is not made key; otherwise it is displayed in front and is made key. This method is useful for menu actions.

## See Also

### Related Documentation

- [orderFront:](../nswindow/orderfront%28__%29.md): Moves the window to the front of its level in the screen list, without changing either the key window or the main window.
- [makeKeyAndOrderFront:](../nswindow/makekeyandorderfront%28__%29.md): Moves the window to the front of the screen list, within its level, and makes it the key window; that is, it shows the window.

### Loading and Displaying the Window

- [loadWindow](loadwindow%28%29.md): Loads the receiver’s window from the nib file.
- [windowLoaded](iswindowloaded.md): A Boolean value that indicates whether the nib file containing the receiver’s window has been loaded.
- [window](window.md): The window owned by the receiver.
- [windowDidLoad](windowdidload%28%29.md): Sent after the window owned by the receiver has been loaded.
- [windowWillLoad](windowwillload%28%29.md): Sent before the window owned by the receiver is loaded.
