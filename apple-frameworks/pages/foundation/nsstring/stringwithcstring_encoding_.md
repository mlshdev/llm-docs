> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/stringwithcstring:encoding:](https://developer.apple.com/documentation/foundation/nsstring/stringwithcstring:encoding:)

# stringWithCString:encoding:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string containing the bytes in a given C array, interpreted according to a given encoding.

## Declaration

```objectivec
+ (instancetype) stringWithCString:(const char *) cString encoding:(NSStringEncoding) enc;
```
