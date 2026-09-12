> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetvariantqualifier/init(predicate:)](https://developer.apple.com/documentation/avfoundation/avassetvariantqualifier/init(predicate:))

# init(predicate:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a variant qualifier with a predicate.

## Declaration

```swift
convenience init(predicate: NSPredicate)
```

## Parameters

- `predicate`: A predicate to find a particular asset variant.

## See Also

### Creating a variant qualifier

- [init(variant:)](init%28variant_%29.md): Creates a variant qualifier with an asset variant.
- [AVAssetVariant](../avassetvariant.md): An object that represents a bit rate variant.

# assetVariantQualifierWithPredicate: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a variant qualifier with a predicate.

## Declaration

```objectivec
+ (instancetype) assetVariantQualifierWithPredicate:(NSPredicate *) predicate;
```

## Parameters

- `predicate`: A predicate to find a particular asset variant.

## See Also

### Creating a variant qualifier

- [assetVariantQualifierWithVariant:](init%28variant_%29.md): Creates a variant qualifier with an asset variant.
- [AVAssetVariant](../avassetvariant.md): An object that represents a bit rate variant.
- [assetVariantQualifierForMaximumValueInKeyPath:](assetvariantqualifierformaximumvalueinkeypath_.md): Returns a qualifer for finding variant with maximum value in the input key path
- [assetVariantQualifierForMinimumValueInKeyPath:](assetvariantqualifierforminimumvalueinkeypath_.md): Returns a qualifer for finding variant with minimum value in the input key path.
