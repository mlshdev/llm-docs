> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfield/textdidendediting(_:)](https://developer.apple.com/documentation/appkit/nstextfield/textdidendediting(_:))

# textDidEndEditing(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Posts a notification when the text is no longer in edit mode.

## Declaration

```swift
func textDidEndEditing(_ notification: Notification)
```

## Parameters

- `notification`: The [textDidEndEditingNotification](../nscontrol/textdidendeditingnotification.md) to post to the default notification center.

<a id="Discussion"></a>

## Discussion

After validating the new value, this method posts a [textDidEndEditingNotification](../nscontrol/textdidendeditingnotification.md) to the default notification center, which causes the text field’s delegate to receive a [controlTextDidEndEditing:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/controltextdidendediting:) message. This method then sends [endEditing(\_:)](../nscell/endediting%28__%29.md) to the text field’s cell and handles the key that causes editing to end as follows:

- If the user ends editing by pressing Return, this method tries to send the text field’s action to its target. If unsuccessful, it sends [performKeyEquivalent(with:)](../nsview/performkeyequivalent%28with_%29.md) to its `NSView`, for example, to handle the default button on a panel. If that also fails, the text field selects its text.
- If the user ends editing by pressing Tab or Shift-Tab, the text field tries to have its `NSWindow` object select its next or previous key view, using the `NSWindow` method [selectKeyView(following:)](../nswindow/selectkeyview%28following_%29.md) or [selectKeyView(preceding:)](../nswindow/selectkeyview%28preceding_%29.md). If unsuccessful, the text field selects its text.

See [NSControl](../nscontrol.md) for more information about the text delegate method.

## See Also

### Implementing delegate methods

- [textShouldBeginEditing(\_:)](textshouldbeginediting%28__%29.md): Requests permission to begin editing a text object.
- [textDidBeginEditing(\_:)](textdidbeginediting%28__%29.md): Posts a notification to the default notification center that the text is about to go into edit mode.
- [textDidChange(\_:)](textdidchange%28__%29.md): Posts a notification when the text changes, and forwards the message to the text field’s cell if it responds.
- [textShouldEndEditing(\_:)](textshouldendediting%28__%29.md): Performs validation on the text field’s new value.

# textDidEndEditing: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Posts a notification when the text is no longer in edit mode.

## Declaration

```objectivec
- (void) textDidEndEditing:(NSNotification *) notification;
```

## Parameters

- `notification`: The [NSControlTextDidEndEditingNotification](../nscontrol/textdidendeditingnotification.md) to post to the default notification center.

<a id="Discussion"></a>

## Discussion

After validating the new value, this method posts a [NSControlTextDidEndEditingNotification](../nscontrol/textdidendeditingnotification.md) to the default notification center, which causes the text field’s delegate to receive a [controlTextDidEndEditing:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/controltextdidendediting:) message. This method then sends [endEditing:](../nscell/endediting%28__%29.md) to the text field’s cell and handles the key that causes editing to end as follows:

- If the user ends editing by pressing Return, this method tries to send the text field’s action to its target. If unsuccessful, it sends [performKeyEquivalent:](../nsview/performkeyequivalent%28with_%29.md) to its `NSView`, for example, to handle the default button on a panel. If that also fails, the text field selects its text.
- If the user ends editing by pressing Tab or Shift-Tab, the text field tries to have its `NSWindow` object select its next or previous key view, using the `NSWindow` method [selectKeyViewFollowingView:](../nswindow/selectkeyview%28following_%29.md) or [selectKeyViewPrecedingView:](../nswindow/selectkeyview%28preceding_%29.md). If unsuccessful, the text field selects its text.

See [NSControl](../nscontrol.md) for more information about the text delegate method.

## See Also

### Implementing delegate methods

- [textShouldBeginEditing:](textshouldbeginediting%28__%29.md): Requests permission to begin editing a text object.
- [textDidBeginEditing:](textdidbeginediting%28__%29.md): Posts a notification to the default notification center that the text is about to go into edit mode.
- [textDidChange:](textdidchange%28__%29.md): Posts a notification when the text changes, and forwards the message to the text field’s cell if it responds.
- [textShouldEndEditing:](textshouldendediting%28__%29.md): Performs validation on the text field’s new value.
