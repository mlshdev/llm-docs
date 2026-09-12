> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float/exponentbitcount](https://developer.apple.com/documentation/swift/float/exponentbitcount)

# exponentBitCount

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of bits used to represent the type’s exponent.

## Declaration

```swift
static var exponentBitCount: Int { get }
```

<a id="discussion"></a>

## Discussion

A binary floating-point type’s `exponentBitCount` imposes a limit on the range of the exponent for normal, finite values. The *exponent bias* of a type `F` can be calculated as the following, where `**` is exponentiation:

```swift
let bias = 2 ** (F.exponentBitCount - 1) - 1
```

The least normal exponent for values of the type `F` is `1 - bias`, and the largest finite exponent is `bias`. An all-zeros exponent is reserved for subnormals and zeros, and an all-ones exponent is reserved for infinity and NaN.

For example, the `Float` type has an `exponentBitCount` of 8, which gives an exponent bias of `127` by the calculation above.

```swift
let bias = 2 ** (Float.exponentBitCount - 1) - 1
// bias == 127
print(Float.greatestFiniteMagnitude.exponent)
// Prints "127"
print(Float.leastNormalMagnitude.exponent)
// Prints "-126"
```

## See Also

### Working with Binary Representation

- [bitPattern](bitpattern.md): The bit pattern of the value’s encoding.
- [significandBitPattern](significandbitpattern.md): The raw encoding of the value’s significand field.
- [significandWidth](significandwidth.md): The number of bits required to represent the value’s significand.
- [exponentBitPattern](exponentbitpattern.md): The raw encoding of the value’s exponent field.
- [significandBitCount](significandbitcount.md): The available number of fractional significand bits.
- [radix](radix.md): The radix, or base of exponentiation, for a floating-point type.
- [init(bitPattern:)](init%28bitpattern_%29.md): Creates a new value with the given bit pattern.
- [init(sign:exponentBitPattern:significandBitPattern:)](init%28sign_exponentbitpattern_significandbitpattern_%29.md): Creates a new instance from the specified sign and bit patterns.
- [init(nan:signaling:)](init%28nan_signaling_%29.md): Creates a NaN (“not a number”) value with the specified payload.
- [Float.Exponent](exponent-swift.typealias.md): A type that can represent any written exponent.
- [Float.RawSignificand](rawsignificand.md): A type that represents the encoded significand of a value.
