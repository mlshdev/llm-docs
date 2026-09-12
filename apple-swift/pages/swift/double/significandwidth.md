> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/double/significandwidth](https://developer.apple.com/documentation/swift/double/significandwidth)

# significandWidth

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of bits required to represent the value’s significand.

## Declaration

```swift
var significandWidth: Int { get }
```

<a id="discussion"></a>

## Discussion

If this value is a finite nonzero number, `significandWidth` is the number of fractional bits required to represent the value of `significand`; otherwise, `significandWidth` is -1. The value of `significandWidth` is always -1 or between zero and `significandBitCount`. For example:

- For any representable power of two, `significandWidth` is zero, because `significand` is `1.0`.
- If `x` is 10, `x.significand` is `1.01` in binary, so `x.significandWidth` is 2.
- If `x` is Float.pi, `x.significand` is `1.10010010000111111011011` in binary, and `x.significandWidth` is 23.

## See Also

### Working with Binary Representation

- [bitPattern](bitpattern.md): The bit pattern of the value’s encoding.
- [significandBitPattern](significandbitpattern.md): The raw encoding of the value’s significand field.
- [exponentBitPattern](exponentbitpattern.md): The raw encoding of the value’s exponent field.
- [significandBitCount](significandbitcount.md): The available number of fractional significand bits.
- [exponentBitCount](exponentbitcount.md): The number of bits used to represent the type’s exponent.
- [radix](radix.md): The radix, or base of exponentiation, for a floating-point type.
- [init(bitPattern:)](init%28bitpattern_%29.md): Creates a new value with the given bit pattern.
- [init(sign:exponentBitPattern:significandBitPattern:)](init%28sign_exponentbitpattern_significandbitpattern_%29.md): Creates a new instance from the specified sign and bit patterns.
- [init(nan:signaling:)](init%28nan_signaling_%29.md): Creates a NaN (“not a number”) value with the specified payload.
- [Double.Exponent](exponent-swift.typealias.md): A type that can represent any written exponent.
- [Double.RawSignificand](rawsignificand.md): A type that represents the encoded significand of a value.
- [Double.RawExponent](rawexponent.md): A type that represents the encoded exponent of a value.
