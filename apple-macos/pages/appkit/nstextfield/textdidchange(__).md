> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfield/textdidchange(_:)](https://developer.apple.com/documentation/appkit/nstextfield/textdidchange(_:))

# textDidChange(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Posts a notification when the text changes, and forwards the message to the text field’s cell if it responds.

## Declaration

```swift
func textDidChange(_ notification: Notification)
```

## Parameters

- `notification`: The [textDidChangeNotification](../nscontrol/textdidchangenotification.md) notification to post to the default notification center.

<a id="Discussion"></a>

## Discussion

This method causes the text field’s delegate to receive a [controlTextDidChange:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/controltextdidchange:) message. See the [NSControl](../nscontrol.md) class specification for more information about the text delegate method.

## See Also

### Implementing delegate methods

- [textShouldBeginEditing(\_:)](textshouldbeginediting%28__%29.md): Requests permission to begin editing a text object.
- [textDidBeginEditing(\_:)](textdidbeginediting%28__%29.md): Posts a notification to the default notification center that the text is about to go into edit mode.
- [textShouldEndEditing(\_:)](textshouldendediting%28__%29.md): Performs validation on the text field’s new value.
- [textDidEndEditing(\_:)](textdidendediting%28__%29.md): Posts a notification when the text is no longer in edit mode.

# textDidChange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Posts a notification when the text changes, and forwards the message to the text field’s cell if it responds.

## Declaration

```objectivec
- (void) textDidChange:(NSNotification *) notification;
```

## Parameters

- `notification`: The [NSControlTextDidChangeNotification](../nscontrol/textdidchangenotification.md) notification to post to the default notification center.

<a id="Discussion"></a>

## Discussion

This method causes the text field’s delegate to receive a [controlTextDidChange:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/controltextdidchange:) message. See the [NSControl](../nscontrol.md) class specification for more information about the text delegate method.

## See Also

### Implementing delegate methods

- [textShouldBeginEditing:](textshouldbeginediting%28__%29.md): Requests permission to begin editing a text object.
- [textDidBeginEditing:](textdidbeginediting%28__%29.md): Posts a notification to the default notification center that the text is about to go into edit mode.
- [textShouldEndEditing:](textshouldendediting%28__%29.md): Performs validation on the text field’s new value.
- [textDidEndEditing:](textdidendediting%28__%29.md): Posts a notification when the text is no longer in edit mode.
