> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextdelegate/textshouldendediting(_:)](https://developer.apple.com/documentation/appkit/nstextdelegate/textshouldendediting(_:))

# textShouldEndEditing(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked from a text object’s implementation of [resignFirstResponder()](../nsresponder/resignfirstresponder%28%29.md), this method requests permission for `aTextObject` to end editing.

## Declaration

```swift
@MainActor optional func textShouldEndEditing(_ textObject: NSText) -> Bool
```

<a id="Discussion"></a>

## Discussion

If the delegate returns [true](https://developer.apple.com/documentation/swift/true), the text object proceeds to finish editing and resign first responder status. If the delegate returns [false](https://developer.apple.com/documentation/swift/false), the text object selects all of its text and remains the first responder.

## See Also

### Related Documentation

- [resignFirstResponder()](../nsresponder/resignfirstresponder%28%29.md): Notifies the receiver that it’s been asked to relinquish its status as first responder in its window.

### Editing text

- [textShouldBeginEditing(\_:)](textshouldbeginediting%28__%29.md): Invoked when a text object begins to change its text, this method requests permission for `aTextObject` to begin editing.
- [textDidBeginEditing(\_:)](textdidbeginediting%28__%29.md): Informs the delegate that the text object has begun editing (that the user has begun changing it).
- [textDidEndEditing(\_:)](textdidendediting%28__%29.md): Informs the delegate that the text object has finished editing (that it has resigned first responder status).

# textShouldEndEditing: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked from a text object’s implementation of [resignFirstResponder](../nsresponder/resignfirstresponder%28%29.md), this method requests permission for `aTextObject` to end editing.

## Declaration

```objectivec
- (BOOL) textShouldEndEditing:(NSText *) textObject;
```

<a id="Discussion"></a>

## Discussion

If the delegate returns [true](https://developer.apple.com/documentation/swift/true), the text object proceeds to finish editing and resign first responder status. If the delegate returns [false](https://developer.apple.com/documentation/swift/false), the text object selects all of its text and remains the first responder.

## See Also

### Related Documentation

- [resignFirstResponder](../nsresponder/resignfirstresponder%28%29.md): Notifies the receiver that it’s been asked to relinquish its status as first responder in its window.

### Editing text

- [textShouldBeginEditing:](textshouldbeginediting%28__%29.md): Invoked when a text object begins to change its text, this method requests permission for `aTextObject` to begin editing.
- [textDidBeginEditing:](textdidbeginediting%28__%29.md): Informs the delegate that the text object has begun editing (that the user has begun changing it).
- [textDidEndEditing:](textdidendediting%28__%29.md): Informs the delegate that the text object has finished editing (that it has resigned first responder status).
