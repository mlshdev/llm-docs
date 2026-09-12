> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsatomicstore/addcachenodes(_:)](https://developer.apple.com/documentation/coredata/nsatomicstore/addcachenodes(_:))

# addCacheNodes(\_:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Registers a set of cache nodes with the receiver.

## Declaration

```swift
func addCacheNodes(_ cacheNodes: Set<NSAtomicStoreCacheNode>)
```

## Parameters

- `cacheNodes`: A set of cache nodes.

<a id="Discussion"></a>

## Discussion

You should invoke this method in a subclass during the call to [load()](load%28%29.md) to register the loaded information with the store.

## See Also

### Loading a Store

- [load()](load%28%29.md): Loads the cache nodes for the receiver.
- [objectID(for:withReferenceObject:)](objectid%28for_withreferenceobject_%29.md): Returns a managed object ID from the reference data for a specified entity.

# addCacheNodes: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Registers a set of cache nodes with the receiver.

## Declaration

```objectivec
- (void) addCacheNodes:(NSSet<__kindof NSAtomicStoreCacheNode *> *) cacheNodes;
```

## Parameters

- `cacheNodes`: A set of cache nodes.

<a id="Discussion"></a>

## Discussion

You should invoke this method in a subclass during the call to [load:](load%28%29.md) to register the loaded information with the store.

## See Also

### Loading a Store

- [load:](load%28%29.md): Loads the cache nodes for the receiver.
- [objectIDForEntity:referenceObject:](objectid%28for_withreferenceobject_%29.md): Returns a managed object ID from the reference data for a specified entity.
