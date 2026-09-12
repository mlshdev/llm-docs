> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbalanceamount/init(amount:currencycode:)](https://developer.apple.com/documentation/intents/inbalanceamount/init(amount:currencycode:))

# init(amount:currencyCode:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Initializes a balance amount with a monetary amount.

## Declaration

```swift
init(amount: NSDecimalNumber, currencyCode: String)
```

## Parameters

- `amount`: The monetary amount to assign to the balance.
- `currencyCode`: The ISO 4217 currency code that applies to the monetary amount.

<a id="return-value"></a>

## Return Value

An initialized [INBalanceAmount](../inbalanceamount.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to initialize balance amounts involving currencies. The [balanceType](balancetype.md) property is automatically set to [INBalanceType.money](../inbalancetype/money.md).

## See Also

### Initializing a Balance Amount Object

- [init(amount:balanceType:)](init%28amount_balancetype_%29.md): Initializes a balance amount object with a customizable type of information.

# initWithAmount:currencyCode: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Initializes a balance amount with a monetary amount.

## Declaration

```objectivec
- (instancetype) initWithAmount:(NSDecimalNumber *) amount currencyCode:(NSString *) currencyCode;
```

## Parameters

- `amount`: The monetary amount to assign to the balance.
- `currencyCode`: The ISO 4217 currency code that applies to the monetary amount.

<a id="return-value"></a>

## Return Value

An initialized [INBalanceAmount](../inbalanceamount.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to initialize balance amounts involving currencies. The [balanceType](balancetype.md) property is automatically set to [INBalanceTypeMoney](../inbalancetype/money.md).

## See Also

### Initializing a Balance Amount Object

- [initWithAmount:balanceType:](init%28amount_balancetype_%29.md): Initializes a balance amount object with a customizable type of information.
