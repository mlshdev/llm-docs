> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesynchronizeddepthdata/depthdatawasdropped](https://developer.apple.com/documentation/avfoundation/avcapturesynchronizeddepthdata/depthdatawasdropped)

# depthDataWasDropped (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value indicating whether depth data was discarded between capture and processing.

## Declaration

```swift
var depthDataWasDropped: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If this value is [true](https://developer.apple.com/documentation/swift/true), depth data was captured for this synchronization point but could not be delivered. This situation differs from that where no depth data capture for the synchronization timestamp occurs. In that case, there is no [AVCaptureSynchronizedDepthData](../avcapturesynchronizeddepthdata.md) object present in the [AVCaptureSynchronizedDataCollection](../avcapturesynchronizeddatacollection.md) object delivered to your delegate method.

## See Also

### Handling dropped data

- [droppedReason](droppedreason.md): A value indicating why the capture output failed to deliver depth data, if applicable.

# depthDataWasDropped (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value indicating whether depth data was discarded between capture and processing.

## Declaration

```objectivec
@property (readonly) BOOL depthDataWasDropped;
```

<a id="Discussion"></a>

## Discussion

If this value is [true](https://developer.apple.com/documentation/swift/true), depth data was captured for this synchronization point but could not be delivered. This situation differs from that where no depth data capture for the synchronization timestamp occurs. In that case, there is no [AVCaptureSynchronizedDepthData](../avcapturesynchronizeddepthdata.md) object present in the [AVCaptureSynchronizedDataCollection](../avcapturesynchronizeddatacollection.md) object delivered to your delegate method.

## See Also

### Handling dropped data

- [droppedReason](droppedreason.md): A value indicating why the capture output failed to deliver depth data, if applicable.
