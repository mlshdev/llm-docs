> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compression/compression_stream_init(_:_:_:)](https://developer.apple.com/documentation/compression/compression_stream_init(_:_:_:))

# compression_stream_init(\_:\_:\_:) (Swift)

**Framework:** Compression  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a compression stream for either compression or decompression.

## Declaration

```swift
func compression_stream_init(_ stream: UnsafeMutablePointer<compression_stream>, _ operation: compression_stream_operation, _ algorithm: compression_algorithm) -> compression_status
```

## Parameters

- `stream`: Pointer to an allocated [compression_stream](compression_stream.md) structure.
- `operation`: A constant of type [compression_stream_operation](compression_stream_operation.md) used to indicate the stream operation.
- `algorithm`: A constant of type [compression_algorithm](compression_algorithm.md) that specifies the compression algorithm.

<a id="Return-Value"></a>

### Return Value

A value of type [compression_status](compression_status.md), interpreted as follows:

- [COMPRESSION_STATUS_OK](compression_status_ok.md) means the stream object was successfully initialized.
- [COMPRESSION_STATUS_ERROR](compression_status_error.md) means an error occurred.

<a id="Discussion"></a>

## Discussion

After success of this function, set the `dst_ptr`, `dst_size`, `src_ptr`, and `src_size` fields of the stream structure to their respective values. You can then pass stream structure to the [compression_stream_process(\_:\_:)](compression_stream_process%28____%29.md) function.

## See Also

### Multiple-step compression

- [compression_stream](compression_stream.md): A structure representing a compression stream.
- [compression_stream_process(\_:\_:)](compression_stream_process%28____%29.md): Performs compression or decompression using an initialized compression stream structure.
- [compression_stream_destroy(\_:)](compression_stream_destroy%28__%29.md): Frees any memory allocated by stream initialization function.
- [compression_status](compression_status.md): A set of values used to represent the status of stream compression.
- [compression_stream_flags](compression_stream_flags.md): A set of values used to represent stream compression flags.
- [compression_stream_operation](compression_stream_operation.md): A set of values used to represent a stream compression operation.
- [compression_algorithm](compression_algorithm.md): A structure for values that represent compression algorithms.

# compression_stream_init (Objective-C)

**Framework:** Compression  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a compression stream for either compression or decompression.

## Declaration

```objectivec
extern compression_status compression_stream_init(compression_stream *stream, compression_stream_operation operation, compression_algorithm algorithm);
```

## Parameters

- `stream`: Pointer to an allocated [compression_stream](compression_stream.md) structure.
- `operation`: A constant of type [compression_stream_operation](compression_stream_operation.md) used to indicate the stream operation.
- `algorithm`: A constant of type [compression_algorithm](compression_algorithm.md) that specifies the compression algorithm.

<a id="Return-Value"></a>

### Return Value

A value of type [compression_status](compression_status.md), interpreted as follows:

- [COMPRESSION_STATUS_OK](compression_status_ok.md) means the stream object was successfully initialized.
- [COMPRESSION_STATUS_ERROR](compression_status_error.md) means an error occurred.

<a id="Discussion"></a>

## Discussion

After success of this function, set the `dst_ptr`, `dst_size`, `src_ptr`, and `src_size` fields of the stream structure to their respective values. You can then pass stream structure to the [compression_stream_process](compression_stream_process%28____%29.md) function.

## See Also

### Multiple-step compression

- [compression_stream](compression_stream.md): A structure representing a compression stream.
- [compression_stream_process](compression_stream_process%28____%29.md): Performs compression or decompression using an initialized compression stream structure.
- [compression_stream_destroy](compression_stream_destroy%28__%29.md): Frees any memory allocated by stream initialization function.
- [compression_status](compression_status.md): A set of values used to represent the status of stream compression.
- [compression_stream_flags](compression_stream_flags.md): A set of values used to represent stream compression flags.
- [compression_stream_operation](compression_stream_operation.md): A set of values used to represent a stream compression operation.
- [compression_algorithm](compression_algorithm.md): A structure for values that represent compression algorithms.
