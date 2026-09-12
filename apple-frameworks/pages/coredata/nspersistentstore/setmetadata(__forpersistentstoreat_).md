> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstore/setmetadata(_:forpersistentstoreat:)](https://developer.apple.com/documentation/coredata/nspersistentstore/setmetadata(_:forpersistentstoreat:))

# setMetadata(\_:forPersistentStoreAt:) (Swift)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the metadata for the store at a given URL.

## Declaration

```swift
class func setMetadata(_ metadata: [String : Any]?, forPersistentStoreAt url: URL) throws
```

## Parameters

- `metadata`: The metadata for the store at `url`.
- `url`: The location of the store.

<a id="Discussion"></a>

## Discussion

Subclasses must override this method to set metadata appropriately.

## See Also

### Managing Store Metadata

- [metadataForPersistentStore(with:)](metadataforpersistentstore%28with_%29.md): Returns the metadata from the persistent store at the given URL.
- [loadMetadata()](loadmetadata%28%29.md): Instructs the persistent store to load its metadata.
- [metadata](metadata.md): The metadata for the persistent store.

# setMetadata:forPersistentStoreWithURL:error: (Objective-C)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the metadata for the store at a given URL.

## Declaration

```objectivec
+ (BOOL) setMetadata:(NSDictionary<NSString *,id> *) metadata forPersistentStoreWithURL:(NSURL *) url error:(NSError **) error;
```

## Parameters

- `metadata`: The metadata for the store at `url`.
- `url`: The location of the store.
- `error`: If an error occurs, upon return contains an `NSError` object that describes the problem.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the metadata was written correctly, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Subclasses must override this method to set metadata appropriately.

## See Also

### Managing Store Metadata

- [metadataForPersistentStoreWithURL:error:](metadataforpersistentstore%28with_%29.md): Returns the metadata from the persistent store at the given URL.
- [loadMetadata:](loadmetadata%28%29.md): Instructs the persistent store to load its metadata.
- [metadata](metadata.md): The metadata for the persistent store.
