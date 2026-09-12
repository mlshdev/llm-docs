> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfield/textdidbeginediting(_:)](https://developer.apple.com/documentation/appkit/nstextfield/textdidbeginediting(_:))

# textDidBeginEditing(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Posts a notification to the default notification center that the text is about to go into edit mode.

## Declaration

```swift
func textDidBeginEditing(_ notification: Notification)
```

## Parameters

- `notification`: The [textDidBeginEditingNotification](../nscontrol/textdidbegineditingnotification.md) notification to post to the default notification center.

<a id="Discussion"></a>

## Discussion

This action causes the text field’s delegate to receive a [controlTextDidBeginEditing:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/controltextdidbeginediting:) message. See [NSControl](../nscontrol.md) for more information about the text delegate method.

## See Also

### Implementing delegate methods

- [textShouldBeginEditing(\_:)](textshouldbeginediting%28__%29.md): Requests permission to begin editing a text object.
- [textDidChange(\_:)](textdidchange%28__%29.md): Posts a notification when the text changes, and forwards the message to the text field’s cell if it responds.
- [textShouldEndEditing(\_:)](textshouldendediting%28__%29.md): Performs validation on the text field’s new value.
- [textDidEndEditing(\_:)](textdidendediting%28__%29.md): Posts a notification when the text is no longer in edit mode.

# textDidBeginEditing: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Posts a notification to the default notification center that the text is about to go into edit mode.

## Declaration

```objectivec
- (void) textDidBeginEditing:(NSNotification *) notification;
```

## Parameters

- `notification`: The [NSControlTextDidBeginEditingNotification](../nscontrol/textdidbegineditingnotification.md) notification to post to the default notification center.

<a id="Discussion"></a>

## Discussion

This action causes the text field’s delegate to receive a [controlTextDidBeginEditing:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/controltextdidbeginediting:) message. See [NSControl](../nscontrol.md) for more information about the text delegate method.

## See Also

### Implementing delegate methods

- [textShouldBeginEditing:](textshouldbeginediting%28__%29.md): Requests permission to begin editing a text object.
- [textDidChange:](textdidchange%28__%29.md): Posts a notification when the text changes, and forwards the message to the text field’s cell if it responds.
- [textShouldEndEditing:](textshouldendediting%28__%29.md): Performs validation on the text field’s new value.
- [textDidEndEditing:](textdidendediting%28__%29.md): Posts a notification when the text is no longer in edit mode.
