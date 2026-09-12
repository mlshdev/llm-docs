> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocationui/cllocationbutton](https://developer.apple.com/documentation/corelocationui/cllocationbutton)

# CLLocationButton (Swift)

**Framework:** CoreLocationUI  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A button that grants one-time location authorization.

## Declaration

```swift
class CLLocationButton
```

<a id="overview"></a>

## Overview

`CLLocationButton` simplifies requesting one-time authorization to access location data. Add this button to your user interface in situations when users may want to grant temporary access to their location data each time they use a particular feature of your app.

![Screenshot of the location button with an icon that uses the filled arrow](https://developer.apple.com/images/com.apple.CoreLocationUI/cllocationbutton-1@2x.png)

The first time a user taps this button, [Core Location](../corelocation.md) asks the user to confirm that they’re comfortable using this UI element when they want to grant temporary access to their location data. If the user agrees, the app receives temporary [CLAuthorizationStatus.authorizedWhenInUse](../corelocation/clauthorizationstatus/authorizedwheninuse.md) authorization, like when the user chooses *Allow Once* in response to your app’s standard location authorization request. This temporary authorization expires when your app is no longer in use.

After the user agrees to using `CLLocationButton`, the button becomes approved to request future authorizations without displaying an additional alert to the user. The next time the user taps it, this button simply grants one-time authorization without requiring confirmation.

After you receive this temporary authorization, fetch the user’s location using the [Core Location](../corelocation.md) API and perform any app-specific tasks related to that location data. Connect the button to initiate the tasks you want to perform after getting authorization by adding a target and action to the button. Keep in mind that this action activates every time the user taps this button, regardless of whether the app already has location authorization.

Create a `CLLocationButton` in Interface Builder or in code, like this:

```swift
let locationButton = CLLocationButton()
locationButton.icon = .arrowFilled
locationButton.label = .currentLocation
locationButton.cornerRadius = 25.0
locationButton.addTarget(self, action: #selector(userPressedLocationButton), for: .touchUpInside)
```

> **Important**

> When a user taps the button, it only provides one-time authorization to fetch location data — not the location data itself. For more details about fetching location data, see [Configuring your app to use location services](../corelocation/configuring-your-app-to-use-location-services.md).

Configure the button’s content by specifying its [icon](cllocationbutton/icon.md) and [label](cllocationbutton/label.md) styles. Customize its appearance using the [cornerRadius](cllocationbutton/cornerradius.md) and [fontSize](cllocationbutton/fontsize.md) properties, or the standard view appearance properties [backgroundColor](../uikit/uiview/backgroundcolor.md) and [tintColor](../uikit/uiview/tintcolor.md). For design guidance, see [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/ios/app-architecture/accessing-user-data/).

## Topics

### Customizing the icon style

- [icon](cllocationbutton/icon.md): The style of the location arrow icon on the button.

### Customizing the label text

- [label](cllocationbutton/label.md): The text of the button label.

### Customizing the button appearance

- [cornerRadius](cllocationbutton/cornerradius.md): The corner radius of the button.
- [fontSize](cllocationbutton/fontsize.md): The font size of the text on the button.

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
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
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

### Location authorization

- [Sharing Your Location to Find a Park](sharing-your-location-to-find-a-park.md): Ask for location access using a customizable location button.
- [LocationButton](locationbutton.md): A SwiftUI button that grants one-time location authorization.

# CLLocationButton (Objective-C)

**Framework:** CoreLocationUI  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A button that grants one-time location authorization.

## Declaration

```objectivec
@interface CLLocationButton : UIControl
```

<a id="overview"></a>

## Overview

`CLLocationButton` simplifies requesting one-time authorization to access location data. Add this button to your user interface in situations when users may want to grant temporary access to their location data each time they use a particular feature of your app.

![Screenshot of the location button with an icon that uses the filled arrow](https://developer.apple.com/images/com.apple.CoreLocationUI/cllocationbutton-1@2x.png)

The first time a user taps this button, [Core Location](../corelocation.md) asks the user to confirm that they’re comfortable using this UI element when they want to grant temporary access to their location data. If the user agrees, the app receives temporary [kCLAuthorizationStatusAuthorizedWhenInUse](../corelocation/clauthorizationstatus/authorizedwheninuse.md) authorization, like when the user chooses *Allow Once* in response to your app’s standard location authorization request. This temporary authorization expires when your app is no longer in use.

After the user agrees to using `CLLocationButton`, the button becomes approved to request future authorizations without displaying an additional alert to the user. The next time the user taps it, this button simply grants one-time authorization without requiring confirmation.

After you receive this temporary authorization, fetch the user’s location using the [Core Location](../corelocation.md) API and perform any app-specific tasks related to that location data. Connect the button to initiate the tasks you want to perform after getting authorization by adding a target and action to the button. Keep in mind that this action activates every time the user taps this button, regardless of whether the app already has location authorization.

Create a `CLLocationButton` in Interface Builder or in code, like this:

```swift
let locationButton = CLLocationButton()
locationButton.icon = .arrowFilled
locationButton.label = .currentLocation
locationButton.cornerRadius = 25.0
locationButton.addTarget(self, action: #selector(userPressedLocationButton), for: .touchUpInside)
```

> **Important**

> When a user taps the button, it only provides one-time authorization to fetch location data — not the location data itself. For more details about fetching location data, see [Configuring your app to use location services](../corelocation/configuring-your-app-to-use-location-services.md).

Configure the button’s content by specifying its [icon](cllocationbutton/icon.md) and [label](cllocationbutton/label.md) styles. Customize its appearance using the [cornerRadius](cllocationbutton/cornerradius.md) and [fontSize](cllocationbutton/fontsize.md) properties, or the standard view appearance properties [backgroundColor](../uikit/uiview/backgroundcolor.md) and [tintColor](../uikit/uiview/tintcolor.md). For design guidance, see [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/ios/app-architecture/accessing-user-data/).

## Topics

### Customizing the icon style

- [icon](cllocationbutton/icon.md): The style of the location arrow icon on the button.

### Customizing the label text

- [label](cllocationbutton/label.md): The text of the button label.

### Customizing the button appearance

- [cornerRadius](cllocationbutton/cornerradius.md): The corner radius of the button.
- [fontSize](cllocationbutton/fontsize.md): The font size of the text on the button.

## Relationships

### Inherits From

- [UIControl](../uikit/uicontrol.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Location authorization

- [Sharing Your Location to Find a Park](sharing-your-location-to-find-a-park.md): Ask for location access using a customizable location button.
