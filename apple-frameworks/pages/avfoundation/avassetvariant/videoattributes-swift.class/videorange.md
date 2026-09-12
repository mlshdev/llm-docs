> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetvariant/videoattributes-swift.class/videorange](https://developer.apple.com/documentation/avfoundation/avassetvariant/videoattributes-swift.class/videorange)

# videoRange (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The video range of the variant.

## Declaration

```swift
var videoRange: AVVideoRange { get }
```

<a id="Discussion"></a>

## Discussion

The property defaults to [sdr](../../avvideorange/sdr.md).

## See Also

### Inspecting the attributes

- [codecTypes](codectypes.md): The video sample codec types present in the variant’s renditions.
- [nominalFrameRate](nominalframerate.md): The nominal frame rate of the variant’s renditions.
- [presentationSize](presentationsize.md): The presentation size of the variant’s renditions.
- [AVVideoRange](../../avvideorange.md): Constants that describe a video variant’s dynamic range.
- [videoLayoutAttributes](videolayoutattributes.md): Attributes that describe the layout of the video content.
- [AVAssetVariant.VideoAttributes.LayoutAttributes](layoutattributes.md): Attributes that describe the layout of video content.

# videoRange (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The video range of the variant.

## Declaration

```objectivec
@property (nonatomic, readonly) AVVideoRange videoRange;
```

<a id="Discussion"></a>

## Discussion

The property defaults to [AVVideoRangeSDR](../../avvideorange/sdr.md).

## See Also

### Inspecting the attributes

- [codecTypes](../../avassetvariantvideoattributes/codectypes.md): The video sample codec types present in the variant’s renditions.
- [nominalFrameRate](../../avassetvariantvideoattributes/nominalframerate.md): The nominal frame rate of the variant’s renditions.
- [presentationSize](presentationsize.md): The presentation size of the variant’s renditions.
- [AVVideoRange](../../avvideorange.md): Constants that describe a video variant’s dynamic range.
- [videoLayoutAttributes](videolayoutattributes.md): Attributes that describe the layout of the video content.
- [AVAssetVariantVideoLayoutAttributes](layoutattributes.md): Attributes that describe the layout of video content.
