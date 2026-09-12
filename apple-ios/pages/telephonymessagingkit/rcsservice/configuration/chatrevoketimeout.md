> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/configuration/chatrevoketimeout](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/configuration/chatrevoketimeout)

# chatRevokeTimeout

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

The maximum duration the service provider allows for delivery notification before it revokes a chat message.

## Declaration

```swift
let chatRevokeTimeout: Duration?
```

<a id="discussion"></a>

## Discussion

After the app sends a message, the system expects to receive a delivery notification for that message. When your app sends a message, start a timer with this timeout value. If the timer expires without receiving a delivery notification, revoke the message with [revokeMessage(\_:)](../revokemessage%28__%29.md), and resend with SMS or MMS.

This value is represented as a Swift [Duration](https://developer.apple.com/documentation/swift/duration), unless the client can’t send Revoke Message requests, in which case the value is `nil`.

## See Also

### Inspecting chat configuration

- [maximumGroupSize](maximumgroupsize.md): The maximum number of participants allowed for a group chat.
