> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbufferhandlers](https://developer.apple.com/documentation/coremedia/cmbufferhandlers)

# CMBufferHandlers

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that stores the handlers that perform buffer operations.

## Declaration

```objectivec
typedef struct { ... } CMBufferHandlers;
```

## Topics

### Buffer Handlers

- [compare](cmbufferhandlers/compare.md): A handler callback the queue uses to perform an insertion sort of the queue.
- [CMBufferCompareHandler](cmbuffercomparehandler.md)
- [getDuration](cmbufferhandlers/getduration.md)
- [getDecodeTimeStamp](cmbufferhandlers/getdecodetimestamp.md)
- [getPresentationTimeStamp](cmbufferhandlers/getpresentationtimestamp.md)
- [CMBufferGetTimeHandler](cmbuffergettimehandler.md)
- [getSize](cmbufferhandlers/getsize.md)
- [CMBufferGetSizeHandler](cmbuffergetsizehandler.md)
- [isDataReady](cmbufferhandlers/isdataready.md)
- [CMBufferGetBooleanHandler](cmbuffergetbooleanhandler.md)
- [dataBecameReadyNotification](cmbufferhandlers/databecamereadynotification.md)
- [version](cmbufferhandlers/version.md): The version number.

## See Also

### Creating a Queue

- [CMBufferQueueCreateWithHandlers](cmbufferqueuecreatewithhandlers%28________%29.md): Creates a buffer queue with handlers to inspect buffers.
- [CMBufferQueueCreate](cmbufferqueuecreate%28allocator_capacity_callbacks_queueout_%29.md): Creates a buffer queue with callbacks to inspect buffers.
- [CMBufferCallbacks](cmbuffercallbacks.md): A structure that stores the callbacks that perform buffer operations.
