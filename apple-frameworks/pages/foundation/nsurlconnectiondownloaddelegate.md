> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlconnectiondownloaddelegate](https://developer.apple.com/documentation/foundation/nsurlconnectiondownloaddelegate)

# NSURLConnectionDownloadDelegate (Swift)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A protocol that delegates of a URL connection created with Newsstand Kit implement to receive data associated with a download.

## Declaration

```swift
protocol NSURLConnectionDownloadDelegate : NSURLConnectionDelegate
```

<a id="overview"></a>

## Overview

The `NSURLConnectionDownloadDelegate` protocol describes methods that should be implemented by the delegate of instances of `NSURLConnection` created using Newsstand Kit’s `download(with:)` method. The methods in this protocol provide progress information about the download of a URL asset and, when downloading concludes, provide a file URL where the downloaded file can be accessed.

In addition to the methods described in this protocol, an `NSURLConnection` delegate should also implement the methods described in the [NSURLConnectionDelegate](nsurlconnectiondelegate.md) protocol.

> **Note**

>  If you are using `NSURLConnection` directly, your delegate class should instead implement the methods defined in the [NSURLConnectionDataDelegate](nsurlconnectiondatadelegate.md) protocol.

## Topics

### Managing Downloads of URL Assets

- [connection(\_:didWriteData:totalBytesWritten:expectedTotalBytes:)](nsurlconnectiondownloaddelegate/connection%28__didwritedata_totalbyteswritten_expectedtotalbytes_%29.md): Sent to the delegate to deliver progress information for a download of a URL asset to a destination file.
- [connectionDidResumeDownloading(\_:totalBytesWritten:expectedTotalBytes:)](nsurlconnectiondownloaddelegate/connectiondidresumedownloading%28__totalbyteswritten_expectedtotalbytes_%29.md): Sent to the delegate when an URL connection resumes downloading a URL asset that was earlier suspended.
- [connectionDidFinishDownloading(\_:destinationURL:)](nsurlconnectiondownloaddelegate/connectiondidfinishdownloading%28__destinationurl_%29.md): Sent to the delegate when the URL connection has successfully downloaded the URL asset to a destination file.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSURLConnectionDelegate](nsurlconnectiondelegate.md)

## See Also

### URL Connection

- [NSURLConnection](nsurlconnection.md): An object that enables you to start and stop URL requests.
- [NSURLConnectionDelegate](nsurlconnectiondelegate.md): A protocol that delegates of a URL connection implement to receive status about and provide feedback to the connection object.
- [NSURLConnectionDataDelegate](nsurlconnectiondatadelegate.md): A protocol that most delegates of a URL connection implement to receive data associated with the connection.

# NSURLConnectionDownloadDelegate (Objective-C)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A protocol that delegates of a URL connection created with Newsstand Kit implement to receive data associated with a download.

## Declaration

```objectivec
@protocol NSURLConnectionDownloadDelegate <NSURLConnectionDelegate>
```

<a id="overview"></a>

## Overview

The `NSURLConnectionDownloadDelegate` protocol describes methods that should be implemented by the delegate of instances of `NSURLConnection` created using Newsstand Kit’s `download(with:)` method. The methods in this protocol provide progress information about the download of a URL asset and, when downloading concludes, provide a file URL where the downloaded file can be accessed.

In addition to the methods described in this protocol, an `NSURLConnection` delegate should also implement the methods described in the [NSURLConnectionDelegate](nsurlconnectiondelegate.md) protocol.

> **Note**

>  If you are using `NSURLConnection` directly, your delegate class should instead implement the methods defined in the [NSURLConnectionDataDelegate](nsurlconnectiondatadelegate.md) protocol.

## Topics

### Managing Downloads of URL Assets

- [connection:didWriteData:totalBytesWritten:expectedTotalBytes:](nsurlconnectiondownloaddelegate/connection%28__didwritedata_totalbyteswritten_expectedtotalbytes_%29.md): Sent to the delegate to deliver progress information for a download of a URL asset to a destination file.
- [connectionDidResumeDownloading:totalBytesWritten:expectedTotalBytes:](nsurlconnectiondownloaddelegate/connectiondidresumedownloading%28__totalbyteswritten_expectedtotalbytes_%29.md): Sent to the delegate when an URL connection resumes downloading a URL asset that was earlier suspended.
- [connectionDidFinishDownloading:destinationURL:](nsurlconnectiondownloaddelegate/connectiondidfinishdownloading%28__destinationurl_%29.md): Sent to the delegate when the URL connection has successfully downloaded the URL asset to a destination file.

## Relationships

### Inherits From

- [NSURLConnectionDelegate](nsurlconnectiondelegate.md)

## See Also

### URL Connection

- [NSURLConnection](nsurlconnection.md): An object that enables you to start and stop URL requests.
- [NSURLConnectionDelegate](nsurlconnectiondelegate.md): A protocol that delegates of a URL connection implement to receive status about and provide feedback to the connection object.
- [NSURLConnectionDataDelegate](nsurlconnectiondatadelegate.md): A protocol that most delegates of a URL connection implement to receive data associated with the connection.
