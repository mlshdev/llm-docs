> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/marketplacekit/actionbutton](https://developer.apple.com/documentation/marketplacekit/actionbutton)

# ActionButton

**Framework:** MarketplaceKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A user-interface element that enables a person to install, update, or launch apps by tapping the element.

## Declaration

```swift
@MainActor @objc @preconcurrency class ActionButton
```

## Mentioned In

- [Installing apps from an alternative marketplace](installing-apps-from-an-alternative-marketplace.md)
- [Supplying an install verification token](supplying-an-install-verification-token.md)

<a id="overview"></a>

## Overview

iOS doesn’t allow an app marketplace to install apps without a person’s consent. When iOS receives a request to install an app, it validates that request came from a user interaction with this button. If instead, a marketplace calls the [AppLibrary](applibrary.md) installation methods directly, the call may fail.

## Topics

### Initializers

- [init(action:)](actionbutton/init%28action_%29.md)

### Instance Properties

- [action](actionbutton/action-swift.property.md)
- [backgroundColor](actionbutton/backgroundcolor.md)
- [borderColor](actionbutton/bordercolor.md)
- [borderWidth](actionbutton/borderwidth.md)
- [cornerRadius](actionbutton/cornerradius.md)
- [fontSize](actionbutton/fontsize.md)
- [imageName](actionbutton/imagename.md)
- [imagePlacement](actionbutton/imageplacement.md)
- [isEnabled](actionbutton/isenabled.md)
- [isHighlighted](actionbutton/ishighlighted.md)
- [label](actionbutton/label.md)
- [size](actionbutton/size.md)
- [tintColor](actionbutton/tintcolor.md)

### Enumerations

- [ActionButton.Action](actionbutton/action-swift.enum.md)
- [ActionButton.ButtonImagePlacement](actionbutton/buttonimageplacement.md)

## Relationships

### Inherits From

- [UIControl](https://developer.apple.com/documentation/uikit/uicontrol)

### Conforms To

- [CALayerDelegate](https://developer.apple.com/documentation/quartzcore/calayerdelegate)
- [CLBodyIdentifiable](https://developer.apple.com/documentation/corelocation/clbodyidentifiable)
- [CMBodyIdentifiable](https://developer.apple.com/documentation/coremotion/cmbodyidentifiable)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [UIAccessibilityIdentification](https://developer.apple.com/documentation/uikit/uiaccessibilityidentification)
- [UIActivityItemsConfigurationProviding](https://developer.apple.com/documentation/uikit/uiactivityitemsconfigurationproviding)
- [UIAppearance](https://developer.apple.com/documentation/uikit/uiappearance)
- [UIAppearanceContainer](https://developer.apple.com/documentation/uikit/uiappearancecontainer)
- [UIContextMenuInteractionDelegate](https://developer.apple.com/documentation/uikit/uicontextmenuinteractiondelegate)
- [UICoordinateSpace](https://developer.apple.com/documentation/uikit/uicoordinatespace)
- [UIDynamicItem](https://developer.apple.com/documentation/uikit/uidynamicitem)
- [UIFocusEnvironment](https://developer.apple.com/documentation/uikit/uifocusenvironment)
- [UIFocusItem](https://developer.apple.com/documentation/uikit/uifocusitem)
- [UIFocusItemContainer](https://developer.apple.com/documentation/uikit/uifocusitemcontainer)
- [UILargeContentViewerItem](https://developer.apple.com/documentation/uikit/uilargecontentvieweritem)
- [UIPasteConfigurationSupporting](https://developer.apple.com/documentation/uikit/uipasteconfigurationsupporting)
- [UIPopoverPresentationControllerSourceItem](https://developer.apple.com/documentation/uikit/uipopoverpresentationcontrollersourceitem)
- [UIResponderStandardEditActions](https://developer.apple.com/documentation/uikit/uiresponderstandardeditactions)
- [UITraitChangeObservable](https://developer.apple.com/documentation/uikit/uitraitchangeobservable-67e94)
- [UITraitEnvironment](https://developer.apple.com/documentation/uikit/uitraitenvironment)
- [UIUserActivityRestoring](https://developer.apple.com/documentation/uikit/uiuseractivityrestoring)

## See Also

### App distribution UI

- [InstallMetadata](installmetadata.md): Information about a specific app to install or update and the person who initiates it.
- [InstallConfiguration](installconfiguration.md): Information that describes a requested app installation or app update.
- [InstallConfirmationResult](installconfirmationresult.md): Options that indicate whether the installation of an app proceeds when a person interacts with an app installation button.
- [BatchInstallConfiguration](batchinstallconfiguration.md): Information that describes multiple app installations or app updates.
- [BatchInstallConfirmationResult](batchinstallconfirmationresult.md): Options that indicate whether the installation of multiple apps proceeds when a person interacts with an app installation button.
- [MarketplaceDisplayOption](marketplacedisplayoption.md): The kinds of deep links that the operating system makes into your marketplace.
- [MarketplaceSceneDelegate](marketplacescenedelegate.md): A delegate that handles deep link requests into your marketplace app.
