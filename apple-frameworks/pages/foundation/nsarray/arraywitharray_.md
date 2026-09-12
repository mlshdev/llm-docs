> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/arraywitharray:](https://developer.apple.com/documentation/foundation/nsarray/arraywitharray:)

# arrayWithArray:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns an array containing the objects in another given array.

## Declaration

```objectivec
+ (instancetype) arrayWithArray:(NSArray<id> *) array;
```

## Parameters

- `array`: An array.

<a id="return-value"></a>

## Return Value

An array containing the objects in `anArray`.

## See Also

### Related Documentation

- [initWithObjects:](initwithobjects_.md): Initializes a newly allocated array by placing in it the objects in the argument list.

### Creating an Array

- [array](array.md): Creates and returns an empty array.
- [arrayWithContentsOfFile:](arraywithcontentsoffile_.md): Deprecated. Creates and returns an array containing the contents of the file specified by a given path.
- [arrayWithObject:](init%28object_%29.md): Creates and returns an array containing a given object.
- [arrayWithObjects:](arraywithobjects_.md): Creates and returns an array containing the objects in the argument list.
- [arrayWithObjects:count:](init%28objects_count_%29-7dct1.md): Creates and returns an array that includes a given number of objects from a given C array.
