> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/rcsmessage/reaction/init(targetmessageid:operation:)

# init(targetMessageID:operation:)

**Framework:** TelephonyMessagingKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+

Creates a reaction instance with the message identifier and content.

## Declaration

```swift
init(targetMessageID: RCSMessageID, operation: RCSMessage.Reaction.Operation)
```

## Parameters

- `targetMessageID`: The target message ID for the reaction.
- `operation`: The operation for the reaction.
