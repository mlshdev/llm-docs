> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/decimal/formatstyle/attributed-swift.struct](https://developer.apple.com/documentation/foundation/decimal/formatstyle/attributed-swift.struct)

# Decimal.FormatStyle.Attributed

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A format style that converts integers into attributed strings.

## Declaration

```swift
struct Attributed
```

<a id="overview"></a>

## Overview

Use the [attributed](../../integerformatstyle/attributed-swift.property.md) modifier on a [FloatingPointFormatStyle](../../floatingpointformatstyle.md) to create a format style of this type.

The attributed strings that this format style creates contain attributes from the [AttributeScopes.FoundationAttributes.NumberFormatAttributes](../../attributescopes/foundationattributes/numberformatattributes.md) attribute scope. Use these attributes to determine which runs of the attributed string represent different parts of the formatted value.

The following example finds runs of the attributed string that represent different parts of a formatted currency, and adds additional attributes like [foregroundColor](../../attributescopes/swiftuiattributes/foregroundcolor.md) and [inlinePresentationIntent](../../attributescopes/foundationattributes/inlinepresentationintent.md).

```swift
func attributedPrice(price: Decimal) -> AttributedString {
    var attributedPrice = price.formatted(
        .currency(code: "USD")
        .attributed)

    for run in attributedPrice.runs {
        if run.attributes.numberSymbol == .currency ||
            run.attributes.numberSymbol == .decimalSeparator  {
            attributedPrice[run.range].foregroundColor = .red
        }
        if run.attributes.numberPart == .integer ||
            run.attributes.numberPart == .fraction {
            attributedPrice[run.range].inlinePresentationIntent = [.stronglyEmphasized]
        }
    }
    return attributedPrice
}
```

User interface frameworks like SwiftUI can use these attributes when presenting the attributed string, as seen here:

![The currency value $1,234.56, with the dollar sign and decimal separator in red, and the digits in bold.](https://developer.apple.com/images/com.apple.foundation/media-4099417@2x.png)

## Topics

### Formatting a decimal value

- [format(\_:)](attributed-swift.struct/format%28__%29.md): Formats a decimal value, using this style.

### Modifying the locale

- [locale(\_:)](attributed-swift.struct/locale%28__%29.md): Modifies the format style to use the specified locale.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [FormatStyle](../../formatstyle.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating attributed strings

- [attributed](attributed-swift.property.md): An attributed format style based on the decimal format style.
