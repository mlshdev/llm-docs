> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsatomicstore/cachenodes()](https://developer.apple.com/documentation/coredata/nsatomicstore/cachenodes())

# cacheNodes() (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the set of cache nodes registered with the receiver.

## Declaration

```swift
func cacheNodes() -> Set<NSAtomicStoreCacheNode>
```

<a id="return-value"></a>

## Return Value

The set of cache nodes registered with the receiver.

<a id="Discussion"></a>

## Discussion

You should modify this collection using [addCacheNodes(\_:)](addcachenodes%28__%29.md): and [willRemoveCacheNodes(\_:)](willremovecachenodes%28__%29.md).

## See Also

### Utility Methods

- [cacheNode(for:)](cachenode%28for_%29.md): Returns the cache node for a given managed object ID.
- [referenceObject(for:)](referenceobject%28for_%29.md): Returns the reference object for a given managed object ID.

# cacheNodes (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the set of cache nodes registered with the receiver.

## Declaration

```objectivec
- (NSSet<__kindof NSAtomicStoreCacheNode *> *) cacheNodes;
```

<a id="return-value"></a>

## Return Value

The set of cache nodes registered with the receiver.

<a id="Discussion"></a>

## Discussion

You should modify this collection using [addCacheNodes:](addcachenodes%28__%29.md): and [willRemoveCacheNodes:](willremovecachenodes%28__%29.md).

## See Also

### Utility Methods

- [cacheNodeForObjectID:](cachenode%28for_%29.md): Returns the cache node for a given managed object ID.
- [referenceObjectForObjectID:](referenceobject%28for_%29.md): Returns the reference object for a given managed object ID.
