> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetvariant/audioattributes-swift.property](https://developer.apple.com/documentation/avfoundation/avassetvariant/audioattributes-swift.property)

# audioAttributes (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The audio rendition attributes for the variant.

## Declaration

```swift
var audioAttributes: AVAssetVariant.AudioAttributes? { get }
```

<a id="Discussion"></a>

## Discussion

This property value is `nil` if the variant defines no audio attributes.

## See Also

### Configuring attributes

- [AVAssetVariant.AudioAttributes](audioattributes-swift.class.md): An object that defines the audio attributes for an asset variant.
- [videoAttributes](videoattributes-swift.property.md): The video rendition attributes for the variant.
- [AVAssetVariant.VideoAttributes](videoattributes-swift.class.md): An object that defines the video attributes for an asset variant.

# audioAttributes (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The audio rendition attributes for the variant.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) AVAssetVariantAudioAttributes * audioAttributes;
```

<a id="Discussion"></a>

## Discussion

This property value is `nil` if the variant defines no audio attributes.

## See Also

### Configuring attributes

- [AVAssetVariantAudioAttributes](audioattributes-swift.class.md): An object that defines the audio attributes for an asset variant.
- [videoAttributes](videoattributes-swift.property.md): The video rendition attributes for the variant.
- [AVAssetVariantVideoAttributes](videoattributes-swift.class.md): An object that defines the video attributes for an asset variant.
