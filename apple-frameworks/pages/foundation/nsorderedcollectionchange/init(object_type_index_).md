> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsorderedcollectionchange/init(object:type:index:)](https://developer.apple.com/documentation/foundation/nsorderedcollectionchange/init(object:type:index:))

# init(object:type:index:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a change object that represents inserting or removing an object from an ordered collection at a specific index.

## Declaration

```swift
convenience init(object anObject: Any?, type: NSCollectionChangeType, index: Int)
```

## Parameters

- `anObject`: An optional object the change will remove or insert.
- `type`: The type of change.
- `index`: The index location within an ordered collection where the change applies.

## See Also

### Creating a Change

- [init(object:type:index:associatedIndex:)](init%28object_type_index_associatedindex_%29.md): Creates a change object that represents inserting, removing, or moving an object from an ordered collection at a specific index.

# initWithObject:type:index: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a change object that represents inserting or removing an object from an ordered collection at a specific index.

## Declaration

```objectivec
- (instancetype) initWithObject:(ObjectType) anObject type:(NSCollectionChangeType) type index:(NSUInteger) index;
```

## Parameters

- `anObject`: An optional object the change will remove or insert.
- `type`: The type of change.
- `index`: The index location within an ordered collection where the change applies.

## See Also

### Creating a Change

- [initWithObject:type:index:associatedIndex:](init%28object_type_index_associatedindex_%29.md): Creates a change object that represents inserting, removing, or moving an object from an ordered collection at a specific index.
- [changeWithObject:type:index:](changewithobject_type_index_.md): Creates an change object that represents inserting or removing an object from an ordered collection at a specific index.
- [changeWithObject:type:index:associatedIndex:](changewithobject_type_index_associatedindex_.md): Creates an change object that represents inserting or removing an object from an ordered collection at a specific index, matched with an associated location that infers a move within the collection.
