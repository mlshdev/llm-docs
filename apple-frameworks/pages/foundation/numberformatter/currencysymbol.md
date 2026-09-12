> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/numberformatter/currencysymbol](https://developer.apple.com/documentation/foundation/numberformatter/currencysymbol)

# currencySymbol (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The string used by the receiver as a local currency symbol.

## Declaration

```swift
var currencySymbol: String! { get set }
```

<a id="Discussion"></a>

## Discussion

A region typically has a local currency symbol and an international currency symbol. The local symbol is used within the region, while the international currency symbol is used in international contexts to specify that region’s currency unambiguously. The local currency symbol is often represented by a Unicode code point.

## See Also

### Configuring the Format of Currency

- [currencyCode](currencycode.md): The receiver’s currency code.
- [internationalCurrencySymbol](internationalcurrencysymbol.md): The international currency symbol used by the receiver.
- [currencyGroupingSeparator](currencygroupingseparator.md): The currency grouping separator for the receiver.

# currencySymbol (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The string used by the receiver as a local currency symbol.

## Declaration

```objectivec
@property (copy, null_resettable) NSString * currencySymbol;
```

<a id="Discussion"></a>

## Discussion

A region typically has a local currency symbol and an international currency symbol. The local symbol is used within the region, while the international currency symbol is used in international contexts to specify that region’s currency unambiguously. The local currency symbol is often represented by a Unicode code point.

## See Also

### Configuring the Format of Currency

- [currencyCode](currencycode.md): The receiver’s currency code.
- [internationalCurrencySymbol](internationalcurrencysymbol.md): The international currency symbol used by the receiver.
- [currencyGroupingSeparator](currencygroupingseparator.md): The currency grouping separator for the receiver.
