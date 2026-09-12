> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/sendencryptedmessagerequest/init(content:destination:cellularserviceid:messageid:)-9lffd](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/sendencryptedmessagerequest/init(content:destination:cellularserviceid:messageid:)-9lffd)

# init(content:destination:cellularServiceID:messageID:)

**Framework:** TelephonyMessagingKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+

Creates a new send encrypted message request with the given parameters.

## Declaration

```swift
init(content: RCSMessage.Reaction, destination: RCSHandle, cellularServiceID: CellularServiceID, messageID: RCSMessageID)
```

## Parameters

- `content`: The content of the message to send, as an instance of [RCSMessage.Reaction](../../rcsmessage/reaction.md).
- `destination`: The destination handle to send the message to.
- `cellularServiceID`: The service identifier to use for the message.
- `messageID`: The message identifier to use for the message.
