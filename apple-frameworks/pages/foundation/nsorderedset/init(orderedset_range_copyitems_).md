> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsorderedset/init(orderedset:range:copyitems:)](https://developer.apple.com/documentation/foundation/nsorderedset/init(orderedset:range:copyitems:))

# init(orderedSet:range:copyItems:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a new ordered set with the contents of an ordered set, optionally copying the items.

## Declaration

```swift
convenience init(orderedSet set: NSOrderedSet, range: NSRange, copyItems flag: Bool)
```

## Parameters

- `set`: An ordered set.
- `range`: The range of objects in `orderedSet` to add to the ordered set.
- `flag`: If [true](https://developer.apple.com/documentation/swift/true) the objects are copied to the ordered set; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="return-value"></a>

## Return Value

An initialized ordered set containing the objects in the ordered set.

## See Also

### Initializing an Ordered Set

- [init(array:)](init%28array_%29.md): Initializes a newly allocated set with the objects that are contained in a given array.
- [init(array:copyItems:)](init%28array_copyitems_%29.md): Initializes a newly allocated set with the objects that are contained in a given array, optionally copying the items.
- [init(array:range:copyItems:)](init%28array_range_copyitems_%29.md): Initializes a newly allocated set with the objects that are contained in the specified range of an array, optionally copying the items.
- [init(object:)](init%28object_%29.md): Initializes a new ordered set with the object.
- [init(objects:count:)](init%28objects_count_%29-2ai32.md): Initializes a newly allocated set with a specified number of objects from a given C array of objects.
- [init(orderedSet:)](init%28orderedset_%29.md): Initializes a new ordered set with the contents of a set.
- [init(orderedSet:copyItems:)](init%28orderedset_copyitems_%29.md): Initializes a new ordered set with the contents of a set, optionally copying the items.
- [init(set:)](init%28set_%29.md): Initializes a new ordered set with the contents of a set.
- [init(set:copyItems:)](init%28set_copyitems_%29.md): Initializes a new ordered set with the contents of a set, optionally copying the objects in the set.
- [init()](init%28%29.md): Initializes a newly allocated ordered set.

# initWithOrderedSet:range:copyItems: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a new ordered set with the contents of an ordered set, optionally copying the items.

## Declaration

```objectivec
- (instancetype) initWithOrderedSet:(NSOrderedSet<id> *) set range:(NSRange) range copyItems:(BOOL) flag;
```

## Parameters

- `set`: An ordered set.
- `range`: The range of objects in `orderedSet` to add to the ordered set.
- `flag`: If [true](https://developer.apple.com/documentation/swift/true) the objects are copied to the ordered set; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="return-value"></a>

## Return Value

An initialized ordered set containing the objects in the ordered set.

## See Also

### Related Documentation

- [orderedSetWithOrderedSet:](orderedsetwithorderedset_.md): Creates and returns an ordered set containing the objects from another ordered set.
- [orderedSetWithOrderedSet:range:copyItems:](orderedsetwithorderedset_range_copyitems_.md): Creates and returns a new ordered set for a specified range of objects in an ordered set.

### Initializing an Ordered Set

- [initWithArray:](init%28array_%29.md): Initializes a newly allocated set with the objects that are contained in a given array.
- [initWithArray:copyItems:](init%28array_copyitems_%29.md): Initializes a newly allocated set with the objects that are contained in a given array, optionally copying the items.
- [initWithArray:range:copyItems:](init%28array_range_copyitems_%29.md): Initializes a newly allocated set with the objects that are contained in the specified range of an array, optionally copying the items.
- [initWithObject:](init%28object_%29.md): Initializes a new ordered set with the object.
- [initWithObjects:](initwithobjects_.md): Initializes a newly allocated set with members taken from the specified list of objects.
- [initWithObjects:count:](init%28objects_count_%29-2ai32.md): Initializes a newly allocated set with a specified number of objects from a given C array of objects.
- [initWithOrderedSet:](init%28orderedset_%29.md): Initializes a new ordered set with the contents of a set.
- [initWithOrderedSet:copyItems:](init%28orderedset_copyitems_%29.md): Initializes a new ordered set with the contents of a set, optionally copying the items.
- [initWithSet:](init%28set_%29.md): Initializes a new ordered set with the contents of a set.
- [initWithSet:copyItems:](init%28set_copyitems_%29.md): Initializes a new ordered set with the contents of a set, optionally copying the objects in the set.
- [init](init%28%29.md): Initializes a newly allocated ordered set.
