> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensiontab](https://developer.apple.com/documentation/webkit/wkwebextensiontab)

# WKWebExtensionTab (Swift)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A protocol with methods that represent a tab to web extensions.

## Declaration

```swift
@MainActor protocol WKWebExtensionTab : NSObjectProtocol
```

## Topics

### Instance Methods

- [activate(for:completionHandler:)](wkwebextensiontab/activate%28for_completionhandler_%29.md): Called to activate the tab, making it frontmost.
- [close(for:completionHandler:)](wkwebextensiontab/close%28for_completionhandler_%29.md): Called to close the tab.
- [detectWebpageLocale(for:completionHandler:)](wkwebextensiontab/detectwebpagelocale%28for_completionhandler_%29.md): Called to detect the locale of the webpage currently loaded in the tab.
- [duplicate(using:for:completionHandler:)](wkwebextensiontab/duplicate%28using_for_completionhandler_%29.md): Called to duplicate the tab.
- [goBack(for:completionHandler:)](wkwebextensiontab/goback%28for_completionhandler_%29.md): Called to navigate the tab to the previous page in its history.
- [goForward(for:completionHandler:)](wkwebextensiontab/goforward%28for_completionhandler_%29.md): Called to navigate the tab to the next page in its history.
- [indexInWindow(for:)](wkwebextensiontab/indexinwindow%28for_%29.md): Called when the index of the tab in the window is needed.
- [isLoadingComplete(for:)](wkwebextensiontab/isloadingcomplete%28for_%29.md): Called to check if the tab has finished loading.
- [isMuted(for:)](wkwebextensiontab/ismuted%28for_%29.md): Called to check if the tab is currently muted.
- [isPinned(for:)](wkwebextensiontab/ispinned%28for_%29.md): Called when the pinned state of the tab is needed.
- [isPlayingAudio(for:)](wkwebextensiontab/isplayingaudio%28for_%29.md): Called to check if the tab is currently playing audio.
- [isReaderModeActive(for:)](wkwebextensiontab/isreadermodeactive%28for_%29.md): Called to check if the tab is currently showing reader mode.
- [isReaderModeAvailable(for:)](wkwebextensiontab/isreadermodeavailable%28for_%29.md): Called to check if reader mode is available for the tab.
- [isSelected(for:)](wkwebextensiontab/isselected%28for_%29.md): Called when the selected state of the tab is needed.
- [loadURL(\_:for:completionHandler:)](wkwebextensiontab/loadurl%28__for_completionhandler_%29.md): Called to load a URL in the tab.
- [parentTab(for:)](wkwebextensiontab/parenttab%28for_%29.md): Called when the parent tab for the tab is needed.
- [pendingURL(for:)](wkwebextensiontab/pendingurl%28for_%29.md): Called when the pending URL of the tab is needed.
- [reload(fromOrigin:for:completionHandler:)](wkwebextensiontab/reload%28fromorigin_for_completionhandler_%29.md): Called to reload the current page in the tab.
- [setMuted(\_:for:completionHandler:)](wkwebextensiontab/setmuted%28__for_completionhandler_%29.md): Called to set the mute state of the tab.
- [setParentTab(\_:for:completionHandler:)](wkwebextensiontab/setparenttab%28__for_completionhandler_%29.md): Called to set or clear the parent tab for the tab.
- [setPinned(\_:for:completionHandler:)](wkwebextensiontab/setpinned%28__for_completionhandler_%29.md): Called to set the pinned state of the tab.
- [setReaderModeActive(\_:for:completionHandler:)](wkwebextensiontab/setreadermodeactive%28__for_completionhandler_%29.md): Called to set the reader mode for the tab.
- [setSelected(\_:for:completionHandler:)](wkwebextensiontab/setselected%28__for_completionhandler_%29.md): Called to set the selected state of the tab.
- [setZoomFactor(\_:for:completionHandler:)](wkwebextensiontab/setzoomfactor%28__for_completionhandler_%29.md): Called to set the zoom factor of the tab.
- [shouldBypassPermissions(for:)](wkwebextensiontab/shouldbypasspermissions%28for_%29.md): Called to determine if the tab should bypass host permission checks.
- [shouldGrantPermissionsOnUserGesture(for:)](wkwebextensiontab/shouldgrantpermissionsonusergesture%28for_%29.md): Called to determine if permissions should be granted for the tab on user gesture.
- [size(for:)](wkwebextensiontab/size%28for_%29.md): Called when the size of the tab is needed.
- [takeSnapshot(using:for:completionHandler:)](wkwebextensiontab/takesnapshot%28using_for_completionhandler_%29.md): Called to capture a snapshot of the current webpage as an image.
- [title(for:)](wkwebextensiontab/title%28for_%29.md): Called when the title of the tab is needed.
- [url(for:)](wkwebextensiontab/url%28for_%29.md): Called when the URL of the tab is needed.
- [webView(for:)](wkwebextensiontab/webview%28for_%29.md): Called when the web view for the tab is needed.
- [window(for:)](wkwebextensiontab/window%28for_%29.md): Called when the window containing the tab is needed.
- [zoomFactor(for:)](wkwebextensiontab/zoomfactor%28for_%29.md): Called when the zoom factor of the tab is needed.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Web extensions

- [WKWebExtension](wkwebextension.md): An object that encapsulates a web extension’s resources that the manifest file defines.
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

# WKWebExtensionTab (Objective-C)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A protocol with methods that represent a tab to web extensions.

## Declaration

```objectivec
@protocol WKWebExtensionTab <NSObject>
```

## Topics

### Instance Methods

- [activateForWebExtensionContext:completionHandler:](wkwebextensiontab/activate%28for_completionhandler_%29.md): Called to activate the tab, making it frontmost.
- [closeForWebExtensionContext:completionHandler:](wkwebextensiontab/close%28for_completionhandler_%29.md): Called to close the tab.
- [detectWebpageLocaleForWebExtensionContext:completionHandler:](wkwebextensiontab/detectwebpagelocale%28for_completionhandler_%29.md): Called to detect the locale of the webpage currently loaded in the tab.
- [duplicateUsingConfiguration:forWebExtensionContext:completionHandler:](wkwebextensiontab/duplicate%28using_for_completionhandler_%29.md): Called to duplicate the tab.
- [goBackForWebExtensionContext:completionHandler:](wkwebextensiontab/goback%28for_completionhandler_%29.md): Called to navigate the tab to the previous page in its history.
- [goForwardForWebExtensionContext:completionHandler:](wkwebextensiontab/goforward%28for_completionhandler_%29.md): Called to navigate the tab to the next page in its history.
- [indexInWindowForWebExtensionContext:](wkwebextensiontab/indexinwindow%28for_%29.md): Called when the index of the tab in the window is needed.
- [isLoadingCompleteForWebExtensionContext:](wkwebextensiontab/isloadingcomplete%28for_%29.md): Called to check if the tab has finished loading.
- [isMutedForWebExtensionContext:](wkwebextensiontab/ismuted%28for_%29.md): Called to check if the tab is currently muted.
- [isPinnedForWebExtensionContext:](wkwebextensiontab/ispinned%28for_%29.md): Called when the pinned state of the tab is needed.
- [isPlayingAudioForWebExtensionContext:](wkwebextensiontab/isplayingaudio%28for_%29.md): Called to check if the tab is currently playing audio.
- [isReaderModeActiveForWebExtensionContext:](wkwebextensiontab/isreadermodeactive%28for_%29.md): Called to check if the tab is currently showing reader mode.
- [isReaderModeAvailableForWebExtensionContext:](wkwebextensiontab/isreadermodeavailable%28for_%29.md): Called to check if reader mode is available for the tab.
- [isSelectedForWebExtensionContext:](wkwebextensiontab/isselected%28for_%29.md): Called when the selected state of the tab is needed.
- [loadURL:forWebExtensionContext:completionHandler:](wkwebextensiontab/loadurl%28__for_completionhandler_%29.md): Called to load a URL in the tab.
- [parentTabForWebExtensionContext:](wkwebextensiontab/parenttab%28for_%29.md): Called when the parent tab for the tab is needed.
- [pendingURLForWebExtensionContext:](wkwebextensiontab/pendingurl%28for_%29.md): Called when the pending URL of the tab is needed.
- [reloadFromOrigin:forWebExtensionContext:completionHandler:](wkwebextensiontab/reload%28fromorigin_for_completionhandler_%29.md): Called to reload the current page in the tab.
- [setMuted:forWebExtensionContext:completionHandler:](wkwebextensiontab/setmuted%28__for_completionhandler_%29.md): Called to set the mute state of the tab.
- [setParentTab:forWebExtensionContext:completionHandler:](wkwebextensiontab/setparenttab%28__for_completionhandler_%29.md): Called to set or clear the parent tab for the tab.
- [setPinned:forWebExtensionContext:completionHandler:](wkwebextensiontab/setpinned%28__for_completionhandler_%29.md): Called to set the pinned state of the tab.
- [setReaderModeActive:forWebExtensionContext:completionHandler:](wkwebextensiontab/setreadermodeactive%28__for_completionhandler_%29.md): Called to set the reader mode for the tab.
- [setSelected:forWebExtensionContext:completionHandler:](wkwebextensiontab/setselected%28__for_completionhandler_%29.md): Called to set the selected state of the tab.
- [setZoomFactor:forWebExtensionContext:completionHandler:](wkwebextensiontab/setzoomfactor%28__for_completionhandler_%29.md): Called to set the zoom factor of the tab.
- [shouldBypassPermissionsForWebExtensionContext:](wkwebextensiontab/shouldbypasspermissions%28for_%29.md): Called to determine if the tab should bypass host permission checks.
- [shouldGrantPermissionsOnUserGestureForWebExtensionContext:](wkwebextensiontab/shouldgrantpermissionsonusergesture%28for_%29.md): Called to determine if permissions should be granted for the tab on user gesture.
- [sizeForWebExtensionContext:](wkwebextensiontab/size%28for_%29.md): Called when the size of the tab is needed.
- [takeSnapshotUsingConfiguration:forWebExtensionContext:completionHandler:](wkwebextensiontab/takesnapshot%28using_for_completionhandler_%29.md): Called to capture a snapshot of the current webpage as an image.
- [titleForWebExtensionContext:](wkwebextensiontab/title%28for_%29.md): Called when the title of the tab is needed.
- [urlForWebExtensionContext:](wkwebextensiontab/url%28for_%29.md): Called when the URL of the tab is needed.
- [webViewForWebExtensionContext:](wkwebextensiontab/webview%28for_%29.md): Called when the web view for the tab is needed.
- [windowForWebExtensionContext:](wkwebextensiontab/window%28for_%29.md): Called when the window containing the tab is needed.
- [zoomFactorForWebExtensionContext:](wkwebextensiontab/zoomfactor%28for_%29.md): Called when the zoom factor of the tab is needed.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Web extensions

- [WKWebExtension](wkwebextension.md): An object that encapsulates a web extension’s resources that the manifest file defines.
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
