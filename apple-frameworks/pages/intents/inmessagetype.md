> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmessagetype](https://developer.apple.com/documentation/intents/inmessagetype)

# INMessageType (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Constants that describe the kinds of content a message can contain.

## Declaration

```swift
enum INMessageType
```

## Topics

### General Types

- [INMessageType.unspecified](inmessagetype/unspecified.md): The message content isn’t specified.
- [INMessageType.text](inmessagetype/text.md): The message content is text-based.
- [INMessageType.animoji](inmessagetype/animoji.md): The message content is an animoji.
- [INMessageType.audio](inmessagetype/audio.md): The message contains audio content.
- [INMessageType.digitalTouch](inmessagetype/digitaltouch.md): The message contains digital touch content.
- [INMessageType.handwriting](inmessagetype/handwriting.md): The message contains handwritten content.
- [INMessageType.sticker](inmessagetype/sticker.md): The message contains sticker content.
- [INMessageType.link](inmessagetype/link.md): The message contains link content.
- [INMessageType.file](inmessagetype/file.md): The message contains a file.
- [INMessageType.activitySnippet](inmessagetype/activitysnippet.md): The message contains an activity snippet.

### Media Types

- [INMessageType.mediaCalendar](inmessagetype/mediacalendar.md): Media content containing calendar data.
- [INMessageType.mediaLocation](inmessagetype/medialocation.md): Media content containing location data.
- [INMessageType.mediaAddressCard](inmessagetype/mediaaddresscard.md): Media content containing an address card.
- [INMessageType.mediaImage](inmessagetype/mediaimage.md): Media content containing an image.
- [INMessageType.mediaVideo](inmessagetype/mediavideo.md): Media content containing video.
- [INMessageType.mediaPass](inmessagetype/mediapass.md): Media content containing PassKit data.
- [INMessageType.mediaAudio](inmessagetype/mediaaudio.md): Media content containing audio.

### Payment Types

- [INMessageType.paymentNote](inmessagetype/paymentnote.md): Content indicating the message contains notes about a payment.
- [INMessageType.paymentRequest](inmessagetype/paymentrequest.md): Content indicating the message contains payment request information.
- [INMessageType.paymentSent](inmessagetype/paymentsent.md): Content indicating the message contains sent payment information.

### Tapback Types

- [INMessageType.tapbackLiked](inmessagetype/tapbackliked.md): Deprecated. Content indicating that the user liked something.
- [INMessageType.tapbackDisliked](inmessagetype/tapbackdisliked.md): Deprecated. Content indicating that the user disliked something.
- [INMessageType.tapbackEmphasized](inmessagetype/tapbackemphasized.md): Deprecated. Content indicating that the user emphasized something.
- [INMessageType.tapbackLoved](inmessagetype/tapbackloved.md): Deprecated. Content indicating that the user loved something.
- [INMessageType.tapbackQuestioned](inmessagetype/tapbackquestioned.md): Deprecated. Content indicating that the user questioned something.
- [INMessageType.tapbackLaughed](inmessagetype/tapbacklaughed.md): Deprecated. Content indicating that the user laughed at something.

### Enumeration Cases

- [INMessageType.mediaAnimatedImage](inmessagetype/mediaanimatedimage.md)
- [INMessageType.reaction](inmessagetype/reaction.md)
- [INMessageType.thirdPartyAttachment](inmessagetype/thirdpartyattachment.md)

### Initializers

- [init(rawValue:)](inmessagetype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Supplementary Attributes

- [dateSent](inmessage/datesent.md): The date and time the app sent the message to each recipient.
- [groupName](inmessage/groupname.md): The name of the grouped conversation.
- [messageType](inmessage/messagetype.md): The type of content the message contains.
- [serviceName](inmessage/servicename.md): The name of the service that delivers the message.

# INMessageType (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Constants that describe the kinds of content a message can contain.

## Declaration

```objectivec
enum INMessageType : NSInteger;
```

## Topics

### General Types

- [INMessageTypeUnspecified](inmessagetype/unspecified.md): The message content isn’t specified.
- [INMessageTypeText](inmessagetype/text.md): The message content is text-based.
- [INMessageTypeAnimoji](inmessagetype/animoji.md): The message content is an animoji.
- [INMessageTypeAudio](inmessagetype/audio.md): The message contains audio content.
- [INMessageTypeDigitalTouch](inmessagetype/digitaltouch.md): The message contains digital touch content.
- [INMessageTypeHandwriting](inmessagetype/handwriting.md): The message contains handwritten content.
- [INMessageTypeSticker](inmessagetype/sticker.md): The message contains sticker content.
- [INMessageTypeLink](inmessagetype/link.md): The message contains link content.
- [INMessageTypeFile](inmessagetype/file.md): The message contains a file.
- [INMessageTypeActivitySnippet](inmessagetype/activitysnippet.md): The message contains an activity snippet.

### Media Types

- [INMessageTypeMediaCalendar](inmessagetype/mediacalendar.md): Media content containing calendar data.
- [INMessageTypeMediaLocation](inmessagetype/medialocation.md): Media content containing location data.
- [INMessageTypeMediaAddressCard](inmessagetype/mediaaddresscard.md): Media content containing an address card.
- [INMessageTypeMediaImage](inmessagetype/mediaimage.md): Media content containing an image.
- [INMessageTypeMediaVideo](inmessagetype/mediavideo.md): Media content containing video.
- [INMessageTypeMediaPass](inmessagetype/mediapass.md): Media content containing PassKit data.
- [INMessageTypeMediaAudio](inmessagetype/mediaaudio.md): Media content containing audio.

### Payment Types

- [INMessageTypePaymentNote](inmessagetype/paymentnote.md): Content indicating the message contains notes about a payment.
- [INMessageTypePaymentRequest](inmessagetype/paymentrequest.md): Content indicating the message contains payment request information.
- [INMessageTypePaymentSent](inmessagetype/paymentsent.md): Content indicating the message contains sent payment information.

### Tapback Types

- [INMessageTypeTapbackLiked](inmessagetype/tapbackliked.md): Deprecated. Content indicating that the user liked something.
- [INMessageTypeTapbackDisliked](inmessagetype/tapbackdisliked.md): Deprecated. Content indicating that the user disliked something.
- [INMessageTypeTapbackEmphasized](inmessagetype/tapbackemphasized.md): Deprecated. Content indicating that the user emphasized something.
- [INMessageTypeTapbackLoved](inmessagetype/tapbackloved.md): Deprecated. Content indicating that the user loved something.
- [INMessageTypeTapbackQuestioned](inmessagetype/tapbackquestioned.md): Deprecated. Content indicating that the user questioned something.
- [INMessageTypeTapbackLaughed](inmessagetype/tapbacklaughed.md): Deprecated. Content indicating that the user laughed at something.

### Enumeration Cases

- [INMessageTypeMediaAnimatedImage](inmessagetype/mediaanimatedimage.md)
- [INMessageTypeReaction](inmessagetype/reaction.md)
- [INMessageTypeThirdPartyAttachment](inmessagetype/thirdpartyattachment.md)

## See Also

### Getting the Supplementary Attributes

- [dateSent](inmessage/datesent.md): The date and time the app sent the message to each recipient.
- [groupName](inmessage/groupname.md): The name of the grouped conversation.
- [messageType](inmessage/messagetype.md): The type of content the message contains.
- [serviceName](inmessage/servicename.md): The name of the service that delivers the message.
