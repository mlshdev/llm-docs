> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float/isfinite](https://developer.apple.com/documentation/swift/float/isfinite)

# isFinite

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether this instance is finite.

## Declaration

```swift
var isFinite: Bool { get }
```

<a id="discussion"></a>

## Discussion

All values other than NaN and infinity are considered finite, whether normal or subnormal.  For NaN, both `isFinite` and `isInfinite` are false.

## See Also

### Querying a Float’s State

- [isZero](iszero.md): A Boolean value indicating whether the instance is equal to zero.
- [isInfinite](isinfinite.md): A Boolean value indicating whether the instance is infinite.
- [isNaN](isnan.md): A Boolean value indicating whether the instance is NaN (“not a number”).
- [isSignalingNaN](issignalingnan.md): A Boolean value indicating whether the instance is a signaling NaN.
- [isNormal](isnormal.md): A Boolean value indicating whether this instance is normal.
- [isSubnormal](issubnormal.md): A Boolean value indicating whether the instance is subnormal.
- [isCanonical](iscanonical.md): A Boolean value indicating whether the instance’s representation is in its canonical form.
- [floatingPointClass](floatingpointclass.md): The classification of this value.
