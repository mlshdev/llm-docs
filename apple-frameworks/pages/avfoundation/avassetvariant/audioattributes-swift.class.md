> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetvariant/audioattributes-swift.class](https://developer.apple.com/documentation/avfoundation/avassetvariant/audioattributes-swift.class)

# AVAssetVariant.AudioAttributes (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that defines the audio attributes for an asset variant.

## Declaration

```swift
class AudioAttributes
```

## Topics

### Inspecting audio attributes

- [formatIDs](audioattributes-swift.class/formatids.md): The audio formats of the renditions present in the variant.
- [renditionSpecificAttributes(for:)](audioattributes-swift.class/renditionspecificattributes%28for_%29.md): Returns specific attributes for the media option.
- [AVAssetVariant.AudioAttributes.RenditionSpecificAttributes](audioattributes-swift.class/renditionspecificattributes.md): An object that represents attributes specific to a particular rendition.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring attributes

- [audioAttributes](audioattributes-swift.property.md): The audio rendition attributes for the variant.
- [videoAttributes](videoattributes-swift.property.md): The video rendition attributes for the variant.
- [AVAssetVariant.VideoAttributes](videoattributes-swift.class.md): An object that defines the video attributes for an asset variant.

# AVAssetVariantAudioAttributes (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that defines the audio attributes for an asset variant.

## Declaration

```objectivec
@interface AVAssetVariantAudioAttributes : NSObject
```

## Topics

### Inspecting audio attributes

- [formatIDs](../avassetvariantaudioattributes/formatids.md): The audio formats of the renditions present in the variant.
- [renditionSpecificAttributesForMediaOption:](audioattributes-swift.class/renditionspecificattributes%28for_%29.md): Returns specific attributes for the media option.
- [AVAssetVariantAudioRenditionSpecificAttributes](audioattributes-swift.class/renditionspecificattributes.md): An object that represents attributes specific to a particular rendition.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### Configuring attributes

- [audioAttributes](audioattributes-swift.property.md): The audio rendition attributes for the variant.
- [videoAttributes](videoattributes-swift.property.md): The video rendition attributes for the variant.
- [AVAssetVariantVideoAttributes](videoattributes-swift.class.md): An object that defines the video attributes for an asset variant.
