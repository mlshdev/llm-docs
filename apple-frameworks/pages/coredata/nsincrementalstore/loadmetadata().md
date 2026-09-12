> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsincrementalstore/loadmetadata()](https://developer.apple.com/documentation/coredata/nsincrementalstore/loadmetadata())

# loadMetadata() (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Loads the metadata for the store.

## Declaration

```swift
func loadMetadata() throws
```

<a id="Discussion"></a>

## Discussion

In your implementation of this method, you must validate that the URL used to create the store is usable (the location exists and if necessary is writable, the schema is compatible, and so on) and return an error if there is an issue.

Any subclass of `NSIncrementalStore` which is file-based must be able to handle being initialized with a URL pointing to a zero-length file. This serves as an indicator that a new store is to be constructed at the specified location and allows applications using the store to securely create reservation files in known locations.

## See Also

### Related Documentation

- [Incremental Store Programming Guide](https://developer.apple.com/library/archive/documentation/DataManagement/Conceptual/IncrementalStorePG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010706)

### Accessing Metadata

- [identifierForNewStore(at:)](identifierfornewstore%28at_%29.md): Returns the identifier for the store at a given URL.

# loadMetadata: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Loads the metadata for the store.

## Declaration

```objectivec
- (BOOL) loadMetadata:(NSError **) error;
```

## Parameters

- `error`: If an error occurs, on return contains an `NSError` object that describes the problem.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the metadata was correctly loaded, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

In your implementation of this method, you must validate that the URL used to create the store is usable (the location exists and if necessary is writable, the schema is compatible, and so on) and return an error if there is an issue.

Any subclass of `NSIncrementalStore` which is file-based must be able to handle being initialized with a URL pointing to a zero-length file. This serves as an indicator that a new store is to be constructed at the specified location and allows applications using the store to securely create reservation files in known locations.

## See Also

### Related Documentation

- [Incremental Store Programming Guide](https://developer.apple.com/library/archive/documentation/DataManagement/Conceptual/IncrementalStorePG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010706)

### Accessing Metadata

- [identifierForNewStoreAtURL:](identifierfornewstore%28at_%29.md): Returns the identifier for the store at a given URL.
