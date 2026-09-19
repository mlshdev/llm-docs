> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessibility/axbrailletranslationresult/locationmap

# locationMap

**Interface language:** Objective-C

**Framework:** Accessibility  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

An array of integers that has the same length as the resultString. locationMap\[i\]-th character in the input string corresponds to resultString\[i\].

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSNumber *> * locationMap;
```
