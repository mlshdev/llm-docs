> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/floatingpoint/init(_:)-2xwlo](https://developer.apple.com/documentation/swift/floatingpoint/init(_:)-2xwlo)

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new value, rounded to the closest possible representation.

## Declaration

```swift
init(_ value: Int)
```

## Parameters

- `value`: The integer to convert to a floating-point value.

<a id="discussion"></a>

## Discussion

If two representable values are equally close, the result is the value with more trailing zeros in its significand bit pattern.

## Default Implementations

### BinaryFloatingPoint Implementations

- [init(\_:)](../binaryfloatingpoint/init%28__%29-17tah.md): Creates a new instance from the given value, rounded to the closest possible representation.
- [init(\_:)](../binaryfloatingpoint/init%28__%29-5p0og.md): Conforms when `RawSignificand` conforms to `FixedWidthInteger`. Creates a new value, rounded to the closest possible representation.
