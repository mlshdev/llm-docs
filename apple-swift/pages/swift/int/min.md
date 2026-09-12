> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/int/min](https://developer.apple.com/documentation/swift/int/min)

# min

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The minimum representable integer in this type.

## Declaration

```swift
static var min: Self { get }
```

<a id="discussion"></a>

## Discussion

For signed integer types, this value is `-(2 ** (bitWidth - 1))`, where `**` is exponentiation.

## See Also

### Accessing Numeric Constants

- [zero](zero.md): Conforms when `Self` conforms to `ExpressibleByIntegerLiteral`. The zero value.
- [max](max.md): Conforms when `Self` conforms to `FixedWidthInteger`. The maximum representable integer in this type.
- [isSigned](issigned.md): A Boolean value indicating whether this type is a signed integer type.
