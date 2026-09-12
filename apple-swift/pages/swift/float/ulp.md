> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float/ulp](https://developer.apple.com/documentation/swift/float/ulp)

# ulp

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The unit in the last place of this value.

## Declaration

```swift
var ulp: Float { get }
```

<a id="discussion"></a>

## Discussion

This is the unit of the least significant digit in this value’s significand. For most numbers `x`, this is the difference between `x` and the next greater (in magnitude) representable number. There are some edge cases to be aware of:

- If `x` is not a finite number, then `x.ulp` is NaN.
- If `x` is very small in magnitude, then `x.ulp` may be a subnormal number. If a type does not support subnormals, `x.ulp` may be rounded to zero.
- `greatestFiniteMagnitude.ulp` is a finite number, even though the next greater representable value is `infinity`.

See also the `ulpOfOne` static property.

## See Also

### Querying a Float

- [significand](significand.md): The significand of the floating-point value.
- [exponent](exponent-swift.property.md): The exponent of the floating-point value.
- [nextUp](nextup.md): The least representable value that compares greater than this value.
- [nextDown](nextdown.md): The greatest representable value that compares less than this value.
- [binade](binade.md): The floating-point value with the same sign and exponent as this value, but with a significand of 1.0.
