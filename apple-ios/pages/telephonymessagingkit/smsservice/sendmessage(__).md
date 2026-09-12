> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/smsservice/sendmessage(_:)](https://developer.apple.com/documentation/telephonymessagingkit/smsservice/sendmessage(_:))

# sendMessage(\_:)

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+

Sends an SMS message to the given destination.

## Declaration

```swift
final func sendMessage(_ message: SMSMessage) async throws
```

## Parameters

- `message`: The SMS message to send.

<a id="discussion"></a>

## Discussion

> **Throws**

> - [TelephonyMessagingSession.Error.invalidSession](../telephonymessagingsession/error/invalidsession.md) if the session isn’t valid.

## See Also

### Sending messages

- [SMSMessage](../smsmessage.md): A structure that contains the data of an SMS message.
