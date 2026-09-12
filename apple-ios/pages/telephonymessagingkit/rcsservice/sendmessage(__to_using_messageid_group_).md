> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/sendmessage(_:to:using:messageid:group:)](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/sendmessage(_:to:using:messageid:group:))

# sendMessage(\_:to:using:messageID:group:)

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+

Sends the disposition for an incoming message.

## Declaration

```swift
final func sendMessage(_ content: RCSMessage.DispositionNotification, to destination: RCSHandle.URI, using cellularServiceID: CellularServiceID, messageID: RCSMessageID, group: RCSHandle.Group? = nil) async throws
```

## Parameters

- `content`: The content of the message to send.
- `destination`: Destination handle to send the message disposition to.
- `cellularServiceID`: Service identifier to use for this request.
- `messageID`: Message ID to use for this message.
- `group`: Optional group handle to use when the incoming message is part of a group conversation.

<a id="discussion"></a>

## Discussion

Your app can send this message so recipients can see if your app received and displayed a given message.

## See Also

### Sending messages

- [sendMessage(\_:to:using:messageID:)](sendmessage%28__to_using_messageid_%29-70q7h.md): Sends a text message to a specified destination.
- [RCSMessage.Text](../rcsmessage/text.md): A structure that represents text content in an RCS message.
- [sendMessage(\_:to:using:messageID:)](sendmessage%28__to_using_messageid_%29-63zct.md): Sends a file transfer message to a specified destination.
- [RCSMessage.FileTransfer](../rcsmessage/filetransfer.md): A structure that represents file transfer content in an RCS message.
- [sendMessage(\_:to:using:messageID:)](sendmessage%28__to_using_messageid_%29-9i178.md): Sends a composing indicator message to a specified destination.
- [RCSMessage.ComposingIndicator](../rcsmessage/composingindicator.md): A structure that represents RFC 3994 composing indicator content in an RCS message.
- [sendMessage(\_:to:using:messageID:)](sendmessage%28__to_using_messageid_%29-y1z.md): Sends a geolocation push message to a specified destination.
- [RCSMessage.GeolocationPush](../rcsmessage/geolocationpush.md): A structure that represents geolocation push content in an RCS message.
- [RCSMessage.DispositionNotification](../rcsmessage/dispositionnotification.md): A structure that represents disposition notification content in an RCS message, such as whether delivery succeeded or failed.
- [RCSHandle](../rcshandle.md): An enumeration that represents an RCS destination or sender.
- [CellularServiceID](../cellularserviceid.md): An opaque identifier that represents the cellular service for which to provide operations.
- [RCSMessageID](../rcsmessageid.md): A structure that represents an RCS message identifier.
