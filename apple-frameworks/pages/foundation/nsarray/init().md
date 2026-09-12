> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/init()](https://developer.apple.com/documentation/foundation/nsarray/init())

# init() (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a newly allocated array.

## Declaration

```swift
init()
```

<a id="return-value"></a>

## Return Value

An array.

<a id="Discussion"></a>

## Discussion

After an immutable array has been initialized in this way, it cannot be modified.

This method is a designated initializer.

## See Also

### Initializing an Array

- [init(array:)](init%28array_%29-o72h.md): Initializes a newly allocated array by placing in it the objects contained in a given array.
- [init(array:copyItems:)](init%28array_copyitems_%29.md): Initializes a newly allocated array using `anArray` as the source of data objects for the array.
- [init(contentsOfFile:)](init%28contentsoffile_%29.md): Deprecated. Initializes a newly allocated array with the contents of the file specified by a given path.
- [init(objects:count:)](init%28objects_count_%29-5odxv.md): Initializes a newly allocated array to include a given number of objects from a given C array.

# init (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a newly allocated array.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="return-value"></a>

## Return Value

An array.

<a id="Discussion"></a>

## Discussion

After an immutable array has been initialized in this way, it cannot be modified.

This method is a designated initializer.

## See Also

### Related Documentation

- [initWithObjects:](initwithobjects_.md): Initializes a newly allocated array by placing in it the objects in the argument list.

### Initializing an Array

- [initWithArray:](init%28array_%29-o72h.md): Initializes a newly allocated array by placing in it the objects contained in a given array.
- [initWithArray:copyItems:](init%28array_copyitems_%29.md): Initializes a newly allocated array using `anArray` as the source of data objects for the array.
- [initWithContentsOfFile:](init%28contentsoffile_%29.md): Deprecated. Initializes a newly allocated array with the contents of the file specified by a given path.
- [initWithObjects:](initwithobjects_.md): Initializes a newly allocated array by placing in it the objects in the argument list.
- [initWithObjects:count:](init%28objects_count_%29-5odxv.md): Initializes a newly allocated array to include a given number of objects from a given C array.
