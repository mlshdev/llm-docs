> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compression/compression_status_ok](https://developer.apple.com/documentation/compression/compression_status_ok)

# COMPRESSION_STATUS_OK (Swift)

**Framework:** Compression  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Indicates the stream has consumed all data in the source buffer, or used all space in the destination buffer.

## Declaration

```swift
var COMPRESSION_STATUS_OK: compression_status { get }
```

## See Also

### Status Constants

- [COMPRESSION_STATUS_END](compression_status_end.md): Indicates the stream has read all input from the source, and written all output to the destination.
- [COMPRESSION_STATUS_ERROR](compression_status_error.md): Indicates an error with stream compression.

# COMPRESSION_STATUS_OK (Objective-C)

**Framework:** Compression  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Indicates the stream has consumed all data in the source buffer, or used all space in the destination buffer.

## Declaration

```objectivec
COMPRESSION_STATUS_OK
```

## See Also

### Status Constants

- [COMPRESSION_STATUS_END](compression_status_end.md): Indicates the stream has read all input from the source, and written all output to the destination.
- [COMPRESSION_STATUS_ERROR](compression_status_error.md): Indicates an error with stream compression.
