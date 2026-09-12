> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsorderedset/init(objects:count:)-3ny0m](https://developer.apple.com/documentation/foundation/nsorderedset/init(objects:count:)-3ny0m)

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

- `objects`: A C array of objects to add to the new ordered set.

  If the same object appears more than once in objects, it is added only once to the returned ordered set. Each object receives a retain message as it is added to the set.
- `cnt`: The number of objects from objects to add to the new set.

<a id="return-value"></a>

## Return Value

A new ordered set containing cnt objects from the list of objects specified by `objects`.

## See Also

### Related Documentation

- [init(orderedSet:copyItems:)](init%28orderedset_copyitems_%29.md): Initializes a new ordered set with the contents of a set, optionally copying the items.
- [init(orderedSet:)](init%28orderedset_%29.md): Initializes a new ordered set with the contents of a set.

# orderedSetWithObjects:count: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a set containing a specified number of objects from a given C array of objects.

## Declaration

```objectivec
+ (instancetype) orderedSetWithObjects:(ObjectType const[]) objects count:(NSUInteger) cnt;
```

## Parameters

- `objects`: A C array of objects to add to the new ordered set.

  If the same object appears more than once in objects, it is added only once to the returned ordered set. Each object receives a retain message as it is added to the set.
- `cnt`: The number of objects from objects to add to the new set.

<a id="return-value"></a>

## Return Value

A new ordered set containing cnt objects from the list of objects specified by `objects`.

## See Also

### Related Documentation

- [orderedSetWithSet:](orderedsetwithset_.md): Creates and returns an ordered set with the contents of a set.
- [orderedSetWithOrderedSet:](orderedsetwithorderedset_.md): Creates and returns an ordered set containing the objects from another ordered set.
- [initWithOrderedSet:copyItems:](init%28orderedset_copyitems_%29.md): Initializes a new ordered set with the contents of a set, optionally copying the items.
- [orderedSetWithObjects:](orderedsetwithobjects_.md): Creates and returns a ordered set containing the objects in a given argument list.
- [orderedSetWithObject:](orderedsetwithobject_.md): Creates and returns a ordered set that contains a single given object.
- [initWithOrderedSet:](init%28orderedset_%29.md): Initializes a new ordered set with the contents of a set.

### Creating an Ordered Set

- [orderedSet](orderedset.md): Creates and returns an empty ordered set
- [orderedSetWithArray:](orderedsetwitharray_.md): Creates and returns a set containing a uniqued collection of the objects contained in a given array.
- [orderedSetWithArray:range:copyItems:](orderedsetwitharray_range_copyitems_.md): Creates and returns a new ordered set for a specified range of objects in an array.
- [orderedSetWithObject:](orderedsetwithobject_.md): Creates and returns a ordered set that contains a single given object.
- [orderedSetWithObjects:](orderedsetwithobjects_.md): Creates and returns a ordered set containing the objects in a given argument list.
- [orderedSetWithOrderedSet:](orderedsetwithorderedset_.md): Creates and returns an ordered set containing the objects from another ordered set.
- [orderedSetWithOrderedSet:range:copyItems:](orderedsetwithorderedset_range_copyitems_.md): Creates and returns a new ordered set for a specified range of objects in an ordered set.
- [orderedSetWithSet:](orderedsetwithset_.md): Creates and returns an ordered set with the contents of a set.
- [orderedSetWithSet:copyItems:](orderedsetwithset_copyitems_.md): Creates and returns an ordered set with the contents of a set, optionally copying the items.
