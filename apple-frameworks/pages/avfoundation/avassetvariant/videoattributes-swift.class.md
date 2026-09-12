> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetvariant/videoattributes-swift.class](https://developer.apple.com/documentation/avfoundation/avassetvariant/videoattributes-swift.class)

# AVAssetVariant.VideoAttributes (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that defines the video attributes for an asset variant.

## Declaration

```swift
class VideoAttributes
```

## Topics

### Inspecting the attributes

- [codecTypes](videoattributes-swift.class/codectypes.md): The video sample codec types present in the variant’s renditions.
- [nominalFrameRate](videoattributes-swift.class/nominalframerate.md): The nominal frame rate of the variant’s renditions.
- [presentationSize](videoattributes-swift.class/presentationsize.md): The presentation size of the variant’s renditions.
- [videoRange](videoattributes-swift.class/videorange.md): The video range of the variant.
- [AVVideoRange](../avvideorange.md): Constants that describe a video variant’s dynamic range.
- [videoLayoutAttributes](videoattributes-swift.class/videolayoutattributes.md): Attributes that describe the layout of the video content.
- [AVAssetVariant.VideoAttributes.LayoutAttributes](videoattributes-swift.class/layoutattributes.md): Attributes that describe the layout of video content.

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
- [AVAssetVariant.AudioAttributes](audioattributes-swift.class.md): An object that defines the audio attributes for an asset variant.
- [videoAttributes](videoattributes-swift.property.md): The video rendition attributes for the variant.

# AVAssetVariantVideoAttributes (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that defines the video attributes for an asset variant.

## Declaration

```objectivec
@interface AVAssetVariantVideoAttributes : NSObject
```

## Topics

### Inspecting the attributes

- [codecTypes](../avassetvariantvideoattributes/codectypes.md): The video sample codec types present in the variant’s renditions.
- [nominalFrameRate](../avassetvariantvideoattributes/nominalframerate.md): The nominal frame rate of the variant’s renditions.
- [presentationSize](videoattributes-swift.class/presentationsize.md): The presentation size of the variant’s renditions.
- [videoRange](videoattributes-swift.class/videorange.md): The video range of the variant.
- [AVVideoRange](../avvideorange.md): Constants that describe a video variant’s dynamic range.
- [videoLayoutAttributes](videoattributes-swift.class/videolayoutattributes.md): Attributes that describe the layout of the video content.
- [AVAssetVariantVideoLayoutAttributes](videoattributes-swift.class/layoutattributes.md): Attributes that describe the layout of video content.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### Configuring attributes

- [audioAttributes](audioattributes-swift.property.md): The audio rendition attributes for the variant.
- [AVAssetVariantAudioAttributes](audioattributes-swift.class.md): An object that defines the audio attributes for an asset variant.
- [videoAttributes](videoattributes-swift.property.md): The video rendition attributes for the variant.
