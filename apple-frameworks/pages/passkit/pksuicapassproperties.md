> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pksuicapassproperties](https://developer.apple.com/documentation/passkit/pksuicapassproperties)

# PKSuicaPassProperties (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 3.1+

The properties of a pass used as a ticket for the Suica transportation system.

## Declaration

```swift
class PKSuicaPassProperties
```

<a id="overview"></a>

## Overview

The Suica pass is a card used for transportation in Japan.

## Topics

### Initializing suica pass properties

- [init(for:)](pksuicapassproperties/init%28for_%29.md): Instantiates a Suica pass properties object that contains the properties supported in the specified pass.

### Getting pass status

- [isBlocked](pksuicapassproperties/isblocked.md): Deprecated. A Boolean value that indicates whether the pass issuer disabled the pass.
- [isBlacklisted](pksuicapassproperties/isblacklisted.md): Deprecated. A Boolean value that indicates whether the transit pass issuer disabled the pass.
- [isGreenCarTicketUsed](pksuicapassproperties/isgreencarticketused.md): A Boolean value that indicates whether the customer has redeemed the Green Car ticket.
- [isInShinkansenStation](pksuicapassproperties/isinshinkansenstation.md): A Boolean value that indicates whether the pass has tapped in at a Shinkansen Station and has not tapped out.
- [isInStation](pksuicapassproperties/isinstation.md): A Boolean value that indicates whether the transit pass has tapped in at a station and has not tapped out.

### Getting suica balance information

- [transitBalance](pksuicapassproperties/transitbalance.md): The current usable stored value on the transit card.
- [transitBalanceCurrencyCode](pksuicapassproperties/transitbalancecurrencycode.md): The currency code associated with the balance on the pass.
- [isBalanceAllowedForCommute](pksuicapassproperties/isbalanceallowedforcommute.md): A Boolean value that indicates how the balance can be used.
- [isLowBalanceGateNotificationEnabled](pksuicapassproperties/islowbalancegatenotificationenabled.md): A Boolean value that determines whether the terminal provides feedback if the balance is low after a deduction.

## Relationships

### Inherits From

- [PKTransitPassProperties](pktransitpassproperties.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Stored-value passes

- [PKTransitPassProperties](pktransitpassproperties.md): The properties of a transit pass.
- [PKStoredValuePassProperties](pkstoredvaluepassproperties.md): An object that represents the properties of a pass that contains a balance used for specific transactions, such as a transit pass or loyalty card.
- [PKStoredValuePassBalance](pkstoredvaluepassbalance.md): An object that represents a balance that’s available for transactions, such as points or money.

# PKSuicaPassProperties (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 3.1+

The properties of a pass used as a ticket for the Suica transportation system.

## Declaration

```objectivec
@interface PKSuicaPassProperties : PKTransitPassProperties
```

<a id="overview"></a>

## Overview

The Suica pass is a card used for transportation in Japan.

## Topics

### Initializing suica pass properties

- [passPropertiesForPass:](pksuicapassproperties/init%28for_%29.md): Instantiates a Suica pass properties object that contains the properties supported in the specified pass.

### Getting pass status

- [blacklisted](pksuicapassproperties/isblacklisted.md): Deprecated. A Boolean value that indicates whether the transit pass issuer disabled the pass.
- [greenCarTicketUsed](pksuicapassproperties/isgreencarticketused.md): A Boolean value that indicates whether the customer has redeemed the Green Car ticket.
- [inShinkansenStation](pksuicapassproperties/isinshinkansenstation.md): A Boolean value that indicates whether the pass has tapped in at a Shinkansen Station and has not tapped out.
- [inStation](pksuicapassproperties/isinstation.md): A Boolean value that indicates whether the transit pass has tapped in at a station and has not tapped out.

### Getting suica balance information

- [transitBalance](pksuicapassproperties/transitbalance.md): The current usable stored value on the transit card.
- [transitBalanceCurrencyCode](pksuicapassproperties/transitbalancecurrencycode.md): The currency code associated with the balance on the pass.
- [balanceAllowedForCommute](pksuicapassproperties/isbalanceallowedforcommute.md): A Boolean value that indicates how the balance can be used.
- [lowBalanceGateNotificationEnabled](pksuicapassproperties/islowbalancegatenotificationenabled.md): A Boolean value that determines whether the terminal provides feedback if the balance is low after a deduction.

## Relationships

### Inherits From

- [PKTransitPassProperties](pktransitpassproperties.md)

## See Also

### Stored-value passes

- [PKTransitPassProperties](pktransitpassproperties.md): The properties of a transit pass.
- [PKStoredValuePassProperties](pkstoredvaluepassproperties.md): An object that represents the properties of a pass that contains a balance used for specific transactions, such as a transit pass or loyalty card.
- [PKStoredValuePassBalance](pkstoredvaluepassbalance.md): An object that represents a balance that’s available for transactions, such as points or money.
