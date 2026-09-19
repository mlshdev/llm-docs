> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsstring/stringwithutf8string:

# stringWithUTF8String:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string created by copying the data from a given C array of UTF8-encoded bytes.

## Declaration

```objectivec
+ (instancetype) stringWithUTF8String:(const char *) nullTerminatedCString;
```
