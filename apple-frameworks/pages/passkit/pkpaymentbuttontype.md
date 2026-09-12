> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentbuttontype](https://developer.apple.com/documentation/passkit/pkpaymentbuttontype)

# PKPaymentButtonType (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 8.3+ · iPadOS 8.3+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

The Apple Pay button types you can display to initiate Apple Pay transactions.

## Declaration

```swift
enum PKPaymentButtonType
```

<a id="overview"></a>

## Overview

The button type you use for payments made with Apple Pay can affect the purchasing experience. Choose a button type that best fits with the terminology and flow of your purchase or payment experience. For design guidance, see [Human Interface Guidelines \> Apple Pay \> Buttons and Marks](https://developer.apple.com/design/human-interface-guidelines/apple-pay/overview/buttons-and-marks/).

Before using a specific button type, check that it’s available to the iOS version that your app is running on. Create buttons using the [buttonWithType:style:](pkpaymentbutton/buttonwithtype_style_.md) method.

## Topics

### Payment button types

- [PKPaymentButtonType.plain](pkpaymentbuttontype/plain.md): An Apple Pay button with the Apple Pay logo only, useful when an additional call to action isn’t needed.
- [PKPaymentButtonType.buy](pkpaymentbuttontype/buy.md): An Apple Pay button useful for product purchases.
- [PKPaymentButtonType.addMoney](pkpaymentbuttontype/addmoney.md): An Apple Pay button useful for adding money to a card, account, or payment system.
- [PKPaymentButtonType.book](pkpaymentbuttontype/book.md): An Apple Pay button useful for booking trips, flights, or other experiences.
- [PKPaymentButtonType.checkout](pkpaymentbuttontype/checkout.md): An Apple Pay button useful for purchase experiences that include other payment buttons that start with “Check out”.
- [PKPaymentButtonType.continue](pkpaymentbuttontype/continue.md): An Apple Pay button useful for general purchases.
- [PKPaymentButtonType.contribute](pkpaymentbuttontype/contribute.md): An Apple Pay button useful to help people contribute money to projects, causes, organizations, and other entities.
- [PKPaymentButtonType.donate](pkpaymentbuttontype/donate.md): An Apple Pay button used by approved nonprofit organization that lets people make donations.
- [PKPaymentButtonType.inStore](pkpaymentbuttontype/instore.md): An Apple Pay button useful for paying bills or invoices.
- [PKPaymentButtonType.order](pkpaymentbuttontype/order.md): An Apple Pay button useful for placing orders for such as like meals or flowers.
- [PKPaymentButtonType.reload](pkpaymentbuttontype/reload.md): An Apple Pay button useful for adding money to a card, account, or payment system.
- [PKPaymentButtonType.rent](pkpaymentbuttontype/rent.md): An Apple Pay button useful for renting items such as cars or scooters.
- [PKPaymentButtonType.setUp](pkpaymentbuttontype/setup.md): An Apple Pay button useful for prompting the user to set up a card.
- [PKPaymentButtonType.subscribe](pkpaymentbuttontype/subscribe.md): An Apple Pay button useful for purchasing a subscription such as a gym membership or meal-kit delivery service.
- [PKPaymentButtonType.support](pkpaymentbuttontype/support.md): An Apple Pay button useful supporting people give money to projects, causes, organizations, and other entities.
- [PKPaymentButtonType.tip](pkpaymentbuttontype/tip.md): An Apple Pay button useful useful for letting people tip for goods or services.
- [PKPaymentButtonType.topUp](pkpaymentbuttontype/topup.md): An Apple Pay button useful for adding money to a card, account, or payment system.

### Initializers

- [init(rawValue:)](pkpaymentbuttontype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the appearance

- [PKPaymentButtonStyle](pkpaymentbuttonstyle.md): A type that indicates the available appearances for an Apple Pay button.
- [cornerRadius](pkpaymentbutton/cornerradius.md): The radius, in points, for the rounded corners on the button.

# PKPaymentButtonType (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 8.3+ · iPadOS 8.3+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

The Apple Pay button types you can display to initiate Apple Pay transactions.

## Declaration

```objectivec
enum PKPaymentButtonType : NSInteger;
```

<a id="overview"></a>

## Overview

The button type you use for payments made with Apple Pay can affect the purchasing experience. Choose a button type that best fits with the terminology and flow of your purchase or payment experience. For design guidance, see [Human Interface Guidelines \> Apple Pay \> Buttons and Marks](https://developer.apple.com/design/human-interface-guidelines/apple-pay/overview/buttons-and-marks/).

Before using a specific button type, check that it’s available to the iOS version that your app is running on. Create buttons using the [buttonWithType:style:](pkpaymentbutton/buttonwithtype_style_.md) method.

## Topics

### Payment button types

- [PKPaymentButtonTypePlain](pkpaymentbuttontype/plain.md): An Apple Pay button with the Apple Pay logo only, useful when an additional call to action isn’t needed.
- [PKPaymentButtonTypeBuy](pkpaymentbuttontype/buy.md): An Apple Pay button useful for product purchases.
- [PKPaymentButtonTypeAddMoney](pkpaymentbuttontype/addmoney.md): An Apple Pay button useful for adding money to a card, account, or payment system.
- [PKPaymentButtonTypeBook](pkpaymentbuttontype/book.md): An Apple Pay button useful for booking trips, flights, or other experiences.
- [PKPaymentButtonTypeCheckout](pkpaymentbuttontype/checkout.md): An Apple Pay button useful for purchase experiences that include other payment buttons that start with “Check out”.
- [PKPaymentButtonTypeContinue](pkpaymentbuttontype/continue.md): An Apple Pay button useful for general purchases.
- [PKPaymentButtonTypeContribute](pkpaymentbuttontype/contribute.md): An Apple Pay button useful to help people contribute money to projects, causes, organizations, and other entities.
- [PKPaymentButtonTypeDonate](pkpaymentbuttontype/donate.md): An Apple Pay button used by approved nonprofit organization that lets people make donations.
- [PKPaymentButtonTypeInStore](pkpaymentbuttontype/instore.md): An Apple Pay button useful for paying bills or invoices.
- [PKPaymentButtonTypeOrder](pkpaymentbuttontype/order.md): An Apple Pay button useful for placing orders for such as like meals or flowers.
- [PKPaymentButtonTypeReload](pkpaymentbuttontype/reload.md): An Apple Pay button useful for adding money to a card, account, or payment system.
- [PKPaymentButtonTypeRent](pkpaymentbuttontype/rent.md): An Apple Pay button useful for renting items such as cars or scooters.
- [PKPaymentButtonTypeSetUp](pkpaymentbuttontype/setup.md): An Apple Pay button useful for prompting the user to set up a card.
- [PKPaymentButtonTypeSubscribe](pkpaymentbuttontype/subscribe.md): An Apple Pay button useful for purchasing a subscription such as a gym membership or meal-kit delivery service.
- [PKPaymentButtonTypeSupport](pkpaymentbuttontype/support.md): An Apple Pay button useful supporting people give money to projects, causes, organizations, and other entities.
- [PKPaymentButtonTypeTip](pkpaymentbuttontype/tip.md): An Apple Pay button useful useful for letting people tip for goods or services.
- [PKPaymentButtonTypeTopUp](pkpaymentbuttontype/topup.md): An Apple Pay button useful for adding money to a card, account, or payment system.

## See Also

### Configuring the appearance

- [PKPaymentButtonStyle](pkpaymentbuttonstyle.md): A type that indicates the available appearances for an Apple Pay button.
- [cornerRadius](pkpaymentbutton/cornerradius.md): The radius, in points, for the rounded corners on the button.
