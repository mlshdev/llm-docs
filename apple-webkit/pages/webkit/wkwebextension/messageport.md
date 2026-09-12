> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/messageport](https://developer.apple.com/documentation/webkit/wkwebextension/messageport)

# WKWebExtension.MessagePort (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

An object that manages message-based communication with a web extension.

## Declaration

```swift
@MainActor class MessagePort
```

<a id="overview"></a>

## Overview

Contains properties and methods to handle message exchanges with a web extension.

## Topics

### Structures

- [WKWebExtension.MessagePort.Error](messageport/error.md): Constants that indicate errors in the [WKWebExtension.MessagePort](messageport.md) domain.

### Instance Properties

- [applicationIdentifier](messageport/applicationidentifier.md): The unique identifier for the app to which this port should be connected.
- [disconnectHandler](messageport/disconnecthandler.md): The block to be executed when the port disconnects.
- [isDisconnected](messageport/isdisconnected.md): Indicates whether the message port is disconnected.
- [messageHandler](messageport/messagehandler.md): The block to be executed when a message is received from the web extension.

### Instance Methods

- [disconnect()](messageport/disconnect%28%29.md): Disconnects the port, terminating all further messages.
- [disconnect(throwing:)](messageport/disconnect%28throwing_%29.md): Disconnects the port, terminating all further messages with an optional error.
- [sendMessage(\_:completionHandler:)](messageport/sendmessage%28__completionhandler_%29.md): Sends a message to the connected web extension.

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
- [WKWebExtension.Command](command.md): An object that encapsulates the properties for an individual web extension command.
- [WKWebExtension.MatchPattern](matchpattern.md): An object that represents a way to specify groups of URLs.
- [WKWebExtension.DataRecord](datarecord.md): An object that represents a record of stored data for a specific web extension context.
- [WKWebExtension.TabConfiguration](tabconfiguration.md): An object that encapsulates configuration options for a tab in an extension.
- [WKWebExtension.WindowConfiguration](windowconfiguration.md): An object that encapsulates configuration options for a window in an extension.
- [WKWebExtensionController.Configuration](../wkwebextensioncontroller/configuration-swift.class.md): A [WKWebExtensionController.Configuration](../wkwebextensioncontroller/configuration-swift.class.md) object with which to initialize a web extension controller.

# WKWebExtensionMessagePort (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

An object that manages message-based communication with a web extension.

## Declaration

```objectivec
@interface WKWebExtensionMessagePort : NSObject
```

<a id="overview"></a>

## Overview

Contains properties and methods to handle message exchanges with a web extension.

## Topics

### Errors

- [WKWebExtensionMessagePortError](messageport/error/code.md): Constants that indicate errors in the [WKWebExtensionMessagePort](messageport.md) domain.
- [WKWebExtensionMessagePortErrorDomain](messageport/errordomain.md): A string that identifies the error domain.

### Instance Properties

- [applicationIdentifier](messageport/applicationidentifier.md): The unique identifier for the app to which this port should be connected.
- [disconnectHandler](messageport/disconnecthandler.md): The block to be executed when the port disconnects.
- [disconnected](messageport/isdisconnected.md): Indicates whether the message port is disconnected.
- [messageHandler](messageport/messagehandler.md): The block to be executed when a message is received from the web extension.

### Instance Methods

- [disconnect](messageport/disconnect%28%29.md): Disconnects the port, terminating all further messages.
- [disconnectWithError:](messageport/disconnect%28throwing_%29.md): Disconnects the port, terminating all further messages with an optional error.
- [sendMessage:completionHandler:](messageport/sendmessage%28__completionhandler_%29.md): Sends a message to the connected web extension.

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
- [WKWebExtensionCommand](command.md): An object that encapsulates the properties for an individual web extension command.
- [WKWebExtensionMatchPattern](matchpattern.md): An object that represents a way to specify groups of URLs.
- [WKWebExtensionDataRecord](datarecord.md): An object that represents a record of stored data for a specific web extension context.
- [WKWebExtensionTabConfiguration](tabconfiguration.md): An object that encapsulates configuration options for a tab in an extension.
- [WKWebExtensionWindowConfiguration](windowconfiguration.md): An object that encapsulates configuration options for a window in an extension.
- [WKWebExtensionControllerConfiguration](../wkwebextensioncontroller/configuration-swift.class.md): A [WKWebExtensionControllerConfiguration](../wkwebextensioncontroller/configuration-swift.class.md) object with which to initialize a web extension controller.
