> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/backgroundtask](https://developer.apple.com/documentation/swiftui/backgroundtask)

# BackgroundTask

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The kinds of background tasks that your app or extension can handle.

## Declaration

```swift
struct BackgroundTask<Request, Response>
```

<a id="overview"></a>

## Overview

Use a value of this type with the [backgroundTask(\_:action:)](scene/backgroundtask%28__action_%29.md) scene modifier to create a handler for background tasks that the system sends to your app or extension. For example, you can use [urlSession](backgroundtask/urlsession.md) to define an asynchronous closure that the system calls when it launches your app or extension to handle a response from a background [URLSession](https://developer.apple.com/documentation/foundation/urlsession).

## Topics

### Refreshing the app

- [appRefresh(\_:)](backgroundtask/apprefresh%28__%29.md): A task that updates your app’s state in the background for a matching identifier.

### Receiving connectivity updates

- [bluetoothAlert](backgroundtask/bluetoothalert.md): A background task used to receive critical alerts from paired bluetooth accessories.
- [watchConnectivity](backgroundtask/watchconnectivity.md): A background task used to receive background updates from the Watch Connectivity framework.

### Responding to URL sessions

- [urlSession](backgroundtask/urlsession.md): A task that responds to background URL sessions.
- [urlSession(\_:)](backgroundtask/urlsession%28__%29.md): A task that responds to background URL sessions matching the given identifier.
- [urlSession(matching:)](backgroundtask/urlsession%28matching_%29.md): A task that responds to background URL sessions matching the given predicate.

### Updating intents and shortcuts

- [intentDidRun](backgroundtask/intentdidrun.md): A background task used to update your app after a SiriKit intent runs.
- [relevantShortcut](backgroundtask/relevantshortcut.md): A background task used to periodically donate relevant Siri shortcuts.

### Processing tasks

- [processingTask(\_:)](backgroundtask/processingtask%28__%29.md): A task that processes tasks in the background.

### Deprecated symbols

- [appRefresh](backgroundtask/apprefresh.md): Deprecated. A task that updates your app’s state in the background.
- [snapshot](backgroundtask/snapshot.md): A background task used to update your app’s user interface in preparation for a snapshot.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling background tasks

- [backgroundTask(\_:action:)](scene/backgroundtask%28__action_%29.md): Runs the specified action when the system provides a background task.
- [SnapshotData](snapshotdata.md): The associated data of a snapshot background task.
- [SnapshotResponse](snapshotresponse.md): Your application’s response to a snapshot background task.
