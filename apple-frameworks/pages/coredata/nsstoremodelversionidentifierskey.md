> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsstoremodelversionidentifierskey](https://developer.apple.com/documentation/coredata/nsstoremodelversionidentifierskey)

# NSStoreModelVersionIdentifiersKey (Swift)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Key to represent the version identifiers for the model used to create the store.

## Declaration

```swift
let NSStoreModelVersionIdentifiersKey: String
```

<a id="Discussion"></a>

## Discussion

If you add your own annotations to a model’s version identifier (see [versionIdentifiers](nsmanagedobjectmodel/versionidentifiers.md)), they are stored in the persistent store’s metadata. You can use this key to retrieve the identifiers from the metadata dictionaries available from `NSPersistentStore` ([metadata](nspersistentstore/metadata.md)) and `NSPersistentStoreCoordinator` ([metadata(for:)](nspersistentstorecoordinator/metadata%28for_%29.md) and related methods). The corresponding value is a Foundation collection (an `NSArray` or `NSSet` object).

## See Also

### Constants

- [NSStoreModelVersionHashesKey](nsstoremodelversionhasheskey.md): Key to represent the version hash information for the model used to create the store.
- [NSPersistentStoreOSCompatibility](nspersistentstoreoscompatibility.md): Key to represent the earliest version of the operation system that the persistent store supports.

# NSStoreModelVersionIdentifiersKey (Objective-C)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Key to represent the version identifiers for the model used to create the store.

## Declaration

```objectivec
extern NSString * const NSStoreModelVersionIdentifiersKey;
```

<a id="Discussion"></a>

## Discussion

If you add your own annotations to a model’s version identifier (see [versionIdentifiers](nsmanagedobjectmodel/versionidentifiers.md)), they are stored in the persistent store’s metadata. You can use this key to retrieve the identifiers from the metadata dictionaries available from `NSPersistentStore` ([metadata](nspersistentstore/metadata.md)) and `NSPersistentStoreCoordinator` ([metadataForPersistentStore:](nspersistentstorecoordinator/metadata%28for_%29.md) and related methods). The corresponding value is a Foundation collection (an `NSArray` or `NSSet` object).

## See Also

### Constants

- [NSStoreModelVersionHashesKey](nsstoremodelversionhasheskey.md): Key to represent the version hash information for the model used to create the store.
- [NSPersistentStoreOSCompatibility](nspersistentstoreoscompatibility.md): Key to represent the earliest version of the operation system that the persistent store supports.
