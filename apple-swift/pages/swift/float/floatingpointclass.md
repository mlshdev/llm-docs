> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float/floatingpointclass](https://developer.apple.com/documentation/swift/float/floatingpointclass)

# floatingPointClass

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The classification of this value.

## Declaration

```swift
var floatingPointClass: FloatingPointClassification { get }
```

<a id="discussion"></a>

## Discussion

A value’s `floatingPointClass` property describes its “class” as described by the [IEEE 754 specification](http://ieeexplore.ieee.org/servlet/opac?punumber=4610933).

## See Also

### Querying a Float’s State

- [isZero](iszero.md): A Boolean value indicating whether the instance is equal to zero.
- [isFinite](isfinite.md): A Boolean value indicating whether this instance is finite.
- [isInfinite](isinfinite.md): A Boolean value indicating whether the instance is infinite.
- [isNaN](isnan.md): A Boolean value indicating whether the instance is NaN (“not a number”).
- [isSignalingNaN](issignalingnan.md): A Boolean value indicating whether the instance is a signaling NaN.
- [isNormal](isnormal.md): A Boolean value indicating whether this instance is normal.
- [isSubnormal](issubnormal.md): A Boolean value indicating whether the instance is subnormal.
- [isCanonical](iscanonical.md): A Boolean value indicating whether the instance’s representation is in its canonical form.
