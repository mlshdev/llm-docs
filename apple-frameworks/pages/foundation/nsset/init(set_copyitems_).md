> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsset/init(set:copyitems:)](https://developer.apple.com/documentation/foundation/nsset/init(set:copyitems:))

# init(set:copyItems:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a newly allocated set and adds to it members of another given set.

## Declaration

```swift
convenience init(set: Set<AnyHashable>, copyItems flag: Bool)
```

## Parameters

- `set`: A set containing objects to add to the new set.
- `flag`: If [true](https://developer.apple.com/documentation/swift/true), each object in `set` receives a [copyWithZone:](../../objectivec/nsobject-swift.class/copywithzone_.md) message to create a copy of the object—objects must conform to the `NSCopying` protocol. In a managed memory environment, this is instead of the `retain` message the object would otherwise receive. The object copy is then added to the returned set.

  If [false](https://developer.apple.com/documentation/swift/false), then in a managed memory environment each object in `set` simply receives a `retain` message when it is added to the returned set.

<a id="return-value"></a>

## Return Value

An initialized set that contains the members of `set`. The returned set might be different than the original receiver.

<a id="Discussion"></a>

## Discussion

After an immutable s has been initialized in this way, it cannot be modified.

The [copy(with:)](../nscopying/copy%28with_%29.md) method performs a shallow copy. If you have a collection of arbitrary depth, passing [true](https://developer.apple.com/documentation/swift/true) for the `flag` parameter will perform an immutable copy of the first level below the surface. If you pass [false](https://developer.apple.com/documentation/swift/false) the mutability of the first level is unaffected. In either case, the mutability of all deeper levels is unaffected.

## See Also

### Initializing a Set

- [init(array:)](init%28array_%29.md): Initializes a newly allocated set with the objects that are contained in a given array.
- [init(objects:count:)](init%28objects_count_%29-7kift.md): Initializes a newly allocated set with a specified number of objects from a given C array of objects.
- [init(set:)](init%28set_%29-1xovx.md): Initializes a newly allocated set and adds to it objects from another given set.
- [init()](init%28%29.md): Initializes a newly allocated set.

# initWithSet:copyItems: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a newly allocated set and adds to it members of another given set.

## Declaration

```objectivec
- (instancetype) initWithSet:(NSSet<id> *) set copyItems:(BOOL) flag;
```

## Parameters

- `set`: A set containing objects to add to the new set.
- `flag`: If [true](https://developer.apple.com/documentation/swift/true), each object in `set` receives a [copyWithZone:](../../objectivec/nsobject-swift.class/copywithzone_.md) message to create a copy of the object—objects must conform to the `NSCopying` protocol. In a managed memory environment, this is instead of the `retain` message the object would otherwise receive. The object copy is then added to the returned set.

  If [false](https://developer.apple.com/documentation/swift/false), then in a managed memory environment each object in `set` simply receives a `retain` message when it is added to the returned set.

<a id="return-value"></a>

## Return Value

An initialized set that contains the members of `set`. The returned set might be different than the original receiver.

<a id="Discussion"></a>

## Discussion

After an immutable s has been initialized in this way, it cannot be modified.

The [copyWithZone:](../nscopying/copy%28with_%29.md) method performs a shallow copy. If you have a collection of arbitrary depth, passing [true](https://developer.apple.com/documentation/swift/true) for the `flag` parameter will perform an immutable copy of the first level below the surface. If you pass [false](https://developer.apple.com/documentation/swift/false) the mutability of the first level is unaffected. In either case, the mutability of all deeper levels is unaffected.

## See Also

### Related Documentation

- [initWithObjects:](initwithobjects_.md): Initializes a newly allocated set with members taken from the specified list of objects.
- [setWithSet:](setwithset_.md): Creates and returns a set containing the objects from another set.

### Initializing a Set

- [initWithArray:](init%28array_%29.md): Initializes a newly allocated set with the objects that are contained in a given array.
- [initWithObjects:](initwithobjects_.md): Initializes a newly allocated set with members taken from the specified list of objects.
- [initWithObjects:count:](init%28objects_count_%29-7kift.md): Initializes a newly allocated set with a specified number of objects from a given C array of objects.
- [initWithSet:](init%28set_%29-1xovx.md): Initializes a newly allocated set and adds to it objects from another given set.
- [init](init%28%29.md): Initializes a newly allocated set.
