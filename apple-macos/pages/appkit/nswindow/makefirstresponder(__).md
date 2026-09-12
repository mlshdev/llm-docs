> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/makefirstresponder(_:)](https://developer.apple.com/documentation/appkit/nswindow/makefirstresponder(_:))

# makeFirstResponder(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Attempts to make a given responder the first responder for the window.

## Declaration

```swift
func makeFirstResponder(_ responder: NSResponder?) -> Bool
```

## Parameters

- `responder`: The responder to set as the window’s first responder. `nil` makes the window its first responder.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) when the operation is successful; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If `responder` isn’t already the first responder, this method first sends a [resignFirstResponder()](../nsresponder/resignfirstresponder%28%29.md) message to the object that is the first responder. If that object refuses to resign, it remains the first responder, and this method immediately returns [false](https://developer.apple.com/documentation/swift/false). If the current first responder resigns, this method sends a [becomeFirstResponder()](../nsresponder/becomefirstresponder%28%29.md) message to `responder`. If `responder` does not accept first responder status, the `NSWindow` object becomes first responder; in this case, the method returns [true](https://developer.apple.com/documentation/swift/true) even if `responder` refuses first responder status.

If `responder` is `nil`, this method still sends [resignFirstResponder()](../nsresponder/resignfirstresponder%28%29.md) to the current first responder. If the current first responder refuses to resign, it remains the first responder and this method immediately returns [false](https://developer.apple.com/documentation/swift/false). If the current first responder returns [true](https://developer.apple.com/documentation/swift/true) from [resignFirstResponder()](../nsresponder/resignfirstresponder%28%29.md), the window is made its own first responder and this method returns [true](https://developer.apple.com/documentation/swift/true).

The Application Kit framework uses this method to alter the first responder in response to mouse-down events; you can also use it to explicitly set the first responder from within your program. The `responder` object is typically an `NSView` object in the window’s view hierarchy. If this method is called explicitly, first send [acceptsFirstResponder](../nsresponder/acceptsfirstresponder.md) to `responder`, and do not call [makeFirstResponder(\_:)](makefirstresponder%28__%29.md) if [acceptsFirstResponder](../nsresponder/acceptsfirstresponder.md) returns [false](https://developer.apple.com/documentation/swift/false).

Use [initialFirstResponder](initialfirstresponder.md) to the set the first responder to be used when the window is brought onscreen for the first time.

## See Also

### Related Documentation

- [becomeFirstResponder()](../nsresponder/becomefirstresponder%28%29.md): Notifies the receiver that it’s about to become first responder in its [NSWindow](../nswindow.md).
- [resignFirstResponder()](../nsresponder/resignfirstresponder%28%29.md): Notifies the receiver that it’s been asked to relinquish its status as first responder in its window.

### Managing Responders

- [initialFirstResponder](initialfirstresponder.md): The view that’s made first responder (also called the key view) the first time the window is placed onscreen.
- [firstResponder](firstresponder.md): The window’s first responder.

# makeFirstResponder: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Attempts to make a given responder the first responder for the window.

## Declaration

```objectivec
- (BOOL) makeFirstResponder:(NSResponder *) responder;
```

## Parameters

- `responder`: The responder to set as the window’s first responder. `nil` makes the window its first responder.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) when the operation is successful; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If `responder` isn’t already the first responder, this method first sends a [resignFirstResponder](../nsresponder/resignfirstresponder%28%29.md) message to the object that is the first responder. If that object refuses to resign, it remains the first responder, and this method immediately returns [false](https://developer.apple.com/documentation/swift/false). If the current first responder resigns, this method sends a [becomeFirstResponder](../nsresponder/becomefirstresponder%28%29.md) message to `responder`. If `responder` does not accept first responder status, the `NSWindow` object becomes first responder; in this case, the method returns [true](https://developer.apple.com/documentation/swift/true) even if `responder` refuses first responder status.

If `responder` is `nil`, this method still sends [resignFirstResponder](../nsresponder/resignfirstresponder%28%29.md) to the current first responder. If the current first responder refuses to resign, it remains the first responder and this method immediately returns [false](https://developer.apple.com/documentation/swift/false). If the current first responder returns [true](https://developer.apple.com/documentation/swift/true) from [resignFirstResponder](../nsresponder/resignfirstresponder%28%29.md), the window is made its own first responder and this method returns [true](https://developer.apple.com/documentation/swift/true).

The Application Kit framework uses this method to alter the first responder in response to mouse-down events; you can also use it to explicitly set the first responder from within your program. The `responder` object is typically an `NSView` object in the window’s view hierarchy. If this method is called explicitly, first send [acceptsFirstResponder](../nsresponder/acceptsfirstresponder.md) to `responder`, and do not call [makeFirstResponder:](makefirstresponder%28__%29.md) if [acceptsFirstResponder](../nsresponder/acceptsfirstresponder.md) returns [false](https://developer.apple.com/documentation/swift/false).

Use [initialFirstResponder](initialfirstresponder.md) to the set the first responder to be used when the window is brought onscreen for the first time.

## See Also

### Related Documentation

- [becomeFirstResponder](../nsresponder/becomefirstresponder%28%29.md): Notifies the receiver that it’s about to become first responder in its [NSWindow](../nswindow.md).
- [resignFirstResponder](../nsresponder/resignfirstresponder%28%29.md): Notifies the receiver that it’s been asked to relinquish its status as first responder in its window.

### Managing Responders

- [initialFirstResponder](initialfirstresponder.md): The view that’s made first responder (also called the key view) the first time the window is placed onscreen.
- [firstResponder](firstresponder.md): The window’s first responder.
