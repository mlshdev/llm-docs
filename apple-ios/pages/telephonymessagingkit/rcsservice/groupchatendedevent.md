> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/groupchatendedevent](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/groupchatendedevent)

# RCSService.GroupChatEndedEvent

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

Event triggered when a group chat is ended.

## Declaration

```swift
struct GroupChatEndedEvent
```

## Topics

### Accessing event properties

- [cellularServiceID](groupchatendedevent/cellularserviceid.md): Cellular service identifier associated with this event.
- [CellularServiceID](../cellularserviceid.md): An opaque identifier that represents the cellular service for which to provide operations.
- [groupHandle](groupchatendedevent/grouphandle.md): The group handle of the group chat.
- [RCSHandle.Group](../rcshandle/group.md): A structure that represents an RCS group handle.
- [endedBy](groupchatendedevent/endedby.md): Handle of device that performed the operation.
- [RCSHandle.URI](../rcshandle/uri.md): A structure that represents an RCS URI handle.

### Instance Properties

- [isEndToEndEncrypted](groupchatendedevent/isendtoendencrypted.md): A Boolean value that indicates whether the associated group is end-to-end encrypted.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [RCSService.GroupChatParticipantsAddedEvent](groupchatparticipantsaddedevent.md): Event triggered when participants are added to a group.
- [RCSService.GroupChatParticipantsRemovedEvent](groupchatparticipantsremovedevent.md): Event triggered when participants are removed from a group.
- [RCSService.GroupChatStartedEvent](groupchatstartedevent.md): Event triggered when group chat is started.
- [RCSService.GroupChatSubjectUpdatedEvent](groupchatsubjectupdatedevent.md): Event triggered when a group’s subject is updated.
