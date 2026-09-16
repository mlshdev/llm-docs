> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/asyncthrowingstream/continuation/termination

# AsyncThrowingStream.Continuation.Termination

**Framework:** Swift  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A type that indicates how the stream terminated.

## Declaration

```swift
enum Termination
```

<a id="overview"></a>

## Overview

The `onTermination` closure receives an instance of this type.

## Topics

### Termination States

- [AsyncThrowingStream.Continuation.Termination.finished(\_:)](termination/finished%28__%29.md): The stream finished as a result of calling the continuation’s `finish` method.
- [AsyncThrowingStream.Continuation.Termination.cancelled](termination/cancelled.md): The stream finished as a result of cancellation.

## Relationships

### Conforms To

- [Sendable](../../sendable.md)
- [SendableMetatype](../../sendablemetatype.md)

## See Also

### Handling Termination

- [onTermination](ontermination.md): A callback to invoke when canceling iteration of an asynchronous stream.
