> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/init(objects:count:)-5odxv](https://developer.apple.com/documentation/foundation/nsarray/init(objects:count:)-5odxv)

# init(objects:count:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a newly allocated array to include a given number of objects from a given C array.

## Declaration

```swift
init(objects: UnsafePointer<AnyObject>?, count cnt: Int)
```

## Parameters

- `objects`: A C array of objects.
- `cnt`: The number of values from the `objects` C array to include in the new array. This number will be the count of the new array—it must not be negative or greater than the number of elements in `objects`.

<a id="return-value"></a>

## Return Value

A newly allocated array including the first `count` objects from `objects`. The returned object might be different than the original receiver.

<a id="Discussion"></a>

## Discussion

Elements are added to the new array in the same order they appear in `objects`, up to but not including index `count`.

After an immutable array has been initialized in this way, it can’t be modified.

This method is a designated initializer.

## See Also

### Initializing an Array

- [init()](init%28%29.md): Initializes a newly allocated array.
- [init(array:)](init%28array_%29-o72h.md): Initializes a newly allocated array by placing in it the objects contained in a given array.
- [init(array:copyItems:)](init%28array_copyitems_%29.md): Initializes a newly allocated array using `anArray` as the source of data objects for the array.
- [init(contentsOfFile:)](init%28contentsoffile_%29.md): Deprecated. Initializes a newly allocated array with the contents of the file specified by a given path.

# initWithObjects:count: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a newly allocated array to include a given number of objects from a given C array.

## Declaration

```objectivec
- (instancetype) initWithObjects:(ObjectType const[]) objects count:(NSUInteger) cnt;
```

## Parameters

- `objects`: A C array of objects.
- `cnt`: The number of values from the `objects` C array to include in the new array. This number will be the count of the new array—it must not be negative or greater than the number of elements in `objects`.

<a id="return-value"></a>

## Return Value

A newly allocated array including the first `count` objects from `objects`. The returned object might be different than the original receiver.

<a id="Discussion"></a>

## Discussion

Elements are added to the new array in the same order they appear in `objects`, up to but not including index `count`.

After an immutable array has been initialized in this way, it can’t be modified.

This method is a designated initializer.

## See Also

### Related Documentation

- [arrayWithObjects:](arraywithobjects_.md): Creates and returns an array containing the objects in the argument list.
- [initWithObjects:](initwithobjects_.md): Initializes a newly allocated array by placing in it the objects in the argument list.

### Initializing an Array

- [init](init%28%29.md): Initializes a newly allocated array.
- [initWithArray:](init%28array_%29-o72h.md): Initializes a newly allocated array by placing in it the objects contained in a given array.
- [initWithArray:copyItems:](init%28array_copyitems_%29.md): Initializes a newly allocated array using `anArray` as the source of data objects for the array.
- [initWithContentsOfFile:](init%28contentsoffile_%29.md): Deprecated. Initializes a newly allocated array with the contents of the file specified by a given path.
- [initWithObjects:](initwithobjects_.md): Initializes a newly allocated array by placing in it the objects in the argument list.
