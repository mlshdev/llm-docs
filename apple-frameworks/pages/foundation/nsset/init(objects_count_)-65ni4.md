> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsset/init(objects:count:)-65ni4](https://developer.apple.com/documentation/foundation/nsset/init(objects:count:)-65ni4)

# init(objects:count:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a set containing a specified number of objects from a given C array of objects.

## Declaration

```swift
convenience init(objects: UnsafePointer<AnyObject>, count cnt: Int)
```

## Parameters

- `objects`: A C array of objects to add to the new set. If the same object appears more than once in `objects`, it is added only once to the returned set. Each object receives a [retain](../../objectivec/nsobject-c.protocol/retain.md) message as it is added to the set.
- `cnt`: The number of objects from `objects` to add to the new set.

<a id="return-value"></a>

## Return Value

A new set containing `cnt` objects from the list of objects specified by `objects`.

## See Also

### Creating a Set

- [init(object:)](init%28object_%29.md): Creates and returns a set that contains a single given object.
- [adding(\_:)](adding%28__%29.md): Returns a new set formed by adding a given object to the receiving set.
- [addingObjects(from:)](addingobjects%28from_%29-2i31h.md): Returns a new set formed by adding the objects in a given set to the receiving set.
- [addingObjects(from:)](addingobjects%28from_%29-544m9.md): Returns a new set formed by adding the objects in a given array to the receiving set.

# setWithObjects:count: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a set containing a specified number of objects from a given C array of objects.

## Declaration

```objectivec
+ (instancetype) setWithObjects:(ObjectType const[]) objects count:(NSUInteger) cnt;
```

## Parameters

- `objects`: A C array of objects to add to the new set. If the same object appears more than once in `objects`, it is added only once to the returned set. Each object receives a [retain](../../objectivec/nsobject-c.protocol/retain.md) message as it is added to the set.
- `cnt`: The number of objects from `objects` to add to the new set.

<a id="return-value"></a>

## Return Value

A new set containing `cnt` objects from the list of objects specified by `objects`.

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
- [setWithSet:](setwithset_.md): Creates and returns a set containing the objects from another set.
- [setByAddingObject:](adding%28__%29.md): Returns a new set formed by adding a given object to the receiving set.
- [setByAddingObjectsFromSet:](addingobjects%28from_%29-2i31h.md): Returns a new set formed by adding the objects in a given set to the receiving set.
- [setByAddingObjectsFromArray:](addingobjects%28from_%29-544m9.md): Returns a new set formed by adding the objects in a given array to the receiving set.
