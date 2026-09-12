> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetvariant](https://developer.apple.com/documentation/avfoundation/avassetvariant)

# AVAssetVariant (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that represents a bit rate variant.

## Declaration

```swift
class AVAssetVariant
```

## Topics

### Configuring attributes

- [audioAttributes](avassetvariant/audioattributes-swift.property.md): The audio rendition attributes for the variant.
- [AVAssetVariant.AudioAttributes](avassetvariant/audioattributes-swift.class.md): An object that defines the audio attributes for an asset variant.
- [videoAttributes](avassetvariant/videoattributes-swift.property.md): The video rendition attributes for the variant.
- [AVAssetVariant.VideoAttributes](avassetvariant/videoattributes-swift.class.md): An object that defines the video attributes for an asset variant.

### Configuring bit rate

- [averageBitRate](avassetvariant/averagebitrate-5p1oh.md): The average bit rate for the variant.
- [peakBitRate](avassetvariant/peakbitrate-9hzpi.md): The peak bit rate for the variant.

### Accessing the URL

- [url](avassetvariant/url.md): Provides URL to media playlist corresponding to variant

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a variant qualifier

- [init(variant:)](avassetvariantqualifier/init%28variant_%29.md): Creates a variant qualifier with an asset variant.
- [init(predicate:)](avassetvariantqualifier/init%28predicate_%29.md): Creates a variant qualifier with a predicate.

# AVAssetVariant (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that represents a bit rate variant.

## Declaration

```objectivec
@interface AVAssetVariant : NSObject
```

## Topics

### Configuring attributes

- [audioAttributes](avassetvariant/audioattributes-swift.property.md): The audio rendition attributes for the variant.
- [AVAssetVariantAudioAttributes](avassetvariant/audioattributes-swift.class.md): An object that defines the audio attributes for an asset variant.
- [videoAttributes](avassetvariant/videoattributes-swift.property.md): The video rendition attributes for the variant.
- [AVAssetVariantVideoAttributes](avassetvariant/videoattributes-swift.class.md): An object that defines the video attributes for an asset variant.

### Configuring bit rate

- [averageBitRate](avassetvariant/averagebitrate-7bnsq.md): The average bit rate for the variant.
- [peakBitRate](avassetvariant/peakbitrate-38p2b.md): The peak bit rate for the variant.

### Accessing the URL

- [URL](avassetvariant/url.md): Provides URL to media playlist corresponding to variant

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Creating a variant qualifier

- [assetVariantQualifierWithVariant:](avassetvariantqualifier/init%28variant_%29.md): Creates a variant qualifier with an asset variant.
- [assetVariantQualifierWithPredicate:](avassetvariantqualifier/init%28predicate_%29.md): Creates a variant qualifier with a predicate.
- [assetVariantQualifierForMaximumValueInKeyPath:](avassetvariantqualifier/assetvariantqualifierformaximumvalueinkeypath_.md): Returns a qualifer for finding variant with maximum value in the input key path
- [assetVariantQualifierForMinimumValueInKeyPath:](avassetvariantqualifier/assetvariantqualifierforminimumvalueinkeypath_.md): Returns a qualifer for finding variant with minimum value in the input key path.
