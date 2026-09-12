> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiontask/countofbytessent](https://developer.apple.com/documentation/foundation/urlsessiontask/countofbytessent)

# countOfBytesSent (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of bytes that the task has sent to the server in the request body.

## Declaration

```swift
var countOfBytesSent: Int64 { get }
```

<a id="Discussion"></a>

## Discussion

This byte count includes *only* the length of the request body itself, not the request headers.

To be notified when this value changes, implement the [urlSession(\_:task:didSendBodyData:totalBytesSent:totalBytesExpectedToSend:)](../urlsessiontaskdelegate/urlsession%28__task_didsendbodydata_totalbytessent_totalbytesexpectedtosend_%29.md) delegate method.

## See Also

### Obtaining task progress

- [progress](progress.md): A representation of the overall task progress.
- [countOfBytesExpectedToReceive](countofbytesexpectedtoreceive.md): The number of bytes that the task expects to receive in the response body.
- [countOfBytesReceived](countofbytesreceived.md): The number of bytes that the task has received from the server in the response body.
- [countOfBytesExpectedToSend](countofbytesexpectedtosend.md): The number of bytes that the task expects to send in the request body.
- [NSURLSessionTransferSizeUnknown](../nsurlsessiontransfersizeunknown.md): The total size of the transfer cannot be determined.

# countOfBytesSent (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of bytes that the task has sent to the server in the request body.

## Declaration

```objectivec
@property (readonly) int64_t countOfBytesSent;
```

<a id="Discussion"></a>

## Discussion

This byte count includes *only* the length of the request body itself, not the request headers.

To be notified when this value changes, implement the [URLSession:task:didSendBodyData:totalBytesSent:totalBytesExpectedToSend:](../urlsessiontaskdelegate/urlsession%28__task_didsendbodydata_totalbytessent_totalbytesexpectedtosend_%29.md) delegate method.

## See Also

### Obtaining task progress

- [progress](progress.md): A representation of the overall task progress.
- [countOfBytesExpectedToReceive](countofbytesexpectedtoreceive.md): The number of bytes that the task expects to receive in the response body.
- [countOfBytesReceived](countofbytesreceived.md): The number of bytes that the task has received from the server in the response body.
- [countOfBytesExpectedToSend](countofbytesexpectedtosend.md): The number of bytes that the task expects to send in the request body.
- [NSURLSessionTransferSizeUnknown](../nsurlsessiontransfersizeunknown.md): The total size of the transfer cannot be determined.
