> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/incomingmessagenotification/message

# message

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

The message contained in this notification.

## Declaration

```swift
let message: RCSMessage
```

## See Also

### Inspecting notification properties

- [groupContext](groupcontext.md): The group context associated with this message.
- [RCSGroupContext](../../rcsgroupcontext.md): Structure containing information about a message’s group.
- [suggestions](suggestions.md): An array of suggestions associated with the message.
- [RCSService.Business.Suggestion](../business/suggestion.md): Enumeration representing a suggestion from a business.
