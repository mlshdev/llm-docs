> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msmessagetemplatelayout](https://developer.apple.com/documentation/messages/msmessagetemplatelayout)

# MSMessageTemplateLayout (Swift)

**Framework:** Messages  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

A template-based layout for custom messages.

## Declaration

```swift
class MSMessageTemplateLayout
```

<a id="overview"></a>

## Overview

The [MSMessageTemplateLayout](msmessagetemplatelayout.md) describes how an [MSMessage](msmessage.md) object is presented in the transcript. The message template includes the Message extension’s icon, an image, video, or audio file, and a number of text elements (title, subtitle, caption, subcaption, trailing caption, and trailing subcaption). These elements are laid out as shown in [Figure 1](msmessagetemplatelayout.md#1965603).

![](https://developer.apple.com/images/com.apple.messages/media-1965603@2x.png)

To use the template:

1. Instantiate a new `MSMessageTemplateLayout` object.
2. Assign values to the properties representing the desired visual elements. You can leave unwanted elements set to `nil`. The system sizes the message balloon to fit the provided content.
3. Assign the `MSMessageTemplateLayout` object to the [MSMessage](msmessage.md) object’s [layout](msmessage/layout.md) property.

Do not subclass the `MSMessageTemplateLayout` class.

## Topics

### Assigning Visual Elements

- [image](msmessagetemplatelayout/image.md): An image used to represent the message in the transcript.
- [mediaFileURL](msmessagetemplatelayout/mediafileurl.md): A media file used to represent the message in the transcript.
- [imageTitle](msmessagetemplatelayout/imagetitle.md): The title for the image or media file.
- [imageSubtitle](msmessagetemplatelayout/imagesubtitle.md): The subtitle for the image or media file.
- [caption](msmessagetemplatelayout/caption.md): A left-aligned caption for the message bubble.
- [subcaption](msmessagetemplatelayout/subcaption.md): A left-aligned subcaption for the message bubble.
- [trailingCaption](msmessagetemplatelayout/trailingcaption.md): A right-aligned caption for the message bubble.
- [trailingSubcaption](msmessagetemplatelayout/trailingsubcaption.md): A right-aligned subcaption for the message bubble.

## Relationships

### Inherits From

- [MSMessageLayout](msmessagelayout.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Interactive messages

- [MSMessage](msmessage.md): A custom message object.
- [MSSession](mssession.md): A session object used to create and update messages.
- [MSMessageLayout](msmessagelayout.md): An abstract base class that defines the appearance of [MSMessage](msmessage.md) objects in the conversation transcript.
- [MSMessageLiveLayout](msmessagelivelayout.md): A layout that provides a custom, interactive view inside the transcript.

# MSMessageTemplateLayout (Objective-C)

**Framework:** Messages  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

A template-based layout for custom messages.

## Declaration

```objectivec
@interface MSMessageTemplateLayout : MSMessageLayout
```

<a id="overview"></a>

## Overview

The [MSMessageTemplateLayout](msmessagetemplatelayout.md) describes how an [MSMessage](msmessage.md) object is presented in the transcript. The message template includes the Message extension’s icon, an image, video, or audio file, and a number of text elements (title, subtitle, caption, subcaption, trailing caption, and trailing subcaption). These elements are laid out as shown in [Figure 1](msmessagetemplatelayout.md#1965603).

![](https://developer.apple.com/images/com.apple.messages/media-1965603@2x.png)

To use the template:

1. Instantiate a new `MSMessageTemplateLayout` object.
2. Assign values to the properties representing the desired visual elements. You can leave unwanted elements set to `nil`. The system sizes the message balloon to fit the provided content.
3. Assign the `MSMessageTemplateLayout` object to the [MSMessage](msmessage.md) object’s [layout](msmessage/layout.md) property.

Do not subclass the `MSMessageTemplateLayout` class.

## Topics

### Assigning Visual Elements

- [image](msmessagetemplatelayout/image.md): An image used to represent the message in the transcript.
- [mediaFileURL](msmessagetemplatelayout/mediafileurl.md): A media file used to represent the message in the transcript.
- [imageTitle](msmessagetemplatelayout/imagetitle.md): The title for the image or media file.
- [imageSubtitle](msmessagetemplatelayout/imagesubtitle.md): The subtitle for the image or media file.
- [caption](msmessagetemplatelayout/caption.md): A left-aligned caption for the message bubble.
- [subcaption](msmessagetemplatelayout/subcaption.md): A left-aligned subcaption for the message bubble.
- [trailingCaption](msmessagetemplatelayout/trailingcaption.md): A right-aligned caption for the message bubble.
- [trailingSubcaption](msmessagetemplatelayout/trailingsubcaption.md): A right-aligned subcaption for the message bubble.

## Relationships

### Inherits From

- [MSMessageLayout](msmessagelayout.md)

## See Also

### Interactive messages

- [MSMessage](msmessage.md): A custom message object.
- [MSSession](mssession.md): A session object used to create and update messages.
- [MSMessageLayout](msmessagelayout.md): An abstract base class that defines the appearance of [MSMessage](msmessage.md) objects in the conversation transcript.
- [MSMessageLiveLayout](msmessagelivelayout.md): A layout that provides a custom, interactive view inside the transcript.
