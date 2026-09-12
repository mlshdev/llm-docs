> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float/issubnormal](https://developer.apple.com/documentation/swift/float/issubnormal)

# isSubnormal

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the instance is subnormal.

## Declaration

```swift
var isSubnormal: Bool { get }
```

<a id="discussion"></a>

## Discussion

A *subnormal* value is a nonzero number that has a lesser magnitude than the smallest normal number. Subnormal values don’t use the full precision available to values of a type.

Zero is neither a normal nor a subnormal number. Subnormal numbers are often called *denormal* or *denormalized*—these are different names for the same concept.

## See Also

### Querying a Float’s State

- [isZero](iszero.md): A Boolean value indicating whether the instance is equal to zero.
- [isFinite](isfinite.md): A Boolean value indicating whether this instance is finite.
- [isInfinite](isinfinite.md): A Boolean value indicating whether the instance is infinite.
- [isNaN](isnan.md): A Boolean value indicating whether the instance is NaN (“not a number”).
- [isSignalingNaN](issignalingnan.md): A Boolean value indicating whether the instance is a signaling NaN.
- [isNormal](isnormal.md): A Boolean value indicating whether this instance is normal.
- [isCanonical](iscanonical.md): A Boolean value indicating whether the instance’s representation is in its canonical form.
- [floatingPointClass](floatingpointclass.md): The classification of this value.
