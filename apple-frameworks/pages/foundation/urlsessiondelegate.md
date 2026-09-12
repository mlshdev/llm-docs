> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiondelegate](https://developer.apple.com/documentation/foundation/urlsessiondelegate)

# URLSessionDelegate (Swift)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A protocol that defines methods that URL session instances call on their delegates to handle session-level events, like session life cycle changes.

## Declaration

```swift
protocol URLSessionDelegate : NSObjectProtocol, Sendable
```

## Mentioned In

- [Fetching website data into memory](fetching-website-data-into-memory.md)
- [Performing manual server trust authentication](performing-manual-server-trust-authentication.md)
- [Downloading files in the background](downloading-files-in-the-background.md)
- [Uploading data to a website](uploading-data-to-a-website.md)

<a id="overview"></a>

## Overview

In addition to the methods defined in this protocol, most delegates should also implement some or all of the methods in the [URLSessionTaskDelegate](urlsessiontaskdelegate.md), [URLSessionDataDelegate](urlsessiondatadelegate.md), and [URLSessionDownloadDelegate](urlsessiondownloaddelegate.md) protocols to handle task-level events. These include events like the beginning and end of individual tasks, and periodic progress updates from data or download tasks.

> **Note**

>  Your [URLSession](urlsession.md) object doesn’t need to have a delegate. If no delegate is assigned, a system-provided delegate is used, and you must provide a completion callback to obtain the data.

## Topics

### Handling session life cycle changes

- [urlSession(\_:didBecomeInvalidWithError:)](urlsessiondelegate/urlsession%28__didbecomeinvalidwitherror_%29.md): Tells the URL session that the session has been invalidated.
- [urlSessionDidFinishEvents(forBackgroundURLSession:)](urlsessiondelegate/urlsessiondidfinishevents%28forbackgroundurlsession_%29.md): Tells the delegate that all messages enqueued for a session have been delivered.

### Handling authentication challenges

- [urlSession(\_:didReceive:completionHandler:)](urlsessiondelegate/urlsession%28__didreceive_completionhandler_%29.md): Requests credentials from the delegate in response to a session-level authentication request from the remote server.
- [URLSession.AuthChallengeDisposition](urlsession/authchallengedisposition.md): Constants passed by session or task delegates to the provided continuation block in response to an authentication challenge.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Inherited By

- [URLSessionDataDelegate](urlsessiondatadelegate.md)
- [URLSessionDownloadDelegate](urlsessiondownloaddelegate.md)
- [URLSessionStreamDelegate](urlsessionstreamdelegate.md)
- [URLSessionTaskDelegate](urlsessiontaskdelegate.md)
- [URLSessionWebSocketDelegate](urlsessionwebsocketdelegate.md)

## See Also

### Working with a delegate

- [delegate](urlsession/delegate.md): The delegate assigned when this object was created.
- [URLSessionTaskDelegate](urlsessiontaskdelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events.
- [delegateQueue](urlsession/delegatequeue.md): The operation queue provided when this object was created.

# NSURLSessionDelegate (Objective-C)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A protocol that defines methods that URL session instances call on their delegates to handle session-level events, like session life cycle changes.

## Declaration

```objectivec
@protocol NSURLSessionDelegate <NSObject>
```

## Mentioned In

- [Fetching website data into memory](fetching-website-data-into-memory.md)
- [Performing manual server trust authentication](performing-manual-server-trust-authentication.md)
- [Downloading files in the background](downloading-files-in-the-background.md)
- [Uploading data to a website](uploading-data-to-a-website.md)

<a id="overview"></a>

## Overview

In addition to the methods defined in this protocol, most delegates should also implement some or all of the methods in the [NSURLSessionTaskDelegate](urlsessiontaskdelegate.md), [NSURLSessionDataDelegate](urlsessiondatadelegate.md), and [NSURLSessionDownloadDelegate](urlsessiondownloaddelegate.md) protocols to handle task-level events. These include events like the beginning and end of individual tasks, and periodic progress updates from data or download tasks.

> **Note**

>  Your [NSURLSession](urlsession.md) object doesn’t need to have a delegate. If no delegate is assigned, a system-provided delegate is used, and you must provide a completion callback to obtain the data.

## Topics

### Handling session life cycle changes

- [URLSession:didBecomeInvalidWithError:](urlsessiondelegate/urlsession%28__didbecomeinvalidwitherror_%29.md): Tells the URL session that the session has been invalidated.
- [URLSessionDidFinishEventsForBackgroundURLSession:](urlsessiondelegate/urlsessiondidfinishevents%28forbackgroundurlsession_%29.md): Tells the delegate that all messages enqueued for a session have been delivered.

### Handling authentication challenges

- [URLSession:didReceiveChallenge:completionHandler:](urlsessiondelegate/urlsession%28__didreceive_completionhandler_%29.md): Requests credentials from the delegate in response to a session-level authentication request from the remote server.
- [NSURLSessionAuthChallengeDisposition](urlsession/authchallengedisposition.md): Constants passed by session or task delegates to the provided continuation block in response to an authentication challenge.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [NSURLSessionTaskDelegate](urlsessiontaskdelegate.md)

## See Also

### Working with a delegate

- [delegate](urlsession/delegate.md): The delegate assigned when this object was created.
- [NSURLSessionTaskDelegate](urlsessiontaskdelegate.md): A protocol that defines methods that URL session instances call on their delegates to handle task-level events.
- [delegateQueue](urlsession/delegatequeue.md): The operation queue provided when this object was created.
