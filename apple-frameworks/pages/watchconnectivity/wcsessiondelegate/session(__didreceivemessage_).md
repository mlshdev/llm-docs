> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcsessiondelegate/session(_:didreceivemessage:)](https://developer.apple.com/documentation/watchconnectivity/wcsessiondelegate/session(_:didreceivemessage:))

# session(\_:didReceiveMessage:) (Swift)

**Framework:** Watch Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that an immediate message has arrived.

## Declaration

```swift
optional func session(_ session: WCSession, didReceiveMessage message: [String : Any])
```

## Parameters

- `session`: The session object that received the message from its counterpart.
- `message`: A dictionary of property list values representing the contents of the message. Use the contents of this dictionary to determine what course of action to take.

<a id="Discussion"></a>

## Discussion

This method is called in response to a message sent by the counterpart process using the [sendMessage(\_:replyHandler:errorHandler:)](../wcsession/sendmessage%28__replyhandler_errorhandler_%29.md) method. This specific method is called when the counterpart specifies `nil` for the reply handler, indicating that it does not want a response. Use this method to process the message data and take whatever further actions are needed.

Use messages to communicate quickly with the counterpart process. Messages can be sent and received only while both processes are active and running.

The delivery of multiple messages occurs serially, so your implementation of this method does not need to be reentrant. This method is called on a background thread of your app.

## See Also

### Receiving Immediate Messages

- [session(\_:didReceiveMessage:replyHandler:)](session%28__didreceivemessage_replyhandler_%29.md): Tells the delegate that an immediate message has arrived, and it requires a response.
- [session(\_:didReceiveMessageData:)](session%28__didreceivemessagedata_%29.md): Tells the delegate that an immediate data message has arrived.
- [session(\_:didReceiveMessageData:replyHandler:)](session%28__didreceivemessagedata_replyhandler_%29.md): Tells the delegate that an immediate data message has arrived, and it requires a response.

# session:didReceiveMessage: (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that an immediate message has arrived.

## Declaration

```objectivec
- (void) session:(WCSession *) session didReceiveMessage:(NSDictionary<NSString *,id> *) message;
```

## Parameters

- `session`: The session object that received the message from its counterpart.
- `message`: A dictionary of property list values representing the contents of the message. Use the contents of this dictionary to determine what course of action to take.

<a id="Discussion"></a>

## Discussion

This method is called in response to a message sent by the counterpart process using the [sendMessage:replyHandler:errorHandler:](../wcsession/sendmessage%28__replyhandler_errorhandler_%29.md) method. This specific method is called when the counterpart specifies `nil` for the reply handler, indicating that it does not want a response. Use this method to process the message data and take whatever further actions are needed.

Use messages to communicate quickly with the counterpart process. Messages can be sent and received only while both processes are active and running.

The delivery of multiple messages occurs serially, so your implementation of this method does not need to be reentrant. This method is called on a background thread of your app.

## See Also

### Receiving Immediate Messages

- [session:didReceiveMessage:replyHandler:](session%28__didreceivemessage_replyhandler_%29.md): Tells the delegate that an immediate message has arrived, and it requires a response.
- [session:didReceiveMessageData:](session%28__didreceivemessagedata_%29.md): Tells the delegate that an immediate data message has arrived.
- [session:didReceiveMessageData:replyHandler:](session%28__didreceivemessagedata_replyhandler_%29.md): Tells the delegate that an immediate data message has arrived, and it requires a response.
