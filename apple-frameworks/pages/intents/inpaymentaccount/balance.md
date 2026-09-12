> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaymentaccount/balance](https://developer.apple.com/documentation/intents/inpaymentaccount/balance)

# balance (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

The primary balance associated with the account.

## Declaration

```swift
@NSCopying var balance: INBalanceAmount? { get }
```

## See Also

### Getting the Account Balance

- [secondaryBalance](secondarybalance.md): A secondary balance, if any, associated with the account.
- [INBalanceAmount](../inbalanceamount.md): A balance associated with an account.

# balance (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

The primary balance associated with the account.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INBalanceAmount * balance;
```

```objectivec
@property (atomic, copy, readonly, nullable) INBalanceAmount * balance;
```

## See Also

### Getting the Account Balance

- [secondaryBalance](secondarybalance.md): A secondary balance, if any, associated with the account.
- [INBalanceAmount](../inbalanceamount.md): A balance associated with an account.
