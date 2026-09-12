> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float/radix](https://developer.apple.com/documentation/swift/float/radix)

# radix

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The radix, or base of exponentiation, for a floating-point type.

## Declaration

```swift
static var radix: Int { get }
```

<a id="discussion"></a>

## Discussion

The magnitude of a floating-point value `x` of type `F` can be calculated by using the following formula, where `**` is exponentiation:

```swift
x.significand * (F.radix ** x.exponent)
```

A conforming type may use any integer radix, but values other than 2 (for binary floating-point types) or 10 (for decimal floating-point types) are extraordinarily rare in practice.

## See Also

### Working with Binary Representation

- [bitPattern](bitpattern.md): The bit pattern of the value’s encoding.
- [significandBitPattern](significandbitpattern.md): The raw encoding of the value’s significand field.
- [significandWidth](significandwidth.md): The number of bits required to represent the value’s significand.
- [exponentBitPattern](exponentbitpattern.md): The raw encoding of the value’s exponent field.
- [significandBitCount](significandbitcount.md): The available number of fractional significand bits.
- [exponentBitCount](exponentbitcount.md): The number of bits used to represent the type’s exponent.
- [init(bitPattern:)](init%28bitpattern_%29.md): Creates a new value with the given bit pattern.
- [init(sign:exponentBitPattern:significandBitPattern:)](init%28sign_exponentbitpattern_significandbitpattern_%29.md): Creates a new instance from the specified sign and bit patterns.
- [init(nan:signaling:)](init%28nan_signaling_%29.md): Creates a NaN (“not a number”) value with the specified payload.
- [Float.Exponent](exponent-swift.typealias.md): A type that can represent any written exponent.
- [Float.RawSignificand](rawsignificand.md): A type that represents the encoded significand of a value.
