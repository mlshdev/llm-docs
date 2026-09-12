> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float/init(_:)-ussz](https://developer.apple.com/documentation/swift/float/init(_:)-ussz)

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a new instance that approximates the given value.

## Declaration

```swift
init(_ other: Float16)
```

## Parameters

- `other`: The value to use for the new instance.

<a id="discussion"></a>

## Discussion

The value of `other` is rounded to a representable value, if necessary. A NaN passed as `other` results in another NaN, with a signaling NaN value converted to quiet NaN.

```swift
let x: Float16 = 21.25
let y = Float(x)
// y == 21.25

let z = Float(Float16.nan)
// z.isNaN == true
```

## See Also

### Converting Floating-Point Values

- [init(\_:)](init%28__%29-1488f.md): Creates a new instance from the given value, rounded to the closest possible representation.
- [init(\_:)](init%28__%29-1oh9p.md): Conforms when `RawSignificand` conforms to `FixedWidthInteger`. Creates a new value, rounded to the closest possible representation.
- [init(\_:)](init%28__%29-1kp2p.md): Creates a new instance that approximates the given value.
- [init(\_:)](init%28__%29-975tv.md): Creates a new instance initialized to the given value.
- [init(\_:)](init%28__%29-11orc.md): Creates a new instance that approximates the given value.
- [init(\_:)](init%28__%29-5soww.md)
- [init(signOf:magnitudeOf:)](init%28signof_magnitudeof_%29.md): Creates a new floating-point value using the sign of one value and the magnitude of another.
- [init(sign:exponent:significand:)](init%28sign_exponent_significand_%29.md): Creates a new value from the given sign, exponent, and significand.
- [init(truncating:)](init%28truncating_%29.md)
