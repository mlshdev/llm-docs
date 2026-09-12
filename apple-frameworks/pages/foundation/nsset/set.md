> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsset/set](https://developer.apple.com/documentation/foundation/nsset/set)

# set

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns an empty set.

## Declaration

```objectivec
+ (instancetype) set;
```

<a id="return-value"></a>

## Return Value

A new empty set.

<a id="Discussion"></a>

## Discussion

This method is declared primarily for the use of mutable subclasses of `NSSet`.

## See Also

### Related Documentation

- [Collections Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Collections/Collections.html#//apple_ref/doc/uid/10000034i)

### Creating a Set

- [setWithArray:](setwitharray_.md): Creates and returns a set containing a uniqued collection of the objects contained in a given array.
- [setWithObject:](init%28object_%29.md): Creates and returns a set that contains a single given object.
- [setWithObjects:](setwithobjects_.md): Creates and returns a set containing the objects in a given argument list.
- [setWithObjects:count:](init%28objects_count_%29-65ni4.md): Creates and returns a set containing a specified number of objects from a given C array of objects.
- [setWithSet:](setwithset_.md): Creates and returns a set containing the objects from another set.
- [setByAddingObject:](adding%28__%29.md): Returns a new set formed by adding a given object to the receiving set.
- [setByAddingObjectsFromSet:](addingobjects%28from_%29-2i31h.md): Returns a new set formed by adding the objects in a given set to the receiving set.
- [setByAddingObjectsFromArray:](addingobjects%28from_%29-544m9.md): Returns a new set formed by adding the objects in a given array to the receiving set.
