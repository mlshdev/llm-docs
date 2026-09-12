> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentbutton](https://developer.apple.com/documentation/passkit/pkpaymentbutton)

# PKPaymentButton (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 8.3+ · iPadOS 8.3+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+

An object that displays a button either to trigger payments through Apple Pay or to prompt the user to set up a card.

## Declaration

```swift
class PKPaymentButton
```

<a id="overview"></a>

## Overview

After creating a [PKPaymentButton](pkpaymentbutton.md) object, you choose the type and style of button, and the system provides a control with the correct content and appearance. See the [Human Interface Guidelines \> Apple Pay](https://developer.apple.com/design/human-interface-guidelines/apple-pay/overview/buttons-and-marks/) for more information.

To trigger a payment through Apple Pay in a WatchKit app, use [WKInterfacePaymentButton](https://developer.apple.com/documentation/watchkit/wkinterfacepaymentbutton) instead.

## Topics

### Creating payment buttons

- [init(paymentButtonType:paymentButtonStyle:)](pkpaymentbutton/init%28paymentbuttontype_paymentbuttonstyle_%29.md): Creates a new payment button with the specified type and style.

### Configuring the appearance

- [PKPaymentButtonType](pkpaymentbuttontype.md): The Apple Pay button types you can display to initiate Apple Pay transactions.
- [PKPaymentButtonStyle](pkpaymentbuttonstyle.md): A type that indicates the available appearances for an Apple Pay button.
- [cornerRadius](pkpaymentbutton/cornerradius.md): The radius, in points, for the rounded corners on the button.

### Initializers

- [init(paymentButtonType:paymentButtonStyle:disableCardArt:)](pkpaymentbutton/init%28paymentbuttontype_paymentbuttonstyle_disablecardart_%29.md)
- [init(type:style:disableCardArt:)](pkpaymentbutton/init%28type_style_disablecardart_%29.md)

## Relationships

### Inherits From

- [NSButton](https://developer.apple.com/documentation/appkit/nsbutton)
- [UIButton](../uikit/uibutton.md)

### Conforms To

- [CALayerDelegate](../quartzcore/calayerdelegate.md)
- [CLBodyIdentifiable](../corelocation/clbodyidentifiable.md)
- [CMBodyIdentifiable](../coremotion/cmbodyidentifiable.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityButton](https://developer.apple.com/documentation/appkit/nsaccessibilitybutton)
- [NSAccessibilityElementProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityelementprotocol)
- [NSAccessibilityProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityprotocol)
- [NSAnimatablePropertyContainer](https://developer.apple.com/documentation/appkit/nsanimatablepropertycontainer)
- [NSAppearanceCustomization](https://developer.apple.com/documentation/appkit/nsappearancecustomization)
- [NSCoding](../foundation/nscoding.md)
- [NSDraggingDestination](https://developer.apple.com/documentation/appkit/nsdraggingdestination)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [NSUserInterfaceCompression](https://developer.apple.com/documentation/appkit/nsuserinterfacecompression)
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)
- [NSUserInterfaceValidations](https://developer.apple.com/documentation/appkit/nsuserinterfacevalidations)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIAccessibilityContentSizeCategoryImageAdjusting](../uikit/uiaccessibilitycontentsizecategoryimageadjusting.md)
- [UIAccessibilityIdentification](../uikit/uiaccessibilityidentification.md)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearance](../uikit/uiappearance.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UIContextMenuInteractionDelegate](../uikit/uicontextmenuinteractiondelegate.md)
- [UICoordinateSpace](../uikit/uicoordinatespace.md)
- [UIDynamicItem](../uikit/uidynamicitem.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIFocusItem](../uikit/uifocusitem.md)
- [UIFocusItemContainer](../uikit/uifocusitemcontainer.md)
- [UILargeContentViewerItem](../uikit/uilargecontentvieweritem.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIPopoverPresentationControllerSourceItem](../uikit/uipopoverpresentationcontrollersourceitem.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UISpringLoadedInteractionSupporting](../uikit/uispringloadedinteractionsupporting.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Related Documentation

- [iOS Human Interface Guidelines](https://developer.apple.com/ios/human-interface-guidelines/)

### Apple Pay buttons

- [PayWithApplePayButton](paywithapplepaybutton.md): A type that provides a button to pay with Apple pay.
- [PayWithApplePayButtonLabel](paywithapplepaybuttonlabel.md)
- [PayWithApplePayButtonStyle](paywithapplepaybuttonstyle.md)
- [PayWithApplePayButtonLabel](paywithapplepaybuttonlabel.md)

# PKPaymentButton (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 8.3+ · iPadOS 8.3+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+

An object that displays a button either to trigger payments through Apple Pay or to prompt the user to set up a card.

## Declaration

```objectivec
@interface PKPaymentButton : UIButton
```

```objectivec
@interface PKPaymentButton : NSButton
```

<a id="overview"></a>

## Overview

After creating a [PKPaymentButton](pkpaymentbutton.md) object, you choose the type and style of button, and the system provides a control with the correct content and appearance. See the [Human Interface Guidelines \> Apple Pay](https://developer.apple.com/design/human-interface-guidelines/apple-pay/overview/buttons-and-marks/) for more information.

To trigger a payment through Apple Pay in a WatchKit app, use [WKInterfacePaymentButton](https://developer.apple.com/documentation/watchkit/wkinterfacepaymentbutton) instead.

## Topics

### Creating payment buttons

- [buttonWithType:style:](pkpaymentbutton/buttonwithtype_style_.md): Creates a new payment button with the specified type and style.
- [initWithPaymentButtonType:paymentButtonStyle:](pkpaymentbutton/init%28paymentbuttontype_paymentbuttonstyle_%29.md): Creates a new payment button with the specified type and style.

### Configuring the appearance

- [PKPaymentButtonType](pkpaymentbuttontype.md): The Apple Pay button types you can display to initiate Apple Pay transactions.
- [PKPaymentButtonStyle](pkpaymentbuttonstyle.md): A type that indicates the available appearances for an Apple Pay button.
- [cornerRadius](pkpaymentbutton/cornerradius.md): The radius, in points, for the rounded corners on the button.

### Instance Methods

- [initWithPaymentButtonType:paymentButtonStyle:disableCardArt:](pkpaymentbutton/init%28type_style_disablecardart_%29.md)

### Type Methods

- [buttonWithType:style:disableCardArt:](pkpaymentbutton/buttonwithtype_style_disablecardart_.md)

## Relationships

### Inherits From

- [NSButton](https://developer.apple.com/documentation/appkit/nsbutton)
- [UIButton](../uikit/uibutton.md)

## See Also

### Related Documentation

- [iOS Human Interface Guidelines](https://developer.apple.com/ios/human-interface-guidelines/)
