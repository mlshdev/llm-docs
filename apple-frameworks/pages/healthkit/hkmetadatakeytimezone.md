> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkmetadatakeytimezone

# HKMetadataKeyTimeZone (Swift)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The user’s time zone when the HealthKit object was created.

## Declaration

```swift
let HKMetadataKeyTimeZone: String
```

<a id="Discussion"></a>

## Discussion

This key takes a string value compatible with the [NSTimeZone](../foundation/nstimezone.md) class’s [timeZoneWithName:](../foundation/nstimezone/timezonewithname_.md) method. For best results when analyzing sleep samples, it’s recommended that you store time zone metadata with your sleep sample data.

## See Also

### General Keys

- [HKMetadataKeyExternalUUID](hkmetadatakeyexternaluuid.md): A unique identifier for an HKObject that is set by its source.
- [HKMetadataKeyWasUserEntered](hkmetadatakeywasuserentered.md): A key that indicates whether the sample was entered by the user.
- [HKMetadataKeyQuantityClampedToLowerBound](hkmetadatakeyquantityclampedtolowerbound.md)
- [HKMetadataKeyQuantityClampedToUpperBound](hkmetadatakeyquantityclampedtoupperbound.md)

# HKMetadataKeyTimeZone (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The user’s time zone when the HealthKit object was created.

## Declaration

```objectivec
extern NSString * const HKMetadataKeyTimeZone;
```

<a id="Discussion"></a>

## Discussion

This key takes a string value compatible with the [NSTimeZone](../foundation/nstimezone.md) class’s [timeZoneWithName:](../foundation/nstimezone/timezonewithname_.md) method. For best results when analyzing sleep samples, it’s recommended that you store time zone metadata with your sleep sample data.

## See Also

### General Keys

- [HKMetadataKeyExternalUUID](hkmetadatakeyexternaluuid.md): A unique identifier for an HKObject that is set by its source.
- [HKMetadataKeyWasUserEntered](hkmetadatakeywasuserentered.md): A key that indicates whether the sample was entered by the user.
- [HKMetadataKeyQuantityClampedToLowerBound](hkmetadatakeyquantityclampedtolowerbound.md)
- [HKMetadataKeyQuantityClampedToUpperBound](hkmetadatakeyquantityclampedtoupperbound.md)
