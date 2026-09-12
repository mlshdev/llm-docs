> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/numberformatter/currencycode](https://developer.apple.com/documentation/foundation/numberformatter/currencycode)

# currencyCode (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The receiver’s currency code.

## Declaration

```swift
var currencyCode: String! { get set }
```

<a id="Discussion"></a>

## Discussion

A currency code is a three-letter code that is, in most cases, composed of a region’s two-character Internet region code plus an extra character to denote the currency unit. For example, the currency code for the Australian dollar is “AUD”. Currency codes are based on the ISO 4217 standard.

## See Also

### Configuring the Format of Currency

- [currencySymbol](currencysymbol.md): The string used by the receiver as a local currency symbol.
- [internationalCurrencySymbol](internationalcurrencysymbol.md): The international currency symbol used by the receiver.
- [currencyGroupingSeparator](currencygroupingseparator.md): The currency grouping separator for the receiver.

# currencyCode (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The receiver’s currency code.

## Declaration

```objectivec
@property (copy, null_resettable) NSString * currencyCode;
```

<a id="Discussion"></a>

## Discussion

A currency code is a three-letter code that is, in most cases, composed of a region’s two-character Internet region code plus an extra character to denote the currency unit. For example, the currency code for the Australian dollar is “AUD”. Currency codes are based on the ISO 4217 standard.

## See Also

### Configuring the Format of Currency

- [currencySymbol](currencysymbol.md): The string used by the receiver as a local currency symbol.
- [internationalCurrencySymbol](internationalcurrencysymbol.md): The international currency symbol used by the receiver.
- [currencyGroupingSeparator](currencygroupingseparator.md): The currency grouping separator for the receiver.
