> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsorderedset/orderedsetwithobjects:](https://developer.apple.com/documentation/foundation/nsorderedset/orderedsetwithobjects:)

# orderedSetWithObjects:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a ordered set containing the objects in a given argument list.

## Declaration

```objectivec
+ (instancetype) orderedSetWithObjects:(ObjectType) firstObj;
```

## Parameters

- `firstObj`: The first object to add to the new set.

  If the same object appears more than once in the list of objects, it is added only once to the returned set. The objects are added to the ordered set in the order that they are listed.

<a id="return-value"></a>

## Return Value

A new ordered set containing the objects in the argument list.

<a id="discussion"></a>

## Discussion

To add additional objects to the new set, pass a comma-separated list of trailing variadic arguments, ending with `nil`.

## See Also

### Related Documentation

- [initWithOrderedSet:copyItems:](init%28orderedset_copyitems_%29.md): Initializes a new ordered set with the contents of a set, optionally copying the items.
- [initWithOrderedSet:](init%28orderedset_%29.md): Initializes a new ordered set with the contents of a set.

### Creating an Ordered Set

- [orderedSet](orderedset.md): Creates and returns an empty ordered set
- [orderedSetWithArray:](orderedsetwitharray_.md): Creates and returns a set containing a uniqued collection of the objects contained in a given array.
- [orderedSetWithArray:range:copyItems:](orderedsetwitharray_range_copyitems_.md): Creates and returns a new ordered set for a specified range of objects in an array.
- [orderedSetWithObject:](orderedsetwithobject_.md): Creates and returns a ordered set that contains a single given object.
- [orderedSetWithObjects:count:](init%28objects_count_%29-3ny0m.md): Creates and returns a set containing a specified number of objects from a given C array of objects.
- [orderedSetWithOrderedSet:](orderedsetwithorderedset_.md): Creates and returns an ordered set containing the objects from another ordered set.
- [orderedSetWithOrderedSet:range:copyItems:](orderedsetwithorderedset_range_copyitems_.md): Creates and returns a new ordered set for a specified range of objects in an ordered set.
- [orderedSetWithSet:](orderedsetwithset_.md): Creates and returns an ordered set with the contents of a set.
- [orderedSetWithSet:copyItems:](orderedsetwithset_copyitems_.md): Creates and returns an ordered set with the contents of a set, optionally copying the items.
