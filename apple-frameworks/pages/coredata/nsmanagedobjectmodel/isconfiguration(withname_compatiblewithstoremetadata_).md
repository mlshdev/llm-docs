> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectmodel/isconfiguration(withname:compatiblewithstoremetadata:)](https://developer.apple.com/documentation/coredata/nsmanagedobjectmodel/isconfiguration(withname:compatiblewithstoremetadata:))

# isConfiguration(withName:compatibleWithStoreMetadata:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether a given configuration in the model is compatible with given metadata from a persistent store.

## Declaration

```swift
func isConfiguration(withName configuration: String?, compatibleWithStoreMetadata metadata: [String : Any]) -> Bool
```

## Parameters

- `configuration`: The name of a configuration in the receiver. Pass `nil` to specify no configuration.
- `metadata`: Metadata for a persistent store.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the configuration in the receiver specified by `configuration` is compatible with the store metadata given by `metadata`, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method compares the version information in the store metadata with the entity versions of a given configuration. For information on specific differences, use [entityVersionHashesByName](entityversionhashesbyname.md) and perform an entity-by-entity comparison.

## See Also

### Versioning and migrating entities

- [versionChecksum](versionchecksum.md): The Base64-encoded 128-bit model version hash.
- [versionIdentifiers](versionidentifiers.md): The set of developer-defined version identifiers for the object model.
- [entityVersionHashesByName](entityversionhashesbyname.md): The dictionary of the model’s entity names and their corresponding version hashes.

# isConfiguration:compatibleWithStoreMetadata: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether a given configuration in the model is compatible with given metadata from a persistent store.

## Declaration

```objectivec
- (BOOL) isConfiguration:(NSString *) configuration compatibleWithStoreMetadata:(NSDictionary<NSString *,id> *) metadata;
```

## Parameters

- `configuration`: The name of a configuration in the receiver. Pass `nil` to specify no configuration.
- `metadata`: Metadata for a persistent store.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the configuration in the receiver specified by `configuration` is compatible with the store metadata given by `metadata`, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method compares the version information in the store metadata with the entity versions of a given configuration. For information on specific differences, use [entityVersionHashesByName](entityversionhashesbyname.md) and perform an entity-by-entity comparison.

## See Also

### Versioning and migrating entities

- [versionChecksum](versionchecksum.md): The Base64-encoded 128-bit model version hash.
- [versionIdentifiers](versionidentifiers.md): The set of developer-defined version identifiers for the object model.
- [entityVersionHashesByName](entityversionhashesbyname.md): The dictionary of the model’s entity names and their corresponding version hashes.
