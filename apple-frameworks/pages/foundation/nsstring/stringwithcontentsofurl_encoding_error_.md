> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsstring/stringwithcontentsofurl:encoding:error:

# stringWithContentsOfURL:encoding:error:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string created by reading data from the file at a given path interpreted using a given encoding.

## Declaration

```objectivec
+ (instancetype) stringWithContentsOfURL:(NSURL *) url encoding:(NSStringEncoding) enc error:(NSError **) error;
```
