> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/groupchatstartedevent](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/groupchatstartedevent)

# RCSService.GroupChatStartedEvent

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

Event triggered when group chat is started.

## Declaration

```swift
struct GroupChatStartedEvent
```

## Topics

### Accessing event properties

- [cellularServiceID](groupchatstartedevent/cellularserviceid.md): Cellular service identifier associated with this event.
- [groupHandle](groupchatstartedevent/grouphandle.md): The group handle of the incoming group.
- [participants](groupchatstartedevent/participants.md): The current participants in the group.
- [creator](groupchatstartedevent/creator.md): Creator of group.
- [subject](groupchatstartedevent/subject.md): The group’s subject.

### Supporting RCS encryption

- [isEndToEndEncrypted](groupchatstartedevent/isendtoendencrypted.md): A Boolean value that indicates whether the associated group is end-to-end encrypted.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [RCSService.GroupChatEndedEvent](groupchatendedevent.md): Event triggered when a group chat is ended.
- [RCSService.GroupChatParticipantsAddedEvent](groupchatparticipantsaddedevent.md): Event triggered when participants are added to a group.
- [RCSService.GroupChatParticipantsRemovedEvent](groupchatparticipantsremovedevent.md): Event triggered when participants are removed from a group.
- [RCSService.GroupChatSubjectUpdatedEvent](groupchatsubjectupdatedevent.md): Event triggered when a group’s subject is updated.
