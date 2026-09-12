> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compression/compression_stream](https://developer.apple.com/documentation/compression/compression_stream)

# compression_stream (Swift)

**Framework:** Compression  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure representing a compression stream.

## Declaration

```swift
struct compression_stream
```

<a id="overview"></a>

## Overview

The basic workflow for using the stream interface is as follows:

1. Initialize the state of your [compression_stream](compression_stream.md) structure by calling [compression_stream_init(\_:\_:\_:)](compression_stream_init%28______%29.md) with the `operation` parameter set to specify whether you are encoding or decoding, and the chosen algorithm specified by the `algorithm` parameter.  This allocates storage for the state that allows you to resume encoding or decoding across calls.
2. Set the `dst_buffer`, `dst_size`, `src_buffer`, and `src_size` fields of the [compression_stream](compression_stream.md) object to point to the next blocks that your code processes.
3. Call [compression_stream_process(\_:\_:)](compression_stream_process%28____%29.md).  If no further input will be added to the stream via subsequent calls, `flags` should be [COMPRESSION_STREAM_FINALIZE](compression_stream_finalize.md) (otherwise 0). If [compression_stream_process(\_:\_:)](compression_stream_process%28____%29.md) returns [COMPRESSION_STATUS_END](compression_status_end.md), there is no further output from the stream.
4. Repeat steps 2 and 3 as necessary to process the entire stream.
5. Call [compression_stream_destroy(\_:)](compression_stream_destroy%28__%29.md) to free the state object in the stream structure.

## Topics

### Initializers

- [init(dst_ptr:dst_size:src_ptr:src_size:state:)](compression_stream/init%28dst_ptr_dst_size_src_ptr_src_size_state_%29.md): Returns a new compression stream structure.

### Compression Stream Properties

- [dst_ptr](compression_stream/dst_ptr.md): A pointer to the first byte of the destination buffer.
- [dst_size](compression_stream/dst_size.md): The size, in bytes, of the destination buffer.
- [src_ptr](compression_stream/src_ptr.md): A pointer to the first byte of the source buffer.
- [src_size](compression_stream/src_size.md): The size, in bytes, of the source buffer.
- [state](compression_stream/state.md): The stream state object of the compression stream.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Multiple-step compression

- [compression_stream_init(\_:\_:\_:)](compression_stream_init%28______%29.md): Initializes a compression stream for either compression or decompression.
- [compression_stream_process(\_:\_:)](compression_stream_process%28____%29.md): Performs compression or decompression using an initialized compression stream structure.
- [compression_stream_destroy(\_:)](compression_stream_destroy%28__%29.md): Frees any memory allocated by stream initialization function.
- [compression_status](compression_status.md): A set of values used to represent the status of stream compression.
- [compression_stream_flags](compression_stream_flags.md): A set of values used to represent stream compression flags.
- [compression_stream_operation](compression_stream_operation.md): A set of values used to represent a stream compression operation.
- [compression_algorithm](compression_algorithm.md): A structure for values that represent compression algorithms.

# compression_stream (Objective-C)

**Framework:** Compression  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure representing a compression stream.

## Declaration

```objectivec
typedef struct { ... } compression_stream;
```

<a id="overview"></a>

## Overview

The basic workflow for using the stream interface is as follows:

1. Initialize the state of your [compression_stream](compression_stream.md) structure by calling [compression_stream_init](compression_stream_init%28______%29.md) with the `operation` parameter set to specify whether you are encoding or decoding, and the chosen algorithm specified by the `algorithm` parameter.  This allocates storage for the state that allows you to resume encoding or decoding across calls.
2. Set the `dst_buffer`, `dst_size`, `src_buffer`, and `src_size` fields of the [compression_stream](compression_stream.md) object to point to the next blocks that your code processes.
3. Call [compression_stream_process](compression_stream_process%28____%29.md).  If no further input will be added to the stream via subsequent calls, `flags` should be [COMPRESSION_STREAM_FINALIZE](compression_stream_finalize.md) (otherwise 0). If [compression_stream_process](compression_stream_process%28____%29.md) returns [COMPRESSION_STATUS_END](compression_status_end.md), there is no further output from the stream.
4. Repeat steps 2 and 3 as necessary to process the entire stream.
5. Call [compression_stream_destroy](compression_stream_destroy%28__%29.md) to free the state object in the stream structure.

## Topics

### Compression Stream Properties

- [dst_ptr](compression_stream/dst_ptr.md): A pointer to the first byte of the destination buffer.
- [dst_size](compression_stream/dst_size.md): The size, in bytes, of the destination buffer.
- [src_ptr](compression_stream/src_ptr.md): A pointer to the first byte of the source buffer.
- [src_size](compression_stream/src_size.md): The size, in bytes, of the source buffer.
- [state](compression_stream/state.md): The stream state object of the compression stream.

## See Also

### Multiple-step compression

- [compression_stream_init](compression_stream_init%28______%29.md): Initializes a compression stream for either compression or decompression.
- [compression_stream_process](compression_stream_process%28____%29.md): Performs compression or decompression using an initialized compression stream structure.
- [compression_stream_destroy](compression_stream_destroy%28__%29.md): Frees any memory allocated by stream initialization function.
- [compression_status](compression_status.md): A set of values used to represent the status of stream compression.
- [compression_stream_flags](compression_stream_flags.md): A set of values used to represent stream compression flags.
- [compression_stream_operation](compression_stream_operation.md): A set of values used to represent a stream compression operation.
- [compression_algorithm](compression_algorithm.md): A structure for values that represent compression algorithms.
