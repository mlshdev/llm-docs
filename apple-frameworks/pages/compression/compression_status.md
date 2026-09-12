> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compression/compression_status](https://developer.apple.com/documentation/compression/compression_status)

# compression_status (Swift)

**Framework:** Compression  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A set of values used to represent the status of stream compression.

## Declaration

```swift
struct compression_status
```

## Topics

### Status Constants

- [COMPRESSION_STATUS_OK](compression_status_ok.md): Indicates the stream has consumed all data in the source buffer, or used all space in the destination buffer.
- [COMPRESSION_STATUS_END](compression_status_end.md): Indicates the stream has read all input from the source, and written all output to the destination.
- [COMPRESSION_STATUS_ERROR](compression_status_error.md): Indicates an error with stream compression.

### Initializers

- [init(\_:)](compression_status/init%28__%29.md): Creates a new constant from the given raw value.
- [init(rawValue:)](compression_status/init%28rawvalue_%29.md): Creates a new constant from the given raw value.

### Instance Properties

- [rawValue](compression_status/rawvalue.md): The raw value of the constant.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Multiple-step compression

- [compression_stream](compression_stream.md): A structure representing a compression stream.
- [compression_stream_init(\_:\_:\_:)](compression_stream_init%28______%29.md): Initializes a compression stream for either compression or decompression.
- [compression_stream_process(\_:\_:)](compression_stream_process%28____%29.md): Performs compression or decompression using an initialized compression stream structure.
- [compression_stream_destroy(\_:)](compression_stream_destroy%28__%29.md): Frees any memory allocated by stream initialization function.
- [compression_stream_flags](compression_stream_flags.md): A set of values used to represent stream compression flags.
- [compression_stream_operation](compression_stream_operation.md): A set of values used to represent a stream compression operation.
- [compression_algorithm](compression_algorithm.md): A structure for values that represent compression algorithms.

# compression_status (Objective-C)

**Framework:** Compression  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A set of values used to represent the status of stream compression.

## Declaration

```objectivec
typedef enum { ... } compression_status;
```

## Topics

### Status Constants

- [COMPRESSION_STATUS_OK](compression_status_ok.md): Indicates the stream has consumed all data in the source buffer, or used all space in the destination buffer.
- [COMPRESSION_STATUS_END](compression_status_end.md): Indicates the stream has read all input from the source, and written all output to the destination.
- [COMPRESSION_STATUS_ERROR](compression_status_error.md): Indicates an error with stream compression.

## See Also

### Multiple-step compression

- [compression_stream](compression_stream.md): A structure representing a compression stream.
- [compression_stream_init](compression_stream_init%28______%29.md): Initializes a compression stream for either compression or decompression.
- [compression_stream_process](compression_stream_process%28____%29.md): Performs compression or decompression using an initialized compression stream structure.
- [compression_stream_destroy](compression_stream_destroy%28__%29.md): Frees any memory allocated by stream initialization function.
- [compression_stream_flags](compression_stream_flags.md): A set of values used to represent stream compression flags.
- [compression_stream_operation](compression_stream_operation.md): A set of values used to represent a stream compression operation.
- [compression_algorithm](compression_algorithm.md): A structure for values that represent compression algorithms.
