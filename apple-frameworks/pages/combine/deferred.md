> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/deferred](https://developer.apple.com/documentation/combine/deferred)

# Deferred

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that awaits subscription before running the supplied closure to create a publisher for the new subscriber.

## Declaration

```swift
struct Deferred<DeferredPublisher> where DeferredPublisher : Publisher
```

## Topics

### Creating a deferred publisher

- [init(createPublisher:)](deferred/init%28createpublisher_%29.md): Creates a deferred publisher.

### Declaring supporting types

- [Deferred.Output](deferred/output.md): The kind of values published by this publisher.
- [Deferred.Failure](deferred/failure.md): The kind of errors this publisher might publish.

### Inspecting publisher properties

- [createPublisher](deferred/createpublisher.md): The closure to execute when this deferred publisher receives a subscription.

## Relationships

### Conforms To

- [Publisher](publisher.md)

## See Also

### Convenience Publishers

- [Future](future.md): A publisher that eventually produces a single value and then finishes or fails.
- [Just](just.md): A publisher that emits an output to each subscriber just once, and then finishes.
- [Empty](empty.md): A publisher that never publishes any values, and optionally finishes immediately.
- [Fail](fail.md): A publisher that immediately terminates with the specified error.
- [Record](record.md): A publisher that allows for recording a series of inputs and a completion, for later playback to each subscriber.
