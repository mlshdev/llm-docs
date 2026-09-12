> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intentsui/inuiaddvoiceshortcutviewcontroller](https://developer.apple.com/documentation/intentsui/inuiaddvoiceshortcutviewcontroller)

# INUIAddVoiceShortcutViewController (Swift)

**Framework:** IntentsUI  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+

A view controller that guides the user through the steps for adding a shortcut to Siri.

## Declaration

```swift
class INUIAddVoiceShortcutViewController
```

<a id="overview"></a>

## Overview

When the user performs an action such as placing an order for tomato soup, the app should provide the option to add the action to Siri as a shortcut. To present this option in your app, use [INUIAddVoiceShortcutButton](inuiaddvoiceshortcutbutton.md) to display an *Add to Siri* button. Using this button makes your app consistent with other apps that support Siri Shortcuts.

After creating the button, assign its action to a method that displays [INUIAddVoiceShortcutViewController](inuiaddvoiceshortcutviewcontroller.md). This controller steps the user through the process of adding the shortcut to Siri.

To receive notifications of events from the view controller, set the delegate to an object that conforms to the [INUIAddVoiceShortcutViewControllerDelegate](inuiaddvoiceshortcutviewcontrollerdelegate.md) protocol.

The listing below adds an *Add to Siri* button to a view and let the user record an invocation phrase.

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

### Creating an Add Shortcut View Controller

- [init(shortcut:)](inuiaddvoiceshortcutviewcontroller/init%28shortcut_%29.md): Creates a view controller with a shortcut the user can add to Siri.

### Handling View Controller Events

- [delegate](inuiaddvoiceshortcutviewcontroller/delegate.md): The object that retrieves notifications from the view controller.
- [INUIAddVoiceShortcutViewControllerDelegate](inuiaddvoiceshortcutviewcontrollerdelegate.md): The protocol an object implements to receive notifications from the view controller adding a shortcut to Siri.

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)
- [UIViewController](../uikit/uiviewcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSEditor](https://developer.apple.com/documentation/appkit/nseditor)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSeguePerforming](https://developer.apple.com/documentation/appkit/nssegueperforming)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UIContentContainer](../uikit/uicontentcontainer.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UIStateRestoring](../uikit/uistaterestoring.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Shortcut Editors

- [INUIEditVoiceShortcutViewController](inuieditvoiceshortcutviewcontroller.md): A view controller that lets the user edit or remove an existing shortcut.

# INUIAddVoiceShortcutViewController (Objective-C)

**Framework:** IntentsUI  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+

A view controller that guides the user through the steps for adding a shortcut to Siri.

## Declaration

```objectivec
@interface INUIAddVoiceShortcutViewController : UIViewController
```

```objectivec
@interface INUIAddVoiceShortcutViewController : NSViewController
```

<a id="overview"></a>

## Overview

When the user performs an action such as placing an order for tomato soup, the app should provide the option to add the action to Siri as a shortcut. To present this option in your app, use [INUIAddVoiceShortcutButton](inuiaddvoiceshortcutbutton.md) to display an *Add to Siri* button. Using this button makes your app consistent with other apps that support Siri Shortcuts.

After creating the button, assign its action to a method that displays [INUIAddVoiceShortcutViewController](inuiaddvoiceshortcutviewcontroller.md). This controller steps the user through the process of adding the shortcut to Siri.

To receive notifications of events from the view controller, set the delegate to an object that conforms to the [INUIAddVoiceShortcutViewControllerDelegate](inuiaddvoiceshortcutviewcontrollerdelegate.md) protocol.

The listing below adds an *Add to Siri* button to a view and let the user record an invocation phrase.

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

### Creating an Add Shortcut View Controller

- [initWithShortcut:](inuiaddvoiceshortcutviewcontroller/init%28shortcut_%29.md): Creates a view controller with a shortcut the user can add to Siri.

### Handling View Controller Events

- [delegate](inuiaddvoiceshortcutviewcontroller/delegate.md): The object that retrieves notifications from the view controller.
- [INUIAddVoiceShortcutViewControllerDelegate](inuiaddvoiceshortcutviewcontrollerdelegate.md): The protocol an object implements to receive notifications from the view controller adding a shortcut to Siri.

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)
- [UIViewController](../uikit/uiviewcontroller.md)

## See Also

### Shortcut Editors

- [INUIEditVoiceShortcutViewController](inuieditvoiceshortcutviewcontroller.md): A view controller that lets the user edit or remove an existing shortcut.
