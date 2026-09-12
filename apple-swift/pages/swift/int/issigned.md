> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/int/issigned](https://developer.apple.com/documentation/swift/int/issigned)

# isSigned

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether this type is a signed integer type.

## Declaration

```swift
static var isSigned: Bool { get }
```

<a id="discussion"></a>

## Discussion

This property is always `true` for signed integer types.

## See Also

### Accessing Numeric Constants

- [zero](zero.md): Conforms when `Self` conforms to `ExpressibleByIntegerLiteral`. The zero value.
- [min](min.md): Conforms when `Self` conforms to `FixedWidthInteger`. The minimum representable integer in this type.
- [max](max.md): Conforms when `Self` conforms to `FixedWidthInteger`. The maximum representable integer in this type.
