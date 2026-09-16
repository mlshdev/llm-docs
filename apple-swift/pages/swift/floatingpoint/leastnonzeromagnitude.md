> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/floatingpoint/leastnonzeromagnitude

# leastNonzeroMagnitude

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The least positive number.

## Declaration

```swift
static var leastNonzeroMagnitude: Self { get }
```

<a id="discussion"></a>

## Discussion

This value compares less than or equal to all positive numbers, but greater than zero. If the type supports subnormal values, `leastNonzeroMagnitude` is smaller than `leastNormalMagnitude`; otherwise they are equal.
