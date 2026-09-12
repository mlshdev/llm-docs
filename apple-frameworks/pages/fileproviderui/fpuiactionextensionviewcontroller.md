> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileproviderui/fpuiactionextensionviewcontroller](https://developer.apple.com/documentation/fileproviderui/fpuiactionextensionviewcontroller)

# FPUIActionExtensionViewController (Swift)

**Framework:** File Provider UI  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.15+ · visionOS 1.0+

The custom user interface used to perform a selected action.

## Declaration

```swift
class FPUIActionExtensionViewController
```

## Mentioned In

- [Adding Actions to the Context Menu](adding-actions-to-the-context-menu.md)

<a id="overview"></a>

## Overview

Subclass this view controller to provide the user interface for your actions.

No matter how many actions you define, your File Provider UI extension has only one `FPUIActionExtensionViewController` subclass. When the user selects one of your actions, the system instantiates a copy of your subclass, calls its [prepare(forAction:itemIdentifiers:)](fpuiactionextensionviewcontroller/prepare%28foraction_itemidentifiers_%29.md) method, and presents it to the user.

Your subclass must do the following:

- Override the [prepare(forAction:itemIdentifiers:)](fpuiactionextensionviewcontroller/prepare%28foraction_itemidentifiers_%29.md) method to check the action identifiers and present an appropriate user interface for the selected actions.
- Provide some sort of feedback, even if the action doesn’t require interaction with the user. For example, present a view that quickly fades out and automatically completes the action.
- Call the [extensionContext](fpuiactionextensionviewcontroller/extensioncontext.md) object’s [cancelRequest(withError:)](fpuiactionextensioncontext/cancelrequest%28witherror_%29.md) or [completeRequest()](fpuiactionextensioncontext/completerequest%28%29.md) method when the action is finished to complete the action.

## Topics

### Working with Actions

- [prepare(forAction:itemIdentifiers:)](fpuiactionextensionviewcontroller/prepare%28foraction_itemidentifiers_%29.md): Performs any necessary setup or configuration for the specified action.
- [prepare(forError:)](fpuiactionextensionviewcontroller/prepare%28forerror_%29.md): Performs any necessary setup or configuration when an authentication error occurs.
- [extensionContext](fpuiactionextensionviewcontroller/extensioncontext.md): The extension context provided by the host app.
- [FPUIActionExtensionContext](fpuiactionextensioncontext.md): An extension context provided to File Provider UI extensions.

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

### Document Browser Customization

- [Adding Actions to the Context Menu](adding-actions-to-the-context-menu.md): Present custom actions from your File Provider extension in the system’s file browser.

# FPUIActionExtensionViewController (Objective-C)

**Framework:** File Provider UI  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.15+ · visionOS 1.0+

The custom user interface used to perform a selected action.

## Declaration

```objectivec
@interface FPUIActionExtensionViewController : UIViewController
```

```objectivec
@interface FPUIActionExtensionViewController : NSViewController
```

## Mentioned In

- [Adding Actions to the Context Menu](adding-actions-to-the-context-menu.md)

<a id="overview"></a>

## Overview

Subclass this view controller to provide the user interface for your actions.

No matter how many actions you define, your File Provider UI extension has only one `FPUIActionExtensionViewController` subclass. When the user selects one of your actions, the system instantiates a copy of your subclass, calls its [prepareForActionWithIdentifier:itemIdentifiers:](fpuiactionextensionviewcontroller/prepare%28foraction_itemidentifiers_%29.md) method, and presents it to the user.

Your subclass must do the following:

- Override the [prepareForActionWithIdentifier:itemIdentifiers:](fpuiactionextensionviewcontroller/prepare%28foraction_itemidentifiers_%29.md) method to check the action identifiers and present an appropriate user interface for the selected actions.
- Provide some sort of feedback, even if the action doesn’t require interaction with the user. For example, present a view that quickly fades out and automatically completes the action.
- Call the [extensionContext](fpuiactionextensionviewcontroller/extensioncontext.md) object’s [cancelRequestWithError:](fpuiactionextensioncontext/cancelrequest%28witherror_%29.md) or [completeRequest](fpuiactionextensioncontext/completerequest%28%29.md) method when the action is finished to complete the action.

## Topics

### Working with Actions

- [prepareForActionWithIdentifier:itemIdentifiers:](fpuiactionextensionviewcontroller/prepare%28foraction_itemidentifiers_%29.md): Performs any necessary setup or configuration for the specified action.
- [prepareForError:](fpuiactionextensionviewcontroller/prepare%28forerror_%29.md): Performs any necessary setup or configuration when an authentication error occurs.
- [extensionContext](fpuiactionextensionviewcontroller/extensioncontext.md): The extension context provided by the host app.
- [FPUIActionExtensionContext](fpuiactionextensioncontext.md): An extension context provided to File Provider UI extensions.

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)
- [UIViewController](../uikit/uiviewcontroller.md)

## See Also

### Document Browser Customization

- [Adding Actions to the Context Menu](adding-actions-to-the-context-menu.md): Present custom actions from your File Provider extension in the system’s file browser.
