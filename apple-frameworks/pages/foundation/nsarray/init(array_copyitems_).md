> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/init(array:copyitems:)](https://developer.apple.com/documentation/foundation/nsarray/init(array:copyitems:))

# init(array:copyItems:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a newly allocated array using `anArray` as the source of data objects for the array.

## Declaration

```swift
convenience init(array: [Any], copyItems flag: Bool)
```

## Parameters

- `array`: An array containing the objects with which to initialize the new array.
- `flag`: If [true](https://developer.apple.com/documentation/swift/true), each object in `array` receives a [copyWithZone:](../../objectivec/nsobject-swift.class/copywithzone_.md) message to create a copy of the object—objects must conform to the `NSCopying` protocol. In a managed memory environment, this is instead of the `retain` message the object would otherwise receive. The object copy is then added to the returned array.

  If [false](https://developer.apple.com/documentation/swift/false), then in a managed memory environment each object in `array` simply receives a `retain` message when it is added to the returned array.

<a id="return-value"></a>

## Return Value

An array initialized to contain the objects—or if `flag` is [true](https://developer.apple.com/documentation/swift/true), copies of the objects—in `array`. The returned object might be different than the original receiver.

<a id="Discussion"></a>

## Discussion

After an immutable array has been initialized in this way, it cannot be modified.

The [copy(with:)](../nscopying/copy%28with_%29.md) method performs a shallow copy. If you have a collection of arbitrary depth, passing [true](https://developer.apple.com/documentation/swift/true) for the `flag` parameter will perform an immutable copy of the first level below the surface. If you pass [false](https://developer.apple.com/documentation/swift/false) the mutability of the first level is unaffected. In either case, the mutability of all deeper levels is unaffected.

## See Also

### Related Documentation

- [init(object:)](init%28object_%29.md): Creates and returns an array containing a given object.

### Initializing an Array

- [init()](init%28%29.md): Initializes a newly allocated array.
- [init(array:)](init%28array_%29-o72h.md): Initializes a newly allocated array by placing in it the objects contained in a given array.
- [init(contentsOfFile:)](init%28contentsoffile_%29.md): Deprecated. Initializes a newly allocated array with the contents of the file specified by a given path.
- [init(objects:count:)](init%28objects_count_%29-5odxv.md): Initializes a newly allocated array to include a given number of objects from a given C array.

# initWithArray:copyItems: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a newly allocated array using `anArray` as the source of data objects for the array.

## Declaration

```objectivec
- (instancetype) initWithArray:(NSArray<id> *) array copyItems:(BOOL) flag;
```

## Parameters

- `array`: An array containing the objects with which to initialize the new array.
- `flag`: If [true](https://developer.apple.com/documentation/swift/true), each object in `array` receives a [copyWithZone:](../../objectivec/nsobject-swift.class/copywithzone_.md) message to create a copy of the object—objects must conform to the `NSCopying` protocol. In a managed memory environment, this is instead of the `retain` message the object would otherwise receive. The object copy is then added to the returned array.

  If [false](https://developer.apple.com/documentation/swift/false), then in a managed memory environment each object in `array` simply receives a `retain` message when it is added to the returned array.

<a id="return-value"></a>

## Return Value

An array initialized to contain the objects—or if `flag` is [true](https://developer.apple.com/documentation/swift/true), copies of the objects—in `array`. The returned object might be different than the original receiver.

<a id="Discussion"></a>

## Discussion

After an immutable array has been initialized in this way, it cannot be modified.

The [copyWithZone:](../nscopying/copy%28with_%29.md) method performs a shallow copy. If you have a collection of arbitrary depth, passing [true](https://developer.apple.com/documentation/swift/true) for the `flag` parameter will perform an immutable copy of the first level below the surface. If you pass [false](https://developer.apple.com/documentation/swift/false) the mutability of the first level is unaffected. In either case, the mutability of all deeper levels is unaffected.

## See Also

### Related Documentation

- [arrayWithObject:](init%28object_%29.md): Creates and returns an array containing a given object.
- [initWithObjects:](initwithobjects_.md): Initializes a newly allocated array by placing in it the objects in the argument list.

### Initializing an Array

- [init](init%28%29.md): Initializes a newly allocated array.
- [initWithArray:](init%28array_%29-o72h.md): Initializes a newly allocated array by placing in it the objects contained in a given array.
- [initWithContentsOfFile:](init%28contentsoffile_%29.md): Deprecated. Initializes a newly allocated array with the contents of the file specified by a given path.
- [initWithObjects:](initwithobjects_.md): Initializes a newly allocated array by placing in it the objects in the argument list.
- [initWithObjects:count:](init%28objects_count_%29-5odxv.md): Initializes a newly allocated array to include a given number of objects from a given C array.
