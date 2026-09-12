> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nshashtable/anyobject](https://developer.apple.com/documentation/foundation/nshashtable/anyobject)

# anyObject (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

One of the objects in the hash table.

## Declaration

```swift
var anyObject: ObjectType? { get }
```

<a id="Discussion"></a>

## Discussion

One of the objects in the hash table, or `nil` if the hash table contains no objects.

The object returned is chosen at the hash table’s convenience—the selection is not guaranteed to be random.

## See Also

### Accessing Content

- [allObjects](allobjects.md): The hash table’s members.
- [setRepresentation](setrepresentation.md): A set that contains the hash table’s members.
- [count](count.md): The number of elements in the hash table.
- [contains(\_:)](contains%28__%29.md): Returns a Boolean value that indicates whether the hash table contains a given object.
- [member(\_:)](member%28__%29.md): Determines whether the hash table contains a given object, and returns that object if it is present
- [objectEnumerator()](objectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the hash table.

# anyObject (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

One of the objects in the hash table.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) ObjectType anyObject;
```

<a id="Discussion"></a>

## Discussion

One of the objects in the hash table, or `nil` if the hash table contains no objects.

The object returned is chosen at the hash table’s convenience—the selection is not guaranteed to be random.

## See Also

### Accessing Content

- [allObjects](allobjects.md): The hash table’s members.
- [setRepresentation](setrepresentation.md): A set that contains the hash table’s members.
- [count](count.md): The number of elements in the hash table.
- [containsObject:](contains%28__%29.md): Returns a Boolean value that indicates whether the hash table contains a given object.
- [member:](member%28__%29.md): Determines whether the hash table contains a given object, and returns that object if it is present
- [objectEnumerator](objectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the hash table.
