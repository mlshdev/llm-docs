> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowcontroller/iswindowloaded](https://developer.apple.com/documentation/appkit/nswindowcontroller/iswindowloaded)

# isWindowLoaded (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the nib file containing the receiver’s window has been loaded.

## Declaration

```swift
var isWindowLoaded: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the nib file containing the receiver’s window has been loaded, [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Loading and Displaying the Window

- [loadWindow()](loadwindow%28%29.md): Loads the receiver’s window from the nib file.
- [showWindow(\_:)](showwindow%28__%29.md): Displays the window associated with the receiver.
- [window](window.md): The window owned by the receiver.
- [windowDidLoad()](windowdidload%28%29.md): Sent after the window owned by the receiver has been loaded.
- [windowWillLoad()](windowwillload%28%29.md): Sent before the window owned by the receiver is loaded.

# windowLoaded (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the nib file containing the receiver’s window has been loaded.

## Declaration

```objectivec
@property (readonly, getter=isWindowLoaded) BOOL windowLoaded;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the nib file containing the receiver’s window has been loaded, [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Loading and Displaying the Window

- [loadWindow](loadwindow%28%29.md): Loads the receiver’s window from the nib file.
- [showWindow:](showwindow%28__%29.md): Displays the window associated with the receiver.
- [window](window.md): The window owned by the receiver.
- [windowDidLoad](windowdidload%28%29.md): Sent after the window owned by the receiver has been loaded.
- [windowWillLoad](windowwillload%28%29.md): Sent before the window owned by the receiver is loaded.
