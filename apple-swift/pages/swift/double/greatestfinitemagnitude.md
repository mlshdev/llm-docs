> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/double/greatestfinitemagnitude](https://developer.apple.com/documentation/swift/double/greatestfinitemagnitude)

# greatestFiniteMagnitude

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The greatest finite number representable by this type.

## Declaration

```swift
static var greatestFiniteMagnitude: Double { get }
```

<a id="discussion"></a>

## Discussion

This value compares greater than or equal to all finite numbers, but less than `infinity`.

This value corresponds to type-specific C macros such as `FLT_MAX` and `DBL_MAX`. The naming of those macros is slightly misleading, because `infinity` is greater than this value.

## See Also

### Accessing Numeric Constants

- [pi](pi.md): The mathematical constant pi (π), approximately equal to 3.14159.
- [infinity](infinity.md): Positive infinity.
- [nan](nan.md): A quiet NaN (“not a number”).
- [signalingNaN](signalingnan.md): A signaling NaN (“not a number”).
- [ulpOfOne](ulpofone.md): The unit in the last place of 1.0.
- [leastNonzeroMagnitude](leastnonzeromagnitude.md): The least positive number.
- [leastNormalMagnitude](leastnormalmagnitude.md): The least positive normal number.
- [zero](zero.md): Conforms when `Self` conforms to `ExpressibleByIntegerLiteral`. The zero value.
