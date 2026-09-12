> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/double/isnormal](https://developer.apple.com/documentation/swift/double/isnormal)

# isNormal

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether this instance is normal.

## Declaration

```swift
var isNormal: Bool { get }
```

<a id="discussion"></a>

## Discussion

A *normal* value is a finite number that uses the full precision available to values of a type. Zero is neither a normal nor a subnormal number.

## See Also

### Querying a Double’s State

- [isZero](iszero.md): A Boolean value indicating whether the instance is equal to zero.
- [isFinite](isfinite.md): A Boolean value indicating whether this instance is finite.
- [isInfinite](isinfinite.md): A Boolean value indicating whether the instance is infinite.
- [isNaN](isnan.md): A Boolean value indicating whether the instance is NaN (“not a number”).
- [isSignalingNaN](issignalingnan.md): A Boolean value indicating whether the instance is a signaling NaN.
- [isSubnormal](issubnormal.md): A Boolean value indicating whether the instance is subnormal.
- [isCanonical](iscanonical.md): A Boolean value indicating whether the instance’s representation is in its canonical form.
- [floatingPointClass](floatingpointclass.md): The classification of this value.
