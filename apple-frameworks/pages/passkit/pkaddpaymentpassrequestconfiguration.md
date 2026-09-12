> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddpaymentpassrequestconfiguration](https://developer.apple.com/documentation/passkit/pkaddpaymentpassrequestconfiguration)

# PKAddPaymentPassRequestConfiguration (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+

Contains the configuration data for a view controller that lets the user add a payment pass.

## Declaration

```swift
class PKAddPaymentPassRequestConfiguration
```

<a id="overview"></a>

## Overview

The encryption scheme, cardholder name, and primary account suffix are required for configuration. The configuration information is used for setup and display only. It should not contain any sensitive information.

> **Important**

>  Adding payment passes requires a special entitlement issued by Apple. Your app must include this entitlement before you can use this class. For more information on requesting this entitlement, see the Card Issuers section at [developer.apple.com/apple-pay/](https://developer.apple.com/apple-pay/).

## Topics

### Creating a request configuration

- [init(encryptionScheme:)](pkaddpaymentpassrequestconfiguration/init%28encryptionscheme_%29.md): Instantiates a new request configuration with the given encryption scheme.
- [PKEncryptionScheme](pkencryptionscheme.md): Encryption schemes.

### Filtering pass libraries

- [paymentNetwork](pkaddpaymentpassrequestconfiguration/paymentnetwork.md): The payment network.
- [primaryAccountIdentifier](pkaddpaymentpassrequestconfiguration/primaryaccountidentifier.md): A primary account identifier, used to filter out pass libraries.
- [requiresFelicaSecureElement](pkaddpaymentpassrequestconfiguration/requiresfelicasecureelement.md): A Boolean value that indicates whether the payment pass requires the Felica Secure Element.

### Payment pass request properties

- [cardholderName](pkaddpaymentpassrequestconfiguration/cardholdername.md): The name of the person as shown on the card.
- [encryptionScheme](pkaddpaymentpassrequestconfiguration/encryptionscheme.md): The encryption scheme to be used in this request.
- [PKEncryptionScheme](pkencryptionscheme.md): Encryption schemes.
- [localizedDescription](pkaddpaymentpassrequestconfiguration/localizeddescription.md): A short description of the card.
- [primaryAccountSuffix](pkaddpaymentpassrequestconfiguration/primaryaccountsuffix.md): The last four or five digits of the card’s number.
- [cardDetails](pkaddpaymentpassrequestconfiguration/carddetails.md): An array of labeled values that describe a card.
- [PKLabeledValue](pklabeledvalue.md): An object that can represent a detail about a payment card or other item.
- [productIdentifiers](pkaddpaymentpassrequestconfiguration/productidentifiers.md)
- [style](pkaddpaymentpassrequestconfiguration/style.md): A value that indicates whether a pass is for access or for payment use.
- [PKAddPaymentPassStyle](pkaddpaymentpassstyle.md): The type of payment pass.

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

### Creating an add-payment-pass view controller

- [init(requestConfiguration:delegate:)](pkaddpaymentpassviewcontroller/init%28requestconfiguration_delegate_%29.md): Returns an initialized add payment view controller object, using the provided configuration and delegate.

# PKAddPaymentPassRequestConfiguration (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+

Contains the configuration data for a view controller that lets the user add a payment pass.

## Declaration

```objectivec
@interface PKAddPaymentPassRequestConfiguration : NSObject
```

<a id="overview"></a>

## Overview

The encryption scheme, cardholder name, and primary account suffix are required for configuration. The configuration information is used for setup and display only. It should not contain any sensitive information.

> **Important**

>  Adding payment passes requires a special entitlement issued by Apple. Your app must include this entitlement before you can use this class. For more information on requesting this entitlement, see the Card Issuers section at [developer.apple.com/apple-pay/](https://developer.apple.com/apple-pay/).

## Topics

### Creating a request configuration

- [initWithEncryptionScheme:](pkaddpaymentpassrequestconfiguration/init%28encryptionscheme_%29.md): Instantiates a new request configuration with the given encryption scheme.
- [PKEncryptionScheme](pkencryptionscheme.md): Encryption schemes.

### Filtering pass libraries

- [paymentNetwork](pkaddpaymentpassrequestconfiguration/paymentnetwork.md): The payment network.
- [primaryAccountIdentifier](pkaddpaymentpassrequestconfiguration/primaryaccountidentifier.md): A primary account identifier, used to filter out pass libraries.
- [requiresFelicaSecureElement](pkaddpaymentpassrequestconfiguration/requiresfelicasecureelement.md): A Boolean value that indicates whether the payment pass requires the Felica Secure Element.

### Payment pass request properties

- [cardholderName](pkaddpaymentpassrequestconfiguration/cardholdername.md): The name of the person as shown on the card.
- [encryptionScheme](pkaddpaymentpassrequestconfiguration/encryptionscheme.md): The encryption scheme to be used in this request.
- [PKEncryptionScheme](pkencryptionscheme.md): Encryption schemes.
- [localizedDescription](pkaddpaymentpassrequestconfiguration/localizeddescription.md): A short description of the card.
- [primaryAccountSuffix](pkaddpaymentpassrequestconfiguration/primaryaccountsuffix.md): The last four or five digits of the card’s number.
- [cardDetails](pkaddpaymentpassrequestconfiguration/carddetails.md): An array of labeled values that describe a card.
- [PKLabeledValue](pklabeledvalue.md): An object that can represent a detail about a payment card or other item.
- [productIdentifiers](pkaddpaymentpassrequestconfiguration/productidentifiers.md)
- [style](pkaddpaymentpassrequestconfiguration/style.md): A value that indicates whether a pass is for access or for payment use.
- [PKAddPaymentPassStyle](pkaddpaymentpassstyle.md): The type of payment pass.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Creating an add-payment-pass view controller

- [initWithRequestConfiguration:delegate:](pkaddpaymentpassviewcontroller/init%28requestconfiguration_delegate_%29.md): Returns an initialized add payment view controller object, using the provided configuration and delegate.
