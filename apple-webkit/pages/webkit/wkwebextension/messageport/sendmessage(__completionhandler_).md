> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/messageport/sendmessage(_:completionhandler:)](https://developer.apple.com/documentation/webkit/wkwebextension/messageport/sendmessage(_:completionhandler:))

# sendMessage(\_:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Sends a message to the connected web extension.

## Declaration

```swift
func sendMessage(_ message: Any?, completionHandler: (((any Error)?) -> Void)? = nil)
```

```swift
func sendMessage(_ message: Any?) async throws
```

## Parameters

- `message`: The JSON-serializable message to be sent.
- `completionHandler`: An optional block to be invoked after the message is sent, taking an optional error.

<a id="discussion"></a>

## Discussion

> **Note**

> The message must be JSON-serializable according to [JSONSerialization](https://developer.apple.com/documentation/foundation/jsonserialization).

# sendMessage:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Sends a message to the connected web extension.

## Declaration

```objectivec
- (void) sendMessage:(id) message completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `message`: The JSON-serializable message to be sent.
- `completionHandler`: An optional block to be invoked after the message is sent, taking an optional error.

<a id="discussion"></a>

## Discussion

> **Note**

> The message must be JSON-serializable according to [NSJSONSerialization](https://developer.apple.com/documentation/foundation/jsonserialization).
