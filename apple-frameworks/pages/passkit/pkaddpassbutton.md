> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddpassbutton](https://developer.apple.com/documentation/passkit/pkaddpassbutton)

# PKAddPassButton (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Provides a button that enables users to add passes to Wallet.

## Declaration

```swift
class PKAddPassButton
```

<a id="overview"></a>

## Overview

When you use the [PKAddPassButton](pkaddpassbutton.md) class to create a button, you choose the button’s style, and the system provides a control with the correct appearance.

## Topics

### Creating add pass buttons

- [init(addPassButtonStyle:)](pkaddpassbutton/init%28addpassbuttonstyle_%29.md): Initializes a new Add Pass button.

### Accessing the button’s style

- [addPassButtonStyle](pkaddpassbutton/addpassbuttonstyle.md): A constant representing the button’s style.

### Button styles

- [PKAddPassButtonStyle](pkaddpassbuttonstyle.md): The appearance of the buttons that can be created using the [addPassButtonWithStyle:](pkaddpassbutton/addpassbuttonwithstyle_.md) method.

## Relationships

### Inherits From

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
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
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

### Common data types

- [PKObject](pkobject.md): An opaque type that acts as the superclass for the pass object.
- [PKLabeledValue](pklabeledvalue.md): An object that can represent a detail about a payment card or other item.
- [AddPassToWalletButton](addpasstowalletbutton.md): A type that provides a button that enables people to add a new or existing pass to Apple Wallet.
- [AddPassToWalletButtonFilter](addpasstowalletbuttonfilter.md)
- [AddPassToWalletButtonResponse](addpasstowalletbuttonresponse.md)
- [AddPassToWalletButtonStyle](addpasstowalletbuttonstyle.md)

# PKAddPassButton (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Provides a button that enables users to add passes to Wallet.

## Declaration

```objectivec
@interface PKAddPassButton : UIButton
```

<a id="overview"></a>

## Overview

When you use the [PKAddPassButton](pkaddpassbutton.md) class to create a button, you choose the button’s style, and the system provides a control with the correct appearance.

## Topics

### Creating add pass buttons

- [addPassButtonWithStyle:](pkaddpassbutton/addpassbuttonwithstyle_.md): Returns a button that prompts the user to add a pass to Wallet.
- [initWithAddPassButtonStyle:](pkaddpassbutton/init%28addpassbuttonstyle_%29.md): Initializes a new Add Pass button.

### Accessing the button’s style

- [addPassButtonStyle](pkaddpassbutton/addpassbuttonstyle.md): A constant representing the button’s style.

### Button styles

- [PKAddPassButtonStyle](pkaddpassbuttonstyle.md): The appearance of the buttons that can be created using the [addPassButtonWithStyle:](pkaddpassbutton/addpassbuttonwithstyle_.md) method.

## Relationships

### Inherits From

- [UIButton](../uikit/uibutton.md)

## See Also

### Common data types

- [PKObject](pkobject.md): An opaque type that acts as the superclass for the pass object.
- [PKLabeledValue](pklabeledvalue.md): An object that can represent a detail about a payment card or other item.
