> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incurrencyamount/init(amount:currencycode:)](https://developer.apple.com/documentation/intents/incurrencyamount/init(amount:currencycode:))

# init(amount:currencyCode:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

Initializes a currency amount object with the specified values.

## Declaration

```swift
init(amount: NSDecimalNumber, currencyCode: String)
```

## Parameters

- `amount`: The decimal number representing the amount of money.
- `currencyCode`: The ISO 4217 currency code to apply to the specified `amount`. You can get a list of possible currency codes using the [isoCurrencyCodes](../../foundation/nslocale/isocurrencycodes.md) method of [NSLocale](../../foundation/nslocale.md). For example, the string “USD” corresponds to United States dollars.

<a id="return-value"></a>

## Return Value

An initialized currency amount object or `nil` if the object could not be created.

# initWithAmount:currencyCode: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

Initializes a currency amount object with the specified values.

## Declaration

```objectivec
- (instancetype) initWithAmount:(NSDecimalNumber *) amount currencyCode:(NSString *) currencyCode;
```

## Parameters

- `amount`: The decimal number representing the amount of money.
- `currencyCode`: The ISO 4217 currency code to apply to the specified `amount`. You can get a list of possible currency codes using the [ISOCurrencyCodes](../../foundation/nslocale/isocurrencycodes.md) method of [NSLocale](../../foundation/nslocale.md). For example, the string “USD” corresponds to United States dollars.

<a id="return-value"></a>

## Return Value

An initialized currency amount object or `nil` if the object could not be created.
