> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsmessage/content-swift.enum](https://developer.apple.com/documentation/telephonymessagingkit/rcsmessage/content-swift.enum)

# RCSMessage.Content

**Framework:** TelephonyMessagingKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+

An enumeration of the RCS message content types supported by the system.

## Declaration

```swift
enum Content
```

<a id="overview"></a>

## Overview

The types that are associated values in this enumeration’s cases contain properties unique to their respective content types. For example, [RCSMessage.Text](text.md) content contains a [body](text/body.md) string, while [RCSMessage.GeolocationPush](geolocationpush.md) content has a [latitude](geolocationpush/latitude.md) and [longitude](geolocationpush/longitude.md).

## Topics

### Working with text content

- [RCSMessage.Content.text(\_:)](content-swift.enum/text%28__%29.md): A content type for text content.
- [RCSMessage.Text](text.md): A structure that represents text content in an RCS message.

### Working with file transfers

- [RCSMessage.Content.fileTransfer(\_:)](content-swift.enum/filetransfer%28__%29.md): A content type for file transfer content.
- [RCSMessage.FileTransfer](filetransfer.md): A structure that represents file transfer content in an RCS message.

### Working with geolocation pushes

- [RCSMessage.Content.geolocationPush(\_:)](content-swift.enum/geolocationpush%28__%29.md): A content type for geolocation push content.
- [RCSMessage.GeolocationPush](geolocationpush.md): A structure that represents geolocation push content in an RCS message.

### Working with composing indicators

- [RCSMessage.Content.composingIndicator(\_:)](content-swift.enum/composingindicator%28__%29.md): A content type for composing indicator content.
- [RCSMessage.ComposingIndicator](composingindicator.md): A structure that represents RFC 3994 composing indicator content in an RCS message.

### Working with disposition notifications

- [RCSMessage.Content.dispositionNotification(\_:)](content-swift.enum/dispositionnotification%28__%29.md): A content type for disposition notification content.
- [RCSMessage.DispositionNotification](dispositionnotification.md): A structure that represents disposition notification content in an RCS message, such as whether delivery succeeded or failed.

### Working with business messages

- [RCSMessage.Content.businessCard(\_:)](content-swift.enum/businesscard%28__%29.md): A content type for business card content.
- [RCSService.Business.Card](../rcsservice/business/card.md): Structure representing a standalone card.
- [RCSMessage.Content.businessCardCarousel(\_:)](content-swift.enum/businesscardcarousel%28__%29.md): A content type for business card carousel content.
- [RCSService.Business.CardCarousel](../rcsservice/business/cardcarousel.md): Structure representing a card carousel.

### Enumeration Cases

- [RCSMessage.Content.customReaction(\_:)](content-swift.enum/customreaction%28__%29.md): A content type for custom reaction content.
- [RCSMessage.Content.reaction(\_:)](content-swift.enum/reaction%28__%29.md): A content type for reaction content.
- [RCSMessage.Content.reply(\_:)](content-swift.enum/reply%28__%29.md): A content type for reply content.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing message content

- [content](content-swift.property.md): The content of the message.
