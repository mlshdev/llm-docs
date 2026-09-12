> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/binaryinteger/init(_:)-2ln0u](https://developer.apple.com/documentation/swift/binaryinteger/init(_:)-2ln0u)

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an integer from the given floating-point value, rounding toward zero.

## Declaration

```swift
init<T>(_ source: T) where T : BinaryFloatingPoint
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

## Default Implementations

### BinaryInteger Implementations

- [init(\_:)](init%28__%29-3cx61.md): Creates a new integer value from the given string.
- [init(\_:)](init%28__%29-5yrn0.md): Conforms when `Self` conforms to `FixedWidthInteger`. Creates a new instance from the given integer.
- [init(\_:)](init%28__%29-62cdc.md)
- [init(\_:)](init%28__%29-6u4mr.md): Conforms when `Self` conforms to `FixedWidthInteger`. Creates a new instance from the given integer.

### FixedWidthInteger Implementations

- [init(\_:)](../fixedwidthinteger/init%28__%29.md): Convert from an Backtrace.Address.
