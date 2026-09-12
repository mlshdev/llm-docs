> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationappleidbutton](https://developer.apple.com/documentation/authenticationservices/asauthorizationappleidbutton)

# ASAuthorizationAppleIDButton (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A control you add to your interface that enables users to initiate the Sign In with Apple flow.

## Declaration

```swift
class ASAuthorizationAppleIDButton
```

<a id="overview"></a>

## Overview

Choose one of the built-in button styles and types, and change the corner radius of the button by setting the [cornerRadius](asauthorizationappleidbutton/cornerradius.md) property, but don’t otherwise modify the style of the button. Don’t use an Apple ID authorization button for any purpose other than to initiate the Sign In with Apple flow.

After the user taps the button, create a request using the provider, and then use an instance of [ASAuthorizationController](asauthorizationcontroller.md) to execute the request.

For more information about which Sign in with Apple buttons are available on different Apple platforms, see [Displaying Sign in with Apple buttons in your app](https://developer.apple.com/documentation/signinwithapple/displaying-sign-in-with-apple-buttons-in-your-app).

## Topics

### Initializers

- [init(authorizationButtonType:authorizationButtonStyle:)](asauthorizationappleidbutton/init%28authorizationbuttontype_authorizationbuttonstyle_%29.md): Creates a new Sign In with Apple authorization button with the given type and style.
- [init(type:style:)](asauthorizationappleidbutton/init%28type_style_%29.md): Creates a new Sign In with Apple authorization button with the given type and style.

### Styling the Button

- [cornerRadius](asauthorizationappleidbutton/cornerradius.md): The radius, in points, for the rounded corners on the Apple ID sign-in button.
- [ASAuthorizationAppleIDButton.Style](asauthorizationappleidbutton/style.md): A style for the authorization button.
- [ASAuthorizationAppleIDButton.ButtonType](asauthorizationappleidbutton/buttontype.md): A type for the authorization button.

## Relationships

### Inherits From

- [NSControl](https://developer.apple.com/documentation/appkit/nscontrol)
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
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)
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

### Offering Sign In with Apple

- [WKInterfaceAuthorizationAppleIDButton](https://developer.apple.com/documentation/watchkit/wkinterfaceauthorizationappleidbutton): A button that you can use to trigger a Sign in with Apple request.

# ASAuthorizationAppleIDButton (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A control you add to your interface that enables users to initiate the Sign In with Apple flow.

## Declaration

```objectivec
@interface ASAuthorizationAppleIDButton : UIControl
```

```objectivec
@interface ASAuthorizationAppleIDButton : NSControl
```

<a id="overview"></a>

## Overview

Choose one of the built-in button styles and types, and change the corner radius of the button by setting the [cornerRadius](asauthorizationappleidbutton/cornerradius.md) property, but don’t otherwise modify the style of the button. Don’t use an Apple ID authorization button for any purpose other than to initiate the Sign In with Apple flow.

After the user taps the button, create a request using the provider, and then use an instance of [ASAuthorizationController](asauthorizationcontroller.md) to execute the request.

For more information about which Sign in with Apple buttons are available on different Apple platforms, see [Displaying Sign in with Apple buttons in your app](https://developer.apple.com/documentation/signinwithapple/displaying-sign-in-with-apple-buttons-in-your-app).

## Topics

### Initializers

- [initWithAuthorizationButtonType:authorizationButtonStyle:](asauthorizationappleidbutton/init%28authorizationbuttontype_authorizationbuttonstyle_%29.md): Creates a new Sign In with Apple authorization button with the given type and style.
- [buttonWithType:style:](asauthorizationappleidbutton/init%28type_style_%29.md): Creates a new Sign In with Apple authorization button with the given type and style.

### Styling the Button

- [cornerRadius](asauthorizationappleidbutton/cornerradius.md): The radius, in points, for the rounded corners on the Apple ID sign-in button.
- [ASAuthorizationAppleIDButtonStyle](asauthorizationappleidbutton/style.md): A style for the authorization button.
- [ASAuthorizationAppleIDButtonType](asauthorizationappleidbutton/buttontype.md): A type for the authorization button.

## Relationships

### Inherits From

- [NSControl](https://developer.apple.com/documentation/appkit/nscontrol)
- [UIControl](../uikit/uicontrol.md)

### Conforms To

- [NSAccessibilityButton](https://developer.apple.com/documentation/appkit/nsaccessibilitybutton)

## See Also

### Offering Sign In with Apple

- [WKInterfaceAuthorizationAppleIDButton](https://developer.apple.com/documentation/watchkit/wkinterfaceauthorizationappleidbutton): A button that you can use to trigger a Sign in with Apple request.
