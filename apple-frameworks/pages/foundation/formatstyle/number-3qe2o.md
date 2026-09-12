> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/formatstyle/number-3qe2o](https://developer.apple.com/documentation/foundation/formatstyle/number-3qe2o)

# number

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A style for formatting 16-bit floating-point values.

## Declaration

```swift
static var number: FloatingPointFormatStyle<Float16> { get }
```

<a id="Discussion"></a>

## Discussion

Use this type property when the call point allows the use of [FloatingPointFormatStyle](../floatingpointformatstyle.md). You typically do this when calling the `formatted` methods of types that conform to [BinaryFloatingPoint](https://developer.apple.com/documentation/swift/binaryfloatingpoint).

## See Also

### Applying numeric styles for floating-point values

- [number](number-432x3.md): Conforms when `Self` is `FloatingPointFormatStyle<Float>`. A style for formatting the Swift standard single-precision floating-point type.
- [number](number-8c8rj.md): Conforms when `Self` is `FloatingPointFormatStyle<Double>`. A style for formatting the Swift standard double-precision floating-point type.
- [FloatingPointFormatStyle](../floatingpointformatstyle.md): A structure that converts between floating-point values and their textual representations.
