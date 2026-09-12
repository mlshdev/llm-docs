> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/double/nan](https://developer.apple.com/documentation/swift/double/nan)

# nan

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A quiet NaN (“not a number”).

## Declaration

```swift
static var nan: Double { get }
```

<a id="discussion"></a>

## Discussion

A NaN compares not equal, not greater than, and not less than every value, including itself. Passing a NaN to an operation generally results in NaN.

```swift
let x = 1.21
// x > Double.nan == false
// x < Double.nan == false
// x == Double.nan == false
```

Because a NaN always compares not equal to itself, to test whether a floating-point value is NaN, use its `isNaN` property instead of the equal-to operator (`==`). In the following example, `y` is NaN.

```swift
let y = x + Double.nan
print(y == Double.nan)
// Prints "false"
print(y.isNaN)
// Prints "true"
```

## See Also

### Accessing Numeric Constants

- [pi](pi.md): The mathematical constant pi (π), approximately equal to 3.14159.
- [infinity](infinity.md): Positive infinity.
- [greatestFiniteMagnitude](greatestfinitemagnitude.md): The greatest finite number representable by this type.
- [signalingNaN](signalingnan.md): A signaling NaN (“not a number”).
- [ulpOfOne](ulpofone.md): The unit in the last place of 1.0.
- [leastNonzeroMagnitude](leastnonzeromagnitude.md): The least positive number.
- [leastNormalMagnitude](leastnormalmagnitude.md): The least positive normal number.
- [zero](zero.md): Conforms when `Self` conforms to `ExpressibleByIntegerLiteral`. The zero value.
