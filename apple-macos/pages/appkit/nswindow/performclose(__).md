> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/performclose(_:)](https://developer.apple.com/documentation/appkit/nswindow/performclose(_:))

# performClose(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Simulates the user clicking the close button by momentarily highlighting the button and then closing the window.

## Declaration

```swift
func performClose(_ sender: Any?)
```

## Parameters

- `sender`: The message’s sender.

<a id="Discussion"></a>

## Discussion

If the window’s delegate or the window itself implements [windowShouldClose(\_:)](../nswindowdelegate/windowshouldclose%28__%29.md), the window sends that message with the window as the argument. The window sends only one such message; if both the delegate and the window implement the method, the delegate receives the message. If the [windowShouldClose(\_:)](../nswindowdelegate/windowshouldclose%28__%29.md) method returns [false](https://developer.apple.com/documentation/swift/false), the window doesn’t close. If neither the window nor the delegate implement [windowShouldClose(\_:)](../nswindowdelegate/windowshouldclose%28__%29.md), or it returns [true](https://developer.apple.com/documentation/swift/true), this method invokes [close()](close%28%29.md) to close the window.

If the window doesn’t have a close button or can’t close (for example, if the delegate replies [false](https://developer.apple.com/documentation/swift/false) to a [windowShouldClose(\_:)](../nswindowdelegate/windowshouldclose%28__%29.md) message), the system emits the alert sound.

## See Also

### Related Documentation

- [styleMask](stylemask-swift.property.md): Flags that describe the window’s current style, such as if it’s resizable or in full-screen mode.
- [performMiniaturize(\_:)](performminiaturize%28__%29.md): Simulates the user clicking the minimize button by momentarily highlighting the button, then minimizing the window.

### Closing Windows

- [close()](close%28%29.md): Removes the window from the screen.
- [isReleasedWhenClosed](isreleasedwhenclosed.md): A Boolean value that indicates whether the window is released when it receives the `close` message.

# performClose: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Simulates the user clicking the close button by momentarily highlighting the button and then closing the window.

## Declaration

```objectivec
- (void) performClose:(id) sender;
```

## Parameters

- `sender`: The message’s sender.

<a id="Discussion"></a>

## Discussion

If the window’s delegate or the window itself implements [windowShouldClose:](../nswindowdelegate/windowshouldclose%28__%29.md), the window sends that message with the window as the argument. The window sends only one such message; if both the delegate and the window implement the method, the delegate receives the message. If the [windowShouldClose:](../nswindowdelegate/windowshouldclose%28__%29.md) method returns [false](https://developer.apple.com/documentation/swift/false), the window doesn’t close. If neither the window nor the delegate implement [windowShouldClose:](../nswindowdelegate/windowshouldclose%28__%29.md), or it returns [true](https://developer.apple.com/documentation/swift/true), this method invokes [close](close%28%29.md) to close the window.

If the window doesn’t have a close button or can’t close (for example, if the delegate replies [false](https://developer.apple.com/documentation/swift/false) to a [windowShouldClose:](../nswindowdelegate/windowshouldclose%28__%29.md) message), the system emits the alert sound.

## See Also

### Related Documentation

- [styleMask](stylemask-swift.property.md): Flags that describe the window’s current style, such as if it’s resizable or in full-screen mode.
- [performMiniaturize:](performminiaturize%28__%29.md): Simulates the user clicking the minimize button by momentarily highlighting the button, then minimizing the window.

### Closing Windows

- [close](close%28%29.md): Removes the window from the screen.
- [releasedWhenClosed](isreleasedwhenclosed.md): A Boolean value that indicates whether the window is released when it receives the `close` message.
