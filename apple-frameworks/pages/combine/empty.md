> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/empty](https://developer.apple.com/documentation/combine/empty)

# Empty

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that never publishes any values, and optionally finishes immediately.

## Declaration

```swift
struct Empty<Output, Failure> where Failure : Error
```

<a id="overview"></a>

## Overview

You can create a ”Never” publisher — one which never sends values and never finishes or fails — with the initializer `Empty(completeImmediately: false)`.

## Topics

### Creating an empty publisher

- [init(completeImmediately:)](empty/init%28completeimmediately_%29.md): Creates an empty publisher.
- [init(completeImmediately:outputType:failureType:)](empty/init%28completeimmediately_outputtype_failuretype_%29.md): Creates an empty publisher with the given completion behavior and output and failure types.

### Inspecting publisher properties

- [completeImmediately](empty/completeimmediately.md): A Boolean value that indicates whether the publisher immediately sends a completion.

### Comparing publishers

- [==(\_:\_:)](empty/==%28____%29.md): Returns a Boolean value that indicates whether two publishers are equivalent.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Publisher](publisher.md)

## See Also

### Convenience Publishers

- [Future](future.md): A publisher that eventually produces a single value and then finishes or fails.
- [Just](just.md): A publisher that emits an output to each subscriber just once, and then finishes.
- [Deferred](deferred.md): A publisher that awaits subscription before running the supplied closure to create a publisher for the new subscriber.
- [Fail](fail.md): A publisher that immediately terminates with the specified error.
- [Record](record.md): A publisher that allows for recording a series of inputs and a completion, for later playback to each subscriber.
