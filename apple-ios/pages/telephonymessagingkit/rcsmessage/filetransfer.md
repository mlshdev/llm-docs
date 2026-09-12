> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsmessage/filetransfer](https://developer.apple.com/documentation/telephonymessagingkit/rcsmessage/filetransfer)

# RCSMessage.FileTransfer

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

A structure that represents file transfer content in an RCS message.

## Declaration

```swift
struct FileTransfer
```

<a id="overview"></a>

## Overview

When sending a file to a recipient, you use the [RCSService](../rcsservice.md) to call [upload(\_:)](../rcsservice/upload%28__%29.md) and use the metadata returned by that method to create a message of this type. When receiving a file, you handle messages of this type in the [incomingMessageNotifications](../rcsservice/incomingmessagenotifications.md) asynchronous sequence, and use the received message to create a [RCSService.FileDownloadRequest](../rcsservice/filedownloadrequest.md) for use with [download(\_:)](../rcsservice/download%28__%29.md).

## Topics

### Creating a file transfer instance

- [init(fileMetadata:thumbnailMetadata:)](filetransfer/init%28filemetadata_thumbnailmetadata_%29.md): Creates a file transfer content instance with the given metadata.
- [RCSFileTransferMetadata](../rcsfiletransfermetadata.md): A structure that contains metadata about an RCS file transfer.

### Accessing file transfer properties

- [fileMetadata](filetransfer/filemetadata.md): Metadata for the transferred file.
- [thumbnailMetadata](filetransfer/thumbnailmetadata.md): Metadata for the transferred thumbnail.

### Supporting RCS encryption

- [isEndToEndEncrypted](filetransfer/isendtoendencrypted.md): A Boolean value indicating whether this message is end-to-end encrypted.

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
- [sendMessage(\_:to:using:messageID:)](../rcsservice/sendmessage%28__to_using_messageid_%29-9i178.md): Sends a composing indicator message to a specified destination.
- [RCSMessage.ComposingIndicator](composingindicator.md): A structure that represents RFC 3994 composing indicator content in an RCS message.
- [sendMessage(\_:to:using:messageID:)](../rcsservice/sendmessage%28__to_using_messageid_%29-y1z.md): Sends a geolocation push message to a specified destination.
- [RCSMessage.GeolocationPush](geolocationpush.md): A structure that represents geolocation push content in an RCS message.
- [sendMessage(\_:to:using:messageID:group:)](../rcsservice/sendmessage%28__to_using_messageid_group_%29.md): Sends the disposition for an incoming message.
- [RCSMessage.DispositionNotification](dispositionnotification.md): A structure that represents disposition notification content in an RCS message, such as whether delivery succeeded or failed.
- [RCSHandle](../rcshandle.md): An enumeration that represents an RCS destination or sender.
- [CellularServiceID](../cellularserviceid.md): An opaque identifier that represents the cellular service for which to provide operations.
- [RCSMessageID](../rcsmessageid.md): A structure that represents an RCS message identifier.
