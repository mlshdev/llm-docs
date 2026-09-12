> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float80/ulp](https://developer.apple.com/documentation/swift/float80/ulp)

# ulp

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The unit in the last place of this value.

## Declaration

```swift
var ulp: Float80 { get }
```

<a id="discussion"></a>

## Discussion

This is the unit of the least significant digit in this value’s significand. For most numbers `x`, this is the difference between `x` and the next greater (in magnitude) representable number. There are some edge cases to be aware of:

- If `x` is not a finite number, then `x.ulp` is NaN.
- If `x` is very small in magnitude, then `x.ulp` may be a subnormal number. If a type does not support subnormals, `x.ulp` may be rounded to zero.
- `greatestFiniteMagnitude.ulp` is a finite number, even though the next greater representable value is `infinity`.

See also the `ulpOfOne` static property.
