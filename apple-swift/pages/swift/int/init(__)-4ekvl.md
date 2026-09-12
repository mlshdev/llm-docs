> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/int/init(_:)-4ekvl](https://developer.apple.com/documentation/swift/int/init(_:)-4ekvl)

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new instance from the given integer.

## Declaration

```swift
init<T>(_ source: T) where T : BinaryInteger
```

## Parameters

- `source`: A value to convert to this type of integer. The value passed as `source` must be representable in this type.

<a id="discussion"></a>

## Discussion

Use this initializer to convert from another integer type when you know the value is within the bounds of this type. Passing a value that can’t be represented in this type results in a runtime error.

In the following example, the constant `y` is successfully created from `x`, an `Int` instance with a value of `100`. Because the `Int8` type can represent `127` at maximum, the attempt to create `z` with a value of `1000` results in a runtime error.

```swift
let x = 100
let y = Int8(x)
// y == 100
let z = Int8(x * 10)
// Error: Not enough bits to represent the given value
```

## See Also

### Converting Integers

- [init(exactly:)](init%28exactly_%29-b1dy.md): Conforms when `Self` conforms to `FixedWidthInteger`.
- [init(clamping:)](init%28clamping_%29.md): Creates a new instance with the representable value that’s closest to the given integer.
- [init(truncatingIfNeeded:)](init%28truncatingifneeded_%29.md): Creates a new instance from the bit pattern of the given instance by sign-extending or truncating to fit this type.
- [init(bitPattern:)](init%28bitpattern_%29-72037.md): Creates a new instance with the same memory representation as the given value.
- [init(exactly:)](init%28exactly_%29-177ax.md)
- [init(truncating:)](init%28truncating_%29.md)
