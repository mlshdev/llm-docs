> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbalanceamount](https://developer.apple.com/documentation/intents/inbalanceamount)

# INBalanceAmount (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

A balance associated with an account.

## Declaration

```swift
class INBalanceAmount
```

<a id="overview"></a>

## Overview

A balance reflects any credit or debit associated with the account. Balances may reflect an amount of money, frequent flier miles, or points accumulated toward rewards.

## Topics

### Initializing a Balance Amount Object

- [init(amount:currencyCode:)](inbalanceamount/init%28amount_currencycode_%29.md): Initializes a balance amount with a monetary amount.
- [init(amount:balanceType:)](inbalanceamount/init%28amount_balancetype_%29.md): Initializes a balance amount object with a customizable type of information.

### Getting the Balance Information

- [amount](inbalanceamount/amount.md): The numerical amount associated with the balance.
- [currencyCode](inbalanceamount/currencycode.md): The ISO 4217 currency code that applies to a monetary amount.
- [balanceType](inbalanceamount/balancetype.md): The type associated with the balance.
- [INBalanceType](inbalancetype.md): Constants indicating the meaning of a balance.

### Initializers

- [init(coder:)](inbalanceamount/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Getting the Account Balance

- [balance](inpaymentaccount/balance.md): The primary balance associated with the account.
- [secondaryBalance](inpaymentaccount/secondarybalance.md): A secondary balance, if any, associated with the account.

# INBalanceAmount (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

A balance associated with an account.

## Declaration

```objectivec
@interface INBalanceAmount : NSObject
```

<a id="overview"></a>

## Overview

A balance reflects any credit or debit associated with the account. Balances may reflect an amount of money, frequent flier miles, or points accumulated toward rewards.

## Topics

### Initializing a Balance Amount Object

- [initWithAmount:currencyCode:](inbalanceamount/init%28amount_currencycode_%29.md): Initializes a balance amount with a monetary amount.
- [initWithAmount:balanceType:](inbalanceamount/init%28amount_balancetype_%29.md): Initializes a balance amount object with a customizable type of information.

### Getting the Balance Information

- [amount](inbalanceamount/amount.md): The numerical amount associated with the balance.
- [currencyCode](inbalanceamount/currencycode.md): The ISO 4217 currency code that applies to a monetary amount.
- [balanceType](inbalanceamount/balancetype.md): The type associated with the balance.
- [INBalanceType](inbalancetype.md): Constants indicating the meaning of a balance.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Getting the Account Balance

- [balance](inpaymentaccount/balance.md): The primary balance associated with the account.
- [secondaryBalance](inpaymentaccount/secondarybalance.md): A secondary balance, if any, associated with the account.
