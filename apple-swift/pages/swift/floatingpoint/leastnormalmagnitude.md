> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/floatingpoint/leastnormalmagnitude

# leastNormalMagnitude

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The least positive normal number.

## Declaration

```swift
static var leastNormalMagnitude: Self { get }
```

<a id="discussion"></a>

## Discussion

This value compares less than or equal to all positive normal numbers. There may be smaller positive numbers, but they are *subnormal*, meaning that they are represented with less precision than normal numbers.

This value corresponds to type-specific C macros such as `FLT_MIN` and `DBL_MIN`. The naming of those macros is slightly misleading, because subnormals, zeros, and negative numbers are smaller than this value.
