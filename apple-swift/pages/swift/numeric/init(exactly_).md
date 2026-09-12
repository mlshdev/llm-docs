> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/numeric/init(exactly:)](https://developer.apple.com/documentation/swift/numeric/init(exactly:))

# init(exactly:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new instance from the given integer, if it can be represented exactly.

## Declaration

```swift
init?<T>(exactly source: T) where T : BinaryInteger
```

## Parameters

- `source`: A value to convert to this type.

<a id="discussion"></a>

## Discussion

If the value passed as `source` is not representable exactly, the result is `nil`. In the following example, the constant `x` is successfully created from a value of `100`, while the attempt to initialize the constant `y` from `1_000` fails because the `Int8` type can represent `127` at maximum:

```swift
let x = Int8(exactly: 100)
// x == Optional(100)
let y = Int8(exactly: 1_000)
// y == nil
```

## Default Implementations

### BinaryFloatingPoint Implementations

- [init(exactly:)](../binaryfloatingpoint/init%28exactly_%29-6fobm.md): Creates a new instance from the given value, if it can be represented exactly.
- [init(exactly:)](../binaryfloatingpoint/init%28exactly_%29-9lyid.md): Conforms when `RawSignificand` conforms to `FixedWidthInteger`. Creates a new value, if the given integer can be represented exactly.

### Numeric Implementations

- [init(exactly:)](init%28exactly_%29-1dg3p.md): Conforms when `Self` conforms to `FixedWidthInteger`.
- [init(exactly:)](init%28exactly_%29-8briw.md)
- [init(exactly:)](init%28exactly_%29-uz93.md): Conforms when `Self` conforms to `FixedWidthInteger`.
