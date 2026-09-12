> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsset/init(array:)](https://developer.apple.com/documentation/foundation/nsset/init(array:))

# init(array:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a newly allocated set with the objects that are contained in a given array.

## Declaration

```swift
convenience init(array: [Any])
```

## Parameters

- `array`: An array of objects to add to the new set. If the same object appears more than once in `array`, it is represented only once in the returned set. Each object receives a [retain](../../objectivec/nsobject-c.protocol/retain.md) message as it is added to the set.

<a id="return-value"></a>

## Return Value

An initialized set with the contents of `array`. The returned set might be different than the original receiver.

## See Also

### Initializing a Set

- [init(objects:count:)](init%28objects_count_%29-7kift.md): Initializes a newly allocated set with a specified number of objects from a given C array of objects.
- [init(set:)](init%28set_%29-1xovx.md): Initializes a newly allocated set and adds to it objects from another given set.
- [init(set:copyItems:)](init%28set_copyitems_%29.md): Initializes a newly allocated set and adds to it members of another given set.
- [init()](init%28%29.md): Initializes a newly allocated set.

# initWithArray: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a newly allocated set with the objects that are contained in a given array.

## Declaration

```objectivec
- (instancetype) initWithArray:(NSArray<id> *) array;
```

## Parameters

- `array`: An array of objects to add to the new set. If the same object appears more than once in `array`, it is represented only once in the returned set. Each object receives a [retain](../../objectivec/nsobject-c.protocol/retain.md) message as it is added to the set.

<a id="return-value"></a>

## Return Value

An initialized set with the contents of `array`. The returned set might be different than the original receiver.

## See Also

### Related Documentation

- [setWithArray:](setwitharray_.md): Creates and returns a set containing a uniqued collection of the objects contained in a given array.
- [initWithObjects:](initwithobjects_.md): Initializes a newly allocated set with members taken from the specified list of objects.

### Initializing a Set

- [initWithObjects:](initwithobjects_.md): Initializes a newly allocated set with members taken from the specified list of objects.
- [initWithObjects:count:](init%28objects_count_%29-7kift.md): Initializes a newly allocated set with a specified number of objects from a given C array of objects.
- [initWithSet:](init%28set_%29-1xovx.md): Initializes a newly allocated set and adds to it objects from another given set.
- [initWithSet:copyItems:](init%28set_copyitems_%29.md): Initializes a newly allocated set and adds to it members of another given set.
- [init](init%28%29.md): Initializes a newly allocated set.
