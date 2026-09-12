> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsset/init(objects:count:)-7kift](https://developer.apple.com/documentation/foundation/nsset/init(objects:count:)-7kift)

# init(objects:count:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a newly allocated set with a specified number of objects from a given C array of objects.

## Declaration

```swift
init(objects: UnsafePointer<AnyObject>?, count cnt: Int)
```

## Parameters

- `objects`: A C array of objects to add to the new set. If the same object appears more than once in `objects`, it is added only once to the returned set. Each object receives a [retain](../../objectivec/nsobject-c.protocol/retain.md) message as it is added to the set.
- `cnt`: The number of objects from `objects` to add to the new set.

<a id="return-value"></a>

## Return Value

An initialized set containing `cnt` objects from the list of objects specified by `objects`. The returned set might be different than the original receiver.

<a id="Discussion"></a>

## Discussion

This method is a designated initializer for `NSSet`.

## See Also

### Related Documentation

- [init(objects:count:)](init%28objects_count_%29-65ni4.md): Creates and returns a set containing a specified number of objects from a given C array of objects.

### Initializing a Set

- [init(array:)](init%28array_%29.md): Initializes a newly allocated set with the objects that are contained in a given array.
- [init(set:)](init%28set_%29-1xovx.md): Initializes a newly allocated set and adds to it objects from another given set.
- [init(set:copyItems:)](init%28set_copyitems_%29.md): Initializes a newly allocated set and adds to it members of another given set.
- [init()](init%28%29.md): Initializes a newly allocated set.

# initWithObjects:count: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a newly allocated set with a specified number of objects from a given C array of objects.

## Declaration

```objectivec
- (instancetype) initWithObjects:(ObjectType const[]) objects count:(NSUInteger) cnt;
```

## Parameters

- `objects`: A C array of objects to add to the new set. If the same object appears more than once in `objects`, it is added only once to the returned set. Each object receives a [retain](../../objectivec/nsobject-c.protocol/retain.md) message as it is added to the set.
- `cnt`: The number of objects from `objects` to add to the new set.

<a id="return-value"></a>

## Return Value

An initialized set containing `cnt` objects from the list of objects specified by `objects`. The returned set might be different than the original receiver.

<a id="Discussion"></a>

## Discussion

This method is a designated initializer for `NSSet`.

## See Also

### Related Documentation

- [initWithObjects:](initwithobjects_.md): Initializes a newly allocated set with members taken from the specified list of objects.
- [setWithObjects:count:](init%28objects_count_%29-65ni4.md): Creates and returns a set containing a specified number of objects from a given C array of objects.

### Initializing a Set

- [initWithArray:](init%28array_%29.md): Initializes a newly allocated set with the objects that are contained in a given array.
- [initWithObjects:](initwithobjects_.md): Initializes a newly allocated set with members taken from the specified list of objects.
- [initWithSet:](init%28set_%29-1xovx.md): Initializes a newly allocated set and adds to it objects from another given set.
- [initWithSet:copyItems:](init%28set_copyitems_%29.md): Initializes a newly allocated set and adds to it members of another given set.
- [init](init%28%29.md): Initializes a newly allocated set.
