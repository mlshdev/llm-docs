> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetvariant/audioattributes-swift.class/renditionspecificattributes(for:)](https://developer.apple.com/documentation/avfoundation/avassetvariant/audioattributes-swift.class/renditionspecificattributes(for:))

# renditionSpecificAttributes(for:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns specific attributes for the media option.

## Declaration

```swift
func renditionSpecificAttributes(for mediaSelectionOption: AVMediaSelectionOption) -> AVAssetVariant.AudioAttributes.RenditionSpecificAttributes?
```

## Parameters

- `mediaSelectionOption`: The media option for which to retrieve attributes.

<a id="return-value"></a>

## Return Value

Attributes for the rendition, or `nil` of none exist.

## See Also

### Inspecting audio attributes

- [formatIDs](formatids.md): The audio formats of the renditions present in the variant.
- [AVAssetVariant.AudioAttributes.RenditionSpecificAttributes](renditionspecificattributes.md): An object that represents attributes specific to a particular rendition.

# renditionSpecificAttributesForMediaOption: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns specific attributes for the media option.

## Declaration

```objectivec
- (AVAssetVariantAudioRenditionSpecificAttributes *) renditionSpecificAttributesForMediaOption:(AVMediaSelectionOption *) mediaSelectionOption;
```

## Parameters

- `mediaSelectionOption`: The media option for which to retrieve attributes.

<a id="return-value"></a>

## Return Value

Attributes for the rendition, or `nil` of none exist.

## See Also

### Inspecting audio attributes

- [formatIDs](../../avassetvariantaudioattributes/formatids.md): The audio formats of the renditions present in the variant.
- [AVAssetVariantAudioRenditionSpecificAttributes](renditionspecificattributes.md): An object that represents attributes specific to a particular rendition.
