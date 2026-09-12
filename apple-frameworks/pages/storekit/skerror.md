> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skerror](https://developer.apple.com/documentation/storekit/skerror)

# SKError

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+ · watchOS 6.2+

StoreKit error descriptions, codes, and domains.

## Declaration

```swift
struct SKError
```

## Topics

### Error codes

- [SKError.Code](skerror/code.md): Error codes for StoreKit errors.
- [unknown](skerror/unknown.md): Error code indicating that an unknown or unexpected error occurred.
- [clientInvalid](skerror/clientinvalid.md): Error code indicating that the client is not allowed to perform the attempted action.
- [paymentCancelled](skerror/paymentcancelled.md): Error code indicating that the user canceled a payment request.
- [paymentInvalid](skerror/paymentinvalid.md): Error code indicating that one of the payment parameters was not recognized by the App Store.
- [paymentNotAllowed](skerror/paymentnotallowed.md): Error code indicating that the user is not allowed to authorize payments.
- [storeProductNotAvailable](skerror/storeproductnotavailable.md): Error code indicating that the requested product is not available in the store.
- [cloudServicePermissionDenied](skerror/cloudservicepermissiondenied.md): Error code indicating that the user has not allowed access to Cloud service information.
- [cloudServiceNetworkConnectionFailed](skerror/cloudservicenetworkconnectionfailed.md): Error code indicating that the device could not connect to the network.
- [cloudServiceRevoked](skerror/cloudservicerevoked.md): Error code indicating that the user has revoked permission to use this cloud service.
- [privacyAcknowledgementRequired](skerror/privacyacknowledgementrequired.md): Error code indicating that the user has not yet acknowledged Apple’s privacy policy for Apple Music.
- [unauthorizedRequestData](skerror/unauthorizedrequestdata.md): Error code indicating that the app is attempting to use a property for which it does not have the required entitlement.
- [invalidOfferIdentifier](skerror/invalidofferidentifier.md): Error code indicating that the offer identifier cannot be found or is not active.
- [invalidOfferPrice](skerror/invalidofferprice.md): Error code indicating that the price you specified in App Store Connect is no longer valid.
- [invalidSignature](skerror/invalidsignature.md): Error code indicating that the signature in a payment discount is not valid.
- [missingOfferParams](skerror/missingofferparams.md): Error code indicating that parameters are missing in a payment discount.
- [ineligibleForOffer](skerror/ineligibleforoffer.md): An error code that indicates the user is ineligible for the subscription offer.
- [overlayCancelled](skerror/overlaycancelled.md): An error code that indicates the cancellation of an overlay.
- [overlayInvalidConfiguration](skerror/overlayinvalidconfiguration.md): An error code that indicates the overlay’s configuration is invalid.
- [overlayPresentedInBackgroundScene](skerror/overlaypresentedinbackgroundscene.md)
- [overlayTimeout](skerror/overlaytimeout.md): An error code that indicates the timing out of an overlay.
- [unsupportedPlatform](skerror/unsupportedplatform.md): An error code that indicates the current platform doesn’t support overlays.

### Error domain

- [SKErrorDomain](skerrordomain.md): The error domain name for StoreKit errors.

### Type Properties

- [errorDomain](skerror/errordomain.md)
- [paymentMethodBindingConfigurationRequired](skerror/paymentmethodbindingconfigurationrequired.md)

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [Handling errors](handling-errors.md): Determine the underlying cause of errors that result from StoreKit requests.
- [SKError.Code](skerror/code.md): Error codes for StoreKit errors.
- [SKErrorDomain](skerrordomain.md): The error domain name for StoreKit errors.
