> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/smsmessage/init(cellularserviceid:handle:messageid:content:)](https://developer.apple.com/documentation/telephonymessagingkit/smsmessage/init(cellularserviceid:handle:messageid:content:))

# init(cellularServiceID:handle:messageID:content:)

**Framework:** TelephonyMessagingKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+

Initializes an SMS Message for sending to a receipient.

## Declaration

```swift
init(cellularServiceID: CellularServiceID, handle: SMSHandle, messageID: SMSMessageID, content: SMSContent)
```

## Parameters

- `cellularServiceID`: The service identifier to use for the message.
- `handle`: A handle that represents the destination of the message.
- `messageID`: The message identifier to use for this message.
- `content`: The content to send for the message.
