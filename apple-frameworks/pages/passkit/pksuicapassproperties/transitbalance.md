> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pksuicapassproperties/transitbalance](https://developer.apple.com/documentation/passkit/pksuicapassproperties/transitbalance)

# transitBalance (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 3.1+

The current usable stored value on the transit card.

## Declaration

```swift
@NSCopying var transitBalance: NSDecimalNumber { get }
```

## See Also

### Getting suica balance information

- [transitBalanceCurrencyCode](transitbalancecurrencycode.md): The currency code associated with the balance on the pass.
- [isBalanceAllowedForCommute](isbalanceallowedforcommute.md): A Boolean value that indicates how the balance can be used.
- [isLowBalanceGateNotificationEnabled](islowbalancegatenotificationenabled.md): A Boolean value that determines whether the terminal provides feedback if the balance is low after a deduction.

# transitBalance (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 3.1+

The current usable stored value on the transit card.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSDecimalNumber * transitBalance;
```

## See Also

### Getting suica balance information

- [transitBalanceCurrencyCode](transitbalancecurrencycode.md): The currency code associated with the balance on the pass.
- [balanceAllowedForCommute](isbalanceallowedforcommute.md): A Boolean value that indicates how the balance can be used.
- [lowBalanceGateNotificationEnabled](islowbalancegatenotificationenabled.md): A Boolean value that determines whether the terminal provides feedback if the balance is low after a deduction.
