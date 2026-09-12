> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbalanceamount/init(amount:balancetype:)](https://developer.apple.com/documentation/intents/inbalanceamount/init(amount:balancetype:))

# init(amount:balanceType:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Initializes a balance amount object with a customizable type of information.

## Declaration

```swift
init?(amount: NSDecimalNumber, balanceType: INBalanceType)
```

## Parameters

- `amount`: The numerical amount associated with the balance.
- `balanceType`: The type that indicates what the balance represents. For a list of possible values, see [INBalanceType](../inbalancetype.md).

<a id="return-value"></a>

## Return Value

An initialized [INBalanceAmount](../inbalanceamount.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when initializing balance amounts that do not involve money.

> **Important**

>  When initializing a balance involving money, use the [init(amount:currencyCode:)](init%28amount_currencycode_%29.md) method instead. Using that initializer method lets you specify the currency associated with the monetary amount.

## See Also

### Initializing a Balance Amount Object

- [init(amount:currencyCode:)](init%28amount_currencycode_%29.md): Initializes a balance amount with a monetary amount.

# initWithAmount:balanceType: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Initializes a balance amount object with a customizable type of information.

## Declaration

```objectivec
- (instancetype) initWithAmount:(NSDecimalNumber *) amount balanceType:(INBalanceType) balanceType;
```

## Parameters

- `amount`: The numerical amount associated with the balance.
- `balanceType`: The type that indicates what the balance represents. For a list of possible values, see [INBalanceType](../inbalancetype.md).

<a id="return-value"></a>

## Return Value

An initialized [INBalanceAmount](../inbalanceamount.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when initializing balance amounts that do not involve money.

> **Important**

>  When initializing a balance involving money, use the [initWithAmount:currencyCode:](init%28amount_currencycode_%29.md) method instead. Using that initializer method lets you specify the currency associated with the monetary amount.

## See Also

### Initializing a Balance Amount Object

- [initWithAmount:currencyCode:](init%28amount_currencycode_%29.md): Initializes a balance amount with a monetary amount.
