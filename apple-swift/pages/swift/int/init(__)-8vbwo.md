> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/int/init(_:)-8vbwo](https://developer.apple.com/documentation/swift/int/init(_:)-8vbwo)

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an integer from the given floating-point value, rounding toward zero.

## Declaration

```swift
init(_ source: Double)
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

## See Also

### Converting Floating-Point Values

- [init(\_:)](init%28__%29-6gt9z.md)
- [init(\_:)](init%28__%29-2oscb.md): Creates an integer from the given floating-point value, rounding toward zero.
- [init(\_:)](init%28__%29-3huv0.md): Creates an integer from the given floating-point value, rounding toward zero.
- [init(\_:)](init%28__%29-66i0w.md): Creates an integer from the given floating-point value, rounding toward zero.
- [init(\_:)](init%28__%29-5q6q5.md)
