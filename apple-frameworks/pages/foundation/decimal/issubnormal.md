> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/decimal/issubnormal](https://developer.apple.com/documentation/foundation/decimal/issubnormal)

# isSubnormal

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether this decimal is subnormal.

## Declaration

```swift
var isSubnormal: Bool { get }
```

<a id="Discussion"></a>

## Discussion

A *subnormal* value is a nonzero number that has a lesser magnitude than the smallest normal number. Subnormal values do not use the full precision available to values of a type.

Zero is neither a normal nor a subnormal number. Subnormal numbers are often called *denormal* or *denormalized*—these are different names for the same concept.

## See Also

### Getting a decimal’s characteristics

- [sign](sign.md): The sign of the decimal.
- [exponent](exponent.md): The exponent of the decimal.
- [significand](significand.md): The significand of the decimal.
- [magnitude](magnitude.md): The magnitude of this decimal.
- [floatingPointClass](floatingpointclass.md): The IEEE 754 class of this type.
- [isCanonical](iscanonical.md): A Boolean value indicating whether the representation of this decimal is canonical.
- [isFinite](isfinite.md): A Boolean value indicating whether this decimal is zero, subnormal, or normal (not infinity or NaN).
- [isInfinite](isinfinite.md): A Boolean value indicating whether this decimal is infinity.
- [isNaN](isnan.md): A Boolean value indicating whether this decimal is NaN.
- [isNormal](isnormal.md): A Boolean value indicating whether this decimal is normal (not zero, subnormal, infinity, or NaN).
- [isSignMinus](issignminus.md): A Boolean value indicating whether this decimal has a negative sign.
- [isSignaling](issignaling.md): A Boolean value indicating whether this decimal is a signaling NaN.\`\`
- [isSignalingNaN](issignalingnan.md): A Boolean value indicating whether this decimal is a signaling NaN.
- [isZero](iszero.md): A Boolean value indicating whether this value is zero.
- [nextDown](nextdown.md): The greatest representable value that is less than this decimal.
