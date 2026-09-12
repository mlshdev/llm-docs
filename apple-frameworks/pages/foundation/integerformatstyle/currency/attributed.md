> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/integerformatstyle/currency/attributed](https://developer.apple.com/documentation/foundation/integerformatstyle/currency/attributed)

# attributed

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An attributed format style based on the integer currency format style.

## Declaration

```swift
var attributed: IntegerFormatStyle<Value>.Attributed { get }
```

<a id="Discussion"></a>

## Discussion

Use this modifier to create an [IntegerFormatStyle.Attributed](../attributed-swift.struct.md) instance, which formats values as [AttributedString](../../attributedstring.md) instances. These attributed strings contain attributes from the [AttributeScopes.FoundationAttributes.NumberFormatAttributes](../../attributescopes/foundationattributes/numberformatattributes.md) attribute scope. Use these attributes to determine which runs of the attributed string represent different parts of the formatted value.

## See Also

### Creating attributed strings

- [IntegerFormatStyle.Attributed](../attributed-swift.struct.md): Conforms when `Value` conforms to `BinaryInteger`. A format style that converts integers into attributed strings.
