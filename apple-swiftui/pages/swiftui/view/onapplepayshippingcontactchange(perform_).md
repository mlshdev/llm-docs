> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/onapplepayshippingcontactchange(perform:)](https://developer.apple.com/documentation/swiftui/view/onapplepayshippingcontactchange(perform:))

# onApplePayShippingContactChange(perform:)

**Framework:** PassKit  
**Kind:** Instance Method  
**Availability:** iOS 15.5+ · iPadOS 15.5+ · Mac Catalyst 15.5+ · macOS 12.5+ · watchOS 8.5+

Called when a user selected a shipping address. This is required if the user is being asked to provide a shipping contact.

## Declaration

```swift
nonisolated func onApplePayShippingContactChange(perform action: @escaping (PKContact) async -> PKPaymentRequestShippingContactUpdate) -> some View

```

<a id="return-value"></a>

## Return Value

An update to the payment request shipping methods.

## See Also

### Accessing Apple Pay and Wallet

- [PayWithApplePayButton](https://developer.apple.com/documentation/passkit/paywithapplepaybutton): A type that provides a button to pay with Apple pay.
- [AddPassToWalletButton](https://developer.apple.com/documentation/passkit/addpasstowalletbutton): A type that provides a button that enables people to add a new or existing pass to Apple Wallet.
- [VerifyIdentityWithWalletButton](https://developer.apple.com/documentation/passkit/verifyidentitywithwalletbutton): A type that displays a button to present the identity verification flow.
- [addOrderToWalletButtonStyle(\_:)](addordertowalletbuttonstyle%28__%29.md): Sets the button’s style.
- [addPassToWalletButtonStyle(\_:)](addpasstowalletbuttonstyle%28__%29.md): Sets the style to be used by the button. (see `PKAddPassButtonStyle`).
- [onApplePayCouponCodeChange(perform:)](onapplepaycouponcodechange%28perform_%29.md): Called when a user has entered or updated a coupon code. This is required if the user is being asked to provide a coupon code.
- [onApplePayPaymentMethodChange(perform:)](onapplepaypaymentmethodchange%28perform_%29.md): Called when a payment method has changed and asks for an update payment request. If this modifier isn’t provided Wallet will assume the payment method is valid.
- [onApplePayShippingMethodChange(perform:)](onapplepayshippingmethodchange%28perform_%29.md): Called when a user selected a shipping method. This is required if the user is being asked to provide a shipping method.
- [payLaterViewAction(\_:)](paylaterviewaction%28__%29.md): Sets the action on the PayLaterView. See `PKPayLaterAction`.
- [payLaterViewDisplayStyle(\_:)](paylaterviewdisplaystyle%28__%29.md): Sets the display style on the PayLaterView. See `PKPayLaterDisplayStyle`.
- [payWithApplePayButtonDisableCardArt()](paywithapplepaybuttondisablecardart%28%29.md): Sets the features that should be allowed to show on the payment buttons.
- [payWithApplePayButtonStyle(\_:)](paywithapplepaybuttonstyle%28__%29.md): Sets the style to be used by the button. (see `PayWithApplePayButtonStyle`).
- [verifyIdentityWithWalletButtonStyle(\_:)](verifyidentitywithwalletbuttonstyle%28__%29.md): Sets the style to be used by the button. (see `PKIdentityButtonStyle`).
- [AsyncShareablePassConfiguration](https://developer.apple.com/documentation/passkit/asyncshareablepassconfiguration)
- [transactionTask(\_:action:)](transactiontask%28__action_%29.md): Provides a task to perform before this view appears
