> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetvariantaudioattributes/formatids](https://developer.apple.com/documentation/avfoundation/avassetvariantaudioattributes/formatids)

# formatIDs

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The audio formats of the renditions present in the variant.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSNumber *> * formatIDs;
```

## See Also

### Inspecting audio attributes

- [renditionSpecificAttributesForMediaOption:](../avassetvariant/audioattributes-swift.class/renditionspecificattributes%28for_%29.md): Returns specific attributes for the media option.
- [AVAssetVariantAudioRenditionSpecificAttributes](../avassetvariant/audioattributes-swift.class/renditionspecificattributes.md): An object that represents attributes specific to a particular rendition.
