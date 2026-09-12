> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/groupchatparticipantsremovedevent](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/groupchatparticipantsremovedevent)

# RCSService.GroupChatParticipantsRemovedEvent

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

Event triggered when participants are removed from a group.

## Declaration

```swift
struct GroupChatParticipantsRemovedEvent
```

## Topics

### Accessing event properties

- [cellularServiceID](groupchatparticipantsremovedevent/cellularserviceid.md): Cellular service identifier associated with this event.
- [groupHandle](groupchatparticipantsremovedevent/grouphandle.md): The group handle from which participants were removed.
- [removedParticipants](groupchatparticipantsremovedevent/removedparticipants.md): Array of handles indicating the participants that were removed.
- [removedBy](groupchatparticipantsremovedevent/removedby.md): Handle of device that performed the operation.
- [removedCurrentUser](groupchatparticipantsremovedevent/removedcurrentuser.md): Whether the current user was removed from the group.

### Supporting RCS encryption

- [isEndToEndEncrypted](groupchatparticipantsremovedevent/isendtoendencrypted.md): A Boolean value that indicates whether the associated group is end-to-end encrypted.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [RCSService.GroupChatEndedEvent](groupchatendedevent.md): Event triggered when a group chat is ended.
- [RCSService.GroupChatParticipantsAddedEvent](groupchatparticipantsaddedevent.md): Event triggered when participants are added to a group.
- [RCSService.GroupChatStartedEvent](groupchatstartedevent.md): Event triggered when group chat is started.
- [RCSService.GroupChatSubjectUpdatedEvent](groupchatsubjectupdatedevent.md): Event triggered when a group’s subject is updated.
