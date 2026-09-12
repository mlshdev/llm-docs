> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsorderedset/initwithobjects:](https://developer.apple.com/documentation/foundation/nsorderedset/initwithobjects:)

# initWithObjects:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a newly allocated set with members taken from the specified list of objects.

## Declaration

```objectivec
- (instancetype) initWithObjects:(ObjectType) firstObj;
```

## Parameters

- `firstObj`: The first object to add to the new set.

<a id="return-value"></a>

## Return Value

An initialized ordered set containing the objects specified in the parameter list. The returned set might be different than the original receiver.

<a id="discussion"></a>

## Discussion

To add additional objects to the new ordered set, pass comma-separated list of trailing variadic arguments, ending with `nil`,

```
If the same object appears more than once in the list, it is represented only once in the returned ordered set. 
```

## See Also

### Related Documentation

- [orderedSetWithObjects:](orderedsetwithobjects_.md): Creates and returns a ordered set containing the objects in a given argument list.
- [orderedSetWithObject:](orderedsetwithobject_.md): Creates and returns a ordered set that contains a single given object.

### Initializing an Ordered Set

- [initWithArray:](init%28array_%29.md): Initializes a newly allocated set with the objects that are contained in a given array.
- [initWithArray:copyItems:](init%28array_copyitems_%29.md): Initializes a newly allocated set with the objects that are contained in a given array, optionally copying the items.
- [initWithArray:range:copyItems:](init%28array_range_copyitems_%29.md): Initializes a newly allocated set with the objects that are contained in the specified range of an array, optionally copying the items.
- [initWithObject:](init%28object_%29.md): Initializes a new ordered set with the object.
- [initWithObjects:count:](init%28objects_count_%29-2ai32.md): Initializes a newly allocated set with a specified number of objects from a given C array of objects.
- [initWithOrderedSet:](init%28orderedset_%29.md): Initializes a new ordered set with the contents of a set.
- [initWithOrderedSet:copyItems:](init%28orderedset_copyitems_%29.md): Initializes a new ordered set with the contents of a set, optionally copying the items.
- [initWithOrderedSet:range:copyItems:](init%28orderedset_range_copyitems_%29.md): Initializes a new ordered set with the contents of an ordered set, optionally copying the items.
- [initWithSet:](init%28set_%29.md): Initializes a new ordered set with the contents of a set.
- [initWithSet:copyItems:](init%28set_copyitems_%29.md): Initializes a new ordered set with the contents of a set, optionally copying the objects in the set.
- [init](init%28%29.md): Initializes a newly allocated ordered set.
