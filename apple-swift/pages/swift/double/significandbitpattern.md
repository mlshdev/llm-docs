> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/double/significandbitpattern](https://developer.apple.com/documentation/swift/double/significandbitpattern)

# significandBitPattern

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The raw encoding of the value’s significand field.

## Declaration

```swift
var significandBitPattern: UInt64 { get }
```

<a id="discussion"></a>

## Discussion

The `significandBitPattern` property does not include the leading integral bit of the significand, even for types like `Float80` that store it explicitly.

## See Also

### Working with Binary Representation

- [bitPattern](bitpattern.md): The bit pattern of the value’s encoding.
- [significandWidth](significandwidth.md): The number of bits required to represent the value’s significand.
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
