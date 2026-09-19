> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/incomingmessagenotification/groupcontext

# groupContext

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

The group context associated with this message.

## Declaration

```swift
let groupContext: RCSGroupContext?
```

<a id="discussion"></a>

## Discussion

This property is non-`nil` when the message is part of a group conversation.

## See Also

### Inspecting notification properties

- [message](message.md): The message contained in this notification.
- [RCSGroupContext](../../rcsgroupcontext.md): Structure containing information about a message’s group.
- [suggestions](suggestions.md): An array of suggestions associated with the message.
- [RCSService.Business.Suggestion](../business/suggestion.md): Enumeration representing a suggestion from a business.
