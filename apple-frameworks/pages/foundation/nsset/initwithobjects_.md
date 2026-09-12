> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsset/initwithobjects:](https://developer.apple.com/documentation/foundation/nsset/initwithobjects:)

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

An initialized set containing the objects specified in the parameter list. The returned set might be different than the original receiver.

<a id="discussion"></a>

## Discussion

To add additional objects to the new set, pass a comma-separated list of trailing variadic arguments, ending with `nil`.  If the same object appears more than once in the list of objects, it is added only once to the returned set. Each object receives a [retain](../../objectivec/nsobject-c.protocol/retain.md) message as it is added to the set.

## See Also

### Related Documentation

- [setWithObjects:](setwithobjects_.md): Creates and returns a set containing the objects in a given argument list.

### Initializing a Set

- [initWithArray:](init%28array_%29.md): Initializes a newly allocated set with the objects that are contained in a given array.
- [initWithObjects:count:](init%28objects_count_%29-7kift.md): Initializes a newly allocated set with a specified number of objects from a given C array of objects.
- [initWithSet:](init%28set_%29-1xovx.md): Initializes a newly allocated set and adds to it objects from another given set.
- [initWithSet:copyItems:](init%28set_copyitems_%29.md): Initializes a newly allocated set and adds to it members of another given set.
- [init](init%28%29.md): Initializes a newly allocated set.
