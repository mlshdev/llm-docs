> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorecoordinator/url(for:)](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/url(for:))

# url(for:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the location of the provided persistent store.

## Declaration

```swift
func url(for store: NSPersistentStore) -> URL
```

## Parameters

- `store`: A persistent store.

<a id="return-value"></a>

## Return Value

The URL for `store`.

## See Also

### Related Documentation

- [persistentStores](persistentstores.md): The coordinator’s persistent stores.

### Managing a store’s location

- [setURL(\_:for:)](seturl%28__for_%29.md): Changes the location of the specified persistent store.
- [persistentStore(for:)](persistentstore%28for_%29.md): Returns the persistent store for the specified file URL.

# URLForPersistentStore: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the location of the provided persistent store.

## Declaration

```objectivec
- (NSURL *) URLForPersistentStore:(NSPersistentStore *) store;
```

## Parameters

- `store`: A persistent store.

<a id="return-value"></a>

## Return Value

The URL for `store`.

## See Also

### Related Documentation

- [persistentStores](persistentstores.md): The coordinator’s persistent stores.

### Managing a store’s location

- [setURL:forPersistentStore:](seturl%28__for_%29.md): Changes the location of the specified persistent store.
- [persistentStoreForURL:](persistentstore%28for_%29.md): Returns the persistent store for the specified file URL.
