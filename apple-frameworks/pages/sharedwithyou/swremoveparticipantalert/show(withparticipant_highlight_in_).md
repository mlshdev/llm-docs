> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyou/swremoveparticipantalert/show(withparticipant:highlight:in:)](https://developer.apple.com/documentation/sharedwithyou/swremoveparticipantalert/show(withparticipant:highlight:in:))

# show(withParticipant:highlight:in:) (Swift)

**Framework:** Shared with You  
**Kind:** Type Method  
**Availability:** macOS 13.0+

## Declaration

```swift
class func show(withParticipant participant: SWPerson, highlight: SWCollaborationHighlight, in window: NSWindow?)
```

## Parameters

- `participant`: The `SWPerson` displayed in the alert.
- `highlight`: The `SWCollaborationHighlight` related to the request.
- `window`: The `NSWindow` to host the alert.

## See Also

### Requesting participant removal

- [SWRemoveParticipantAlertController](../swremoveparticipantalertcontroller.md): The view controller for the remove-participant alert.

# showAlertWithParticipant:highlight:inWindow: (Objective-C)

**Framework:** Shared with You  
**Kind:** Type Method  
**Availability:** macOS 13.0+

## Declaration

```objectivec
+ (void) showAlertWithParticipant:(SWPerson *) participant highlight:(SWCollaborationHighlight *) highlight inWindow:(NSWindow *) window;
```

## Parameters

- `participant`: The `SWPerson` displayed in the alert.
- `highlight`: The `SWCollaborationHighlight` related to the request.
- `window`: The `NSWindow` to host the alert.

## See Also

### Requesting participant removal

- [SWRemoveParticipantAlertController](../swremoveparticipantalertcontroller.md): The view controller for the remove-participant alert.
