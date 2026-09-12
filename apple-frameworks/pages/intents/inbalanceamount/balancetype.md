> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbalanceamount/balancetype](https://developer.apple.com/documentation/intents/inbalanceamount/balancetype)

# balanceType (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

The type associated with the balance.

## Declaration

```swift
var balanceType: INBalanceType { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to determine how to interpret the value in the [amount](amount.md) property.

## See Also

### Getting the Balance Information

- [amount](amount.md): The numerical amount associated with the balance.
- [currencyCode](currencycode.md): The ISO 4217 currency code that applies to a monetary amount.
- [INBalanceType](../inbalancetype.md): Constants indicating the meaning of a balance.

# balanceType (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

The type associated with the balance.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INBalanceType balanceType;
```

```objectivec
@property (atomic, assign, readonly) INBalanceType balanceType;
```

<a id="Discussion"></a>

## Discussion

Use this property to determine how to interpret the value in the [amount](amount.md) property.

## See Also

### Getting the Balance Information

- [amount](amount.md): The numerical amount associated with the balance.
- [currencyCode](currencycode.md): The ISO 4217 currency code that applies to a monetary amount.
- [INBalanceType](../inbalancetype.md): Constants indicating the meaning of a balance.
