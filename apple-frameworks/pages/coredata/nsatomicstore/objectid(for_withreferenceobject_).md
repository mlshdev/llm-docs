> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsatomicstore/objectid(for:withreferenceobject:)](https://developer.apple.com/documentation/coredata/nsatomicstore/objectid(for:withreferenceobject:))

# objectID(for:withReferenceObject:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a managed object ID from the reference data for a specified entity.

## Declaration

```swift
func objectID(for entity: NSEntityDescription, withReferenceObject data: Any) -> NSManagedObjectID
```

## Parameters

- `entity`: An entity description object.
- `data`: Reference data for which the managed object ID is required.

<a id="return-value"></a>

## Return Value

The managed object ID from the reference data for a specified entity

<a id="Discussion"></a>

## Discussion

You use this method to create managed object IDs which are then used to create cache nodes for information being loaded into the store.

<a id="Special-Considerations"></a>

### Special Considerations

You should not override this method.

## See Also

### Loading a Store

- [load()](load%28%29.md): Loads the cache nodes for the receiver.
- [addCacheNodes(\_:)](addcachenodes%28__%29.md): Registers a set of cache nodes with the receiver.

# objectIDForEntity:referenceObject: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a managed object ID from the reference data for a specified entity.

## Declaration

```objectivec
- (NSManagedObjectID *) objectIDForEntity:(NSEntityDescription *) entity referenceObject:(id) data;
```

## Parameters

- `entity`: An entity description object.
- `data`: Reference data for which the managed object ID is required.

<a id="return-value"></a>

## Return Value

The managed object ID from the reference data for a specified entity

<a id="Discussion"></a>

## Discussion

You use this method to create managed object IDs which are then used to create cache nodes for information being loaded into the store.

<a id="Special-Considerations"></a>

### Special Considerations

You should not override this method.

## See Also

### Loading a Store

- [load:](load%28%29.md): Loads the cache nodes for the receiver.
- [addCacheNodes:](addcachenodes%28__%29.md): Registers a set of cache nodes with the receiver.
