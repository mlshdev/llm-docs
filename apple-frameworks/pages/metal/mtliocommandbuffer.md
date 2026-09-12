> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtliocommandbuffer](https://developer.apple.com/documentation/metal/mtliocommandbuffer)

# MTLIOCommandBuffer (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A command buffer that contains input/output commands that work with files in the file systems and Metal resources.

## Declaration

```swift
protocol MTLIOCommandBuffer : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Add commands an input/output command buffer to load assets from the file system directly into Metal resources. Your app can then use those resources with other commands it submits to [MTLCommandQueue](mtlcommandqueue.md).

## Topics

### Loading assets

- [load(\_:offset:size:sourceHandle:sourceHandleOffset:)](mtliocommandbuffer/load%28__offset_size_sourcehandle_sourcehandleoffset_%29.md): Encodes a command that loads data from a file handle into a GPU buffer.
- [load(\_:slice:level:size:sourceBytesPerRow:sourceBytesPerImage:destinationOrigin:sourceHandle:sourceHandleOffset:)](mtliocommandbuffer/load%28__slice_level_size_sourcebytesperrow_sourcebytesperimage_destinationorigin_sourcehandle_sourcehandleoffset_%29.md): Encodes a command that loads data from a file handle into a GPU texture.
- [loadBytes(\_:size:sourceHandle:sourceHandleOffset:)](mtliocommandbuffer/loadbytes%28__size_sourcehandle_sourcehandleoffset_%29.md): Encodes a command that loads data from a file handle into CPU-accessible memory buffer.

### Adding a barrier

- [addBarrier()](mtliocommandbuffer/addbarrier%28%29.md): Encodes a barrier into the command buffer.

### Synchronizing a command buffer

- [signalEvent(\_:value:)](mtliocommandbuffer/signalevent%28__value_%29.md): Encodes a command that signals a shared event to other parts of your app.
- [waitForEvent(\_:value:)](mtliocommandbuffer/waitforevent%28__value_%29.md): Encodes a command that pauses the command buffer’s execution until another part of your app signals a shared event.

### Adding final commands

- [copyStatus(buffer:offset:)](mtliocommandbuffer/copystatus%28buffer_offset_%29.md): Encodes a command that writes the input/output command buffer’s status to a buffer.
- [addCompletedHandler(\_:)](mtliocommandbuffer/addcompletedhandler%28__%29.md): Adds a closure that Metal calls immediately after the GPU finishes executing the commands in the input/output command buffer.

### Submitting a command buffer

- [commit()](mtliocommandbuffer/commit%28%29.md): Submits the command buffer to the queue for execution on the GPU.
- [enqueue()](mtliocommandbuffer/enqueue%28%29.md): Reserves a place for the input/output command buffer in the input/output command queue without committing the command buffer.

### Canceling a command buffer

- [tryCancel()](mtliocommandbuffer/trycancel%28%29.md): Submits a request to abandon a command buffer the queue is currently running.

### Waiting for a command buffer

- [waitUntilCompleted()](mtliocommandbuffer/waituntilcompleted%28%29.md): Blocks the current thread until the GPU finishes executing the input/output command buffer and all of its completion handlers.

### Checking the state of a command buffer

- [status](mtliocommandbuffer/status.md): Represents the state of the input/output command buffer.
- [error](mtliocommandbuffer/error.md): Stores the details of an error when the GPU experienced a problem with the input/output command buffer.

### Debugging a command buffer

- [label](mtliocommandbuffer/label.md): An optional name for the input/output command buffer.
- [pushDebugGroup(\_:)](mtliocommandbuffer/pushdebuggroup%28__%29.md): Sets the current name for this input/output command encoder by adding it to the top of the debug name stack.
- [popDebugGroup()](mtliocommandbuffer/popdebuggroup%28%29.md): Restores the previous name for this input/output command encoder by removing the top item of the debug name stack.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### I/O command buffers

- [MTLIOFileHandle](mtliofilehandle.md): Represents a raw or compressed file, such as a resource asset file in your app’s bundle.
- [MTLIOCommandBufferHandler](mtliocommandbufferhandler.md): A convenience type that defines the signature of an input/output command buffer’s completion handler.
- [MTLIOStatus](mtliostatus.md): Represents the state of an input/output command buffer.
- [MTLIOError.Code](mtlioerror-swift.struct/code.md): The error codes for creating an input/output file handle.
- [MTLIOErrorDomain](mtlioerrordomain.md): The domain for input/output command queue errors.

# MTLIOCommandBuffer (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A command buffer that contains input/output commands that work with files in the file systems and Metal resources.

## Declaration

```objectivec
@protocol MTLIOCommandBuffer <NSObject>
```

<a id="overview"></a>

## Overview

Add commands an input/output command buffer to load assets from the file system directly into Metal resources. Your app can then use those resources with other commands it submits to [MTLCommandQueue](mtlcommandqueue.md).

## Topics

### Loading assets

- [loadBuffer:offset:size:sourceHandle:sourceHandleOffset:](mtliocommandbuffer/load%28__offset_size_sourcehandle_sourcehandleoffset_%29.md): Encodes a command that loads data from a file handle into a GPU buffer.
- [loadTexture:slice:level:size:sourceBytesPerRow:sourceBytesPerImage:destinationOrigin:sourceHandle:sourceHandleOffset:](mtliocommandbuffer/load%28__slice_level_size_sourcebytesperrow_sourcebytesperimage_destinationorigin_sourcehandle_sourcehandleoffset_%29.md): Encodes a command that loads data from a file handle into a GPU texture.
- [loadBytes:size:sourceHandle:sourceHandleOffset:](mtliocommandbuffer/loadbytes%28__size_sourcehandle_sourcehandleoffset_%29.md): Encodes a command that loads data from a file handle into CPU-accessible memory buffer.

### Adding a barrier

- [addBarrier](mtliocommandbuffer/addbarrier%28%29.md): Encodes a barrier into the command buffer.

### Synchronizing a command buffer

- [signalEvent:value:](mtliocommandbuffer/signalevent%28__value_%29.md): Encodes a command that signals a shared event to other parts of your app.
- [waitForEvent:value:](mtliocommandbuffer/waitforevent%28__value_%29.md): Encodes a command that pauses the command buffer’s execution until another part of your app signals a shared event.

### Adding final commands

- [copyStatusToBuffer:offset:](mtliocommandbuffer/copystatus%28buffer_offset_%29.md): Encodes a command that writes the input/output command buffer’s status to a buffer.
- [addCompletedHandler:](mtliocommandbuffer/addcompletedhandler%28__%29.md): Adds a closure that Metal calls immediately after the GPU finishes executing the commands in the input/output command buffer.

### Submitting a command buffer

- [commit](mtliocommandbuffer/commit%28%29.md): Submits the command buffer to the queue for execution on the GPU.
- [enqueue](mtliocommandbuffer/enqueue%28%29.md): Reserves a place for the input/output command buffer in the input/output command queue without committing the command buffer.

### Canceling a command buffer

- [tryCancel](mtliocommandbuffer/trycancel%28%29.md): Submits a request to abandon a command buffer the queue is currently running.

### Waiting for a command buffer

- [waitUntilCompleted](mtliocommandbuffer/waituntilcompleted%28%29.md): Blocks the current thread until the GPU finishes executing the input/output command buffer and all of its completion handlers.

### Checking the state of a command buffer

- [status](mtliocommandbuffer/status.md): Represents the state of the input/output command buffer.
- [error](mtliocommandbuffer/error.md): Stores the details of an error when the GPU experienced a problem with the input/output command buffer.

### Debugging a command buffer

- [label](mtliocommandbuffer/label.md): An optional name for the input/output command buffer.
- [pushDebugGroup:](mtliocommandbuffer/pushdebuggroup%28__%29.md): Sets the current name for this input/output command encoder by adding it to the top of the debug name stack.
- [popDebugGroup](mtliocommandbuffer/popdebuggroup%28%29.md): Restores the previous name for this input/output command encoder by removing the top item of the debug name stack.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### I/O command buffers

- [MTLIOFileHandle](mtliofilehandle.md): Represents a raw or compressed file, such as a resource asset file in your app’s bundle.
- [MTLIOCommandBufferHandler](mtliocommandbufferhandler.md): A convenience type that defines the signature of an input/output command buffer’s completion handler.
- [MTLIOStatus](mtliostatus.md): Represents the state of an input/output command buffer.
- [MTLIOError](mtlioerror-swift.struct/code.md): The error codes for creating an input/output file handle.
- [MTLIOErrorDomain](mtlioerrordomain.md): The domain for input/output command queue errors.
