> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/command](https://developer.apple.com/documentation/webkit/wkwebextension/command)

# WKWebExtension.Command (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

An object that encapsulates the properties for an individual web extension command.

## Declaration

```swift
@MainActor class Command
```

<a id="overview"></a>

## Overview

Provides access to command properties such as a unique identifier, a descriptive title, and shortcut keys. Commands can be used by a web extension to perform specific actions within a web extension context, such toggling features, or interacting with web content. These commands enhance the functionality of the extension by allowing users to invoke actions quickly.

## Topics

### Instance Properties

- [activationKey](command/activationkey.md): The primary key used to trigger the command, distinct from any modifier flags.
- [id](command/id.md): A unique identifier for the command.
- [keyCommand](command/keycommand.md): A key command representation of the web extension command for use in the responder chain.
- [menuItem](command/menuitem.md): A menu item representation of the web extension command for use in menus.
- [modifierFlags](command/modifierflags.md): The modifier flags used with the activation key to trigger the command.
- [title](command/title.md): A descriptive title for the command to help discoverability.
- [webExtensionContext](command/webextensioncontext.md): The web extension context associated with the command.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Web extensions

- [WKWebExtension](../wkwebextension.md): An object that encapsulates a web extension’s resources that the manifest file defines.
- [WKWebExtensionTab](../wkwebextensiontab.md): A protocol with methods that represent a tab to web extensions.
- [WKWebExtensionWindow](../wkwebextensionwindow.md): A protocol with methods that represent a window to web extensions.
- [WKWebExtensionContext](../wkwebextensioncontext.md): An object that represents the runtime environment for a web extension.
- [WKWebExtensionController](../wkwebextensioncontroller.md): An object that manages a set of loaded extension contexts.
- [WKWebExtensionControllerDelegate](../wkwebextensioncontrollerdelegate.md): A group of methods you use to customize web extension interactions.
- [WKWebExtension.Action](action.md): An object that encapsulates the properties for an individual web extension action.
- [WKWebExtension.MatchPattern](matchpattern.md): An object that represents a way to specify groups of URLs.
- [WKWebExtension.MessagePort](messageport.md): An object that manages message-based communication with a web extension.
- [WKWebExtension.DataRecord](datarecord.md): An object that represents a record of stored data for a specific web extension context.
- [WKWebExtension.TabConfiguration](tabconfiguration.md): An object that encapsulates configuration options for a tab in an extension.
- [WKWebExtension.WindowConfiguration](windowconfiguration.md): An object that encapsulates configuration options for a window in an extension.
- [WKWebExtensionController.Configuration](../wkwebextensioncontroller/configuration-swift.class.md): A [WKWebExtensionController.Configuration](../wkwebextensioncontroller/configuration-swift.class.md) object with which to initialize a web extension controller.

# WKWebExtensionCommand (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

An object that encapsulates the properties for an individual web extension command.

## Declaration

```objectivec
@interface WKWebExtensionCommand : NSObject
```

<a id="overview"></a>

## Overview

Provides access to command properties such as a unique identifier, a descriptive title, and shortcut keys. Commands can be used by a web extension to perform specific actions within a web extension context, such toggling features, or interacting with web content. These commands enhance the functionality of the extension by allowing users to invoke actions quickly.

## Topics

### Instance Properties

- [activationKey](command/activationkey.md): The primary key used to trigger the command, distinct from any modifier flags.
- [identifier](command/id.md): A unique identifier for the command.
- [keyCommand](command/keycommand.md): A key command representation of the web extension command for use in the responder chain.
- [menuItem](command/menuitem.md): A menu item representation of the web extension command for use in menus.
- [modifierFlags](command/modifierflags.md): The modifier flags used with the activation key to trigger the command.
- [title](command/title.md): A descriptive title for the command to help discoverability.
- [webExtensionContext](command/webextensioncontext.md): The web extension context associated with the command.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Web extensions

- [WKWebExtension](../wkwebextension.md): An object that encapsulates a web extension’s resources that the manifest file defines.
- [WKWebExtensionTab](../wkwebextensiontab.md): A protocol with methods that represent a tab to web extensions.
- [WKWebExtensionWindow](../wkwebextensionwindow.md): A protocol with methods that represent a window to web extensions.
- [WKWebExtensionContext](../wkwebextensioncontext.md): An object that represents the runtime environment for a web extension.
- [WKWebExtensionController](../wkwebextensioncontroller.md): An object that manages a set of loaded extension contexts.
- [WKWebExtensionControllerDelegate](../wkwebextensioncontrollerdelegate.md): A group of methods you use to customize web extension interactions.
- [WKWebExtensionAction](action.md): An object that encapsulates the properties for an individual web extension action.
- [WKWebExtensionMatchPattern](matchpattern.md): An object that represents a way to specify groups of URLs.
- [WKWebExtensionMessagePort](messageport.md): An object that manages message-based communication with a web extension.
- [WKWebExtensionDataRecord](datarecord.md): An object that represents a record of stored data for a specific web extension context.
- [WKWebExtensionTabConfiguration](tabconfiguration.md): An object that encapsulates configuration options for a tab in an extension.
- [WKWebExtensionWindowConfiguration](windowconfiguration.md): An object that encapsulates configuration options for a window in an extension.
- [WKWebExtensionControllerConfiguration](../wkwebextensioncontroller/configuration-swift.class.md): A [WKWebExtensionControllerConfiguration](../wkwebextensioncontroller/configuration-swift.class.md) object with which to initialize a web extension controller.
