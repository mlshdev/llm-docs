> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbalanceamount/amount](https://developer.apple.com/documentation/intents/inbalanceamount/amount)

# amount (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

The numerical amount associated with the balance.

## Declaration

```swift
@NSCopying var amount: NSDecimalNumber? { get }
```

<a id="Discussion"></a>

## Discussion

Use the [balanceType](balancetype.md) property to determine the meaning of this value.

## See Also

### Getting the Balance Information

- [currencyCode](currencycode.md): The ISO 4217 currency code that applies to a monetary amount.
- [balanceType](balancetype.md): The type associated with the balance.
- [INBalanceType](../inbalancetype.md): Constants indicating the meaning of a balance.

# amount (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

The numerical amount associated with the balance.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSDecimalNumber * amount;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSDecimalNumber * amount;
```

<a id="Discussion"></a>

## Discussion

Use the [balanceType](balancetype.md) property to determine the meaning of this value.

## See Also

### Getting the Balance Information

- [currencyCode](currencycode.md): The ISO 4217 currency code that applies to a monetary amount.
- [balanceType](balancetype.md): The type associated with the balance.
- [INBalanceType](../inbalancetype.md): Constants indicating the meaning of a balance.
