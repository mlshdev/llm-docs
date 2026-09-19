> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/dispatch/dispatchsourcesignal

# DispatchSourceSignal

**Framework:** Dispatch  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A dispatch source that monitors the current process for UNIX signals.

## Declaration

```swift
protocol DispatchSourceSignal : DispatchSourceProtocol, Sendable
```

<a id="overview"></a>

## Overview

You do not adopt this protocol in your objects. Instead, use the [makeSignalSource(signal:queue:)](dispatchsource/makesignalsource%28signal_queue_%29.md) method to create an object that adopts this protocol.

## Relationships

### Inherits From

- [DispatchSourceProtocol](dispatchsourceprotocol.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [DispatchSource](dispatchsource.md)

## See Also

### Creating a Signal Source

- [makeSignalSource(signal:queue:)](dispatchsource/makesignalsource%28signal_queue_%29.md): Creates a new dispatch source object that monitors the arrival of a UNIX signal.
