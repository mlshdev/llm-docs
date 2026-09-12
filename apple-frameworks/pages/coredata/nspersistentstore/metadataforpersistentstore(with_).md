> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstore/metadataforpersistentstore(with:)](https://developer.apple.com/documentation/coredata/nspersistentstore/metadataforpersistentstore(with:))

# metadataForPersistentStore(with:) (Swift)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the metadata from the persistent store at the given URL.

## Declaration

```swift
class func metadataForPersistentStore(with url: URL) throws -> [String : Any]
```

## Parameters

- `url`: The location of the store.

<a id="return-value"></a>

## Return Value

The metadata from the persistent store at `url`. Returns `nil` if there is an error.

<a id="Discussion"></a>

## Discussion

Subclasses must override this method.

## See Also

### Managing Store Metadata

- [setMetadata(\_:forPersistentStoreAt:)](setmetadata%28__forpersistentstoreat_%29.md): Sets the metadata for the store at a given URL.
- [loadMetadata()](loadmetadata%28%29.md): Instructs the persistent store to load its metadata.
- [metadata](metadata.md): The metadata for the persistent store.

# metadataForPersistentStoreWithURL:error: (Objective-C)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the metadata from the persistent store at the given URL.

## Declaration

```objectivec
+ (NSDictionary<NSString *,id> *) metadataForPersistentStoreWithURL:(NSURL *) url error:(NSError **) error;
```

## Parameters

- `url`: The location of the store.
- `error`: If an error occurs, upon return contains an `NSError` object that describes the problem.

<a id="return-value"></a>

## Return Value

The metadata from the persistent store at `url`. Returns `nil` if there is an error.

<a id="Discussion"></a>

## Discussion

Subclasses must override this method.

## See Also

### Managing Store Metadata

- [setMetadata:forPersistentStoreWithURL:error:](setmetadata%28__forpersistentstoreat_%29.md): Sets the metadata for the store at a given URL.
- [loadMetadata:](loadmetadata%28%29.md): Instructs the persistent store to load its metadata.
- [metadata](metadata.md): The metadata for the persistent store.
