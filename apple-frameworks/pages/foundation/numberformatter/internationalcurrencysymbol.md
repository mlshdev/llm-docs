> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/numberformatter/internationalcurrencysymbol](https://developer.apple.com/documentation/foundation/numberformatter/internationalcurrencysymbol)

# internationalCurrencySymbol (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The international currency symbol used by the receiver.

## Declaration

```swift
var internationalCurrencySymbol: String! { get set }
```

<a id="Discussion"></a>

## Discussion

A region typically has a local currency symbol and an international currency symbol. The local symbol is used within the region, while the international currency symbol is used in international contexts to specify that region’s currency unambiguously. The international currency symbol is often represented by a Unicode code point.

## See Also

### Configuring the Format of Currency

- [currencySymbol](currencysymbol.md): The string used by the receiver as a local currency symbol.
- [currencyCode](currencycode.md): The receiver’s currency code.
- [currencyGroupingSeparator](currencygroupingseparator.md): The currency grouping separator for the receiver.

# internationalCurrencySymbol (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The international currency symbol used by the receiver.

## Declaration

```objectivec
@property (copy, null_resettable) NSString * internationalCurrencySymbol;
```

<a id="Discussion"></a>

## Discussion

A region typically has a local currency symbol and an international currency symbol. The local symbol is used within the region, while the international currency symbol is used in international contexts to specify that region’s currency unambiguously. The international currency symbol is often represented by a Unicode code point.

## See Also

### Configuring the Format of Currency

- [currencySymbol](currencysymbol.md): The string used by the receiver as a local currency symbol.
- [currencyCode](currencycode.md): The receiver’s currency code.
- [currencyGroupingSeparator](currencygroupingseparator.md): The currency grouping separator for the receiver.
