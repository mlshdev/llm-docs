> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/double/init(exactly:)-50ofc](https://developer.apple.com/documentation/swift/double/init(exactly:)-50ofc)

# init(exactly:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a new instance initialized to the given value, if it can be represented without rounding.

## Declaration

```swift
init?(exactly other: Float16)
```

## Parameters

- `other`: The value to use for the new instance.

<a id="discussion"></a>

## Discussion

If `other` can’t be represented as an instance of `Double` without rounding, the result of this initializer is `nil`. In particular, passing NaN as `other` always results in `nil`.

```swift
let x: Float16 = 21.25
let y = Double(exactly: x)
// y == Optional.some(21.25)

let z = Double(exactly: Float16.nan)
// z == nil
```

## See Also

### Converting with No Loss of Precision

- [init(exactly:)](init%28exactly_%29-8esra.md): Creates a new instance from the given value, if it can be represented exactly.
- [init(exactly:)](init%28exactly_%29-1h1oc.md): Conforms when `RawSignificand` conforms to `FixedWidthInteger`. Creates a new value, if the given integer can be represented exactly.
- [init(exactly:)](init%28exactly_%29-2uexo.md): Creates a new value, if the given integer can be represented exactly.
- [init(exactly:)](init%28exactly_%29-2l6p1.md): Creates a new instance initialized to the given value, if it can be represented without rounding.
- [init(exactly:)](init%28exactly_%29-7cl0t.md): Creates a new instance initialized to the given value, if it can be represented without rounding.
- [init(exactly:)](init%28exactly_%29-63925.md): Creates a new instance initialized to the given value, if it can be represented without rounding.
- [init(exactly:)](init%28exactly_%29-8e00y.md)
