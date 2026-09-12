> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webuidelegate](https://developer.apple.com/documentation/webkit/webuidelegate)

# WebUIDelegate (Swift)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Web view user interface delegates implement this protocol to control the opening of new windows, augment the behavior of default menu items displayed when the user clicks elements, and perform other user interface–related tasks. These methods can be invoked as a result of handling JavaScript or other plug-in content. Delegates that display more than one web view per window, for example, need to implement some of these methods to handle that case. The default implementation assumes one window per web view, so non-conventional user interfaces might implement a user interface delegate.

## Declaration

```swift
protocol WebUIDelegate : NSObjectProtocol
```

## Topics

### Creating and Closing Windows

- [webView(\_:createWebViewModalDialogWith:)](webuidelegate/webview%28__createwebviewmodaldialogwith_%29.md): Deprecated. Creates a modal window containing a web view that loads the specified request.
- [webViewRunModal(\_:)](webuidelegate/webviewrunmodal%28__%29.md): Deprecated. Displays a web view in a modal window.
- [webView(\_:createWebViewWith:)](webuidelegate/webview%28__createwebviewwith_%29.md): Deprecated. Creates a window containing a web view to load the specified request.
- [webViewClose(\_:)](webuidelegate/webviewclose%28__%29.md): Deprecated. Closes a web view in a window.

### Moving and Resizing Windows

- [webViewIsResizable(\_:)](webuidelegate/webviewisresizable%28__%29.md): Deprecated. Returns a Boolean value indicating whether a web view’s window can be resized.
- [webView(\_:setResizable:)](webuidelegate/webview%28__setresizable_%29.md): Deprecated. Sets whether a web view’s window can be resized.
- [webView(\_:setFrame:)](webuidelegate/webview%28__setframe_%29.md): Deprecated. Sets the frame rectangle of a web view’s window to the specified frame size.
- [webViewFrame(\_:)](webuidelegate/webviewframe%28__%29.md): Deprecated. Returns the frame rectangle of a web view’s window.

### Making Windows Key and Main

- [webViewFocus(\_:)](webuidelegate/webviewfocus%28__%29.md): Deprecated. Brings a web view’s window to the front and makes it the active window.
- [webViewUnfocus(\_:)](webuidelegate/webviewunfocus%28__%29.md): Deprecated. Relinquishes focus on a web view’s window.

### Ordering Windows

- [webViewShow(\_:)](webuidelegate/webviewshow%28__%29.md): Deprecated. Displays a web view’s window and moves it to the front.

### Working with the Responder Chain

- [webViewFirstResponder(\_:)](webuidelegate/webviewfirstresponder%28__%29.md): Deprecated. Returns the first responder of the web view’s window.
- [webView(\_:makeFirstResponder:)](webuidelegate/webview%28__makefirstresponder_%29.md): Deprecated. Sets the first responder of a web view’s window to the specified view.

### Handling Mouse Events

- [webView(\_:mouseDidMoveOverElement:modifierFlags:)](webuidelegate/webview%28__mousedidmoveoverelement_modifierflags_%29.md): Deprecated. Updates information about the element the user is mousing over.
- [webView(\_:contextMenuItemsForElement:defaultMenuItems:)](webuidelegate/webview%28__contextmenuitemsforelement_defaultmenuitems_%29.md): Deprecated. Returns menu items to display in an element’s contextual menu.

### Opening Panels

- [webView(\_:runJavaScriptAlertPanelWithMessage:initiatedBy:)](webuidelegate/webview%28__runjavascriptalertpanelwithmessage_initiatedby_%29.md): Deprecated. Displays a JavaScript alert panel containing the specified message.
- [webView(\_:runJavaScriptConfirmPanelWithMessage:initiatedBy:)](webuidelegate/webview%28__runjavascriptconfirmpanelwithmessage_initiatedby_%29.md): Deprecated. Displays a JavaScript confirmation panel with the specified message.
- [webView(\_:runJavaScriptTextInputPanelWithPrompt:defaultText:initiatedBy:)](webuidelegate/webview%28__runjavascripttextinputpanelwithprompt_defaulttext_initiatedby_%29.md): Deprecated. Displays a JavaScript text input panel and returns the entered text.
- [webView(\_:runOpenPanelForFileButtonWith:)](webuidelegate/webview%28__runopenpanelforfilebuttonwith_%29.md): Deprecated. Displays an open panel for a file input control.
- [webView(\_:runOpenPanelForFileButtonWith:allowMultipleFiles:)](webuidelegate/webview%28__runopenpanelforfilebuttonwith_allowmultiplefiles_%29.md): Deprecated. Displays an open panel for a file input control.
- [webView(\_:runBeforeUnloadConfirmPanelWithMessage:initiatedBy:)](webuidelegate/webview%28__runbeforeunloadconfirmpanelwithmessage_initiatedby_%29.md): Deprecated. Displays a confirmation panel containing the specified message before a window closes.

### Displaying Status Messages

- [webView(\_:setStatusText:)](webuidelegate/webview%28__setstatustext_%29.md): Deprecated. Sets the status message displayed by a web view’s window, if any, to the specified text.
- [webViewStatusText(\_:)](webuidelegate/webviewstatustext%28__%29.md): Deprecated. Returns the current status message from a web view’s window.

### Managing Toolbars and the Status Bar

- [webViewAreToolbarsVisible(\_:)](webuidelegate/webviewaretoolbarsvisible%28__%29.md): Deprecated. Returns a Boolean value indicating whether any toolbars are visible in a web view’s window.
- [webView(\_:setToolbarsVisible:)](webuidelegate/webview%28__settoolbarsvisible_%29.md): Deprecated. Sets whether a web view’s toolbars should be visible.
- [webViewIsStatusBarVisible(\_:)](webuidelegate/webviewisstatusbarvisible%28__%29.md): Deprecated. Returns a Boolean value indicating whether the status bar in a web view’s window is visible.
- [webView(\_:setStatusBarVisible:)](webuidelegate/webview%28__setstatusbarvisible_%29.md): Deprecated. Sets the visibility of the status bar in a web view’s window.

### Controlling Drag Behavior

- [webView(\_:dragDestinationActionMaskFor:)](webuidelegate/webview%28__dragdestinationactionmaskfor_%29.md): Deprecated. Returns a mask indicating which drag operations are allowed by the sender.
- [webView(\_:dragSourceActionMaskFor:)](webuidelegate/webview%28__dragsourceactionmaskfor_%29.md): Deprecated. Returns a mask indicating which drag-source actions are allowed for a drag that begins at the specified location.
- [webView(\_:willPerform:for:)](webuidelegate/webview%28__willperform_for_%29.md): Deprecated. Tells the receiver that the sending web view will perform the specified drag-destination action.
- [webView(\_:willPerform:from:with:)](webuidelegate/webview%28__willperform_from_with_%29.md): Deprecated. Tells the receiver that the sending web view will perform the specified drag-source action.

### Controlling Other Behaviors

- [webView(\_:shouldPerformAction:fromSender:)](webuidelegate/webview%28__shouldperformaction_fromsender_%29.md): Deprecated. Returns a Boolean value that indicates whether the action sent by the specified object should be performed.
- [webView(\_:validate:defaultValidation:)](webuidelegate/webview%28__validate_defaultvalidation_%29.md): Deprecated. Returns a Boolean value that indicates whether the specified user interface item is valid.

### Printing

- [webView(\_:print:)](webuidelegate/webview%28__print_%29.md): Deprecated. Prints the contents of a web frame view.
- [webViewHeaderHeight(\_:)](webuidelegate/webviewheaderheight%28__%29.md): Deprecated. Returns the height of the web view’s printed page header.
- [webViewFooterHeight(\_:)](webuidelegate/webviewfooterheight%28__%29.md): Deprecated. Returns the height of the web view’s printed page footer.
- [webView(\_:drawHeaderIn:)](webuidelegate/webview%28__drawheaderin_%29.md): Deprecated. Draws the web view’s header in the specified rectangle.
- [webView(\_:drawFooterIn:)](webuidelegate/webview%28__drawfooterin_%29.md): Deprecated. Draws the web view’s footer in the specified rectangle.

### Constants

- [Menu Item Tags](menu-item-tags.md): Tags that define the types of default menu items passed to the [webView(\_:contextMenuItemsForElement:defaultMenuItems:)](webuidelegate/webview%28__contextmenuitemsforelement_defaultmenuitems_%29.md) method.
- [WebDragDestinationAction](webdragdestinationaction.md): Deprecated. Actions that the destination object of a drag operation can perform.
- [WebDragSourceAction](webdragsourceaction.md): Deprecated. Actions that the source object of a drag operation can perform.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Setting Up a Web View (Legacy)

- [WebView](webview-swift.class.md): Deprecated. `WebView` is the core view class in the WebKit framework that manages interactions between the `WebFrame` and `WebFrameView` classes. To embed web content in your application, you just create a `WebView` object, attach it to a window, and send a [load(\_:)](webframe/load%28__%29-47p2s.md) message to its main frame.
- [WebPreferences](webpreferences.md): Deprecated. WebPreferences encapsulates the preferences you can change per WebView object. These preferences include font, text encoding, and image settings. Normally a WebView object uses the standard preferences returned by the [standard()](webpreferences/standard%28%29.md) class method. However, you can modify the preferences for individual WebView instances too. Use the [preferencesIdentifier](webview-swift.class/preferencesidentifier.md) WebView method to change a WebView object’s preferences, or to share preferences between WebView objects. Use the [autosaves](webpreferences/autosaves.md) method to specify if the preferences object should be automatically saved to the user defaults database.
- [WebEditingDelegate](webeditingdelegate.md): Deprecated.

# WebUIDelegate (Objective-C)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Web view user interface delegates implement this protocol to control the opening of new windows, augment the behavior of default menu items displayed when the user clicks elements, and perform other user interface–related tasks. These methods can be invoked as a result of handling JavaScript or other plug-in content. Delegates that display more than one web view per window, for example, need to implement some of these methods to handle that case. The default implementation assumes one window per web view, so non-conventional user interfaces might implement a user interface delegate.

## Declaration

```objectivec
@protocol WebUIDelegate <NSObject>
```

## Topics

### Creating and Closing Windows

- [webView:createWebViewModalDialogWithRequest:](webuidelegate/webview%28__createwebviewmodaldialogwith_%29.md): Deprecated. Creates a modal window containing a web view that loads the specified request.
- [webViewRunModal:](webuidelegate/webviewrunmodal%28__%29.md): Deprecated. Displays a web view in a modal window.
- [webView:createWebViewWithRequest:](webuidelegate/webview%28__createwebviewwith_%29.md): Deprecated. Creates a window containing a web view to load the specified request.
- [webViewClose:](webuidelegate/webviewclose%28__%29.md): Deprecated. Closes a web view in a window.

### Moving and Resizing Windows

- [webViewIsResizable:](webuidelegate/webviewisresizable%28__%29.md): Deprecated. Returns a Boolean value indicating whether a web view’s window can be resized.
- [webView:setResizable:](webuidelegate/webview%28__setresizable_%29.md): Deprecated. Sets whether a web view’s window can be resized.
- [webView:setFrame:](webuidelegate/webview%28__setframe_%29.md): Deprecated. Sets the frame rectangle of a web view’s window to the specified frame size.
- [webViewFrame:](webuidelegate/webviewframe%28__%29.md): Deprecated. Returns the frame rectangle of a web view’s window.

### Moving and Resizing Content Views

- [webView:setContentRect:](webuidelegate/webview_setcontentrect_.md): Deprecated. Sets the window’s content view frame to the specified content rectangle.
- [webViewContentRect:](webuidelegate/webviewcontentrect_.md): Deprecated. Returns a web view window’s content rectangle.

### Making Windows Key and Main

- [webViewFocus:](webuidelegate/webviewfocus%28__%29.md): Deprecated. Brings a web view’s window to the front and makes it the active window.
- [webViewUnfocus:](webuidelegate/webviewunfocus%28__%29.md): Deprecated. Relinquishes focus on a web view’s window.

### Ordering Windows

- [webViewShow:](webuidelegate/webviewshow%28__%29.md): Deprecated. Displays a web view’s window and moves it to the front.

### Working with the Responder Chain

- [webViewFirstResponder:](webuidelegate/webviewfirstresponder%28__%29.md): Deprecated. Returns the first responder of the web view’s window.
- [webView:makeFirstResponder:](webuidelegate/webview%28__makefirstresponder_%29.md): Deprecated. Sets the first responder of a web view’s window to the specified view.

### Handling Mouse Events

- [webView:mouseDidMoveOverElement:modifierFlags:](webuidelegate/webview%28__mousedidmoveoverelement_modifierflags_%29.md): Deprecated. Updates information about the element the user is mousing over.
- [webView:contextMenuItemsForElement:defaultMenuItems:](webuidelegate/webview%28__contextmenuitemsforelement_defaultmenuitems_%29.md): Deprecated. Returns menu items to display in an element’s contextual menu.

### Opening Panels

- [webView:runJavaScriptAlertPanelWithMessage:](webuidelegate/webview_runjavascriptalertpanelwithmessage_.md): Deprecated. Displays a JavaScript alert panel.
- [webView:runJavaScriptAlertPanelWithMessage:initiatedByFrame:](webuidelegate/webview%28__runjavascriptalertpanelwithmessage_initiatedby_%29.md): Deprecated. Displays a JavaScript alert panel containing the specified message.
- [webView:runJavaScriptConfirmPanelWithMessage:](webuidelegate/webview_runjavascriptconfirmpanelwithmessage_.md): Deprecated. Displays a JavaScript confirm panel.
- [webView:runJavaScriptConfirmPanelWithMessage:initiatedByFrame:](webuidelegate/webview%28__runjavascriptconfirmpanelwithmessage_initiatedby_%29.md): Deprecated. Displays a JavaScript confirmation panel with the specified message.
- [webView:runJavaScriptTextInputPanelWithPrompt:defaultText:](webuidelegate/webview_runjavascripttextinputpanelwithprompt_defaulttext_.md): Deprecated. Displays a JavaScript text input panel and returns the entered text.
- [webView:runJavaScriptTextInputPanelWithPrompt:defaultText:initiatedByFrame:](webuidelegate/webview%28__runjavascripttextinputpanelwithprompt_defaulttext_initiatedby_%29.md): Deprecated. Displays a JavaScript text input panel and returns the entered text.
- [webView:runOpenPanelForFileButtonWithResultListener:](webuidelegate/webview%28__runopenpanelforfilebuttonwith_%29.md): Deprecated. Displays an open panel for a file input control.
- [webView:runOpenPanelForFileButtonWithResultListener:allowMultipleFiles:](webuidelegate/webview%28__runopenpanelforfilebuttonwith_allowmultiplefiles_%29.md): Deprecated. Displays an open panel for a file input control.
- [webView:runBeforeUnloadConfirmPanelWithMessage:initiatedByFrame:](webuidelegate/webview%28__runbeforeunloadconfirmpanelwithmessage_initiatedby_%29.md): Deprecated. Displays a confirmation panel containing the specified message before a window closes.

### Displaying Status Messages

- [webView:setStatusText:](webuidelegate/webview%28__setstatustext_%29.md): Deprecated. Sets the status message displayed by a web view’s window, if any, to the specified text.
- [webViewStatusText:](webuidelegate/webviewstatustext%28__%29.md): Deprecated. Returns the current status message from a web view’s window.

### Managing Toolbars and the Status Bar

- [webViewAreToolbarsVisible:](webuidelegate/webviewaretoolbarsvisible%28__%29.md): Deprecated. Returns a Boolean value indicating whether any toolbars are visible in a web view’s window.
- [webView:setToolbarsVisible:](webuidelegate/webview%28__settoolbarsvisible_%29.md): Deprecated. Sets whether a web view’s toolbars should be visible.
- [webViewIsStatusBarVisible:](webuidelegate/webviewisstatusbarvisible%28__%29.md): Deprecated. Returns a Boolean value indicating whether the status bar in a web view’s window is visible.
- [webView:setStatusBarVisible:](webuidelegate/webview%28__setstatusbarvisible_%29.md): Deprecated. Sets the visibility of the status bar in a web view’s window.

### Controlling Drag Behavior

- [webView:dragDestinationActionMaskForDraggingInfo:](webuidelegate/webview%28__dragdestinationactionmaskfor_%29.md): Deprecated. Returns a mask indicating which drag operations are allowed by the sender.
- [webView:dragSourceActionMaskForPoint:](webuidelegate/webview%28__dragsourceactionmaskfor_%29.md): Deprecated. Returns a mask indicating which drag-source actions are allowed for a drag that begins at the specified location.
- [webView:willPerformDragDestinationAction:forDraggingInfo:](webuidelegate/webview%28__willperform_for_%29.md): Deprecated. Tells the receiver that the sending web view will perform the specified drag-destination action.
- [webView:willPerformDragSourceAction:fromPoint:withPasteboard:](webuidelegate/webview%28__willperform_from_with_%29.md): Deprecated. Tells the receiver that the sending web view will perform the specified drag-source action.

### Controlling Other Behaviors

- [webView:shouldPerformAction:fromSender:](webuidelegate/webview%28__shouldperformaction_fromsender_%29.md): Deprecated. Returns a Boolean value that indicates whether the action sent by the specified object should be performed.
- [webView:validateUserInterfaceItem:defaultValidation:](webuidelegate/webview%28__validate_defaultvalidation_%29.md): Deprecated. Returns a Boolean value that indicates whether the specified user interface item is valid.

### Printing

- [webView:printFrameView:](webuidelegate/webview%28__print_%29.md): Deprecated. Prints the contents of a web frame view.
- [webViewHeaderHeight:](webuidelegate/webviewheaderheight%28__%29.md): Deprecated. Returns the height of the web view’s printed page header.
- [webViewFooterHeight:](webuidelegate/webviewfooterheight%28__%29.md): Deprecated. Returns the height of the web view’s printed page footer.
- [webView:drawHeaderInRect:](webuidelegate/webview%28__drawheaderin_%29.md): Deprecated. Draws the web view’s header in the specified rectangle.
- [webView:drawFooterInRect:](webuidelegate/webview%28__drawfooterin_%29.md): Deprecated. Draws the web view’s footer in the specified rectangle.

### Constants

- [Menu Item Tags](menu-item-tags.md): Tags that define the types of default menu items passed to the [webView:contextMenuItemsForElement:defaultMenuItems:](webuidelegate/webview%28__contextmenuitemsforelement_defaultmenuitems_%29.md) method.
- [WebDragDestinationAction](webdragdestinationaction.md): Deprecated. Actions that the destination object of a drag operation can perform.
- [WebDragSourceAction](webdragsourceaction.md): Deprecated. Actions that the source object of a drag operation can perform.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Setting Up a Web View (Legacy)

- [WebView](webview-swift.class.md): Deprecated. `WebView` is the core view class in the WebKit framework that manages interactions between the `WebFrame` and `WebFrameView` classes. To embed web content in your application, you just create a `WebView` object, attach it to a window, and send a [loadRequest:](webframe/load%28__%29-47p2s.md) message to its main frame.
- [WebPreferences](webpreferences.md): Deprecated. WebPreferences encapsulates the preferences you can change per WebView object. These preferences include font, text encoding, and image settings. Normally a WebView object uses the standard preferences returned by the [standardPreferences](webpreferences/standard%28%29.md) class method. However, you can modify the preferences for individual WebView instances too. Use the [preferencesIdentifier](webview-swift.class/preferencesidentifier.md) WebView method to change a WebView object’s preferences, or to share preferences between WebView objects. Use the [autosaves](webpreferences/autosaves.md) method to specify if the preferences object should be automatically saved to the user defaults database.
- [WebEditingDelegate](webeditingdelegate.md): Deprecated.
