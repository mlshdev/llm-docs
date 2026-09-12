> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorecoordinator/metadataforpersistentstore(oftype:at:options:)](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/metadataforpersistentstore(oftype:at:options:))

# metadataForPersistentStore(ofType:at:options:) (Swift)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the metadata of a specific type of persistent store at the provided location.

> Use [metadataForPersistentStore(type:at:options:)](metadataforpersistentstore%28type_at_options_%29.md) instead.

## Declaration

```swift
class func metadataForPersistentStore(ofType storeType: String, at url: URL, options: [AnyHashable : Any]? = nil) throws -> [String : Any]
```

## Parameters

- `storeType`: The type of the store. If `nil`, Core Data automatically attempts to determine the store class to use.
- `url`: The file URL of the store.
- `options`: A dictionary that contains options for the store.

<a id="return-value"></a>

## Return Value

A dictionary that contains, at a minimum, values for the [NSStoreTypeKey](../nsstoretypekey.md) and [NSStoreUUIDKey](../nsstoreuuidkey.md) keys.

## See Also

### Managing a store’s metadata

- [setMetadata(\_:type:at:options:)](setmetadata%28__type_at_options_%29.md): Updates the metadata of a specific type of persistent store at the provided location.
- [metadataForPersistentStore(type:at:options:)](metadataforpersistentstore%28type_at_options_%29.md): Returns the metadata of a specific type of persistent store at the provided location.
- [setMetadata(\_:forPersistentStoreOfType:at:options:)](setmetadata%28__forpersistentstoreoftype_at_options_%29.md): Deprecated. Updates the metadata of a specific type of persistent store at the provided location.
- [metadata(for:)](metadata%28for_%29.md): Returns the metadata of the specified persistent store.
- [setMetadata(\_:for:)](setmetadata%28__for_%29.md): Updates the metadata for the specified persistent store.
- [NSStoreTypeKey](../nsstoretypekey.md): A key that identifies the store type.
- [NSStoreUUIDKey](../nsstoreuuidkey.md): A key that provides the store’s UUID.

# metadataForPersistentStoreOfType:URL:options:error: (Objective-C)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the metadata of a specific type of persistent store at the provided location.

> Use [metadataForPersistentStore(type:at:options:)](metadataforpersistentstore%28type_at_options_%29.md) instead.

## Declaration

```objectivec
+ (NSDictionary<NSString *,id> *) metadataForPersistentStoreOfType:(NSString *) storeType URL:(NSURL *) url options:(NSDictionary *) options error:(NSError **) error;
```

## Parameters

- `storeType`: The type of the store. If `nil`, Core Data automatically attempts to determine the store class to use.
- `url`: The file URL of the store.
- `options`: A dictionary that contains options for the store.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

A dictionary that contains, at a minimum, values for the [NSStoreTypeKey](../nsstoretypekey.md) and [NSStoreUUIDKey](../nsstoreuuidkey.md) keys. On failure, this method returns `nil`.

## See Also

### Managing a store’s metadata

- [setMetadata:forPersistentStoreOfType:URL:options:error:](setmetadata%28__forpersistentstoreoftype_at_options_%29.md): Deprecated. Updates the metadata of a specific type of persistent store at the provided location.
- [metadataForPersistentStore:](metadata%28for_%29.md): Returns the metadata of the specified persistent store.
- [setMetadata:forPersistentStore:](setmetadata%28__for_%29.md): Updates the metadata for the specified persistent store.
- [NSStoreTypeKey](../nsstoretypekey.md): A key that identifies the store type.
- [NSStoreUUIDKey](../nsstoreuuidkey.md): A key that provides the store’s UUID.
