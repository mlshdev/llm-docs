> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float80/iszero](https://developer.apple.com/documentation/swift/float80/iszero)

# isZero

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

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
