> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkmetadatakeyfoodtype](https://developer.apple.com/documentation/healthkit/hkmetadatakeyfoodtype)

# HKMetadataKeyFoodType (Swift)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The type of food that the HealthKit object represents.

## Declaration

```swift
let HKMetadataKeyFoodType: String
```

<a id="Discussion"></a>

## Discussion

This key takes a string value. Food objects are usually [food](hkcorrelationtypeidentifier/food.md) samples containing any number of `Nutrition Identifiers` samples.

## See Also

### Essentials

- [food](hkcorrelationtypeidentifier/food.md): Food correlation types combine any number of nutritional samples into a single food object.

# HKMetadataKeyFoodType (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The type of food that the HealthKit object represents.

## Declaration

```objectivec
extern NSString * const HKMetadataKeyFoodType;
```

<a id="Discussion"></a>

## Discussion

This key takes a string value. Food objects are usually [HKCorrelationTypeIdentifierFood](hkcorrelationtypeidentifier/food.md) samples containing any number of `Nutrition Identifiers` samples.

## See Also

### Essentials

- [HKCorrelationTypeIdentifierFood](hkcorrelationtypeidentifier/food.md): Food correlation types combine any number of nutritional samples into a single food object.
