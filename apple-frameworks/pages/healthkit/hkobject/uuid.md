> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkobject/uuid](https://developer.apple.com/documentation/healthkit/hkobject/uuid)

# uuid (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The universally unique identifier (UUID) for this HealthKit object.

## Declaration

```swift
var uuid: UUID { get }
```

<a id="Discussion"></a>

## Discussion

HealthKit assigns a UUID to the object when you create it. If you want to add your own unique ID, add it to the object’s metadata using the [HKMetadataKeyExternalUUID](../hkmetadatakeyexternaluuid.md) key.

## See Also

### Accessing Properties

- [metadata](metadata.md): The metadata for this HealthKit object.
- [device](device.md): The device that generated the data for this object.
- [sourceRevision](sourcerevision.md): The app or device that created this object.
- [source](source.md): Deprecated. A HealthKit source, representing the app or device that created this object.

# UUID (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The universally unique identifier (UUID) for this HealthKit object.

## Declaration

```objectivec
@property (strong, readonly) NSUUID * UUID;
```

<a id="Discussion"></a>

## Discussion

HealthKit assigns a UUID to the object when you create it. If you want to add your own unique ID, add it to the object’s metadata using the [HKMetadataKeyExternalUUID](../hkmetadatakeyexternaluuid.md) key.

## See Also

### Accessing Properties

- [metadata](metadata.md): The metadata for this HealthKit object.
- [device](device.md): The device that generated the data for this object.
- [sourceRevision](sourcerevision.md): The app or device that created this object.
- [source](source.md): Deprecated. A HealthKit source, representing the app or device that created this object.
