> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsatomicstore/updatecachenode(_:from:)](https://developer.apple.com/documentation/coredata/nsatomicstore/updatecachenode(_:from:))

# updateCacheNode(\_:from:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Updates the given cache node using the values in a given managed object.

## Declaration

```swift
func updateCacheNode(_ node: NSAtomicStoreCacheNode, from managedObject: NSManagedObject)
```

## Parameters

- `node`: The cache node to update.
- `managedObject`: The managed object with which to update `node`.

<a id="Discussion"></a>

## Discussion

This method is invoked by the framework after a save operation on a managed object context, once for each updated `NSManagedObject` instance.

You override this method in a subclass to take the information from `managedObject` and update `node`.

<a id="Special-Considerations"></a>

### Special Considerations

You must override this method.

## See Also

### Updating Cache Nodes

- [newCacheNode(for:)](newcachenode%28for_%29.md): Returns a new cache node for a given managed object.
- [newReferenceObject(for:)](newreferenceobject%28for_%29.md): Returns a new reference object for a given managed object.
- [willRemoveCacheNodes(\_:)](willremovecachenodes%28__%29.md): Method invoked before the store removes the given collection of cache nodes.

# updateCacheNode:fromManagedObject: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Updates the given cache node using the values in a given managed object.

## Declaration

```objectivec
- (void) updateCacheNode:(NSAtomicStoreCacheNode *) node fromManagedObject:(NSManagedObject *) managedObject;
```

## Parameters

- `node`: The cache node to update.
- `managedObject`: The managed object with which to update `node`.

<a id="Discussion"></a>

## Discussion

This method is invoked by the framework after a save operation on a managed object context, once for each updated `NSManagedObject` instance.

You override this method in a subclass to take the information from `managedObject` and update `node`.

<a id="Special-Considerations"></a>

### Special Considerations

You must override this method.

## See Also

### Updating Cache Nodes

- [newCacheNodeForManagedObject:](newcachenode%28for_%29.md): Returns a new cache node for a given managed object.
- [newReferenceObjectForManagedObject:](newreferenceobject%28for_%29.md): Returns a new reference object for a given managed object.
- [willRemoveCacheNodes:](willremovecachenodes%28__%29.md): Method invoked before the store removes the given collection of cache nodes.
