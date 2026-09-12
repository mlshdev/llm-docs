> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchsourceprocess](https://developer.apple.com/documentation/dispatch/dispatchsourceprocess)

# DispatchSourceProcess

**Framework:** Dispatch  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A dispatch source that monitors an external process for events.

## Declaration

```swift
protocol DispatchSourceProcess : DispatchSourceProtocol, Sendable
```

<a id="overview"></a>

## Overview

You do not adopt this protocol in your objects. Instead, use the [makeProcessSource(identifier:eventMask:queue:)](dispatchsource/makeprocesssource%28identifier_eventmask_queue_%29.md) method to create an object that adopts this protocol.

## Topics

### Getting the Process ID

- [handle](dispatchsourceprocess/handle.md): The process identifier of the process being monitored by the dispatch source.

### Getting the Event Data

- [data](dispatchsourceprocess/data.md): Data associated with the last process-related event.
- [mask](dispatchsourceprocess/mask.md): The process events being monitored by the dispatch source.

## Relationships

### Inherits From

- [DispatchSourceProtocol](dispatchsourceprotocol.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [DispatchSource](dispatchsource.md)

## See Also

### Creating a Process Source

- [makeProcessSource(identifier:eventMask:queue:)](dispatchsource/makeprocesssource%28identifier_eventmask_queue_%29.md): Creates a new dispatch source object for monitoring the specified process.
- [DispatchSource.ProcessEvent](dispatchsource/processevent.md): Events related to a process.
