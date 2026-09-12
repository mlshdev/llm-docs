> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compression/compression_stream_destroy(_:)](https://developer.apple.com/documentation/compression/compression_stream_destroy(_:))

# compression_stream_destroy(\_:) (Swift)

**Framework:** Compression  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Frees any memory allocated by stream initialization function.

## Declaration

```swift
func compression_stream_destroy(_ stream: UnsafeMutablePointer<compression_stream>) -> compression_status
```

## Parameters

- `stream`: A pointer to an allocated and initialized [compression_stream](compression_stream.md) structure.

<a id="Return-Value"></a>

### Return Value

A value of type [compression_status](compression_status.md), interpreted as follows:

- [COMPRESSION_STATUS_OK](compression_status_ok.md) means that the function successfully destroyed the stream.
- [COMPRESSION_STATUS_ERROR](compression_status_error.md) means an error occurred.

<a id="Discussion"></a>

## Discussion

Note that [compression_stream_destroy(\_:)](compression_stream_destroy%28__%29.md) doesn’t free the stream object or the buffers allocated by the caller.

## See Also

### Multiple-step compression

- [compression_stream](compression_stream.md): A structure representing a compression stream.
- [compression_stream_init(\_:\_:\_:)](compression_stream_init%28______%29.md): Initializes a compression stream for either compression or decompression.
- [compression_stream_process(\_:\_:)](compression_stream_process%28____%29.md): Performs compression or decompression using an initialized compression stream structure.
- [compression_status](compression_status.md): A set of values used to represent the status of stream compression.
- [compression_stream_flags](compression_stream_flags.md): A set of values used to represent stream compression flags.
- [compression_stream_operation](compression_stream_operation.md): A set of values used to represent a stream compression operation.
- [compression_algorithm](compression_algorithm.md): A structure for values that represent compression algorithms.

# compression_stream_destroy (Objective-C)

**Framework:** Compression  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Frees any memory allocated by stream initialization function.

## Declaration

```objectivec
extern compression_status compression_stream_destroy(compression_stream *stream);
```

## Parameters

- `stream`: A pointer to an allocated and initialized [compression_stream](compression_stream.md) structure.

<a id="Return-Value"></a>

### Return Value

A value of type [compression_status](compression_status.md), interpreted as follows:

- [COMPRESSION_STATUS_OK](compression_status_ok.md) means that the function successfully destroyed the stream.
- [COMPRESSION_STATUS_ERROR](compression_status_error.md) means an error occurred.

<a id="Discussion"></a>

## Discussion

Note that [compression_stream_destroy](compression_stream_destroy%28__%29.md) doesn’t free the stream object or the buffers allocated by the caller.

## See Also

### Multiple-step compression

- [compression_stream](compression_stream.md): A structure representing a compression stream.
- [compression_stream_init](compression_stream_init%28______%29.md): Initializes a compression stream for either compression or decompression.
- [compression_stream_process](compression_stream_process%28____%29.md): Performs compression or decompression using an initialized compression stream structure.
- [compression_status](compression_status.md): A set of values used to represent the status of stream compression.
- [compression_stream_flags](compression_stream_flags.md): A set of values used to represent stream compression flags.
- [compression_stream_operation](compression_stream_operation.md): A set of values used to represent a stream compression operation.
- [compression_algorithm](compression_algorithm.md): A structure for values that represent compression algorithms.
