> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float/leastnormalmagnitude](https://developer.apple.com/documentation/swift/float/leastnormalmagnitude)

# leastNormalMagnitude

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The least positive normal number.

## Declaration

```swift
static var leastNormalMagnitude: Float { get }
```

<a id="discussion"></a>

## Discussion

This value compares less than or equal to all positive normal numbers. There may be smaller positive numbers, but they are *subnormal*, meaning that they are represented with less precision than normal numbers.

This value corresponds to type-specific C macros such as `FLT_MIN` and `DBL_MIN`. The naming of those macros is slightly misleading, because subnormals, zeros, and negative numbers are smaller than this value.

## See Also

### Accessing Numeric Constants

- [pi](pi.md): The mathematical constant pi (π), approximately equal to 3.14159.
- [infinity](infinity.md): Positive infinity.
- [greatestFiniteMagnitude](greatestfinitemagnitude.md): The greatest finite number representable by this type.
- [nan](nan.md): A quiet NaN (“not a number”).
- [signalingNaN](signalingnan.md): A signaling NaN (“not a number”).
- [ulpOfOne](ulpofone.md): The unit in the last place of 1.0.
- [leastNonzeroMagnitude](leastnonzeromagnitude.md): The least positive number.
- [zero](zero.md): Conforms when `Self` conforms to `ExpressibleByIntegerLiteral`. The zero value.
