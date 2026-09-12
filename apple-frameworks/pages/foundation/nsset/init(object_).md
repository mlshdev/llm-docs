> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsset/init(object:)](https://developer.apple.com/documentation/foundation/nsset/init(object:))

# init(object:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a set that contains a single given object.

## Declaration

```swift
convenience init(object: Any)
```

## Parameters

- `object`: The object to add to the new set. `object` receives a [retain](../../objectivec/nsobject-c.protocol/retain.md) message after being added to the set.

<a id="return-value"></a>

## Return Value

A new set that contains a single member, `object`.

## See Also

### Creating a Set

- [init(objects:count:)](init%28objects_count_%29-65ni4.md): Creates and returns a set containing a specified number of objects from a given C array of objects.
- [adding(\_:)](adding%28__%29.md): Returns a new set formed by adding a given object to the receiving set.
- [addingObjects(from:)](addingobjects%28from_%29-2i31h.md): Returns a new set formed by adding the objects in a given set to the receiving set.
- [addingObjects(from:)](addingobjects%28from_%29-544m9.md): Returns a new set formed by adding the objects in a given array to the receiving set.

# setWithObject: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a set that contains a single given object.

## Declaration

```objectivec
+ (instancetype) setWithObject:(ObjectType) object;
```

## Parameters

- `object`: The object to add to the new set. `object` receives a [retain](../../objectivec/nsobject-c.protocol/retain.md) message after being added to the set.

<a id="return-value"></a>

## Return Value

A new set that contains a single member, `object`.

## See Also

### Related Documentation

- [setWithArray:](setwitharray_.md): Creates and returns a set containing a uniqued collection of the objects contained in a given array.
- [set](set.md): Creates and returns an empty set.
- [setWithObjects:](setwithobjects_.md): Creates and returns a set containing the objects in a given argument list.

### Creating a Set

- [set](set.md): Creates and returns an empty set.
- [setWithArray:](setwitharray_.md): Creates and returns a set containing a uniqued collection of the objects contained in a given array.
- [setWithObjects:](setwithobjects_.md): Creates and returns a set containing the objects in a given argument list.
- [setWithObjects:count:](init%28objects_count_%29-65ni4.md): Creates and returns a set containing a specified number of objects from a given C array of objects.
- [setWithSet:](setwithset_.md): Creates and returns a set containing the objects from another set.
- [setByAddingObject:](adding%28__%29.md): Returns a new set formed by adding a given object to the receiving set.
- [setByAddingObjectsFromSet:](addingobjects%28from_%29-2i31h.md): Returns a new set formed by adding the objects in a given set to the receiving set.
- [setByAddingObjectsFromArray:](addingobjects%28from_%29-544m9.md): Returns a new set formed by adding the objects in a given array to the receiving set.
