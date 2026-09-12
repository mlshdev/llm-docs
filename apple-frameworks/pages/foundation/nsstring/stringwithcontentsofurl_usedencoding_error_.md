> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/stringwithcontentsofurl:usedencoding:error:](https://developer.apple.com/documentation/foundation/nsstring/stringwithcontentsofurl:usedencoding:error:)

# stringWithContentsOfURL:usedEncoding:error:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string created by reading data from the file at a given URL and returns by reference the encoding used to interpret the data.

## Declaration

```objectivec
+ (instancetype) stringWithContentsOfURL:(NSURL *) url usedEncoding:(NSStringEncoding *) enc error:(NSError **) error;
```
