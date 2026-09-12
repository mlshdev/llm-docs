> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyou/swremoveparticipantalertcontroller/init(participant:highlight:)](https://developer.apple.com/documentation/sharedwithyou/swremoveparticipantalertcontroller/init(participant:highlight:))

# init(participant:highlight:) (Swift)

**Framework:** Shared with You  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Creates and initializes the alert controller.

## Declaration

```swift
convenience init(participant: SWPerson, highlight: SWCollaborationHighlight)
```

## Parameters

- `participant`: The `SWPerson` displayed in the alert.
- `highlight`: The `SWCollaborationHighlight` related to the request.

# alertControllerWithParticipant:highlight: (Objective-C)

**Framework:** Shared with You  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Creates and initializes the alert controller.

## Declaration

```objectivec
+ (instancetype) alertControllerWithParticipant:(SWPerson *) participant highlight:(SWCollaborationHighlight *) highlight;
```

## Parameters

- `participant`: The `SWPerson` displayed in the alert.
- `highlight`: The `SWCollaborationHighlight` related to the request.
