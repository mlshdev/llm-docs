> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkusercontentcontroller/removescriptmessagehandler(forname:)](https://developer.apple.com/documentation/webkit/wkusercontentcontroller/removescriptmessagehandler(forname:))

# removeScriptMessageHandler(forName:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Uninstalls the custom message handler with the specified name from your JavaScript code.

## Declaration

```swift
func removeScriptMessageHandler(forName name: String)
```

## Parameters

- `name`: The name of the message handler to remove. If no message handler with this name exists in the user content controller, this method does nothing.

<a id="Discussion"></a>

## Discussion

Use this method to remove a message handler that you previously installed using the [add(\_:name:)](add%28__name_%29.md) method. This method removes the message handler from the page content world — that is, the content world available from the [page](../wkcontentworld/page.md) property of [WKContentWorld](../wkcontentworld.md). If you installed the message handler in a different content world, this method doesn’t remove it.

## See Also

### Adding and Removing Message Handlers

- [add(\_:name:)](add%28__name_%29.md): Installs a message handler that you can call from your JavaScript code.
- [add(\_:contentWorld:name:)](add%28__contentworld_name_%29.md): Installs a message handler that you can call from the specified content world in your JavaScript code.
- [addScriptMessageHandler(\_:contentWorld:name:)](addscriptmessagehandler%28__contentworld_name_%29.md): Installs a message handler that returns a reply to your JavaScript code.
- [removeScriptMessageHandler(forName:contentWorld:)](removescriptmessagehandler%28forname_contentworld_%29.md): Uninstalls a custom message handler from the specified content world in your JavaScript code.
- [removeAllScriptMessageHandlers(from:)](removeallscriptmessagehandlers%28from_%29.md): Uninstalls all custom message handlers from the specified content world in your JavaScript code.
- [removeAllScriptMessageHandlers()](removeallscriptmessagehandlers%28%29.md): Uninstalls all custom message handlers associated with the user content controller.
- [WKScriptMessageHandler](../wkscriptmessagehandler.md): An interface for receiving messages from JavaScript code running in a webpage.
- [WKScriptMessageHandlerWithReply](../wkscriptmessagehandlerwithreply.md): An interface for responding to messages from JavaScript code running in a webpage.

# removeScriptMessageHandlerForName: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Uninstalls the custom message handler with the specified name from your JavaScript code.

## Declaration

```objectivec
- (void) removeScriptMessageHandlerForName:(NSString *) name;
```

## Parameters

- `name`: The name of the message handler to remove. If no message handler with this name exists in the user content controller, this method does nothing.

<a id="Discussion"></a>

## Discussion

Use this method to remove a message handler that you previously installed using the [addScriptMessageHandler:name:](add%28__name_%29.md) method. This method removes the message handler from the page content world — that is, the content world available from the [pageWorld](../wkcontentworld/page.md) property of [WKContentWorld](../wkcontentworld.md). If you installed the message handler in a different content world, this method doesn’t remove it.

## See Also

### Adding and Removing Message Handlers

- [addScriptMessageHandler:name:](add%28__name_%29.md): Installs a message handler that you can call from your JavaScript code.
- [addScriptMessageHandler:contentWorld:name:](add%28__contentworld_name_%29.md): Installs a message handler that you can call from the specified content world in your JavaScript code.
- [addScriptMessageHandlerWithReply:contentWorld:name:](addscriptmessagehandler%28__contentworld_name_%29.md): Installs a message handler that returns a reply to your JavaScript code.
- [removeScriptMessageHandlerForName:contentWorld:](removescriptmessagehandler%28forname_contentworld_%29.md): Uninstalls a custom message handler from the specified content world in your JavaScript code.
- [removeAllScriptMessageHandlersFromContentWorld:](removeallscriptmessagehandlers%28from_%29.md): Uninstalls all custom message handlers from the specified content world in your JavaScript code.
- [removeAllScriptMessageHandlers](removeallscriptmessagehandlers%28%29.md): Uninstalls all custom message handlers associated with the user content controller.
- [WKScriptMessageHandler](../wkscriptmessagehandler.md): An interface for receiving messages from JavaScript code running in a webpage.
- [WKScriptMessageHandlerWithReply](../wkscriptmessagehandlerwithreply.md): An interface for responding to messages from JavaScript code running in a webpage.
