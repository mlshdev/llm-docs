> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/multicast](https://developer.apple.com/documentation/combine/publishers/multicast)

# Publishers.Multicast

**Framework:** Combine  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that uses a subject to deliver elements to multiple subscribers.

## Declaration

```swift
final class Multicast<Upstream, SubjectType> where Upstream : Publisher, SubjectType : Subject, Upstream.Failure == SubjectType.Failure, Upstream.Output == SubjectType.Output
```

## Mentioned In

- [Controlling Publishing with Connectable Publishers](../controlling-publishing-with-connectable-publishers.md)

<a id="overview"></a>

## Overview

Use a multicast publisher when you have multiple downstream subscribers, but you want upstream publishers to only process one [receive(\_:)](../subscriber/receive%28__%29.md) call per event.

## Topics

### Creating a multicast publisher

- [init(upstream:createSubject:)](multicast/init%28upstream_createsubject_%29.md): Creates a multicast publisher that applies a closure to create a subject that delivers elements to subscribers.

### Declaring supporting types

- [Publishers.Multicast.Output](multicast/output.md): The kind of values published by this publisher.
- [Publishers.Multicast.Failure](multicast/failure.md): The kind of errors this publisher might publish.

### Inspecting publisher properties

- [upstream](multicast/upstream.md): The publisher from which this publisher receives its elements.
- [createSubject](multicast/createsubject.md): A closure that returns a subject each time a subscriber attaches to the multicast publisher.

## Relationships

### Conforms To

- [ConnectablePublisher](../connectablepublisher.md)
- [Publisher](../publisher.md)

## See Also

### Working with multiple subscribers

- [Publishers.Share](share.md): A publisher that shares the output of an upstream publisher with multiple subscribers.
