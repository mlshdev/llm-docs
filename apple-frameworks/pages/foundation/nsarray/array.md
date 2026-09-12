> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/array](https://developer.apple.com/documentation/foundation/nsarray/array)

# array

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns an empty array.

## Declaration

```objectivec
+ (instancetype) array;
```

<a id="return-value"></a>

## Return Value

An empty array.

<a id="Discussion"></a>

## Discussion

This method is used by mutable subclasses of `NSArray`.

## See Also

### Related Documentation

- [Collections Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Collections/Collections.html#//apple_ref/doc/uid/10000034i)

### Creating an Array

- [arrayWithArray:](arraywitharray_.md): Creates and returns an array containing the objects in another given array.
- [arrayWithContentsOfFile:](arraywithcontentsoffile_.md): Deprecated. Creates and returns an array containing the contents of the file specified by a given path.
- [arrayWithObject:](init%28object_%29.md): Creates and returns an array containing a given object.
- [arrayWithObjects:](arraywithobjects_.md): Creates and returns an array containing the objects in the argument list.
- [arrayWithObjects:count:](init%28objects_count_%29-7dct1.md): Creates and returns an array that includes a given number of objects from a given C array.
