> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowcontroller/windowwillload()](https://developer.apple.com/documentation/appkit/nswindowcontroller/windowwillload())

# windowWillLoad() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sent before the window owned by the receiver is loaded.

## Declaration

```swift
func windowWillLoad()
```

<a id="Discussion"></a>

## Discussion

The default implementation does nothing.

## See Also

### Related Documentation

- [NSWindowController](../nswindowcontroller.md): A controller that manages a window, usually a window stored in a nib file.

### Loading and Displaying the Window

- [loadWindow()](loadwindow%28%29.md): Loads the receiver’s window from the nib file.
- [showWindow(\_:)](showwindow%28__%29.md): Displays the window associated with the receiver.
- [isWindowLoaded](iswindowloaded.md): A Boolean value that indicates whether the nib file containing the receiver’s window has been loaded.
- [window](window.md): The window owned by the receiver.
- [windowDidLoad()](windowdidload%28%29.md): Sent after the window owned by the receiver has been loaded.

# windowWillLoad (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sent before the window owned by the receiver is loaded.

## Declaration

```objectivec
- (void) windowWillLoad;
```

<a id="Discussion"></a>

## Discussion

The default implementation does nothing.

## See Also

### Related Documentation

- [NSWindowController](../nswindowcontroller.md): A controller that manages a window, usually a window stored in a nib file.

### Loading and Displaying the Window

- [loadWindow](loadwindow%28%29.md): Loads the receiver’s window from the nib file.
- [showWindow:](showwindow%28__%29.md): Displays the window associated with the receiver.
- [windowLoaded](iswindowloaded.md): A Boolean value that indicates whether the nib file containing the receiver’s window has been loaded.
- [window](window.md): The window owned by the receiver.
- [windowDidLoad](windowdidload%28%29.md): Sent after the window owned by the receiver has been loaded.
