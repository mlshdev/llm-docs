> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/business/suggestion](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/business/suggestion)

# RCSService.Business.Suggestion

**Framework:** TelephonyMessagingKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+

Enumeration representing a suggestion from a business.

## Declaration

```swift
enum Suggestion
```

## Topics

### Determining suggestion type

- [RCSService.Business.Suggestion.action(\_:)](suggestion/action%28__%29.md): Suggested action.
- [RCSService.Business.SuggestedAction](suggestedaction.md): Suggested action sent by a business.
- [RCSService.Business.Suggestion.reply(\_:)](suggestion/reply%28__%29.md): Suggested reply.
- [RCSService.Business.SuggestedReply](suggestedreply.md): Suggested reply in response to a business message.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting notification properties

- [message](../incomingmessagenotification/message.md): The message contained in this notification.
- [groupContext](../incomingmessagenotification/groupcontext.md): The group context associated with this message.
- [RCSGroupContext](../../rcsgroupcontext.md): Structure containing information about a message’s group.
- [suggestions](../incomingmessagenotification/suggestions.md): An array of suggestions associated with the message.
