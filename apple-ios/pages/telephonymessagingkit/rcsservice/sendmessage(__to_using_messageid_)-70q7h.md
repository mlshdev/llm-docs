> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/sendmessage(_:to:using:messageid:)-70q7h](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/sendmessage(_:to:using:messageid:)-70q7h)

# sendMessage(\_:to:using:messageID:)

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+

Sends a text message to a specified destination.

## Declaration

```swift
final func sendMessage(_ content: RCSMessage.Text, to destination: RCSHandle, using cellularServiceID: CellularServiceID, messageID: RCSMessageID) async throws
```

## Parameters

- `content`: The content of the message to send, as an instance of [RCSMessage.Text](../rcsmessage/text.md).
- `destination`: The destination handle to send the message to.
- `cellularServiceID`: The service identifier to use for the message.
- `messageID`: The message identifier to use for the message.

<a id="discussion"></a>

## Discussion

> **Throws**

>  If RCS messaging isn’t supported, this method throws [RCSService.Error.notSupported](error/notsupported.md). If the message exceeds the maximum size, it throws [RCSService.Error.maximumSizeExceeded](error/maximumsizeexceeded.md).

## See Also

### Sending messages

- [RCSMessage.Text](../rcsmessage/text.md): A structure that represents text content in an RCS message.
- [sendMessage(\_:to:using:messageID:)](sendmessage%28__to_using_messageid_%29-63zct.md): Sends a file transfer message to a specified destination.
- [RCSMessage.FileTransfer](../rcsmessage/filetransfer.md): A structure that represents file transfer content in an RCS message.
- [sendMessage(\_:to:using:messageID:)](sendmessage%28__to_using_messageid_%29-9i178.md): Sends a composing indicator message to a specified destination.
- [RCSMessage.ComposingIndicator](../rcsmessage/composingindicator.md): A structure that represents RFC 3994 composing indicator content in an RCS message.
- [sendMessage(\_:to:using:messageID:)](sendmessage%28__to_using_messageid_%29-y1z.md): Sends a geolocation push message to a specified destination.
- [RCSMessage.GeolocationPush](../rcsmessage/geolocationpush.md): A structure that represents geolocation push content in an RCS message.
- [sendMessage(\_:to:using:messageID:group:)](sendmessage%28__to_using_messageid_group_%29.md): Sends the disposition for an incoming message.
- [RCSMessage.DispositionNotification](../rcsmessage/dispositionnotification.md): A structure that represents disposition notification content in an RCS message, such as whether delivery succeeded or failed.
- [RCSHandle](../rcshandle.md): An enumeration that represents an RCS destination or sender.
- [CellularServiceID](../cellularserviceid.md): An opaque identifier that represents the cellular service for which to provide operations.
- [RCSMessageID](../rcsmessageid.md): A structure that represents an RCS message identifier.
