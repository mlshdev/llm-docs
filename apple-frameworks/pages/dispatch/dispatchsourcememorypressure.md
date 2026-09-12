> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchsourcememorypressure](https://developer.apple.com/documentation/dispatch/dispatchsourcememorypressure)

# DispatchSourceMemoryPressure

**Framework:** Dispatch  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A dispatch source that monitors the system for changes in the memory pressure condition.

## Declaration

```swift
protocol DispatchSourceMemoryPressure : DispatchSourceProtocol, Sendable
```

<a id="overview"></a>

## Overview

You do not adopt this protocol in your objects. Instead, use the [makeMemoryPressureSource(eventMask:queue:)](dispatchsource/makememorypressuresource%28eventmask_queue_%29.md) method to create an object that adopts this protocol.

## Topics

### Getting the Event Data

- [data](dispatchsourcememorypressure/data.md)
- [mask](dispatchsourcememorypressure/mask.md)

## Relationships

### Inherits From

- [DispatchSourceProtocol](dispatchsourceprotocol.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [DispatchSource](dispatchsource.md)

## See Also

### Creating a Memory Pressure Source

- [makeMemoryPressureSource(eventMask:queue:)](dispatchsource/makememorypressuresource%28eventmask_queue_%29.md): Creates a new dispatch source object that monitors the system for changes in the memory pressure condition.
- [DispatchSource.MemoryPressureEvent](dispatchsource/memorypressureevent.md): Memory pressure events.
