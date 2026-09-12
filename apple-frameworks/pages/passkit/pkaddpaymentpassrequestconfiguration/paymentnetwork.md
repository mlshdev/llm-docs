> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddpaymentpassrequestconfiguration/paymentnetwork](https://developer.apple.com/documentation/passkit/pkaddpaymentpassrequestconfiguration/paymentnetwork)

# paymentNetwork (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+

The payment network.

## Declaration

```swift
var paymentNetwork: PKPaymentNetwork? { get set }
```

<a id="Discussion"></a>

## Discussion

This property determines which cards are shown in the [PKAddPaymentPassViewController](../pkaddpaymentpassviewcontroller.md) class’s intro screen. The property defaults to `nil`, and the [PKAddPaymentPassViewController](../pkaddpaymentpassviewcontroller.md) shows all the networks for the card’s region. To specify a single network, assign a constant to the property. See Payment Networks in [PKPaymentRequest](../pkpaymentrequest.md).

## See Also

### Filtering pass libraries

- [primaryAccountIdentifier](primaryaccountidentifier.md): A primary account identifier, used to filter out pass libraries.
- [requiresFelicaSecureElement](requiresfelicasecureelement.md): A Boolean value that indicates whether the payment pass requires the Felica Secure Element.

# paymentNetwork (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+

The payment network.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) PKPaymentNetwork paymentNetwork;
```

<a id="Discussion"></a>

## Discussion

This property determines which cards are shown in the [PKAddPaymentPassViewController](../pkaddpaymentpassviewcontroller.md) class’s intro screen. The property defaults to `nil`, and the [PKAddPaymentPassViewController](../pkaddpaymentpassviewcontroller.md) shows all the networks for the card’s region. To specify a single network, assign a constant to the property. See Payment Networks in [PKPaymentRequest](../pkpaymentrequest.md).

## See Also

### Filtering pass libraries

- [primaryAccountIdentifier](primaryaccountidentifier.md): A primary account identifier, used to filter out pass libraries.
- [requiresFelicaSecureElement](requiresfelicasecureelement.md): A Boolean value that indicates whether the payment pass requires the Felica Secure Element.
