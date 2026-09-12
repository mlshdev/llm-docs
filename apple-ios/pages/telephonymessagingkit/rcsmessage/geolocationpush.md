> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsmessage/geolocationpush](https://developer.apple.com/documentation/telephonymessagingkit/rcsmessage/geolocationpush)

# RCSMessage.GeolocationPush

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

A structure that represents geolocation push content in an RCS message.

## Declaration

```swift
struct GeolocationPush
```

## Topics

### Accessing geolocation properties

- [latitude](geolocationpush/latitude.md): The latitude of the location.
- [longitude](geolocationpush/longitude.md): The longitude of the location.

### Supporting RCS encryption

- [isEndToEndEncrypted](geolocationpush/isendtoendencrypted.md): A Boolean value indicating whether this message is end-to-end encrypted.

### Initializers

- [init(latitude:longitude:description:)](geolocationpush/init%28latitude_longitude_description_%29.md): Creates a geolocation push content instance with the given latitude and longitude.

### Instance Properties

- [description](geolocationpush/description.md): A textual description of the location.

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
- [sendMessage(\_:to:using:messageID:group:)](../rcsservice/sendmessage%28__to_using_messageid_group_%29.md): Sends the disposition for an incoming message.
- [RCSMessage.DispositionNotification](dispositionnotification.md): A structure that represents disposition notification content in an RCS message, such as whether delivery succeeded or failed.
- [RCSHandle](../rcshandle.md): An enumeration that represents an RCS destination or sender.
- [CellularServiceID](../cellularserviceid.md): An opaque identifier that represents the cellular service for which to provide operations.
- [RCSMessageID](../rcsmessageid.md): A structure that represents an RCS message identifier.
