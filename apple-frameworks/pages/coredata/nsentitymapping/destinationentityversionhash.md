> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsentitymapping/destinationentityversionhash](https://developer.apple.com/documentation/coredata/nsentitymapping/destinationentityversionhash)

# destinationEntityVersionHash (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The version hash for the destination entity for the entity mapping.

## Declaration

```swift
var destinationEntityVersionHash: Data? { get set }
```

<a id="Discussion"></a>

## Discussion

The version hash is calculated by Core Data based on the property values of the entity (see `NSEntityDescription`’s [versionHash](../nsentitydescription/versionhash.md) method). The `destinationEntityVersionHash` must equal the version hash of the destination entity represented by the mapping.

## See Also

### Related Documentation

- [sourceEntityVersionHash](sourceentityversionhash.md): The version hash of the source entity for the entity mapping.

### Managing Destination Information

- [destinationEntityName](destinationentityname.md): The destination entity name for the entity mapping.

# destinationEntityVersionHash (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The version hash for the destination entity for the entity mapping.

## Declaration

```objectivec
@property (copy, nullable) NSData * destinationEntityVersionHash;
```

<a id="Discussion"></a>

## Discussion

The version hash is calculated by Core Data based on the property values of the entity (see `NSEntityDescription`’s [versionHash](../nsentitydescription/versionhash.md) method). The `destinationEntityVersionHash` must equal the version hash of the destination entity represented by the mapping.

## See Also

### Related Documentation

- [sourceEntityVersionHash](sourceentityversionhash.md): The version hash of the source entity for the entity mapping.

### Managing Destination Information

- [destinationEntityName](destinationentityname.md): The destination entity name for the entity mapping.
