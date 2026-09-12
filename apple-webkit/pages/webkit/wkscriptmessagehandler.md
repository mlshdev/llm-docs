> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkscriptmessagehandler](https://developer.apple.com/documentation/webkit/wkscriptmessagehandler)

# WKScriptMessageHandler (Swift)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

An interface for receiving messages from JavaScript code running in a webpage.

## Declaration

```swift
@MainActor protocol WKScriptMessageHandler : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Adopt the [WKScriptMessageHandler](wkscriptmessagehandler.md) protocol when your app needs a way to respond to JavaScript messages in the web view. When JavaScript code sends a message that specifically targets your message handler, WebKit calls your handler’s [userContentController(\_:didReceive:)](wkscriptmessagehandler/usercontentcontroller%28__didreceive_%29.md) method. Use that method to implement your response. For example, you might update other parts of your app in response to web content changes.

To call your message handler from JavaScript, call the function `window.webkit.messageHandlers.<messageHandlerName>.postMessage(<messageBody>)` in your code. You specify the value of `<messageHandlerName>` when you install your message handler in a [WKUserContentController](wkusercontentcontroller.md) object.

> **Note**

>  If you want to provide a response back to JavaScript, implement your message handler using the [WKScriptMessageHandlerWithReply](wkscriptmessagehandlerwithreply.md) protocol instead.

## Topics

### Receiving Messages

- [userContentController(\_:didReceive:)](wkscriptmessagehandler/usercontentcontroller%28__didreceive_%29.md): Tells the handler that a webpage sent a script message.
- [WKScriptMessage](wkscriptmessage.md): An object that encapsulates a message sent by JavaScript code from a webpage.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Adding and Removing Message Handlers

- [add(\_:name:)](wkusercontentcontroller/add%28__name_%29.md): Installs a message handler that you can call from your JavaScript code.
- [add(\_:contentWorld:name:)](wkusercontentcontroller/add%28__contentworld_name_%29.md): Installs a message handler that you can call from the specified content world in your JavaScript code.
- [addScriptMessageHandler(\_:contentWorld:name:)](wkusercontentcontroller/addscriptmessagehandler%28__contentworld_name_%29.md): Installs a message handler that returns a reply to your JavaScript code.
- [removeScriptMessageHandler(forName:)](wkusercontentcontroller/removescriptmessagehandler%28forname_%29.md): Uninstalls the custom message handler with the specified name from your JavaScript code.
- [removeScriptMessageHandler(forName:contentWorld:)](wkusercontentcontroller/removescriptmessagehandler%28forname_contentworld_%29.md): Uninstalls a custom message handler from the specified content world in your JavaScript code.
- [removeAllScriptMessageHandlers(from:)](wkusercontentcontroller/removeallscriptmessagehandlers%28from_%29.md): Uninstalls all custom message handlers from the specified content world in your JavaScript code.
- [removeAllScriptMessageHandlers()](wkusercontentcontroller/removeallscriptmessagehandlers%28%29.md): Uninstalls all custom message handlers associated with the user content controller.
- [WKScriptMessageHandlerWithReply](wkscriptmessagehandlerwithreply.md): An interface for responding to messages from JavaScript code running in a webpage.

# WKScriptMessageHandler (Objective-C)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

An interface for receiving messages from JavaScript code running in a webpage.

## Declaration

```objectivec
@protocol WKScriptMessageHandler <NSObject>
```

<a id="overview"></a>

## Overview

Adopt the [WKScriptMessageHandler](wkscriptmessagehandler.md) protocol when your app needs a way to respond to JavaScript messages in the web view. When JavaScript code sends a message that specifically targets your message handler, WebKit calls your handler’s [userContentController:didReceiveScriptMessage:](wkscriptmessagehandler/usercontentcontroller%28__didreceive_%29.md) method. Use that method to implement your response. For example, you might update other parts of your app in response to web content changes.

To call your message handler from JavaScript, call the function `window.webkit.messageHandlers.<messageHandlerName>.postMessage(<messageBody>)` in your code. You specify the value of `<messageHandlerName>` when you install your message handler in a [WKUserContentController](wkusercontentcontroller.md) object.

> **Note**

>  If you want to provide a response back to JavaScript, implement your message handler using the [WKScriptMessageHandlerWithReply](wkscriptmessagehandlerwithreply.md) protocol instead.

## Topics

### Receiving Messages

- [userContentController:didReceiveScriptMessage:](wkscriptmessagehandler/usercontentcontroller%28__didreceive_%29.md): Tells the handler that a webpage sent a script message.
- [WKScriptMessage](wkscriptmessage.md): An object that encapsulates a message sent by JavaScript code from a webpage.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Adding and Removing Message Handlers

- [addScriptMessageHandler:name:](wkusercontentcontroller/add%28__name_%29.md): Installs a message handler that you can call from your JavaScript code.
- [addScriptMessageHandler:contentWorld:name:](wkusercontentcontroller/add%28__contentworld_name_%29.md): Installs a message handler that you can call from the specified content world in your JavaScript code.
- [addScriptMessageHandlerWithReply:contentWorld:name:](wkusercontentcontroller/addscriptmessagehandler%28__contentworld_name_%29.md): Installs a message handler that returns a reply to your JavaScript code.
- [removeScriptMessageHandlerForName:](wkusercontentcontroller/removescriptmessagehandler%28forname_%29.md): Uninstalls the custom message handler with the specified name from your JavaScript code.
- [removeScriptMessageHandlerForName:contentWorld:](wkusercontentcontroller/removescriptmessagehandler%28forname_contentworld_%29.md): Uninstalls a custom message handler from the specified content world in your JavaScript code.
- [removeAllScriptMessageHandlersFromContentWorld:](wkusercontentcontroller/removeallscriptmessagehandlers%28from_%29.md): Uninstalls all custom message handlers from the specified content world in your JavaScript code.
- [removeAllScriptMessageHandlers](wkusercontentcontroller/removeallscriptmessagehandlers%28%29.md): Uninstalls all custom message handlers associated with the user content controller.
- [WKScriptMessageHandlerWithReply](wkscriptmessagehandlerwithreply.md): An interface for responding to messages from JavaScript code running in a webpage.
