> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/addordertowalletbuttonstyle(_:)](https://developer.apple.com/documentation/swiftui/view/addordertowalletbuttonstyle(_:))

# addOrderToWalletButtonStyle(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Sets the button’s style.

## Declaration

```swift
@MainActor @preconcurrency func addOrderToWalletButtonStyle(_ style: AddOrderToWalletButtonStyle) -> some View

```

<a id="discussion"></a>

## Discussion

(See `AddOrderToWalletButtonStyle`).

## See Also

### Accessing Apple Pay and Wallet

- [PayWithApplePayButton](https://developer.apple.com/documentation/passkit/paywithapplepaybutton): A type that provides a button to pay with Apple pay.
- [AddPassToWalletButton](https://developer.apple.com/documentation/passkit/addpasstowalletbutton): A type that provides a button that enables people to add a new or existing pass to Apple Wallet.
- [VerifyIdentityWithWalletButton](https://developer.apple.com/documentation/passkit/verifyidentitywithwalletbutton): A type that displays a button to present the identity verification flow.
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
- [transactionTask(\_:action:)](transactiontask%28__action_%29.md): Provides a task to perform before this view appears
