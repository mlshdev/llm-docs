> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inridefarelineitem/currencycode

# currencyCode (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The ISO 4217 currency code that applies to the price information.

## Declaration

```swift
var currencyCode: String! { get }
```

<a id="Discussion"></a>

## Discussion

Use this value to determine the appropriate currency designator to apply to the value in the [price](price.md) property. To retrieve the list of available currency codes, call the [isoCurrencyCodes](../../foundation/nslocale/isocurrencycodes.md) method of the [NSLocale](../../foundation/nslocale.md) class.

## See Also

### Getting the Line Item Information

- [title](title.md): The localized string containing a description of the charge.
- [price](price.md): The cost value of the line item.

# currencyCode (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The ISO 4217 currency code that applies to the price information.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * currencyCode;
```

<a id="Discussion"></a>

## Discussion

Use this value to determine the appropriate currency designator to apply to the value in the [price](price.md) property. To retrieve the list of available currency codes, call the [ISOCurrencyCodes](../../foundation/nslocale/isocurrencycodes.md) method of the [NSLocale](../../foundation/nslocale.md) class.

## See Also

### Getting the Line Item Information

- [title](title.md): The localized string containing a description of the charge.
- [price](price.md): The cost value of the line item.
