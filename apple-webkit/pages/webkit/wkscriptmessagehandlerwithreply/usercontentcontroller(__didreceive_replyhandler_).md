> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkscriptmessagehandlerwithreply/usercontentcontroller(_:didreceive:replyhandler:)](https://developer.apple.com/documentation/webkit/wkscriptmessagehandlerwithreply/usercontentcontroller(_:didreceive:replyhandler:))

# userContentController(\_:didReceive:replyHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Tells the handler that a webpage sent a script message that included a reply.

## Declaration

```swift
func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage, replyHandler: @escaping @MainActor @Sendable (Any?, String?) -> Void)
```

```swift
func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) async -> (Any?, String?)
```

## Parameters

- `userContentController`: The user content controller that delivered the message to your handler.
- `message`: An object that contains the message details.
- `replyHandler`: A reply handler block to execute with the response to send back to the webpage. This block has no return value and takes the following parameters:

  - **reply**: An object that contains the data to return to the webpage. Allowed types for this parameter are [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber), [NSString](https://developer.apple.com/documentation/foundation/nsstring), [NSDate](https://developer.apple.com/documentation/foundation/nsdate), [NSArray](https://developer.apple.com/documentation/foundation/nsarray), [NSDictionary](https://developer.apple.com/documentation/foundation/nsdictionary), and [NSNull](https://developer.apple.com/documentation/foundation/nsnull). Specify `nil` if an error occurred.
  - **errorMessage**: `nil` on success, or a string that describes the error that occurred.

<a id="Discussion"></a>

## Discussion

Use this method to handle a message from the webpage and provide an appropriate response.

## See Also

### Receiving Messages

- [WKScriptMessage](../wkscriptmessage.md): An object that encapsulates a message sent by JavaScript code from a webpage.

# userContentController:didReceiveScriptMessage:replyHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Tells the handler that a webpage sent a script message that included a reply.

## Declaration

```objectivec
- (void) userContentController:(WKUserContentController *) userContentController didReceiveScriptMessage:(WKScriptMessage *) message replyHandler:(void (^)(id, NSString *)) replyHandler;
```

## Parameters

- `userContentController`: The user content controller that delivered the message to your handler.
- `message`: An object that contains the message details.
- `replyHandler`: A reply handler block to execute with the response to send back to the webpage. This block has no return value and takes the following parameters:

  - **reply**: An object that contains the data to return to the webpage. Allowed types for this parameter are [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber), [NSString](https://developer.apple.com/documentation/foundation/nsstring), [NSDate](https://developer.apple.com/documentation/foundation/nsdate), [NSArray](https://developer.apple.com/documentation/foundation/nsarray), [NSDictionary](https://developer.apple.com/documentation/foundation/nsdictionary), and [NSNull](https://developer.apple.com/documentation/foundation/nsnull). Specify `nil` if an error occurred.
  - **errorMessage**: `nil` on success, or a string that describes the error that occurred.

<a id="Discussion"></a>

## Discussion

Use this method to handle a message from the webpage and provide an appropriate response.

## See Also

### Receiving Messages

- [WKScriptMessage](../wkscriptmessage.md): An object that encapsulates a message sent by JavaScript code from a webpage.
