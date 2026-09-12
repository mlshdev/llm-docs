> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsorderedcollectiondifference/init(insert:insertedobjects:remove:removedobjects:additionalchanges:)](https://developer.apple.com/documentation/foundation/nsorderedcollectiondifference/init(insert:insertedobjects:remove:removedobjects:additionalchanges:))

# init(insert:insertedObjects:remove:removedObjects:additionalChanges:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an ordered collection difference from arrays of inserted and removed objects with corresponding sets of indices, in addition to an array of ordered collection changes.

## Declaration

```swift
init(insert inserts: IndexSet, insertedObjects: [Any]?, remove removes: IndexSet, removedObjects: [Any]?, additionalChanges changes: [NSOrderedCollectionChange])
```

## Parameters

- `inserts`: An index set that represents the index values to associate with the objects in the provided array of inserted objects.
- `insertedObjects`: An array of objects the ordered collection difference will insert.
- `removes`: An index set that represents the index values to associate with the objects in the provided array of removed objects.
- `removedObjects`: An array of objects the ordered collection difference will remove.
- `changes`: An array of ordered collection changes.

## See Also

### Creating a Collection Difference Object

- [init(changes:)](init%28changes_%29.md): Creates an ordered collection difference using an array of ordered collection changes.
- [init(insert:insertedObjects:remove:removedObjects:)](init%28insert_insertedobjects_remove_removedobjects_%29.md): Creates an ordered collection difference from arrays of inserted and removed objects with corresponding sets of indices.

# initWithInsertIndexes:insertedObjects:removeIndexes:removedObjects:additionalChanges: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an ordered collection difference from arrays of inserted and removed objects with corresponding sets of indices, in addition to an array of ordered collection changes.

## Declaration

```objectivec
- (instancetype) initWithInsertIndexes:(NSIndexSet *) inserts insertedObjects:(NSArray<id> *) insertedObjects removeIndexes:(NSIndexSet *) removes removedObjects:(NSArray<id> *) removedObjects additionalChanges:(NSArray<NSOrderedCollectionChange<id> *> *) changes;
```

## Parameters

- `inserts`: An index set that represents the index values to associate with the objects in the provided array of inserted objects.
- `insertedObjects`: An array of objects the ordered collection difference will insert.
- `removes`: An index set that represents the index values to associate with the objects in the provided array of removed objects.
- `removedObjects`: An array of objects the ordered collection difference will remove.
- `changes`: An array of ordered collection changes.

## See Also

### Creating a Collection Difference Object

- [initWithChanges:](init%28changes_%29.md): Creates an ordered collection difference using an array of ordered collection changes.
- [initWithInsertIndexes:insertedObjects:removeIndexes:removedObjects:](init%28insert_insertedobjects_remove_removedobjects_%29.md): Creates an ordered collection difference from arrays of inserted and removed objects with corresponding sets of indices.
