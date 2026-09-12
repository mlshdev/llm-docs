> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float/leastnonzeromagnitude](https://developer.apple.com/documentation/swift/float/leastnonzeromagnitude)

# leastNonzeroMagnitude

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The least positive number.

## Declaration

```swift
static var leastNonzeroMagnitude: Float { get }
```

<a id="discussion"></a>

## Discussion

This value compares less than or equal to all positive numbers, but greater than zero. If the type supports subnormal values, `leastNonzeroMagnitude` is smaller than `leastNormalMagnitude`; otherwise they are equal.

## See Also

### Accessing Numeric Constants

- [pi](pi.md): The mathematical constant pi (π), approximately equal to 3.14159.
- [infinity](infinity.md): Positive infinity.
- [greatestFiniteMagnitude](greatestfinitemagnitude.md): The greatest finite number representable by this type.
- [nan](nan.md): A quiet NaN (“not a number”).
- [signalingNaN](signalingnan.md): A signaling NaN (“not a number”).
- [ulpOfOne](ulpofone.md): The unit in the last place of 1.0.
- [leastNormalMagnitude](leastnormalmagnitude.md): The least positive normal number.
- [zero](zero.md): Conforms when `Self` conforms to `ExpressibleByIntegerLiteral`. The zero value.
