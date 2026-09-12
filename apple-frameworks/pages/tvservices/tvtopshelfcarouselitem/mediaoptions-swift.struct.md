> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvtopshelfcarouselitem/mediaoptions-swift.struct](https://developer.apple.com/documentation/tvservices/tvtopshelfcarouselitem/mediaoptions-swift.struct)

# TVTopShelfCarouselItem.MediaOptions (Swift)

**Framework:** TV Services  
**Kind:** Structure  
**Availability:** tvOS 13.0+

Constants indicating the item’s audio and video capabilities.

## Declaration

```swift
struct MediaOptions
```

## Topics

### Media Options

- [videoResolutionHD](mediaoptions-swift.struct/videoresolutionhd.md): High-definition video resolution.
- [videoResolution4K](mediaoptions-swift.struct/videoresolution4k.md): Ultra-high-definition 4K video resolution.
- [videoColorSpaceHDR](mediaoptions-swift.struct/videocolorspacehdr.md): High-dynamic-range video.
- [videoColorSpaceDolbyVision](mediaoptions-swift.struct/videocolorspacedolbyvision.md): Dolby Vision video.
- [audioDolbyAtmos](mediaoptions-swift.struct/audiodolbyatmos.md): Audio content with Dolby Atmos.
- [audioTranscriptionClosedCaptioning](mediaoptions-swift.struct/audiotranscriptionclosedcaptioning.md): Audio content with closed captioning.
- [audioTranscriptionSDH](mediaoptions-swift.struct/audiotranscriptionsdh.md): Audio content with subtitles for people who are deaf or hard of hearing.
- [audioDescription](mediaoptions-swift.struct/audiodescription.md): Audio content with audio descriptions.

### Initializers

- [init(rawValue:)](mediaoptions-swift.struct/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Adding Media Badges

- [mediaOptions](mediaoptions-swift.property.md): Information about the media format and presentation options.

# TVTopShelfCarouselItemMediaOptions (Objective-C)

**Framework:** TV Services  
**Kind:** Enumeration  
**Availability:** tvOS 13.0+

Constants indicating the item’s audio and video capabilities.

## Declaration

```objectivec
enum TVTopShelfCarouselItemMediaOptions : NSUInteger;
```

## Topics

### Media Options

- [TVTopShelfCarouselItemVideoResolutionHD](mediaoptions-swift.struct/videoresolutionhd.md): High-definition video resolution.
- [TVTopShelfCarouselItemVideoResolution4K](mediaoptions-swift.struct/videoresolution4k.md): Ultra-high-definition 4K video resolution.
- [TVTopShelfCarouselItemVideoColorSpaceHDR](mediaoptions-swift.struct/videocolorspacehdr.md): High-dynamic-range video.
- [TVTopShelfCarouselItemVideoColorSpaceDolbyVision](mediaoptions-swift.struct/videocolorspacedolbyvision.md): Dolby Vision video.
- [TVTopShelfCarouselItemAudioDolbyAtmos](mediaoptions-swift.struct/audiodolbyatmos.md): Audio content with Dolby Atmos.
- [TVTopShelfCarouselItemAudioTranscriptionClosedCaptioning](mediaoptions-swift.struct/audiotranscriptionclosedcaptioning.md): Audio content with closed captioning.
- [TVTopShelfCarouselItemAudioTranscriptionSDH](mediaoptions-swift.struct/audiotranscriptionsdh.md): Audio content with subtitles for people who are deaf or hard of hearing.
- [TVTopShelfCarouselItemAudioDescription](mediaoptions-swift.struct/audiodescription.md): Audio content with audio descriptions.

## See Also

### Adding Media Badges

- [mediaOptions](mediaoptions-swift.property.md): Information about the media format and presentation options.
