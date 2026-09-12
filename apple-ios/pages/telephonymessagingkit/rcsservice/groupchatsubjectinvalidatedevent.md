> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/groupchatsubjectinvalidatedevent](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/groupchatsubjectinvalidatedevent)

# RCSService.GroupChatSubjectInvalidatedEvent

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.5+

Event triggered when a group’s encryption state changes, which causes the group subject to be cleared on the server.

## Declaration

```swift
struct GroupChatSubjectInvalidatedEvent
```

<a id="overview"></a>

## Overview

Your app should call [changeGroupChatSubject(\_:)](changegroupchatsubject%28__%29.md) to restore the group’s subject. Failing to do so will leave the group without a subject.

You can ignore this event if the group was unnamed.

## Topics

### Instance Properties

- [cellularServiceID](groupchatsubjectinvalidatedevent/cellularserviceid.md): Cellular service identifier associated with this event.
- [groupHandle](groupchatsubjectinvalidatedevent/grouphandle.md): The group handle whose subject was invalidated.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
