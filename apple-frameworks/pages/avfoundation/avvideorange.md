> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideorange](https://developer.apple.com/documentation/avfoundation/avvideorange)

# AVVideoRange (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that describe a video variant’s dynamic range.

## Declaration

```swift
struct AVVideoRange
```

## Topics

### Video ranges

- [pq](avvideorange/pq.md): Indicates Perceptual Quantizer (PQ) high-dynamic-range video.
- [hlg](avvideorange/hlg.md): Indicates Hybrid-Log Gamma (HLG) high-dynamic-range video.
- [sdr](avvideorange/sdr.md): Indicates standard-dynamic-range (SDR) video.

### Initializers

- [init(rawValue:)](avvideorange/init%28rawvalue_%29.md): Creates a video range with a string.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting the attributes

- [codecTypes](avassetvariant/videoattributes-swift.class/codectypes.md): The video sample codec types present in the variant’s renditions.
- [nominalFrameRate](avassetvariant/videoattributes-swift.class/nominalframerate.md): The nominal frame rate of the variant’s renditions.
- [presentationSize](avassetvariant/videoattributes-swift.class/presentationsize.md): The presentation size of the variant’s renditions.
- [videoRange](avassetvariant/videoattributes-swift.class/videorange.md): The video range of the variant.
- [videoLayoutAttributes](avassetvariant/videoattributes-swift.class/videolayoutattributes.md): Attributes that describe the layout of the video content.
- [AVAssetVariant.VideoAttributes.LayoutAttributes](avassetvariant/videoattributes-swift.class/layoutattributes.md): Attributes that describe the layout of video content.

# AVVideoRange (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that describe a video variant’s dynamic range.

## Declaration

```objectivec
typedef NSString * AVVideoRange;
```

## Topics

### Video ranges

- [AVVideoRangePQ](avvideorange/pq.md): Indicates Perceptual Quantizer (PQ) high-dynamic-range video.
- [AVVideoRangeHLG](avvideorange/hlg.md): Indicates Hybrid-Log Gamma (HLG) high-dynamic-range video.
- [AVVideoRangeSDR](avvideorange/sdr.md): Indicates standard-dynamic-range (SDR) video.

## See Also

### Inspecting the attributes

- [codecTypes](avassetvariantvideoattributes/codectypes.md): The video sample codec types present in the variant’s renditions.
- [nominalFrameRate](avassetvariantvideoattributes/nominalframerate.md): The nominal frame rate of the variant’s renditions.
- [presentationSize](avassetvariant/videoattributes-swift.class/presentationsize.md): The presentation size of the variant’s renditions.
- [videoRange](avassetvariant/videoattributes-swift.class/videorange.md): The video range of the variant.
- [videoLayoutAttributes](avassetvariant/videoattributes-swift.class/videolayoutattributes.md): Attributes that describe the layout of the video content.
- [AVAssetVariantVideoLayoutAttributes](avassetvariant/videoattributes-swift.class/layoutattributes.md): Attributes that describe the layout of video content.
