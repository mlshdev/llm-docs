> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float/init(_:)-975tv](https://developer.apple.com/documentation/swift/float/init(_:)-975tv)

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new instance initialized to the given value.

## Declaration

```swift
init(_ other: Float)
```

## Parameters

- `other`: The value to use for the new instance.

<a id="discussion"></a>

## Discussion

The value of `other` is represented exactly by the new instance. A NaN passed as `other` results in another NaN, with a signaling NaN value converted to quiet NaN.

```swift
let x: Float = 21.25
let y = Float(x)
// y == 21.25

let z = Float(Float.nan)
// z.isNaN == true
```

## See Also

### Converting Floating-Point Values

- [init(\_:)](init%28__%29-1488f.md): Creates a new instance from the given value, rounded to the closest possible representation.
- [init(\_:)](init%28__%29-1oh9p.md): Conforms when `RawSignificand` conforms to `FixedWidthInteger`. Creates a new value, rounded to the closest possible representation.
- [init(\_:)](init%28__%29-1kp2p.md): Creates a new instance that approximates the given value.
- [init(\_:)](init%28__%29-11orc.md): Creates a new instance that approximates the given value.
- [init(\_:)](init%28__%29-5soww.md)
- [init(\_:)](init%28__%29-ussz.md): Creates a new instance that approximates the given value.
- [init(signOf:magnitudeOf:)](init%28signof_magnitudeof_%29.md): Creates a new floating-point value using the sign of one value and the magnitude of another.
- [init(sign:exponent:significand:)](init%28sign_exponent_significand_%29.md): Creates a new value from the given sign, exponent, and significand.
- [init(truncating:)](init%28truncating_%29.md)
