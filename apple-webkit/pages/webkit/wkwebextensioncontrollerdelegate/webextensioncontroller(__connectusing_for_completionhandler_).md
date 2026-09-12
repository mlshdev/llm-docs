> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontrollerdelegate/webextensioncontroller(_:connectusing:for:completionhandler:)](https://developer.apple.com/documentation/webkit/wkwebextensioncontrollerdelegate/webextensioncontroller(_:connectusing:for:completionhandler:))

# webExtensionController(\_:connectUsing:for:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called when an extension context wants to establish a persistent connection to an application.

## Declaration

```swift
optional func webExtensionController(_ controller: WKWebExtensionController, connectUsing port: WKWebExtension.MessagePort, for extensionContext: WKWebExtensionContext, completionHandler: @escaping ((any Error)?) -> Void)
```

```swift
optional func webExtensionController(_ controller: WKWebExtensionController, connectUsing port: WKWebExtension.MessagePort, for extensionContext: WKWebExtensionContext) async throws
```

## Parameters

- `controller`: The web extension controller that is managing the extension.
- `port`: A port object for handling the message exchange.
- `extensionContext`: The context in which the web extension is running.
- `completionHandler`: A block to be called when the connection is ready to use, taking an optional error. If the connection is successfully established, the error should be \\c nil.

<a id="discussion"></a>

## Discussion

This method should be implemented by the app to handle establishing connections to applications.

The provided [WKWebExtension.MessagePort](../wkwebextension/messageport.md) object can be used to handle message sending, receiving, and disconnection.

You should retain the port object for as long as the connection remains active. Releasing the port will disconnect it.

If not implemented, the default behavior is to pass the messages to the app extension handler within the extension’s bundle, if the extension was loaded from an app extension bundle; otherwise, no action is performed if not implemented.

# webExtensionController:connectUsingMessagePort:forExtensionContext:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called when an extension context wants to establish a persistent connection to an application.

## Declaration

```objectivec
- (void) webExtensionController:(WKWebExtensionController *) controller connectUsingMessagePort:(WKWebExtensionMessagePort *) port forExtensionContext:(WKWebExtensionContext *) extensionContext completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `controller`: The web extension controller that is managing the extension.
- `port`: A port object for handling the message exchange.
- `extensionContext`: The context in which the web extension is running.
- `completionHandler`: A block to be called when the connection is ready to use, taking an optional error. If the connection is successfully established, the error should be \\c nil.

<a id="discussion"></a>

## Discussion

This method should be implemented by the app to handle establishing connections to applications.

The provided [WKWebExtensionMessagePort](../wkwebextension/messageport.md) object can be used to handle message sending, receiving, and disconnection.

You should retain the port object for as long as the connection remains active. Releasing the port will disconnect it.

If not implemented, the default behavior is to pass the messages to the app extension handler within the extension’s bundle, if the extension was loaded from an app extension bundle; otherwise, no action is performed if not implemented.
