> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/formatstyle/number-4ttgp](https://developer.apple.com/documentation/foundation/formatstyle/number-4ttgp)

# number

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A style for formatting the Swift unsigned integer type.

## Declaration

```swift
static var number: IntegerFormatStyle<UInt> { get }
```

<a id="Discussion"></a>

## Discussion

Use this type property when the call point allows the use of [IntegerFormatStyle](../integerformatstyle.md). You typically do this when calling the `formatted` methods of types that conform to [BinaryInteger](https://developer.apple.com/documentation/swift/binaryinteger).

## See Also

### Applying numeric styles for integers

- [number](number-7fxvo.md): Conforms when `Self` is `IntegerFormatStyle<Int>`. A style for formatting the Swift default integer type.
- [number](number-5hzgj.md): Conforms when `Self` is `IntegerFormatStyle<Int8>`. A style for formatting 8-bit signed integers.
- [number](number-1o8fx.md): Conforms when `Self` is `IntegerFormatStyle<Int16>`. A style for formatting 16-bit signed integers.
- [number](number-4cj49.md): Conforms when `Self` is `IntegerFormatStyle<Int32>`. A style for formatting 32-bit signed integers.
- [number](number-3925i.md): Conforms when `Self` is `IntegerFormatStyle<Int64>`. A style for formatting 64-bit signed integers.
- [number](number-8fms6.md): Conforms when `Self` is `IntegerFormatStyle<UInt8>`. A style for formatting 8-bit unsigned integers.
- [number](number-fak0.md): Conforms when `Self` is `IntegerFormatStyle<UInt16>`. A style for formatting 16-bit unsigned integers.
- [number](number-13mra.md): Conforms when `Self` is `IntegerFormatStyle<UInt32>`. A style for formatting 32-bit unsigned integers.
- [number](number-iyry.md): Conforms when `Self` is `IntegerFormatStyle<UInt64>`. A style for formatting 64-bit unsigned integers.
- [IntegerFormatStyle](../integerformatstyle.md): A structure that converts between integer values and their textual representations.
