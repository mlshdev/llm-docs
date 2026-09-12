> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetdownloadcontentconfiguration/mediaselections](https://developer.apple.com/documentation/avfoundation/avassetdownloadcontentconfiguration/mediaselections)

# mediaSelections (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 10.0+

The media selections of an asset that a task downloads.

## Declaration

```swift
var mediaSelections: [AVMediaSelection] { get set }
```

<a id="Discussion"></a>

## Discussion

If your configuration doesn’t indicate a media selection, the system uses the asset’s automatic media selection.

## See Also

### Accessing configuration details

- [variantQualifiers](variantqualifiers.md): The variant qualifiers for this configuration.
- [AVAssetVariantQualifier](../avassetvariantqualifier.md): An object that represents an HTTP Live Streaming asset variant.

# mediaSelections (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 10.0+

The media selections of an asset that a task downloads.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<AVMediaSelection *> * mediaSelections;
```

<a id="Discussion"></a>

## Discussion

If your configuration doesn’t indicate a media selection, the system uses the asset’s automatic media selection.

## See Also

### Accessing configuration details

- [variantQualifiers](variantqualifiers.md): The variant qualifiers for this configuration.
- [AVAssetVariantQualifier](../avassetvariantqualifier.md): An object that represents an HTTP Live Streaming asset variant.
