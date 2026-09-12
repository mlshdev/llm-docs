> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/mmsservice/receivemessage(using:messageid:)](https://developer.apple.com/documentation/telephonymessagingkit/mmsservice/receivemessage(using:messageid:))

# receiveMessage(using:messageID:)

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ (deprecated in 26.1)

Retrieves an MMS message that matches the given identifiers.

> Use IncomingMessageNotification.message instead.

## Declaration

```swift
final func receiveMessage(using cellularServiceID: CellularServiceID, messageID: MMSMessageID) async throws -> MMSMessage
```

## Parameters

- `cellularServiceID`: The service identifier to use for this request.
- `messageID`: The message identifier for the target message.

<a id="return-value"></a>

## Return Value

The message matching the specified identifiers.

<a id="discussion"></a>

## Discussion

You get the `cellularServiceID` and `messageID` from an [MMSService.IncomingMessageNotification](incomingmessagenotification.md) that you receive from the [incomingMessageNotifications](incomingmessagenotifications.md) asynchronous sequence.

> **Throws**

> [TelephonyMessagingSession.Error.invalidSession](../telephonymessagingsession/error/invalidsession.md) if the session is no longer valid.
