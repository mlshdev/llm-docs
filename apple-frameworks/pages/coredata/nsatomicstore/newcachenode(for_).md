> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsatomicstore/newcachenode(for:)](https://developer.apple.com/documentation/coredata/nsatomicstore/newcachenode(for:))

# newCacheNode(for:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a new cache node for a given managed object.

## Declaration

```swift
func newCacheNode(for managedObject: NSManagedObject) -> NSAtomicStoreCacheNode
```

## Parameters

- `managedObject`: A managed object.

<a id="return-value"></a>

## Return Value

A new cache node for `managedObject`.

<a id="Discussion"></a>

## Discussion

This method is invoked by the framework during a save operation, once for each newly-inserted managed object. It should pull information from the managed object and return a cache node containing the information (the node will be registered by the framework).

<a id="Special-Considerations"></a>

### Special Considerations

You must override this method.

## See Also

### Updating Cache Nodes

- [newReferenceObject(for:)](newreferenceobject%28for_%29.md): Returns a new reference object for a given managed object.
- [updateCacheNode(\_:from:)](updatecachenode%28__from_%29.md): Updates the given cache node using the values in a given managed object.
- [willRemoveCacheNodes(\_:)](willremovecachenodes%28__%29.md): Method invoked before the store removes the given collection of cache nodes.

# newCacheNodeForManagedObject: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a new cache node for a given managed object.

## Declaration

```objectivec
- (NSAtomicStoreCacheNode *) newCacheNodeForManagedObject:(NSManagedObject *) managedObject;
```

## Parameters

- `managedObject`: A managed object.

<a id="return-value"></a>

## Return Value

A new cache node for `managedObject`.

<a id="Discussion"></a>

## Discussion

This method is invoked by the framework during a save operation, once for each newly-inserted managed object. It should pull information from the managed object and return a cache node containing the information (the node will be registered by the framework).

<a id="Special-Considerations"></a>

### Special Considerations

You must override this method.

## See Also

### Updating Cache Nodes

- [newReferenceObjectForManagedObject:](newreferenceobject%28for_%29.md): Returns a new reference object for a given managed object.
- [updateCacheNode:fromManagedObject:](updatecachenode%28__from_%29.md): Updates the given cache node using the values in a given managed object.
- [willRemoveCacheNodes:](willremovecachenodes%28__%29.md): Method invoked before the store removes the given collection of cache nodes.
