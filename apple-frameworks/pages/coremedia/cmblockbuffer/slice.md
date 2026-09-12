> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmblockbuffer/slice](https://developer.apple.com/documentation/coremedia/cmblockbuffer/slice)

# CMBlockBuffer.Slice

**Framework:** Core Media  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A slice of a `CMBlockBuffer` instance.

## Declaration

```swift
struct Slice
```

<a id="overview"></a>

## Overview

> **Important**

> Long-term storage of `CMBlockBuffer.Slice` instances is discouraged. A slice holds a reference to the entire storage of a larger block buffer, not just to the portion it presents, even after the original buffer’s lifetime ends. Long-term storage of a slice may therefore prolong the lifetime of bytes that are no longer otherwise accessible, which can appear to be memory and object leakage.

## Relationships

### Conforms To

- [CMBlockBufferProtocol](../cmblockbufferprotocol.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### Data Types

- [CMBlockBuffer.Error](error.md): A structure that defines block buffer errors.
- [CMBlockBuffer.Flags](flags.md): A structure that defines feature and control flags.
