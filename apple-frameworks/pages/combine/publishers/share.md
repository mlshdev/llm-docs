> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/share](https://developer.apple.com/documentation/combine/publishers/share)

# Publishers.Share

**Framework:** Combine  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that shares the output of an upstream publisher with multiple subscribers.

## Declaration

```swift
final class Share<Upstream> where Upstream : Publisher
```

<a id="overview"></a>

## Overview

This publisher type supports multiple subscribers, all of whom receive unchanged elements and completion states from the upstream publisher.

> **Tip**

> [Publishers.Share](share.md) is effectively a combination of the [Publishers.Multicast](multicast.md) and [PassthroughSubject](../passthroughsubject.md) publishers, with an implicit [autoconnect()](../connectablepublisher/autoconnect%28%29.md).

Be aware that [Publishers.Share](share.md) is a class rather than a structure like most other publishers. Use this type when you need a publisher instance that uses reference semantics.

## Topics

### Creating a share publisher

- [init(upstream:)](share/init%28upstream_%29.md): Creates a publisher that shares the output of an upstream publisher with multiple subscribers.

### Declaring supporting types

- [Publishers.Share.Output](share/output.md): The kind of values published by this publisher.
- [Publishers.Share.Failure](share/failure.md): The kind of errors this publisher might publish.

### Inspecting publisher properties

- [upstream](share/upstream.md): The publisher from which this publisher receives elements.

### Comparing publishers

- [==(\_:\_:)](share/==%28____%29.md): Returns a Boolean value that indicates whether two publishers are equivalent.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Publisher](../publisher.md)

## See Also

### Working with multiple subscribers

- [Publishers.Multicast](multicast.md): A publisher that uses a subject to deliver elements to multiple subscribers.
