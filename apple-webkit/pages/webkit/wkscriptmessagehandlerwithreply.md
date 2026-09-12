> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkscriptmessagehandlerwithreply](https://developer.apple.com/documentation/webkit/wkscriptmessagehandlerwithreply)

# WKScriptMessageHandlerWithReply (Swift)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

An interface for responding to messages from JavaScript code running in a webpage.

## Declaration

```swift
@MainActor protocol WKScriptMessageHandlerWithReply : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Adopt the [WKScriptMessageHandlerWithReply](wkscriptmessagehandlerwithreply.md) protocol when your app needs to receive JavaScript messages from a web view and provide an appropriate response. When JavaScript code sends a message that specifically targets your message handler, WebKit calls your handler’s [userContentController(\_:didReceive:replyHandler:)](wkscriptmessagehandlerwithreply/usercontentcontroller%28__didreceive_replyhandler_%29.md) method. Use that method to process the message and provide your response.

To call your message handler from JavaScript, send a message to `window.webkit.messageHandlers.<messageHandlerName>.postMessage(<messageBody>)` in your code. You specify the name of your message handler when you add it to a [WKUserContentController](wkusercontentcontroller.md) object.

> **Note**

>  If you don’t need to provide a response back to JavaScript, implement your message handler using the [WKScriptMessageHandler](wkscriptmessagehandler.md) protocol instead.

## Topics

### Receiving Messages

- [userContentController(\_:didReceive:replyHandler:)](wkscriptmessagehandlerwithreply/usercontentcontroller%28__didreceive_replyhandler_%29.md): Tells the handler that a webpage sent a script message that included a reply.
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
- [WKScriptMessageHandler](wkscriptmessagehandler.md): An interface for receiving messages from JavaScript code running in a webpage.

# WKScriptMessageHandlerWithReply (Objective-C)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

An interface for responding to messages from JavaScript code running in a webpage.

## Declaration

```objectivec
@protocol WKScriptMessageHandlerWithReply <NSObject>
```

<a id="overview"></a>

## Overview

Adopt the [WKScriptMessageHandlerWithReply](wkscriptmessagehandlerwithreply.md) protocol when your app needs to receive JavaScript messages from a web view and provide an appropriate response. When JavaScript code sends a message that specifically targets your message handler, WebKit calls your handler’s [userContentController:didReceiveScriptMessage:replyHandler:](wkscriptmessagehandlerwithreply/usercontentcontroller%28__didreceive_replyhandler_%29.md) method. Use that method to process the message and provide your response.

To call your message handler from JavaScript, send a message to `window.webkit.messageHandlers.<messageHandlerName>.postMessage(<messageBody>)` in your code. You specify the name of your message handler when you add it to a [WKUserContentController](wkusercontentcontroller.md) object.

> **Note**

>  If you don’t need to provide a response back to JavaScript, implement your message handler using the [WKScriptMessageHandler](wkscriptmessagehandler.md) protocol instead.

## Topics

### Receiving Messages

- [userContentController:didReceiveScriptMessage:replyHandler:](wkscriptmessagehandlerwithreply/usercontentcontroller%28__didreceive_replyhandler_%29.md): Tells the handler that a webpage sent a script message that included a reply.
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
- [WKScriptMessageHandler](wkscriptmessagehandler.md): An interface for receiving messages from JavaScript code running in a webpage.
