> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clmonitor-2r51v/events-swift.struct](https://developer.apple.com/documentation/corelocation/clmonitor-2r51v/events-swift.struct)

# CLMonitor.Events

**Framework:** Core Location  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

A type that represents an asynchronous sequence of events.

## Declaration

```swift
struct Events
```

<a id="overview"></a>

## Overview

Use this structure to access and iterate over the events the framework delivers.

## Topics

### Utility methods

- [CLMonitor.Events.Iterator](events-swift.struct/iterator.md): The type that allows iteration over the elements of the sequence.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Monitor events

- [CLMonitor.Event](event.md): An event object that the framework passes to the events sequence in the monitor.
- [CLMonitor.Record](record.md): A structure that represents a condition and its associated event information that the framework is monitoring.
