> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsorderedcollectiondifference/init(changes:)](https://developer.apple.com/documentation/foundation/nsorderedcollectiondifference/init(changes:))

# init(changes:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an ordered collection difference using an array of ordered collection changes.

## Declaration

```swift
convenience init(changes: [NSOrderedCollectionChange])
```

## Parameters

- `changes`: An array of ordered collection changes.

## See Also

### Creating a Collection Difference Object

- [init(insert:insertedObjects:remove:removedObjects:)](init%28insert_insertedobjects_remove_removedobjects_%29.md): Creates an ordered collection difference from arrays of inserted and removed objects with corresponding sets of indices.
- [init(insert:insertedObjects:remove:removedObjects:additionalChanges:)](init%28insert_insertedobjects_remove_removedobjects_additionalchanges_%29.md): Creates an ordered collection difference from arrays of inserted and removed objects with corresponding sets of indices, in addition to an array of ordered collection changes.

# initWithChanges: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an ordered collection difference using an array of ordered collection changes.

## Declaration

```objectivec
- (instancetype) initWithChanges:(NSArray<NSOrderedCollectionChange<id> *> *) changes;
```

## Parameters

- `changes`: An array of ordered collection changes.

## See Also

### Creating a Collection Difference Object

- [initWithInsertIndexes:insertedObjects:removeIndexes:removedObjects:](init%28insert_insertedobjects_remove_removedobjects_%29.md): Creates an ordered collection difference from arrays of inserted and removed objects with corresponding sets of indices.
- [initWithInsertIndexes:insertedObjects:removeIndexes:removedObjects:additionalChanges:](init%28insert_insertedobjects_remove_removedobjects_additionalchanges_%29.md): Creates an ordered collection difference from arrays of inserted and removed objects with corresponding sets of indices, in addition to an array of ordered collection changes.
