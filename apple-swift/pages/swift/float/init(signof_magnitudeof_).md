> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float/init(signof:magnitudeof:)](https://developer.apple.com/documentation/swift/float/init(signof:magnitudeof:))

# init(signOf:magnitudeOf:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new floating-point value using the sign of one value and the magnitude of another.

## Declaration

```swift
init(signOf sign: Float, magnitudeOf mag: Float)
```

<a id="discussion"></a>

## Discussion

The following example uses this initializer to create a new `Double` instance with the sign of `a` and the magnitude of `b`:

```swift
let a = -21.5
let b = 305.15
let c = Double(signOf: a, magnitudeOf: b)
print(c)
// Prints "-305.15"
```

This initializer implements the IEEE 754 `copysign` operation.

## See Also

### Converting Floating-Point Values

- [init(\_:)](init%28__%29-1488f.md): Creates a new instance from the given value, rounded to the closest possible representation.
- [init(\_:)](init%28__%29-1oh9p.md): Conforms when `RawSignificand` conforms to `FixedWidthInteger`. Creates a new value, rounded to the closest possible representation.
- [init(\_:)](init%28__%29-1kp2p.md): Creates a new instance that approximates the given value.
- [init(\_:)](init%28__%29-975tv.md): Creates a new instance initialized to the given value.
- [init(\_:)](init%28__%29-11orc.md): Creates a new instance that approximates the given value.
- [init(\_:)](init%28__%29-5soww.md)
- [init(\_:)](init%28__%29-ussz.md): Creates a new instance that approximates the given value.
- [init(sign:exponent:significand:)](init%28sign_exponent_significand_%29.md): Creates a new value from the given sign, exponent, and significand.
- [init(truncating:)](init%28truncating_%29.md)
