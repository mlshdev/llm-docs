> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/making-network-requests-in-a-widget-extension](https://developer.apple.com/documentation/widgetkit/making-network-requests-in-a-widget-extension)

# Making network requests in a widget extension (Swift)

**Framework:** WidgetKit  
**Kind:** Article

Update your widget with new information you fetch with a network request.

<a id="Overview"></a>

## Overview

Widgets use a timeline mechanism to update their content. In addition to providing a timeline with new local data, you can initiate a network request that provides updated information for your widget from your server. Network requests are possible while the widget extension is active, such as when it provides a snapshot, or a new timeline. For example, the Emoji Rangers widget of the [Emoji Rangers: Supporting Live Activities, interactivity, and animations](emoji-rangers-supporting-live-activities-interactivity-and-animations.md) sample code project loads updated leaderboard data in its [getTimeline(in:completion:)](timelineprovider/gettimeline%28in_completion_%29.md) implementation.

In general, making a network request from a widget extension is similar to making a network request in your app: you can initiate inline or background requests. However, widgets can only access limited resources and a request may not have enough time to complete before the system halts the widget extension. To update a widget with data from your server, use background requests similar to the process described in [Downloading files in the background](../foundation/downloading-files-in-the-background.md).

<a id="Load-data-with-a-background-network-request"></a>

### Load data with a background network request

When a widget initiates a background network request, the system delivers events related to the request directly to the widget extension instead of the containing app. To process them, do the following:

1. Add the [onBackgroundURLSessionEvents(matching:\_:)](https://developer.apple.com/documentation/swiftui/widgetconfiguration/onbackgroundurlsessionevents%28matching:_:%29-fw6x) modifier to your [WidgetConfiguration](https://developer.apple.com/documentation/swiftui/widgetconfiguration) implementation.
2. Maintain a reference to the [URLSession](../foundation/urlsession.md) object of your background network request.
3. Keep a reference to the `matching` parameter to identify the session.
4. Store a reference to the `onBackgroundURLSessionEvents(matching:_:)` modifier’s completion handler. You’ll invoke it after the system delivers all events for the network request.

If the system terminates your widget extension before all events complete, use the stored `matching` identifier to check if a corresponding [URLSession](../foundation/urlsession.md) object exists. If no session object exists, create a new session using the identifier.

> **Tip**

> Consider initializing URLSession objects lazily and caching them in a central location so that your code works regardless of whether your extension remains active, is suspended, or is terminated.

<a id="Update-your-widget-after-background-network-requests-complete"></a>

### Update your widget after background network requests complete

After invoking [onBackgroundURLSessionEvents(matching:\_:)](https://developer.apple.com/documentation/swiftui/widgetconfiguration/onbackgroundurlsessionevents%28matching:_:%29-fw6x), the system calls the [urlSession(\_:downloadTask:didFinishDownloadingTo:)](../foundation/urlsessiondownloaddelegate/urlsession%28__downloadtask_didfinishdownloadingto_%29.md) method of the [URLSessionDelegate](../foundation/urlsessiondelegate.md) you supplied to the [URLSession](../foundation/urlsession.md). When the system has delivered all events, it calls the delegate’s [urlSessionDidFinishEvents(forBackgroundURLSession:)](../foundation/urlsessiondelegate/urlsessiondidfinishevents%28forbackgroundurlsession_%29.md) method.

To refresh your widget’s timeline after the network request completes, call the needed [WidgetCenter](widgetcenter.md) methods from your implementation of `SessionDidFinishEvents(forBackgroundURLSession:)`. Once you finish handling the events, call the completion handler of `onBackgroundURLSessionEvents(matching:_:)` that you previously stored.

## See Also

### Capabilities

- [Accessing location information in widgets](accessing-location-information-in-widgets.md): Incorporate location information into your widget presentation to make it more relevant and contextual.

# Making network requests in a widget extension (Objective-C)

**Framework:** WidgetKit  
**Kind:** Article

Update your widget with new information you fetch with a network request.

<a id="Overview"></a>

## Overview

Widgets use a timeline mechanism to update their content. In addition to providing a timeline with new local data, you can initiate a network request that provides updated information for your widget from your server. Network requests are possible while the widget extension is active, such as when it provides a snapshot, or a new timeline. For example, the Emoji Rangers widget of the [Emoji Rangers: Supporting Live Activities, interactivity, and animations](emoji-rangers-supporting-live-activities-interactivity-and-animations.md) sample code project loads updated leaderboard data in its [getTimeline(in:completion:)](timelineprovider/gettimeline%28in_completion_%29.md) implementation.

In general, making a network request from a widget extension is similar to making a network request in your app: you can initiate inline or background requests. However, widgets can only access limited resources and a request may not have enough time to complete before the system halts the widget extension. To update a widget with data from your server, use background requests similar to the process described in [Downloading files in the background](../foundation/downloading-files-in-the-background.md).

<a id="Load-data-with-a-background-network-request"></a>

### Load data with a background network request

When a widget initiates a background network request, the system delivers events related to the request directly to the widget extension instead of the containing app. To process them, do the following:

1. Add the [onBackgroundURLSessionEvents(matching:\_:)](https://developer.apple.com/documentation/swiftui/widgetconfiguration/onbackgroundurlsessionevents%28matching:_:%29-fw6x) modifier to your [WidgetConfiguration](https://developer.apple.com/documentation/swiftui/widgetconfiguration) implementation.
2. Maintain a reference to the [NSURLSession](../foundation/urlsession.md) object of your background network request.
3. Keep a reference to the `matching` parameter to identify the session.
4. Store a reference to the `onBackgroundURLSessionEvents(matching:_:)` modifier’s completion handler. You’ll invoke it after the system delivers all events for the network request.

If the system terminates your widget extension before all events complete, use the stored `matching` identifier to check if a corresponding [NSURLSession](../foundation/urlsession.md) object exists. If no session object exists, create a new session using the identifier.

> **Tip**

> Consider initializing URLSession objects lazily and caching them in a central location so that your code works regardless of whether your extension remains active, is suspended, or is terminated.

<a id="Update-your-widget-after-background-network-requests-complete"></a>

### Update your widget after background network requests complete

After invoking [onBackgroundURLSessionEvents(matching:\_:)](https://developer.apple.com/documentation/swiftui/widgetconfiguration/onbackgroundurlsessionevents%28matching:_:%29-fw6x), the system calls the [URLSession:downloadTask:didFinishDownloadingToURL:](../foundation/urlsessiondownloaddelegate/urlsession%28__downloadtask_didfinishdownloadingto_%29.md) method of the [NSURLSessionDelegate](../foundation/urlsessiondelegate.md) you supplied to the [NSURLSession](../foundation/urlsession.md). When the system has delivered all events, it calls the delegate’s [URLSessionDidFinishEventsForBackgroundURLSession:](../foundation/urlsessiondelegate/urlsessiondidfinishevents%28forbackgroundurlsession_%29.md) method.

To refresh your widget’s timeline after the network request completes, call the needed [WidgetCenter](widgetcenter.md) methods from your implementation of `SessionDidFinishEvents(forBackgroundURLSession:)`. Once you finish handling the events, call the completion handler of `onBackgroundURLSessionEvents(matching:_:)` that you previously stored.

## See Also

### Capabilities

- [Accessing location information in widgets](accessing-location-information-in-widgets.md): Incorporate location information into your widget presentation to make it more relevant and contextual.
