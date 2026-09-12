> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontroller/configuration-swift.class](https://developer.apple.com/documentation/webkit/wkwebextensioncontroller/configuration-swift.class)

# WKWebExtensionController.Configuration (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A [WKWebExtensionController.Configuration](configuration-swift.class.md) object with which to initialize a web extension controller.

## Declaration

```swift
@MainActor class Configuration
```

<a id="overview"></a>

## Overview

Contains properties used to configure a [WKWebExtensionController](../wkwebextensioncontroller.md).

## Topics

### Initializers

- [init(coder:)](configuration-swift.class/init%28coder_%29.md)
- [init(identifier:)](configuration-swift.class/init%28identifier_%29.md): Returns a new configuration that is persistent and unique for the specified identifier.

### Instance Properties

- [defaultWebsiteDataStore](configuration-swift.class/defaultwebsitedatastore.md): The default data store for website data and cookie access in extension contexts.
- [identifier](configuration-swift.class/identifier.md): The unique identifier used for persistent configuration storage, or `nil` when it is the default or not persistent.
- [isPersistent](configuration-swift.class/ispersistent.md): A Boolean value indicating if this context will write data to the the file system.
- [webViewConfiguration](configuration-swift.class/webviewconfiguration.md): The web view configuration to be used as a basis for configuring web views in extension contexts.

### Type Methods

- [default()](configuration-swift.class/default%28%29.md): Returns a new default configuration that is persistent and not unique.
- [nonPersistent()](configuration-swift.class/nonpersistent%28%29.md): Returns a new non-persistent configuration.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Web extensions

- [WKWebExtension](../wkwebextension.md): An object that encapsulates a web extension’s resources that the manifest file defines.
- [WKWebExtensionTab](../wkwebextensiontab.md): A protocol with methods that represent a tab to web extensions.
- [WKWebExtensionWindow](../wkwebextensionwindow.md): A protocol with methods that represent a window to web extensions.
- [WKWebExtensionContext](../wkwebextensioncontext.md): An object that represents the runtime environment for a web extension.
- [WKWebExtensionController](../wkwebextensioncontroller.md): An object that manages a set of loaded extension contexts.
- [WKWebExtensionControllerDelegate](../wkwebextensioncontrollerdelegate.md): A group of methods you use to customize web extension interactions.
- [WKWebExtension.Action](../wkwebextension/action.md): An object that encapsulates the properties for an individual web extension action.
- [WKWebExtension.Command](../wkwebextension/command.md): An object that encapsulates the properties for an individual web extension command.
- [WKWebExtension.MatchPattern](../wkwebextension/matchpattern.md): An object that represents a way to specify groups of URLs.
- [WKWebExtension.MessagePort](../wkwebextension/messageport.md): An object that manages message-based communication with a web extension.
- [WKWebExtension.DataRecord](../wkwebextension/datarecord.md): An object that represents a record of stored data for a specific web extension context.
- [WKWebExtension.TabConfiguration](../wkwebextension/tabconfiguration.md): An object that encapsulates configuration options for a tab in an extension.
- [WKWebExtension.WindowConfiguration](../wkwebextension/windowconfiguration.md): An object that encapsulates configuration options for a window in an extension.

# WKWebExtensionControllerConfiguration (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A [WKWebExtensionControllerConfiguration](configuration-swift.class.md) object with which to initialize a web extension controller.

## Declaration

```objectivec
@interface WKWebExtensionControllerConfiguration : NSObject
```

<a id="overview"></a>

## Overview

Contains properties used to configure a [WKWebExtensionController](../wkwebextensioncontroller.md).

## Topics

### Instance Properties

- [defaultWebsiteDataStore](configuration-swift.class/defaultwebsitedatastore.md): The default data store for website data and cookie access in extension contexts.
- [identifier](configuration-swift.class/identifier.md): The unique identifier used for persistent configuration storage, or `nil` when it is the default or not persistent.
- [persistent](configuration-swift.class/ispersistent.md): A Boolean value indicating if this context will write data to the the file system.
- [webViewConfiguration](configuration-swift.class/webviewconfiguration.md): The web view configuration to be used as a basis for configuring web views in extension contexts.

### Type Methods

- [defaultConfiguration](configuration-swift.class/default%28%29.md): Returns a new default configuration that is persistent and not unique.
- [configurationWithIdentifier:](configuration-swift.class/init%28identifier_%29.md): Returns a new configuration that is persistent and unique for the specified identifier.
- [nonPersistentConfiguration](configuration-swift.class/nonpersistent%28%29.md): Returns a new non-persistent configuration.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Web extensions

- [WKWebExtension](../wkwebextension.md): An object that encapsulates a web extension’s resources that the manifest file defines.
- [WKWebExtensionTab](../wkwebextensiontab.md): A protocol with methods that represent a tab to web extensions.
- [WKWebExtensionWindow](../wkwebextensionwindow.md): A protocol with methods that represent a window to web extensions.
- [WKWebExtensionContext](../wkwebextensioncontext.md): An object that represents the runtime environment for a web extension.
- [WKWebExtensionController](../wkwebextensioncontroller.md): An object that manages a set of loaded extension contexts.
- [WKWebExtensionControllerDelegate](../wkwebextensioncontrollerdelegate.md): A group of methods you use to customize web extension interactions.
- [WKWebExtensionAction](../wkwebextension/action.md): An object that encapsulates the properties for an individual web extension action.
- [WKWebExtensionCommand](../wkwebextension/command.md): An object that encapsulates the properties for an individual web extension command.
- [WKWebExtensionMatchPattern](../wkwebextension/matchpattern.md): An object that represents a way to specify groups of URLs.
- [WKWebExtensionMessagePort](../wkwebextension/messageport.md): An object that manages message-based communication with a web extension.
- [WKWebExtensionDataRecord](../wkwebextension/datarecord.md): An object that represents a record of stored data for a specific web extension context.
- [WKWebExtensionTabConfiguration](../wkwebextension/tabconfiguration.md): An object that encapsulates configuration options for a tab in an extension.
- [WKWebExtensionWindowConfiguration](../wkwebextension/windowconfiguration.md): An object that encapsulates configuration options for a window in an extension.
