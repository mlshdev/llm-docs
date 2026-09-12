> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/sendencryptedmessagerequest/init(content:destination:cellularserviceid:messageid:)-6dm2z](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/sendencryptedmessagerequest/init(content:destination:cellularserviceid:messageid:)-6dm2z)

# init(content:destination:cellularServiceID:messageID:)

**Framework:** TelephonyMessagingKit  
**Kind:** Initializer  
**Availability:** iOS 26.5+

Creates a new send encrypted message request with the given parameters.

## Declaration

```swift
init(content: RCSMessage.Text, destination: RCSHandle, cellularServiceID: CellularServiceID, messageID: RCSMessageID)
```

## Parameters

- `content`: The content of the message to send, as an instance of [RCSMessage.Text](../../rcsmessage/text.md).
- `destination`: The destination handle to send the message to.
- `cellularServiceID`: The service identifier to use for the message.
- `messageID`: The message identifier to use for the message.

## See Also

### Creating a request

- [init(content:destination:cellularServiceID:messageID:)](init%28content_destination_cellularserviceid_messageid_%29-3ox0y.md): Creates a new send encrypted message request with the given parameters.
- [init(content:destination:cellularServiceID:messageID:)](init%28content_destination_cellularserviceid_messageid_%29-jqfv.md): Creates a new send encrypted message request with the given parameters.
