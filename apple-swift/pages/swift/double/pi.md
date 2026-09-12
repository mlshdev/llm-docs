> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/double/pi](https://developer.apple.com/documentation/swift/double/pi)

# pi

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The mathematical constant pi (π), approximately equal to 3.14159.

## Declaration

```swift
static var pi: Double { get }
```

<a id="discussion"></a>

## Discussion

When measuring an angle in radians, π is equivalent to a half-turn.

This value is rounded toward zero to keep user computations with angles from inadvertently ending up in the wrong quadrant. A type that conforms to the `FloatingPoint` protocol provides the value for `pi` at its best possible precision.

```swift
print(Double.pi)
// Prints "3.14159265358979"
```

## See Also

### Accessing Numeric Constants

- [infinity](infinity.md): Positive infinity.
- [greatestFiniteMagnitude](greatestfinitemagnitude.md): The greatest finite number representable by this type.
- [nan](nan.md): A quiet NaN (“not a number”).
- [signalingNaN](signalingnan.md): A signaling NaN (“not a number”).
- [ulpOfOne](ulpofone.md): The unit in the last place of 1.0.
- [leastNonzeroMagnitude](leastnonzeromagnitude.md): The least positive number.
- [leastNormalMagnitude](leastnormalmagnitude.md): The least positive normal number.
- [zero](zero.md): Conforms when `Self` conforms to `ExpressibleByIntegerLiteral`. The zero value.
