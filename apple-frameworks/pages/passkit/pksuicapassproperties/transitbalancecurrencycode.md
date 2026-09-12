> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pksuicapassproperties/transitbalancecurrencycode](https://developer.apple.com/documentation/passkit/pksuicapassproperties/transitbalancecurrencycode)

# transitBalanceCurrencyCode (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 3.1+

The currency code associated with the balance on the pass.

## Declaration

```swift
var transitBalanceCurrencyCode: String { get }
```

<a id="Discussion"></a>

## Discussion

Represent the currency code associated with [transitBalance](transitbalance.md) as a three-letter ISO 4217 alphabetic code. For example, US Dollars is `USD` and Japanese Yen is `JPY`.

## See Also

### Getting suica balance information

- [transitBalance](transitbalance.md): The current usable stored value on the transit card.
- [isBalanceAllowedForCommute](isbalanceallowedforcommute.md): A Boolean value that indicates how the balance can be used.
- [isLowBalanceGateNotificationEnabled](islowbalancegatenotificationenabled.md): A Boolean value that determines whether the terminal provides feedback if the balance is low after a deduction.

# transitBalanceCurrencyCode (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 3.1+

The currency code associated with the balance on the pass.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * transitBalanceCurrencyCode;
```

<a id="Discussion"></a>

## Discussion

Represent the currency code associated with [transitBalance](transitbalance.md) as a three-letter ISO 4217 alphabetic code. For example, US Dollars is `USD` and Japanese Yen is `JPY`.

## See Also

### Getting suica balance information

- [transitBalance](transitbalance.md): The current usable stored value on the transit card.
- [balanceAllowedForCommute](isbalanceallowedforcommute.md): A Boolean value that indicates how the balance can be used.
- [lowBalanceGateNotificationEnabled](islowbalancegatenotificationenabled.md): A Boolean value that determines whether the terminal provides feedback if the balance is low after a deduction.
