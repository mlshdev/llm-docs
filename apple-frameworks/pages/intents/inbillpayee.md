> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbillpayee](https://developer.apple.com/documentation/intents/inbillpayee)

# INBillPayee (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The entity that receives the proceeds from a bill payment.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
class INBillPayee
```

<a id="overview"></a>

## Overview

An [INBillPayee](inbillpayee.md) object describes an entity that receives payment for a bill. When the user asks Siri to pay a bill, use this information to identify the entity receiving the payment. For example, a payee might represent a utility for which the user has already registered a bill payment option. Users must configure payees in advance using your app. This object contains information that you use to identify one of those preconfigured accounts.

> **Note**

>  When configuring bill-pay options in your app, don’t include the user’s account number in the organization name and don’t let the user specify other sensitive personal information in account nicknames. Siri can display nicknames and organization names and these should never contain any sensitive personal information.

## Topics

### Initializing the Payee Object

- [init(nickname:number:organizationName:)](inbillpayee/init%28nickname_number_organizationname_%29.md): Deprecated. Initializes a payee object with the specified account details.

### Getting the Payee Details

- [nickname](inbillpayee/nickname.md): Deprecated. A user-defined name that identifies a bill-payment account in your app.
- [organizationName](inbillpayee/organizationname.md): Deprecated. The name of the company that provides services to the user.
- [accountNumber](inbillpayee/accountnumber.md): Deprecated. A string to help the user differentiate between similar accounts.

### Initializers

- [init(coder:)](inbillpayee/init%28coder_%29.md): Deprecated.

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

### Bill Data Objects

- [INBillDetails](inbilldetails.md): Deprecated. The detailed information associated with a bill.
- [INBillTypeResolutionResult](inbilltyperesolutionresult.md): Deprecated. A resolution result for the types of bills a user might pay.
- [INBillPayeeResolutionResult](inbillpayeeresolutionresult.md): Deprecated. A resolution result for the recipient of a bill payment.
- [INVisualCodeTypeResolutionResult](invisualcodetyperesolutionresult.md): Deprecated. A resolution result for the type of visual code used to exchange information.

# INBillPayee (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The entity that receives the proceeds from a bill payment.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@interface INBillPayee : NSObject
```

<a id="overview"></a>

## Overview

An [INBillPayee](inbillpayee.md) object describes an entity that receives payment for a bill. When the user asks Siri to pay a bill, use this information to identify the entity receiving the payment. For example, a payee might represent a utility for which the user has already registered a bill payment option. Users must configure payees in advance using your app. This object contains information that you use to identify one of those preconfigured accounts.

> **Note**

>  When configuring bill-pay options in your app, don’t include the user’s account number in the organization name and don’t let the user specify other sensitive personal information in account nicknames. Siri can display nicknames and organization names and these should never contain any sensitive personal information.

## Topics

### Initializing the Payee Object

- [initWithNickname:number:organizationName:](inbillpayee/init%28nickname_number_organizationname_%29.md): Deprecated. Initializes a payee object with the specified account details.

### Getting the Payee Details

- [nickname](inbillpayee/nickname.md): Deprecated. A user-defined name that identifies a bill-payment account in your app.
- [organizationName](inbillpayee/organizationname.md): Deprecated. The name of the company that provides services to the user.
- [accountNumber](inbillpayee/accountnumber.md): Deprecated. A string to help the user differentiate between similar accounts.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Bill Data Objects

- [INBillDetails](inbilldetails.md): Deprecated. The detailed information associated with a bill.
- [INBillTypeResolutionResult](inbilltyperesolutionresult.md): Deprecated. A resolution result for the types of bills a user might pay.
- [INBillPayeeResolutionResult](inbillpayeeresolutionresult.md): Deprecated. A resolution result for the recipient of a bill payment.
- [INVisualCodeTypeResolutionResult](invisualcodetyperesolutionresult.md): Deprecated. A resolution result for the type of visual code used to exchange information.
