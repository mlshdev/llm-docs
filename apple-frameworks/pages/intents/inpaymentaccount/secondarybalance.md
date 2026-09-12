> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaymentaccount/secondarybalance](https://developer.apple.com/documentation/intents/inpaymentaccount/secondarybalance)

# secondaryBalance (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

A secondary balance, if any, associated with the account.

## Declaration

```swift
@NSCopying var secondaryBalance: INBalanceAmount? { get }
```

<a id="Discussion"></a>

## Discussion

A secondary balance might represent something other than a monetary debit or credit. For example, it might represent reward points or frequent flier miles.

## See Also

### Getting the Account Balance

- [balance](balance.md): The primary balance associated with the account.
- [INBalanceAmount](../inbalanceamount.md): A balance associated with an account.

# secondaryBalance (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

A secondary balance, if any, associated with the account.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INBalanceAmount * secondaryBalance;
```

```objectivec
@property (atomic, copy, readonly, nullable) INBalanceAmount * secondaryBalance;
```

<a id="Discussion"></a>

## Discussion

A secondary balance might represent something other than a monetary debit or credit. For example, it might represent reward points or frequent flier miles.

## See Also

### Getting the Account Balance

- [balance](balance.md): The primary balance associated with the account.
- [INBalanceAmount](../inbalanceamount.md): A balance associated with an account.
