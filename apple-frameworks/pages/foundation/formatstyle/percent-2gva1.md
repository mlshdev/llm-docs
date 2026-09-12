> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/formatstyle/percent-2gva1](https://developer.apple.com/documentation/foundation/formatstyle/percent-2gva1)

# percent

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A style for formatting the Swift standard single-precision floating-point type as a percent representation.

## Declaration

```swift
static var percent: FloatingPointFormatStyle<Float>.Percent { get }
```

<a id="Discussion"></a>

## Discussion

Use this type property when the call point allows the use of [FloatingPointFormatStyle](../floatingpointformatstyle.md). You typically do this when calling the `formatted` methods of types that conform to [BinaryFloatingPoint](https://developer.apple.com/documentation/swift/binaryfloatingpoint).

## See Also

### Applying percentage styles for floating-point values

- [percent](percent-6cwuv.md): Conforms when `Self` is `FloatingPointFormatStyle<Double>.Percent`. A style for formatting the Swift standard single-precision floating-point type as a percent representation.
- [percent](percent-grss.md): Conforms when `Self` is `FloatingPointFormatStyle<Float16>.Percent`. A style for formatting 16-bit floating-point values as a percent representation.
- [FloatingPointFormatStyle.Percent](../floatingpointformatstyle/percent.md): Conforms when `Value` conforms to `BinaryFloatingPoint`. A format style that converts between floating-point percentage values and their textual representations.
