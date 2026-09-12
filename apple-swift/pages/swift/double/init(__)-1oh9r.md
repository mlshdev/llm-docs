> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/double/init(_:)-1oh9r](https://developer.apple.com/documentation/swift/double/init(_:)-1oh9r)

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new value, rounded to the closest possible representation.

## Declaration

```swift
init<Source>(_ value: Source) where Source : BinaryInteger
```

## Parameters

- `value`: The integer to convert to a floating-point value.

<a id="discussion"></a>

## Discussion

If two representable values are equally close, the result is the value with more trailing zeros in its significand bit pattern.

## See Also

### Converting Floating-Point Values

- [init(\_:)](init%28__%29-1488d.md): Creates a new instance from the given value, rounded to the closest possible representation.
- [init(\_:)](init%28__%29-o1k9.md): Creates a new instance initialized to the given value.
- [init(\_:)](init%28__%29-5h7qh.md): Creates a new instance that approximates the given value.
- [init(\_:)](init%28__%29-aeox.md): Creates a new instance that approximates the given value.
- [init(\_:)](init%28__%29-9z7ob.md): Creates a new instance that approximates the given value.
- [init(\_:)](init%28__%29-7ag2w.md)
- [init(sign:exponent:significand:)](init%28sign_exponent_significand_%29.md): Creates a new value from the given sign, exponent, and significand.
- [init(signOf:magnitudeOf:)](init%28signof_magnitudeof_%29.md): Creates a new floating-point value using the sign of one value and the magnitude of another.
- [init(truncating:)](init%28truncating_%29.md)
