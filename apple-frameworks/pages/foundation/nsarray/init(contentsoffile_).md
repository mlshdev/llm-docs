> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/init(contentsoffile:)](https://developer.apple.com/documentation/foundation/nsarray/init(contentsoffile:))

# init(contentsOfFile:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.0+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Initializes a newly allocated array with the contents of the file specified by a given path.

## Declaration

```swift
convenience init?(contentsOfFile path: String)
```

## Parameters

- `path`: The path to a file containing a representation of an array produced by the [write(toFile:atomically:)](write%28tofile_atomically_%29.md) method.

<a id="return-value"></a>

## Return Value

An array initialized to contain the contents of the file specified by `aPath` or `nil` if the file can’t be opened or the contents of the file can’t be parsed into an array. The returned object might be different than the original receiver.

<a id="Discussion"></a>

## Discussion

The array representation in the file identified by `aPath` must contain only property list objects (`NSString`, `NSData`, `NSArray`, or `NSDictionary` objects). The objects contained by this array are immutable, even if the array is mutable.

## See Also

### Related Documentation

- [write(toFile:atomically:)](write%28tofile_atomically_%29.md): Deprecated. Writes the contents of the array to a file at a given path.

### Initializing an Array

- [init()](init%28%29.md): Initializes a newly allocated array.
- [init(array:)](init%28array_%29-o72h.md): Initializes a newly allocated array by placing in it the objects contained in a given array.
- [init(array:copyItems:)](init%28array_copyitems_%29.md): Initializes a newly allocated array using `anArray` as the source of data objects for the array.
- [init(objects:count:)](init%28objects_count_%29-5odxv.md): Initializes a newly allocated array to include a given number of objects from a given C array.

# initWithContentsOfFile: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.0+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Initializes a newly allocated array with the contents of the file specified by a given path.

## Declaration

```objectivec
- (NSArray<id> *) initWithContentsOfFile:(NSString *) path;
```

## Parameters

- `path`: The path to a file containing a representation of an array produced by the [writeToFile:atomically:](write%28tofile_atomically_%29.md) method.

<a id="return-value"></a>

## Return Value

An array initialized to contain the contents of the file specified by `aPath` or `nil` if the file can’t be opened or the contents of the file can’t be parsed into an array. The returned object might be different than the original receiver.

<a id="Discussion"></a>

## Discussion

The array representation in the file identified by `aPath` must contain only property list objects (`NSString`, `NSData`, `NSArray`, or `NSDictionary` objects). The objects contained by this array are immutable, even if the array is mutable.

## See Also

### Related Documentation

- [writeToFile:atomically:](write%28tofile_atomically_%29.md): Deprecated. Writes the contents of the array to a file at a given path.
- [arrayWithContentsOfFile:](arraywithcontentsoffile_.md): Deprecated. Creates and returns an array containing the contents of the file specified by a given path.

### Initializing an Array

- [init](init%28%29.md): Initializes a newly allocated array.
- [initWithArray:](init%28array_%29-o72h.md): Initializes a newly allocated array by placing in it the objects contained in a given array.
- [initWithArray:copyItems:](init%28array_copyitems_%29.md): Initializes a newly allocated array using `anArray` as the source of data objects for the array.
- [initWithObjects:](initwithobjects_.md): Initializes a newly allocated array by placing in it the objects in the argument list.
- [initWithObjects:count:](init%28objects_count_%29-5odxv.md): Initializes a newly allocated array to include a given number of objects from a given C array.
