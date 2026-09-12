> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/fail](https://developer.apple.com/documentation/combine/fail)

# Fail

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that immediately terminates with the specified error.

## Declaration

```swift
struct Fail<Output, Failure> where Failure : Error
```

## Topics

### Creating a fail publisher

- [init(error:)](fail/init%28error_%29.md): Creates a publisher that immediately terminates with the specified failure.
- [init(outputType:failure:)](fail/init%28outputtype_failure_%29.md): Creates publisher with the given output type, that immediately terminates with the specified failure.

### Inspecting publisher properties

- [error](fail/error.md): The failure to send when terminating the publisher.

### Comparing publishers

- [==(\_:\_:)](fail/==%28____%29.md): Conforms when `Failure` conforms to `Equatable` and `Error`. Returns a Boolean value that indicates whether two publishers are equivalent.

### Default Implementations

- [Equatable Implementations](fail/equatable-implementations.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Publisher](publisher.md)

## See Also

### Convenience Publishers

- [Future](future.md): A publisher that eventually produces a single value and then finishes or fails.
- [Just](just.md): A publisher that emits an output to each subscriber just once, and then finishes.
- [Deferred](deferred.md): A publisher that awaits subscription before running the supplied closure to create a publisher for the new subscriber.
- [Empty](empty.md): A publisher that never publishes any values, and optionally finishes immediately.
- [Record](record.md): A publisher that allows for recording a series of inputs and a completion, for later playback to each subscriber.
