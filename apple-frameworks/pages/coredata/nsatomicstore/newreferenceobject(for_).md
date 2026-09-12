> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsatomicstore/newreferenceobject(for:)](https://developer.apple.com/documentation/coredata/nsatomicstore/newreferenceobject(for:))

# newReferenceObject(for:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a new reference object for a given managed object.

## Declaration

```swift
func newReferenceObject(for managedObject: NSManagedObject) -> Any
```

## Parameters

- `managedObject`: A managed object. At the time this method is called, it has a temporary ID.

<a id="return-value"></a>

## Return Value

A new reference object for `managedObject`.

<a id="Discussion"></a>

## Discussion

This method is invoked by the framework after a save operation on a managed object context, once for each newly-inserted managed object. The value returned is used to create a permanent ID for the object and must be unique for an instance within its entity’s inheritance hierarchy (in this store).

<a id="Special-Considerations"></a>

### Special Considerations

You must override this method.

This method must return a stable (unchanging) value for a given object, otherwise Save As and migration will not work correctly. This means that you can use arbitrary numbers, UUIDs, or other random values only if they are persisted with the raw data. If you cannot save the originally-assigned reference object with the data, then the method must derive the reference object from the managed object’s values. For more details, see [Atomic Store Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/AtomicStore_Concepts/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004521).

## See Also

### Updating Cache Nodes

- [newCacheNode(for:)](newcachenode%28for_%29.md): Returns a new cache node for a given managed object.
- [updateCacheNode(\_:from:)](updatecachenode%28__from_%29.md): Updates the given cache node using the values in a given managed object.
- [willRemoveCacheNodes(\_:)](willremovecachenodes%28__%29.md): Method invoked before the store removes the given collection of cache nodes.

# newReferenceObjectForManagedObject: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a new reference object for a given managed object.

## Declaration

```objectivec
- (id) newReferenceObjectForManagedObject:(NSManagedObject *) managedObject;
```

## Parameters

- `managedObject`: A managed object. At the time this method is called, it has a temporary ID.

<a id="return-value"></a>

## Return Value

A new reference object for `managedObject`.

<a id="Discussion"></a>

## Discussion

This method is invoked by the framework after a save operation on a managed object context, once for each newly-inserted managed object. The value returned is used to create a permanent ID for the object and must be unique for an instance within its entity’s inheritance hierarchy (in this store).

<a id="Special-Considerations"></a>

### Special Considerations

You must override this method.

This method must return a stable (unchanging) value for a given object, otherwise Save As and migration will not work correctly. This means that you can use arbitrary numbers, UUIDs, or other random values only if they are persisted with the raw data. If you cannot save the originally-assigned reference object with the data, then the method must derive the reference object from the managed object’s values. For more details, see [Atomic Store Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/AtomicStore_Concepts/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004521).

## See Also

### Updating Cache Nodes

- [newCacheNodeForManagedObject:](newcachenode%28for_%29.md): Returns a new cache node for a given managed object.
- [updateCacheNode:fromManagedObject:](updatecachenode%28__from_%29.md): Updates the given cache node using the values in a given managed object.
- [willRemoveCacheNodes:](willremovecachenodes%28__%29.md): Method invoked before the store removes the given collection of cache nodes.
