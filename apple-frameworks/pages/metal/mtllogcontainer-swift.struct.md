> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtllogcontainer-swift.struct](https://developer.apple.com/documentation/metal/mtllogcontainer-swift.struct)

# MTLLogContainer

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS

A collection of logged messages, created when a Metal device runs a command buffer.

## Declaration

```swift
struct MTLLogContainer
```

<a id="overview"></a>

## Overview

Enumerate a log container object to get a list of [MTLFunctionLog](mtlfunctionlog.md) instances.

## Relationships

### Conforms To

- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Shader logs

- [MTLFunctionLog](mtlfunctionlog.md): A log entry a Metal device generates when the it runs a command buffer.
