> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axbrailletranslationresult/locationmap](https://developer.apple.com/documentation/accessibility/axbrailletranslationresult/locationmap)

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
