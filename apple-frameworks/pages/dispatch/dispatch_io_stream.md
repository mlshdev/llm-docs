> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_io_stream](https://developer.apple.com/documentation/dispatch/dispatch_io_stream)

# DISPATCH_IO_STREAM (Swift)

**Framework:** Dispatch  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
var DISPATCH_IO_STREAM: Int32 { get }
```

<a id="Discussion"></a>

## Discussion

The channel represents a linear stream of bytes. Read and write operations are performed serially in the order they were started. Operations always read or write data at the file pointer position that is current when the read or write begins. Read and write operations may be performed simultaneously on the same channel.

Offset values are ignored for channels of this type.

## See Also

### Initializing the Type

- [DISPATCH_IO_RANDOM](dispatch_io_random.md)

# DISPATCH_IO_STREAM (Objective-C)

**Framework:** Dispatch  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
#define DISPATCH_IO_STREAM
```

<a id="Discussion"></a>

## Discussion

The channel represents a linear stream of bytes. Read and write operations are performed serially in the order they were started. Operations always read or write data at the file pointer position that is current when the read or write begins. Read and write operations may be performed simultaneously on the same channel.

Offset values are ignored for channels of this type.

## See Also

### Initializing the Type

- [DISPATCH_IO_RANDOM](dispatch_io_random.md)
