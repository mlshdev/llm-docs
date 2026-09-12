> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/receiveon](https://developer.apple.com/documentation/combine/publishers/receiveon)

# Publishers.ReceiveOn

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that delivers elements to its downstream subscriber on a specific scheduler.

## Declaration

```swift
struct ReceiveOn<Upstream, Context> where Upstream : Publisher, Context : Scheduler
```

## Topics

### Creating a receive-on Publisher

- [init(upstream:scheduler:options:)](receiveon/init%28upstream_scheduler_options_%29.md): Creates a publisher that delivers elements to its downstream subscriber on a specific scheduler.

### Declaring supporting types

- [Publishers.ReceiveOn.Output](receiveon/output.md): The kind of values published by this publisher.
- [Publishers.ReceiveOn.Failure](receiveon/failure.md): The kind of errors this publisher might publish.

### Inspecting publisher properties

- [upstream](receiveon/upstream.md): The publisher from which this publisher receives elements.
- [scheduler](receiveon/scheduler.md): The scheduler the publisher uses to deliver elements.
- [options](receiveon/options.md): Scheduler options used to customize element delivery.

## Relationships

### Conforms To

- [Publisher](../publisher.md)

## See Also

### Working with subscribers

- [Publishers.SubscribeOn](subscribeon.md): A publisher that receives elements from an upstream publisher on a specific scheduler.
