> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpricerange/init(price:currencycode:)](https://developer.apple.com/documentation/intents/inpricerange/init(price:currencycode:))

# init(price:currencyCode:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Initializes the object with the specified price information.

## Declaration

```swift
convenience init(price: NSDecimalNumber, currencyCode: String)
```

## Parameters

- `price`: The price of the service. This value is used for both the minimum and maximum prices.
- `currencyCode`: The ISO 4217 currency code to apply to the price information. You can get a list of possible currency codes using the [isoCurrencyCodes](../../foundation/nslocale/isocurrencycodes.md) method of [NSLocale](../../foundation/nslocale.md). For example, the string “USD” corresponds to United States dollars.

<a id="return-value"></a>

## Return Value

An initialized price range object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

This method sets the [minimumPrice](minimumprice.md) and [maximumPrice](maximumprice.md) properties to the value in the `price` parameter.

## See Also

### Creating a Price Range Object

- [init(firstPrice:secondPrice:currencyCode:)](init%28firstprice_secondprice_currencycode_%29.md): Initializes the object with the specified range of prices.
- [init(maximumPrice:currencyCode:)](init%28maximumprice_currencycode_%29.md): Initializes the object with the specified maximum price information.
- [init(minimumPrice:currencyCode:)](init%28minimumprice_currencycode_%29.md): Initializes the object with the specified minimum price information.

# initWithPrice:currencyCode: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Initializes the object with the specified price information.

## Declaration

```objectivec
- (instancetype) initWithPrice:(NSDecimalNumber *) price currencyCode:(NSString *) currencyCode;
```

## Parameters

- `price`: The price of the service. This value is used for both the minimum and maximum prices.
- `currencyCode`: The ISO 4217 currency code to apply to the price information. You can get a list of possible currency codes using the [ISOCurrencyCodes](../../foundation/nslocale/isocurrencycodes.md) method of [NSLocale](../../foundation/nslocale.md). For example, the string “USD” corresponds to United States dollars.

<a id="return-value"></a>

## Return Value

An initialized price range object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

This method sets the [minimumPrice](minimumprice.md) and [maximumPrice](maximumprice.md) properties to the value in the `price` parameter.

## See Also

### Creating a Price Range Object

- [initWithRangeBetweenPrice:andPrice:currencyCode:](init%28firstprice_secondprice_currencycode_%29.md): Initializes the object with the specified range of prices.
- [initWithMaximumPrice:currencyCode:](init%28maximumprice_currencycode_%29.md): Initializes the object with the specified maximum price information.
- [initWithMinimumPrice:currencyCode:](init%28minimumprice_currencycode_%29.md): Initializes the object with the specified minimum price information.
