> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlconnectiondatadelegate](https://developer.apple.com/documentation/foundation/nsurlconnectiondatadelegate)

# NSURLConnectionDataDelegate (Swift)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A protocol that most delegates of a URL connection implement to receive data associated with the connection.

## Declaration

```swift
protocol NSURLConnectionDataDelegate : NSURLConnectionDelegate
```

<a id="overview"></a>

## Overview

The `NSURLConnectionDataDelegate` protocol describes methods that should be implemented by the delegate for an instance of the [NSURLConnection](nsurlconnection.md) class. Many methods in this protocol existed as part of an informal protocol in previous versions of macOS and iOS.

In addition to the methods described in this protocol, an `NSURLConnection` delegate should also implement the methods described in the [NSURLConnectionDelegate](nsurlconnectiondelegate.md) protocol.

> **Note**

>  If you are using `NSURLConnection` as part of Newsstand Kit on iOS, you should also implement the methods in the [NSURLConnectionDownloadDelegate](nsurlconnectiondownloaddelegate.md) protocol.

## Topics

### Handling Incoming Data

- [connection(\_:didReceive:)](nsurlconnectiondatadelegate/connection%28__didreceive_%29-8t66w.md): Sent when the connection has received sufficient data to construct the URL response for its request.
- [connection(\_:didReceive:)](nsurlconnectiondatadelegate/connection%28__didreceive_%29-8p5vg.md): Sent as a connection loads data incrementally.

### Receiving Connection Progress

- [connection(\_:didSendBodyData:totalBytesWritten:totalBytesExpectedToWrite:)](nsurlconnectiondatadelegate/connection%28__didsendbodydata_totalbyteswritten_totalbytesexpectedtowrite_%29.md): Sent as the body (message data) of a request is transmitted (such as in an HTTP POST request).
- [connectionDidFinishLoading(\_:)](nsurlconnectiondatadelegate/connectiondidfinishloading%28__%29.md): Sent when a connection has finished loading successfully.

### Handling Redirects

- [connection(\_:willSend:redirectResponse:)](nsurlconnectiondatadelegate/connection%28__willsend_redirectresponse_%29.md): Sent when the connection determines that it must change URLs in order to continue loading a request.
- [connection(\_:needNewBodyStream:)](nsurlconnectiondatadelegate/connection%28__neednewbodystream_%29.md): Called when an `NSURLConnection` needs to retransmit a request that has a body stream to provide a new, unopened stream.

### Overriding Caching Behavior

- [connection(\_:willCacheResponse:)](nsurlconnectiondatadelegate/connection%28__willcacheresponse_%29.md): Sent before the connection stores a cached response in the cache, to give the delegate an opportunity to alter it.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSURLConnectionDelegate](nsurlconnectiondelegate.md)

## See Also

### URL Connection

- [NSURLConnection](nsurlconnection.md): An object that enables you to start and stop URL requests.
- [NSURLConnectionDelegate](nsurlconnectiondelegate.md): A protocol that delegates of a URL connection implement to receive status about and provide feedback to the connection object.
- [NSURLConnectionDownloadDelegate](nsurlconnectiondownloaddelegate.md): A protocol that delegates of a URL connection created with Newsstand Kit implement to receive data associated with a download.

# NSURLConnectionDataDelegate (Objective-C)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A protocol that most delegates of a URL connection implement to receive data associated with the connection.

## Declaration

```objectivec
@protocol NSURLConnectionDataDelegate <NSURLConnectionDelegate>
```

<a id="overview"></a>

## Overview

The `NSURLConnectionDataDelegate` protocol describes methods that should be implemented by the delegate for an instance of the [NSURLConnection](nsurlconnection.md) class. Many methods in this protocol existed as part of an informal protocol in previous versions of macOS and iOS.

In addition to the methods described in this protocol, an `NSURLConnection` delegate should also implement the methods described in the [NSURLConnectionDelegate](nsurlconnectiondelegate.md) protocol.

> **Note**

>  If you are using `NSURLConnection` as part of Newsstand Kit on iOS, you should also implement the methods in the [NSURLConnectionDownloadDelegate](nsurlconnectiondownloaddelegate.md) protocol.

## Topics

### Handling Incoming Data

- [connection:didReceiveResponse:](nsurlconnectiondatadelegate/connection%28__didreceive_%29-8t66w.md): Sent when the connection has received sufficient data to construct the URL response for its request.
- [connection:didReceiveData:](nsurlconnectiondatadelegate/connection%28__didreceive_%29-8p5vg.md): Sent as a connection loads data incrementally.

### Receiving Connection Progress

- [connection:didSendBodyData:totalBytesWritten:totalBytesExpectedToWrite:](nsurlconnectiondatadelegate/connection%28__didsendbodydata_totalbyteswritten_totalbytesexpectedtowrite_%29.md): Sent as the body (message data) of a request is transmitted (such as in an HTTP POST request).
- [connectionDidFinishLoading:](nsurlconnectiondatadelegate/connectiondidfinishloading%28__%29.md): Sent when a connection has finished loading successfully.

### Handling Redirects

- [connection:willSendRequest:redirectResponse:](nsurlconnectiondatadelegate/connection%28__willsend_redirectresponse_%29.md): Sent when the connection determines that it must change URLs in order to continue loading a request.
- [connection:needNewBodyStream:](nsurlconnectiondatadelegate/connection%28__neednewbodystream_%29.md): Called when an `NSURLConnection` needs to retransmit a request that has a body stream to provide a new, unopened stream.

### Overriding Caching Behavior

- [connection:willCacheResponse:](nsurlconnectiondatadelegate/connection%28__willcacheresponse_%29.md): Sent before the connection stores a cached response in the cache, to give the delegate an opportunity to alter it.

## Relationships

### Inherits From

- [NSURLConnectionDelegate](nsurlconnectiondelegate.md)

## See Also

### URL Connection

- [NSURLConnection](nsurlconnection.md): An object that enables you to start and stop URL requests.
- [NSURLConnectionDelegate](nsurlconnectiondelegate.md): A protocol that delegates of a URL connection implement to receive status about and provide feedback to the connection object.
- [NSURLConnectionDownloadDelegate](nsurlconnectiondownloaddelegate.md): A protocol that delegates of a URL connection created with Newsstand Kit implement to receive data associated with a download.
