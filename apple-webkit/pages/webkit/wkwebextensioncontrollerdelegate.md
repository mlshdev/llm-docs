> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontrollerdelegate](https://developer.apple.com/documentation/webkit/wkwebextensioncontrollerdelegate)

# WKWebExtensionControllerDelegate (Swift)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A group of methods you use to customize web extension interactions.

## Declaration

```swift
@MainActor protocol WKWebExtensionControllerDelegate : NSObjectProtocol
```

## Topics

### Instance Methods

- [webExtensionController(\_:connectUsing:for:completionHandler:)](wkwebextensioncontrollerdelegate/webextensioncontroller%28__connectusing_for_completionhandler_%29.md): Called when an extension context wants to establish a persistent connection to an application.
- [webExtensionController(\_:didUpdate:forExtensionContext:)](wkwebextensioncontrollerdelegate/webextensioncontroller%28__didupdate_forextensioncontext_%29.md): Called when an action’s properties are updated.
- [webExtensionController(\_:focusedWindowFor:)](wkwebextensioncontrollerdelegate/webextensioncontroller%28__focusedwindowfor_%29.md): Called when an extension context requests the currently focused window.
- [webExtensionController(\_:openNewTabUsing:for:completionHandler:)](wkwebextensioncontrollerdelegate/webextensioncontroller%28__opennewtabusing_for_completionhandler_%29.md): Called when an extension context requests a new tab to be opened.
- [webExtensionController(\_:openNewWindowUsing:for:completionHandler:)](wkwebextensioncontrollerdelegate/webextensioncontroller%28__opennewwindowusing_for_completionhandler_%29.md): Called when an extension context requests a new window to be opened.
- [webExtensionController(\_:openOptionsPageFor:completionHandler:)](wkwebextensioncontrollerdelegate/webextensioncontroller%28__openoptionspagefor_completionhandler_%29.md): Called when an extension context requests its options page to be opened.
- [webExtensionController(\_:openWindowsFor:)](wkwebextensioncontrollerdelegate/webextensioncontroller%28__openwindowsfor_%29.md): Called when an extension context requests the list of ordered open windows.
- [webExtensionController(\_:presentActionPopup:for:completionHandler:)](wkwebextensioncontrollerdelegate/webextensioncontroller%28__presentactionpopup_for_completionhandler_%29.md): Called when a popup is requested to be displayed for a specific action.
- [webExtensionController(\_:promptForPermissionMatchPatterns:in:for:completionHandler:)](wkwebextensioncontrollerdelegate/webextensioncontroller%28__promptforpermissionmatchpatterns_in_for_completionhandler_%29.md): Called when an extension context requests access to a set of match patterns.
- [webExtensionController(\_:promptForPermissionToAccess:in:for:completionHandler:)](wkwebextensioncontrollerdelegate/webextensioncontroller%28__promptforpermissiontoaccess_in_for_completionhandler_%29.md): Called when an extension context requests access to a set of URLs.
- [webExtensionController(\_:promptForPermissions:in:for:completionHandler:)](wkwebextensioncontrollerdelegate/webextensioncontroller%28__promptforpermissions_in_for_completionhandler_%29.md): Called when an extension context requests permissions.
- [webExtensionController(\_:sendMessage:toApplicationWithIdentifier:for:replyHandler:)](wkwebextensioncontrollerdelegate/webextensioncontroller%28__sendmessage_toapplicationwithidentifier_for_replyhandler_%29.md): Called when an extension context wants to send a one-time message to an application.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Web extensions

- [WKWebExtension](wkwebextension.md): An object that encapsulates a web extension’s resources that the manifest file defines.
- [WKWebExtensionTab](wkwebextensiontab.md): A protocol with methods that represent a tab to web extensions.
- [WKWebExtensionWindow](wkwebextensionwindow.md): A protocol with methods that represent a window to web extensions.
- [WKWebExtensionContext](wkwebextensioncontext.md): An object that represents the runtime environment for a web extension.
- [WKWebExtensionController](wkwebextensioncontroller.md): An object that manages a set of loaded extension contexts.
- [WKWebExtension.Action](wkwebextension/action.md): An object that encapsulates the properties for an individual web extension action.
- [WKWebExtension.Command](wkwebextension/command.md): An object that encapsulates the properties for an individual web extension command.
- [WKWebExtension.MatchPattern](wkwebextension/matchpattern.md): An object that represents a way to specify groups of URLs.
- [WKWebExtension.MessagePort](wkwebextension/messageport.md): An object that manages message-based communication with a web extension.
- [WKWebExtension.DataRecord](wkwebextension/datarecord.md): An object that represents a record of stored data for a specific web extension context.
- [WKWebExtension.TabConfiguration](wkwebextension/tabconfiguration.md): An object that encapsulates configuration options for a tab in an extension.
- [WKWebExtension.WindowConfiguration](wkwebextension/windowconfiguration.md): An object that encapsulates configuration options for a window in an extension.
- [WKWebExtensionController.Configuration](wkwebextensioncontroller/configuration-swift.class.md): A [WKWebExtensionController.Configuration](wkwebextensioncontroller/configuration-swift.class.md) object with which to initialize a web extension controller.

# WKWebExtensionControllerDelegate (Objective-C)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A group of methods you use to customize web extension interactions.

## Declaration

```objectivec
@protocol WKWebExtensionControllerDelegate <NSObject>
```

## Topics

### Instance Methods

- [webExtensionController:connectUsingMessagePort:forExtensionContext:completionHandler:](wkwebextensioncontrollerdelegate/webextensioncontroller%28__connectusing_for_completionhandler_%29.md): Called when an extension context wants to establish a persistent connection to an application.
- [webExtensionController:didUpdateAction:forExtensionContext:](wkwebextensioncontrollerdelegate/webextensioncontroller%28__didupdate_forextensioncontext_%29.md): Called when an action’s properties are updated.
- [webExtensionController:focusedWindowForExtensionContext:](wkwebextensioncontrollerdelegate/webextensioncontroller%28__focusedwindowfor_%29.md): Called when an extension context requests the currently focused window.
- [webExtensionController:openNewTabUsingConfiguration:forExtensionContext:completionHandler:](wkwebextensioncontrollerdelegate/webextensioncontroller%28__opennewtabusing_for_completionhandler_%29.md): Called when an extension context requests a new tab to be opened.
- [webExtensionController:openNewWindowUsingConfiguration:forExtensionContext:completionHandler:](wkwebextensioncontrollerdelegate/webextensioncontroller%28__opennewwindowusing_for_completionhandler_%29.md): Called when an extension context requests a new window to be opened.
- [webExtensionController:openOptionsPageForExtensionContext:completionHandler:](wkwebextensioncontrollerdelegate/webextensioncontroller%28__openoptionspagefor_completionhandler_%29.md): Called when an extension context requests its options page to be opened.
- [webExtensionController:openWindowsForExtensionContext:](wkwebextensioncontrollerdelegate/webextensioncontroller%28__openwindowsfor_%29.md): Called when an extension context requests the list of ordered open windows.
- [webExtensionController:presentPopupForAction:forExtensionContext:completionHandler:](wkwebextensioncontrollerdelegate/webextensioncontroller%28__presentactionpopup_for_completionhandler_%29.md): Called when a popup is requested to be displayed for a specific action.
- [webExtensionController:promptForPermissionMatchPatterns:inTab:forExtensionContext:completionHandler:](wkwebextensioncontrollerdelegate/webextensioncontroller%28__promptforpermissionmatchpatterns_in_for_completionhandler_%29.md): Called when an extension context requests access to a set of match patterns.
- [webExtensionController:promptForPermissionToAccessURLs:inTab:forExtensionContext:completionHandler:](wkwebextensioncontrollerdelegate/webextensioncontroller%28__promptforpermissiontoaccess_in_for_completionhandler_%29.md): Called when an extension context requests access to a set of URLs.
- [webExtensionController:promptForPermissions:inTab:forExtensionContext:completionHandler:](wkwebextensioncontrollerdelegate/webextensioncontroller%28__promptforpermissions_in_for_completionhandler_%29.md): Called when an extension context requests permissions.
- [webExtensionController:sendMessage:toApplicationWithIdentifier:forExtensionContext:replyHandler:](wkwebextensioncontrollerdelegate/webextensioncontroller%28__sendmessage_toapplicationwithidentifier_for_replyhandler_%29.md): Called when an extension context wants to send a one-time message to an application.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Web extensions

- [WKWebExtension](wkwebextension.md): An object that encapsulates a web extension’s resources that the manifest file defines.
- [WKWebExtensionTab](wkwebextensiontab.md): A protocol with methods that represent a tab to web extensions.
- [WKWebExtensionWindow](wkwebextensionwindow.md): A protocol with methods that represent a window to web extensions.
- [WKWebExtensionContext](wkwebextensioncontext.md): An object that represents the runtime environment for a web extension.
- [WKWebExtensionController](wkwebextensioncontroller.md): An object that manages a set of loaded extension contexts.
- [WKWebExtensionAction](wkwebextension/action.md): An object that encapsulates the properties for an individual web extension action.
- [WKWebExtensionCommand](wkwebextension/command.md): An object that encapsulates the properties for an individual web extension command.
- [WKWebExtensionMatchPattern](wkwebextension/matchpattern.md): An object that represents a way to specify groups of URLs.
- [WKWebExtensionMessagePort](wkwebextension/messageport.md): An object that manages message-based communication with a web extension.
- [WKWebExtensionDataRecord](wkwebextension/datarecord.md): An object that represents a record of stored data for a specific web extension context.
- [WKWebExtensionTabConfiguration](wkwebextension/tabconfiguration.md): An object that encapsulates configuration options for a tab in an extension.
- [WKWebExtensionWindowConfiguration](wkwebextension/windowconfiguration.md): An object that encapsulates configuration options for a window in an extension.
- [WKWebExtensionControllerConfiguration](wkwebextensioncontroller/configuration-swift.class.md): A [WKWebExtensionControllerConfiguration](wkwebextensioncontroller/configuration-swift.class.md) object with which to initialize a web extension controller.
