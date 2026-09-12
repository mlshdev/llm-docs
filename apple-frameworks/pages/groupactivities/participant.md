> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/participant](https://developer.apple.com/documentation/groupactivities/participant)

# Participant

**Framework:** Group Activities  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

An active participant in a group session.

## Declaration

```swift
struct Participant
```

## Mentioned In

- [Configure your visionOS app for sharing with people nearby](configure-your-app-for-sharing-with-people-nearby.md)
- [Synchronizing data during a SharePlay activity](synchronizing-data-during-a-shareplay-activity.md)

<a id="overview"></a>

## Overview

Use a `Participant` object to differentiate among users in a session. A participant object doesn’t contain any sensitive data about the user, but provides a unique identifier to distinguish the user while the session is active.

You don’t create participant objects directly. The system creates a participant object for each user that joins an activity. Access the current set of participants from the [activeParticipants](groupsession/activeparticipants.md) property of the [GroupSession](groupsession.md) object associated with the activity.

## Topics

### Getting the unique identifier

- [id](participant/id.md): A globally unique identifier for the session participant.

### Instance Properties

- [isNearbyWithLocalParticipant](participant/isnearbywithlocalparticipant.md): A Boolean value that indicates whether the participant is physically nearby with the local participant.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Session management

- [Joining and managing a shared activity](joining-and-managing-a-shared-activity.md): Configure the session when a SharePlay activity starts, and handle events that occur during the lifetime of the activity.
- [Drawing content in a group session](drawing-content-in-a-group-session.md): Invite your friends to draw on a shared canvas while on a FaceTime call.
- [GroupSession](groupsession.md): A session for an in-progress activity that synchronizes content among participant devices.
- [CustomMessageIdentifiable](custommessageidentifiable.md): A type that assigns a custom ID string to messages you send to other devices.
