> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutablearray/arraywithcontentsoffile:](https://developer.apple.com/documentation/foundation/nsmutablearray/arraywithcontentsoffile:)

# arrayWithContentsOfFile:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a mutable array containing the contents of the file specified by the given path.

## Declaration

```objectivec
+ (NSMutableArray<id> *) arrayWithContentsOfFile:(NSString *) path;
```

## Parameters

- `path`: The path to a file containing a string representation of a mutable array produced by the [writeToFile:atomically:](../nsarray/write%28tofile_atomically_%29.md) method.

<a id="return-value"></a>

## Return Value

A mutable array containing the contents of the file specified `aPath`. Returns `nil` if the file can’t be opened or if the contents of the file can’t be parsed into a mutable array.

<a id="Discussion"></a>

## Discussion

The mutable array representation in the file identified by `aPath` must contain only property list objects (`NSString`, `NSData`, `NSDate`, `NSNumber`, `NSArray`, or `NSDictionary` objects). For more details, see [Property List Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/PropertyLists/Introduction/Introduction.html#//apple_ref/doc/uid/10000048i). The objects contained by this array are immutable even if the array is mutable.

## See Also

### Related Documentation

- [writeToFile:atomically:](../nsarray/write%28tofile_atomically_%29.md): Deprecated. Writes the contents of the array to a file at a given path.

### Creating and Initializing a Mutable Array

- [arrayWithCapacity:](arraywithcapacity_.md): Creates and returns an `NSMutableArray` object with enough allocated memory to initially hold a given number of objects.
- [init](init%28%29.md): Initializes a newly allocated array.
- [initWithCapacity:](init%28capacity_%29.md): Returns an array, initialized with enough memory to initially hold a given number of objects.
- [initWithContentsOfFile:](initwithcontentsoffile_.md): Initializes a newly allocated mutable array with the contents of the file specified by a given path
- [initWithContentsOfURL:](initwithcontentsofurl_.md): Initialized a newly allocated mutable array with the contents of the location specified by a given URL.
