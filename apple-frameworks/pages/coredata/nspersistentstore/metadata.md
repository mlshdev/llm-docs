> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstore/metadata](https://developer.apple.com/documentation/coredata/nspersistentstore/metadata)

# metadata (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The metadata for the persistent store.

## Declaration

```swift
var metadata: [String : Any]! { get set }
```

<a id="Discussion"></a>

## Discussion

The dictionary must include the store type ([NSStoreTypeKey](../nsstoretypekey.md)) and UUID ([NSStoreUUIDKey](../nsstoreuuidkey.md)).

<a id="Special-Considerations"></a>

### Special Considerations

Subclasses must override this property to provide storage and persistence for the store metadata.

## See Also

### Managing Store Metadata

- [metadataForPersistentStore(with:)](metadataforpersistentstore%28with_%29.md): Returns the metadata from the persistent store at the given URL.
- [setMetadata(\_:forPersistentStoreAt:)](setmetadata%28__forpersistentstoreat_%29.md): Sets the metadata for the store at a given URL.
- [loadMetadata()](loadmetadata%28%29.md): Instructs the persistent store to load its metadata.

# metadata (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The metadata for the persistent store.

## Declaration

```objectivec
@property (nonatomic, strong, null_resettable) NSDictionary<NSString *,id> * metadata;
```

<a id="Discussion"></a>

## Discussion

The dictionary must include the store type ([NSStoreTypeKey](../nsstoretypekey.md)) and UUID ([NSStoreUUIDKey](../nsstoreuuidkey.md)).

<a id="Special-Considerations"></a>

### Special Considerations

Subclasses must override this property to provide storage and persistence for the store metadata.

## See Also

### Managing Store Metadata

- [metadataForPersistentStoreWithURL:error:](metadataforpersistentstore%28with_%29.md): Returns the metadata from the persistent store at the given URL.
- [setMetadata:forPersistentStoreWithURL:error:](setmetadata%28__forpersistentstoreat_%29.md): Sets the metadata for the store at a given URL.
- [loadMetadata:](loadmetadata%28%29.md): Instructs the persistent store to load its metadata.
