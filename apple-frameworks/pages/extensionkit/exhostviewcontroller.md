> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionkit/exhostviewcontroller](https://developer.apple.com/documentation/extensionkit/exhostviewcontroller)

# EXHostViewController

**Framework:** ExtensionKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 13.0+

A view controller that hosts remote views provided by an app extension.

## Declaration

```swift
class EXHostViewController
```

## Mentioned In

- [Including extension-based UI in your interface](including-extension-based-ui-in-your-interface.md)

<a id="overview"></a>

## Overview

Present this view controller from your app’s interface to display the content for an associated app extension. Configure the view controller with the app extension identity and the specific scene you want to display. Use the associated delegate object to receive notifications when the app extension becomes active or inactive.

For more information about presenting this view controller and using it to display an app extension’s UI, see [Including extension-based UI in your interface](including-extension-based-ui-in-your-interface.md).

## Topics

### Configuring the view controller

- [configuration](exhostviewcontroller/configuration-swift.property.md): The information the host view controller uses to fetch the appropriate scene from an app extension.
- [EXHostViewController.Configuration](exhostviewcontroller/configuration-swift.struct.md): An object that holds configuration options for a host view controller.
- [placeholderView](exhostviewcontroller/placeholderview.md): The view to display when the view controller has no app extension content to display.

### Connecting to the app extension

- [makeXPCConnection()](exhostviewcontroller/makexpcconnection%28%29.md): Initiates an XPC connection to the app extension’s scene.

### Responding to activation and deactivation events

- [delegate](exhostviewcontroller/delegate.md): A custom delegate object you use to receive notifications about the activation and deactivation of the app extension.
- [EXHostViewControllerDelegate](exhostviewcontrollerdelegate.md): An interface you use to track the activation and deactivation of an app extension.

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

### Host app presentation

- [Displaying the app extensions available to your app](displaying-the-app-extensions-available-to-your-app.md): Show the app extensions available to your app, so that people can approve, enable, or disable them.
- [EXAppExtensionBrowserViewController](exappextensionbrowserviewcontroller.md): A view controller that displays an interface to enable or disable the host app’s extensions.
