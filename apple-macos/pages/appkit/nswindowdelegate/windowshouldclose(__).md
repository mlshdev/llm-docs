> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowdelegate/windowshouldclose(_:)](https://developer.apple.com/documentation/appkit/nswindowdelegate/windowshouldclose(_:))

# windowShouldClose(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the user has attempted to close a window or the window has received a [performClose(\_:)](../nswindow/performclose%28__%29.md) message.

## Declaration

```swift
@MainActor optional func windowShouldClose(_ sender: NSWindow) -> Bool
```

## Parameters

- `sender`: The window being closed.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow `sender` to be closed; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method may not always be called during window closing. Specifically, this method is not called when a user quits an application.

## See Also

### Closing Windows

- [windowWillClose(\_:)](windowwillclose%28__%29.md): Tells the delegate that the window is about to close.

# windowShouldClose: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the user has attempted to close a window or the window has received a [performClose:](../nswindow/performclose%28__%29.md) message.

## Declaration

```objectivec
- (BOOL) windowShouldClose:(NSWindow *) sender;
```

## Parameters

- `sender`: The window being closed.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow `sender` to be closed; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method may not always be called during window closing. Specifically, this method is not called when a user quits an application.

## See Also

### Closing Windows

- [windowWillClose:](windowwillclose%28__%29.md): Tells the delegate that the window is about to close.
