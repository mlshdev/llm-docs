> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlconnection](https://developer.apple.com/documentation/foundation/nsurlconnection)

# NSURLConnection (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that enables you to start and stop URL requests.

## Declaration

```swift
class NSURLConnection
```

<a id="overview"></a>

## Overview

> **Important**

>  This API is considered legacy. Use [URLSession](urlsession.md) instead.

An `NSURLConnection` object lets you load the contents of a URL by providing a URL request object. The interface for `NSURLConnection` is sparse, providing only the controls to start and cancel asynchronous loads of a URL request. You perform most of your configuration on the URL request object itself.

> **Note**

>  Although instances of this class are commonly called “connections”, there is not a 1:1 correlation between these objects and the underlying network connections.

The `NSURLConnection` class provides convenience class methods to load URL requests both asynchronously using a callback block and synchronously.

For greater control, you can create a URL connection object with a delegate object that conforms to the [NSURLConnectionDelegate](nsurlconnectiondelegate.md) and [NSURLConnectionDataDelegate](nsurlconnectiondatadelegate.md) protocols. The connection calls methods on that delegate to provide you with progress and status as the URL request is loaded asynchronously. The connection also calls delegate methods to let you override the connection’s default behavior (for example, specifying how a particular redirect should be handled). These delegate methods are called on the thread that initiated the asynchronous load operation.

> **Note**

>  During a request, the connection maintains a strong reference to its delegate. It releases that strong reference when the connection finishes loading, fails, or is canceled.

For more information about errors, see the `NSURLError.h` header, [Foundation Constants](foundation-constants.md), and URL Loading System Error Codes in [Error Handling Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ErrorHandlingCocoa/ErrorHandling/ErrorHandling.html#//apple_ref/doc/uid/TP40001806).

<a id="NSURLConnection-Protocols"></a>

### NSURLConnection Protocols

The `NSURLConnection` class works in tandem with three formal protocols: [NSURLConnectionDelegate](nsurlconnectiondelegate.md), [NSURLConnectionDataDelegate](nsurlconnectiondatadelegate.md), and [NSURLConnectionDownloadDelegate](nsurlconnectiondownloaddelegate.md). To use these protocols, you write a class that conforms to them and implement any methods that are appropriate, then provide an instance of that class as the delegate when you create a connection object.

The [NSURLConnectionDelegate](nsurlconnectiondelegate.md) protocol is primarily used for credential handling, but also handles connection completion. Because it handles connection failure during data transfers, all connection delegates must typically implement this protocol.

In addition, unless you’re using Newsstand Kit, your delegate must also conform to the [NSURLConnectionDataDelegate](nsurlconnectiondatadelegate.md) protocol, because this protocol provides methods that the `NSURLConnection` class calls with progress information during an upload, with fragments of the response data during a download, and to provide a new upload body stream if the server’s response necessitates a second connection attempt—for example, if `NSURLConnection` must retry the request with different credentials.

Finally, if you’re using Newsstand Kit, your delegate can conform to the [NSURLConnectionDownloadDelegate](nsurlconnectiondownloaddelegate.md) protocol. This protocol provides support for continuing interrupted file downloads and receiving a notification whenever a download finishes. This protocol is solely for use with `NSURLConnection` objects created using Newsstand Kit’s `download(with:)` method.

> **Note**

>  Some methods in these protocols were previously part of other formal protocols or were previously part of an informal protocol on `NSObject`.

## Topics

### Preflighting a Connection Request

- [canHandle(\_:)](nsurlconnection/canhandle%28__%29.md): Returns whether a request can be handled based on a preflight evaluation.

### Connection URL Information

- [originalRequest](nsurlconnection/originalrequest.md): A deep copy of the original connection request.
- [currentRequest](nsurlconnection/currentrequest.md): The current connection request.

### Loading Data Synchronously

- [sendSynchronousRequest(\_:returning:)](nsurlconnection/sendsynchronousrequest%28__returning_%29.md): Deprecated. Performs a synchronous load of the specified URL request.

### Loading Data Asynchronously

- [init(request:delegate:)](nsurlconnection/init%28request_delegate_%29.md): Deprecated. Returns an initialized URL connection and begins to load the data for the URL request.
- [init(request:delegate:startImmediately:)](nsurlconnection/init%28request_delegate_startimmediately_%29.md): Deprecated. Returns an initialized URL connection and begins to load the data for the URL request, if specified.
- [sendAsynchronousRequest(\_:queue:completionHandler:)](nsurlconnection/sendasynchronousrequest%28__queue_completionhandler_%29.md): Deprecated. Loads the data for a URL request and executes a handler block on an operation queue when the request completes or fails.
- [start()](nsurlconnection/start%28%29.md): Causes the connection to begin loading data, if it has not already.

### Stopping a Connection

- [cancel()](nsurlconnection/cancel%28%29.md): Cancels an asynchronous load of a request.

### Scheduling Delegate Method Calls

- [schedule(in:forMode:)](nsurlconnection/schedule%28in_formode_%29.md): Determines the run loop and mode that the connection uses to call methods on its delegate.
- [setDelegateQueue(\_:)](nsurlconnection/setdelegatequeue%28__%29.md): Determines the operation queue that is used to call methods on the connection’s delegate.
- [unschedule(from:forMode:)](nsurlconnection/unschedule%28from_formode_%29.md): Causes the connection to stop calling delegate methods in the specified run loop and mode.

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

### URL Connection

- [NSURLConnectionDelegate](nsurlconnectiondelegate.md): A protocol that delegates of a URL connection implement to receive status about and provide feedback to the connection object.
- [NSURLConnectionDataDelegate](nsurlconnectiondatadelegate.md): A protocol that most delegates of a URL connection implement to receive data associated with the connection.
- [NSURLConnectionDownloadDelegate](nsurlconnectiondownloaddelegate.md): A protocol that delegates of a URL connection created with Newsstand Kit implement to receive data associated with a download.

# NSURLConnection (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that enables you to start and stop URL requests.

## Declaration

```objectivec
@interface NSURLConnection : NSObject
```

<a id="overview"></a>

## Overview

> **Important**

>  This API is considered legacy. Use [NSURLSession](urlsession.md) instead.

An `NSURLConnection` object lets you load the contents of a URL by providing a URL request object. The interface for `NSURLConnection` is sparse, providing only the controls to start and cancel asynchronous loads of a URL request. You perform most of your configuration on the URL request object itself.

> **Note**

>  Although instances of this class are commonly called “connections”, there is not a 1:1 correlation between these objects and the underlying network connections.

The `NSURLConnection` class provides convenience class methods to load URL requests both asynchronously using a callback block and synchronously.

For greater control, you can create a URL connection object with a delegate object that conforms to the [NSURLConnectionDelegate](nsurlconnectiondelegate.md) and [NSURLConnectionDataDelegate](nsurlconnectiondatadelegate.md) protocols. The connection calls methods on that delegate to provide you with progress and status as the URL request is loaded asynchronously. The connection also calls delegate methods to let you override the connection’s default behavior (for example, specifying how a particular redirect should be handled). These delegate methods are called on the thread that initiated the asynchronous load operation.

> **Note**

>  During a request, the connection maintains a strong reference to its delegate. It releases that strong reference when the connection finishes loading, fails, or is canceled.

For more information about errors, see the `NSURLError.h` header, [Foundation Constants](foundation-constants.md), and URL Loading System Error Codes in [Error Handling Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ErrorHandlingCocoa/ErrorHandling/ErrorHandling.html#//apple_ref/doc/uid/TP40001806).

<a id="NSURLConnection-Protocols"></a>

### NSURLConnection Protocols

The `NSURLConnection` class works in tandem with three formal protocols: [NSURLConnectionDelegate](nsurlconnectiondelegate.md), [NSURLConnectionDataDelegate](nsurlconnectiondatadelegate.md), and [NSURLConnectionDownloadDelegate](nsurlconnectiondownloaddelegate.md). To use these protocols, you write a class that conforms to them and implement any methods that are appropriate, then provide an instance of that class as the delegate when you create a connection object.

The [NSURLConnectionDelegate](nsurlconnectiondelegate.md) protocol is primarily used for credential handling, but also handles connection completion. Because it handles connection failure during data transfers, all connection delegates must typically implement this protocol.

In addition, unless you’re using Newsstand Kit, your delegate must also conform to the [NSURLConnectionDataDelegate](nsurlconnectiondatadelegate.md) protocol, because this protocol provides methods that the `NSURLConnection` class calls with progress information during an upload, with fragments of the response data during a download, and to provide a new upload body stream if the server’s response necessitates a second connection attempt—for example, if `NSURLConnection` must retry the request with different credentials.

Finally, if you’re using Newsstand Kit, your delegate can conform to the [NSURLConnectionDownloadDelegate](nsurlconnectiondownloaddelegate.md) protocol. This protocol provides support for continuing interrupted file downloads and receiving a notification whenever a download finishes. This protocol is solely for use with `NSURLConnection` objects created using Newsstand Kit’s `download(with:)` method.

> **Note**

>  Some methods in these protocols were previously part of other formal protocols or were previously part of an informal protocol on `NSObject`.

## Topics

### Preflighting a Connection Request

- [canHandleRequest:](nsurlconnection/canhandle%28__%29.md): Returns whether a request can be handled based on a preflight evaluation.

### Connection URL Information

- [originalRequest](nsurlconnection/originalrequest.md): A deep copy of the original connection request.
- [currentRequest](nsurlconnection/currentrequest.md): The current connection request.

### Loading Data Synchronously

- [sendSynchronousRequest:returningResponse:error:](nsurlconnection/sendsynchronousrequest%28__returning_%29.md): Deprecated. Performs a synchronous load of the specified URL request.

### Loading Data Asynchronously

- [connectionWithRequest:delegate:](nsurlconnection/connectionwithrequest_delegate_.md): Deprecated. Creates and returns an initialized URL connection and begins to load the data for the URL request.
- [initWithRequest:delegate:](nsurlconnection/init%28request_delegate_%29.md): Deprecated. Returns an initialized URL connection and begins to load the data for the URL request.
- [initWithRequest:delegate:startImmediately:](nsurlconnection/init%28request_delegate_startimmediately_%29.md): Deprecated. Returns an initialized URL connection and begins to load the data for the URL request, if specified.
- [sendAsynchronousRequest:queue:completionHandler:](nsurlconnection/sendasynchronousrequest%28__queue_completionhandler_%29.md): Deprecated. Loads the data for a URL request and executes a handler block on an operation queue when the request completes or fails.
- [start](nsurlconnection/start%28%29.md): Causes the connection to begin loading data, if it has not already.

### Stopping a Connection

- [cancel](nsurlconnection/cancel%28%29.md): Cancels an asynchronous load of a request.

### Scheduling Delegate Method Calls

- [scheduleInRunLoop:forMode:](nsurlconnection/schedule%28in_formode_%29.md): Determines the run loop and mode that the connection uses to call methods on its delegate.
- [setDelegateQueue:](nsurlconnection/setdelegatequeue%28__%29.md): Determines the operation queue that is used to call methods on the connection’s delegate.
- [unscheduleFromRunLoop:forMode:](nsurlconnection/unschedule%28from_formode_%29.md): Causes the connection to stop calling delegate methods in the specified run loop and mode.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### URL Connection

- [NSURLConnectionDelegate](nsurlconnectiondelegate.md): A protocol that delegates of a URL connection implement to receive status about and provide feedback to the connection object.
- [NSURLConnectionDataDelegate](nsurlconnectiondatadelegate.md): A protocol that most delegates of a URL connection implement to receive data associated with the connection.
- [NSURLConnectionDownloadDelegate](nsurlconnectiondownloaddelegate.md): A protocol that delegates of a URL connection created with Newsstand Kit implement to receive data associated with a download.
