> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/controltextdidendediting:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/controltextdidendediting:)

# controlTextDidEndEditing:

**Interface language:** Objective-C

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 11.0)

Sent when a control with editable text ends an editing session.

## Declaration

```objectivec
- (void) controlTextDidEndEditing:(NSNotification *) obj;
```

## Parameters

- `obj`: The notification object. The name of the notification is always [NSControlTextDidEndEditingNotification](https://developer.apple.com/documentation/appkit/nscontrol/textdidendeditingnotification).

<a id="Discussion"></a>

## Discussion

This method is invoked when the user stops editing text in a control such as a text field or form. The control posts a [NSControlTextDidEndEditingNotification](https://developer.apple.com/documentation/appkit/nscontrol/textdidendeditingnotification) notification, and if the control’s delegate implements this method, it is automatically registered to receive the notification. Use the key `@"NSFieldEditor"` to obtain the field editor from the `userInfo` dictionary of the notification object.

> **Warning**

>  In some cases, such as when editing within an instance of `NSOutlineView`, this method may be invoked without a previous invocation of [controlTextDidBeginEditing:](controltextdidbeginediting_.md). You will only get the `controlTextDidBeginEditing:` notification if the user actually types something, but you can get the `controlTextDidEndEditing:` notification if the user just double-clicks the field and then clicks outside the field, without typing.
