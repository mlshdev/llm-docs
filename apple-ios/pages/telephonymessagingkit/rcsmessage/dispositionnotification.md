> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsmessage/dispositionnotification](https://developer.apple.com/documentation/telephonymessagingkit/rcsmessage/dispositionnotification)

# RCSMessage.DispositionNotification

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

A structure that represents disposition notification content in an RCS message, such as whether delivery succeeded or failed.

## Declaration

```swift
struct DispositionNotification
```

## Topics

### Creating a disposition notification instance

- [init(disposition:disposedMessageID:)](dispositionnotification/init%28disposition_disposedmessageid_%29.md): Creates a disposition notification content instance with the given disposition and a message identifier.

### Accessing disposition notification properties

- [disposition](dispositionnotification/disposition.md): The disposition of a message.
- [RCSMessage.Disposition](disposition.md): An enumeration that represents the disposition of an RCS message, such as whether delivery succeeded or failed.
- [disposedMessageID](dispositionnotification/disposedmessageid.md): The message identifier of the message.

### Supporting RCS encryption

- [isEndToEndEncrypted](dispositionnotification/isendtoendencrypted.md): A Boolean value indicating whether this message is end-to-end encrypted.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sending messages

- [sendMessage(\_:to:using:messageID:)](../rcsservice/sendmessage%28__to_using_messageid_%29-70q7h.md): Sends a text message to a specified destination.
- [RCSMessage.Text](text.md): A structure that represents text content in an RCS message.
- [sendMessage(\_:to:using:messageID:)](../rcsservice/sendmessage%28__to_using_messageid_%29-63zct.md): Sends a file transfer message to a specified destination.
- [RCSMessage.FileTransfer](filetransfer.md): A structure that represents file transfer content in an RCS message.
- [sendMessage(\_:to:using:messageID:)](../rcsservice/sendmessage%28__to_using_messageid_%29-9i178.md): Sends a composing indicator message to a specified destination.
- [RCSMessage.ComposingIndicator](composingindicator.md): A structure that represents RFC 3994 composing indicator content in an RCS message.
- [sendMessage(\_:to:using:messageID:)](../rcsservice/sendmessage%28__to_using_messageid_%29-y1z.md): Sends a geolocation push message to a specified destination.
- [RCSMessage.GeolocationPush](geolocationpush.md): A structure that represents geolocation push content in an RCS message.
- [sendMessage(\_:to:using:messageID:group:)](../rcsservice/sendmessage%28__to_using_messageid_group_%29.md): Sends the disposition for an incoming message.
- [RCSHandle](../rcshandle.md): An enumeration that represents an RCS destination or sender.
- [CellularServiceID](../cellularserviceid.md): An opaque identifier that represents the cellular service for which to provide operations.
- [RCSMessageID](../rcsmessageid.md): A structure that represents an RCS message identifier.
