> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkmetadatakeysyncidentifier](https://developer.apple.com/documentation/healthkit/hkmetadatakeysyncidentifier)

# HKMetadataKeySyncIdentifier (Swift)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

A unique string that identifies a piece of data so it can be updated and synced.

## Declaration

```swift
let HKMetadataKeySyncIdentifier: String
```

<a id="Discussion"></a>

## Discussion

This key takes a string value. If you add this key to an object’s metadata, you must also add the [HKMetadataKeySyncVersion](hkmetadatakeysyncversion.md) key.

When you save an [HKObject](hkobject.md) with a sync identifier, the system looks for any existing objects with the same sync identifier. If it finds a match, the system compares the objects’ [HKMetadataKeySyncVersion](hkmetadatakeysyncversion.md) values. If the new object has a greater sync version, the system replaces the old object with the new one. If the old object is associated with a workout or part of a correlation, the system also replaces the old object in the workout or correlation.

## See Also

### Sync Keys

- [HKMetadataKeySyncVersion](hkmetadatakeysyncversion.md): The version number for a piece of data, used when updating or syncing.

# HKMetadataKeySyncIdentifier (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

A unique string that identifies a piece of data so it can be updated and synced.

## Declaration

```objectivec
extern NSString * const HKMetadataKeySyncIdentifier;
```

<a id="Discussion"></a>

## Discussion

This key takes a string value. If you add this key to an object’s metadata, you must also add the [HKMetadataKeySyncVersion](hkmetadatakeysyncversion.md) key.

When you save an [HKObject](hkobject.md) with a sync identifier, the system looks for any existing objects with the same sync identifier. If it finds a match, the system compares the objects’ [HKMetadataKeySyncVersion](hkmetadatakeysyncversion.md) values. If the new object has a greater sync version, the system replaces the old object with the new one. If the old object is associated with a workout or part of a correlation, the system also replaces the old object in the workout or correlation.

## See Also

### Sync Keys

- [HKMetadataKeySyncVersion](hkmetadatakeysyncversion.md): The version number for a piece of data, used when updating or syncing.
