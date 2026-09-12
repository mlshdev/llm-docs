> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextdelegate/textshouldbeginediting(_:)](https://developer.apple.com/documentation/appkit/nstextdelegate/textshouldbeginediting(_:))

# textShouldBeginEditing(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked when a text object begins to change its text, this method requests permission for `aTextObject` to begin editing.

## Declaration

```swift
@MainActor optional func textShouldBeginEditing(_ textObject: NSText) -> Bool
```

<a id="Discussion"></a>

## Discussion

If the delegate returns [true](https://developer.apple.com/documentation/swift/true), the text object proceeds to make changes. If the delegate returns [false](https://developer.apple.com/documentation/swift/false), the text object abandons the editing operation. This method is also invoked when the user drags and drops a file onto the text object.

## See Also

### Related Documentation

- [becomeFirstResponder()](../nsresponder/becomefirstresponder%28%29.md): Notifies the receiver that it’s about to become first responder in its [NSWindow](../nswindow.md).
- [makeFirstResponder(\_:)](../nswindow/makefirstresponder%28__%29.md): Attempts to make a given responder the first responder for the window.

### Editing text

- [textDidBeginEditing(\_:)](textdidbeginediting%28__%29.md): Informs the delegate that the text object has begun editing (that the user has begun changing it).
- [textShouldEndEditing(\_:)](textshouldendediting%28__%29.md): Invoked from a text object’s implementation of [resignFirstResponder()](../nsresponder/resignfirstresponder%28%29.md), this method requests permission for `aTextObject` to end editing.
- [textDidEndEditing(\_:)](textdidendediting%28__%29.md): Informs the delegate that the text object has finished editing (that it has resigned first responder status).

# textShouldBeginEditing: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked when a text object begins to change its text, this method requests permission for `aTextObject` to begin editing.

## Declaration

```objectivec
- (BOOL) textShouldBeginEditing:(NSText *) textObject;
```

<a id="Discussion"></a>

## Discussion

If the delegate returns [true](https://developer.apple.com/documentation/swift/true), the text object proceeds to make changes. If the delegate returns [false](https://developer.apple.com/documentation/swift/false), the text object abandons the editing operation. This method is also invoked when the user drags and drops a file onto the text object.

## See Also

### Related Documentation

- [becomeFirstResponder](../nsresponder/becomefirstresponder%28%29.md): Notifies the receiver that it’s about to become first responder in its [NSWindow](../nswindow.md).
- [makeFirstResponder:](../nswindow/makefirstresponder%28__%29.md): Attempts to make a given responder the first responder for the window.

### Editing text

- [textDidBeginEditing:](textdidbeginediting%28__%29.md): Informs the delegate that the text object has begun editing (that the user has begun changing it).
- [textShouldEndEditing:](textshouldendediting%28__%29.md): Invoked from a text object’s implementation of [resignFirstResponder](../nsresponder/resignfirstresponder%28%29.md), this method requests permission for `aTextObject` to end editing.
- [textDidEndEditing:](textdidendediting%28__%29.md): Informs the delegate that the text object has finished editing (that it has resigned first responder status).
