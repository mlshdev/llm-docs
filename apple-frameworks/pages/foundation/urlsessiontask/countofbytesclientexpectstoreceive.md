> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiontask/countofbytesclientexpectstoreceive](https://developer.apple.com/documentation/foundation/urlsessiontask/countofbytesclientexpectstoreceive)

# countOfBytesClientExpectsToReceive (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A best-guess upper bound on the number of bytes the client expects to receive.

## Declaration

```swift
var countOfBytesClientExpectsToReceive: Int64 { get set }
```

## Mentioned In

- [Downloading files in the background](../downloading-files-in-the-background.md)

<a id="Discussion"></a>

## Discussion

The value set for this property should account for the size of both HTTP response headers and the response body. If no value is specified, the system uses [NSURLSessionTransferSizeUnknown](../nsurlsessiontransfersizeunknown.md) instead. This property is used by the system to optimize the scheduling of URL session tasks. Developers are strongly encouraged to provide an approximate upper bound, or an exact byte count, if possible, rather than accept the default.

## See Also

### Scheduling tasks

- [countOfBytesClientExpectsToSend](countofbytesclientexpectstosend.md): A best-guess upper bound on the number of bytes the client expects to send.
- [NSURLSessionTransferSizeUnknown](../nsurlsessiontransfersizeunknown.md): The total size of the transfer cannot be determined.
- [earliestBeginDate](earliestbegindate.md): The earliest date at which the network load should begin.

# countOfBytesClientExpectsToReceive (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A best-guess upper bound on the number of bytes the client expects to receive.

## Declaration

```objectivec
@property int64_t countOfBytesClientExpectsToReceive;
```

## Mentioned In

- [Downloading files in the background](../downloading-files-in-the-background.md)

<a id="Discussion"></a>

## Discussion

The value set for this property should account for the size of both HTTP response headers and the response body. If no value is specified, the system uses [NSURLSessionTransferSizeUnknown](../nsurlsessiontransfersizeunknown.md) instead. This property is used by the system to optimize the scheduling of URL session tasks. Developers are strongly encouraged to provide an approximate upper bound, or an exact byte count, if possible, rather than accept the default.

## See Also

### Scheduling tasks

- [countOfBytesClientExpectsToSend](countofbytesclientexpectstosend.md): A best-guess upper bound on the number of bytes the client expects to send.
- [NSURLSessionTransferSizeUnknown](../nsurlsessiontransfersizeunknown.md): The total size of the transfer cannot be determined.
- [earliestBeginDate](earliestbegindate.md): The earliest date at which the network load should begin.
