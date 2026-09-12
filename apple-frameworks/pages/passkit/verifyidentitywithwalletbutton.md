> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/verifyidentitywithwalletbutton](https://developer.apple.com/documentation/passkit/verifyidentitywithwalletbutton)

# VerifyIdentityWithWalletButton

**Framework:** PassKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS

A type that displays a button to present the identity verification flow.

## Declaration

```swift
@MainActor @preconcurrency struct VerifyIdentityWithWalletButton<Fallback> where Fallback : View
```

<a id="Overview"></a>

## Overview

Use this structure as the SwiftUI equivalent to [PKIdentityButton](pkidentitybutton.md). The system allows one in-progress identity request at a time. Otherwise, it returns a [PKIdentityError.Code.requestAlreadyInProgress](pkidentityerror-swift.struct/code/requestalreadyinprogress.md) error.

This example shows an implementation of the Verify Identity with Wallet button. For more information, see [Requesting identity data from a Wallet pass](requesting-identity-data-from-a-wallet-pass.md).

```swift
// Create an identity request.
func createRequest() -> PKIdentityRequest {
    let descriptor = PKIdentityDriversLicenseDescriptor()
    descriptor.addElements([.age(atLeast: 18)],
                            intentToStore: .willNotStore)
    descriptor.addElements([.givenName, .familyName, .portrait],
                            intentToStore: .mayStore(days: 30))

    let request = PKIdentityRequest()
    request.descriptor = descriptor
    // The merchant ID you configured in your Apple Developer account.
    request.merchantIdentifier = <YOUR_MERCHANT_ID> 
    // The nonce your server generates.
    request.nonce = <YOUR_NONCE_VALUE> 
}
```

```swift
// Show the Verify Identity with Wallet button and handle the identity request result.
@ViewBuilder var verifiyIdentityButton: some View {
    VerifyIdentityWithWalletButton(
        .verifyIdentity,
        request: createRequest(),
    ) { result in
        switch result {
        case .success(let document):
            // Securely transfer the document to the server for decryption and verification.
        case .failure(let error):
            switch error {
            case PKIdentityError.cancelled:
                // Handle the cancellation error.
            default:
                // Handle other errors.
            }
        }
    } fallback: {
        // Verify the person's identity another way.
    }
}
```

## Topics

### Creating the button

- [init(\_:action:)](verifyidentitywithwalletbutton/init%28__action_%29.md): Conforms when `Fallback` is `EmptyView`. Creates a verify identity button that starts the identity authorization flow.
- [init(\_:request:onCompletion:)](verifyidentitywithwalletbutton/init%28__request_oncompletion_%29.md): Conforms when `Fallback` is `EmptyView`. Creates a verify identity button that starts the identity authorization flow, with a completion handler.
- [init(\_:request:onCompletion:fallback:)](verifyidentitywithwalletbutton/init%28__request_oncompletion_fallback_%29.md): Conforms when `Fallback` conforms to `View`. Creates a verify identity button that starts the identity authorization flow, with a fallback view to use if the app can’t start the flow.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)

## See Also

### Identity sheet interactions and authorization

- [PKIdentityAuthorizationController](pkidentityauthorizationcontroller.md): An object that presents a sheet that prompts the user to allow a request for identity information.
- [PKIdentityRequest](pkidentityrequest.md): An object that represents a request for identity information from a Wallet pass.
- [PKIdentityDocument](pkidentitydocument.md): An object that represents the response to a request.
- [PKIdentityElement](pkidentityelement.md): An object that represents the elements an app requests from identity documents.
- [PKIdentityButton](pkidentitybutton.md): An object that displays a button to trigger the identity verification flow.
- [VerifyIdentityWithWalletButtonLabel](verifyidentitywithwalletbuttonlabel.md): A type that represents the label you use with a verify identity button.
- [VerifyIdentityWithWalletButtonStyle](verifyidentitywithwalletbuttonstyle.md): A type that represents the style you use with a verify identity button.
