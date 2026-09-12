> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetvariant/audioattributes-swift.class/renditionspecificattributes/isimmersive](https://developer.apple.com/documentation/avfoundation/avassetvariant/audioattributes-swift.class/renditionspecificattributes/isimmersive)

# isImmersive (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A Boolean value that indicates whether this variant contains virtualized or otherwise preprocessed audio content suitable for various purposes.

## Declaration

```swift
var isImmersive: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If a variant audio redition is immersive it’s eligible for rendering to headphones or speakers.

## See Also

### Accessing attributes

- [channelCount](channelcount.md): The count of audio channels in the rendition.
- [isBinaural](isbinaural.md): A Boolean value that indicates the variant is best suited for delivery to headphones.
- [isDownmix](isdownmix.md): A Boolean value that indicates whether the variant is a downmix derivative of other media of greater channel count.

# immersive (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A Boolean value that indicates whether this variant contains virtualized or otherwise preprocessed audio content suitable for various purposes.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isImmersive) BOOL immersive;
```

<a id="Discussion"></a>

## Discussion

If a variant audio redition is immersive it’s eligible for rendering to headphones or speakers.

## See Also

### Accessing attributes

- [channelCount](../../../avassetvariantaudiorenditionspecificattributes/channelcount.md): The count of audio channels in the rendition.
- [binaural](isbinaural.md): A Boolean value that indicates the variant is best suited for delivery to headphones.
- [downmix](isdownmix.md): A Boolean value that indicates whether the variant is a downmix derivative of other media of greater channel count.
