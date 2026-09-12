> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkmetadatakeyexternaluuid](https://developer.apple.com/documentation/healthkit/hkmetadatakeyexternaluuid)

# HKMetadataKeyExternalUUID (Swift)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A unique identifier for an HKObject that is set by its source.

## Declaration

```swift
let HKMetadataKeyExternalUUID: String
```

<a id="Discussion"></a>

## Discussion

This key takes a string value. This value is independent of the UUID assigned to the object by the HealthKit store. You can assign your own UUID to any HealthKit objects you create. Use these IDs to uniquely identify objects in your application. You typically use the UUID from the corresponding data entry on your server. This lets you create multiple copies of that data across multiple devices. Each copy shares the same external UUID.

## See Also

### General Keys

- [HKMetadataKeyTimeZone](hkmetadatakeytimezone.md): The user’s time zone when the HealthKit object was created.
- [HKMetadataKeyWasUserEntered](hkmetadatakeywasuserentered.md): A key that indicates whether the sample was entered by the user.
- [HKMetadataKeyQuantityClampedToLowerBound](hkmetadatakeyquantityclampedtolowerbound.md)
- [HKMetadataKeyQuantityClampedToUpperBound](hkmetadatakeyquantityclampedtoupperbound.md)

# HKMetadataKeyExternalUUID (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A unique identifier for an HKObject that is set by its source.

## Declaration

```objectivec
extern NSString * const HKMetadataKeyExternalUUID;
```

<a id="Discussion"></a>

## Discussion

This key takes a string value. This value is independent of the UUID assigned to the object by the HealthKit store. You can assign your own UUID to any HealthKit objects you create. Use these IDs to uniquely identify objects in your application. You typically use the UUID from the corresponding data entry on your server. This lets you create multiple copies of that data across multiple devices. Each copy shares the same external UUID.

## See Also

### General Keys

- [HKMetadataKeyTimeZone](hkmetadatakeytimezone.md): The user’s time zone when the HealthKit object was created.
- [HKMetadataKeyWasUserEntered](hkmetadatakeywasuserentered.md): A key that indicates whether the sample was entered by the user.
- [HKMetadataKeyQuantityClampedToLowerBound](hkmetadatakeyquantityclampedtolowerbound.md)
- [HKMetadataKeyQuantityClampedToUpperBound](hkmetadatakeyquantityclampedtoupperbound.md)
