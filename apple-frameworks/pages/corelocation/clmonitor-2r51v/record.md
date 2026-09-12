> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clmonitor-2r51v/record](https://developer.apple.com/documentation/corelocation/clmonitor-2r51v/record)

# CLMonitor.Record

**Framework:** Core Location  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

A structure that represents a condition and its associated event information that the framework is monitoring.

## Declaration

```swift
struct Record
```

<a id="overview"></a>

## Overview

The `CLMonitor.Record` contains a condition and most recent event that affects it.

## Topics

### Record characteristics

- [condition](record/condition.md): The condition that the framework is monitoring for.
- [lastEvent](record/lastevent.md): The most recent event the monitor records.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Monitor events

- [CLMonitor.Event](event.md): An event object that the framework passes to the events sequence in the monitor.
- [CLMonitor.Events](events-swift.struct.md): A type that represents an asynchronous sequence of events.
