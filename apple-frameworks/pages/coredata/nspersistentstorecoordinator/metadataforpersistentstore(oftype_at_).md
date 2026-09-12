> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorecoordinator/metadataforpersistentstore(oftype:at:)](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/metadataforpersistentstore(oftype:at:))

# metadataForPersistentStore(ofType:at:) (Swift)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 3.0+ (deprecated in 9.0) · iPadOS 3.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.5+ (deprecated in 10.11) · tvOS  (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Returns a dictionary containing the metadata stored in the persistent store at a given URL.

> Use -metadataForPersistentStoreOfType:URL:options:error: and pass in an options dictionary matching addPersistentStoreWithType

## Declaration

```swift
class func metadataForPersistentStore(ofType storeType: String?, at url: URL) throws -> [String : Any]
```

## Parameters

- `storeType`: The type of the store at `url`. If this value is `nil`, Core Data determines which store class should be used to get or set the store file’s metadata by inspecting the file contents.
- `url`: The location of a persistent store.

<a id="return-value"></a>

## Return Value

A dictionary containing the metadata stored in the persistent store at `url`, or `nil` if the store cannot be opened or if there is a problem accessing its contents.

<a id="discussion"></a>

## Discussion

The keys guaranteed to be in this dictionary are [NSStoreTypeKey](../nsstoretypekey.md) and [NSStoreUUIDKey](../nsstoreuuidkey.md).

<a id="Discussion"></a>

## Discussion

You can use this method to retrieve the metadata from a store without the overhead of creating a Core Data stack.

## See Also

### Related Documentation

- [setMetadata(\_:for:)](setmetadata%28__for_%29.md): Updates the metadata for the specified persistent store.
- [metadata(for:)](metadata%28for_%29.md): Returns the metadata of the specified persistent store.

### Deprecated type methods

- [elementsDerived(fromExternalRecordAt:)](elementsderived%28fromexternalrecordat_%29.md): Deprecated. Returns a dictionary containing the parsed elements derived from the Spotlight external record file that is specified by the given URL.
- [metadataForPersistentStore(with:)](metadataforpersistentstore%28with_%29.md): Deprecated. Returns a dictionary that contains the metadata stored in the persistent store at the specified location.
- [metadataForPersistentStore(ofType:at:options:)](metadataforpersistentstore%28oftype_at_options_%29.md): Deprecated. Returns the metadata of a specific type of persistent store at the provided location.
- [registerStoreClass(\_:forStoreType:)](registerstoreclass%28__forstoretype_%29.md): Deprecated. Registers a persistent store subclass using the specified store type identifier.
- [removeUbiquitousContentAndPersistentStore(at:options:)](removeubiquitouscontentandpersistentstore%28at_options_%29.md): Deprecated. Deletes all ubiquitous content for all peers for the persistent store at a given URL and also delete the local store file.
- [setMetadata(\_:forPersistentStoreOfType:at:)](setmetadata%28__forpersistentstoreoftype_at_%29.md): Deprecated. Sets the metadata for a given store.
- [setMetadata(\_:forPersistentStoreOfType:at:options:)](setmetadata%28__forpersistentstoreoftype_at_options_%29.md): Deprecated. Updates the metadata of a specific type of persistent store at the provided location.

# metadataForPersistentStoreOfType:URL:error: (Objective-C)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 3.0+ (deprecated in 9.0) · iPadOS 3.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.5+ (deprecated in 10.11) · tvOS  (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Returns a dictionary containing the metadata stored in the persistent store at a given URL.

> Use -metadataForPersistentStoreOfType:URL:options:error: and pass in an options dictionary matching addPersistentStoreWithType

## Declaration

```objectivec
+ (NSDictionary<NSString *,id> *) metadataForPersistentStoreOfType:(NSString *) storeType URL:(NSURL *) url error:(NSError **) error;
```

## Parameters

- `storeType`: The type of the store at `url`. If this value is `nil`, Core Data determines which store class should be used to get or set the store file’s metadata by inspecting the file contents.
- `url`: The location of a persistent store.
- `error`: If no store is found at `url` or if there is a problem accessing its contents, upon return contains an `NSError` object that describes the problem.

<a id="return-value"></a>

## Return Value

A dictionary containing the metadata stored in the persistent store at `url`, or `nil` if the store cannot be opened or if there is a problem accessing its contents.

<a id="discussion"></a>

## Discussion

The keys guaranteed to be in this dictionary are [NSStoreTypeKey](../nsstoretypekey.md) and [NSStoreUUIDKey](../nsstoreuuidkey.md).

<a id="Discussion"></a>

## Discussion

You can use this method to retrieve the metadata from a store without the overhead of creating a Core Data stack.

## See Also

### Related Documentation

- [setMetadata:forPersistentStore:](setmetadata%28__for_%29.md): Updates the metadata for the specified persistent store.
- [metadataForPersistentStore:](metadata%28for_%29.md): Returns the metadata of the specified persistent store.

### Deprecated type methods

- [elementsDerivedFromExternalRecordURL:](elementsderived%28fromexternalrecordat_%29.md): Deprecated. Returns a dictionary containing the parsed elements derived from the Spotlight external record file that is specified by the given URL.
- [metadataForPersistentStoreWithURL:error:](metadataforpersistentstore%28with_%29.md): Deprecated. Returns a dictionary that contains the metadata stored in the persistent store at the specified location.
- [metadataForPersistentStoreOfType:URL:options:error:](metadataforpersistentstore%28oftype_at_options_%29.md): Deprecated. Returns the metadata of a specific type of persistent store at the provided location.
- [registerStoreClass:forStoreType:](registerstoreclass%28__forstoretype_%29.md): Deprecated. Registers a persistent store subclass using the specified store type identifier.
- [removeUbiquitousContentAndPersistentStoreAtURL:options:error:](removeubiquitouscontentandpersistentstore%28at_options_%29.md): Deprecated. Deletes all ubiquitous content for all peers for the persistent store at a given URL and also delete the local store file.
- [setMetadata:forPersistentStoreOfType:URL:error:](setmetadata%28__forpersistentstoreoftype_at_%29.md): Deprecated. Sets the metadata for a given store.
- [setMetadata:forPersistentStoreOfType:URL:options:error:](setmetadata%28__forpersistentstoreoftype_at_options_%29.md): Deprecated. Updates the metadata of a specific type of persistent store at the provided location.
