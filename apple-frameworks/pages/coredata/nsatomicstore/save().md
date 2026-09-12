> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsatomicstore/save()](https://developer.apple.com/documentation/coredata/nsatomicstore/save())

# save() (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Saves the cache nodes.

## Declaration

```swift
func save() throws
```

<a id="Discussion"></a>

## Discussion

You override this method to make persistent the necessary information from the cache nodes to the URL specified for the receiver.

<a id="Special-Considerations"></a>

### Special Considerations

You must override this method.

## See Also

### Related Documentation

- [updateCacheNode(\_:from:)](updatecachenode%28__from_%29.md): Updates the given cache node using the values in a given managed object.
- [willRemoveCacheNodes(\_:)](willremovecachenodes%28__%29.md): Method invoked before the store removes the given collection of cache nodes.
- [newReferenceObject(for:)](newreferenceobject%28for_%29.md): Returns a new reference object for a given managed object.

# save: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Saves the cache nodes.

## Declaration

```objectivec
- (BOOL) save:(NSError **) error;
```

## Parameters

- `error`: If an error occurs, upon return contains an `NSError` object that describes the problem.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

<a id="Discussion"></a>

## Discussion

You override this method to make persistent the necessary information from the cache nodes to the URL specified for the receiver.

<a id="Special-Considerations"></a>

### Special Considerations

You must override this method.

## See Also

### Related Documentation

- [updateCacheNode:fromManagedObject:](updatecachenode%28__from_%29.md): Updates the given cache node using the values in a given managed object.
- [willRemoveCacheNodes:](willremovecachenodes%28__%29.md): Method invoked before the store removes the given collection of cache nodes.
- [newReferenceObjectForManagedObject:](newreferenceobject%28for_%29.md): Returns a new reference object for a given managed object.
