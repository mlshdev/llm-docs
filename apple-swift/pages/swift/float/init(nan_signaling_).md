> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float/init(nan:signaling:)](https://developer.apple.com/documentation/swift/float/init(nan:signaling:))

# init(nan:signaling:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a NaN (“not a number”) value with the specified payload.

## Declaration

```swift
init(nan payload: Float.RawSignificand, signaling: Bool)
```

## Parameters

- `payload`: The payload to use for the new NaN value.
- `signaling`: Pass `true` to create a signaling NaN or `false` to create a quiet NaN.

<a id="discussion"></a>

## Discussion

NaN values compare not equal to every value, including themselves. Most operations with a NaN operand produce a NaN result. Don’t use the equal-to operator (`==`) to test whether a value is NaN. Instead, use the value’s `isNaN` property.

```swift
let x = Float(nan: 0, signaling: false)
print(x == .nan)
// Prints "false"
print(x.isNaN)
// Prints "true"
```

## See Also

### Working with Binary Representation

- [bitPattern](bitpattern.md): The bit pattern of the value’s encoding.
- [significandBitPattern](significandbitpattern.md): The raw encoding of the value’s significand field.
- [significandWidth](significandwidth.md): The number of bits required to represent the value’s significand.
- [exponentBitPattern](exponentbitpattern.md): The raw encoding of the value’s exponent field.
- [significandBitCount](significandbitcount.md): The available number of fractional significand bits.
- [exponentBitCount](exponentbitcount.md): The number of bits used to represent the type’s exponent.
- [radix](radix.md): The radix, or base of exponentiation, for a floating-point type.
- [init(bitPattern:)](init%28bitpattern_%29.md): Creates a new value with the given bit pattern.
- [init(sign:exponentBitPattern:significandBitPattern:)](init%28sign_exponentbitpattern_significandbitpattern_%29.md): Creates a new instance from the specified sign and bit patterns.
- [Float.Exponent](exponent-swift.typealias.md): A type that can represent any written exponent.
- [Float.RawSignificand](rawsignificand.md): A type that represents the encoded significand of a value.
