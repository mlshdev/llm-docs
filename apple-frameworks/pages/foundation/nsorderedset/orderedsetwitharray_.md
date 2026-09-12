> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsorderedset/orderedsetwitharray:](https://developer.apple.com/documentation/foundation/nsorderedset/orderedsetwitharray:)

# orderedSetWithArray:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a set containing a uniqued collection of the objects contained in a given array.

## Declaration

```objectivec
+ (instancetype) orderedSetWithArray:(NSArray<id> *) array;
```

## Parameters

- `array`: An array containing the objects to add to the new ordered set. If the same object appears more than once in `array`, it is added only once to the returned set.

<a id="return-value"></a>

## Return Value

A new ordered set containing a uniqued collection of the objects contained in array.

## See Also

### Related Documentation

- [initWithArray:](init%28array_%29.md): Initializes a newly allocated set with the objects that are contained in a given array.

### Creating an Ordered Set

- [orderedSet](orderedset.md): Creates and returns an empty ordered set
- [orderedSetWithArray:range:copyItems:](orderedsetwitharray_range_copyitems_.md): Creates and returns a new ordered set for a specified range of objects in an array.
- [orderedSetWithObject:](orderedsetwithobject_.md): Creates and returns a ordered set that contains a single given object.
- [orderedSetWithObjects:](orderedsetwithobjects_.md): Creates and returns a ordered set containing the objects in a given argument list.
- [orderedSetWithObjects:count:](init%28objects_count_%29-3ny0m.md): Creates and returns a set containing a specified number of objects from a given C array of objects.
- [orderedSetWithOrderedSet:](orderedsetwithorderedset_.md): Creates and returns an ordered set containing the objects from another ordered set.
- [orderedSetWithOrderedSet:range:copyItems:](orderedsetwithorderedset_range_copyitems_.md): Creates and returns a new ordered set for a specified range of objects in an ordered set.
- [orderedSetWithSet:](orderedsetwithset_.md): Creates and returns an ordered set with the contents of a set.
- [orderedSetWithSet:copyItems:](orderedsetwithset_copyitems_.md): Creates and returns an ordered set with the contents of a set, optionally copying the items.
