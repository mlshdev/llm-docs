> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkmetadatakeysyncversion](https://developer.apple.com/documentation/healthkit/hkmetadatakeysyncversion)

# HKMetadataKeySyncVersion (Swift)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

The version number for a piece of data, used when updating or syncing.

## Declaration

```swift
let HKMetadataKeySyncVersion: String
```

<a id="Discussion"></a>

## Discussion

This key takes an [NSNumber](../foundation/nsnumber.md) as its value. When you save an object to the HealthKit store, the new object replaces any matching objects (existing objects with a matching [HKMetadataKeySyncIdentifier](hkmetadatakeysyncidentifier.md) value) with a lower sync version.

For more information, see [HKMetadataKeySyncIdentifier](hkmetadatakeysyncidentifier.md).

## See Also

### Sync Keys

- [HKMetadataKeySyncIdentifier](hkmetadatakeysyncidentifier.md): A unique string that identifies a piece of data so it can be updated and synced.

# HKMetadataKeySyncVersion (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

The version number for a piece of data, used when updating or syncing.

## Declaration

```objectivec
extern NSString * const HKMetadataKeySyncVersion;
```

<a id="Discussion"></a>

## Discussion

This key takes an [NSNumber](../foundation/nsnumber.md) as its value. When you save an object to the HealthKit store, the new object replaces any matching objects (existing objects with a matching [HKMetadataKeySyncIdentifier](hkmetadatakeysyncidentifier.md) value) with a lower sync version.

For more information, see [HKMetadataKeySyncIdentifier](hkmetadatakeysyncidentifier.md).

## See Also

### Sync Keys

- [HKMetadataKeySyncIdentifier](hkmetadatakeysyncidentifier.md): A unique string that identifies a piece of data so it can be updated and synced.
