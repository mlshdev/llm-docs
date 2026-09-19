> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkobjecttype/quantitytype(foridentifier:)

# quantityType(forIdentifier:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 27.2) · iPadOS 8.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.2) · macOS 13.0+ · visionOS 1.0+ (deprecated in 27.2) · watchOS 2.0+ (deprecated in 27.2)

Returns the shared quantity type for the provided identifier.

## Declaration

```swift
class func quantityType(forIdentifier identifier: HKQuantityTypeIdentifier) -> HKQuantityType?
```

## Parameters

- `identifier`: A quantity type identifier. For a list of valid identifiers, see [HKQuantityTypeIdentifier](../hkquantitytypeidentifier.md).

<a id="return-value"></a>

## Return Value

The shared `HKQuantityType` instance based on the provided identifier.

## Mentioned In

- [Saving data to HealthKit](../saving-data-to-healthkit.md)

<a id="Discussion"></a>

## Discussion

This method returns an instance of the [HKQuantityType](../hkquantitytype.md) concrete subclass. HealthKit uses quantity types to create samples that store a numerical value. Use quantity type instances to create quantity samples that you can save in the HealthKit store. For more information, see [HKQuantitySample](../hkquantitysample.md).

## See Also

### Creating quantity types

- [HKQuantityTypeIdentifier](../hkquantitytypeidentifier.md): The identifiers that create quantity type objects.

# quantityTypeForIdentifier: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the shared quantity type for the provided identifier.

## Declaration

```objectivec
+ (HKQuantityType *) quantityTypeForIdentifier:(HKQuantityTypeIdentifier) identifier;
```

## Parameters

- `identifier`: A quantity type identifier. For a list of valid identifiers, see [HKQuantityTypeIdentifier](../hkquantitytypeidentifier.md).

<a id="return-value"></a>

## Return Value

The shared `HKQuantityType` instance based on the provided identifier.

## Mentioned In

- [Saving data to HealthKit](../saving-data-to-healthkit.md)

<a id="Discussion"></a>

## Discussion

This method returns an instance of the [HKQuantityType](../hkquantitytype.md) concrete subclass. HealthKit uses quantity types to create samples that store a numerical value. Use quantity type instances to create quantity samples that you can save in the HealthKit store. For more information, see [HKQuantitySample](../hkquantitysample.md).

## See Also

### Creating quantity types

- [HKQuantityTypeIdentifier](../hkquantitytypeidentifier.md): The identifiers that create quantity type objects.
