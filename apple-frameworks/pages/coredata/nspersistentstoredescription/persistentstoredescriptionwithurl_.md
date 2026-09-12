> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstoredescription/persistentstoredescriptionwithurl:](https://developer.apple.com/documentation/coredata/nspersistentstoredescription/persistentstoredescriptionwithurl:)

# persistentStoreDescriptionWithURL:

**Interface language:** Objective-C

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes and returns a persistent store description with the given URL.

## Declaration

```objectivec
+ (instancetype) persistentStoreDescriptionWithURL:(NSURL *) URL;
```

## Parameters

- `URL`: Location for the store.

<a id="return-value"></a>

## Return Value

Initialized [NSPersistentStoreDescription](../nspersistentstoredescription.md) configured with the given URL.

<a id="Discussion"></a>

## Discussion

This method is a convenience for creating a new [NSPersistentStoreDescription](../nspersistentstoredescription.md) configured with a given URL.

## See Also

### Creating a Persistent Store Description

- [initWithURL:](init%28url_%29-ko0l.md): Initializes the receiver with a URL for the store.
