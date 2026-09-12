> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkidentitybutton](https://developer.apple.com/documentation/passkit/pkidentitybutton)

# PKIdentityButton (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object that displays a button to trigger the identity verification flow.

## Declaration

```swift
class PKIdentityButton
```

## Mentioned In

- [Requesting identity data from a Wallet pass](requesting-identity-data-from-a-wallet-pass.md)

## Topics

### Creating an identity button

- [init(label:style:)](pkidentitybutton/init%28label_style_%29.md): Creates a new identity button with the label and style.

### Configuring the appearance

- [PKIdentityButton.Label](pkidentitybutton/label.md): A type that indicates the available labels for an identity button.
- [PKIdentityButton.Style](pkidentitybutton/style.md): A type that indicates the available appearances for an identity button.
- [cornerRadius](pkidentitybutton/cornerradius.md): The radius for the rounded corners on the button, in points.

## Relationships

### Inherits From

- [UIControl](../uikit/uicontrol.md)

### Conforms To

- [CALayerDelegate](../quartzcore/calayerdelegate.md)
- [CLBodyIdentifiable](../corelocation/clbodyidentifiable.md)
- [CMBodyIdentifiable](../coremotion/cmbodyidentifiable.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
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
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Identity sheet interactions and authorization

- [PKIdentityAuthorizationController](pkidentityauthorizationcontroller.md): An object that presents a sheet that prompts the user to allow a request for identity information.
- [PKIdentityRequest](pkidentityrequest.md): An object that represents a request for identity information from a Wallet pass.
- [PKIdentityDocument](pkidentitydocument.md): An object that represents the response to a request.
- [PKIdentityElement](pkidentityelement.md): An object that represents the elements an app requests from identity documents.
- [VerifyIdentityWithWalletButton](verifyidentitywithwalletbutton.md): A type that displays a button to present the identity verification flow.
- [VerifyIdentityWithWalletButtonLabel](verifyidentitywithwalletbuttonlabel.md): A type that represents the label you use with a verify identity button.
- [VerifyIdentityWithWalletButtonStyle](verifyidentitywithwalletbuttonstyle.md): A type that represents the style you use with a verify identity button.

# PKIdentityButton (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object that displays a button to trigger the identity verification flow.

## Declaration

```objectivec
@interface PKIdentityButton : UIControl
```

## Mentioned In

- [Requesting identity data from a Wallet pass](requesting-identity-data-from-a-wallet-pass.md)

## Topics

### Creating an identity button

- [initWithLabel:style:](pkidentitybutton/init%28label_style_%29.md): Creates a new identity button with the label and style.
- [buttonWithLabel:style:](pkidentitybutton/buttonwithlabel_style_.md): Creates a new identity button with the label and style.

### Configuring the appearance

- [PKIdentityButtonLabel](pkidentitybutton/label.md): A type that indicates the available labels for an identity button.
- [PKIdentityButtonStyle](pkidentitybutton/style.md): A type that indicates the available appearances for an identity button.
- [cornerRadius](pkidentitybutton/cornerradius.md): The radius for the rounded corners on the button, in points.

## Relationships

### Inherits From

- [UIControl](../uikit/uicontrol.md)

## See Also

### Identity sheet interactions and authorization

- [PKIdentityAuthorizationController](pkidentityauthorizationcontroller.md): An object that presents a sheet that prompts the user to allow a request for identity information.
- [PKIdentityRequest](pkidentityrequest.md): An object that represents a request for identity information from a Wallet pass.
- [PKIdentityDocument](pkidentitydocument.md): An object that represents the response to a request.
- [PKIdentityElement](pkidentityelement.md): An object that represents the elements an app requests from identity documents.
