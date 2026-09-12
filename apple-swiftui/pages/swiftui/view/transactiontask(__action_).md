> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/transactiontask(_:action:)](https://developer.apple.com/documentation/swiftui/view/transactiontask(_:action:))

# transactionTask(\_:action:)

**Framework:** SecureElementCredential  
**Kind:** Instance Method  
**Availability:** iOS 18.1+ · iPadOS 18.1+

Provides a task to perform before this view appears

## Declaration

```swift
nonisolated func transactionTask(_ configuration: CredentialTransaction.Configuration?, action: @escaping (CredentialTransaction) async -> Void) -> some View

```

## Parameters

- `configuration`: A configuration containing information about the transaction task. When the task is completed or an error is encountered while performing the task, the system invalidates this configuration, and the `CredentialTransaction` is invalidated.
- `action`: A closure that will be called when `isPerformingTransaction` is `true`. It provides a `CredentialTransaction` instance that can be used to perform transactions.

<a id="discussion"></a>

## Discussion

This task provides an instance of a `CredentialTransaction` to be used to perform transactions.

A typical client should use the APIs in the following sequence:

1. `acquirePresentmentIntentAssertion()` prior to showing any proprietary payment UI
2. `relinquish()` the assertion before invoking the transaction API
3. `configuration.invalidate()` after presenting the credential
4. Optionally, `acquirePresentmentIntentAssertion()` to finish up any proprietary payment UI
5. `relinquish()` the assertion

For example:

```swift
 struct TransactionView: View {
     @State private var configuration: CredentialTransaction.Configuration?
     private var assertion: PresentmentIntentAssertion // acquirePresentmentIntentAssertion() before transitioning into this view (step 1)
     private var activeSession: CredentialSession
     private var selectedCredential: Credential

     var body: some View {
         VStack {
             Button("Perform Transaction") {
                 guard let configuration else {
                    configuration = activeSession.configuration()
                    return
                 }

                 configuration.invalidate() // step 3
                 // Optional
                 assertion = try await session.acquirePresentmentIntentAssertion() // step 4
                 // handle any proprietary UI
                 try await assertion.relinquish() // step 5
                 // Optional end
             }
             .transactionTask(configuration) { transaction in
                 do {
                     try await assertion.relinquish() // step 2
                     try await transaction.performTransaction(using: selectedCredential)
                 } catch {
                     // code to handle error
                 }
             }
         }
     }
 }
```

## See Also

### Accessing Apple Pay and Wallet

- [PayWithApplePayButton](https://developer.apple.com/documentation/passkit/paywithapplepaybutton): A type that provides a button to pay with Apple pay.
- [AddPassToWalletButton](https://developer.apple.com/documentation/passkit/addpasstowalletbutton): A type that provides a button that enables people to add a new or existing pass to Apple Wallet.
- [VerifyIdentityWithWalletButton](https://developer.apple.com/documentation/passkit/verifyidentitywithwalletbutton): A type that displays a button to present the identity verification flow.
- [addOrderToWalletButtonStyle(\_:)](addordertowalletbuttonstyle%28__%29.md): Sets the button’s style.
- [addPassToWalletButtonStyle(\_:)](addpasstowalletbuttonstyle%28__%29.md): Sets the style to be used by the button. (see `PKAddPassButtonStyle`).
- [onApplePayCouponCodeChange(perform:)](onapplepaycouponcodechange%28perform_%29.md): Called when a user has entered or updated a coupon code. This is required if the user is being asked to provide a coupon code.
- [onApplePayPaymentMethodChange(perform:)](onapplepaypaymentmethodchange%28perform_%29.md): Called when a payment method has changed and asks for an update payment request. If this modifier isn’t provided Wallet will assume the payment method is valid.
- [onApplePayShippingContactChange(perform:)](onapplepayshippingcontactchange%28perform_%29.md): Called when a user selected a shipping address. This is required if the user is being asked to provide a shipping contact.
- [onApplePayShippingMethodChange(perform:)](onapplepayshippingmethodchange%28perform_%29.md): Called when a user selected a shipping method. This is required if the user is being asked to provide a shipping method.
- [payLaterViewAction(\_:)](paylaterviewaction%28__%29.md): Sets the action on the PayLaterView. See `PKPayLaterAction`.
- [payLaterViewDisplayStyle(\_:)](paylaterviewdisplaystyle%28__%29.md): Sets the display style on the PayLaterView. See `PKPayLaterDisplayStyle`.
- [payWithApplePayButtonDisableCardArt()](paywithapplepaybuttondisablecardart%28%29.md): Sets the features that should be allowed to show on the payment buttons.
- [payWithApplePayButtonStyle(\_:)](paywithapplepaybuttonstyle%28__%29.md): Sets the style to be used by the button. (see `PayWithApplePayButtonStyle`).
- [verifyIdentityWithWalletButtonStyle(\_:)](verifyidentitywithwalletbuttonstyle%28__%29.md): Sets the style to be used by the button. (see `PKIdentityButtonStyle`).
- [AsyncShareablePassConfiguration](https://developer.apple.com/documentation/passkit/asyncshareablepassconfiguration)
