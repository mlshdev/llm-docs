> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcsession](https://developer.apple.com/documentation/watchconnectivity/wcsession)

# WCSession (Swift)

**Framework:** Watch Connectivity  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · visionOS 1.0+ · watchOS 2.0+

The object that initiates communication between a WatchKit extension and its companion iOS app.

## Declaration

```swift
class WCSession
```

<a id="overview"></a>

## Overview

Your iOS app and watchOS app must both create and configure an instance of this class at some point during their execution. When both session objects are active, the two processes can communicate immediately by sending messages back and forth. When only one session is active, the active session may still send updates and transfer files, but those transfers happen opportunistically in the background.

> **Important**

>  The session object must be configured and activated before you attempt to send messages or obtain information about the state of the connection. Before activating the session, you may call the [isSupported()](wcsession/issupported%28%29.md) method to make sure that current device can use the Watch Connectivity framework.

<a id="Configuring-and-Activating-the-Session"></a>

### Configuring and Activating the Session

To configure and activate the session, assign a [delegate](wcsession/delegate.md) to the default session object and call that object’s [activate()](wcsession/activate%28%29.md) method, as shown in code snippet below. Your WatchKit extension and iOS app must each configure their own session object. Activating the session establishes a connection between the two apps.

**Swift**

```swift
if WCSession.isSupported() {
   let session = WCSession.default
   session.delegate = self
   session.activate()
}
```

**Objective-C**

```objc
if ([WCSession isSupported]) {
    WCSession* session = [WCSession defaultSession];
    session.delegate = self;
    [session activate];
}
```

To support the pairing of multiple watches to the same iPhone, the session delegate of both your apps must implement the activation APIs. Implementing the [session(\_:activationDidCompleteWith:error:)](wcsessiondelegate/session%28__activationdidcompletewith_error_%29.md) method lets the session know that your app supports asynchronous activation. Implementing the [sessionDidBecomeInactive(\_:)](wcsessiondelegate/sessiondidbecomeinactive%28__%29.md) and [sessionDidDeactivate(\_:)](wcsessiondelegate/sessiondiddeactivate%28__%29.md) methods in the session delegate of your iOS app is required to manage transitions between different Apple Watches.

> **Important**

>  If your delegate does not implement the appropriate methods for asynchronous activation and activation state changes, your app opts out of multiple Apple Watch support altogether. Opting out has important implications for your app when the user switches from one Apple Watch to another. When a switch occurs, your app’s session is deactivated. When your app subsequently moves to the background, the system terminates your app. (Background execution modes do not prevent the termination of your app.) The next time your app launches, it connects with the new Apple Watch.

Apps may initiate transfers only when the session is active—that is, the [activationState](wcsession/activationstate.md) is set to [WCSessionActivationState.activated](wcsessionactivationstate/activated.md). Your iOS app should also check the [isPaired](wcsession/ispaired.md) and [isWatchAppInstalled](wcsession/iswatchappinstalled.md) properties before sending any background messages, and it may need to check other properties as needed. Most of the properties you need to check are valid only while the session is active. At other times, the values of the properties may be undefined. The [activationState](wcsession/activationstate.md) property is always valid and contains the current activation state of the session. For details, see the corresponding property description.

For more information about implementing the methods of the delegate object, see [WCSessionDelegate](wcsessiondelegate.md).

<a id="Supporting-Communication-with-Multiple-Apple-Watches"></a>

### Supporting Communication with Multiple Apple Watches

An iPhone running iOS 9.3 or later may pair with more than one Apple Watch running watchOS 2.2 or later. In your Watch app, you should support asynchronous activation of the session, but doing so is not required. In your iOS app, you must support asynchronous activation of the session and also monitor the activation and deactivation of the session object. You do this by implementing the following methods in your session delegate:

- [session(\_:activationDidCompleteWith:error:)](wcsessiondelegate/session%28__activationdidcompletewith_error_%29.md)
- [sessionDidBecomeInactive(\_:)](wcsessiondelegate/sessiondidbecomeinactive%28__%29.md)
- [sessionDidDeactivate(\_:)](wcsessiondelegate/sessiondiddeactivate%28__%29.md)

[Figure 1](wcsession.md#1965795) shows the sequence of events that happen when the user switches from one Apple Watch to another. When automatic switching is enabled, only one Apple Watch at a time actually communicates with the iOS app. The Watch app on each watch stays in the active state, but the iOS app moves to the inactive and deactivated states during a switch. Moving to the inactive state gives the session a small amount of time to deliver any data that has already been received. As soon as that data is delivered, the session moves to the deactivated state. At that point, the iOS app must call the [activate()](wcsession/activate%28%29.md) method again to connect to the newly active watch, which in this example is now the second Apple Watch.

![](https://developer.apple.com/images/com.apple.watchconnectivity/media-1965795@2x.png)

Your iOS app can use the [watchDirectoryURL](wcsession/watchdirectoryurl.md) property to store data that is specific to only one instance of your Watch app running on a particular Apple Watch. In most cases, the data you display in each instance of your Watch app is the same. However, you might use this directory to store configuration data, preferences, or other data files that your iOS app needs to interact properly with your Watch app. If you do, use the activation and deactivation process to update your iOS app.

For more information about handling session activation and deactivation, see [WCSessionDelegate](wcsessiondelegate.md).

<a id="Communicating-with-the-Counterpart-App"></a>

### Communicating with the Counterpart App

You may initiate data transfers to a counterpart app only when the [activationState](wcsession/activationstate.md) property is set to [WCSessionActivationState.activated](wcsessionactivationstate/activated.md). The iOS app should ensure the Watch app is installed before trying to initiate transfers. You initiate transfers in any of the following ways:

- Use the [updateApplicationContext(\_:)](wcsession/updateapplicationcontext%28__%29.md) method to communicate recent state information to the counterpart. When the counterpart wakes, it can use this information to update its own state. For example, an iOS app that supports Background App Refresh can use part of its background execution time to update the corresponding Watch app. This method overwrites the previous data dictionary, so use this method when your app needs only the most recent data values.
- Use the [sendMessage(\_:replyHandler:errorHandler:)](wcsession/sendmessage%28__replyhandler_errorhandler_%29.md) or [sendMessageData(\_:replyHandler:errorHandler:)](wcsession/sendmessagedata%28__replyhandler_errorhandler_%29.md) method to transfer data to a reachable counterpart. These methods are intended for immediate communication between your iOS app and WatchKit extension. The [isReachable](wcsession/isreachable.md) property must currently be [true](https://developer.apple.com/documentation/swift/true) for these methods to succeed.
- Use the [transferUserInfo(\_:)](wcsession/transferuserinfo%28__%29.md) method to transfer a dictionary of data in the background. The dictionaries you send are queued for delivery to the counterpart and transfers continue when the current app is suspended or terminated.
- Use the [transferFile(\_:metadata:)](wcsession/transferfile%28__metadata_%29.md) method to transfer files in the background. Use this method in cases where you want to send more than a dictionary of values. For example, use this method to send images or file-based documents.
- In iOS, use the [transferCurrentComplicationUserInfo(\_:)](wcsession/transfercurrentcomplicationuserinfo%28__%29.md) method to send data related to your Watch app’s complication. Use of this method counts against your complication’s time budget.

When sending messages to a counterpart, background messages are placed on a queue and transmitted in order. Incoming messages are similarly queued and delivered to the delegate in the order in which they were received. Data sent using the [sendMessage(\_:replyHandler:errorHandler:)](wcsession/sendmessage%28__replyhandler_errorhandler_%29.md), [sendMessageData(\_:replyHandler:errorHandler:)](wcsession/sendmessagedata%28__replyhandler_errorhandler_%29.md), and [transferCurrentComplicationUserInfo(\_:)](wcsession/transfercurrentcomplicationuserinfo%28__%29.md) methods has a higher priority and is transmitted right away. All messages received by your app are delivered to the session delegate serially on a background thread.

> **Note**

>  Remember that background transfers are not delivered immediately. The system sends data as quickly as possible but transfers are not instantaneous, and the system may delay transfers slightly to improve power usage. Also, sending a large data file requires a commensurate amount of time to transmit the data to the other device and process it on the receiving side.

When sending messages, send only the data that your app needs. All transfers involve sending data wireless to the counterpart app, which consumes power. Rather than sending all of your data every time, send only the items that have changed.

Be prepared to handle errors and provide a graceful fallback when data cannot be transferred. Errors can occur if there is insufficient space for the data on the target device, if the data itself is malformed, or if there is a communications error. Check for errors in your handler code and take appropriate actions.

## Topics

### Getting the Default Session

- [isSupported()](wcsession/issupported%28%29.md): Returns a Boolean value indicating whether the current iOS device is able to use a session object.
- [default](wcsession/default.md): Returns the singleton session object for the current device.

### Configuring the Session

- [delegate](wcsession/delegate.md): The delegate for the session object
- [activate()](wcsession/activate%28%29.md): Activates the session asynchronously.
- [activationState](wcsession/activationstate.md): The current activation state of the session.

### Getting the Paired Device Information

- [isPaired](wcsession/ispaired.md): A Boolean indicating whether the current iPhone has a paired Apple Watch.
- [iOSDeviceNeedsUnlockAfterRebootForReachability](wcsession/iosdeviceneedsunlockafterrebootforreachability.md): A Boolean value indicating whether the paired iPhone must be in an unlocked state to be reachable.
- [isWatchAppInstalled](wcsession/iswatchappinstalled.md): A Boolean value indicating whether the currently paired and active Apple Watch has installed the app.
- [isCompanionAppInstalled](wcsession/iscompanionappinstalled.md): A Boolean value indicating whether the companion has installed the app.
- [isComplicationEnabled](wcsession/iscomplicationenabled.md): A Boolean value indicating whether the Watch app’s complication is in use on the currently paired and active Apple Watch.
- [watchDirectoryURL](wcsession/watchdirectoryurl.md): A directory for storing information specific to the currently paired and active Apple Watch.

### Determining the Session’s Reachability

- [isReachable](wcsession/isreachable.md): A Boolean value indicating whether the counterpart app is available for live messaging.

### Managing Background Updates

- [updateApplicationContext(\_:)](wcsession/updateapplicationcontext%28__%29.md): Sends a dictionary of values that a paired and active device can use to synchronize its state.
- [applicationContext](wcsession/applicationcontext.md): The most recent contextual data sent to the paired and active device.
- [receivedApplicationContext](wcsession/receivedapplicationcontext.md): A dictionary containing the last update data received from a paired and active device.

### Sending Messages

- [sendMessage(\_:replyHandler:errorHandler:)](wcsession/sendmessage%28__replyhandler_errorhandler_%29.md): Sends a message immediately to the paired and active device and optionally handles a response.
- [sendMessageData(\_:replyHandler:errorHandler:)](wcsession/sendmessagedata%28__replyhandler_errorhandler_%29.md): Sends a data object immediately to the paired and active device and optionally handles a response.

### Updating Complication Data

- [remainingComplicationUserInfoTransfers](wcsession/remainingcomplicationuserinfotransfers.md): The number of remaining times you can send complication data from the iOS app to the WatchKit extension.
- [transferCurrentComplicationUserInfo(\_:)](wcsession/transfercurrentcomplicationuserinfo%28__%29.md): Sends complication-related data from the iOS app to the WatchKit extension.

### Transferring Data in the Background

- [transferUserInfo(\_:)](wcsession/transferuserinfo%28__%29.md): Sends the specified data dictionary to the counterpart.
- [outstandingUserInfoTransfers](wcsession/outstandinguserinfotransfers.md): An array of in-progress data transfers.

### Transferring Files in the Background

- [transferFile(\_:metadata:)](wcsession/transferfile%28__metadata_%29.md): Sends the specified file and optional dictionary to the counterpart.
- [outstandingFileTransfers](wcsession/outstandingfiletransfers.md): An array of in-progress file transfers.
- [hasContentPending](wcsession/hascontentpending.md): A Boolean value that indicates whether the session has more content to deliver.

### Constants

- [WCSessionActivationState](wcsessionactivationstate.md): Constants indicating the activation state of a session.
- [WCErrorDomain](wcerrordomain.md): The domain for errors associated with the Watch Connectivity framework.
- [WCError](wcerror.md): A structure that contains Watch Connectivity error information.
- [WCError.Code](wcerror/code.md): Constants for errors during a session.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Essentials

- [WCSessionDelegate](wcsessiondelegate.md): A delegate protocol that defines methods for receiving messages sent by a [WCSession](wcsession.md) object.

# WCSession (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 2.0+

The object that initiates communication between a WatchKit extension and its companion iOS app.

## Declaration

```objectivec
@interface WCSession : NSObject
```

<a id="overview"></a>

## Overview

Your iOS app and watchOS app must both create and configure an instance of this class at some point during their execution. When both session objects are active, the two processes can communicate immediately by sending messages back and forth. When only one session is active, the active session may still send updates and transfer files, but those transfers happen opportunistically in the background.

> **Important**

>  The session object must be configured and activated before you attempt to send messages or obtain information about the state of the connection. Before activating the session, you may call the [isSupported](wcsession/issupported%28%29.md) method to make sure that current device can use the Watch Connectivity framework.

<a id="Configuring-and-Activating-the-Session"></a>

### Configuring and Activating the Session

To configure and activate the session, assign a [delegate](wcsession/delegate.md) to the default session object and call that object’s [activateSession](wcsession/activate%28%29.md) method, as shown in code snippet below. Your WatchKit extension and iOS app must each configure their own session object. Activating the session establishes a connection between the two apps.

**Swift**

```swift
if WCSession.isSupported() {
   let session = WCSession.default
   session.delegate = self
   session.activate()
}
```

**Objective-C**

```objc
if ([WCSession isSupported]) {
    WCSession* session = [WCSession defaultSession];
    session.delegate = self;
    [session activate];
}
```

To support the pairing of multiple watches to the same iPhone, the session delegate of both your apps must implement the activation APIs. Implementing the [session:activationDidCompleteWithState:error:](wcsessiondelegate/session%28__activationdidcompletewith_error_%29.md) method lets the session know that your app supports asynchronous activation. Implementing the [sessionDidBecomeInactive:](wcsessiondelegate/sessiondidbecomeinactive%28__%29.md) and [sessionDidDeactivate:](wcsessiondelegate/sessiondiddeactivate%28__%29.md) methods in the session delegate of your iOS app is required to manage transitions between different Apple Watches.

> **Important**

>  If your delegate does not implement the appropriate methods for asynchronous activation and activation state changes, your app opts out of multiple Apple Watch support altogether. Opting out has important implications for your app when the user switches from one Apple Watch to another. When a switch occurs, your app’s session is deactivated. When your app subsequently moves to the background, the system terminates your app. (Background execution modes do not prevent the termination of your app.) The next time your app launches, it connects with the new Apple Watch.

Apps may initiate transfers only when the session is active—that is, the [activationState](wcsession/activationstate.md) is set to [WCSessionActivationStateActivated](wcsessionactivationstate/activated.md). Your iOS app should also check the [paired](wcsession/ispaired.md) and [watchAppInstalled](wcsession/iswatchappinstalled.md) properties before sending any background messages, and it may need to check other properties as needed. Most of the properties you need to check are valid only while the session is active. At other times, the values of the properties may be undefined. The [activationState](wcsession/activationstate.md) property is always valid and contains the current activation state of the session. For details, see the corresponding property description.

For more information about implementing the methods of the delegate object, see [WCSessionDelegate](wcsessiondelegate.md).

<a id="Supporting-Communication-with-Multiple-Apple-Watches"></a>

### Supporting Communication with Multiple Apple Watches

An iPhone running iOS 9.3 or later may pair with more than one Apple Watch running watchOS 2.2 or later. In your Watch app, you should support asynchronous activation of the session, but doing so is not required. In your iOS app, you must support asynchronous activation of the session and also monitor the activation and deactivation of the session object. You do this by implementing the following methods in your session delegate:

- [session:activationDidCompleteWithState:error:](wcsessiondelegate/session%28__activationdidcompletewith_error_%29.md)
- [sessionDidBecomeInactive:](wcsessiondelegate/sessiondidbecomeinactive%28__%29.md)
- [sessionDidDeactivate:](wcsessiondelegate/sessiondiddeactivate%28__%29.md)

[Figure 1](wcsession.md#1965795) shows the sequence of events that happen when the user switches from one Apple Watch to another. When automatic switching is enabled, only one Apple Watch at a time actually communicates with the iOS app. The Watch app on each watch stays in the active state, but the iOS app moves to the inactive and deactivated states during a switch. Moving to the inactive state gives the session a small amount of time to deliver any data that has already been received. As soon as that data is delivered, the session moves to the deactivated state. At that point, the iOS app must call the [activateSession](wcsession/activate%28%29.md) method again to connect to the newly active watch, which in this example is now the second Apple Watch.

![](https://developer.apple.com/images/com.apple.watchconnectivity/media-1965795@2x.png)

Your iOS app can use the [watchDirectoryURL](wcsession/watchdirectoryurl.md) property to store data that is specific to only one instance of your Watch app running on a particular Apple Watch. In most cases, the data you display in each instance of your Watch app is the same. However, you might use this directory to store configuration data, preferences, or other data files that your iOS app needs to interact properly with your Watch app. If you do, use the activation and deactivation process to update your iOS app.

For more information about handling session activation and deactivation, see [WCSessionDelegate](wcsessiondelegate.md).

<a id="Communicating-with-the-Counterpart-App"></a>

### Communicating with the Counterpart App

You may initiate data transfers to a counterpart app only when the [activationState](wcsession/activationstate.md) property is set to [WCSessionActivationStateActivated](wcsessionactivationstate/activated.md). The iOS app should ensure the Watch app is installed before trying to initiate transfers. You initiate transfers in any of the following ways:

- Use the [updateApplicationContext:error:](wcsession/updateapplicationcontext%28__%29.md) method to communicate recent state information to the counterpart. When the counterpart wakes, it can use this information to update its own state. For example, an iOS app that supports Background App Refresh can use part of its background execution time to update the corresponding Watch app. This method overwrites the previous data dictionary, so use this method when your app needs only the most recent data values.
- Use the [sendMessage:replyHandler:errorHandler:](wcsession/sendmessage%28__replyhandler_errorhandler_%29.md) or [sendMessageData:replyHandler:errorHandler:](wcsession/sendmessagedata%28__replyhandler_errorhandler_%29.md) method to transfer data to a reachable counterpart. These methods are intended for immediate communication between your iOS app and WatchKit extension. The [reachable](wcsession/isreachable.md) property must currently be [true](https://developer.apple.com/documentation/swift/true) for these methods to succeed.
- Use the [transferUserInfo:](wcsession/transferuserinfo%28__%29.md) method to transfer a dictionary of data in the background. The dictionaries you send are queued for delivery to the counterpart and transfers continue when the current app is suspended or terminated.
- Use the [transferFile:metadata:](wcsession/transferfile%28__metadata_%29.md) method to transfer files in the background. Use this method in cases where you want to send more than a dictionary of values. For example, use this method to send images or file-based documents.
- In iOS, use the [transferCurrentComplicationUserInfo:](wcsession/transfercurrentcomplicationuserinfo%28__%29.md) method to send data related to your Watch app’s complication. Use of this method counts against your complication’s time budget.

When sending messages to a counterpart, background messages are placed on a queue and transmitted in order. Incoming messages are similarly queued and delivered to the delegate in the order in which they were received. Data sent using the [sendMessage:replyHandler:errorHandler:](wcsession/sendmessage%28__replyhandler_errorhandler_%29.md), [sendMessageData:replyHandler:errorHandler:](wcsession/sendmessagedata%28__replyhandler_errorhandler_%29.md), and [transferCurrentComplicationUserInfo:](wcsession/transfercurrentcomplicationuserinfo%28__%29.md) methods has a higher priority and is transmitted right away. All messages received by your app are delivered to the session delegate serially on a background thread.

> **Note**

>  Remember that background transfers are not delivered immediately. The system sends data as quickly as possible but transfers are not instantaneous, and the system may delay transfers slightly to improve power usage. Also, sending a large data file requires a commensurate amount of time to transmit the data to the other device and process it on the receiving side.

When sending messages, send only the data that your app needs. All transfers involve sending data wireless to the counterpart app, which consumes power. Rather than sending all of your data every time, send only the items that have changed.

Be prepared to handle errors and provide a graceful fallback when data cannot be transferred. Errors can occur if there is insufficient space for the data on the target device, if the data itself is malformed, or if there is a communications error. Check for errors in your handler code and take appropriate actions.

## Topics

### Getting the Default Session

- [isSupported](wcsession/issupported%28%29.md): Returns a Boolean value indicating whether the current iOS device is able to use a session object.
- [defaultSession](wcsession/default.md): Returns the singleton session object for the current device.

### Configuring the Session

- [delegate](wcsession/delegate.md): The delegate for the session object
- [activateSession](wcsession/activate%28%29.md): Activates the session asynchronously.
- [activationState](wcsession/activationstate.md): The current activation state of the session.

### Getting the Paired Device Information

- [paired](wcsession/ispaired.md): A Boolean indicating whether the current iPhone has a paired Apple Watch.
- [iOSDeviceNeedsUnlockAfterRebootForReachability](wcsession/iosdeviceneedsunlockafterrebootforreachability.md): A Boolean value indicating whether the paired iPhone must be in an unlocked state to be reachable.
- [watchAppInstalled](wcsession/iswatchappinstalled.md): A Boolean value indicating whether the currently paired and active Apple Watch has installed the app.
- [companionAppInstalled](wcsession/iscompanionappinstalled.md): A Boolean value indicating whether the companion has installed the app.
- [complicationEnabled](wcsession/iscomplicationenabled.md): A Boolean value indicating whether the Watch app’s complication is in use on the currently paired and active Apple Watch.
- [watchDirectoryURL](wcsession/watchdirectoryurl.md): A directory for storing information specific to the currently paired and active Apple Watch.

### Determining the Session’s Reachability

- [reachable](wcsession/isreachable.md): A Boolean value indicating whether the counterpart app is available for live messaging.

### Managing Background Updates

- [updateApplicationContext:error:](wcsession/updateapplicationcontext%28__%29.md): Sends a dictionary of values that a paired and active device can use to synchronize its state.
- [applicationContext](wcsession/applicationcontext.md): The most recent contextual data sent to the paired and active device.
- [receivedApplicationContext](wcsession/receivedapplicationcontext.md): A dictionary containing the last update data received from a paired and active device.

### Sending Messages

- [sendMessage:replyHandler:errorHandler:](wcsession/sendmessage%28__replyhandler_errorhandler_%29.md): Sends a message immediately to the paired and active device and optionally handles a response.
- [sendMessageData:replyHandler:errorHandler:](wcsession/sendmessagedata%28__replyhandler_errorhandler_%29.md): Sends a data object immediately to the paired and active device and optionally handles a response.

### Updating Complication Data

- [remainingComplicationUserInfoTransfers](wcsession/remainingcomplicationuserinfotransfers.md): The number of remaining times you can send complication data from the iOS app to the WatchKit extension.
- [transferCurrentComplicationUserInfo:](wcsession/transfercurrentcomplicationuserinfo%28__%29.md): Sends complication-related data from the iOS app to the WatchKit extension.

### Transferring Data in the Background

- [transferUserInfo:](wcsession/transferuserinfo%28__%29.md): Sends the specified data dictionary to the counterpart.
- [outstandingUserInfoTransfers](wcsession/outstandinguserinfotransfers.md): An array of in-progress data transfers.

### Transferring Files in the Background

- [transferFile:metadata:](wcsession/transferfile%28__metadata_%29.md): Sends the specified file and optional dictionary to the counterpart.
- [outstandingFileTransfers](wcsession/outstandingfiletransfers.md): An array of in-progress file transfers.
- [hasContentPending](wcsession/hascontentpending.md): A Boolean value that indicates whether the session has more content to deliver.

### Constants

- [WCSessionActivationState](wcsessionactivationstate.md): Constants indicating the activation state of a session.
- [WCErrorDomain](wcerrordomain.md): The domain for errors associated with the Watch Connectivity framework.
- [WCErrorCode](wcerror/code.md): Constants for errors during a session.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Essentials

- [WCSessionDelegate](wcsessiondelegate.md): A delegate protocol that defines methods for receiving messages sent by a [WCSession](wcsession.md) object.
