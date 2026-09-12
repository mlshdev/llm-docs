> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/int/init(truncatingifneeded:)](https://developer.apple.com/documentation/swift/int/init(truncatingifneeded:))

# init(truncatingIfNeeded:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new instance from the bit pattern of the given instance by sign-extending or truncating to fit this type.

## Declaration

```swift
init<T>(truncatingIfNeeded source: T) where T : BinaryInteger
```

## Parameters

- `source`: An integer to convert to this type.

<a id="discussion"></a>

## Discussion

When the bit width of `T` (the type of `source`) is equal to or greater than this type’s bit width, the result is the truncated least-significant bits of `source`. For example, when converting a 16-bit value to an 8-bit type, only the lower 8 bits of `source` are used.

```swift
let p: Int16 = -500
// 'p' has a binary representation of 11111110_00001100
let q = Int8(truncatingIfNeeded: p)
// q == 12
// 'q' has a binary representation of 00001100
```

When the bit width of `T` is less than this type’s bit width, the result is *sign-extended* to fill the remaining bits. That is, if `source` is negative, the result is padded with ones; otherwise, the result is padded with zeros.

```swift
let u: Int8 = 21
// 'u' has a binary representation of 00010101
let v = Int16(truncatingIfNeeded: u)
// v == 21
// 'v' has a binary representation of 00000000_00010101

let w: Int8 = -21
// 'w' has a binary representation of 11101011
let x = Int16(truncatingIfNeeded: w)
// x == -21
// 'x' has a binary representation of 11111111_11101011
let y = UInt16(truncatingIfNeeded: w)
// y == 65515
// 'y' has a binary representation of 11111111_11101011
```

## See Also

### Converting Integers

- [init(\_:)](init%28__%29-4ekvl.md): Conforms when `Self` conforms to `FixedWidthInteger`. Creates a new instance from the given integer.
- [init(exactly:)](init%28exactly_%29-b1dy.md): Conforms when `Self` conforms to `FixedWidthInteger`.
- [init(clamping:)](init%28clamping_%29.md): Creates a new instance with the representable value that’s closest to the given integer.
- [init(bitPattern:)](init%28bitpattern_%29-72037.md): Creates a new instance with the same memory representation as the given value.
- [init(exactly:)](init%28exactly_%29-177ax.md)
- [init(truncating:)](init%28truncating_%29.md)
