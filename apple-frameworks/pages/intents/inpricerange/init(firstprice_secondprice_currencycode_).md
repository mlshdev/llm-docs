> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpricerange/init(firstprice:secondprice:currencycode:)](https://developer.apple.com/documentation/intents/inpricerange/init(firstprice:secondprice:currencycode:))

# init(firstPrice:secondPrice:currencyCode:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Initializes the object with the specified range of prices.

## Declaration

```swift
init(firstPrice: NSDecimalNumber, secondPrice: NSDecimalNumber, currencyCode: String)
```

## Parameters

- `firstPrice`: The first price. This parameter must not be `nil`.
- `secondPrice`: The second price. This parameter must not be `nil`.
- `currencyCode`: The ISO 4217 currency code to apply to the price information. You can get a list of possible currency codes using the [isoCurrencyCodes](../../foundation/nslocale/isocurrencycodes.md) method of [NSLocale](../../foundation/nslocale.md). For example, the string “USD” corresponds to United States dollars.

<a id="return-value"></a>

## Return Value

An initialized price range object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

This method assigns the lesser of the two price values to the [minimumPrice](minimumprice.md) property, and it assigns the greater of the two values to the [maximumPrice](maximumprice.md) property.

## See Also

### Creating a Price Range Object

- [init(price:currencyCode:)](init%28price_currencycode_%29.md): Initializes the object with the specified price information.
- [init(maximumPrice:currencyCode:)](init%28maximumprice_currencycode_%29.md): Initializes the object with the specified maximum price information.
- [init(minimumPrice:currencyCode:)](init%28minimumprice_currencycode_%29.md): Initializes the object with the specified minimum price information.

# initWithRangeBetweenPrice:andPrice:currencyCode: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Initializes the object with the specified range of prices.

## Declaration

```objectivec
- (instancetype) initWithRangeBetweenPrice:(NSDecimalNumber *) firstPrice andPrice:(NSDecimalNumber *) secondPrice currencyCode:(NSString *) currencyCode;
```

## Parameters

- `firstPrice`: The first price. This parameter must not be `nil`.
- `secondPrice`: The second price. This parameter must not be `nil`.
- `currencyCode`: The ISO 4217 currency code to apply to the price information. You can get a list of possible currency codes using the [ISOCurrencyCodes](../../foundation/nslocale/isocurrencycodes.md) method of [NSLocale](../../foundation/nslocale.md). For example, the string “USD” corresponds to United States dollars.

<a id="return-value"></a>

## Return Value

An initialized price range object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

This method assigns the lesser of the two price values to the [minimumPrice](minimumprice.md) property, and it assigns the greater of the two values to the [maximumPrice](maximumprice.md) property.

## See Also

### Creating a Price Range Object

- [initWithPrice:currencyCode:](init%28price_currencycode_%29.md): Initializes the object with the specified price information.
- [initWithMaximumPrice:currencyCode:](init%28maximumprice_currencycode_%29.md): Initializes the object with the specified maximum price information.
- [initWithMinimumPrice:currencyCode:](init%28minimumprice_currencycode_%29.md): Initializes the object with the specified minimum price information.
