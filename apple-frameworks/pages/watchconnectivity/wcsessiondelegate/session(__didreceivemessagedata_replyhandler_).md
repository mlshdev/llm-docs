> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcsessiondelegate/session(_:didreceivemessagedata:replyhandler:)](https://developer.apple.com/documentation/watchconnectivity/wcsessiondelegate/session(_:didreceivemessagedata:replyhandler:))

# session(\_:didReceiveMessageData:replyHandler:) (Swift)

**Framework:** Watch Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that an immediate data message has arrived, and it requires a response.

## Declaration

```swift
optional func session(_ session: WCSession, didReceiveMessageData messageData: Data, replyHandler: @escaping (Data) -> Void)
```

## Parameters

- `session`: The session object that received the data from its counterpart.
- `messageData`: The data object received from the counterpart. Use the contents of this object to determine what course of action to take.
- `replyHandler`: A reply block to execute with the response. This block has no return value and takes the following parameter:

  - **replyMessage**: A data object containing your response to `message`.

<a id="Discussion"></a>

## Discussion

This method is called in response to a message sent by the counterpart process using the [sendMessageData(\_:replyHandler:errorHandler:)](../wcsession/sendmessagedata%28__replyhandler_errorhandler_%29.md) method. This specific method is called when the counterpart specifies a valid reply handler, indicating that it wants a response. Use this method to process the message data and provide an appropriate reply. You must execute the `reply` block as part of your implementation.

Use messages to communicate quickly with the counterpart process. Messages can be sent and received only while both processes are active and running.

The delivery of multiple messages occurs serially, so your implementation of this method does not need to be reentrant. This method is called on a background thread of your app.

## See Also

### Receiving Immediate Messages

- [session(\_:didReceiveMessage:)](session%28__didreceivemessage_%29.md): Tells the delegate that an immediate message has arrived.
- [session(\_:didReceiveMessage:replyHandler:)](session%28__didreceivemessage_replyhandler_%29.md): Tells the delegate that an immediate message has arrived, and it requires a response.
- [session(\_:didReceiveMessageData:)](session%28__didreceivemessagedata_%29.md): Tells the delegate that an immediate data message has arrived.

# session:didReceiveMessageData:replyHandler: (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that an immediate data message has arrived, and it requires a response.

## Declaration

```objectivec
- (void) session:(WCSession *) session didReceiveMessageData:(NSData *) messageData replyHandler:(void (^)(NSData *replyMessageData)) replyHandler;
```

## Parameters

- `session`: The session object that received the data from its counterpart.
- `messageData`: The data object received from the counterpart. Use the contents of this object to determine what course of action to take.
- `replyHandler`: A reply block to execute with the response. This block has no return value and takes the following parameter:

  - **replyMessage**: A data object containing your response to `message`.

<a id="Discussion"></a>

## Discussion

This method is called in response to a message sent by the counterpart process using the [sendMessageData:replyHandler:errorHandler:](../wcsession/sendmessagedata%28__replyhandler_errorhandler_%29.md) method. This specific method is called when the counterpart specifies a valid reply handler, indicating that it wants a response. Use this method to process the message data and provide an appropriate reply. You must execute the `reply` block as part of your implementation.

Use messages to communicate quickly with the counterpart process. Messages can be sent and received only while both processes are active and running.

The delivery of multiple messages occurs serially, so your implementation of this method does not need to be reentrant. This method is called on a background thread of your app.

## See Also

### Receiving Immediate Messages

- [session:didReceiveMessage:](session%28__didreceivemessage_%29.md): Tells the delegate that an immediate message has arrived.
- [session:didReceiveMessage:replyHandler:](session%28__didreceivemessage_replyhandler_%29.md): Tells the delegate that an immediate message has arrived, and it requires a response.
- [session:didReceiveMessageData:](session%28__didreceivemessagedata_%29.md): Tells the delegate that an immediate data message has arrived.
