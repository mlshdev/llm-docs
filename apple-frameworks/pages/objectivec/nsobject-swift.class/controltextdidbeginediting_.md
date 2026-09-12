> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/controltextdidbeginediting:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/controltextdidbeginediting:)

# controlTextDidBeginEditing:

**Interface language:** Objective-C

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 11.0)

Sent when a control with editable text begins an editing session.

## Declaration

```objectivec
- (void) controlTextDidBeginEditing:(NSNotification *) obj;
```

## Parameters

- `obj`: The notification object. The name of the notification is always [NSControlTextDidBeginEditingNotification](https://developer.apple.com/documentation/appkit/nscontrol/textdidbegineditingnotification).

<a id="Discussion"></a>

## Discussion

This method is invoked when the user begins editing text in a control such as a text field or a form field. The control posts a [NSControlTextDidBeginEditingNotification](https://developer.apple.com/documentation/appkit/nscontrol/textdidbegineditingnotification) notification, and if the control’s delegate implements this method, it is automatically registered to receive the notification. Use the key `@"NSFieldEditor"` to obtain the field editor from the `userInfo` dictionary of the notification object.

See [controlTextDidEndEditing:](controltextdidendediting_.md) for an explanation of why you may not always get one invocation of [controlTextDidBeginEditing:](controltextdidbeginediting_.md) for each invocation of [controlTextDidEndEditing:](controltextdidendediting_.md).
