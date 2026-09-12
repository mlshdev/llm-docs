> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextdelegate/textdidendediting(_:)](https://developer.apple.com/documentation/appkit/nstextdelegate/textdidendediting(_:))

# textDidEndEditing(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Informs the delegate that the text object has finished editing (that it has resigned first responder status).

## Declaration

```swift
@MainActor optional func textDidEndEditing(_ notification: Notification)
```

<a id="Discussion"></a>

## Discussion

The name of `aNotification` is [didEndEditingNotification](../nstext/didendeditingnotification.md).

## See Also

### Editing text

- [textShouldBeginEditing(\_:)](textshouldbeginediting%28__%29.md): Invoked when a text object begins to change its text, this method requests permission for `aTextObject` to begin editing.
- [textDidBeginEditing(\_:)](textdidbeginediting%28__%29.md): Informs the delegate that the text object has begun editing (that the user has begun changing it).
- [textShouldEndEditing(\_:)](textshouldendediting%28__%29.md): Invoked from a text object’s implementation of [resignFirstResponder()](../nsresponder/resignfirstresponder%28%29.md), this method requests permission for `aTextObject` to end editing.

# textDidEndEditing: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the delegate that the text object has finished editing (that it has resigned first responder status).

## Declaration

```objectivec
- (void) textDidEndEditing:(NSNotification *) notification;
```

<a id="Discussion"></a>

## Discussion

The name of `aNotification` is [NSTextDidEndEditingNotification](../nstext/didendeditingnotification.md).

## See Also

### Editing text

- [textShouldBeginEditing:](textshouldbeginediting%28__%29.md): Invoked when a text object begins to change its text, this method requests permission for `aTextObject` to begin editing.
- [textDidBeginEditing:](textdidbeginediting%28__%29.md): Informs the delegate that the text object has begun editing (that the user has begun changing it).
- [textShouldEndEditing:](textshouldendediting%28__%29.md): Invoked from a text object’s implementation of [resignFirstResponder](../nsresponder/resignfirstresponder%28%29.md), this method requests permission for `aTextObject` to end editing.
