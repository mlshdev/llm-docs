> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutablearray/initwithcontentsofurl:](https://developer.apple.com/documentation/foundation/nsmutablearray/initwithcontentsofurl:)

# initWithContentsOfURL:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initialized a newly allocated mutable array with the contents of the location specified by a given URL.

## Declaration

```objectivec
- (NSMutableArray<id> *) initWithContentsOfURL:(NSURL *) url;
```

## Parameters

- `url`: The location of a file containing a string representation of a mutable array produced by [writeToURL:atomically:](../nsarray/write%28to_atomically_%29.md) method.

<a id="return-value"></a>

## Return Value

A mutable array initialized to contain the contents specified by `aURL`. Returns `nil` if the location can’t be opened or if the contents of the location can’t be parsed into a mutable array. The returned objects must be different than the original receiver.

<a id="Discussion"></a>

## Discussion

The array representation at the location identified by `aURL` must contain only property list objects (`NSString`, `NSData`,`NSDate`, `NSNumber`, `NSArray`, or `NSDictionary` objects). The objects contained by this array are immutable, even if the array is mutable.

## See Also

### Related Documentation

- [writeToURL:atomically:](../nsarray/write%28to_atomically_%29.md): Deprecated. Writes the contents of the array to the location specified by a given URL.

### Creating and Initializing a Mutable Array

- [arrayWithCapacity:](arraywithcapacity_.md): Creates and returns an `NSMutableArray` object with enough allocated memory to initially hold a given number of objects.
- [arrayWithContentsOfFile:](arraywithcontentsoffile_.md): Creates and returns a mutable array containing the contents of the file specified by the given path.
- [init](init%28%29.md): Initializes a newly allocated array.
- [initWithCapacity:](init%28capacity_%29.md): Returns an array, initialized with enough memory to initially hold a given number of objects.
- [initWithContentsOfFile:](initwithcontentsoffile_.md): Initializes a newly allocated mutable array with the contents of the file specified by a given path
