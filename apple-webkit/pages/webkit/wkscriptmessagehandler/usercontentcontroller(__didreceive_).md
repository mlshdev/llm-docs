> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkscriptmessagehandler/usercontentcontroller(_:didreceive:)](https://developer.apple.com/documentation/webkit/wkscriptmessagehandler/usercontentcontroller(_:didreceive:))

# userContentController(\_:didReceive:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Tells the handler that a webpage sent a script message.

## Declaration

```swift
func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage)
```

## Parameters

- `userContentController`: The user content controller that delivered the message to your handler.
- `message`: An object that contains the message details.

<a id="Discussion"></a>

## Discussion

Use this method to respond to a message sent from the webpage’s JavaScript code. Use the message parameter to get the message contents and to determine the originating web view.

## See Also

### Receiving Messages

- [WKScriptMessage](../wkscriptmessage.md): An object that encapsulates a message sent by JavaScript code from a webpage.

# userContentController:didReceiveScriptMessage: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Tells the handler that a webpage sent a script message.

## Declaration

```objectivec
- (void) userContentController:(WKUserContentController *) userContentController didReceiveScriptMessage:(WKScriptMessage *) message;
```

## Parameters

- `userContentController`: The user content controller that delivered the message to your handler.
- `message`: An object that contains the message details.

<a id="Discussion"></a>

## Discussion

Use this method to respond to a message sent from the webpage’s JavaScript code. Use the message parameter to get the message contents and to determine the originating web view.

## See Also

### Receiving Messages

- [WKScriptMessage](../wkscriptmessage.md): An object that encapsulates a message sent by JavaScript code from a webpage.
