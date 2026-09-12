> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/changegroupchatsubjectrequest](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/changegroupchatsubjectrequest)

# RCSService.ChangeGroupChatSubjectRequest

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

Structure representing a request for changing a group chat’s subject.

## Declaration

```swift
struct ChangeGroupChatSubjectRequest
```

## Topics

### Creating a change group chat subject request

- [init(cellularServiceID:groupHandle:newSubject:)](changegroupchatsubjectrequest/init%28cellularserviceid_grouphandle_newsubject_%29.md)

### Accessing request properties

- [cellularServiceID](changegroupchatsubjectrequest/cellularserviceid.md): Service identifier to use for this request.
- [groupHandle](changegroupchatsubjectrequest/grouphandle.md): Group handle indicating the group for which to change the subject.
- [newSubject](changegroupchatsubjectrequest/newsubject.md): String specifying the new subject for the group.

### Supporting RCS encryption

- [isEndToEndEncrypted](changegroupchatsubjectrequest/isendtoendencrypted.md): A Boolean value indicating whether this request should be end-to-end encrypted. If the service does not support end-to-end encryption, the operation will throw [RCSService.Error.endToEndEncryptionNotSupported](error/endtoendencryptionnotsupported.md).

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
- [groupChatEvents](groupchatevents.md): Returns an asynchronous sequence of incoming group chat notifications produced by this service.
- [RCSService.GroupChatEvent](groupchatevent.md): Enumeration representing an RCS group chat event.
