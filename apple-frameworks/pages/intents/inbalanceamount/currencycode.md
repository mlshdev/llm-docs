> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbalanceamount/currencycode](https://developer.apple.com/documentation/intents/inbalanceamount/currencycode)

# currencyCode (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

The ISO 4217 currency code that applies to a monetary amount.

## Declaration

```swift
var currencyCode: String? { get }
```

<a id="Discussion"></a>

## Discussion

Use this value to determine the appropriate currency designator to apply to the value in the [amount](amount.md) property. To retrieve the list of available currency codes, call the [isoCurrencyCodes](../../foundation/nslocale/isocurrencycodes.md) method of the [NSLocale](../../foundation/nslocale.md) class.

## See Also

### Getting the Balance Information

- [amount](amount.md): The numerical amount associated with the balance.
- [balanceType](balancetype.md): The type associated with the balance.
- [INBalanceType](../inbalancetype.md): Constants indicating the meaning of a balance.

# currencyCode (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

The ISO 4217 currency code that applies to a monetary amount.

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

### Getting the Balance Information

- [amount](amount.md): The numerical amount associated with the balance.
- [balanceType](balancetype.md): The type associated with the balance.
- [INBalanceType](../inbalancetype.md): Constants indicating the meaning of a balance.
