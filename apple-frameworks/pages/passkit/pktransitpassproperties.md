> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pktransitpassproperties](https://developer.apple.com/documentation/passkit/pktransitpassproperties)

# PKTransitPassProperties (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 4.3+

The properties of a transit pass.

## Declaration

```swift
class PKTransitPassProperties
```

## Topics

### Getting pass status

- [expirationDate](pktransitpassproperties/expirationdate.md): The date that the transit card expires.
- [isInStation](pktransitpassproperties/isinstation.md): A Boolean value that indicates whether the transit pass has tapped in at a station and has not tapped out.
- [isBlocked](pktransitpassproperties/isblocked.md): Deprecated. A Boolean value that indicates the pass issuer disabled the pass.
- [isBlacklisted](pktransitpassproperties/isblacklisted.md): Deprecated. A Boolean value that indicates the transit pass issuer disabled the pass.

### Getting balance information

- [transitBalance](pktransitpassproperties/transitbalance.md): Deprecated. The current usable stored value on the transit card.
- [transitBalanceCurrencyCode](pktransitpassproperties/transitbalancecurrencycode.md): Deprecated. The currency code associated with the balance on the pass.

## Relationships

### Inherits From

- [PKStoredValuePassProperties](pkstoredvaluepassproperties.md)

### Inherited By

- [PKSuicaPassProperties](pksuicapassproperties.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Stored-value passes

- [PKSuicaPassProperties](pksuicapassproperties.md): The properties of a pass used as a ticket for the Suica transportation system.
- [PKStoredValuePassProperties](pkstoredvaluepassproperties.md): An object that represents the properties of a pass that contains a balance used for specific transactions, such as a transit pass or loyalty card.
- [PKStoredValuePassBalance](pkstoredvaluepassbalance.md): An object that represents a balance that’s available for transactions, such as points or money.

# PKTransitPassProperties (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 4.3+

The properties of a transit pass.

## Declaration

```objectivec
@interface PKTransitPassProperties : PKStoredValuePassProperties
```

## Topics

### Getting pass status

- [expirationDate](pktransitpassproperties/expirationdate.md): The date that the transit card expires.
- [inStation](pktransitpassproperties/isinstation.md): A Boolean value that indicates whether the transit pass has tapped in at a station and has not tapped out.
- [blocked](pktransitpassproperties/blocked.md): Deprecated. A Boolean value that indicates the pass issuer disabled the pass.
- [blacklisted](pktransitpassproperties/isblacklisted.md): Deprecated. A Boolean value that indicates the transit pass issuer disabled the pass.

### Getting balance information

- [transitBalance](pktransitpassproperties/transitbalance.md): Deprecated. The current usable stored value on the transit card.
- [transitBalanceCurrencyCode](pktransitpassproperties/transitbalancecurrencycode.md): Deprecated. The currency code associated with the balance on the pass.

## Relationships

### Inherits From

- [PKStoredValuePassProperties](pkstoredvaluepassproperties.md)

### Inherited By

- [PKSuicaPassProperties](pksuicapassproperties.md)

## See Also

### Stored-value passes

- [PKSuicaPassProperties](pksuicapassproperties.md): The properties of a pass used as a ticket for the Suica transportation system.
- [PKStoredValuePassProperties](pkstoredvaluepassproperties.md): An object that represents the properties of a pass that contains a balance used for specific transactions, such as a transit pass or loyalty card.
- [PKStoredValuePassBalance](pkstoredvaluepassbalance.md): An object that represents a balance that’s available for transactions, such as points or money.
