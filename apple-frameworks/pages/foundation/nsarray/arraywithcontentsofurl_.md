> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/arraywithcontentsofurl:](https://developer.apple.com/documentation/foundation/nsarray/arraywithcontentsofurl:)

# arrayWithContentsOfURL:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.0+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Creates and returns an array containing the contents specified by a given URL.

## Declaration

```objectivec
+ (NSArray<id> *) arrayWithContentsOfURL:(NSURL *) url;
```

## Parameters

- `url`: The location of a file containing a string representation of an array produced by the `writeToURL:atomically:` method.

<a id="return-value"></a>

## Return Value

An array containing the contents specified by `aURL`. Returns `nil` if the location can’t be opened or if the contents of the location can’t be parsed into an array.

<a id="discussion"></a>

## Discussion

The array representation at the location identified by `aURL` must contain only property list objects (`NSString`, `NSData`, `NSArray`, or `NSDictionary` objects). The objects contained by this array are immutable, even if the array is mutable.
