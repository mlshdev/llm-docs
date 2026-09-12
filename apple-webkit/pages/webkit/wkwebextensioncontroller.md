> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontroller](https://developer.apple.com/documentation/webkit/wkwebextensioncontroller)

# WKWebExtensionController (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

An object that manages a set of loaded extension contexts.

## Declaration

```swift
@MainActor class WKWebExtensionController
```

<a id="overview"></a>

## Overview

You can have one or more extension controller instances, allowing different parts of the app to use different sets of extensions.

You can associate a controller with [WKWebView](wkwebview.md) using the [webExtensionController](wkwebviewconfiguration/webextensioncontroller.md) property on [WKWebViewConfiguration](wkwebviewconfiguration.md).

## Topics

### Initializers

- [init()](wkwebextensioncontroller/init%28%29.md): Returns a web extension controller initialized with the default configuration.
- [init(configuration:)](wkwebextensioncontroller/init%28configuration_%29.md): Returns a web extension controller initialized with the specified configuration.

### Instance Properties

- [configuration](wkwebextensioncontroller/configuration-swift.property.md): A copy of the configuration with which the web extension controller was initialized.
- [delegate](wkwebextensioncontroller/delegate.md): The extension controller delegate.
- [extensionContexts](wkwebextensioncontroller/extensioncontexts.md): A set of all the currently loaded extension contexts.
- [extensions](wkwebextensioncontroller/extensions.md): A set of all the currently loaded extensions.

### Instance Methods

- [didActivateTab(\_:previousActiveTab:)](wkwebextensioncontroller/didactivatetab%28__previousactivetab_%29.md): Should be called by the app when a tab is activated to notify all loaded web extensions.
- [didChangeTabProperties(\_:for:)](wkwebextensioncontroller/didchangetabproperties%28__for_%29.md): Should be called by the app when the properties of a tab are changed to fire appropriate events with all loaded web extensions.
- [didCloseTab(\_:windowIsClosing:)](wkwebextensioncontroller/didclosetab%28__windowisclosing_%29.md): Should be called by the app when a tab is closed to fire appropriate events with all loaded web extensions.
- [didCloseWindow(\_:)](wkwebextensioncontroller/didclosewindow%28__%29.md): Should be called by the app when a window is closed to fire appropriate events with all loaded web extensions.
- [didDeselectTabs(\_:)](wkwebextensioncontroller/diddeselecttabs%28__%29.md): Should be called by the app when tabs are deselected to fire appropriate events with all loaded web extensions.
- [didFocusWindow(\_:)](wkwebextensioncontroller/didfocuswindow%28__%29.md): Should be called by the app when a window gains focus to fire appropriate events with all loaded web extensions.
- [didMoveTab(\_:from:in:)](wkwebextensioncontroller/didmovetab%28__from_in_%29.md): Should be called by the app when a tab is moved to fire appropriate events with all loaded web extensions.
- [didOpenTab(\_:)](wkwebextensioncontroller/didopentab%28__%29.md): Should be called by the app when a new tab is opened to fire appropriate events with all loaded web extensions.
- [didOpenWindow(\_:)](wkwebextensioncontroller/didopenwindow%28__%29.md): Should be called by the app when a new window is opened to fire appropriate events with all loaded web extensions.
- [didReplaceTab(\_:with:)](wkwebextensioncontroller/didreplacetab%28__with_%29.md): Should be called by the app when a tab is replaced by another tab to fire appropriate events with all loaded web extensions.
- [didSelectTabs(\_:)](wkwebextensioncontroller/didselecttabs%28__%29.md): Should be called by the app when tabs are selected to fire appropriate events with all loaded web extensions.
- [extensionContext(for:)](wkwebextensioncontroller/extensioncontext%28for_%29-2kr4.md): Returns a loaded extension context matching the specified URL.
- [extensionContext(for:)](wkwebextensioncontroller/extensioncontext%28for_%29-6ecpm.md): Returns a loaded extension context for the specified extension.
- [fetchDataRecord(ofTypes:for:completionHandler:)](wkwebextensioncontroller/fetchdatarecord%28oftypes_for_completionhandler_%29.md): Fetches a data record containing the given extension data types for a specific known web extension context.
- [fetchDataRecords(ofTypes:completionHandler:)](wkwebextensioncontroller/fetchdatarecords%28oftypes_completionhandler_%29.md): Fetches data records containing the given extension data types for all known extensions.
- [load(\_:)](wkwebextensioncontroller/load%28__%29.md): Loads the specified extension context.
- [removeData(ofTypes:from:completionHandler:)](wkwebextensioncontroller/removedata%28oftypes_from_completionhandler_%29.md): Removes extension data of the given types for the given data records.
- [unload(\_:)](wkwebextensioncontroller/unload%28__%29.md): Unloads the specified extension context.

### Type Properties

- [allExtensionDataTypes](wkwebextensioncontroller/allextensiondatatypes.md): Returns a set of all available extension data types.

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

- [WKWebExtension](wkwebextension.md): An object that encapsulates a web extension’s resources that the manifest file defines.
- [WKWebExtensionTab](wkwebextensiontab.md): A protocol with methods that represent a tab to web extensions.
- [WKWebExtensionWindow](wkwebextensionwindow.md): A protocol with methods that represent a window to web extensions.
- [WKWebExtensionContext](wkwebextensioncontext.md): An object that represents the runtime environment for a web extension.
- [WKWebExtensionControllerDelegate](wkwebextensioncontrollerdelegate.md): A group of methods you use to customize web extension interactions.
- [WKWebExtension.Action](wkwebextension/action.md): An object that encapsulates the properties for an individual web extension action.
- [WKWebExtension.Command](wkwebextension/command.md): An object that encapsulates the properties for an individual web extension command.
- [WKWebExtension.MatchPattern](wkwebextension/matchpattern.md): An object that represents a way to specify groups of URLs.
- [WKWebExtension.MessagePort](wkwebextension/messageport.md): An object that manages message-based communication with a web extension.
- [WKWebExtension.DataRecord](wkwebextension/datarecord.md): An object that represents a record of stored data for a specific web extension context.
- [WKWebExtension.TabConfiguration](wkwebextension/tabconfiguration.md): An object that encapsulates configuration options for a tab in an extension.
- [WKWebExtension.WindowConfiguration](wkwebextension/windowconfiguration.md): An object that encapsulates configuration options for a window in an extension.
- [WKWebExtensionController.Configuration](wkwebextensioncontroller/configuration-swift.class.md): A [WKWebExtensionController.Configuration](wkwebextensioncontroller/configuration-swift.class.md) object with which to initialize a web extension controller.

# WKWebExtensionController (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

An object that manages a set of loaded extension contexts.

## Declaration

```objectivec
@interface WKWebExtensionController : NSObject
```

<a id="overview"></a>

## Overview

You can have one or more extension controller instances, allowing different parts of the app to use different sets of extensions.

You can associate a controller with [WKWebView](wkwebview.md) using the [webExtensionController](wkwebviewconfiguration/webextensioncontroller.md) property on [WKWebViewConfiguration](wkwebviewconfiguration.md).

## Topics

### Instance Properties

- [configuration](wkwebextensioncontroller/configuration-swift.property.md): A copy of the configuration with which the web extension controller was initialized.
- [delegate](wkwebextensioncontroller/delegate.md): The extension controller delegate.
- [extensionContexts](wkwebextensioncontroller/extensioncontexts.md): A set of all the currently loaded extension contexts.
- [extensions](wkwebextensioncontroller/extensions.md): A set of all the currently loaded extensions.

### Instance Methods

- [didActivateTab:previousActiveTab:](wkwebextensioncontroller/didactivatetab_previousactivetab_.md): Should be called by the app when a tab is activated to notify all loaded web extensions.
- [didChangeTabProperties:forTab:](wkwebextensioncontroller/didchangetabproperties%28__for_%29.md): Should be called by the app when the properties of a tab are changed to fire appropriate events with all loaded web extensions.
- [didCloseTab:windowIsClosing:](wkwebextensioncontroller/didclosetab_windowisclosing_.md): Should be called by the app when a tab is closed to fire appropriate events with all loaded web extensions.
- [didCloseWindow:](wkwebextensioncontroller/didclosewindow%28__%29.md): Should be called by the app when a window is closed to fire appropriate events with all loaded web extensions.
- [didDeselectTabs:](wkwebextensioncontroller/diddeselecttabs%28__%29.md): Should be called by the app when tabs are deselected to fire appropriate events with all loaded web extensions.
- [didFocusWindow:](wkwebextensioncontroller/didfocuswindow%28__%29.md): Should be called by the app when a window gains focus to fire appropriate events with all loaded web extensions.
- [didMoveTab:fromIndex:inWindow:](wkwebextensioncontroller/didmovetab_fromindex_inwindow_.md): Should be called by the app when a tab is moved to fire appropriate events with all loaded web extensions.
- [didOpenTab:](wkwebextensioncontroller/didopentab%28__%29.md): Should be called by the app when a new tab is opened to fire appropriate events with all loaded web extensions.
- [didOpenWindow:](wkwebextensioncontroller/didopenwindow%28__%29.md): Should be called by the app when a new window is opened to fire appropriate events with all loaded web extensions.
- [didReplaceTab:withTab:](wkwebextensioncontroller/didreplacetab%28__with_%29.md): Should be called by the app when a tab is replaced by another tab to fire appropriate events with all loaded web extensions.
- [didSelectTabs:](wkwebextensioncontroller/didselecttabs%28__%29.md): Should be called by the app when tabs are selected to fire appropriate events with all loaded web extensions.
- [extensionContextForURL:](wkwebextensioncontroller/extensioncontext%28for_%29-2kr4.md): Returns a loaded extension context matching the specified URL.
- [extensionContextForExtension:](wkwebextensioncontroller/extensioncontext%28for_%29-6ecpm.md): Returns a loaded extension context for the specified extension.
- [fetchDataRecordOfTypes:forExtensionContext:completionHandler:](wkwebextensioncontroller/fetchdatarecord%28oftypes_for_completionhandler_%29.md): Fetches a data record containing the given extension data types for a specific known web extension context.
- [fetchDataRecordsOfTypes:completionHandler:](wkwebextensioncontroller/fetchdatarecords%28oftypes_completionhandler_%29.md): Fetches data records containing the given extension data types for all known extensions.
- [init](wkwebextensioncontroller/init%28%29.md): Returns a web extension controller initialized with the default configuration.
- [initWithConfiguration:](wkwebextensioncontroller/init%28configuration_%29.md): Returns a web extension controller initialized with the specified configuration.
- [loadExtensionContext:error:](wkwebextensioncontroller/load%28__%29.md): Loads the specified extension context.
- [removeDataOfTypes:fromDataRecords:completionHandler:](wkwebextensioncontroller/removedata%28oftypes_from_completionhandler_%29.md): Removes extension data of the given types for the given data records.
- [unloadExtensionContext:error:](wkwebextensioncontroller/unload%28__%29.md): Unloads the specified extension context.

### Type Properties

- [allExtensionDataTypes](wkwebextensioncontroller/allextensiondatatypes.md): Returns a set of all available extension data types.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Web extensions

- [WKWebExtension](wkwebextension.md): An object that encapsulates a web extension’s resources that the manifest file defines.
- [WKWebExtensionTab](wkwebextensiontab.md): A protocol with methods that represent a tab to web extensions.
- [WKWebExtensionWindow](wkwebextensionwindow.md): A protocol with methods that represent a window to web extensions.
- [WKWebExtensionContext](wkwebextensioncontext.md): An object that represents the runtime environment for a web extension.
- [WKWebExtensionControllerDelegate](wkwebextensioncontrollerdelegate.md): A group of methods you use to customize web extension interactions.
- [WKWebExtensionAction](wkwebextension/action.md): An object that encapsulates the properties for an individual web extension action.
- [WKWebExtensionCommand](wkwebextension/command.md): An object that encapsulates the properties for an individual web extension command.
- [WKWebExtensionMatchPattern](wkwebextension/matchpattern.md): An object that represents a way to specify groups of URLs.
- [WKWebExtensionMessagePort](wkwebextension/messageport.md): An object that manages message-based communication with a web extension.
- [WKWebExtensionDataRecord](wkwebextension/datarecord.md): An object that represents a record of stored data for a specific web extension context.
- [WKWebExtensionTabConfiguration](wkwebextension/tabconfiguration.md): An object that encapsulates configuration options for a tab in an extension.
- [WKWebExtensionWindowConfiguration](wkwebextension/windowconfiguration.md): An object that encapsulates configuration options for a window in an extension.
- [WKWebExtensionControllerConfiguration](wkwebextensioncontroller/configuration-swift.class.md): A [WKWebExtensionControllerConfiguration](wkwebextensioncontroller/configuration-swift.class.md) object with which to initialize a web extension controller.
