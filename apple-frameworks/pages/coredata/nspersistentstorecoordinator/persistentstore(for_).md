> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorecoordinator/persistentstore(for:)](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/persistentstore(for:))

# persistentStore(for:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the persistent store for the specified file URL.

## Declaration

```swift
func persistentStore(for URL: URL) -> NSPersistentStore?
```

## Parameters

- `URL`: An URL object that specifies the location of a persistent store.

<a id="return-value"></a>

## Return Value

The persistent store at the location specified by `URL`.

## See Also

### Managing a store’s location

- [setURL(\_:for:)](seturl%28__for_%29.md): Changes the location of the specified persistent store.
- [url(for:)](url%28for_%29.md): Returns the location of the provided persistent store.

# persistentStoreForURL: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the persistent store for the specified file URL.

## Declaration

```objectivec
- (NSPersistentStore *) persistentStoreForURL:(NSURL *) URL;
```

## Parameters

- `URL`: An URL object that specifies the location of a persistent store.

<a id="return-value"></a>

## Return Value

The persistent store at the location specified by `URL`.

## See Also

### Managing a store’s location

- [setURL:forPersistentStore:](seturl%28__for_%29.md): Changes the location of the specified persistent store.
- [URLForPersistentStore:](url%28for_%29.md): Returns the location of the provided persistent store.
