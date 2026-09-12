> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsatomicstore/cachenode(for:)](https://developer.apple.com/documentation/coredata/nsatomicstore/cachenode(for:))

# cacheNode(for:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the cache node for a given managed object ID.

## Declaration

```swift
func cacheNode(for objectID: NSManagedObjectID) -> NSAtomicStoreCacheNode?
```

## Parameters

- `objectID`: A managed object ID.

<a id="return-value"></a>

## Return Value

The cache node for `objectID`.

<a id="Discussion"></a>

## Discussion

This method is normally used by cache nodes to locate related cache nodes (by relationships).

## See Also

### Utility Methods

- [cacheNodes()](cachenodes%28%29.md): Returns the set of cache nodes registered with the receiver.
- [referenceObject(for:)](referenceobject%28for_%29.md): Returns the reference object for a given managed object ID.

# cacheNodeForObjectID: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the cache node for a given managed object ID.

## Declaration

```objectivec
- (NSAtomicStoreCacheNode *) cacheNodeForObjectID:(NSManagedObjectID *) objectID;
```

## Parameters

- `objectID`: A managed object ID.

<a id="return-value"></a>

## Return Value

The cache node for `objectID`.

<a id="Discussion"></a>

## Discussion

This method is normally used by cache nodes to locate related cache nodes (by relationships).

## See Also

### Utility Methods

- [cacheNodes](cachenodes%28%29.md): Returns the set of cache nodes registered with the receiver.
- [referenceObjectForObjectID:](referenceobject%28for_%29.md): Returns the reference object for a given managed object ID.
