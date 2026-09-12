> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowcontroller/windowdidload()](https://developer.apple.com/documentation/appkit/nswindowcontroller/windowdidload())

# windowDidLoad() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sent after the window owned by the receiver has been loaded.

## Declaration

```swift
func windowDidLoad()
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
- [windowWillLoad()](windowwillload%28%29.md): Sent before the window owned by the receiver is loaded.

# windowDidLoad (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sent after the window owned by the receiver has been loaded.

## Declaration

```objectivec
- (void) windowDidLoad;
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
- [windowWillLoad](windowwillload%28%29.md): Sent before the window owned by the receiver is loaded.
