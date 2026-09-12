> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/removegroupchatparticipantsrequest](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/removegroupchatparticipantsrequest)

# RCSService.RemoveGroupChatParticipantsRequest

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

Structure representing a request for removing participants from a group chat.

## Declaration

```swift
struct RemoveGroupChatParticipantsRequest
```

## Topics

### Creating a remove group chat participants request

- [init(cellularServiceID:groupHandle:participants:)](removegroupchatparticipantsrequest/init%28cellularserviceid_grouphandle_participants_%29.md)

### Accessing request properties

- [cellularServiceID](removegroupchatparticipantsrequest/cellularserviceid.md): Service identifier to use for this request.
- [groupHandle](removegroupchatparticipantsrequest/grouphandle.md): Group handle indicating the group from which to remove participants.
- [participants](removegroupchatparticipantsrequest/participants.md): Array of participants to be removed from group.

### Accessing the request result

- [RCSService.RemoveGroupChatParticipantsRequest.Result](removegroupchatparticipantsrequest/result.md): Structure representing the result of a request to remove participants from a group chat.

### Supporting RCS encryption

- [isEndToEndEncrypted](removegroupchatparticipantsrequest/isendtoendencrypted.md): A Boolean value indicating whether this request should be end-to-end encrypted. If the service does not support end-to-end encryption, the operation will throw [RCSService.Error.endToEndEncryptionNotSupported](error/endtoendencryptionnotsupported.md).

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
- [changeGroupChatSubject(\_:)](changegroupchatsubject%28__%29.md): Changes subject of a group.
- [RCSService.ChangeGroupChatSubjectRequest](changegroupchatsubjectrequest.md): Structure representing a request for changing a group chat’s subject.
- [groupChatEvents](groupchatevents.md): Returns an asynchronous sequence of incoming group chat notifications produced by this service.
- [RCSService.GroupChatEvent](groupchatevent.md): Enumeration representing an RCS group chat event.
