> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpricerange/currencycode](https://developer.apple.com/documentation/intents/inpricerange/currencycode)

# currencyCode (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The ISO 4217 currency code that applies to the price information.

## Declaration

```swift
var currencyCode: String { get }
```

<a id="Discussion"></a>

## Discussion

To retrieve the list of available currency codes, call the [isoCurrencyCodes](../../foundation/nslocale/isocurrencycodes.md) method of the [NSLocale](../../foundation/nslocale.md) class.

## See Also

### Getting the Price Range Information

- [minimumPrice](minimumprice.md): The minimum price.
- [maximumPrice](maximumprice.md): The maximum price.

# currencyCode (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The ISO 4217 currency code that applies to the price information.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * currencyCode;
```

```objectivec
@property (atomic, readonly) NSString * currencyCode;
```

<a id="Discussion"></a>

## Discussion

To retrieve the list of available currency codes, call the [ISOCurrencyCodes](../../foundation/nslocale/isocurrencycodes.md) method of the [NSLocale](../../foundation/nslocale.md) class.

## See Also

### Getting the Price Range Information

- [minimumPrice](minimumprice.md): The minimum price.
- [maximumPrice](maximumprice.md): The maximum price.
