> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uint64/init(_:)-6bhfg](https://developer.apple.com/documentation/swift/uint64/init(_:)-6bhfg)

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates an integer from the given floating-point value, rounding toward zero.

## Declaration

```swift
init(_ source: Float16)
```

## Parameters

- `source`: A floating-point value to convert to an integer. `source` must be representable in this type after rounding toward zero.

<a id="discussion"></a>

## Discussion

Any fractional part of the value passed as `source` is removed, rounding the value toward zero.

```swift
let x = Int(21.5)
// x == 21
let y = Int(-21.5)
// y == -21
```

If `source` is outside the bounds of this type after rounding toward zero, a runtime error may occur.

```swift
let z = UInt(-21.5)
// Error: ...the result would be less than UInt.min
```
