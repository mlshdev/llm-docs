> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextdelegate/textdidbeginediting(_:)](https://developer.apple.com/documentation/appkit/nstextdelegate/textdidbeginediting(_:))

# textDidBeginEditing(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Informs the delegate that the text object has begun editing (that the user has begun changing it).

## Declaration

```swift
@MainActor optional func textDidBeginEditing(_ notification: Notification)
```

<a id="Discussion"></a>

## Discussion

The name of `aNotification` is [didBeginEditingNotification](../nstext/didbegineditingnotification.md).

## See Also

### Editing text

- [textShouldBeginEditing(\_:)](textshouldbeginediting%28__%29.md): Invoked when a text object begins to change its text, this method requests permission for `aTextObject` to begin editing.
- [textShouldEndEditing(\_:)](textshouldendediting%28__%29.md): Invoked from a text object’s implementation of [resignFirstResponder()](../nsresponder/resignfirstresponder%28%29.md), this method requests permission for `aTextObject` to end editing.
- [textDidEndEditing(\_:)](textdidendediting%28__%29.md): Informs the delegate that the text object has finished editing (that it has resigned first responder status).

# textDidBeginEditing: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the delegate that the text object has begun editing (that the user has begun changing it).

## Declaration

```objectivec
- (void) textDidBeginEditing:(NSNotification *) notification;
```

<a id="Discussion"></a>

## Discussion

The name of `aNotification` is [NSTextDidBeginEditingNotification](../nstext/didbegineditingnotification.md).

## See Also

### Editing text

- [textShouldBeginEditing:](textshouldbeginediting%28__%29.md): Invoked when a text object begins to change its text, this method requests permission for `aTextObject` to begin editing.
- [textShouldEndEditing:](textshouldendediting%28__%29.md): Invoked from a text object’s implementation of [resignFirstResponder](../nsresponder/resignfirstresponder%28%29.md), this method requests permission for `aTextObject` to end editing.
- [textDidEndEditing:](textdidendediting%28__%29.md): Informs the delegate that the text object has finished editing (that it has resigned first responder status).
