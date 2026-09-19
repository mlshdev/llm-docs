> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/publishers/autoconnect

# Publishers.Autoconnect

**Framework:** Combine  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that automatically connects to an upstream connectable publisher.

## Declaration

```swift
class Autoconnect<Upstream> where Upstream : ConnectablePublisher
```

<a id="overview"></a>

## Overview

This publisher calls [connect()](../connectablepublisher/connect%28%29.md) on the upstream [ConnectablePublisher](../connectablepublisher.md) when first attached to by a subscriber.

## Topics

### Creating an autoconnect publisher

- [init(upstream:)](autoconnect/init%28upstream_%29.md): Creates a publisher that automatically connects to an upstream connectable publisher.

### Declaring supporting types

- [Publishers.Autoconnect.Output](autoconnect/output.md): The kind of values published by this publisher.
- [Publishers.Autoconnect.Failure](autoconnect/failure.md): The kind of errors this publisher might publish.

### Inspecting publisher properties

- [upstream](autoconnect/upstream.md): The publisher from which this publisher receives elements.

## Relationships

### Conforms To

- [Publisher](../publisher.md)

## See Also

### Using explicit publisher connections

- [Publishers.MakeConnectable](makeconnectable.md): A publisher that provides explicit connectability to another publisher.
