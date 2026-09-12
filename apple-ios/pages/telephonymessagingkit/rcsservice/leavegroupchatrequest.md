> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/leavegroupchatrequest](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/leavegroupchatrequest)

# RCSService.LeaveGroupChatRequest

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

Structure representing a request to leave a group chat.

## Declaration

```swift
struct LeaveGroupChatRequest
```

## Topics

### Creating a leave group chat request

- [init(cellularServiceID:groupHandle:)](leavegroupchatrequest/init%28cellularserviceid_grouphandle_%29.md)

### Accessing request properties

- [cellularServiceID](leavegroupchatrequest/cellularserviceid.md): Service identifier to use for this request.
- [groupHandle](leavegroupchatrequest/grouphandle.md): Group handle indicating the group to leave.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing group chats

- [createGroupChat(\_:)](creategroupchat%28__%29.md): Creates a group with a list of participants and a specified subject.
- [RCSService.CreateGroupChatRequest](creategroupchatrequest.md): Structure representing a request for creating a group chat.
- [leaveGroupChat(\_:)](leavegroupchat%28__%29.md): Leave a group chat.
- [addGroupChatParticipants(\_:)](addgroupchatparticipants%28__%29.md): Adds participants to a group chat.
- [RCSService.AddGroupChatParticipantsRequest](addgroupchatparticipantsrequest.md): Structure representing a request for adding participants to a group chat.
- [removeGroupChatParticipants(\_:)](removegroupchatparticipants%28__%29.md): Removes participants from a group chat.
- [RCSService.RemoveGroupChatParticipantsRequest](removegroupchatparticipantsrequest.md): Structure representing a request for removing participants from a group chat.
- [changeGroupChatSubject(\_:)](changegroupchatsubject%28__%29.md): Changes subject of a group.
- [RCSService.ChangeGroupChatSubjectRequest](changegroupchatsubjectrequest.md): Structure representing a request for changing a group chat’s subject.
- [groupChatEvents](groupchatevents.md): Returns an asynchronous sequence of incoming group chat notifications produced by this service.
- [RCSService.GroupChatEvent](groupchatevent.md): Enumeration representing an RCS group chat event.
