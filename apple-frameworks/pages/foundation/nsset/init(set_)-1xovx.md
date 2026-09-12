> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsset/init(set:)-1xovx](https://developer.apple.com/documentation/foundation/nsset/init(set:)-1xovx)

# init(set:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a newly allocated set and adds to it objects from another given set.

## Declaration

```swift
convenience init(set: Set<AnyHashable>)
```

## Parameters

- `set`: A set containing objects to add to the receiving set. Each object is retained as it is added.

<a id="return-value"></a>

## Return Value

An initialized objects set containing the objects from `set`. The returned set might be different than the original receiver.

## See Also

### Initializing a Set

- [init(array:)](init%28array_%29.md): Initializes a newly allocated set with the objects that are contained in a given array.
- [init(objects:count:)](init%28objects_count_%29-7kift.md): Initializes a newly allocated set with a specified number of objects from a given C array of objects.
- [init(set:copyItems:)](init%28set_copyitems_%29.md): Initializes a newly allocated set and adds to it members of another given set.
- [init()](init%28%29.md): Initializes a newly allocated set.

# initWithSet: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a newly allocated set and adds to it objects from another given set.

## Declaration

```objectivec
- (instancetype) initWithSet:(NSSet<id> *) set;
```

## Parameters

- `set`: A set containing objects to add to the receiving set. Each object is retained as it is added.

<a id="return-value"></a>

## Return Value

An initialized objects set containing the objects from `set`. The returned set might be different than the original receiver.

## See Also

### Related Documentation

- [initWithObjects:](initwithobjects_.md): Initializes a newly allocated set with members taken from the specified list of objects.
- [setWithSet:](setwithset_.md): Creates and returns a set containing the objects from another set.

### Initializing a Set

- [initWithArray:](init%28array_%29.md): Initializes a newly allocated set with the objects that are contained in a given array.
- [initWithObjects:](initwithobjects_.md): Initializes a newly allocated set with members taken from the specified list of objects.
- [initWithObjects:count:](init%28objects_count_%29-7kift.md): Initializes a newly allocated set with a specified number of objects from a given C array of objects.
- [initWithSet:copyItems:](init%28set_copyitems_%29.md): Initializes a newly allocated set and adds to it members of another given set.
- [init](init%28%29.md): Initializes a newly allocated set.
