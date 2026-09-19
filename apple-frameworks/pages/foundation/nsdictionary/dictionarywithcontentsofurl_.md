> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsdictionary/dictionarywithcontentsofurl:

# dictionaryWithContentsOfURL:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 27.2) · iPadOS 2.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.2) · macOS 10.0+ (deprecated in 27.2) · tvOS 9.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2) · watchOS 2.0+ (deprecated in 27.2)

Creates a dictionary using the keys and values found in a resource specified by a given URL.

## Declaration

```objectivec
+ (NSDictionary<id,id> *) dictionaryWithContentsOfURL:(NSURL *) url;
```

## Parameters

- `url`: An URL that identifies a resource containing a string representation of a property list whose root object is a dictionary.

<a id="return-value"></a>

## Return Value

A new dictionary that contains the dictionary at `aURL`, or `nil` if there is an error or if the contents of the resource are an invalid representation of a dictionary.

<a id="discussion"></a>

## Discussion

The dictionary representation in the file identified by `aURL` must contain only property list objects (`NSString`, `NSData`, `NSDate`, `NSNumber`, `NSArray`, or `NSDictionary` objects). For more details, see [Property List Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/PropertyLists/Introduction/Introduction.html#//apple_ref/doc/uid/10000048i). The objects contained by this dictionary are immutable, even if the dictionary is mutable.

> **Deprecated**

> Use [dictionaryWithContentsOfURL:error:](dictionarywithcontentsofurl_error_.md) instead.
