> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbufferhandlers/compare](https://developer.apple.com/documentation/coremedia/cmbufferhandlers/compare)

# compare

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A handler callback the queue uses to perform an insertion sort of the queue.

## Declaration

```objectivec
CMBufferCompareHandler compare;
```

<a id="Discussion"></a>

## Discussion

The queue invokes this callback when enqueuing buffers to perform an insertion sort. If you don’t provide a handler, the queue defaults to FIFO order.

## See Also

### Buffer Handlers

- [CMBufferCompareHandler](../cmbuffercomparehandler.md)
- [getDuration](getduration.md)
- [getDecodeTimeStamp](getdecodetimestamp.md)
- [getPresentationTimeStamp](getpresentationtimestamp.md)
- [CMBufferGetTimeHandler](../cmbuffergettimehandler.md)
- [getSize](getsize.md)
- [CMBufferGetSizeHandler](../cmbuffergetsizehandler.md)
- [isDataReady](isdataready.md)
- [CMBufferGetBooleanHandler](../cmbuffergetbooleanhandler.md)
- [dataBecameReadyNotification](databecamereadynotification.md)
- [version](version.md): The version number.
