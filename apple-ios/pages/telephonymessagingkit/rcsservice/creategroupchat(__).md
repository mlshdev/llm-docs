> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/creategroupchat(_:)](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/creategroupchat(_:))

# createGroupChat(\_:)

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+

Creates a group with a list of participants and a specified subject.

## Declaration

```swift
final func createGroupChat(_ request: RCSService.CreateGroupChatRequest) async throws -> RCSService.CreateGroupChatRequest.Result
```

## Parameters

- `request`: Request specifying the group to create.

<a id="return-value"></a>

## Return Value

A [RCSService.CreateGroupChatRequest.Result](creategroupchatrequest/result.md) that contains the group handle for the group.

<a id="discussion"></a>

## Discussion

> **Throws**

> If the messaging service doesn’t support group chat, this method throws [RCSService.Error.notSupported](error/notsupported.md). If the group chat size exceeds the maximum allowed size, this method throws [RCSService.Error.maximumSizeExceeded](error/maximumsizeexceeded.md).

## See Also

### Managing group chats

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
- [RCSService.GroupChatEvent](groupchatevent.md): Enumeration representing an RCS group chat event.
