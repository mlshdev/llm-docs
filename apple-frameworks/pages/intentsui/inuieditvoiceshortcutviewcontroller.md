> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intentsui/inuieditvoiceshortcutviewcontroller](https://developer.apple.com/documentation/intentsui/inuieditvoiceshortcutviewcontroller)

# INUIEditVoiceShortcutViewController (Swift)

**Framework:** IntentsUI  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+

A view controller that lets the user edit or remove an existing shortcut.

## Declaration

```swift
class INUIEditVoiceShortcutViewController
```

<a id="overview"></a>

## Overview

To let the user edit or remove a shortcut, create an instance of [INUIEditVoiceShortcutViewController](inuieditvoiceshortcutviewcontroller.md) with the [INVoiceShortcut](../intents/invoiceshortcut.md). Then present the view controller to the user. To receive notifications of changes made to the shortcut, set the controller’s [delegate](inuieditvoiceshortcutviewcontroller/delegate.md) to an object that conforms to the [INUIEditVoiceShortcutViewControllerDelegate](inuieditvoiceshortcutviewcontrollerdelegate.md) protocol.

## Topics

### Creating a Shortcut Editor

- [init(voiceShortcut:)](inuieditvoiceshortcutviewcontroller/init%28voiceshortcut_%29.md): Creates a view controller with the shortcut to edit or remove.

### Handling View Controller Events

- [delegate](inuieditvoiceshortcutviewcontroller/delegate.md): The object that retrieves notifications from the view controller.
- [INUIEditVoiceShortcutViewControllerDelegate](inuieditvoiceshortcutviewcontrollerdelegate.md): The protocol an object implements to receive notifications from the view controller that edits or removes a shortcut in Siri.

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

- [INUIAddVoiceShortcutViewController](inuiaddvoiceshortcutviewcontroller.md): A view controller that guides the user through the steps for adding a shortcut to Siri.

# INUIEditVoiceShortcutViewController (Objective-C)

**Framework:** IntentsUI  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+

A view controller that lets the user edit or remove an existing shortcut.

## Declaration

```objectivec
@interface INUIEditVoiceShortcutViewController : UIViewController
```

```objectivec
@interface INUIEditVoiceShortcutViewController : NSViewController
```

<a id="overview"></a>

## Overview

To let the user edit or remove a shortcut, create an instance of [INUIEditVoiceShortcutViewController](inuieditvoiceshortcutviewcontroller.md) with the [INVoiceShortcut](../intents/invoiceshortcut.md). Then present the view controller to the user. To receive notifications of changes made to the shortcut, set the controller’s [delegate](inuieditvoiceshortcutviewcontroller/delegate.md) to an object that conforms to the [INUIEditVoiceShortcutViewControllerDelegate](inuieditvoiceshortcutviewcontrollerdelegate.md) protocol.

## Topics

### Creating a Shortcut Editor

- [initWithVoiceShortcut:](inuieditvoiceshortcutviewcontroller/init%28voiceshortcut_%29.md): Creates a view controller with the shortcut to edit or remove.

### Handling View Controller Events

- [delegate](inuieditvoiceshortcutviewcontroller/delegate.md): The object that retrieves notifications from the view controller.
- [INUIEditVoiceShortcutViewControllerDelegate](inuieditvoiceshortcutviewcontrollerdelegate.md): The protocol an object implements to receive notifications from the view controller that edits or removes a shortcut in Siri.

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)
- [UIViewController](../uikit/uiviewcontroller.md)

## See Also

### Shortcut Editors

- [INUIAddVoiceShortcutViewController](inuiaddvoiceshortcutviewcontroller.md): A view controller that guides the user through the steps for adding a shortcut to Siri.
