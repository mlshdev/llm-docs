> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skerror/code](https://developer.apple.com/documentation/storekit/skerror/code)

# SKError.Code (Swift)

**Framework:** StoreKit  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+ · watchOS 6.2+

Error codes for StoreKit errors.

## Declaration

```swift
enum Code
```

## Mentioned In

- [Handling errors](../handling-errors.md)

## Topics

### Enumeration Cases

- [SKError.Code.unknown](code/unknown.md): Error code indicating that an unknown or unexpected error occurred.
- [SKError.Code.clientInvalid](code/clientinvalid.md): Error code indicating that the client is not allowed to perform the attempted action.
- [SKError.Code.paymentCancelled](code/paymentcancelled.md): Error code indicating that the user canceled a payment request.
- [SKError.Code.paymentInvalid](code/paymentinvalid.md): Error code indicating that one of the payment parameters wasn’t recognized by the App Store.
- [SKError.Code.paymentNotAllowed](code/paymentnotallowed.md): Error code indicating that the user is not allowed to authorize payments.
- [SKError.Code.storeProductNotAvailable](code/storeproductnotavailable.md): Error code indicating that the requested product is not available in the store.
- [SKError.Code.cloudServicePermissionDenied](code/cloudservicepermissiondenied.md): Error code indicating that the user has not allowed access to Cloud service information.
- [SKError.Code.cloudServiceNetworkConnectionFailed](code/cloudservicenetworkconnectionfailed.md): Error code indicating that the device could not connect to the network.
- [SKError.Code.cloudServiceRevoked](code/cloudservicerevoked.md): Error code indicating that the user has revoked permission to use this cloud service.
- [SKError.Code.privacyAcknowledgementRequired](code/privacyacknowledgementrequired.md): Error code indicating that the user has not yet acknowledged Apple’s privacy policy for Apple Music.
- [SKError.Code.unauthorizedRequestData](code/unauthorizedrequestdata.md): Error code indicating that the app is attempting to use a property for which it does not have the required entitlement.
- [SKError.Code.invalidOfferIdentifier](code/invalidofferidentifier.md): Error code indicating that the offer identifier is invalid.
- [SKError.Code.invalidOfferPrice](code/invalidofferprice.md): Error code indicating that the price you specified in App Store Connect is no longer valid.
- [SKError.Code.invalidSignature](code/invalidsignature.md): Error code indicating that the signature in a payment discount isn’t valid.
- [SKError.Code.missingOfferParams](code/missingofferparams.md): Error code indicating that parameters are missing in a payment discount.
- [SKError.Code.ineligibleForOffer](code/ineligibleforoffer.md): An error code that indicates the user is ineligible for the subscription offer.
- [SKError.Code.overlayCancelled](code/overlaycancelled.md): An error code that indicates the cancellation of an overlay.
- [SKError.Code.overlayInvalidConfiguration](code/overlayinvalidconfiguration.md): An error code that indicates the overlay’s configuration is invalid.
- [SKError.Code.overlayPresentedInBackgroundScene](code/overlaypresentedinbackgroundscene.md)
- [SKError.Code.overlayTimeout](code/overlaytimeout.md)
- [SKError.Code.unsupportedPlatform](code/unsupportedplatform.md): An error code that indicates the current platform doesn’t support overlays.
- [SKError.Code.paymentMethodBindingConfigurationRequired](code/paymentmethodbindingconfigurationrequired.md)

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [Handling errors](../handling-errors.md): Determine the underlying cause of errors that result from StoreKit requests.
- [SKError](../skerror.md): StoreKit error descriptions, codes, and domains.
- [SKErrorDomain](../skerrordomain.md): The error domain name for StoreKit errors.

# SKErrorCode (Objective-C)

**Framework:** StoreKit  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+ · watchOS 6.2+

Error codes for StoreKit errors.

## Declaration

```objectivec
enum SKErrorCode : NSInteger;
```

## Mentioned In

- [Handling errors](../handling-errors.md)

## Topics

### Enumeration Cases

- [SKErrorUnknown](code/unknown.md): Error code indicating that an unknown or unexpected error occurred.
- [SKErrorClientInvalid](code/clientinvalid.md): Error code indicating that the client is not allowed to perform the attempted action.
- [SKErrorPaymentCancelled](code/paymentcancelled.md): Error code indicating that the user canceled a payment request.
- [SKErrorPaymentInvalid](code/paymentinvalid.md): Error code indicating that one of the payment parameters wasn’t recognized by the App Store.
- [SKErrorPaymentNotAllowed](code/paymentnotallowed.md): Error code indicating that the user is not allowed to authorize payments.
- [SKErrorStoreProductNotAvailable](code/storeproductnotavailable.md): Error code indicating that the requested product is not available in the store.
- [SKErrorCloudServicePermissionDenied](code/cloudservicepermissiondenied.md): Error code indicating that the user has not allowed access to Cloud service information.
- [SKErrorCloudServiceNetworkConnectionFailed](code/cloudservicenetworkconnectionfailed.md): Error code indicating that the device could not connect to the network.
- [SKErrorCloudServiceRevoked](code/cloudservicerevoked.md): Error code indicating that the user has revoked permission to use this cloud service.
- [SKErrorPrivacyAcknowledgementRequired](code/privacyacknowledgementrequired.md): Error code indicating that the user has not yet acknowledged Apple’s privacy policy for Apple Music.
- [SKErrorUnauthorizedRequestData](code/unauthorizedrequestdata.md): Error code indicating that the app is attempting to use a property for which it does not have the required entitlement.
- [SKErrorInvalidOfferIdentifier](code/invalidofferidentifier.md): Error code indicating that the offer identifier is invalid.
- [SKErrorInvalidOfferPrice](code/invalidofferprice.md): Error code indicating that the price you specified in App Store Connect is no longer valid.
- [SKErrorInvalidSignature](code/invalidsignature.md): Error code indicating that the signature in a payment discount isn’t valid.
- [SKErrorMissingOfferParams](code/missingofferparams.md): Error code indicating that parameters are missing in a payment discount.
- [SKErrorIneligibleForOffer](code/ineligibleforoffer.md): An error code that indicates the user is ineligible for the subscription offer.
- [SKErrorOverlayCancelled](code/overlaycancelled.md): An error code that indicates the cancellation of an overlay.
- [SKErrorOverlayInvalidConfiguration](code/overlayinvalidconfiguration.md): An error code that indicates the overlay’s configuration is invalid.
- [SKErrorOverlayPresentedInBackgroundScene](code/overlaypresentedinbackgroundscene.md)
- [SKErrorOverlayTimeout](code/overlaytimeout.md)
- [SKErrorUnsupportedPlatform](code/unsupportedplatform.md): An error code that indicates the current platform doesn’t support overlays.
- [SKErrorPaymentMethodBindingConfigurationRequired](code/paymentmethodbindingconfigurationrequired.md)

## See Also

### Errors

- [Handling errors](../handling-errors.md): Determine the underlying cause of errors that result from StoreKit requests.
- [SKErrorDomain](../skerrordomain.md): The error domain name for StoreKit errors.
