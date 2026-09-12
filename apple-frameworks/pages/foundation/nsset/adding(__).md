> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsset/adding(_:)](https://developer.apple.com/documentation/foundation/nsset/adding(_:))

# adding(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new set formed by adding a given object to the receiving set.

## Declaration

```swift
func adding(_ anObject: Any) -> Set<AnyHashable>
```

## Parameters

- `anObject`: The object to add to the set.

<a id="return-value"></a>

## Return Value

A new set formed by adding `anObject` to the receiving set.

## See Also

### Creating a Set

- [init(object:)](init%28object_%29.md): Creates and returns a set that contains a single given object.
- [init(objects:count:)](init%28objects_count_%29-65ni4.md): Creates and returns a set containing a specified number of objects from a given C array of objects.
- [addingObjects(from:)](addingobjects%28from_%29-2i31h.md): Returns a new set formed by adding the objects in a given set to the receiving set.
- [addingObjects(from:)](addingobjects%28from_%29-544m9.md): Returns a new set formed by adding the objects in a given array to the receiving set.

# setByAddingObject: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new set formed by adding a given object to the receiving set.

## Declaration

```objectivec
- (NSSet<id> *) setByAddingObject:(ObjectType) anObject;
```

## Parameters

- `anObject`: The object to add to the set.

<a id="return-value"></a>

## Return Value

A new set formed by adding `anObject` to the receiving set.

## See Also

### Related Documentation

- [setWithArray:](setwitharray_.md): Creates and returns a set containing a uniqued collection of the objects contained in a given array.
- [set](set.md): Creates and returns an empty set.
- [setWithObjects:](setwithobjects_.md): Creates and returns a set containing the objects in a given argument list.

### Creating a Set

- [set](set.md): Creates and returns an empty set.
- [setWithArray:](setwitharray_.md): Creates and returns a set containing a uniqued collection of the objects contained in a given array.
- [setWithObject:](init%28object_%29.md): Creates and returns a set that contains a single given object.
- [setWithObjects:](setwithobjects_.md): Creates and returns a set containing the objects in a given argument list.
- [setWithObjects:count:](init%28objects_count_%29-65ni4.md): Creates and returns a set containing a specified number of objects from a given C array of objects.
- [setWithSet:](setwithset_.md): Creates and returns a set containing the objects from another set.
- [setByAddingObjectsFromSet:](addingobjects%28from_%29-2i31h.md): Returns a new set formed by adding the objects in a given set to the receiving set.
- [setByAddingObjectsFromArray:](addingobjects%28from_%29-544m9.md): Returns a new set formed by adding the objects in a given array to the receiving set.
