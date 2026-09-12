> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcsessiondelegate/session(_:didreceivemessagedata:)](https://developer.apple.com/documentation/watchconnectivity/wcsessiondelegate/session(_:didreceivemessagedata:))

# session(\_:didReceiveMessageData:) (Swift)

**Framework:** Watch Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that an immediate data message has arrived.

## Declaration

```swift
optional func session(_ session: WCSession, didReceiveMessageData messageData: Data)
```

## Parameters

- `session`: The session object that received the data from its counterpart.
- `messageData`: The data object received from the counterpart. Use the contents of this object to determine what course of action to take.

<a id="Discussion"></a>

## Discussion

This method is called in response to a message sent by the counterpart process using the [sendMessageData(\_:replyHandler:errorHandler:)](../wcsession/sendmessagedata%28__replyhandler_errorhandler_%29.md) method. This specific method is called when the counterpart specifies `nil` for the reply handler, indicating that it does not want a response. Use this method to process the message data and provide an appropriate reply. You must execute the `reply` block as part of your implementation.

Use messages to communicate quickly with the counterpart process. Messages can be sent and received only while both processes are active and running.

The delivery of multiple messages occurs serially, so your implementation of this method does not need to be reentrant. This method is called on a background thread of your app.

## See Also

### Receiving Immediate Messages

- [session(\_:didReceiveMessage:)](session%28__didreceivemessage_%29.md): Tells the delegate that an immediate message has arrived.
- [session(\_:didReceiveMessage:replyHandler:)](session%28__didreceivemessage_replyhandler_%29.md): Tells the delegate that an immediate message has arrived, and it requires a response.
- [session(\_:didReceiveMessageData:replyHandler:)](session%28__didreceivemessagedata_replyhandler_%29.md): Tells the delegate that an immediate data message has arrived, and it requires a response.

# session:didReceiveMessageData: (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that an immediate data message has arrived.

## Declaration

```objectivec
- (void) session:(WCSession *) session didReceiveMessageData:(NSData *) messageData;
```

## Parameters

- `session`: The session object that received the data from its counterpart.
- `messageData`: The data object received from the counterpart. Use the contents of this object to determine what course of action to take.

<a id="Discussion"></a>

## Discussion

This method is called in response to a message sent by the counterpart process using the [sendMessageData:replyHandler:errorHandler:](../wcsession/sendmessagedata%28__replyhandler_errorhandler_%29.md) method. This specific method is called when the counterpart specifies `nil` for the reply handler, indicating that it does not want a response. Use this method to process the message data and provide an appropriate reply. You must execute the `reply` block as part of your implementation.

Use messages to communicate quickly with the counterpart process. Messages can be sent and received only while both processes are active and running.

The delivery of multiple messages occurs serially, so your implementation of this method does not need to be reentrant. This method is called on a background thread of your app.

## See Also

### Receiving Immediate Messages

- [session:didReceiveMessage:](session%28__didreceivemessage_%29.md): Tells the delegate that an immediate message has arrived.
- [session:didReceiveMessage:replyHandler:](session%28__didreceivemessage_replyhandler_%29.md): Tells the delegate that an immediate message has arrived, and it requires a response.
- [session:didReceiveMessageData:replyHandler:](session%28__didreceivemessagedata_replyhandler_%29.md): Tells the delegate that an immediate data message has arrived, and it requires a response.
