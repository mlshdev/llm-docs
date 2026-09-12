> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intentsui/inuiaddvoiceshortcutbutton](https://developer.apple.com/documentation/intentsui/inuiaddvoiceshortcutbutton)

# INUIAddVoiceShortcutButton (Swift)

**Framework:** IntentsUI  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+

A button that allows the user to add or edit a shortcut.

## Declaration

```swift
class INUIAddVoiceShortcutButton
```

<a id="overview"></a>

## Overview

When the user performs an action such as placing an order for tomato soup, the app should provide the option to add the action to Siri as a shortcut. To present this option in your app, use [INUIAddVoiceShortcutButton](inuiaddvoiceshortcutbutton.md) to display an “Add to Siri” button. Using this button makes your app consistent with other apps that support Siri Shortcuts.

Set the [shortcut](inuiaddvoiceshortcutbutton/shortcut.md) property on the button to have it automatically update the status of the shortcut. If the user has already added the shortcut to Siri, the button displays “Added” instead of “Add” and includes the phrase that the user chose when adding the shortcut. The methods in [INUIAddVoiceShortcutButtonDelegate](inuiaddvoiceshortcutbuttondelegate.md) aren’t called unless the [shortcut](inuiaddvoiceshortcutbutton/shortcut.md) property is set.

After creating the button, assign its action to a method that displays [INUIAddVoiceShortcutViewController](inuiaddvoiceshortcutviewcontroller.md). This controller guides the user through the process of adding the shortcut to Siri.

The code listing below adds an “Add to Siri” button to a view and lets the user record an invocation phrase

```swift
// Add an "Add to Siri" button to a view.
func addSiriButton(to view: UIView) {
    let button = INUIAddVoiceShortcutButton(style: .blackOutline)
    button.translatesAutoresizingMaskIntoConstraints = false

    view.addSubview(button)
    view.centerXAnchor.constraint(equalTo: button.centerXAnchor).isActive = true
    view.centerYAnchor.constraint(equalTo: button.centerYAnchor).isActive = true

    button.addTarget(self, action: #selector(addToSiri(_:)), for: .touchUpInside)
}

// Present the Add Shortcut view controller after the
// user taps the "Add to Siri" button.
@objc
func addToSiri(_ sender: Any) {
    if let shortcut = INShortcut(intent: orderSoupOfTheDayIntent) {
        let viewController = INUIAddVoiceShortcutViewController(shortcut: shortcut)
        viewController.modalPresentationStyle = .formSheet
        viewController.delegate = self // Object conforming to `INUIAddVoiceShortcutViewControllerDelegate`.
        present(viewController, animated: true, completion: nil)
    }
}

```

## Topics

### Creating a Shortcut Button

- [init(style:)](inuiaddvoiceshortcutbutton/init%28style_%29.md): Creates an *Add to Siri* button with the specified style.
- [INUIAddVoiceShortcutButtonStyle](inuiaddvoiceshortcutbuttonstyle.md): The styles for the *Add to Siri* button.

### Presenting Shortcut Editors

- [shortcut](inuiaddvoiceshortcutbutton/shortcut.md): The shortcut Siri invokes when the user speaks the invocation phrase.
- [delegate](inuiaddvoiceshortcutbutton/delegate.md): The object that receives presentation requests from the button.
- [INUIAddVoiceShortcutButtonDelegate](inuiaddvoiceshortcutbuttondelegate.md): The protocol an object implements to receive notifications from the Siri Shortcut button.

### Accessing Shortcut Button Information

- [setStyle(\_:)](inuiaddvoiceshortcutbutton/setstyle%28__%29.md)
- [style](inuiaddvoiceshortcutbutton/style.md): The button style.
- [cornerRadius](inuiaddvoiceshortcutbutton/cornerradius.md)

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

# INUIAddVoiceShortcutButton (Objective-C)

**Framework:** IntentsUI  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+

A button that allows the user to add or edit a shortcut.

## Declaration

```objectivec
@interface INUIAddVoiceShortcutButton : UIButton
```

```objectivec
@interface INUIAddVoiceShortcutButton : NSButton
```

<a id="overview"></a>

## Overview

When the user performs an action such as placing an order for tomato soup, the app should provide the option to add the action to Siri as a shortcut. To present this option in your app, use [INUIAddVoiceShortcutButton](inuiaddvoiceshortcutbutton.md) to display an “Add to Siri” button. Using this button makes your app consistent with other apps that support Siri Shortcuts.

Set the [shortcut](inuiaddvoiceshortcutbutton/shortcut.md) property on the button to have it automatically update the status of the shortcut. If the user has already added the shortcut to Siri, the button displays “Added” instead of “Add” and includes the phrase that the user chose when adding the shortcut. The methods in [INUIAddVoiceShortcutButtonDelegate](inuiaddvoiceshortcutbuttondelegate.md) aren’t called unless the [shortcut](inuiaddvoiceshortcutbutton/shortcut.md) property is set.

After creating the button, assign its action to a method that displays [INUIAddVoiceShortcutViewController](inuiaddvoiceshortcutviewcontroller.md). This controller guides the user through the process of adding the shortcut to Siri.

The code listing below adds an “Add to Siri” button to a view and lets the user record an invocation phrase

```swift
// Add an "Add to Siri" button to a view.
func addSiriButton(to view: UIView) {
    let button = INUIAddVoiceShortcutButton(style: .blackOutline)
    button.translatesAutoresizingMaskIntoConstraints = false

    view.addSubview(button)
    view.centerXAnchor.constraint(equalTo: button.centerXAnchor).isActive = true
    view.centerYAnchor.constraint(equalTo: button.centerYAnchor).isActive = true

    button.addTarget(self, action: #selector(addToSiri(_:)), for: .touchUpInside)
}

// Present the Add Shortcut view controller after the
// user taps the "Add to Siri" button.
@objc
func addToSiri(_ sender: Any) {
    if let shortcut = INShortcut(intent: orderSoupOfTheDayIntent) {
        let viewController = INUIAddVoiceShortcutViewController(shortcut: shortcut)
        viewController.modalPresentationStyle = .formSheet
        viewController.delegate = self // Object conforming to `INUIAddVoiceShortcutViewControllerDelegate`.
        present(viewController, animated: true, completion: nil)
    }
}

```

## Topics

### Creating a Shortcut Button

- [initWithStyle:](inuiaddvoiceshortcutbutton/init%28style_%29.md): Creates an *Add to Siri* button with the specified style.
- [INUIAddVoiceShortcutButtonStyle](inuiaddvoiceshortcutbuttonstyle.md): The styles for the *Add to Siri* button.

### Presenting Shortcut Editors

- [shortcut](inuiaddvoiceshortcutbutton/shortcut.md): The shortcut Siri invokes when the user speaks the invocation phrase.
- [delegate](inuiaddvoiceshortcutbutton/delegate.md): The object that receives presentation requests from the button.
- [INUIAddVoiceShortcutButtonDelegate](inuiaddvoiceshortcutbuttondelegate.md): The protocol an object implements to receive notifications from the Siri Shortcut button.

### Accessing Shortcut Button Information

- [setStyle:](inuiaddvoiceshortcutbutton/setstyle%28__%29.md)
- [style](inuiaddvoiceshortcutbutton/style.md): The button style.
- [cornerRadius](inuiaddvoiceshortcutbutton/cornerradius.md)

## Relationships

### Inherits From

- [NSButton](https://developer.apple.com/documentation/appkit/nsbutton)
- [UIButton](../uikit/uibutton.md)
