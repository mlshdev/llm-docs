> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaymentaccount](https://developer.apple.com/documentation/intents/inpaymentaccount)

# INPaymentAccount (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A user account that provides the funds when making a payment.

## Declaration

```swift
class INPaymentAccount
```

<a id="overview"></a>

## Overview

An [INPaymentAccount](inpaymentaccount.md) object represents a user account known to your app. When paying bills, you use the specified payment account as the source of any funds involved in the financial transaction. Your app must have the authority to transfer funds from the designated account to any payees.

## Topics

### Initializing the Payment Account

- [init(nickname:number:accountType:organizationName:balance:secondaryBalance:)](inpaymentaccount/init%28nickname_number_accounttype_organizationname_balance_secondarybalance_%29.md): Initializes a payment account object with the specified account information.
- [init(nickname:number:accountType:organizationName:)](inpaymentaccount/init%28nickname_number_accounttype_organizationname_%29.md): Deprecated. Initializes a payment account object with the specified account information.

### Getting the Account Details

- [nickname](inpaymentaccount/nickname.md): A user-defined name that identifies the account.
- [organizationName](inpaymentaccount/organizationname.md): The name of the organization that supplies the account to the user.
- [accountType](inpaymentaccount/accounttype.md): The type of the account.
- [INAccountType](inaccounttype.md): Constants indicating the type of account involved in a financial transaction.
- [accountNumber](inpaymentaccount/accountnumber.md): A string to help the user differentiate between similar accounts.

### Getting the Account Balance

- [balance](inpaymentaccount/balance.md): The primary balance associated with the account.
- [secondaryBalance](inpaymentaccount/secondarybalance.md): A secondary balance, if any, associated with the account.
- [INBalanceAmount](inbalanceamount.md): A balance associated with an account.

### Initializers

- [init(coder:)](inpaymentaccount/init%28coder_%29.md)

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

### Data Objects

- [INAccountType](inaccounttype.md): Constants indicating the type of account involved in a financial transaction.
- [INCurrencyAmount](incurrencyamount.md): An amount of money to transfer during a financial transaction.
- [INPaymentAmount](inpaymentamount.md): The amount of money to apply to a bill payment.
- [INPaymentMethod](inpaymentmethod.md): Information about a form of payment supported by your app.
- [INPaymentRecord](inpaymentrecord.md): Detailed information about a financial transaction made between two users.
- [INPaymentStatus](inpaymentstatus.md): Constants indicating the state of the financial transaction.
- [INPerson](inperson.md): Information about a person participating in a SiriKit interaction.

# INPaymentAccount (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A user account that provides the funds when making a payment.

## Declaration

```objectivec
@interface INPaymentAccount : NSObject
```

<a id="overview"></a>

## Overview

An [INPaymentAccount](inpaymentaccount.md) object represents a user account known to your app. When paying bills, you use the specified payment account as the source of any funds involved in the financial transaction. Your app must have the authority to transfer funds from the designated account to any payees.

## Topics

### Initializing the Payment Account

- [initWithNickname:number:accountType:organizationName:balance:secondaryBalance:](inpaymentaccount/init%28nickname_number_accounttype_organizationname_balance_secondarybalance_%29.md): Initializes a payment account object with the specified account information.
- [initWithNickname:number:accountType:organizationName:](inpaymentaccount/init%28nickname_number_accounttype_organizationname_%29.md): Deprecated. Initializes a payment account object with the specified account information.

### Getting the Account Details

- [nickname](inpaymentaccount/nickname.md): A user-defined name that identifies the account.
- [organizationName](inpaymentaccount/organizationname.md): The name of the organization that supplies the account to the user.
- [accountType](inpaymentaccount/accounttype.md): The type of the account.
- [INAccountType](inaccounttype.md): Constants indicating the type of account involved in a financial transaction.
- [accountNumber](inpaymentaccount/accountnumber.md): A string to help the user differentiate between similar accounts.

### Getting the Account Balance

- [balance](inpaymentaccount/balance.md): The primary balance associated with the account.
- [secondaryBalance](inpaymentaccount/secondarybalance.md): A secondary balance, if any, associated with the account.
- [INBalanceAmount](inbalanceamount.md): A balance associated with an account.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Data Objects

- [INAccountType](inaccounttype.md): Constants indicating the type of account involved in a financial transaction.
- [INCurrencyAmount](incurrencyamount.md): An amount of money to transfer during a financial transaction.
- [INPaymentAmount](inpaymentamount.md): The amount of money to apply to a bill payment.
- [INPaymentMethod](inpaymentmethod.md): Information about a form of payment supported by your app.
- [INPaymentRecord](inpaymentrecord.md): Detailed information about a financial transaction made between two users.
- [INPaymentStatus](inpaymentstatus.md): Constants indicating the state of the financial transaction.
- [INPerson](inperson.md): Information about a person participating in a SiriKit interaction.
