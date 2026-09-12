> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/groupchatsubjectupdatedevent](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/groupchatsubjectupdatedevent)

# RCSService.GroupChatSubjectUpdatedEvent

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

Event triggered when a group’s subject is updated.

## Declaration

```swift
struct GroupChatSubjectUpdatedEvent
```

## Topics

### Accessing event properties

- [cellularServiceID](groupchatsubjectupdatedevent/cellularserviceid.md): Cellular service identifier associated with this event.
- [groupHandle](groupchatsubjectupdatedevent/grouphandle.md): The group handle whose subject was updated.
- [newSubject](groupchatsubjectupdatedevent/newsubject.md): The new subject for the group.
- [changedBy](groupchatsubjectupdatedevent/changedby.md): Handle of device that performed the operation.

### Supporting RCS encryption

- [isEndToEndEncrypted](groupchatsubjectupdatedevent/isendtoendencrypted.md): A Boolean value that indicates whether the associated group is end-to-end encrypted.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [RCSService.GroupChatEndedEvent](groupchatendedevent.md): Event triggered when a group chat is ended.
- [RCSService.GroupChatParticipantsAddedEvent](groupchatparticipantsaddedevent.md): Event triggered when participants are added to a group.
- [RCSService.GroupChatParticipantsRemovedEvent](groupchatparticipantsremovedevent.md): Event triggered when participants are removed from a group.
- [RCSService.GroupChatStartedEvent](groupchatstartedevent.md): Event triggered when group chat is started.
