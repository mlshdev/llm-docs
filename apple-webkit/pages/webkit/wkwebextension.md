> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension](https://developer.apple.com/documentation/webkit/wkwebextension)

# WKWebExtension (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

An object that encapsulates a web extension’s resources that the manifest file defines.

## Declaration

```swift
@MainActor class WKWebExtension
```

<a id="overview"></a>

## Overview

This class reads and parses the `manifest.json` file along with the supporting resources like icons and localizations.

## Topics

### Classes

- [WKWebExtension.Action](wkwebextension/action.md): An object that encapsulates the properties for an individual web extension action.
- [WKWebExtension.Command](wkwebextension/command.md): An object that encapsulates the properties for an individual web extension command.
- [WKWebExtension.DataRecord](wkwebextension/datarecord.md): An object that represents a record of stored data for a specific web extension context.
- [WKWebExtension.MatchPattern](wkwebextension/matchpattern.md): An object that represents a way to specify groups of URLs.
- [WKWebExtension.MessagePort](wkwebextension/messageport.md): An object that manages message-based communication with a web extension.
- [WKWebExtension.TabConfiguration](wkwebextension/tabconfiguration.md): An object that encapsulates configuration options for a tab in an extension.
- [WKWebExtension.WindowConfiguration](wkwebextension/windowconfiguration.md): An object that encapsulates configuration options for a window in an extension.
- [WKWebExtensionController.Configuration](wkwebextensioncontroller/configuration-swift.class.md): A [WKWebExtensionController.Configuration](wkwebextensioncontroller/configuration-swift.class.md) object with which to initialize a web extension controller.

### Structures

- [WKWebExtension.DataType](wkwebextension/datatype.md): Constants for specifying data types for a [WKWebExtension.DataRecord](wkwebextension/datarecord.md).
- [WKWebExtension.Error](wkwebextension/error.md): Constants that indicate errors in the [WKWebExtension](wkwebextension.md) domain.
- [WKWebExtension.Permission](wkwebextension/permission.md): Constants for specifying permission in a [WKWebExtensionContext](wkwebextensioncontext.md).
- [WKWebExtension.TabChangedProperties](wkwebextension/tabchangedproperties.md): Constants the web extension controller and web extension context use to indicate tab changes.

### Enumerations

- [WKWebExtension.WindowState](wkwebextension/windowstate.md): Constants used by [WKWebExtensionWindow](wkwebextensionwindow.md) to indicate possible states of a window.
- [WKWebExtension.WindowType](wkwebextension/windowtype.md): Constants used by [WKWebExtensionWindow](wkwebextensionwindow.md) to indicate the type of a window.

### Initializers

- [init(appExtensionBundle:)](wkwebextension/init%28appextensionbundle_%29.md): Creates a web extension initialized with a specified app extension bundle.
- [init(resourceBaseURL:)](wkwebextension/init%28resourcebaseurl_%29.md): Creates a web extension initialized with a specified resource base URL, which can point to either a directory or a ZIP archive.

### Instance Properties

- [allRequestedMatchPatterns](wkwebextension/allrequestedmatchpatterns.md): The set of websites that the extension requires access to for injected content and for receiving messages from websites.
- [defaultLocale](wkwebextension/defaultlocale.md): The default locale for the extension.
- [displayActionLabel](wkwebextension/displayactionlabel.md): The default localized extension action label.
- [displayDescription](wkwebextension/displaydescription.md): The localized extension description.
- [displayName](wkwebextension/displayname.md): The localized extension name.
- [displayShortName](wkwebextension/displayshortname.md): The localized extension short name.
- [displayVersion](wkwebextension/displayversion.md): The localized extension display version.
- [errors](wkwebextension/errors.md): An array of all errors that occurred during the processing of the extension.
- [hasBackgroundContent](wkwebextension/hasbackgroundcontent.md): A Boolean value indicating whether the extension has background content that can run when needed.
- [hasCommands](wkwebextension/hascommands.md): A Boolean value indicating whether the extension includes commands that users can invoke.
- [hasContentModificationRules](wkwebextension/hascontentmodificationrules.md): A Boolean value indicating whether the extension includes rules used for content modification or blocking.
- [hasInjectedContent](wkwebextension/hasinjectedcontent.md): A Boolean value indicating whether the extension has script or stylesheet content that can be injected into webpages.
- [hasOptionsPage](wkwebextension/hasoptionspage.md): A Boolean value indicating whether the extension has an options page.
- [hasOverrideNewTabPage](wkwebextension/hasoverridenewtabpage.md): A Boolean value indicating whether the extension provides an alternative to the default new tab page.
- [hasPersistentBackgroundContent](wkwebextension/haspersistentbackgroundcontent.md): A Boolean value indicating whether the extension has background content that stays in memory as long as the extension is loaded.
- [manifest](wkwebextension/manifest.md): The parsed manifest as a dictionary.
- [manifestVersion](wkwebextension/manifestversion.md): The parsed manifest version, or `0` if there is no version specified in the manifest.
- [optionalPermissionMatchPatterns](wkwebextension/optionalpermissionmatchpatterns.md): The set of websites that the extension may need access to for optional functionality.
- [optionalPermissions](wkwebextension/optionalpermissions.md): The set of permissions that the extension may need for optional functionality.
- [requestedPermissionMatchPatterns](wkwebextension/requestedpermissionmatchpatterns.md): The set of websites that the extension requires access to for its base functionality.
- [requestedPermissions](wkwebextension/requestedpermissions.md): The set of permissions that the extension requires for its base functionality.
- [version](wkwebextension/version.md): The extension version.

### Instance Methods

- [actionIcon(for:)](wkwebextension/actionicon%28for_%29.md): Returns the default action icon for the specified size.
- [icon(for:)](wkwebextension/icon%28for_%29.md): Returns the extension’s icon image for the specified size.
- [supportsManifestVersion(\_:)](wkwebextension/supportsmanifestversion%28__%29.md): Checks if a manifest version is supported by the extension.

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

- [WKWebExtensionTab](wkwebextensiontab.md): A protocol with methods that represent a tab to web extensions.
- [WKWebExtensionWindow](wkwebextensionwindow.md): A protocol with methods that represent a window to web extensions.
- [WKWebExtensionContext](wkwebextensioncontext.md): An object that represents the runtime environment for a web extension.
- [WKWebExtensionController](wkwebextensioncontroller.md): An object that manages a set of loaded extension contexts.
- [WKWebExtensionControllerDelegate](wkwebextensioncontrollerdelegate.md): A group of methods you use to customize web extension interactions.
- [WKWebExtension.Action](wkwebextension/action.md): An object that encapsulates the properties for an individual web extension action.
- [WKWebExtension.Command](wkwebextension/command.md): An object that encapsulates the properties for an individual web extension command.
- [WKWebExtension.MatchPattern](wkwebextension/matchpattern.md): An object that represents a way to specify groups of URLs.
- [WKWebExtension.MessagePort](wkwebextension/messageport.md): An object that manages message-based communication with a web extension.
- [WKWebExtension.DataRecord](wkwebextension/datarecord.md): An object that represents a record of stored data for a specific web extension context.
- [WKWebExtension.TabConfiguration](wkwebextension/tabconfiguration.md): An object that encapsulates configuration options for a tab in an extension.
- [WKWebExtension.WindowConfiguration](wkwebextension/windowconfiguration.md): An object that encapsulates configuration options for a window in an extension.
- [WKWebExtensionController.Configuration](wkwebextensioncontroller/configuration-swift.class.md): A [WKWebExtensionController.Configuration](wkwebextensioncontroller/configuration-swift.class.md) object with which to initialize a web extension controller.

# WKWebExtension (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

An object that encapsulates a web extension’s resources that the manifest file defines.

## Declaration

```objectivec
@interface WKWebExtension : NSObject
```

<a id="overview"></a>

## Overview

This class reads and parses the `manifest.json` file along with the supporting resources like icons and localizations.

## Topics

### Classes

- [WKWebExtensionAction](wkwebextension/action.md): An object that encapsulates the properties for an individual web extension action.
- [WKWebExtensionCommand](wkwebextension/command.md): An object that encapsulates the properties for an individual web extension command.
- [WKWebExtensionDataRecord](wkwebextension/datarecord.md): An object that represents a record of stored data for a specific web extension context.
- [WKWebExtensionMatchPattern](wkwebextension/matchpattern.md): An object that represents a way to specify groups of URLs.
- [WKWebExtensionMessagePort](wkwebextension/messageport.md): An object that manages message-based communication with a web extension.
- [WKWebExtensionTabConfiguration](wkwebextension/tabconfiguration.md): An object that encapsulates configuration options for a tab in an extension.
- [WKWebExtensionWindowConfiguration](wkwebextension/windowconfiguration.md): An object that encapsulates configuration options for a window in an extension.
- [WKWebExtensionControllerConfiguration](wkwebextensioncontroller/configuration-swift.class.md): A [WKWebExtensionControllerConfiguration](wkwebextensioncontroller/configuration-swift.class.md) object with which to initialize a web extension controller.

### Type Aliases

- [WKWebExtensionDataType](wkwebextension/datatype.md): Constants for specifying data types for a [WKWebExtensionDataRecord](wkwebextension/datarecord.md).
- [WKWebExtensionPermission](wkwebextension/permission.md): Constants for specifying permission in a [WKWebExtensionContext](wkwebextensioncontext.md).

### Enumerations

- [WKWebExtensionTabChangedProperties](wkwebextension/tabchangedproperties.md): Constants the web extension controller and web extension context use to indicate tab changes.
- [WKWebExtensionWindowState](wkwebextension/windowstate.md): Constants used by [WKWebExtensionWindow](wkwebextensionwindow.md) to indicate possible states of a window.
- [WKWebExtensionWindowType](wkwebextension/windowtype.md): Constants used by [WKWebExtensionWindow](wkwebextensionwindow.md) to indicate the type of a window.

### Errors

- [WKWebExtensionError](wkwebextension/error/code.md): Constants that indicate errors in the [WKWebExtension](wkwebextension.md) domain.
- [WKWebExtensionErrorDomain](wkwebextension/errordomain.md): Indicates a web extension error.

### Instance Properties

- [allRequestedMatchPatterns](wkwebextension/allrequestedmatchpatterns.md): The set of websites that the extension requires access to for injected content and for receiving messages from websites.
- [defaultLocale](wkwebextension/defaultlocale.md): The default locale for the extension.
- [displayActionLabel](wkwebextension/displayactionlabel.md): The default localized extension action label.
- [displayDescription](wkwebextension/displaydescription.md): The localized extension description.
- [displayName](wkwebextension/displayname.md): The localized extension name.
- [displayShortName](wkwebextension/displayshortname.md): The localized extension short name.
- [displayVersion](wkwebextension/displayversion.md): The localized extension display version.
- [errors](wkwebextension/errors.md): An array of all errors that occurred during the processing of the extension.
- [hasBackgroundContent](wkwebextension/hasbackgroundcontent.md): A Boolean value indicating whether the extension has background content that can run when needed.
- [hasCommands](wkwebextension/hascommands.md): A Boolean value indicating whether the extension includes commands that users can invoke.
- [hasContentModificationRules](wkwebextension/hascontentmodificationrules.md): A Boolean value indicating whether the extension includes rules used for content modification or blocking.
- [hasInjectedContent](wkwebextension/hasinjectedcontent.md): A Boolean value indicating whether the extension has script or stylesheet content that can be injected into webpages.
- [hasOptionsPage](wkwebextension/hasoptionspage.md): A Boolean value indicating whether the extension has an options page.
- [hasOverrideNewTabPage](wkwebextension/hasoverridenewtabpage.md): A Boolean value indicating whether the extension provides an alternative to the default new tab page.
- [hasPersistentBackgroundContent](wkwebextension/haspersistentbackgroundcontent.md): A Boolean value indicating whether the extension has background content that stays in memory as long as the extension is loaded.
- [manifest](wkwebextension/manifest.md): The parsed manifest as a dictionary.
- [manifestVersion](wkwebextension/manifestversion.md): The parsed manifest version, or `0` if there is no version specified in the manifest.
- [optionalPermissionMatchPatterns](wkwebextension/optionalpermissionmatchpatterns.md): The set of websites that the extension may need access to for optional functionality.
- [optionalPermissions](wkwebextension/optionalpermissions.md): The set of permissions that the extension may need for optional functionality.
- [requestedPermissionMatchPatterns](wkwebextension/requestedpermissionmatchpatterns.md): The set of websites that the extension requires access to for its base functionality.
- [requestedPermissions](wkwebextension/requestedpermissions.md): The set of permissions that the extension requires for its base functionality.
- [version](wkwebextension/version.md): The extension version.

### Instance Methods

- [actionIconForSize:](wkwebextension/actionicon%28for_%29.md): Returns the default action icon for the specified size.
- [iconForSize:](wkwebextension/icon%28for_%29.md): Returns the extension’s icon image for the specified size.
- [supportsManifestVersion:](wkwebextension/supportsmanifestversion%28__%29.md): Checks if a manifest version is supported by the extension.

### Type Methods

- [extensionWithAppExtensionBundle:completionHandler:](wkwebextension/extensionwithappextensionbundle_completionhandler_.md): Returns a web extension initialized with a specified app extension bundle.
- [extensionWithResourceBaseURL:completionHandler:](wkwebextension/extensionwithresourcebaseurl_completionhandler_.md): Returns a web extension initialized with a specified resource base URL, which can point to either a directory or a ZIP archive.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Web extensions

- [WKWebExtensionTab](wkwebextensiontab.md): A protocol with methods that represent a tab to web extensions.
- [WKWebExtensionWindow](wkwebextensionwindow.md): A protocol with methods that represent a window to web extensions.
- [WKWebExtensionContext](wkwebextensioncontext.md): An object that represents the runtime environment for a web extension.
- [WKWebExtensionController](wkwebextensioncontroller.md): An object that manages a set of loaded extension contexts.
- [WKWebExtensionControllerDelegate](wkwebextensioncontrollerdelegate.md): A group of methods you use to customize web extension interactions.
- [WKWebExtensionAction](wkwebextension/action.md): An object that encapsulates the properties for an individual web extension action.
- [WKWebExtensionCommand](wkwebextension/command.md): An object that encapsulates the properties for an individual web extension command.
- [WKWebExtensionMatchPattern](wkwebextension/matchpattern.md): An object that represents a way to specify groups of URLs.
- [WKWebExtensionMessagePort](wkwebextension/messageport.md): An object that manages message-based communication with a web extension.
- [WKWebExtensionDataRecord](wkwebextension/datarecord.md): An object that represents a record of stored data for a specific web extension context.
- [WKWebExtensionTabConfiguration](wkwebextension/tabconfiguration.md): An object that encapsulates configuration options for a tab in an extension.
- [WKWebExtensionWindowConfiguration](wkwebextension/windowconfiguration.md): An object that encapsulates configuration options for a window in an extension.
- [WKWebExtensionControllerConfiguration](wkwebextensioncontroller/configuration-swift.class.md): A [WKWebExtensionControllerConfiguration](wkwebextensioncontroller/configuration-swift.class.md) object with which to initialize a web extension controller.
