> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sharedwithyou/swremoveparticipantalertcontroller/init(participant:highlight:)

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
