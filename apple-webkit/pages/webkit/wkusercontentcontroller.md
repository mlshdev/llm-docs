> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkusercontentcontroller](https://developer.apple.com/documentation/webkit/wkusercontentcontroller)

# WKUserContentController (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

An object for managing interactions between JavaScript code and your web view, and for filtering content in your web view.

## Declaration

```swift
@MainActor class WKUserContentController
```

<a id="overview"></a>

## Overview

A [WKUserContentController](wkusercontentcontroller.md) object provides a bridge between your app and the JavaScript code running in the web view. Use this object to do the following:

- Inject JavaScript code into webpages running in your web view.
- Install custom JavaScript functions that call through to your app’s native code.
- Specify custom filters to prevent the webpage from loading restricted content.

Create and configure a [WKUserContentController](wkusercontentcontroller.md) object as part of your overall web view setup. Assign the object to the [userContentController](wkwebviewconfiguration/usercontentcontroller.md) property of your [WKWebViewConfiguration](wkwebviewconfiguration.md) object before creating your web view.

## Topics

### Adding and Removing Custom Scripts

- [addUserScript(\_:)](wkusercontentcontroller/adduserscript%28__%29.md): Injects the specified script into the webpage’s content.
- [removeAllUserScripts()](wkusercontentcontroller/removealluserscripts%28%29.md): Removes all user scripts from the web view.
- [userScripts](wkusercontentcontroller/userscripts.md): The user scripts associated with the user content controller.

### Adding and Removing Message Handlers

- [add(\_:name:)](wkusercontentcontroller/add%28__name_%29.md): Installs a message handler that you can call from your JavaScript code.
- [add(\_:contentWorld:name:)](wkusercontentcontroller/add%28__contentworld_name_%29.md): Installs a message handler that you can call from the specified content world in your JavaScript code.
- [addScriptMessageHandler(\_:contentWorld:name:)](wkusercontentcontroller/addscriptmessagehandler%28__contentworld_name_%29.md): Installs a message handler that returns a reply to your JavaScript code.
- [removeScriptMessageHandler(forName:)](wkusercontentcontroller/removescriptmessagehandler%28forname_%29.md): Uninstalls the custom message handler with the specified name from your JavaScript code.
- [removeScriptMessageHandler(forName:contentWorld:)](wkusercontentcontroller/removescriptmessagehandler%28forname_contentworld_%29.md): Uninstalls a custom message handler from the specified content world in your JavaScript code.
- [removeAllScriptMessageHandlers(from:)](wkusercontentcontroller/removeallscriptmessagehandlers%28from_%29.md): Uninstalls all custom message handlers from the specified content world in your JavaScript code.
- [removeAllScriptMessageHandlers()](wkusercontentcontroller/removeallscriptmessagehandlers%28%29.md): Uninstalls all custom message handlers associated with the user content controller.
- [WKScriptMessageHandler](wkscriptmessagehandler.md): An interface for receiving messages from JavaScript code running in a webpage.
- [WKScriptMessageHandlerWithReply](wkscriptmessagehandlerwithreply.md): An interface for responding to messages from JavaScript code running in a webpage.

### Adding and Removing Content Rules

- [add(\_:)](wkusercontentcontroller/add%28__%29.md): Adds the specified content rule list to the content controller object.
- [remove(\_:)](wkusercontentcontroller/remove%28__%29.md): Removes the specified rule list from the content controller object.
- [removeAllContentRuleLists()](wkusercontentcontroller/removeallcontentrulelists%28%29.md): Removes all rules lists from the content controller.
- [WKContentRuleList](wkcontentrulelist.md): A compiled list of rules to apply to web content.

### Initializers

- [init(coder:)](wkusercontentcontroller/init%28coder_%29.md)

### Instance Methods

- [addBuffer(\_:name:to:)](wkusercontentcontroller/addbuffer%28__name_to_%29.md): Adds a data buffer that will be available to JavaScript through the `window.webkit.buffers` object.
- [removeBuffer(named:from:)](wkusercontentcontroller/removebuffer%28named_from_%29.md): Removes a previously added data buffer from the given `WKContentWorld`.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Page content

- [WKContentRuleListStore](wkcontentruleliststore.md): An object that contains the rules for how to load and filter content in the web view.
- [WKContentWorld](wkcontentworld.md): An object that defines a scope of execution for JavaScript code, and which you use to prevent conflicts between different scripts.
- [WKFrameInfo](wkframeinfo.md): An object that contains information about a frame on a webpage.
- [WKSecurityOrigin](wksecurityorigin.md): An object that identifies the origin of a particular resource.
- [WKUserScript](wkuserscript.md): A script that the web view injects into a webpage.
- [WKContentWorld.Configuration](wkcontentworld/configuration.md)
- [WKJSHandle](wkjshandle.md): A WKJSHandle object contains a reference to a JavaScript object.

# WKUserContentController (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

An object for managing interactions between JavaScript code and your web view, and for filtering content in your web view.

## Declaration

```objectivec
@interface WKUserContentController : NSObject
```

<a id="overview"></a>

## Overview

A [WKUserContentController](wkusercontentcontroller.md) object provides a bridge between your app and the JavaScript code running in the web view. Use this object to do the following:

- Inject JavaScript code into webpages running in your web view.
- Install custom JavaScript functions that call through to your app’s native code.
- Specify custom filters to prevent the webpage from loading restricted content.

Create and configure a [WKUserContentController](wkusercontentcontroller.md) object as part of your overall web view setup. Assign the object to the [userContentController](wkwebviewconfiguration/usercontentcontroller.md) property of your [WKWebViewConfiguration](wkwebviewconfiguration.md) object before creating your web view.

## Topics

### Adding and Removing Custom Scripts

- [addUserScript:](wkusercontentcontroller/adduserscript%28__%29.md): Injects the specified script into the webpage’s content.
- [removeAllUserScripts](wkusercontentcontroller/removealluserscripts%28%29.md): Removes all user scripts from the web view.
- [userScripts](wkusercontentcontroller/userscripts.md): The user scripts associated with the user content controller.

### Adding and Removing Message Handlers

- [addScriptMessageHandler:name:](wkusercontentcontroller/add%28__name_%29.md): Installs a message handler that you can call from your JavaScript code.
- [addScriptMessageHandler:contentWorld:name:](wkusercontentcontroller/add%28__contentworld_name_%29.md): Installs a message handler that you can call from the specified content world in your JavaScript code.
- [addScriptMessageHandlerWithReply:contentWorld:name:](wkusercontentcontroller/addscriptmessagehandler%28__contentworld_name_%29.md): Installs a message handler that returns a reply to your JavaScript code.
- [removeScriptMessageHandlerForName:](wkusercontentcontroller/removescriptmessagehandler%28forname_%29.md): Uninstalls the custom message handler with the specified name from your JavaScript code.
- [removeScriptMessageHandlerForName:contentWorld:](wkusercontentcontroller/removescriptmessagehandler%28forname_contentworld_%29.md): Uninstalls a custom message handler from the specified content world in your JavaScript code.
- [removeAllScriptMessageHandlersFromContentWorld:](wkusercontentcontroller/removeallscriptmessagehandlers%28from_%29.md): Uninstalls all custom message handlers from the specified content world in your JavaScript code.
- [removeAllScriptMessageHandlers](wkusercontentcontroller/removeallscriptmessagehandlers%28%29.md): Uninstalls all custom message handlers associated with the user content controller.
- [WKScriptMessageHandler](wkscriptmessagehandler.md): An interface for receiving messages from JavaScript code running in a webpage.
- [WKScriptMessageHandlerWithReply](wkscriptmessagehandlerwithreply.md): An interface for responding to messages from JavaScript code running in a webpage.

### Adding and Removing Content Rules

- [addContentRuleList:](wkusercontentcontroller/add%28__%29.md): Adds the specified content rule list to the content controller object.
- [removeContentRuleList:](wkusercontentcontroller/remove%28__%29.md): Removes the specified rule list from the content controller object.
- [removeAllContentRuleLists](wkusercontentcontroller/removeallcontentrulelists%28%29.md): Removes all rules lists from the content controller.
- [WKContentRuleList](wkcontentrulelist.md): A compiled list of rules to apply to web content.

### Instance Methods

- [addBuffer:name:contentWorld:](wkusercontentcontroller/addbuffer_name_contentworld_.md)
- [removeBufferWithName:contentWorld:](wkusercontentcontroller/removebufferwithname_contentworld_.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Page content

- [WKContentRuleListStore](wkcontentruleliststore.md): An object that contains the rules for how to load and filter content in the web view.
- [WKContentWorld](wkcontentworld.md): An object that defines a scope of execution for JavaScript code, and which you use to prevent conflicts between different scripts.
- [WKFrameInfo](wkframeinfo.md): An object that contains information about a frame on a webpage.
- [WKSecurityOrigin](wksecurityorigin.md): An object that identifies the origin of a particular resource.
- [WKUserScript](wkuserscript.md): A script that the web view injects into a webpage.
- [WKContentWorldConfiguration](wkcontentworld/configuration.md)
- [WKJSHandle](wkjshandle.md): A WKJSHandle object contains a reference to a JavaScript object.
