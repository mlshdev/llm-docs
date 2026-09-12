> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsincrementalstore/identifierfornewstore(at:)](https://developer.apple.com/documentation/coredata/nsincrementalstore/identifierfornewstore(at:))

# identifierForNewStore(at:) (Swift)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the identifier for the store at a given URL.

## Declaration

```swift
class func identifierForNewStore(at storeURL: URL) -> Any
```

## Parameters

- `storeURL`: The URL of a persistent store.

<a id="return-value"></a>

## Return Value

The identifier for the store at `storeURL`.

## See Also

### Accessing Metadata

- [loadMetadata()](loadmetadata%28%29.md): Loads the metadata for the store.

# identifierForNewStoreAtURL: (Objective-C)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the identifier for the store at a given URL.

## Declaration

```objectivec
+ (id) identifierForNewStoreAtURL:(NSURL *) storeURL;
```

## Parameters

- `storeURL`: The URL of a persistent store.

<a id="return-value"></a>

## Return Value

The identifier for the store at `storeURL`.

## See Also

### Accessing Metadata

- [loadMetadata:](loadmetadata%28%29.md): Loads the metadata for the store.
