> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compression/compression_status_error](https://developer.apple.com/documentation/compression/compression_status_error)

# COMPRESSION_STATUS_ERROR (Swift)

**Framework:** Compression  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Indicates an error with stream compression.

## Declaration

```swift
var COMPRESSION_STATUS_ERROR: compression_status { get }
```

<a id="Discussion"></a>

## Discussion

If there’s an error with stream compression or decompression, for example if the encoded data is corrupted, [compression_stream_process(\_:\_:)](compression_stream_process%28____%29.md) returns [COMPRESSION_STATUS_ERROR](compression_status_error.md).

## See Also

### Status Constants

- [COMPRESSION_STATUS_OK](compression_status_ok.md): Indicates the stream has consumed all data in the source buffer, or used all space in the destination buffer.
- [COMPRESSION_STATUS_END](compression_status_end.md): Indicates the stream has read all input from the source, and written all output to the destination.

# COMPRESSION_STATUS_ERROR (Objective-C)

**Framework:** Compression  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Indicates an error with stream compression.

## Declaration

```objectivec
COMPRESSION_STATUS_ERROR
```

<a id="Discussion"></a>

## Discussion

If there’s an error with stream compression or decompression, for example if the encoded data is corrupted, [compression_stream_process](compression_stream_process%28____%29.md) returns [COMPRESSION_STATUS_ERROR](compression_status_error.md).

## See Also

### Status Constants

- [COMPRESSION_STATUS_OK](compression_status_ok.md): Indicates the stream has consumed all data in the source buffer, or used all space in the destination buffer.
- [COMPRESSION_STATUS_END](compression_status_end.md): Indicates the stream has read all input from the source, and written all output to the destination.
