> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incurrencyamount/currencycode](https://developer.apple.com/documentation/intents/incurrencyamount/currencycode)

# currencyCode (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

The ISO 4217 currency code that applies to the monetary amount.

## Declaration

```swift
var currencyCode: String? { get }
```

<a id="Discussion"></a>

## Discussion

Use this value to determine the appropriate currency designator to apply to the value in the [amount](amount.md) property. To retrieve the list of available currency codes, call the [isoCurrencyCodes](../../foundation/nslocale/isocurrencycodes.md) method of the [NSLocale](../../foundation/nslocale.md) class.

## See Also

### Getting the Currency Information

- [amount](amount.md): The monetary amount associated with the currency.

# currencyCode (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

The ISO 4217 currency code that applies to the monetary amount.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * currencyCode;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * currencyCode;
```

<a id="Discussion"></a>

## Discussion

Use this value to determine the appropriate currency designator to apply to the value in the [amount](amount.md) property. To retrieve the list of available currency codes, call the [ISOCurrencyCodes](../../foundation/nslocale/isocurrencycodes.md) method of the [NSLocale](../../foundation/nslocale.md) class.

## See Also

### Getting the Currency Information

- [amount](amount.md): The monetary amount associated with the currency.
