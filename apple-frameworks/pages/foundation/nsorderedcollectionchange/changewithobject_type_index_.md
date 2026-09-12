> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsorderedcollectionchange/changewithobject:type:index:](https://developer.apple.com/documentation/foundation/nsorderedcollectionchange/changewithobject:type:index:)

# changeWithObject:type:index:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an change object that represents inserting or removing an object from an ordered collection at a specific index.

## Declaration

```objectivec
+ (NSOrderedCollectionChange<id> *) changeWithObject:(ObjectType) anObject type:(NSCollectionChangeType) type index:(NSUInteger) index;
```

## Parameters

- `anObject`: An object to be removed or inserted by the change.
- `type`: The type of change
- `index`: The index location within an ordered collection where the change applies.

<a id="return-value"></a>

## Return Value

An object that represents an indexed change to an ordered collection and references the object to be inserted or removed.

## See Also

### Creating a Change

- [initWithObject:type:index:](init%28object_type_index_%29.md): Creates a change object that represents inserting or removing an object from an ordered collection at a specific index.
- [initWithObject:type:index:associatedIndex:](init%28object_type_index_associatedindex_%29.md): Creates a change object that represents inserting, removing, or moving an object from an ordered collection at a specific index.
- [changeWithObject:type:index:associatedIndex:](changewithobject_type_index_associatedindex_.md): Creates an change object that represents inserting or removing an object from an ordered collection at a specific index, matched with an associated location that infers a move within the collection.
