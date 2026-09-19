> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/mmsmessage/init(cellularserviceid:messageid:content:)

# init(cellularServiceID:messageID:content:)

**Framework:** TelephonyMessagingKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+

Initializes an MMS message for sending to a receipient.

## Declaration

```swift
init(cellularServiceID: CellularServiceID, messageID: MMSMessageID, content: MMSContent)
```

## Parameters

- `cellularServiceID`: The service identifier for this message.
- `messageID`: The message identifier for this message.
- `content`: The content to send for this message.
