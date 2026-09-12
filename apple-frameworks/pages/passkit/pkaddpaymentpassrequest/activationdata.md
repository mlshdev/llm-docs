> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddpaymentpassrequest/activationdata](https://developer.apple.com/documentation/passkit/pkaddpaymentpassrequest/activationdata)

# activationData (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+

The request’s activation data.

## Declaration

```swift
var activationData: Data? { get set }
```

<a id="Discussion"></a>

## Discussion

This property contains the data provided to the payment network as a cryptographic one-time pad (OTP), per the Payment Network API specification. The cryptographic OTP is not interpreted by Apple or iOS. The OTP should be verified by the issuer and/or payment network upon receipt of the provisioning request to ensure the request’s authenticity. For more information about the activation data’s content, contact your payment network.

> **Note**

>  This is the same type of activation data that is accepted by the pass library’s [activate(\_:withActivationData:completion:)](../pkpasslibrary/activate%28__withactivationdata_completion_%29.md) method.

## See Also

### Accessing request data

- [encryptedPassData](encryptedpassdata.md): An encrypted JSON file containing the sensitive information needed to add a card to Apple Pay.
- [ephemeralPublicKey](ephemeralpublickey.md): The ephemeral public key used by elliptic curve cryptography (ECC).
- [wrappedKey](wrappedkey.md)

# activationData (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+

The request’s activation data.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSData * activationData;
```

<a id="Discussion"></a>

## Discussion

This property contains the data provided to the payment network as a cryptographic one-time pad (OTP), per the Payment Network API specification. The cryptographic OTP is not interpreted by Apple or iOS. The OTP should be verified by the issuer and/or payment network upon receipt of the provisioning request to ensure the request’s authenticity. For more information about the activation data’s content, contact your payment network.

> **Note**

>  This is the same type of activation data that is accepted by the pass library’s [activatePaymentPass:withActivationData:completion:](../pkpasslibrary/activate%28__withactivationdata_completion_%29.md) method.

## See Also

### Accessing request data

- [encryptedPassData](encryptedpassdata.md): An encrypted JSON file containing the sensitive information needed to add a card to Apple Pay.
- [ephemeralPublicKey](ephemeralpublickey.md): The ephemeral public key used by elliptic curve cryptography (ECC).
- [wrappedKey](wrappedkey.md)
