> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkstoredvaluepassbalance](https://developer.apple.com/documentation/passkit/pkstoredvaluepassbalance)

# PKStoredValuePassBalance (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS · visionOS 1.0+ · watchOS 8.0+

An object that represents a balance that’s available for transactions, such as points or money.

## Declaration

```swift
class PKStoredValuePassBalance
```

<a id="overview"></a>

## Overview

> **Important**

>  A stored balance of type of [cash](pkstoredvaluepassbalance/balancetype-swift.struct/cash.md) requires a valid currency code.

## Topics

### Getting the pass status

- [expiryDate](pkstoredvaluepassbalance/expirydate.md): The date that the balance expires.
- [amount](pkstoredvaluepassbalance/amount-2nwf5.md): The current balance of a stored-value pass in money or points.
- [balanceType](pkstoredvaluepassbalance/balancetype-swift.property.md): The type of value that the balance represents, such as money or points.
- [currencyCode](pkstoredvaluepassbalance/currencycode.md): The ISO 4217 currency code of the balance.
- [PKStoredValuePassBalance.BalanceType](pkstoredvaluepassbalance/balancetype-swift.struct.md): The type of value that the balance represents, such as money or points.

### Comparing pass balance objects

- [==(\_:\_:)](pkstoredvaluepassbalance/==%28____%29.md): Returns a Boolean value that indicates whether two pass balance objects contain the same values.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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
- [PKSuicaPassProperties](pksuicapassproperties.md): The properties of a pass used as a ticket for the Suica transportation system.
- [PKStoredValuePassProperties](pkstoredvaluepassproperties.md): An object that represents the properties of a pass that contains a balance used for specific transactions, such as a transit pass or loyalty card.

# PKStoredValuePassBalance (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS · visionOS 1.0+ · watchOS 8.0+

An object that represents a balance that’s available for transactions, such as points or money.

## Declaration

```objectivec
@interface PKStoredValuePassBalance : NSObject
```

<a id="overview"></a>

## Overview

> **Important**

>  A stored balance of type of [PKStoredValuePassBalanceTypeCash](pkstoredvaluepassbalance/balancetype-swift.struct/cash.md) requires a valid currency code.

## Topics

### Getting the pass status

- [expiryDate](pkstoredvaluepassbalance/expirydate.md): The date that the balance expires.
- [amount](pkstoredvaluepassbalance/amount-2vfd3.md): The current balance in money or points.
- [balanceType](pkstoredvaluepassbalance/balancetype-swift.property.md): The type of value that the balance represents, such as money or points.
- [currencyCode](pkstoredvaluepassbalance/currencycode.md): The ISO 4217 currency code of the balance.
- [PKStoredValuePassBalanceType](pkstoredvaluepassbalance/balancetype-swift.struct.md): The type of value that the balance represents, such as money or points.

### Comparing pass balance objects

- [isEqualToBalance:](pkstoredvaluepassbalance/isequaltobalance_.md): Returns a Boolean value that indicates whether two pass balance objects contain the same values.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Stored-value passes

- [PKTransitPassProperties](pktransitpassproperties.md): The properties of a transit pass.
- [PKSuicaPassProperties](pksuicapassproperties.md): The properties of a pass used as a ticket for the Suica transportation system.
- [PKStoredValuePassProperties](pkstoredvaluepassproperties.md): An object that represents the properties of a pass that contains a balance used for specific transactions, such as a transit pass or loyalty card.
