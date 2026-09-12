> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorecoordinator/setmetadata(_:forpersistentstoreoftype:at:options:)](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/setmetadata(_:forpersistentstoreoftype:at:options:))

# setMetadata(\_:forPersistentStoreOfType:at:options:) (Swift)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Updates the metadata of a specific type of persistent store at the provided location.

> Use [setMetadata(\_:type:at:options:)](setmetadata%28__type_at_options_%29.md) instead.

## Declaration

```swift
class func setMetadata(_ metadata: [String : Any]?, forPersistentStoreOfType storeType: String, at url: URL, options: [AnyHashable : Any]? = nil) throws
```

## Parameters

- `metadata`: A dictionary that contains the metadata to store.
- `storeType`: The type of store. If `nil`, Core Data automatically attempts to determine the store class to use.
- `url`: The file URL of the store.
- `options`: A dictionary that contains options for the store.

## See Also

### Managing a store’s metadata

- [setMetadata(\_:type:at:options:)](setmetadata%28__type_at_options_%29.md): Updates the metadata of a specific type of persistent store at the provided location.
- [metadataForPersistentStore(type:at:options:)](metadataforpersistentstore%28type_at_options_%29.md): Returns the metadata of a specific type of persistent store at the provided location.
- [metadataForPersistentStore(ofType:at:options:)](metadataforpersistentstore%28oftype_at_options_%29.md): Deprecated. Returns the metadata of a specific type of persistent store at the provided location.
- [metadata(for:)](metadata%28for_%29.md): Returns the metadata of the specified persistent store.
- [setMetadata(\_:for:)](setmetadata%28__for_%29.md): Updates the metadata for the specified persistent store.
- [NSStoreTypeKey](../nsstoretypekey.md): A key that identifies the store type.
- [NSStoreUUIDKey](../nsstoreuuidkey.md): A key that provides the store’s UUID.

# setMetadata:forPersistentStoreOfType:URL:options:error: (Objective-C)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Updates the metadata of a specific type of persistent store at the provided location.

> Use [setMetadata(\_:type:at:options:)](setmetadata%28__type_at_options_%29.md) instead.

## Declaration

```objectivec
+ (BOOL) setMetadata:(NSDictionary<NSString *,id> *) metadata forPersistentStoreOfType:(NSString *) storeType URL:(NSURL *) url options:(NSDictionary *) options error:(NSError **) error;
```

## Parameters

- `metadata`: A dictionary that contains the metadata to store.
- `storeType`: The type of store. If `nil`, Core Data automatically attempts to determine the store class to use.
- `url`: The file URL of the store.
- `options`: A dictionary that contains options for the store.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

## See Also

### Managing a store’s metadata

- [metadataForPersistentStoreOfType:URL:options:error:](metadataforpersistentstore%28oftype_at_options_%29.md): Deprecated. Returns the metadata of a specific type of persistent store at the provided location.
- [metadataForPersistentStore:](metadata%28for_%29.md): Returns the metadata of the specified persistent store.
- [setMetadata:forPersistentStore:](setmetadata%28__for_%29.md): Updates the metadata for the specified persistent store.
- [NSStoreTypeKey](../nsstoretypekey.md): A key that identifies the store type.
- [NSStoreUUIDKey](../nsstoreuuidkey.md): A key that provides the store’s UUID.
