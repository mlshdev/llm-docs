> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/addpasstowalletbutton](https://developer.apple.com/documentation/passkit/addpasstowalletbutton)

# AddPassToWalletButton

**Framework:** PassKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS

A type that provides a button that enables people to add a new or existing pass to Apple Wallet.

## Declaration

```swift
@MainActor @preconcurrency struct AddPassToWalletButton<Fallback> where Fallback : View
```

<a id="Overview"></a>

## Overview

Use this structure as the SwiftUI equivalent to [PKAddPassButton](pkaddpassbutton.md). For design guidance, see Human Interface Guidelines \> Technologies \> [Wallet](https://developer.apple.com/design/human-interface-guidelines/wallet#Passes).

This example checks for a created pass and displays the Add to Apple Wallet button.

```swift
@State private var addedToWallet = false

@ViewBuilder var addPassButton: some View {
    if let pass = createMyPass() {
        AddPassToWalletButton([pass]) { added in
            addedToWallet = added
        }
        .frame(width: 250, height: 50)
        .addPassToWalletButtonStyle(.blackOutline)
    } else {
        // Display a fallback view if no pass exists.
    }
}
```

## Topics

### Creating the button

- [init(\_:cardholderName:passStyle:primaryAccountSuffix:cardDetails:description:filters:onRequest:onCompletion:)](addpasstowalletbutton/init%28__cardholdername_passstyle_primaryaccountsuffix_carddetails_description_filters_onrequest_oncompletion_%29.md): Conforms when `Fallback` is `EmptyView`.
- [init(\_:cardholderName:passStyle:primaryAccountSuffix:cardDetails:description:filters:onRequest:onCompletion:fallback:)](addpasstowalletbutton/init%28__cardholdername_passstyle_primaryaccountsuffix_carddetails_description_filters_onrequest_oncompletion_fallback_%29.md): Conforms when `Fallback` conforms to `View`.
- [init(\_:onCompletion:)](addpasstowalletbutton/init%28__oncompletion_%29-1inhj.md): Conforms when `Fallback` is `EmptyView`.
- [init(\_:onCompletion:)](addpasstowalletbutton/init%28__oncompletion_%29-5wkyi.md): Conforms when `Fallback` is `EmptyView`.
- [init(\_:onCompletion:fallback:)](addpasstowalletbutton/init%28__oncompletion_fallback_%29-77t5g.md): Conforms when `Fallback` conforms to `View`.
- [init(\_:onCompletion:fallback:)](addpasstowalletbutton/init%28__oncompletion_fallback_%29-7adn5.md): Conforms when `Fallback` conforms to `View`.
- [init(\_:onRequest:onCompletion:)](addpasstowalletbutton/init%28__onrequest_oncompletion_%29.md): Conforms when `Fallback` is `EmptyView`.
- [init(\_:onRequest:onCompletion:fallback:)](addpasstowalletbutton/init%28__onrequest_oncompletion_fallback_%29.md): Conforms when `Fallback` conforms to `View`.
- [init(\_:primaryAccountSuffix:passStyle:cardDetails:description:filters:onRequest:onCompletion:)](addpasstowalletbutton/init%28__primaryaccountsuffix_passstyle_carddetails_description_filters_onrequest_oncompletion_%29.md): Conforms when `Fallback` is `EmptyView`.
- [init(\_:primaryAccountSuffix:passStyle:cardDetails:description:filters:onRequest:onCompletion:fallback:)](addpasstowalletbutton/init%28__primaryaccountsuffix_passstyle_carddetails_description_filters_onrequest_oncompletion_fallback_%29.md): Conforms when `Fallback` conforms to `View`.
- [init(action:)](addpasstowalletbutton/init%28action_%29.md): Conforms when `Fallback` is `EmptyView`.
- [init(carKeyPassword:supportedRadioTechnologies:issuerIdentifier:onCompletion:)](addpasstowalletbutton/init%28carkeypassword_supportedradiotechnologies_issueridentifier_oncompletion_%29.md): Conforms when `Fallback` is `EmptyView`.
- [init(carKeyPassword:supportedRadioTechnologies:issuerIdentifier:onCompletion:fallback:)](addpasstowalletbutton/init%28carkeypassword_supportedradiotechnologies_issueridentifier_oncompletion_fallback_%29.md): Conforms when `Fallback` conforms to `View`.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)

## See Also

### Common data types

- [PKObject](pkobject.md): An opaque type that acts as the superclass for the pass object.
- [PKAddPassButton](pkaddpassbutton.md): Provides a button that enables users to add passes to Wallet.
- [PKLabeledValue](pklabeledvalue.md): An object that can represent a detail about a payment card or other item.
- [AddPassToWalletButtonFilter](addpasstowalletbuttonfilter.md)
- [AddPassToWalletButtonResponse](addpasstowalletbuttonresponse.md)
- [AddPassToWalletButtonStyle](addpasstowalletbuttonstyle.md)
