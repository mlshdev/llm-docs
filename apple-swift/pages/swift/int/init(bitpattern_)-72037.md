> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/int/init(bitpattern:)-72037](https://developer.apple.com/documentation/swift/int/init(bitpattern:)-72037)

# init(bitPattern:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new instance with the same memory representation as the given value.

## Declaration

```swift
init(bitPattern x: UInt)
```

## Parameters

- `x`: A value to use as the source of the new instance’s binary representation.

<a id="discussion"></a>

## Discussion

This initializer does not perform any range or overflow checking. The resulting instance may not have the same numeric value as `bitPattern`—it is only guaranteed to use the same pattern of bits in its binary representation.

## See Also

### Converting Integers

- [init(\_:)](init%28__%29-4ekvl.md): Conforms when `Self` conforms to `FixedWidthInteger`. Creates a new instance from the given integer.
- [init(exactly:)](init%28exactly_%29-b1dy.md): Conforms when `Self` conforms to `FixedWidthInteger`.
- [init(clamping:)](init%28clamping_%29.md): Creates a new instance with the representable value that’s closest to the given integer.
- [init(truncatingIfNeeded:)](init%28truncatingifneeded_%29.md): Creates a new instance from the bit pattern of the given instance by sign-extending or truncating to fit this type.
- [init(exactly:)](init%28exactly_%29-177ax.md)
- [init(truncating:)](init%28truncating_%29.md)
