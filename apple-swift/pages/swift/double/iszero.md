> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/double/iszero](https://developer.apple.com/documentation/swift/double/iszero)

# isZero

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the instance is equal to zero.

## Declaration

```swift
var isZero: Bool { get }
```

<a id="discussion"></a>

## Discussion

The `isZero` property of a value `x` is `true` when `x` represents either `-0.0` or `+0.0`. `x.isZero` is equivalent to the following comparison: `x == 0.0`.

```swift
let x = -0.0
x.isZero        // true
x == 0.0        // true
```

## See Also

### Querying a Double’s State

- [isFinite](isfinite.md): A Boolean value indicating whether this instance is finite.
- [isInfinite](isinfinite.md): A Boolean value indicating whether the instance is infinite.
- [isNaN](isnan.md): A Boolean value indicating whether the instance is NaN (“not a number”).
- [isSignalingNaN](issignalingnan.md): A Boolean value indicating whether the instance is a signaling NaN.
- [isNormal](isnormal.md): A Boolean value indicating whether this instance is normal.
- [isSubnormal](issubnormal.md): A Boolean value indicating whether the instance is subnormal.
- [isCanonical](iscanonical.md): A Boolean value indicating whether the instance’s representation is in its canonical form.
- [floatingPointClass](floatingpointclass.md): The classification of this value.
