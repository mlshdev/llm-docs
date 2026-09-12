> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsatomicstore/willremovecachenodes(_:)](https://developer.apple.com/documentation/coredata/nsatomicstore/willremovecachenodes(_:))

# willRemoveCacheNodes(\_:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Method invoked before the store removes the given collection of cache nodes.

## Declaration

```swift
func willRemoveCacheNodes(_ cacheNodes: Set<NSAtomicStoreCacheNode>)
```

## Parameters

- `cacheNodes`: The set of cache nodes to remove.

<a id="Discussion"></a>

## Discussion

This method is invoked by the store before the call to [save()](save%28%29.md) with the collection of cache nodes marked as deleted by a managed object context.  You can override this method to track the nodes which will not be made persistent in the [save()](save%28%29.md) method.

You should not invoke this method directly in a subclass.

## See Also

### Related Documentation

- [save()](save%28%29.md): Saves the cache nodes.

### Updating Cache Nodes

- [newCacheNode(for:)](newcachenode%28for_%29.md): Returns a new cache node for a given managed object.
- [newReferenceObject(for:)](newreferenceobject%28for_%29.md): Returns a new reference object for a given managed object.
- [updateCacheNode(\_:from:)](updatecachenode%28__from_%29.md): Updates the given cache node using the values in a given managed object.

# willRemoveCacheNodes: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Method invoked before the store removes the given collection of cache nodes.

## Declaration

```objectivec
- (void) willRemoveCacheNodes:(NSSet<__kindof NSAtomicStoreCacheNode *> *) cacheNodes;
```

## Parameters

- `cacheNodes`: The set of cache nodes to remove.

<a id="Discussion"></a>

## Discussion

This method is invoked by the store before the call to [save:](save%28%29.md) with the collection of cache nodes marked as deleted by a managed object context.  You can override this method to track the nodes which will not be made persistent in the [save:](save%28%29.md) method.

You should not invoke this method directly in a subclass.

## See Also

### Related Documentation

- [save:](save%28%29.md): Saves the cache nodes.

### Updating Cache Nodes

- [newCacheNodeForManagedObject:](newcachenode%28for_%29.md): Returns a new cache node for a given managed object.
- [newReferenceObjectForManagedObject:](newreferenceobject%28for_%29.md): Returns a new reference object for a given managed object.
- [updateCacheNode:fromManagedObject:](updatecachenode%28__from_%29.md): Updates the given cache node using the values in a given managed object.
