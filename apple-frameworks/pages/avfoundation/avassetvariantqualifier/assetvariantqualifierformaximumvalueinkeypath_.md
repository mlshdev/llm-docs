> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetvariantqualifier/assetvariantqualifierformaximumvalueinkeypath:](https://developer.apple.com/documentation/avfoundation/avassetvariantqualifier/assetvariantqualifierformaximumvalueinkeypath:)

# assetVariantQualifierForMaximumValueInKeyPath:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method

Returns a qualifer for finding variant with maximum value in the input key path

## Declaration

```objectivec
+ (instancetype) assetVariantQualifierForMaximumValueInKeyPath:(NSString *) keyPath;
```

## Parameters

- `keyPath`: AVAssetVariant keyPath. Allowed keyPath values are peakBitRate, averageBitRate, videoAttributes.presentationSize. Must be a valid, non-nil NSString.

## See Also

### Creating a variant qualifier

- [assetVariantQualifierWithVariant:](init%28variant_%29.md): Creates a variant qualifier with an asset variant.
- [AVAssetVariant](../avassetvariant.md): An object that represents a bit rate variant.
- [assetVariantQualifierWithPredicate:](init%28predicate_%29.md): Creates a variant qualifier with a predicate.
- [assetVariantQualifierForMinimumValueInKeyPath:](assetvariantqualifierforminimumvalueinkeypath_.md): Returns a qualifer for finding variant with minimum value in the input key path.
