> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorecoordinator/setmetadata(_:forpersistentstoreoftype:at:)](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/setmetadata(_:forpersistentstoreoftype:at:))

# setMetadata(\_:forPersistentStoreOfType:at:) (Swift)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 3.0+ (deprecated in 9.0) · iPadOS 3.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.5+ (deprecated in 10.11) · tvOS  (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Sets the metadata for a given store.

> Use  -setMetadata:forPersistentStoreOfType:URL:options:error: and pass in an options dictionary matching addPersistentStoreWithType

## Declaration

```swift
class func setMetadata(_ metadata: [String : Any]?, forPersistentStoreOfType storeType: String?, at url: URL) throws
```

## Parameters

- `metadata`: A dictionary containing metadata for the store.
- `storeType`: The type of the store at `url`. If this value is `nil`, Core Data will determine which store class should be used to get or set the store file’s metadata by inspecting the file contents.
- `url`: The location of a persistent store.

## See Also

### Related Documentation

- [setMetadata(\_:for:)](setmetadata%28__for_%29.md): Updates the metadata for the specified persistent store.
- [metadata(for:)](metadata%28for_%29.md): Returns the metadata of the specified persistent store.

### Deprecated type methods

- [elementsDerived(fromExternalRecordAt:)](elementsderived%28fromexternalrecordat_%29.md): Deprecated. Returns a dictionary containing the parsed elements derived from the Spotlight external record file that is specified by the given URL.
- [metadataForPersistentStore(with:)](metadataforpersistentstore%28with_%29.md): Deprecated. Returns a dictionary that contains the metadata stored in the persistent store at the specified location.
- [metadataForPersistentStore(ofType:at:)](metadataforpersistentstore%28oftype_at_%29.md): Deprecated. Returns a dictionary containing the metadata stored in the persistent store at a given URL.
- [metadataForPersistentStore(ofType:at:options:)](metadataforpersistentstore%28oftype_at_options_%29.md): Deprecated. Returns the metadata of a specific type of persistent store at the provided location.
- [registerStoreClass(\_:forStoreType:)](registerstoreclass%28__forstoretype_%29.md): Deprecated. Registers a persistent store subclass using the specified store type identifier.
- [removeUbiquitousContentAndPersistentStore(at:options:)](removeubiquitouscontentandpersistentstore%28at_options_%29.md): Deprecated. Deletes all ubiquitous content for all peers for the persistent store at a given URL and also delete the local store file.
- [setMetadata(\_:forPersistentStoreOfType:at:options:)](setmetadata%28__forpersistentstoreoftype_at_options_%29.md): Deprecated. Updates the metadata of a specific type of persistent store at the provided location.

# setMetadata:forPersistentStoreOfType:URL:error: (Objective-C)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 3.0+ (deprecated in 9.0) · iPadOS 3.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.5+ (deprecated in 10.11) · tvOS  (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Sets the metadata for a given store.

> Use  -setMetadata:forPersistentStoreOfType:URL:options:error: and pass in an options dictionary matching addPersistentStoreWithType

## Declaration

```objectivec
+ (BOOL) setMetadata:(NSDictionary<NSString *,id> *) metadata forPersistentStoreOfType:(NSString *) storeType URL:(NSURL *) url error:(NSError **) error;
```

## Parameters

- `metadata`: A dictionary containing metadata for the store.
- `storeType`: The type of the store at `url`. If this value is `nil`, Core Data will determine which store class should be used to get or set the store file’s metadata by inspecting the file contents.
- `url`: The location of a persistent store.
- `error`: If no store is found at `url` or if there is a problem setting its metadata, upon return contains an `NSError` object that describes the problem.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the metadata was set correctly, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [setMetadata:forPersistentStore:](setmetadata%28__for_%29.md): Updates the metadata for the specified persistent store.
- [metadataForPersistentStore:](metadata%28for_%29.md): Returns the metadata of the specified persistent store.

### Deprecated type methods

- [elementsDerivedFromExternalRecordURL:](elementsderived%28fromexternalrecordat_%29.md): Deprecated. Returns a dictionary containing the parsed elements derived from the Spotlight external record file that is specified by the given URL.
- [metadataForPersistentStoreWithURL:error:](metadataforpersistentstore%28with_%29.md): Deprecated. Returns a dictionary that contains the metadata stored in the persistent store at the specified location.
- [metadataForPersistentStoreOfType:URL:error:](metadataforpersistentstore%28oftype_at_%29.md): Deprecated. Returns a dictionary containing the metadata stored in the persistent store at a given URL.
- [metadataForPersistentStoreOfType:URL:options:error:](metadataforpersistentstore%28oftype_at_options_%29.md): Deprecated. Returns the metadata of a specific type of persistent store at the provided location.
- [registerStoreClass:forStoreType:](registerstoreclass%28__forstoretype_%29.md): Deprecated. Registers a persistent store subclass using the specified store type identifier.
- [removeUbiquitousContentAndPersistentStoreAtURL:options:error:](removeubiquitouscontentandpersistentstore%28at_options_%29.md): Deprecated. Deletes all ubiquitous content for all peers for the persistent store at a given URL and also delete the local store file.
- [setMetadata:forPersistentStoreOfType:URL:options:error:](setmetadata%28__forpersistentstoreoftype_at_options_%29.md): Deprecated. Updates the metadata of a specific type of persistent store at the provided location.
