> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontrollerdelegate/webextensioncontroller(_:presentactionpopup:for:completionhandler:)](https://developer.apple.com/documentation/webkit/wkwebextensioncontrollerdelegate/webextensioncontroller(_:presentactionpopup:for:completionhandler:))

# webExtensionController(\_:presentActionPopup:for:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called when a popup is requested to be displayed for a specific action.

## Declaration

```swift
optional func webExtensionController(_ controller: WKWebExtensionController, presentActionPopup action: WKWebExtension.Action, for context: WKWebExtensionContext, completionHandler: @escaping ((any Error)?) -> Void)
```

```swift
optional func webExtensionController(_ controller: WKWebExtensionController, presentActionPopup action: WKWebExtension.Action, for context: WKWebExtensionContext) async throws
```

## Parameters

- `controller`: The web extension controller initiating the request.
- `action`: The action for which the popup is requested.
- `context`: The context within which the web extension is running.
- `completionHandler`: A block to be called once the popup display operation is completed.

<a id="discussion"></a>

## Discussion

This method is called in response to the extension’s scripts or when invoking [performAction(for:)](../wkwebextensioncontext/performaction%28for_%29.md) if the action has a popup.

The associated tab, if applicable, can be located through the [associatedTab](../wkwebextension/action/associatedtab.md) property of the `action` parameter. This delegate method is called when the web view for the popup is fully loaded and ready to display. Implementing this method is needed if the app intends to support programmatically showing the popup by the extension, although it is recommended for handling both programmatic and user-initiated cases.

# webExtensionController:presentPopupForAction:forExtensionContext:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called when a popup is requested to be displayed for a specific action.

## Declaration

```objectivec
- (void) webExtensionController:(WKWebExtensionController *) controller presentPopupForAction:(WKWebExtensionAction *) action forExtensionContext:(WKWebExtensionContext *) context completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `controller`: The web extension controller initiating the request.
- `action`: The action for which the popup is requested.
- `context`: The context within which the web extension is running.
- `completionHandler`: A block to be called once the popup display operation is completed.

<a id="discussion"></a>

## Discussion

This method is called in response to the extension’s scripts or when invoking [performActionForTab:](../wkwebextensioncontext/performaction%28for_%29.md) if the action has a popup.

The associated tab, if applicable, can be located through the [associatedTab](../wkwebextension/action/associatedtab.md) property of the `action` parameter. This delegate method is called when the web view for the popup is fully loaded and ready to display. Implementing this method is needed if the app intends to support programmatically showing the popup by the extension, although it is recommended for handling both programmatic and user-initiated cases.
