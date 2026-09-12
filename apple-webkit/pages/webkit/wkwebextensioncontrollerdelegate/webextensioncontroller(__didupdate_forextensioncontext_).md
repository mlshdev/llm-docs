> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontrollerdelegate/webextensioncontroller(_:didupdate:forextensioncontext:)](https://developer.apple.com/documentation/webkit/wkwebextensioncontrollerdelegate/webextensioncontroller(_:didupdate:forextensioncontext:))

# webExtensionController(\_:didUpdate:forExtensionContext:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called when an action’s properties are updated.

## Declaration

```swift
optional func webExtensionController(_ controller: WKWebExtensionController, didUpdate action: WKWebExtension.Action, forExtensionContext context: WKWebExtensionContext)
```

## Parameters

- `controller`: The web extension controller initiating the request.
- `action`: The web extension action whose properties are updated.
- `context`: The context within which the web extension is running.

<a id="discussion"></a>

## Discussion

This method is called when an action’s properties are updated and should be reflected in the app’s user interface.

The app should ensure that any visible changes, such as icons and labels, are updated accordingly.

# webExtensionController:didUpdateAction:forExtensionContext: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called when an action’s properties are updated.

## Declaration

```objectivec
- (void) webExtensionController:(WKWebExtensionController *) controller didUpdateAction:(WKWebExtensionAction *) action forExtensionContext:(WKWebExtensionContext *) context;
```

## Parameters

- `controller`: The web extension controller initiating the request.
- `action`: The web extension action whose properties are updated.
- `context`: The context within which the web extension is running.

<a id="discussion"></a>

## Discussion

This method is called when an action’s properties are updated and should be reflected in the app’s user interface.

The app should ensure that any visible changes, such as icons and labels, are updated accordingly.
