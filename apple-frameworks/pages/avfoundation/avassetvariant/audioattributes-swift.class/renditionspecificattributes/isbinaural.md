> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetvariant/audioattributes-swift.class/renditionspecificattributes/isbinaural](https://developer.apple.com/documentation/avfoundation/avassetvariant/audioattributes-swift.class/renditionspecificattributes/isbinaural)

# isBinaural (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A Boolean value that indicates the variant is best suited for delivery to headphones.

## Declaration

```swift
var isBinaural: Bool { get }
```

<a id="Discussion"></a>

## Discussion

A binaural variant may originate from a direct binaural recording or from the processing of a multichannel audio source.

## See Also

### Accessing attributes

- [channelCount](channelcount.md): The count of audio channels in the rendition.
- [isImmersive](isimmersive.md): A Boolean value that indicates whether this variant contains virtualized or otherwise preprocessed audio content suitable for various purposes.
- [isDownmix](isdownmix.md): A Boolean value that indicates whether the variant is a downmix derivative of other media of greater channel count.

# binaural (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A Boolean value that indicates the variant is best suited for delivery to headphones.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isBinaural) BOOL binaural;
```

<a id="Discussion"></a>

## Discussion

A binaural variant may originate from a direct binaural recording or from the processing of a multichannel audio source.

## See Also

### Accessing attributes

- [channelCount](../../../avassetvariantaudiorenditionspecificattributes/channelcount.md): The count of audio channels in the rendition.
- [immersive](isimmersive.md): A Boolean value that indicates whether this variant contains virtualized or otherwise preprocessed audio content suitable for various purposes.
- [downmix](isdownmix.md): A Boolean value that indicates whether the variant is a downmix derivative of other media of greater channel count.
