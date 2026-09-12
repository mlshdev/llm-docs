> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/print](https://developer.apple.com/documentation/combine/publishers/print)

# Publishers.Print

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that prints log messages for all publishing events, optionally prefixed with a given string.

## Declaration

```swift
struct Print<Upstream> where Upstream : Publisher
```

<a id="overview"></a>

## Overview

This publisher prints log messages when receiving the following events:

- subscription
- value
- normal completion
- failure
- cancellation

## Topics

### Creating a print publisher

- [init(upstream:prefix:to:)](print/init%28upstream_prefix_to_%29.md): Creates a publisher that prints log messages for all publishing events.

### Declaring supporting types

- [Publishers.Print.Output](print/output.md): The kind of values published by this publisher.
- [Publishers.Print.Failure](print/failure.md): The kind of errors this publisher might publish.

### Inspecting publisher properties

- [upstream](print/upstream.md): The publisher from which this publisher receives elements.
- [prefix](print/prefix.md): A string with which to prefix all log messages.
- [stream](print/stream.md)

## Relationships

### Conforms To

- [Publisher](../publisher.md)

## See Also

### Debugging

- [Publishers.Breakpoint](breakpoint.md): A publisher that raises a debugger signal when a provided closure needs to stop the process in the debugger.
- [Publishers.HandleEvents](handleevents.md): A publisher that performs the specified closures when publisher events occur.
