> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorecoordinator/seturl(_:for:)](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/seturl(_:for:))

# setURL(\_:for:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Changes the location of the specified persistent store.

## Declaration

```swift
func setURL(_ url: URL, for store: NSPersistentStore) -> Bool
```

## Parameters

- `url`: The new location for `store`.
- `store`: A persistent store associated with the receiver.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the store was relocated, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

For atomic stores, this method alters the location to which the next save operation will write the file; for non-atomic stores, invoking this method will relinquish the existing connection and create a new one at the specified URL. (For non-atomic stores, a store must already exist at the destination URL; a new store will not be created.)

## See Also

### Managing a store’s location

- [persistentStore(for:)](persistentstore%28for_%29.md): Returns the persistent store for the specified file URL.
- [url(for:)](url%28for_%29.md): Returns the location of the provided persistent store.

# setURL:forPersistentStore: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Changes the location of the specified persistent store.

## Declaration

```objectivec
- (BOOL) setURL:(NSURL *) url forPersistentStore:(NSPersistentStore *) store;
```

## Parameters

- `url`: The new location for `store`.
- `store`: A persistent store associated with the receiver.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the store was relocated, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

For atomic stores, this method alters the location to which the next save operation will write the file; for non-atomic stores, invoking this method will relinquish the existing connection and create a new one at the specified URL. (For non-atomic stores, a store must already exist at the destination URL; a new store will not be created.)

## See Also

### Managing a store’s location

- [persistentStoreForURL:](persistentstore%28for_%29.md): Returns the persistent store for the specified file URL.
- [URLForPersistentStore:](url%28for_%29.md): Returns the location of the provided persistent store.
