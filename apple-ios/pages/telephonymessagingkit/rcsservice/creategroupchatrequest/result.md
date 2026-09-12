> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/creategroupchatrequest/result](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/creategroupchatrequest/result)

# RCSService.CreateGroupChatRequest.Result

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

Structure representing the result of a request to create a group chat.

## Declaration

```swift
struct Result
```

## Topics

### Accessing result properties

- [groupHandle](result/grouphandle.md): Handle for the newly created group.
- [participants](result/participants.md): Array of participants in group chat.
- [subject](result/subject.md): The group chat’s subject.

### Supporting RCS encryption

- [isEndToEndEncrypted](result/isendtoendencrypted.md): A Boolean value indicating whether the associated group is end-to-end encrypted.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
