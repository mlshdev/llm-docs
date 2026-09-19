> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/rcsmessage/reply/init(targetmessageid:content:)

# init(targetMessageID:content:)

**Framework:** TelephonyMessagingKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+

Creates a reply instance with the message identifier and content.

## Declaration

```swift
init(targetMessageID: RCSMessageID, content: RCSMessage.Reply.Content)
```

## Parameters

- `targetMessageID`: The target message ID for the reply.
- `content`: The content of the reply.
