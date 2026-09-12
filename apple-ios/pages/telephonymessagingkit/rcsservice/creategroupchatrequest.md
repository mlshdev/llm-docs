> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/creategroupchatrequest](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/creategroupchatrequest)

# RCSService.CreateGroupChatRequest

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

Structure representing a request for creating a group chat.

## Declaration

```swift
struct CreateGroupChatRequest
```

## Topics

### Creating a group chat request

- [init(cellularServiceID:participants:subject:)](creategroupchatrequest/init%28cellularserviceid_participants_subject_%29.md)

### Accessing request properties

- [cellularServiceID](creategroupchatrequest/cellularserviceid.md): Service identifier to use for this request.
- [participants](creategroupchatrequest/participants.md): List of participants in the group chat.
- [subject](creategroupchatrequest/subject.md): Subject to be used for group chat.

### Accessing the request result

- [RCSService.CreateGroupChatRequest.Result](creategroupchatrequest/result.md): Structure representing the result of a request to create a group chat.

### Supporting RCS encryption

- [isEndToEndEncrypted](creategroupchatrequest/isendtoendencrypted.md): A Boolean value indicating whether this request should be end-to-end encrypted. If the service does not support end-to-end encryption, the operation will throw [RCSService.Error.endToEndEncryptionNotSupported](error/endtoendencryptionnotsupported.md).

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing group chats

- [createGroupChat(\_:)](creategroupchat%28__%29.md): Creates a group with a list of participants and a specified subject.
- [leaveGroupChat(\_:)](leavegroupchat%28__%29.md): Leave a group chat.
- [RCSService.LeaveGroupChatRequest](leavegroupchatrequest.md): Structure representing a request to leave a group chat.
- [addGroupChatParticipants(\_:)](addgroupchatparticipants%28__%29.md): Adds participants to a group chat.
- [RCSService.AddGroupChatParticipantsRequest](addgroupchatparticipantsrequest.md): Structure representing a request for adding participants to a group chat.
- [removeGroupChatParticipants(\_:)](removegroupchatparticipants%28__%29.md): Removes participants from a group chat.
- [RCSService.RemoveGroupChatParticipantsRequest](removegroupchatparticipantsrequest.md): Structure representing a request for removing participants from a group chat.
- [changeGroupChatSubject(\_:)](changegroupchatsubject%28__%29.md): Changes subject of a group.
- [RCSService.ChangeGroupChatSubjectRequest](changegroupchatsubjectrequest.md): Structure representing a request for changing a group chat’s subject.
- [groupChatEvents](groupchatevents.md): Returns an asynchronous sequence of incoming group chat notifications produced by this service.
- [RCSService.GroupChatEvent](groupchatevent.md): Enumeration representing an RCS group chat event.
