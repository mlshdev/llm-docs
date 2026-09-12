> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float80/leastnonzeromagnitude](https://developer.apple.com/documentation/swift/float80/leastnonzeromagnitude)

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
