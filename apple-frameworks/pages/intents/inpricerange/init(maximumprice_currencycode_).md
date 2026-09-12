> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpricerange/init(maximumprice:currencycode:)](https://developer.apple.com/documentation/intents/inpricerange/init(maximumprice:currencycode:))

# init(maximumPrice:currencyCode:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Initializes the object with the specified maximum price information.

## Declaration

```swift
init(maximumPrice: NSDecimalNumber, currencyCode: String)
```

## Parameters

- `maximumPrice`: The maximum price value. This value is assigned to the [maximumPrice](maximumprice.md) property.
- `currencyCode`: The ISO 4217 currency code to apply to the price information. You can get a list of possible currency codes using the [isoCurrencyCodes](../../foundation/nslocale/isocurrencycodes.md) method of [NSLocale](../../foundation/nslocale.md). For example, the string “USD” corresponds to United States dollars.

<a id="return-value"></a>

## Return Value

An initialized price range object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

This method does not assign a value to the [minimumPrice](minimumprice.md) property.

## See Also

### Creating a Price Range Object

- [init(price:currencyCode:)](init%28price_currencycode_%29.md): Initializes the object with the specified price information.
- [init(firstPrice:secondPrice:currencyCode:)](init%28firstprice_secondprice_currencycode_%29.md): Initializes the object with the specified range of prices.
- [init(minimumPrice:currencyCode:)](init%28minimumprice_currencycode_%29.md): Initializes the object with the specified minimum price information.

# initWithMaximumPrice:currencyCode: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Initializes the object with the specified maximum price information.

## Declaration

```objectivec
- (instancetype) initWithMaximumPrice:(NSDecimalNumber *) maximumPrice currencyCode:(NSString *) currencyCode;
```

## Parameters

- `maximumPrice`: The maximum price value. This value is assigned to the [maximumPrice](maximumprice.md) property.
- `currencyCode`: The ISO 4217 currency code to apply to the price information. You can get a list of possible currency codes using the [ISOCurrencyCodes](../../foundation/nslocale/isocurrencycodes.md) method of [NSLocale](../../foundation/nslocale.md). For example, the string “USD” corresponds to United States dollars.

<a id="return-value"></a>

## Return Value

An initialized price range object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

This method does not assign a value to the [minimumPrice](minimumprice.md) property.

## See Also

### Creating a Price Range Object

- [initWithPrice:currencyCode:](init%28price_currencycode_%29.md): Initializes the object with the specified price information.
- [initWithRangeBetweenPrice:andPrice:currencyCode:](init%28firstprice_secondprice_currencycode_%29.md): Initializes the object with the specified range of prices.
- [initWithMinimumPrice:currencyCode:](init%28minimumprice_currencycode_%29.md): Initializes the object with the specified minimum price information.
