> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiontask/countofbytesexpectedtoreceive](https://developer.apple.com/documentation/foundation/urlsessiontask/countofbytesexpectedtoreceive)

# countOfBytesExpectedToReceive (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of bytes that the task expects to receive in the response body.

## Declaration

```swift
var countOfBytesExpectedToReceive: Int64 { get }
```

<a id="Discussion"></a>

## Discussion

This value is determined based on the `Content-Length` header received from the server. If that header is absent, the value is [NSURLSessionTransferSizeUnknown](../nsurlsessiontransfersizeunknown.md).

## See Also

### Obtaining task progress

- [progress](progress.md): A representation of the overall task progress.
- [countOfBytesReceived](countofbytesreceived.md): The number of bytes that the task has received from the server in the response body.
- [countOfBytesExpectedToSend](countofbytesexpectedtosend.md): The number of bytes that the task expects to send in the request body.
- [countOfBytesSent](countofbytessent.md): The number of bytes that the task has sent to the server in the request body.
- [NSURLSessionTransferSizeUnknown](../nsurlsessiontransfersizeunknown.md): The total size of the transfer cannot be determined.

# countOfBytesExpectedToReceive (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of bytes that the task expects to receive in the response body.

## Declaration

```objectivec
@property (readonly) int64_t countOfBytesExpectedToReceive;
```

<a id="Discussion"></a>

## Discussion

This value is determined based on the `Content-Length` header received from the server. If that header is absent, the value is [NSURLSessionTransferSizeUnknown](../nsurlsessiontransfersizeunknown.md).

## See Also

### Obtaining task progress

- [progress](progress.md): A representation of the overall task progress.
- [countOfBytesReceived](countofbytesreceived.md): The number of bytes that the task has received from the server in the response body.
- [countOfBytesExpectedToSend](countofbytesexpectedtosend.md): The number of bytes that the task expects to send in the request body.
- [countOfBytesSent](countofbytessent.md): The number of bytes that the task has sent to the server in the request body.
- [NSURLSessionTransferSizeUnknown](../nsurlsessiontransfersizeunknown.md): The total size of the transfer cannot be determined.
