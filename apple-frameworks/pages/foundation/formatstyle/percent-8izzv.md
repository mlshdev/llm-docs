> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/formatstyle/percent-8izzv](https://developer.apple.com/documentation/foundation/formatstyle/percent-8izzv)

# percent

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A style for formatting 8-bit unsigned integers as a percent representation.

## Declaration

```swift
static var percent: IntegerFormatStyle<UInt8>.Percent { get }
```

<a id="Discussion"></a>

## Discussion

Use this type property when the call point allows the use of [IntegerFormatStyle](../integerformatstyle.md). You typically do this when calling the `formatted` methods of types that conform to [BinaryInteger](https://developer.apple.com/documentation/swift/binaryinteger).

## See Also

### Applying percentage styles for integers

- [percent](percent-cl9k.md): Conforms when `Self` is `IntegerFormatStyle<Int>.Percent`. A style for formatting signed integer types in Swift as a percent representation.
- [percent](percent-9pj79.md): Conforms when `Self` is `IntegerFormatStyle<UInt>.Percent`. A style for formatting signed integer types in Swift as a percent representation.
- [percent](percent-7r4rl.md): Conforms when `Self` is `IntegerFormatStyle<Int8>.Percent`. A style for formatting 8-bit signed integers as a percent representation.
- [percent](percent-3qjzh.md): Conforms when `Self` is `IntegerFormatStyle<Int16>.Percent`. A style for formatting 16-bit signed integers as a percent representation.
- [percent](percent-1f0q.md): Conforms when `Self` is `IntegerFormatStyle<Int32>.Percent`. A style for formatting 32-bit signed integers as a percent representation.
- [percent](percent-934se.md): Conforms when `Self` is `IntegerFormatStyle<Int64>.Percent`. A style for formatting 64-bit signed integers as a percent representation.
- [percent](percent-4kdme.md): Conforms when `Self` is `IntegerFormatStyle<UInt16>.Percent`. A style for formatting 16-bit unsigned integers as a percent representation.
- [percent](percent-2f11j.md): Conforms when `Self` is `IntegerFormatStyle<UInt32>.Percent`. A style for formatting 32-bit unsigned integers as a percent representation.
- [percent](percent-8bxla.md): Conforms when `Self` is `IntegerFormatStyle<UInt64>.Percent`. A style for formatting 64-bit unsigned integers as a percent representation.
- [IntegerFormatStyle.Percent](../integerformatstyle/percent.md): Conforms when `Value` conforms to `BinaryInteger`. A format style that converts between integer percentage values and their textual representations.
