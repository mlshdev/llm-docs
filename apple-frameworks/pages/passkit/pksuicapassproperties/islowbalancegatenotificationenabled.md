> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/pksuicapassproperties/islowbalancegatenotificationenabled

# isLowBalanceGateNotificationEnabled (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 4.3+

A Boolean value that determines whether the terminal provides feedback if the balance is low after a deduction.

## Declaration

```swift
var isLowBalanceGateNotificationEnabled: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The Suica network determines the value and usage of this property.

## See Also

### Getting suica balance information

- [transitBalance](transitbalance.md): The current usable stored value on the transit card.
- [transitBalanceCurrencyCode](transitbalancecurrencycode.md): The currency code associated with the balance on the pass.
- [isBalanceAllowedForCommute](isbalanceallowedforcommute.md): A Boolean value that indicates how the balance can be used.

# lowBalanceGateNotificationEnabled (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 4.3+

A Boolean value that determines whether the terminal provides feedback if the balance is low after a deduction.

## Declaration

```objectivec
@property (nonatomic, assign, readonly, getter=isLowBalanceGateNotificationEnabled) BOOL lowBalanceGateNotificationEnabled;
```

<a id="Discussion"></a>

## Discussion

The Suica network determines the value and usage of this property.

## See Also

### Getting suica balance information

- [transitBalance](transitbalance.md): The current usable stored value on the transit card.
- [transitBalanceCurrencyCode](transitbalancecurrencycode.md): The currency code associated with the balance on the pass.
- [balanceAllowedForCommute](isbalanceallowedforcommute.md): A Boolean value that indicates how the balance can be used.
