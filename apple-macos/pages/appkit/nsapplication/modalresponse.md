> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/modalresponse](https://developer.apple.com/documentation/appkit/nsapplication/modalresponse)

# NSApplication.ModalResponse (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

A set of button return values for modal dialogs.

## Declaration

```swift
struct ModalResponse
```

<a id="Discussion"></a>

## Discussion

The response value that a button returns can depend on which method is used to present the dialog. See [alertWithMessageText:defaultButton:alternateButton:otherButton:informativeTextWithFormat:](../nsalert/alertwithmessagetext_defaultbutton_alternatebutton_otherbutton_informativetextwithformat_.md), [runModal()](../nsalert/runmodal%28%29.md), and [addButton(withTitle:)](../nsalert/addbutton%28withtitle_%29.md) for examples.

## Topics

### Responses

- [OK](modalresponse/ok.md): The presentation or dismissal of the sheet has finished.
- [cancel](modalresponse/cancel.md): The presentation or dismissal of the sheet has been canceled.
- [continue](modalresponse/continue.md): Modal session is continuing (returned by [runModalSession(\_:)](runmodalsession%28__%29.md) only).
- [stop](modalresponse/stop.md): Modal session was broken with [stopModal()](stopmodal%28%29.md).
- [abort](modalresponse/abort.md): Modal session was broken with [abortModal()](abortmodal%28%29.md).
- [alertFirstButtonReturn](modalresponse/alertfirstbuttonreturn.md): The user clicked the first (rightmost) button on the dialog or sheet.
- [alertSecondButtonReturn](modalresponse/alertsecondbuttonreturn.md): The user clicked the second button from the right edge of the dialog or sheet.
- [alertThirdButtonReturn](modalresponse/alertthirdbuttonreturn.md): The user clicked the third button from the right edge of the dialog or sheet.

### Deprecated Responses

- [NSRunStoppedResponse](../nsrunstoppedresponse.md): Deprecated. Modal session was broken with [stopModal()](stopmodal%28%29.md).
- [NSRunAbortedResponse](../nsrunabortedresponse.md): Deprecated. Modal session was broken with [abortModal()](abortmodal%28%29.md).
- [NSRunContinuesResponse](../nsruncontinuesresponse.md): Deprecated. Modal session is continuing (returned by [runModalSession(\_:)](runmodalsession%28__%29.md) only).

### Initializers

- [init(\_:)](modalresponse/init%28__%29.md)
- [init(rawValue:)](modalresponse/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing alert response buttons

- [buttons](../nsalert/buttons.md): The array of response buttons for the alert.
- [addButton(withTitle:)](../nsalert/addbutton%28withtitle_%29.md): Adds a button with a given title to the alert.

# NSModalResponse (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

A set of button return values for modal dialogs.

## Declaration

```objectivec
typedef NSInteger NSModalResponse;
```

<a id="Discussion"></a>

## Discussion

The response value that a button returns can depend on which method is used to present the dialog. See [alertWithMessageText:defaultButton:alternateButton:otherButton:informativeTextWithFormat:](../nsalert/alertwithmessagetext_defaultbutton_alternatebutton_otherbutton_informativetextwithformat_.md), [runModal](../nsalert/runmodal%28%29.md), and [addButtonWithTitle:](../nsalert/addbutton%28withtitle_%29.md) for examples.

## Topics

### Responses

- [NSModalResponseOK](modalresponse/ok.md): The presentation or dismissal of the sheet has finished.
- [NSModalResponseCancel](modalresponse/cancel.md): The presentation or dismissal of the sheet has been canceled.
- [NSModalResponseContinue](modalresponse/continue.md): Modal session is continuing (returned by [runModalSession:](runmodalsession%28__%29.md) only).
- [NSModalResponseStop](modalresponse/stop.md): Modal session was broken with [stopModal](stopmodal%28%29.md).
- [NSModalResponseAbort](modalresponse/abort.md): Modal session was broken with [abortModal](abortmodal%28%29.md).
- [NSAlertFirstButtonReturn](modalresponse/alertfirstbuttonreturn.md): The user clicked the first (rightmost) button on the dialog or sheet.
- [NSAlertSecondButtonReturn](modalresponse/alertsecondbuttonreturn.md): The user clicked the second button from the right edge of the dialog or sheet.
- [NSAlertThirdButtonReturn](modalresponse/alertthirdbuttonreturn.md): The user clicked the third button from the right edge of the dialog or sheet.

### Deprecated Responses

- [NSRunStoppedResponse](../nsrunstoppedresponse.md): Deprecated. Modal session was broken with [stopModal](stopmodal%28%29.md).
- [NSRunAbortedResponse](../nsrunabortedresponse.md): Deprecated. Modal session was broken with [abortModal](abortmodal%28%29.md).
- [NSRunContinuesResponse](../nsruncontinuesresponse.md): Deprecated. Modal session is continuing (returned by [runModalSession:](runmodalsession%28__%29.md) only).

## See Also

### Accessing alert response buttons

- [buttons](../nsalert/buttons.md): The array of response buttons for the alert.
- [addButtonWithTitle:](../nsalert/addbutton%28withtitle_%29.md): Adds a button with a given title to the alert.
