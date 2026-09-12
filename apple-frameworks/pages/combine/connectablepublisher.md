> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/connectablepublisher](https://developer.apple.com/documentation/combine/connectablepublisher)

# ConnectablePublisher

**Framework:** Combine  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that provides an explicit means of connecting and canceling publication.

## Declaration

```swift
protocol ConnectablePublisher<Output, Failure> : Publisher
```

## Mentioned In

- [Controlling Publishing with Connectable Publishers](controlling-publishing-with-connectable-publishers.md)
- [Replacing Foundation Timers with Timer Publishers](replacing-foundation-timers-with-timer-publishers.md)

<a id="overview"></a>

## Overview

Use a [ConnectablePublisher](connectablepublisher.md) when you need to perform additional configuration or setup prior to producing any elements.

This publisher doesn’t produce any elements until you call its [connect()](connectablepublisher/connect%28%29.md) method.

Use [makeConnectable()](publisher/makeconnectable%28%29.md) to create a [ConnectablePublisher](connectablepublisher.md) from any publisher whose failure type is [Never](https://developer.apple.com/documentation/swift/never).

## Topics

### Performing explicit connections

- [connect()](connectablepublisher/connect%28%29.md): Connects to the publisher, allowing it to produce elements, and returns an instance with which to cancel publishing.

### Connecting automatically

- [autoconnect()](connectablepublisher/autoconnect%28%29.md): Automates the process of connecting or disconnecting from this connectable publisher.

## Relationships

### Inherits From

- [Publisher](publisher.md)

### Conforming Types

- [Publishers.MakeConnectable](publishers/makeconnectable.md)
- [Publishers.Multicast](publishers/multicast.md)

## See Also

### Connectable Publishers

- [Controlling Publishing with Connectable Publishers](controlling-publishing-with-connectable-publishers.md): Coordinate when publishers start sending elements to subscribers.
