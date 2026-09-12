> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensionwindow](https://developer.apple.com/documentation/webkit/wkwebextensionwindow)

# WKWebExtensionWindow (Swift)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A protocol with methods that represent a window to web extensions.

## Declaration

```swift
@MainActor protocol WKWebExtensionWindow : NSObjectProtocol
```

## Topics

### Instance Methods

- [activeTab(for:)](wkwebextensionwindow/activetab%28for_%29.md): Called when the active tab is needed for the window.
- [close(for:completionHandler:)](wkwebextensionwindow/close%28for_completionhandler_%29.md): Called to close the window.
- [focus(for:completionHandler:)](wkwebextensionwindow/focus%28for_completionhandler_%29.md): Called to focus the window.
- [frame(for:)](wkwebextensionwindow/frame%28for_%29.md): Called when the frame of the window is needed.
- [isPrivate(for:)](wkwebextensionwindow/isprivate%28for_%29.md): Called when the private state of the window is needed.
- [screenFrame(for:)](wkwebextensionwindow/screenframe%28for_%29.md): Called when the screen frame containing the window is needed.
- [setFrame(\_:for:completionHandler:)](wkwebextensionwindow/setframe%28__for_completionhandler_%29.md): Called to set the frame of the window.
- [setWindowState(\_:for:completionHandler:)](wkwebextensionwindow/setwindowstate%28__for_completionhandler_%29.md): Called to set the state of the window.
- [tabs(for:)](wkwebextensionwindow/tabs%28for_%29.md): Called when the tabs are needed for the window.
- [windowState(for:)](wkwebextensionwindow/windowstate%28for_%29.md): Called when the state of the window is needed.
- [windowType(for:)](wkwebextensionwindow/windowtype%28for_%29.md): Called when the type of the window is needed.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Web extensions

- [WKWebExtension](wkwebextension.md): An object that encapsulates a web extension’s resources that the manifest file defines.
- [WKWebExtensionTab](wkwebextensiontab.md): A protocol with methods that represent a tab to web extensions.
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

# WKWebExtensionWindow (Objective-C)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A protocol with methods that represent a window to web extensions.

## Declaration

```objectivec
@protocol WKWebExtensionWindow <NSObject>
```

## Topics

### Instance Methods

- [activeTabForWebExtensionContext:](wkwebextensionwindow/activetab%28for_%29.md): Called when the active tab is needed for the window.
- [closeForWebExtensionContext:completionHandler:](wkwebextensionwindow/close%28for_completionhandler_%29.md): Called to close the window.
- [focusForWebExtensionContext:completionHandler:](wkwebextensionwindow/focus%28for_completionhandler_%29.md): Called to focus the window.
- [frameForWebExtensionContext:](wkwebextensionwindow/frame%28for_%29.md): Called when the frame of the window is needed.
- [isPrivateForWebExtensionContext:](wkwebextensionwindow/isprivate%28for_%29.md): Called when the private state of the window is needed.
- [screenFrameForWebExtensionContext:](wkwebextensionwindow/screenframe%28for_%29.md): Called when the screen frame containing the window is needed.
- [setFrame:forWebExtensionContext:completionHandler:](wkwebextensionwindow/setframe%28__for_completionhandler_%29.md): Called to set the frame of the window.
- [setWindowState:forWebExtensionContext:completionHandler:](wkwebextensionwindow/setwindowstate%28__for_completionhandler_%29.md): Called to set the state of the window.
- [tabsForWebExtensionContext:](wkwebextensionwindow/tabs%28for_%29.md): Called when the tabs are needed for the window.
- [windowStateForWebExtensionContext:](wkwebextensionwindow/windowstate%28for_%29.md): Called when the state of the window is needed.
- [windowTypeForWebExtensionContext:](wkwebextensionwindow/windowtype%28for_%29.md): Called when the type of the window is needed.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Web extensions

- [WKWebExtension](wkwebextension.md): An object that encapsulates a web extension’s resources that the manifest file defines.
- [WKWebExtensionTab](wkwebextensiontab.md): A protocol with methods that represent a tab to web extensions.
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
