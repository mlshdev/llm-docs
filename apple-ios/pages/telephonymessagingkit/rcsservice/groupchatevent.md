> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/groupchatevent](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/groupchatevent)

# RCSService.GroupChatEvent

**Framework:** TelephonyMessagingKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+

Enumeration representing an RCS group chat event.

## Declaration

```swift
enum GroupChatEvent
```

## Topics

### Chat life cycle events

- [RCSService.GroupChatEvent.started(\_:)](groupchatevent/started%28__%29.md): Group chat started.
- [RCSService.GroupChatStartedEvent](groupchatstartedevent.md): Event triggered when group chat is started.
- [RCSService.GroupChatEvent.ended(\_:)](groupchatevent/ended%28__%29.md): Group chat ended.
- [RCSService.GroupChatEndedEvent](groupchatendedevent.md): Event triggered when a group chat is ended.
- [RCSService.GroupChatEvent.subjectUpdated(\_:)](groupchatevent/subjectupdated%28__%29.md): Group chat’s subject was updated.
- [RCSService.GroupChatSubjectUpdatedEvent](groupchatsubjectupdatedevent.md): Event triggered when a group’s subject is updated.

### Participant events

- [RCSService.GroupChatEvent.participantsAdded(\_:)](groupchatevent/participantsadded%28__%29.md): Participants have been added to a group chat.
- [RCSService.GroupChatParticipantsAddedEvent](groupchatparticipantsaddedevent.md): Event triggered when participants are added to a group.
- [RCSService.GroupChatEvent.participantsRemoved(\_:)](groupchatevent/participantsremoved%28__%29.md): Participants have been removed from a group chat.
- [RCSService.GroupChatParticipantsRemovedEvent](groupchatparticipantsremovedevent.md): Event triggered when participants are removed from a group.

### Enumeration Cases

- [RCSService.GroupChatEvent.subjectInvalidated(\_:)](groupchatevent/subjectinvalidated%28__%29.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing group chats

- [createGroupChat(\_:)](creategroupchat%28__%29.md): Creates a group with a list of participants and a specified subject.
- [RCSService.CreateGroupChatRequest](creategroupchatrequest.md): Structure representing a request for creating a group chat.
- [leaveGroupChat(\_:)](leavegroupchat%28__%29.md): Leave a group chat.
- [RCSService.LeaveGroupChatRequest](leavegroupchatrequest.md): Structure representing a request to leave a group chat.
- [addGroupChatParticipants(\_:)](addgroupchatparticipants%28__%29.md): Adds participants to a group chat.
- [RCSService.AddGroupChatParticipantsRequest](addgroupchatparticipantsrequest.md): Structure representing a request for adding participants to a group chat.
- [removeGroupChatParticipants(\_:)](removegroupchatparticipants%28__%29.md): Removes participants from a group chat.
- [RCSService.RemoveGroupChatParticipantsRequest](removegroupchatparticipantsrequest.md): Structure representing a request for removing participants from a group chat.
- [changeGroupChatSubject(\_:)](changegroupchatsubject%28__%29.md): Changes subject of a group.
- [RCSService.ChangeGroupChatSubjectRequest](changegroupchatsubjectrequest.md): Structure representing a request for changing a group chat’s subject.
- [groupChatEvents](groupchatevents.md): Returns an asynchronous sequence of incoming group chat notifications produced by this service.
