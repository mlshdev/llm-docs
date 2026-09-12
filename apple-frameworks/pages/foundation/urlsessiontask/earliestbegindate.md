> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiontask/earliestbegindate](https://developer.apple.com/documentation/foundation/urlsessiontask/earliestbegindate)

# earliestBeginDate (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The earliest date at which the network load should begin.

## Declaration

```swift
var earliestBeginDate: Date? { get set }
```

## Mentioned In

- [Downloading files in the background](../downloading-files-in-the-background.md)

<a id="Discussion"></a>

## Discussion

For tasks created from background [URLSession](../urlsession.md) instances, this property indicates that the network load should not begin any earlier than this date. Setting this property does not guarantee that the load will begin at the specified date, but only that it will not begin sooner. If not specified, no start delay is used.

This property has no effect for tasks created from nonbackground sessions.

## See Also

### Scheduling tasks

- [countOfBytesClientExpectsToReceive](countofbytesclientexpectstoreceive.md): A best-guess upper bound on the number of bytes the client expects to receive.
- [countOfBytesClientExpectsToSend](countofbytesclientexpectstosend.md): A best-guess upper bound on the number of bytes the client expects to send.
- [NSURLSessionTransferSizeUnknown](../nsurlsessiontransfersizeunknown.md): The total size of the transfer cannot be determined.

# earliestBeginDate (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The earliest date at which the network load should begin.

## Declaration

```objectivec
@property (copy, nullable) NSDate * earliestBeginDate;
```

## Mentioned In

- [Downloading files in the background](../downloading-files-in-the-background.md)

<a id="Discussion"></a>

## Discussion

For tasks created from background [NSURLSession](../urlsession.md) instances, this property indicates that the network load should not begin any earlier than this date. Setting this property does not guarantee that the load will begin at the specified date, but only that it will not begin sooner. If not specified, no start delay is used.

This property has no effect for tasks created from nonbackground sessions.

## See Also

### Scheduling tasks

- [countOfBytesClientExpectsToReceive](countofbytesclientexpectstoreceive.md): A best-guess upper bound on the number of bytes the client expects to receive.
- [countOfBytesClientExpectsToSend](countofbytesclientexpectstosend.md): A best-guess upper bound on the number of bytes the client expects to send.
- [NSURLSessionTransferSizeUnknown](../nsurlsessiontransfersizeunknown.md): The total size of the transfer cannot be determined.
