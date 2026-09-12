> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/mssticker](https://developer.apple.com/documentation/messages/mssticker)

# MSSticker (Swift)

**Framework:** Messages  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

A sticker that can be sent as a new message or attached to an existing balloon in the Messages app’s  transcript.

## Declaration

```swift
class MSSticker
```

## Mentioned In

- [Adding Sticker packs and iMessage apps to the system Stickers app, Messages camera, and FaceTime](adding-sticker-packs-and-imessage-apps-to-the-system-stickers-app-messages-camera-and-facetime.md)

## Topics

### Creating Stickers

- [init(contentsOfFileURL:localizedDescription:)](mssticker/init%28contentsoffileurl_localizeddescription_%29.md): Initializes a sticker with the contents of the URL and the localized description.

### Reading Sticker Data

- [imageFileURL](mssticker/imagefileurl.md): The file URL of the image displayed by the sticker.
- [localizedDescription](mssticker/localizeddescription.md): The sticker’s localized description.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Message content

- [MSConversation](msconversation.md): An object that represents a conversation in the Messages app.

# MSSticker (Objective-C)

**Framework:** Messages  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

A sticker that can be sent as a new message or attached to an existing balloon in the Messages app’s  transcript.

## Declaration

```objectivec
@interface MSSticker : NSObject
```

## Mentioned In

- [Adding Sticker packs and iMessage apps to the system Stickers app, Messages camera, and FaceTime](adding-sticker-packs-and-imessage-apps-to-the-system-stickers-app-messages-camera-and-facetime.md)

## Topics

### Creating Stickers

- [initWithContentsOfFileURL:localizedDescription:error:](mssticker/init%28contentsoffileurl_localizeddescription_%29.md): Initializes a sticker with the contents of the URL and the localized description.

### Reading Sticker Data

- [imageFileURL](mssticker/imagefileurl.md): The file URL of the image displayed by the sticker.
- [localizedDescription](mssticker/localizeddescription.md): The sticker’s localized description.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Message content

- [MSConversation](msconversation.md): An object that represents a conversation in the Messages app.
