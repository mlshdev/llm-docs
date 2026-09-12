> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcsessiondelegate](https://developer.apple.com/documentation/watchconnectivity/wcsessiondelegate)

# WCSessionDelegate (Swift)

**Framework:** Watch Connectivity  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 2.0+

A delegate protocol that defines methods for receiving messages sent by a [WCSession](wcsession.md) object.

## Declaration

```swift
protocol WCSessionDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Session objects are used to communicate between a WatchKit extension and the companion iOS app on a paired and active iPhone. When configuring your session object, you must specify a delegate object that implements this protocol. The session calls your delegate methods to deliver incoming data from the counterpart app and to manage session-related changes.

Most methods of this protocol are optional. You implement the methods you need to respond to the data transfer operations that your apps support. However, apps must implement the [session(\_:activationDidCompleteWith:error:)](wcsessiondelegate/session%28__activationdidcompletewith_error_%29.md) method, supporting asynchronous activation. On iOS, you must also implement the [sessionDidBecomeInactive(\_:)](wcsessiondelegate/sessiondidbecomeinactive%28__%29.md) and [sessionDidDeactivate(\_:)](wcsessiondelegate/sessiondiddeactivate%28__%29.md) methods, supporting multiple Apple Watches.

The [WCSession](wcsession.md) object calls the methods of its delegate serially, so your method implementations do not need to be reentrant. Immediate messages can be sent only while both the WatchKit extension and iOS app are running. By contrast, context updates and file transfers can be initiated at any time and delivered in the background to the other device. All transfers are delivered in the order in which they were sent.

> **Note**

>  The methods of this protocol are called on a background thread of your app, so any code you write should be written with that fact in mind. In particular, if your method implementations initiate modifications to your app’s interface, make sure to redirect those modifications to your app’s main thread.

<a id="Supporting-Communication-with-Multiple-Apple-Watches"></a>

### Supporting Communication with Multiple Apple Watches

An iPhone running iOS 9.3 or later may pair with more than one Apple Watch running watchOS 2.2 or later. Implement the following methods in your session delegate:

- [session(\_:activationDidCompleteWith:error:)](wcsessiondelegate/session%28__activationdidcompletewith_error_%29.md)
- [sessionDidBecomeInactive(\_:)](wcsessiondelegate/sessiondidbecomeinactive%28__%29.md) (iOS only)
- [sessionDidDeactivate(\_:)](wcsessiondelegate/sessiondiddeactivate%28__%29.md) (iOS only)

Use the activation-related methods to track the activation state of the session in your iOS app. With Auto Switch enabled on the user’s iPhone, the session automatically moves to the inactive state when the user puts on a different Apple Watch than the one that is currently active. (If Auto Switch is disabled, the user must manually select which watch is active.) While your iOS app is in the inactive state, the system finishes delivering any data that has been received before moving your app to the deactivated state. While inactive or deactivated, you cannot initiate any new transfers. When your iOS app reaches the deactivated state, call the session’s [activate()](wcsession/activate%28%29.md) method again to connect to the new Apple Watch.

For more information about the flow of messages when a user switches from one Apple Watch to another, see [WCSession](wcsession.md).

## Topics

### Managing Session Activation

- [session(\_:activationDidCompleteWith:error:)](wcsessiondelegate/session%28__activationdidcompletewith_error_%29.md): Tells the delegate that the session has finished activating.
- [sessionDidBecomeInactive(\_:)](wcsessiondelegate/sessiondidbecomeinactive%28__%29.md): Tells the delegate that the session will stop communicating with the current Apple Watch.
- [sessionDidDeactivate(\_:)](wcsessiondelegate/sessiondiddeactivate%28__%29.md): Tells the delegate that the session has delivered all the data from the previous session, and that communication with the Apple Watch has ended.

### Managing State Changes

- [sessionWatchStateDidChange(\_:)](wcsessiondelegate/sessionwatchstatedidchange%28__%29.md): Indicates a change to the counterpart’s information.
- [sessionReachabilityDidChange(\_:)](wcsessiondelegate/sessionreachabilitydidchange%28__%29.md): Indicates a change to the counterpart’s reachability status.
- [sessionCompanionAppInstalledDidChange(\_:)](wcsessiondelegate/sessioncompanionappinstalleddidchange%28__%29.md): Indicates a change to the companion app’s installed state.

### Receiving Context Data

- [session(\_:didReceiveApplicationContext:)](wcsessiondelegate/session%28__didreceiveapplicationcontext_%29.md): Tells the delegate that the session has received context data from the counterpart.

### Receiving Immediate Messages

- [session(\_:didReceiveMessage:)](wcsessiondelegate/session%28__didreceivemessage_%29.md): Tells the delegate that an immediate message has arrived.
- [session(\_:didReceiveMessage:replyHandler:)](wcsessiondelegate/session%28__didreceivemessage_replyhandler_%29.md): Tells the delegate that an immediate message has arrived, and it requires a response.
- [session(\_:didReceiveMessageData:)](wcsessiondelegate/session%28__didreceivemessagedata_%29.md): Tells the delegate that an immediate data message has arrived.
- [session(\_:didReceiveMessageData:replyHandler:)](wcsessiondelegate/session%28__didreceivemessagedata_replyhandler_%29.md): Tells the delegate that an immediate data message has arrived, and it requires a response.

### Managing Data Dictionary Transfers

- [session(\_:didReceiveUserInfo:)](wcsessiondelegate/session%28__didreceiveuserinfo_%29.md): Tells the delegate that the session successfully received a data directory from its counterpart.
- [session(\_:didFinish:error:)](wcsessiondelegate/session%28__didfinish_error_%29-8627b.md): Tells the delegate that a data transfer operation has finished successfully or ended because of an error.

### Managing File Transfers

- [session(\_:didReceive:)](wcsessiondelegate/session%28__didreceive_%29.md): Tells the delegate that the session successfully received a file from its counterpart.
- [session(\_:didFinish:error:)](wcsessiondelegate/session%28__didfinish_error_%29-6dtcu.md): Tells the delegate that a file transfer has finished successfully or ended because of an error.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Essentials

- [WCSession](wcsession.md): The object that initiates communication between a WatchKit extension and its companion iOS app.

# WCSessionDelegate (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 2.0+

A delegate protocol that defines methods for receiving messages sent by a [WCSession](wcsession.md) object.

## Declaration

```objectivec
@protocol WCSessionDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Session objects are used to communicate between a WatchKit extension and the companion iOS app on a paired and active iPhone. When configuring your session object, you must specify a delegate object that implements this protocol. The session calls your delegate methods to deliver incoming data from the counterpart app and to manage session-related changes.

Most methods of this protocol are optional. You implement the methods you need to respond to the data transfer operations that your apps support. However, apps must implement the [session:activationDidCompleteWithState:error:](wcsessiondelegate/session%28__activationdidcompletewith_error_%29.md) method, supporting asynchronous activation. On iOS, you must also implement the [sessionDidBecomeInactive:](wcsessiondelegate/sessiondidbecomeinactive%28__%29.md) and [sessionDidDeactivate:](wcsessiondelegate/sessiondiddeactivate%28__%29.md) methods, supporting multiple Apple Watches.

The [WCSession](wcsession.md) object calls the methods of its delegate serially, so your method implementations do not need to be reentrant. Immediate messages can be sent only while both the WatchKit extension and iOS app are running. By contrast, context updates and file transfers can be initiated at any time and delivered in the background to the other device. All transfers are delivered in the order in which they were sent.

> **Note**

>  The methods of this protocol are called on a background thread of your app, so any code you write should be written with that fact in mind. In particular, if your method implementations initiate modifications to your app’s interface, make sure to redirect those modifications to your app’s main thread.

<a id="Supporting-Communication-with-Multiple-Apple-Watches"></a>

### Supporting Communication with Multiple Apple Watches

An iPhone running iOS 9.3 or later may pair with more than one Apple Watch running watchOS 2.2 or later. Implement the following methods in your session delegate:

- [session:activationDidCompleteWithState:error:](wcsessiondelegate/session%28__activationdidcompletewith_error_%29.md)
- [sessionDidBecomeInactive:](wcsessiondelegate/sessiondidbecomeinactive%28__%29.md) (iOS only)
- [sessionDidDeactivate:](wcsessiondelegate/sessiondiddeactivate%28__%29.md) (iOS only)

Use the activation-related methods to track the activation state of the session in your iOS app. With Auto Switch enabled on the user’s iPhone, the session automatically moves to the inactive state when the user puts on a different Apple Watch than the one that is currently active. (If Auto Switch is disabled, the user must manually select which watch is active.) While your iOS app is in the inactive state, the system finishes delivering any data that has been received before moving your app to the deactivated state. While inactive or deactivated, you cannot initiate any new transfers. When your iOS app reaches the deactivated state, call the session’s [activateSession](wcsession/activate%28%29.md) method again to connect to the new Apple Watch.

For more information about the flow of messages when a user switches from one Apple Watch to another, see [WCSession](wcsession.md).

## Topics

### Managing Session Activation

- [session:activationDidCompleteWithState:error:](wcsessiondelegate/session%28__activationdidcompletewith_error_%29.md): Tells the delegate that the session has finished activating.
- [sessionDidBecomeInactive:](wcsessiondelegate/sessiondidbecomeinactive%28__%29.md): Tells the delegate that the session will stop communicating with the current Apple Watch.
- [sessionDidDeactivate:](wcsessiondelegate/sessiondiddeactivate%28__%29.md): Tells the delegate that the session has delivered all the data from the previous session, and that communication with the Apple Watch has ended.

### Managing State Changes

- [sessionWatchStateDidChange:](wcsessiondelegate/sessionwatchstatedidchange%28__%29.md): Indicates a change to the counterpart’s information.
- [sessionReachabilityDidChange:](wcsessiondelegate/sessionreachabilitydidchange%28__%29.md): Indicates a change to the counterpart’s reachability status.
- [sessionCompanionAppInstalledDidChange:](wcsessiondelegate/sessioncompanionappinstalleddidchange%28__%29.md): Indicates a change to the companion app’s installed state.

### Receiving Context Data

- [session:didReceiveApplicationContext:](wcsessiondelegate/session%28__didreceiveapplicationcontext_%29.md): Tells the delegate that the session has received context data from the counterpart.

### Receiving Immediate Messages

- [session:didReceiveMessage:](wcsessiondelegate/session%28__didreceivemessage_%29.md): Tells the delegate that an immediate message has arrived.
- [session:didReceiveMessage:replyHandler:](wcsessiondelegate/session%28__didreceivemessage_replyhandler_%29.md): Tells the delegate that an immediate message has arrived, and it requires a response.
- [session:didReceiveMessageData:](wcsessiondelegate/session%28__didreceivemessagedata_%29.md): Tells the delegate that an immediate data message has arrived.
- [session:didReceiveMessageData:replyHandler:](wcsessiondelegate/session%28__didreceivemessagedata_replyhandler_%29.md): Tells the delegate that an immediate data message has arrived, and it requires a response.

### Managing Data Dictionary Transfers

- [session:didReceiveUserInfo:](wcsessiondelegate/session%28__didreceiveuserinfo_%29.md): Tells the delegate that the session successfully received a data directory from its counterpart.
- [session:didFinishUserInfoTransfer:error:](wcsessiondelegate/session%28__didfinish_error_%29-8627b.md): Tells the delegate that a data transfer operation has finished successfully or ended because of an error.

### Managing File Transfers

- [session:didReceiveFile:](wcsessiondelegate/session%28__didreceive_%29.md): Tells the delegate that the session successfully received a file from its counterpart.
- [session:didFinishFileTransfer:error:](wcsessiondelegate/session%28__didfinish_error_%29-6dtcu.md): Tells the delegate that a file transfer has finished successfully or ended because of an error.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Essentials

- [WCSession](wcsession.md): The object that initiates communication between a WatchKit extension and its companion iOS app.
