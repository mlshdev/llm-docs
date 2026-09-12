> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetvariant/audioattributes-swift.class/renditionspecificattributes](https://developer.apple.com/documentation/avfoundation/avassetvariant/audioattributes-swift.class/renditionspecificattributes)

# AVAssetVariant.AudioAttributes.RenditionSpecificAttributes (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that represents attributes specific to a particular rendition.

## Declaration

```swift
class RenditionSpecificAttributes
```

## Topics

### Accessing attributes

- [channelCount](renditionspecificattributes/channelcount.md): The count of audio channels in the rendition.
- [isBinaural](renditionspecificattributes/isbinaural.md): A Boolean value that indicates the variant is best suited for delivery to headphones.
- [isImmersive](renditionspecificattributes/isimmersive.md): A Boolean value that indicates whether this variant contains virtualized or otherwise preprocessed audio content suitable for various purposes.
- [isDownmix](renditionspecificattributes/isdownmix.md): A Boolean value that indicates whether the variant is a downmix derivative of other media of greater channel count.

## Relationships

### Inherits From

- [NSObject](../../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting audio attributes

- [formatIDs](formatids.md): The audio formats of the renditions present in the variant.
- [renditionSpecificAttributes(for:)](renditionspecificattributes%28for_%29.md): Returns specific attributes for the media option.

# AVAssetVariantAudioRenditionSpecificAttributes (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that represents attributes specific to a particular rendition.

## Declaration

```objectivec
@interface AVAssetVariantAudioRenditionSpecificAttributes : NSObject
```

## Topics

### Accessing attributes

- [channelCount](../../avassetvariantaudiorenditionspecificattributes/channelcount.md): The count of audio channels in the rendition.
- [binaural](renditionspecificattributes/isbinaural.md): A Boolean value that indicates the variant is best suited for delivery to headphones.
- [immersive](renditionspecificattributes/isimmersive.md): A Boolean value that indicates whether this variant contains virtualized or otherwise preprocessed audio content suitable for various purposes.
- [downmix](renditionspecificattributes/isdownmix.md): A Boolean value that indicates whether the variant is a downmix derivative of other media of greater channel count.

## Relationships

### Inherits From

- [NSObject](../../../objectivec/nsobject-swift.class.md)

## See Also

### Inspecting audio attributes

- [formatIDs](../../avassetvariantaudioattributes/formatids.md): The audio formats of the renditions present in the variant.
- [renditionSpecificAttributesForMediaOption:](renditionspecificattributes%28for_%29.md): Returns specific attributes for the media option.
