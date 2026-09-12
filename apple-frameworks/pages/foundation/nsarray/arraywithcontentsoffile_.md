> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/arraywithcontentsoffile:](https://developer.apple.com/documentation/foundation/nsarray/arraywithcontentsoffile:)

# arrayWithContentsOfFile:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.0+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Creates and returns an array containing the contents of the file specified by a given path.

## Declaration

```objectivec
+ (NSArray<id> *) arrayWithContentsOfFile:(NSString *) path;
```

## Parameters

- `path`: The path to a file containing a string representation of an array produced by the [writeToFile:atomically:](write%28tofile_atomically_%29.md) method.

<a id="return-value"></a>

## Return Value

An array containing the contents of the file specified by `aPath`. Returns `nil` if the file can’t be opened or if the contents of the file can’t be parsed into an array.

<a id="Discussion"></a>

## Discussion

The array representation in the file identified by `aPath` must contain only property list objects (`NSString`, `NSData`, `NSDate`, `NSNumber`, `NSArray`, or `NSDictionary` objects). For more details, see [Property List Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/PropertyLists/Introduction/Introduction.html#//apple_ref/doc/uid/10000048i). The objects contained by this array are immutable, even if the array is mutable.

## See Also

### Related Documentation

- [writeToFile:atomically:](write%28tofile_atomically_%29.md): Deprecated. Writes the contents of the array to a file at a given path.

### Creating an Array

- [array](array.md): Creates and returns an empty array.
- [arrayWithArray:](arraywitharray_.md): Creates and returns an array containing the objects in another given array.
- [arrayWithObject:](init%28object_%29.md): Creates and returns an array containing a given object.
- [arrayWithObjects:](arraywithobjects_.md): Creates and returns an array containing the objects in the argument list.
- [arrayWithObjects:count:](init%28objects_count_%29-7dct1.md): Creates and returns an array that includes a given number of objects from a given C array.
