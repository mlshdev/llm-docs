> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsmessageid](https://developer.apple.com/documentation/telephonymessagingkit/rcsmessageid)

# RCSMessageID

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

A structure that represents an RCS message identifier.

## Declaration

```swift
struct RCSMessageID
```

## Topics

### Describing a message ID

- [description](rcsmessageid/description.md): A textual representation of this instance.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sending messages

- [sendMessage(\_:to:using:messageID:)](rcsservice/sendmessage%28__to_using_messageid_%29-70q7h.md): Sends a text message to a specified destination.
- [RCSMessage.Text](rcsmessage/text.md): A structure that represents text content in an RCS message.
- [sendMessage(\_:to:using:messageID:)](rcsservice/sendmessage%28__to_using_messageid_%29-63zct.md): Sends a file transfer message to a specified destination.
- [RCSMessage.FileTransfer](rcsmessage/filetransfer.md): A structure that represents file transfer content in an RCS message.
- [sendMessage(\_:to:using:messageID:)](rcsservice/sendmessage%28__to_using_messageid_%29-9i178.md): Sends a composing indicator message to a specified destination.
- [RCSMessage.ComposingIndicator](rcsmessage/composingindicator.md): A structure that represents RFC 3994 composing indicator content in an RCS message.
- [sendMessage(\_:to:using:messageID:)](rcsservice/sendmessage%28__to_using_messageid_%29-y1z.md): Sends a geolocation push message to a specified destination.
- [RCSMessage.GeolocationPush](rcsmessage/geolocationpush.md): A structure that represents geolocation push content in an RCS message.
- [sendMessage(\_:to:using:messageID:group:)](rcsservice/sendmessage%28__to_using_messageid_group_%29.md): Sends the disposition for an incoming message.
- [RCSMessage.DispositionNotification](rcsmessage/dispositionnotification.md): A structure that represents disposition notification content in an RCS message, such as whether delivery succeeded or failed.
- [RCSHandle](rcshandle.md): An enumeration that represents an RCS destination or sender.
- [CellularServiceID](cellularserviceid.md): An opaque identifier that represents the cellular service for which to provide operations.
