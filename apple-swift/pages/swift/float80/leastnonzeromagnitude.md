> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/float80/leastnonzeromagnitude

# leastNonzeroMagnitude

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** macOS 10.10+

The least positive number.

## Declaration

```swift
static var leastNonzeroMagnitude: Float80 { get }
```

<a id="discussion"></a>

## Discussion

This value compares less than or equal to all positive numbers, but greater than zero. If the type supports subnormal values, `leastNonzeroMagnitude` is smaller than `leastNormalMagnitude`; otherwise they are equal.
