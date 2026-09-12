> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetvariantaudiorenditionspecificattributes/channelcount](https://developer.apple.com/documentation/avfoundation/avassetvariantaudiorenditionspecificattributes/channelcount)

# channelCount

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The count of audio channels in the rendition.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger channelCount;
```

## See Also

### Accessing attributes

- [binaural](../avassetvariant/audioattributes-swift.class/renditionspecificattributes/isbinaural.md): A Boolean value that indicates the variant is best suited for delivery to headphones.
- [immersive](../avassetvariant/audioattributes-swift.class/renditionspecificattributes/isimmersive.md): A Boolean value that indicates whether this variant contains virtualized or otherwise preprocessed audio content suitable for various purposes.
- [downmix](../avassetvariant/audioattributes-swift.class/renditionspecificattributes/isdownmix.md): A Boolean value that indicates whether the variant is a downmix derivative of other media of greater channel count.
