> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkdeletedobject/metadata](https://developer.apple.com/documentation/healthkit/hkdeletedobject/metadata)

# metadata (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

The metadata associated with the deleted object.

## Declaration

```swift
var metadata: [String : Any]? { get }
```

<a id="Discussion"></a>

## Discussion

The system only copies the [HKMetadataKeySyncIdentifier](../hkmetadatakeysyncidentifier.md) and [HKMetadataKeySyncVersion](../hkmetadatakeysyncversion.md) keys from the original object. All other metadata is lost.

For more information about the metadata’s format and content, see the [HKObject](../hkobject.md) class’s  [metadata](../hkobject/metadata.md) property.

## See Also

### Identifying Deleted Objects

- [uuid](uuid.md): The universally unique identifier (UUID) for the HealthKit object that was deleted from the store.

# metadata (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

The metadata associated with the deleted object.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSDictionary<NSString *,id> * metadata;
```

<a id="Discussion"></a>

## Discussion

The system only copies the [HKMetadataKeySyncIdentifier](../hkmetadatakeysyncidentifier.md) and [HKMetadataKeySyncVersion](../hkmetadatakeysyncversion.md) keys from the original object. All other metadata is lost.

For more information about the metadata’s format and content, see the [HKObject](../hkobject.md) class’s  [metadata](../hkobject/metadata.md) property.

## See Also

### Identifying Deleted Objects

- [UUID](uuid.md): The universally unique identifier (UUID) for the HealthKit object that was deleted from the store.
