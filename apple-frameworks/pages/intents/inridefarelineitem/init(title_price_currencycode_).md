> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inridefarelineitem/init(title:price:currencycode:)](https://developer.apple.com/documentation/intents/inridefarelineitem/init(title:price:currencycode:))

# init(title:price:currencyCode:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

Initializes the line item object with the specified title and pricing information.

## Declaration

```swift
init!(title: String!, price: NSDecimalNumber!, currencyCode: String!)
```

## Parameters

- `title`: A localized string that describes the meaning of the charge. For example, you might specify the strings “Base fare”, “Per-mile charge”, or “+ per-mile”.
- `price`: The price for the line item.
- `currencyCode`: The ISO 4217 currency code to apply to the line item’s price. You can get a list of possible currency codes using the [isoCurrencyCodes](../../foundation/nslocale/isocurrencycodes.md) method of [NSLocale](../../foundation/nslocale.md). For example, the string “USD” corresponds to United States dollars. This code used to determine the currency designator to apply to the `price` information.

<a id="return-value"></a>

## Return Value

An initialized line item object or `nil` if the object could not be created.

# initWithTitle:price:currencyCode: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

Initializes the line item object with the specified title and pricing information.

## Declaration

```objectivec
- (instancetype) initWithTitle:(NSString *) title price:(NSDecimalNumber *) price currencyCode:(NSString *) currencyCode;
```

## Parameters

- `title`: A localized string that describes the meaning of the charge. For example, you might specify the strings “Base fare”, “Per-mile charge”, or “+ per-mile”.
- `price`: The price for the line item.
- `currencyCode`: The ISO 4217 currency code to apply to the line item’s price. You can get a list of possible currency codes using the [ISOCurrencyCodes](../../foundation/nslocale/isocurrencycodes.md) method of [NSLocale](../../foundation/nslocale.md). For example, the string “USD” corresponds to United States dollars. This code used to determine the currency designator to apply to the `price` information.

<a id="return-value"></a>

## Return Value

An initialized line item object or `nil` if the object could not be created.
