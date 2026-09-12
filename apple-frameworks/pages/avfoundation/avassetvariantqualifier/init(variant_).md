> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetvariantqualifier/init(variant:)](https://developer.apple.com/documentation/avfoundation/avassetvariantqualifier/init(variant:))

# init(variant:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a variant qualifier with an asset variant.

## Declaration

```swift
convenience init(variant: AVAssetVariant)
```

## Parameters

- `variant`: The asset variant for the qualifier.

## See Also

### Creating a variant qualifier

- [AVAssetVariant](../avassetvariant.md): An object that represents a bit rate variant.
- [init(predicate:)](init%28predicate_%29.md): Creates a variant qualifier with a predicate.

# assetVariantQualifierWithVariant: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a variant qualifier with an asset variant.

## Declaration

```objectivec
+ (instancetype) assetVariantQualifierWithVariant:(AVAssetVariant *) variant;
```

## Parameters

- `variant`: The asset variant for the qualifier.

## See Also

### Creating a variant qualifier

- [AVAssetVariant](../avassetvariant.md): An object that represents a bit rate variant.
- [assetVariantQualifierWithPredicate:](init%28predicate_%29.md): Creates a variant qualifier with a predicate.
- [assetVariantQualifierForMaximumValueInKeyPath:](assetvariantqualifierformaximumvalueinkeypath_.md): Returns a qualifer for finding variant with maximum value in the input key path
- [assetVariantQualifierForMinimumValueInKeyPath:](assetvariantqualifierforminimumvalueinkeypath_.md): Returns a qualifer for finding variant with minimum value in the input key path.
