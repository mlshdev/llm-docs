> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkurlsessionrefreshbackgroundtask](https://developer.apple.com/documentation/watchkit/wkurlsessionrefreshbackgroundtask)

# WKURLSessionRefreshBackgroundTask (Swift)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 3.0+

A task that responds to background URL sessions.

## Declaration

```swift
class WKURLSessionRefreshBackgroundTask
```

## Mentioned In

- [Using background tasks](using-background-tasks.md)

<a id="overview"></a>

## Overview

Always upload and download data using a [URLSession](https://developer.apple.com/documentation/foundation/urlsession) background transfer. Background transfers occur in a separate process and continue to transfer data even after your app terminates. Asynchronous uploads and downloads, on the other hand, suspend with your app. Because watchOS apps have a short runtime, you can’t guarantee that an asynchronous transfer finishes before the app suspends. For more information on background transfers, see [Downloading files in the background](https://developer.apple.com/documentation/foundation/downloading-files-in-the-background).

Schedule a background URL session to download an item as shown below.

```swift
// Create a background session configuration.
let config = URLSessionConfiguration.background(withIdentifier: myRequestID)
config.isDiscretionary = true
config.sessionSendsLaunchEvents = true

// Create the background download task and schedule it to run in 15 minutes.
let urlSession = URLSession(configuration: config,
                            delegate: self,
                            delegateQueue: nil)

let backgroundTask = urlSession.downloadTask(with: url)
backgroundTask.earliestBeginDate = Date().addingTimeInterval(15 * 60)

// Run the task.
backgroundTask.resume()
```

If your app has a complication on the active watch face, it can receive up to four [WKURLSessionRefreshBackgroundTask](wkurlsessionrefreshbackgroundtask.md) tasks per hour. To avoid throttling, use the [earliestBeginDate](https://developer.apple.com/documentation/foundation/urlsessiontask/earliestbegindate) property to schedule background URL session tasks no closer than 15 minutes apart.

Don’t subclass or create instances of this class. Instead, the system instantiates a [WKURLSessionRefreshBackgroundTask](wkurlsessionrefreshbackgroundtask.md) object and passes the task object to your extension delegate’s [handle(\_:)](wkapplicationdelegate/handle%28__%29-4vdjo.md) method in response to [URLSession](https://developer.apple.com/documentation/foundation/urlsession) events. Defer calling the background [URLSession](https://developer.apple.com/documentation/foundation/urlsession) task’s `setTaskCompleted()` method until all the delegate method calls finish processing.

> **Note**

>  In watchOS 9 and later, SwiftUI Background tasks are the preferred way to handle background tasks and interactions. For more information, [backgroundTask(\_:action:)](https://developer.apple.com/documentation/swiftui/scene/backgroundtask%28_:action:%29).

The system creates a background [URLSession](https://developer.apple.com/documentation/foundation/urlsession) task when any of the following events occur:

- The server requires authentication to complete a background transfer.
- All background transfers associated with a session identifier complete (either successfully or unsuccessfully).

To get more information about the transfer, create a background configuration object with the same session identifier. Next, create a session object using the configuration object and a session delegate. The system automatically associates the new session with the transfer and calls the appropriate delegate methods.

## Topics

### Accessing background task data

- [sessionIdentifier](wkurlsessionrefreshbackgroundtask/sessionidentifier.md): The identifier for the triggering background transfer.

## Relationships

### Inherits From

- [WKRefreshBackgroundTask](wkrefreshbackgroundtask.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Background tasks

- [Using background tasks](using-background-tasks.md): Handle scheduled update tasks in the background, and respond to background system interactions including Siri intents and incoming Bluetooth messages.
- [Preparing to take your watchOS app’s snapshot](preparing-to-take-your-watchos-app-s-snapshot.md): Provide a timely, accurate snapshot of your app by using snapshot background tasks.
- [WKApplicationRefreshBackgroundTask](wkapplicationrefreshbackgroundtask.md): A task that updates your app’s state in the background.
- [WKWatchConnectivityRefreshBackgroundTask](wkwatchconnectivityrefreshbackgroundtask.md): A background task used to receive background updates from the Watch Connectivity framework.
- [WKBluetoothAlertRefreshBackgroundTask](wkbluetoothalertrefreshbackgroundtask.md): A task for handling timely Bluetooth alerts in the background.
- [WKIntentDidRunRefreshBackgroundTask](wkintentdidrunrefreshbackgroundtask.md): A background task used to update your app after a SiriKit intent runs.
- [WKRelevantShortcutRefreshBackgroundTask](wkrelevantshortcutrefreshbackgroundtask.md): A background task used to periodically donate relevant Siri shortcuts.
- [WKSnapshotRefreshBackgroundTask](wksnapshotrefreshbackgroundtask.md): A background task used to update your app’s user interface in preparation for a snapshot.
- [WKRefreshBackgroundTask](wkrefreshbackgroundtask.md): The abstract superclass for WatchKit’s background task classes.

# WKURLSessionRefreshBackgroundTask (Objective-C)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 3.0+

A task that responds to background URL sessions.

## Declaration

```objectivec
@interface WKURLSessionRefreshBackgroundTask : WKRefreshBackgroundTask
```

## Mentioned In

- [Using background tasks](using-background-tasks.md)

<a id="overview"></a>

## Overview

Always upload and download data using a [NSURLSession](https://developer.apple.com/documentation/foundation/urlsession) background transfer. Background transfers occur in a separate process and continue to transfer data even after your app terminates. Asynchronous uploads and downloads, on the other hand, suspend with your app. Because watchOS apps have a short runtime, you can’t guarantee that an asynchronous transfer finishes before the app suspends. For more information on background transfers, see [Downloading files in the background](https://developer.apple.com/documentation/foundation/downloading-files-in-the-background).

Schedule a background URL session to download an item as shown below.

```swift
// Create a background session configuration.
let config = URLSessionConfiguration.background(withIdentifier: myRequestID)
config.isDiscretionary = true
config.sessionSendsLaunchEvents = true

// Create the background download task and schedule it to run in 15 minutes.
let urlSession = URLSession(configuration: config,
                            delegate: self,
                            delegateQueue: nil)

let backgroundTask = urlSession.downloadTask(with: url)
backgroundTask.earliestBeginDate = Date().addingTimeInterval(15 * 60)

// Run the task.
backgroundTask.resume()
```

If your app has a complication on the active watch face, it can receive up to four [WKURLSessionRefreshBackgroundTask](wkurlsessionrefreshbackgroundtask.md) tasks per hour. To avoid throttling, use the [earliestBeginDate](https://developer.apple.com/documentation/foundation/urlsessiontask/earliestbegindate) property to schedule background URL session tasks no closer than 15 minutes apart.

Don’t subclass or create instances of this class. Instead, the system instantiates a [WKURLSessionRefreshBackgroundTask](wkurlsessionrefreshbackgroundtask.md) object and passes the task object to your extension delegate’s [handleBackgroundTasks:](wkapplicationdelegate/handle%28__%29-4vdjo.md) method in response to [NSURLSession](https://developer.apple.com/documentation/foundation/urlsession) events. Defer calling the background [NSURLSession](https://developer.apple.com/documentation/foundation/urlsession) task’s `setTaskCompleted()` method until all the delegate method calls finish processing.

> **Note**

>  In watchOS 9 and later, SwiftUI Background tasks are the preferred way to handle background tasks and interactions. For more information, [backgroundTask(\_:action:)](https://developer.apple.com/documentation/swiftui/scene/backgroundtask%28_:action:%29).

The system creates a background [NSURLSession](https://developer.apple.com/documentation/foundation/urlsession) task when any of the following events occur:

- The server requires authentication to complete a background transfer.
- All background transfers associated with a session identifier complete (either successfully or unsuccessfully).

To get more information about the transfer, create a background configuration object with the same session identifier. Next, create a session object using the configuration object and a session delegate. The system automatically associates the new session with the transfer and calls the appropriate delegate methods.

## Topics

### Accessing background task data

- [sessionIdentifier](wkurlsessionrefreshbackgroundtask/sessionidentifier.md): The identifier for the triggering background transfer.

## Relationships

### Inherits From

- [WKRefreshBackgroundTask](wkrefreshbackgroundtask.md)

## See Also

### Background tasks

- [Using background tasks](using-background-tasks.md): Handle scheduled update tasks in the background, and respond to background system interactions including Siri intents and incoming Bluetooth messages.
- [Preparing to take your watchOS app’s snapshot](preparing-to-take-your-watchos-app-s-snapshot.md): Provide a timely, accurate snapshot of your app by using snapshot background tasks.
- [WKApplicationRefreshBackgroundTask](wkapplicationrefreshbackgroundtask.md): A task that updates your app’s state in the background.
- [WKWatchConnectivityRefreshBackgroundTask](wkwatchconnectivityrefreshbackgroundtask.md): A background task used to receive background updates from the Watch Connectivity framework.
- [WKBluetoothAlertRefreshBackgroundTask](wkbluetoothalertrefreshbackgroundtask.md): A task for handling timely Bluetooth alerts in the background.
- [WKIntentDidRunRefreshBackgroundTask](wkintentdidrunrefreshbackgroundtask.md): A background task used to update your app after a SiriKit intent runs.
- [WKRelevantShortcutRefreshBackgroundTask](wkrelevantshortcutrefreshbackgroundtask.md): A background task used to periodically donate relevant Siri shortcuts.
- [WKSnapshotRefreshBackgroundTask](wksnapshotrefreshbackgroundtask.md): A background task used to update your app’s user interface in preparation for a snapshot.
- [WKRefreshBackgroundTask](wkrefreshbackgroundtask.md): The abstract superclass for WatchKit’s background task classes.
