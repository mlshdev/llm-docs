> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetvariant/videoattributes-swift.class/videolayoutattributes](https://developer.apple.com/documentation/avfoundation/avassetvariant/videoattributes-swift.class/videolayoutattributes)

# videoLayoutAttributes (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Attributes that describe the layout of the video content.

## Declaration

```swift
var videoLayoutAttributes: [AVAssetVariant.VideoAttributes.LayoutAttributes] { get }
```

<a id="Discussion"></a>

## Discussion

This property may contain more that one element if the variant contains a collection of differing video layout media attributes over time.

## See Also

### Inspecting the attributes

- [codecTypes](codectypes.md): The video sample codec types present in the variant’s renditions.
- [nominalFrameRate](nominalframerate.md): The nominal frame rate of the variant’s renditions.
- [presentationSize](presentationsize.md): The presentation size of the variant’s renditions.
- [videoRange](videorange.md): The video range of the variant.
- [AVVideoRange](../../avvideorange.md): Constants that describe a video variant’s dynamic range.
- [AVAssetVariant.VideoAttributes.LayoutAttributes](layoutattributes.md): Attributes that describe the layout of video content.

# videoLayoutAttributes (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Attributes that describe the layout of the video content.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVAssetVariantVideoLayoutAttributes *> * videoLayoutAttributes;
```

<a id="Discussion"></a>

## Discussion

This property may contain more that one element if the variant contains a collection of differing video layout media attributes over time.

## See Also

### Inspecting the attributes

- [codecTypes](../../avassetvariantvideoattributes/codectypes.md): The video sample codec types present in the variant’s renditions.
- [nominalFrameRate](../../avassetvariantvideoattributes/nominalframerate.md): The nominal frame rate of the variant’s renditions.
- [presentationSize](presentationsize.md): The presentation size of the variant’s renditions.
- [videoRange](videorange.md): The video range of the variant.
- [AVVideoRange](../../avvideorange.md): Constants that describe a video variant’s dynamic range.
- [AVAssetVariantVideoLayoutAttributes](layoutattributes.md): Attributes that describe the layout of video content.
