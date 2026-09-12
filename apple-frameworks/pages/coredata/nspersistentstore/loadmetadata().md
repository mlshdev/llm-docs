> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstore/loadmetadata()](https://developer.apple.com/documentation/coredata/nspersistentstore/loadmetadata())

# loadMetadata() (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Instructs the persistent store to load its metadata.

## Declaration

```swift
func loadMetadata() throws
```

<a id="Discussion"></a>

## Discussion

There is no way to return an error if the store is invalid.

## See Also

### Managing Store Metadata

- [metadataForPersistentStore(with:)](metadataforpersistentstore%28with_%29.md): Returns the metadata from the persistent store at the given URL.
- [setMetadata(\_:forPersistentStoreAt:)](setmetadata%28__forpersistentstoreat_%29.md): Sets the metadata for the store at a given URL.
- [metadata](metadata.md): The metadata for the persistent store.

# loadMetadata: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Instructs the persistent store to load its metadata.

## Declaration

```objectivec
- (BOOL) loadMetadata:(NSError **) error;
```

## Parameters

- `error`: If an error occurs, upon return contains an `NSError` object that describes the problem.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the metadata was loaded correctly, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

There is no way to return an error if the store is invalid.

## See Also

### Managing Store Metadata

- [metadataForPersistentStoreWithURL:error:](metadataforpersistentstore%28with_%29.md): Returns the metadata from the persistent store at the given URL.
- [setMetadata:forPersistentStoreWithURL:error:](setmetadata%28__forpersistentstoreat_%29.md): Sets the metadata for the store at a given URL.
- [metadata](metadata.md): The metadata for the persistent store.
