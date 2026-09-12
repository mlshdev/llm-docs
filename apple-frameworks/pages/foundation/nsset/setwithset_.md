> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsset/setwithset:](https://developer.apple.com/documentation/foundation/nsset/setwithset:)

# setWithSet:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a set containing the objects from another set.

## Declaration

```objectivec
+ (instancetype) setWithSet:(NSSet<id> *) set;
```

## Parameters

- `set`: A set containing the objects to add to the new set. Each object receives a [retain](../../objectivec/nsobject-c.protocol/retain.md) message as it is added to the new set.

<a id="return-value"></a>

## Return Value

A new set containing the objects from `set`.

## See Also

### Creating a Set

- [set](set.md): Creates and returns an empty set.
- [setWithArray:](setwitharray_.md): Creates and returns a set containing a uniqued collection of the objects contained in a given array.
- [setWithObject:](init%28object_%29.md): Creates and returns a set that contains a single given object.
- [setWithObjects:](setwithobjects_.md): Creates and returns a set containing the objects in a given argument list.
- [setWithObjects:count:](init%28objects_count_%29-65ni4.md): Creates and returns a set containing a specified number of objects from a given C array of objects.
- [setByAddingObject:](adding%28__%29.md): Returns a new set formed by adding a given object to the receiving set.
- [setByAddingObjectsFromSet:](addingobjects%28from_%29-2i31h.md): Returns a new set formed by adding the objects in a given set to the receiving set.
- [setByAddingObjectsFromArray:](addingobjects%28from_%29-544m9.md): Returns a new set formed by adding the objects in a given array to the receiving set.
