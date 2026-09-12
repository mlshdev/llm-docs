> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorecoordinator/metadataforpersistentstore(with:)](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/metadataforpersistentstore(with:))

# metadataForPersistentStore(with:) (Swift)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ (deprecated in 13.1)

Returns a dictionary that contains the metadata stored in the persistent store at the specified location.

> Use [metadataForPersistentStore(ofType:at:)](metadataforpersistentstore%28oftype_at_%29.md) instead.

## Declaration

```swift
class func metadataForPersistentStore(with url: URL) throws -> [AnyHashable : Any]
```

## Parameters

- `url`: An URL object that specifies the location of a persistent store.

<a id="return-value"></a>

## Return Value

A dictionary containing the metadata for the persistent store at `url`. If no store is found, or there is a problem accessing its contents, returns `nil`. The keys guaranteed to be in this dictionary are `NSStoreTypeKey` and `NSStoreUUIDKey`.

<a id="Discussion"></a>

## Discussion

This method allows you to access the metadata in a persistent store without initializing a Core Data stack.

## See Also

### Related Documentation

- [setMetadata(\_:for:)](setmetadata%28__for_%29.md): Updates the metadata for the specified persistent store.
- [metadata(for:)](metadata%28for_%29.md): Returns the metadata of the specified persistent store.

### Deprecated type methods

- [elementsDerived(fromExternalRecordAt:)](elementsderived%28fromexternalrecordat_%29.md): Deprecated. Returns a dictionary containing the parsed elements derived from the Spotlight external record file that is specified by the given URL.
- [metadataForPersistentStore(ofType:at:)](metadataforpersistentstore%28oftype_at_%29.md): Deprecated. Returns a dictionary containing the metadata stored in the persistent store at a given URL.
- [metadataForPersistentStore(ofType:at:options:)](metadataforpersistentstore%28oftype_at_options_%29.md): Deprecated. Returns the metadata of a specific type of persistent store at the provided location.
- [registerStoreClass(\_:forStoreType:)](registerstoreclass%28__forstoretype_%29.md): Deprecated. Registers a persistent store subclass using the specified store type identifier.
- [removeUbiquitousContentAndPersistentStore(at:options:)](removeubiquitouscontentandpersistentstore%28at_options_%29.md): Deprecated. Deletes all ubiquitous content for all peers for the persistent store at a given URL and also delete the local store file.
- [setMetadata(\_:forPersistentStoreOfType:at:)](setmetadata%28__forpersistentstoreoftype_at_%29.md): Deprecated. Sets the metadata for a given store.
- [setMetadata(\_:forPersistentStoreOfType:at:options:)](setmetadata%28__forpersistentstoreoftype_at_options_%29.md): Deprecated. Updates the metadata of a specific type of persistent store at the provided location.

# metadataForPersistentStoreWithURL:error: (Objective-C)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.5)

Returns a dictionary that contains the metadata stored in the persistent store at the specified location.

> Use [metadataForPersistentStoreOfType:URL:error:](metadataforpersistentstore%28oftype_at_%29.md) instead.

## Declaration

```objectivec
+ (NSDictionary *) metadataForPersistentStoreWithURL:(NSURL *) url error:(NSError **) error;
```

## Parameters

- `url`: An URL object that specifies the location of a persistent store.
- `error`: If no store is found at `url` or if there is a problem accessing its contents, upon return contains an instance of `NSError` that describes the problem.

<a id="return-value"></a>

## Return Value

A dictionary containing the metadata for the persistent store at `url`. If no store is found, or there is a problem accessing its contents, returns `nil`. The keys guaranteed to be in this dictionary are `NSStoreTypeKey` and `NSStoreUUIDKey`.

<a id="Discussion"></a>

## Discussion

This method allows you to access the metadata in a persistent store without initializing a Core Data stack.

## See Also

### Related Documentation

- [setMetadata:forPersistentStore:](setmetadata%28__for_%29.md): Updates the metadata for the specified persistent store.
- [metadataForPersistentStore:](metadata%28for_%29.md): Returns the metadata of the specified persistent store.

### Deprecated type methods

- [elementsDerivedFromExternalRecordURL:](elementsderived%28fromexternalrecordat_%29.md): Deprecated. Returns a dictionary containing the parsed elements derived from the Spotlight external record file that is specified by the given URL.
- [metadataForPersistentStoreOfType:URL:error:](metadataforpersistentstore%28oftype_at_%29.md): Deprecated. Returns a dictionary containing the metadata stored in the persistent store at a given URL.
- [metadataForPersistentStoreOfType:URL:options:error:](metadataforpersistentstore%28oftype_at_options_%29.md): Deprecated. Returns the metadata of a specific type of persistent store at the provided location.
- [registerStoreClass:forStoreType:](registerstoreclass%28__forstoretype_%29.md): Deprecated. Registers a persistent store subclass using the specified store type identifier.
- [removeUbiquitousContentAndPersistentStoreAtURL:options:error:](removeubiquitouscontentandpersistentstore%28at_options_%29.md): Deprecated. Deletes all ubiquitous content for all peers for the persistent store at a given URL and also delete the local store file.
- [setMetadata:forPersistentStoreOfType:URL:error:](setmetadata%28__forpersistentstoreoftype_at_%29.md): Deprecated. Sets the metadata for a given store.
- [setMetadata:forPersistentStoreOfType:URL:options:error:](setmetadata%28__forpersistentstoreoftype_at_options_%29.md): Deprecated. Updates the metadata of a specific type of persistent store at the provided location.
