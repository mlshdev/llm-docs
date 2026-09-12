> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiontask/countofbytesreceived](https://developer.apple.com/documentation/foundation/urlsessiontask/countofbytesreceived)

# countOfBytesReceived (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of bytes that the task has received from the server in the response body.

## Declaration

```swift
var countOfBytesReceived: Int64 { get }
```

<a id="Discussion"></a>

## Discussion

To be notified when this value changes, implement the [urlSession(\_:dataTask:didReceive:)](../urlsessiondatadelegate/urlsession%28__datatask_didreceive_%29.md) delegate method (for data and upload tasks) or the [urlSession(\_:downloadTask:didWriteData:totalBytesWritten:totalBytesExpectedToWrite:)](../urlsessiondownloaddelegate/urlsession%28__downloadtask_didwritedata_totalbyteswritten_totalbytesexpectedtowrite_%29.md) method (for download tasks).

## See Also

### Obtaining task progress

- [progress](progress.md): A representation of the overall task progress.
- [countOfBytesExpectedToReceive](countofbytesexpectedtoreceive.md): The number of bytes that the task expects to receive in the response body.
- [countOfBytesExpectedToSend](countofbytesexpectedtosend.md): The number of bytes that the task expects to send in the request body.
- [countOfBytesSent](countofbytessent.md): The number of bytes that the task has sent to the server in the request body.
- [NSURLSessionTransferSizeUnknown](../nsurlsessiontransfersizeunknown.md): The total size of the transfer cannot be determined.

# countOfBytesReceived (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of bytes that the task has received from the server in the response body.

## Declaration

```objectivec
@property (readonly) int64_t countOfBytesReceived;
```

<a id="Discussion"></a>

## Discussion

To be notified when this value changes, implement the [URLSession:dataTask:didReceiveData:](../urlsessiondatadelegate/urlsession%28__datatask_didreceive_%29.md) delegate method (for data and upload tasks) or the [URLSession:downloadTask:didWriteData:totalBytesWritten:totalBytesExpectedToWrite:](../urlsessiondownloaddelegate/urlsession%28__downloadtask_didwritedata_totalbyteswritten_totalbytesexpectedtowrite_%29.md) method (for download tasks).

## See Also

### Obtaining task progress

- [progress](progress.md): A representation of the overall task progress.
- [countOfBytesExpectedToReceive](countofbytesexpectedtoreceive.md): The number of bytes that the task expects to receive in the response body.
- [countOfBytesExpectedToSend](countofbytesexpectedtosend.md): The number of bytes that the task expects to send in the request body.
- [countOfBytesSent](countofbytessent.md): The number of bytes that the task has sent to the server in the request body.
- [NSURLSessionTransferSizeUnknown](../nsurlsessiontransfersizeunknown.md): The total size of the transfer cannot be determined.
