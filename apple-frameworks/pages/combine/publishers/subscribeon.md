> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/subscribeon](https://developer.apple.com/documentation/combine/publishers/subscribeon)

# Publishers.SubscribeOn

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that receives elements from an upstream publisher on a specific scheduler.

## Declaration

```swift
struct SubscribeOn<Upstream, Context> where Upstream : Publisher, Context : Scheduler
```

## Topics

### Creating a subscribe-on publisher

- [init(upstream:scheduler:options:)](subscribeon/init%28upstream_scheduler_options_%29.md): Creates a publisher that receives elements from an upstream publisher on a specific scheduler.

### Declaring supporting types

- [Publishers.SubscribeOn.Output](subscribeon/output.md): The kind of values published by this publisher.
- [Publishers.SubscribeOn.Failure](subscribeon/failure.md): The kind of errors this publisher might publish.

### Inspecting publisher properties

- [upstream](subscribeon/upstream.md): The publisher from which this publisher receives elements.
- [scheduler](subscribeon/scheduler.md): The scheduler the publisher should use to receive elements.
- [options](subscribeon/options.md): Scheduler options that customize the delivery of elements.

## Relationships

### Conforms To

- [Publisher](../publisher.md)

## See Also

### Working with subscribers

- [Publishers.ReceiveOn](receiveon.md): A publisher that delivers elements to its downstream subscriber on a specific scheduler.
