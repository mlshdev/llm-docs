> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/rcsmessage/customreaction/init(targetmessageid:operation:isendtoendencrypted:)

# init(targetMessageID:operation:isEndToEndEncrypted:)

**Framework:** TelephonyMessagingKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+

Creates a custom reaction instance with the message identifier and content.

## Declaration

```swift
init(targetMessageID: RCSMessageID, operation: RCSMessage.CustomReaction.Operation, isEndToEndEncrypted: Bool)
```

## Parameters

- `targetMessageID`: The target message ID for the custom reaction.
- `operation`: The operation for the custom reaction.
- `isEndToEndEncrypted`: A Boolean value indicating whether this message is end-to-end encrypted.
