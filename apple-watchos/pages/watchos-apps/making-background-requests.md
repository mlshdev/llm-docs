> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchos-apps/making-background-requests](https://developer.apple.com/documentation/watchos-apps/making-background-requests)

# Making background requests

**Kind:** Article

Send requests from your app when it’s running in the background.

<a id="Overview"></a>

## Overview

Use background requests when your app is running in the background or about to become inactive.

To create a background session:

1. Create a background configuration by calling the [backgroundSessionConfiguration(\_:)](https://developer.apple.com/documentation/foundation/urlsessionconfiguration/backgroundsessionconfiguration%28_:%29) method on the [URLSessionConfiguration](https://developer.apple.com/documentation/foundation/urlsessionconfiguration) class.
2. Create a background session by calling the [URLSession](https://developer.apple.com/documentation/foundation/urlsession) class’s [init(configuration:delegate:delegateQueue:)](https://developer.apple.com/documentation/foundation/urlsession/init%28configuration:delegate:delegatequeue:%29) initializer, passing both the background configuration and a session delegate. Background sessions must have a session delegate.
3. Create a task to download data by calling the session object’s [downloadTask(with:)](https://developer.apple.com/documentation/foundation/urlsession/downloadtask%28with:%29-1onj) method.
4. Start the task by calling its [resume()](https://developer.apple.com/documentation/foundation/urlsessiontask/resume%28%29) method.
5. Implement your WatchKit extension delegate’s [handle(\_:)](../watchkit/wkextensiondelegate/handle%28__%29-92ulv.md) method to respond to (and complete) the WatchKit background task. For more information, see [WKURLSessionRefreshBackgroundTask](../watchkit/wkurlsessionrefreshbackgroundtask.md).
6. Implement the session delegate’s methods to receive data and notifications from the session. For more information, see [URLSessionDelegate](https://developer.apple.com/documentation/foundation/urlsessiondelegate).

Unlike default and ephemeral sessions, a background session persists even if your watchOS app closes. If your app is still the frontmost app, the system wakes your app as soon as it receives a response. Otherwise, the system may defer delivering the response to your app, based on system resources. If the response hasn’t been delivered yet, it’s delivered the next time your app becomes active.

Background sessions may be deferred based on the system’s state, network connectivity, and other issues. When making a background request, smaller transfers are better.

For more information on working with WatchKit background tasks, see [Background execution](../watchkit/background-execution.md).

## See Also

### Network requests

- [Making default and ephemeral requests](making-default-and-ephemeral-requests.md): Send requests from your app when it’s running in the foreground.
