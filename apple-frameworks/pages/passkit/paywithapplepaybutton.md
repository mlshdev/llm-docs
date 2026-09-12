> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/paywithapplepaybutton](https://developer.apple.com/documentation/passkit/paywithapplepaybutton)

# PayWithApplePayButton

**Framework:** PassKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS · watchOS 9.0+

A type that provides a button to pay with Apple pay.

## Declaration

```swift
@MainActor @preconcurrency struct PayWithApplePayButton<Fallback> where Fallback : View
```

<a id="Overview"></a>

## Overview

Use this structure as the SwiftUI equivalent to [PKPaymentButton](pkpaymentbutton.md). For design guidance, see Human Interface Guidelines \> Apple Pay \> [Using Apple Pay buttons](https://developer.apple.com/design/human-interface-guidelines/apple-pay#Using-Apple-Pay-buttons).

This example shows an implementation of the Pay with Apple Pay button.

```swift
// Create a payment request.
@State private var paymentRequest = PKPaymentRequest()

// Create a payment authorization change method.
func paymentAuthorizationDidChange(phase: PayWithApplePayButtonPaymentAuthorizationPhase) { ... }

@ViewBuilder var payButton: some View {
    PayWithApplePayButton(
        .plain,
        request: paymentRequest,
        onPaymentAuthorizationChange: paymentAuthorizationDidChange
    ) {
        // Display a fallback view if the payment request fails.
    }
    .frame(width: 250, height: 50)
    .payWithApplePayButtonStyle(.automatic)
}
```

## Topics

### Creating the button

- [init(\_:action:)](paywithapplepaybutton/init%28__action_%29.md): Conforms when `Fallback` is `EmptyView`.
- [init(\_:action:fallback:)](paywithapplepaybutton/init%28__action_fallback_%29.md)
- [init(\_:request:onPaymentAuthorizationChange:)](paywithapplepaybutton/init%28__request_onpaymentauthorizationchange_%29.md): Conforms when `Fallback` is `EmptyView`.
- [init(\_:request:onPaymentAuthorizationChange:fallback:)](paywithapplepaybutton/init%28__request_onpaymentauthorizationchange_fallback_%29.md): Conforms when `Fallback` conforms to `View`.
- [init(\_:request:onPaymentAuthorizationChange:onMerchantSessionRequested:)](paywithapplepaybutton/init%28__request_onpaymentauthorizationchange_onmerchantsessionrequested_%29.md): Conforms when `Fallback` is `EmptyView`.
- [init(\_:request:onPaymentAuthorizationChange:onMerchantSessionRequested:fallback:)](paywithapplepaybutton/init%28__request_onpaymentauthorizationchange_onmerchantsessionrequested_fallback_%29.md): Conforms when `Fallback` conforms to `View`.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)

## See Also

### Apple Pay buttons

- [PKPaymentButton](pkpaymentbutton.md): An object that displays a button either to trigger payments through Apple Pay or to prompt the user to set up a card.
- [PayWithApplePayButtonLabel](paywithapplepaybuttonlabel.md)
- [PayWithApplePayButtonStyle](paywithapplepaybuttonstyle.md)
- [PayWithApplePayButtonLabel](paywithapplepaybuttonlabel.md)
