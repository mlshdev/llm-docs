> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutablearray/arraywithcontentsofurl:](https://developer.apple.com/documentation/foundation/nsmutablearray/arraywithcontentsofurl:)

# arrayWithContentsOfURL:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a mutable array containing the contents specified by a given URL.

## Declaration

```objectivec
+ (NSMutableArray<id> *) arrayWithContentsOfURL:(NSURL *) url;
```

## Parameters

- `url`: The location of the file containing a string representation of a mutable array produced by the `writeToURL:atomically:` method.

<a id="return-value"></a>

## Return Value

A mutable array containing the contents specified by `aURL`. Returns `nil` if the location can’t be opened or if the contents of the location can’t be parsed into a mutable array.

<a id="discussion"></a>

## Discussion

The array representation at the location identified by `aURL` must contain only property list objects (`NSString`, `NSData`, `NSDate`, `NSNumber`, `NSArray`, or `NSDictionary` objects). The objects contained by this array are immutable even if the array is mutable.
