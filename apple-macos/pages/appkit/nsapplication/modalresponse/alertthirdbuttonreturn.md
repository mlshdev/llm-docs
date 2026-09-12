> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/modalresponse/alertthirdbuttonreturn](https://developer.apple.com/documentation/appkit/nsapplication/modalresponse/alertthirdbuttonreturn)

# alertThirdButtonReturn (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The user clicked the third button from the right edge of the dialog or sheet.

## Declaration

```swift
static var alertThirdButtonReturn: NSApplication.ModalResponse { get }
```

## See Also

### Responses

- [OK](ok.md): The presentation or dismissal of the sheet has finished.
- [cancel](cancel.md): The presentation or dismissal of the sheet has been canceled.
- [continue](continue.md): Modal session is continuing (returned by [runModalSession(\_:)](../runmodalsession%28__%29.md) only).
- [stop](stop.md): Modal session was broken with [stopModal()](../stopmodal%28%29.md).
- [abort](abort.md): Modal session was broken with [abortModal()](../abortmodal%28%29.md).
- [alertFirstButtonReturn](alertfirstbuttonreturn.md): The user clicked the first (rightmost) button on the dialog or sheet.
- [alertSecondButtonReturn](alertsecondbuttonreturn.md): The user clicked the second button from the right edge of the dialog or sheet.

# NSAlertThirdButtonReturn (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

The user clicked the third button from the right edge of the dialog or sheet.

## Declaration

```objectivec
static const NSModalResponse NSAlertThirdButtonReturn;
```

## See Also

### Responses

- [NSModalResponseOK](ok.md): The presentation or dismissal of the sheet has finished.
- [NSModalResponseCancel](cancel.md): The presentation or dismissal of the sheet has been canceled.
- [NSModalResponseContinue](continue.md): Modal session is continuing (returned by [runModalSession:](../runmodalsession%28__%29.md) only).
- [NSModalResponseStop](stop.md): Modal session was broken with [stopModal](../stopmodal%28%29.md).
- [NSModalResponseAbort](abort.md): Modal session was broken with [abortModal](../abortmodal%28%29.md).
- [NSAlertFirstButtonReturn](alertfirstbuttonreturn.md): The user clicked the first (rightmost) button on the dialog or sheet.
- [NSAlertSecondButtonReturn](alertsecondbuttonreturn.md): The user clicked the second button from the right edge of the dialog or sheet.
