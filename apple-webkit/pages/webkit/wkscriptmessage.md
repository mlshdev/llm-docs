> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkscriptmessage](https://developer.apple.com/documentation/webkit/wkscriptmessage)

# WKScriptMessage (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

An object that encapsulates a message sent by JavaScript code from a webpage.

## Declaration

```swift
@MainActor class WKScriptMessage
```

<a id="overview"></a>

## Overview

Use a [WKScriptMessage](wkscriptmessage.md) object to get details about a JavaScript message sent to a custom message handler in your app. You don’t create [WKScriptMessage](wkscriptmessage.md) objects directly. When JavaScript code targets one of your app’s message handlers, the [WKUserContentController](wkusercontentcontroller.md) object of the web view creates a [WKScriptMessage](wkscriptmessage.md) object and delivers it to the message handler’s delegate method. Use the object you’re provided to process the message and provide an appropriate response.

For more information about handling script messages, see the [WKScriptMessageHandler](wkscriptmessagehandler.md) and [WKScriptMessageHandlerWithReply](wkscriptmessagehandlerwithreply.md) protocols. For information about how to register message handlers, see the methods of [WKUserContentController](wkusercontentcontroller.md).

## Topics

### Getting the Message Contents

- [body](wkscriptmessage/body.md): The body of the message.

### Getting Message-Related Information

- [frameInfo](wkscriptmessage/frameinfo.md): The frame that sent the message.
- [webView](wkscriptmessage/webview.md): The web view that sent the message.
- [world](wkscriptmessage/world.md): The namespace in which the JavaScript code executes.

### Getting the Message Handler’s Name

- [name](wkscriptmessage/name.md): The name of the message handler to which the message is sent.

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

### Receiving Messages

- [userContentController(\_:didReceive:)](wkscriptmessagehandler/usercontentcontroller%28__didreceive_%29.md): Tells the handler that a webpage sent a script message.

# WKScriptMessage (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

An object that encapsulates a message sent by JavaScript code from a webpage.

## Declaration

```objectivec
@interface WKScriptMessage : NSObject
```

<a id="overview"></a>

## Overview

Use a [WKScriptMessage](wkscriptmessage.md) object to get details about a JavaScript message sent to a custom message handler in your app. You don’t create [WKScriptMessage](wkscriptmessage.md) objects directly. When JavaScript code targets one of your app’s message handlers, the [WKUserContentController](wkusercontentcontroller.md) object of the web view creates a [WKScriptMessage](wkscriptmessage.md) object and delivers it to the message handler’s delegate method. Use the object you’re provided to process the message and provide an appropriate response.

For more information about handling script messages, see the [WKScriptMessageHandler](wkscriptmessagehandler.md) and [WKScriptMessageHandlerWithReply](wkscriptmessagehandlerwithreply.md) protocols. For information about how to register message handlers, see the methods of [WKUserContentController](wkusercontentcontroller.md).

## Topics

### Getting the Message Contents

- [body](wkscriptmessage/body.md): The body of the message.

### Getting Message-Related Information

- [frameInfo](wkscriptmessage/frameinfo.md): The frame that sent the message.
- [webView](wkscriptmessage/webview.md): The web view that sent the message.
- [world](wkscriptmessage/world.md): The namespace in which the JavaScript code executes.

### Getting the Message Handler’s Name

- [name](wkscriptmessage/name.md): The name of the message handler to which the message is sent.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Receiving Messages

- [userContentController:didReceiveScriptMessage:](wkscriptmessagehandler/usercontentcontroller%28__didreceive_%29.md): Tells the handler that a webpage sent a script message.
