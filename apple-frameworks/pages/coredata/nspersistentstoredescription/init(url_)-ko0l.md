> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstoredescription/init(url:)-ko0l](https://developer.apple.com/documentation/coredata/nspersistentstoredescription/init(url:)-ko0l)

# init(url:) (Swift)

**Framework:** Core Data  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes the receiver with a URL for the store.

## Declaration

```swift
init(url: URL)
```

## Parameters

- `url`: Location for the store.

<a id="return-value"></a>

## Return Value

Initialized [NSPersistentStoreDescription](../nspersistentstoredescription.md) configured with the given URL.

# initWithURL: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes the receiver with a URL for the store.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) url;
```

## Parameters

- `url`: Location for the store.

<a id="return-value"></a>

## Return Value

Initialized [NSPersistentStoreDescription](../nspersistentstoredescription.md) configured with the given URL.

## See Also

### Creating a Persistent Store Description

- [persistentStoreDescriptionWithURL:](persistentstoredescriptionwithurl_.md): Initializes and returns a persistent store description with the given URL.
