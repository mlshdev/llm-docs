> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdictionary/dictionarywithcontentsoffile:](https://developer.apple.com/documentation/foundation/nsdictionary/dictionarywithcontentsoffile:)

# dictionaryWithContentsOfFile:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.0+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Creates a dictionary using the keys and values found in a file specified by a given path.

## Declaration

```objectivec
+ (NSDictionary<id,id> *) dictionaryWithContentsOfFile:(NSString *) path;
```

## Parameters

- `path`: A full or relative pathname. The file identified by `path` must contain a string representation of a property list whose root object is a dictionary.

<a id="return-value"></a>

## Return Value

A new dictionary that contains the dictionary at `path`, or `nil` if there is a file error or if the contents of the file are an invalid representation of a dictionary.

<a id="Discussion"></a>

## Discussion

The dictionary representation in the file identified by `path` must contain only property list objects (`NSString`, `NSData`, `NSDate`, `NSNumber`, `NSArray`, or `NSDictionary` objects). For more details, see [Property List Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/PropertyLists/Introduction/Introduction.html#//apple_ref/doc/uid/10000048i). The objects contained by this dictionary are immutable, even if the dictionary is mutable.

## See Also

### Creating a Dictionary from an External Source

- [dictionaryWithContentsOfURL:error:](dictionarywithcontentsofurl_error_.md): Creates a dictionary using the keys and values found in a resource specified by a given URL.
- [initWithContentsOfFile:](init%28contentsoffile_%29.md): Deprecated. Initializes a newly allocated dictionary using the keys and values found in a file at a given path.
