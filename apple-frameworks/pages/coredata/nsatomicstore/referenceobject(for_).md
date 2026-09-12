> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsatomicstore/referenceobject(for:)](https://developer.apple.com/documentation/coredata/nsatomicstore/referenceobject(for:))

# referenceObject(for:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the reference object for a given managed object ID.

## Declaration

```swift
func referenceObject(for objectID: NSManagedObjectID) -> Any
```

## Parameters

- `objectID`: A managed object ID.

<a id="return-value"></a>

## Return Value

The reference object for `objectID`.

<a id="Discussion"></a>

## Discussion

Subclasses should invoke this method to extract the reference data from the object ID for each cache node if the data is to be made persistent.

## See Also

### Utility Methods

- [cacheNodes()](cachenodes%28%29.md): Returns the set of cache nodes registered with the receiver.
- [cacheNode(for:)](cachenode%28for_%29.md): Returns the cache node for a given managed object ID.

# referenceObjectForObjectID: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the reference object for a given managed object ID.

## Declaration

```objectivec
- (id) referenceObjectForObjectID:(NSManagedObjectID *) objectID;
```

## Parameters

- `objectID`: A managed object ID.

<a id="return-value"></a>

## Return Value

The reference object for `objectID`.

<a id="Discussion"></a>

## Discussion

Subclasses should invoke this method to extract the reference data from the object ID for each cache node if the data is to be made persistent.

## See Also

### Utility Methods

- [cacheNodes](cachenodes%28%29.md): Returns the set of cache nodes registered with the receiver.
- [cacheNodeForObjectID:](cachenode%28for_%29.md): Returns the cache node for a given managed object ID.
