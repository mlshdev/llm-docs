> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skerror/invalidsignature](https://developer.apple.com/documentation/storekit/skerror/invalidsignature)

# invalidSignature

**Framework:** StoreKit  
**Kind:** Type Property  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.1+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 6.2+

Error code indicating that the signature in a payment discount is not valid.

## Declaration

```swift
static var invalidSignature: SKError.Code { get }
```

## See Also

### Error codes

- [SKError.Code](code.md): Error codes for StoreKit errors.
- [unknown](unknown.md): Error code indicating that an unknown or unexpected error occurred.
- [clientInvalid](clientinvalid.md): Error code indicating that the client is not allowed to perform the attempted action.
- [paymentCancelled](paymentcancelled.md): Error code indicating that the user canceled a payment request.
- [paymentInvalid](paymentinvalid.md): Error code indicating that one of the payment parameters was not recognized by the App Store.
- [paymentNotAllowed](paymentnotallowed.md): Error code indicating that the user is not allowed to authorize payments.
- [storeProductNotAvailable](storeproductnotavailable.md): Error code indicating that the requested product is not available in the store.
- [cloudServicePermissionDenied](cloudservicepermissiondenied.md): Error code indicating that the user has not allowed access to Cloud service information.
- [cloudServiceNetworkConnectionFailed](cloudservicenetworkconnectionfailed.md): Error code indicating that the device could not connect to the network.
- [cloudServiceRevoked](cloudservicerevoked.md): Error code indicating that the user has revoked permission to use this cloud service.
- [privacyAcknowledgementRequired](privacyacknowledgementrequired.md): Error code indicating that the user has not yet acknowledged Apple’s privacy policy for Apple Music.
- [unauthorizedRequestData](unauthorizedrequestdata.md): Error code indicating that the app is attempting to use a property for which it does not have the required entitlement.
- [invalidOfferIdentifier](invalidofferidentifier.md): Error code indicating that the offer identifier cannot be found or is not active.
- [invalidOfferPrice](invalidofferprice.md): Error code indicating that the price you specified in App Store Connect is no longer valid.
- [missingOfferParams](missingofferparams.md): Error code indicating that parameters are missing in a payment discount.
