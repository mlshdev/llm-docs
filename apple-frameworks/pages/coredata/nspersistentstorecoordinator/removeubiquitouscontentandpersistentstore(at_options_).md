> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorecoordinator/removeubiquitouscontentandpersistentstore(at:options:)](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/removeubiquitouscontentandpersistentstore(at:options:))

# removeUbiquitousContentAndPersistentStore(at:options:) (Swift)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 5.0+ (deprecated in 10.0) · iPadOS 5.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.12) · visionOS 1.0+ (deprecated in 1.0)

Deletes all ubiquitous content for all peers for the persistent store at a given URL and also delete the local store file.

> Please see the release notes and Core Data documentation.

## Declaration

```swift
class func removeUbiquitousContentAndPersistentStore(at storeURL: URL, options: [AnyHashable : Any]? = nil) throws
```

## Parameters

- `storeURL`: The URL of the store to delete.
- `options`: A dictionary containing the options normally passed to [addPersistentStore(ofType:configurationName:at:options:)](addpersistentstore%28oftype_configurationname_at_options_%29.md).

<a id="Discussion"></a>

## Discussion

Errors may be returned as a result of file I/O, iCloud network or iCloud account issues.

## See Also

### Deprecated type methods

- [elementsDerived(fromExternalRecordAt:)](elementsderived%28fromexternalrecordat_%29.md): Deprecated. Returns a dictionary containing the parsed elements derived from the Spotlight external record file that is specified by the given URL.
- [metadataForPersistentStore(with:)](metadataforpersistentstore%28with_%29.md): Deprecated. Returns a dictionary that contains the metadata stored in the persistent store at the specified location.
- [metadataForPersistentStore(ofType:at:)](metadataforpersistentstore%28oftype_at_%29.md): Deprecated. Returns a dictionary containing the metadata stored in the persistent store at a given URL.
- [metadataForPersistentStore(ofType:at:options:)](metadataforpersistentstore%28oftype_at_options_%29.md): Deprecated. Returns the metadata of a specific type of persistent store at the provided location.
- [registerStoreClass(\_:forStoreType:)](registerstoreclass%28__forstoretype_%29.md): Deprecated. Registers a persistent store subclass using the specified store type identifier.
- [setMetadata(\_:forPersistentStoreOfType:at:)](setmetadata%28__forpersistentstoreoftype_at_%29.md): Deprecated. Sets the metadata for a given store.
- [setMetadata(\_:forPersistentStoreOfType:at:options:)](setmetadata%28__forpersistentstoreoftype_at_options_%29.md): Deprecated. Updates the metadata of a specific type of persistent store at the provided location.

# removeUbiquitousContentAndPersistentStoreAtURL:options:error: (Objective-C)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 5.0+ (deprecated in 10.0) · iPadOS 5.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.12) · visionOS 1.0+ (deprecated in 1.0)

Deletes all ubiquitous content for all peers for the persistent store at a given URL and also delete the local store file.

> Please see the release notes and Core Data documentation.

## Declaration

```objectivec
+ (BOOL) removeUbiquitousContentAndPersistentStoreAtURL:(NSURL *) storeURL options:(NSDictionary *) options error:(NSError **) error;
```

## Parameters

- `storeURL`: The URL of the store to delete.
- `options`: A dictionary containing the options normally passed to [addPersistentStoreWithType:configuration:URL:options:error:](addpersistentstore%28oftype_configurationname_at_options_%29.md).
- `error`: If the operation fails, upon return contains an `NSError` object that describes the problem.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the store was deleted, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Errors may be returned as a result of file I/O, iCloud network or iCloud account issues.

## See Also

### Deprecated type methods

- [elementsDerivedFromExternalRecordURL:](elementsderived%28fromexternalrecordat_%29.md): Deprecated. Returns a dictionary containing the parsed elements derived from the Spotlight external record file that is specified by the given URL.
- [metadataForPersistentStoreWithURL:error:](metadataforpersistentstore%28with_%29.md): Deprecated. Returns a dictionary that contains the metadata stored in the persistent store at the specified location.
- [metadataForPersistentStoreOfType:URL:error:](metadataforpersistentstore%28oftype_at_%29.md): Deprecated. Returns a dictionary containing the metadata stored in the persistent store at a given URL.
- [metadataForPersistentStoreOfType:URL:options:error:](metadataforpersistentstore%28oftype_at_options_%29.md): Deprecated. Returns the metadata of a specific type of persistent store at the provided location.
- [registerStoreClass:forStoreType:](registerstoreclass%28__forstoretype_%29.md): Deprecated. Registers a persistent store subclass using the specified store type identifier.
- [setMetadata:forPersistentStoreOfType:URL:error:](setmetadata%28__forpersistentstoreoftype_at_%29.md): Deprecated. Sets the metadata for a given store.
- [setMetadata:forPersistentStoreOfType:URL:options:error:](setmetadata%28__forpersistentstoreoftype_at_options_%29.md): Deprecated. Updates the metadata of a specific type of persistent store at the provided location.
