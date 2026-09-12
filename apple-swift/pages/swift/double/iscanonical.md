> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/double/iscanonical](https://developer.apple.com/documentation/swift/double/iscanonical)

# isCanonical

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the instance’s representation is in its canonical form.

## Declaration

```swift
var isCanonical: Bool { get }
```

<a id="discussion"></a>

## Discussion

The [IEEE 754 specification](http://ieeexplore.ieee.org/servlet/opac?punumber=4610933) defines a *canonical*, or preferred, encoding of a floating-point value. On platforms that fully support IEEE 754, every `Float` or `Double` value is canonical, but non-canonical values can exist on other platforms or for other types. Some examples:

- On platforms that flush subnormal numbers to zero (such as armv7 with the default floating-point environment), Swift interprets subnormal `Float` and `Double` values as non-canonical zeros. (In Swift 5.1 and earlier, `isCanonical` is `true` for these values, which is the incorrect value.)
- On i386 and x86_64, `Float80` has a number of non-canonical encodings. “Pseudo-NaNs”, “pseudo-infinities”, and “unnormals” are interpreted as non-canonical NaN encodings. “Pseudo-denormals” are interpreted as non-canonical encodings of subnormal values.
- Decimal floating-point types admit a large number of non-canonical encodings. Consult the IEEE 754 standard for additional details.

## See Also

### Querying a Double’s State

- [isZero](iszero.md): A Boolean value indicating whether the instance is equal to zero.
- [isFinite](isfinite.md): A Boolean value indicating whether this instance is finite.
- [isInfinite](isinfinite.md): A Boolean value indicating whether the instance is infinite.
- [isNaN](isnan.md): A Boolean value indicating whether the instance is NaN (“not a number”).
- [isSignalingNaN](issignalingnan.md): A Boolean value indicating whether the instance is a signaling NaN.
- [isNormal](isnormal.md): A Boolean value indicating whether this instance is normal.
- [isSubnormal](issubnormal.md): A Boolean value indicating whether the instance is subnormal.
- [floatingPointClass](floatingpointclass.md): The classification of this value.
