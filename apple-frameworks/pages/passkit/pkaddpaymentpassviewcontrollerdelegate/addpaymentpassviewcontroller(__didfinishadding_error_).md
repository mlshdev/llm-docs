> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddpaymentpassviewcontrollerdelegate/addpaymentpassviewcontroller(_:didfinishadding:error:)](https://developer.apple.com/documentation/passkit/pkaddpaymentpassviewcontrollerdelegate/addpaymentpassviewcontroller(_:didfinishadding:error:))

# addPaymentPassViewController(\_:didFinishAdding:error:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

## Declaration

```swift
func addPaymentPassViewController(_ controller: PKAddPaymentPassViewController, didFinishAdding pass: PKPaymentPass?, error: (any Error)?)
```

## Parameters

- `controller`: The controller adding the pass.
- `pass`: The completed pass, or `nil` if there was an error.
- `error`: If the request failed, this parameter contains an error object using the [PKPassKitErrorDomain](../pkpasskiterrordomain.md) error domain. For a list of possible error codes, see the [PKAddPaymentPassError](../pkaddpaymentpasserror.md) enum.

<a id="Discussion"></a>

## Discussion

This method is called when the request successfully adds the card to Apple Pay or when the request fails.

## See Also

### Requesting to add payment cards to Apple Pay

- [addPaymentPassViewController(\_:generateRequestWithCertificateChain:nonce:nonceSignature:completionHandler:)](addpaymentpassviewcontroller%28__generaterequestwithcertificatechain_nonce_noncesignature_completionhandler_%29.md): Asks the delegate to create an add payment request.
- [PKAddPaymentPassRequest](../pkaddpaymentpassrequest.md): Contains the card data needed to add a card to Apple Pay.

# addPaymentPassViewController:didFinishAddingPaymentPass:error: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

## Declaration

```objectivec
- (void) addPaymentPassViewController:(PKAddPaymentPassViewController *) controller didFinishAddingPaymentPass:(PKPaymentPass *) pass error:(NSError *) error;
```

## Parameters

- `controller`: The controller adding the pass.
- `pass`: The completed pass, or `nil` if there was an error.
- `error`: If the request failed, this parameter contains an error object using the [PKPassKitErrorDomain](../pkpasskiterrordomain.md) error domain. For a list of possible error codes, see the [PKAddPaymentPassError](../pkaddpaymentpasserror.md) enum.

<a id="Discussion"></a>

## Discussion

This method is called when the request successfully adds the card to Apple Pay or when the request fails.

## See Also

### Requesting to add payment cards to Apple Pay

- [addPaymentPassViewController:generateRequestWithCertificateChain:nonce:nonceSignature:completionHandler:](addpaymentpassviewcontroller%28__generaterequestwithcertificatechain_nonce_noncesignature_completionhandler_%29.md): Asks the delegate to create an add payment request.
- [PKAddPaymentPassRequest](../pkaddpaymentpassrequest.md): Contains the card data needed to add a card to Apple Pay.
