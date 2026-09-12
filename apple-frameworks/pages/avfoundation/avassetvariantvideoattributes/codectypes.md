> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetvariantvideoattributes/codectypes](https://developer.apple.com/documentation/avfoundation/avassetvariantvideoattributes/codectypes)

# codecTypes

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The video sample codec types present in the variant’s renditions.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSNumber *> * codecTypes;
```

## See Also

### Inspecting the attributes

- [nominalFrameRate](nominalframerate.md): The nominal frame rate of the variant’s renditions.
- [presentationSize](../avassetvariant/videoattributes-swift.class/presentationsize.md): The presentation size of the variant’s renditions.
- [videoRange](../avassetvariant/videoattributes-swift.class/videorange.md): The video range of the variant.
- [AVVideoRange](../avvideorange.md): Constants that describe a video variant’s dynamic range.
- [videoLayoutAttributes](../avassetvariant/videoattributes-swift.class/videolayoutattributes.md): Attributes that describe the layout of the video content.
- [AVAssetVariantVideoLayoutAttributes](../avassetvariant/videoattributes-swift.class/layoutattributes.md): Attributes that describe the layout of video content.
