> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsmessage/composingindicator](https://developer.apple.com/documentation/telephonymessagingkit/rcsmessage/composingindicator)

# RCSMessage.ComposingIndicator

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

A structure that represents RFC 3994 composing indicator content in an RCS message.

## Declaration

```swift
struct ComposingIndicator
```

<a id="overview"></a>

## Overview

This content type indicates whether the party sending the message is currently active. Your app can use this to provide an “is typing” indicator to the person using the app.

## Topics

### Creating a composing indicator instance

- [init(state:lastActive:contentType:refreshInterval:)](composingindicator/init%28state_lastactive_contenttype_refreshinterval_%29.md)

### Accessing composing indicator properties

- [state](composingindicator/state-swift.property.md): The state of the composer.
- [RCSMessage.ComposingIndicator.State](composingindicator/state-swift.enum.md): An enumeration that represents the state of the indicator.
- [lastActive](composingindicator/lastactive.md): The time of last activity.
- [contentType](composingindicator/contenttype.md): The type of message being composed.
- [UTType](https://developer.apple.com/documentation/uniformtypeidentifiers/uttype-swift.struct): A structure that represents a type of data to load, send, or receive.
- [refreshInterval](composingindicator/refreshinterval.md): The time interval after which the receiver can expect an update from the composer.

### Supporting RCS encryption

- [isEndToEndEncrypted](composingindicator/isendtoendencrypted.md): A Boolean value indicating whether this message is end-to-end encrypted.

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
- [sendMessage(\_:to:using:messageID:)](../rcsservice/sendmessage%28__to_using_messageid_%29-y1z.md): Sends a geolocation push message to a specified destination.
- [RCSMessage.GeolocationPush](geolocationpush.md): A structure that represents geolocation push content in an RCS message.
- [sendMessage(\_:to:using:messageID:group:)](../rcsservice/sendmessage%28__to_using_messageid_group_%29.md): Sends the disposition for an incoming message.
- [RCSMessage.DispositionNotification](dispositionnotification.md): A structure that represents disposition notification content in an RCS message, such as whether delivery succeeded or failed.
- [RCSHandle](../rcshandle.md): An enumeration that represents an RCS destination or sender.
- [CellularServiceID](../cellularserviceid.md): An opaque identifier that represents the cellular service for which to provide operations.
- [RCSMessageID](../rcsmessageid.md): A structure that represents an RCS message identifier.
