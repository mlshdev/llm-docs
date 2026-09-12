> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiontask/countofbytesexpectedtosend](https://developer.apple.com/documentation/foundation/urlsessiontask/countofbytesexpectedtosend)

# countOfBytesExpectedToSend (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of bytes that the task expects to send in the request body.

## Declaration

```swift
var countOfBytesExpectedToSend: Int64 { get }
```

<a id="Discussion"></a>

## Discussion

The URL loading system can determine the length of the upload data in three ways:

- From the length of the data object provided as the upload body.
- From the length of the file on disk provided as the upload body of an upload task (*not* a download task).
- From the `Content-Length` in the request object, if you explicitly set it.

Otherwise, the value is [NSURLSessionTransferSizeUnknown](../nsurlsessiontransfersizeunknown.md) (`-1`) if you provided a stream or body data object, or zero (`0`) if you did not.

## See Also

### Obtaining task progress

- [progress](progress.md): A representation of the overall task progress.
- [countOfBytesExpectedToReceive](countofbytesexpectedtoreceive.md): The number of bytes that the task expects to receive in the response body.
- [countOfBytesReceived](countofbytesreceived.md): The number of bytes that the task has received from the server in the response body.
- [countOfBytesSent](countofbytessent.md): The number of bytes that the task has sent to the server in the request body.
- [NSURLSessionTransferSizeUnknown](../nsurlsessiontransfersizeunknown.md): The total size of the transfer cannot be determined.

# countOfBytesExpectedToSend (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of bytes that the task expects to send in the request body.

## Declaration

```objectivec
@property (readonly) int64_t countOfBytesExpectedToSend;
```

<a id="Discussion"></a>

## Discussion

The URL loading system can determine the length of the upload data in three ways:

- From the length of the data object provided as the upload body.
- From the length of the file on disk provided as the upload body of an upload task (*not* a download task).
- From the `Content-Length` in the request object, if you explicitly set it.

Otherwise, the value is [NSURLSessionTransferSizeUnknown](../nsurlsessiontransfersizeunknown.md) (`-1`) if you provided a stream or body data object, or zero (`0`) if you did not.

## See Also

### Obtaining task progress

- [progress](progress.md): A representation of the overall task progress.
- [countOfBytesExpectedToReceive](countofbytesexpectedtoreceive.md): The number of bytes that the task expects to receive in the response body.
- [countOfBytesReceived](countofbytesreceived.md): The number of bytes that the task has received from the server in the response body.
- [countOfBytesSent](countofbytessent.md): The number of bytes that the task has sent to the server in the request body.
- [NSURLSessionTransferSizeUnknown](../nsurlsessiontransfersizeunknown.md): The total size of the transfer cannot be determined.
