> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avassetvariant/audioattributes-swift.class/renditionspecificattributes/channelcount

# channelCount

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The count of audio channels in the rendition.

## Declaration

```swift
@nonobjc var channelCount: Int? { get }
```

## See Also

### Accessing attributes

- [isBinaural](isbinaural.md): A Boolean value that indicates the variant is best suited for delivery to headphones.
- [isImmersive](isimmersive.md): A Boolean value that indicates whether this variant contains virtualized or otherwise preprocessed audio content suitable for various purposes.
- [isDownmix](isdownmix.md): A Boolean value that indicates whether the variant is a downmix derivative of other media of greater channel count.
