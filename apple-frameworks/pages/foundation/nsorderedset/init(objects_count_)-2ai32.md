> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsorderedset/init(objects:count:)-2ai32](https://developer.apple.com/documentation/foundation/nsorderedset/init(objects:count:)-2ai32)

# init(objects:count:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a newly allocated set with a specified number of objects from a given C array of objects.

## Declaration

```swift
init(objects: UnsafePointer<AnyObject>?, count cnt: Int)
```

## Parameters

- `objects`: A C array of objects to add to the new set.

  If the same object appears more than once in objects, it is added only once to the returned ordered set.
- `cnt`: The number of objects from objects to add to the new ordered set.

<a id="return-value"></a>

## Return Value

An initialized ordered set containing cnt objects from the list of objects specified by objects. The returned set might be different than the original receiver.

<a id="discussion"></a>

## Discussion

This method is a designated initializer of `NSOrderedSet`.

## See Also

### Related Documentation

- [init(objects:count:)](init%28objects_count_%29-3ny0m.md): Creates and returns a set containing a specified number of objects from a given C array of objects.

### Initializing an Ordered Set

- [init(array:)](init%28array_%29.md): Initializes a newly allocated set with the objects that are contained in a given array.
- [init(array:copyItems:)](init%28array_copyitems_%29.md): Initializes a newly allocated set with the objects that are contained in a given array, optionally copying the items.
- [init(array:range:copyItems:)](init%28array_range_copyitems_%29.md): Initializes a newly allocated set with the objects that are contained in the specified range of an array, optionally copying the items.
- [init(object:)](init%28object_%29.md): Initializes a new ordered set with the object.
- [init(orderedSet:)](init%28orderedset_%29.md): Initializes a new ordered set with the contents of a set.
- [init(orderedSet:copyItems:)](init%28orderedset_copyitems_%29.md): Initializes a new ordered set with the contents of a set, optionally copying the items.
- [init(orderedSet:range:copyItems:)](init%28orderedset_range_copyitems_%29.md): Initializes a new ordered set with the contents of an ordered set, optionally copying the items.
- [init(set:)](init%28set_%29.md): Initializes a new ordered set with the contents of a set.
- [init(set:copyItems:)](init%28set_copyitems_%29.md): Initializes a new ordered set with the contents of a set, optionally copying the objects in the set.
- [init()](init%28%29.md): Initializes a newly allocated ordered set.

# initWithObjects:count: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a newly allocated set with a specified number of objects from a given C array of objects.

## Declaration

```objectivec
- (instancetype) initWithObjects:(ObjectType const[]) objects count:(NSUInteger) cnt;
```

## Parameters

- `objects`: A C array of objects to add to the new set.

  If the same object appears more than once in objects, it is added only once to the returned ordered set.
- `cnt`: The number of objects from objects to add to the new ordered set.

<a id="return-value"></a>

## Return Value

An initialized ordered set containing cnt objects from the list of objects specified by objects. The returned set might be different than the original receiver.

<a id="discussion"></a>

## Discussion

This method is a designated initializer of `NSOrderedSet`.

## See Also

### Related Documentation

- [orderedSetWithObjects:count:](init%28objects_count_%29-3ny0m.md): Creates and returns a set containing a specified number of objects from a given C array of objects.

### Initializing an Ordered Set

- [initWithArray:](init%28array_%29.md): Initializes a newly allocated set with the objects that are contained in a given array.
- [initWithArray:copyItems:](init%28array_copyitems_%29.md): Initializes a newly allocated set with the objects that are contained in a given array, optionally copying the items.
- [initWithArray:range:copyItems:](init%28array_range_copyitems_%29.md): Initializes a newly allocated set with the objects that are contained in the specified range of an array, optionally copying the items.
- [initWithObject:](init%28object_%29.md): Initializes a new ordered set with the object.
- [initWithObjects:](initwithobjects_.md): Initializes a newly allocated set with members taken from the specified list of objects.
- [initWithOrderedSet:](init%28orderedset_%29.md): Initializes a new ordered set with the contents of a set.
- [initWithOrderedSet:copyItems:](init%28orderedset_copyitems_%29.md): Initializes a new ordered set with the contents of a set, optionally copying the items.
- [initWithOrderedSet:range:copyItems:](init%28orderedset_range_copyitems_%29.md): Initializes a new ordered set with the contents of an ordered set, optionally copying the items.
- [initWithSet:](init%28set_%29.md): Initializes a new ordered set with the contents of a set.
- [initWithSet:copyItems:](init%28set_copyitems_%29.md): Initializes a new ordered set with the contents of a set, optionally copying the objects in the set.
- [init](init%28%29.md): Initializes a newly allocated ordered set.
