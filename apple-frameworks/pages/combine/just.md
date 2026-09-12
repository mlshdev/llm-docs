> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/just](https://developer.apple.com/documentation/combine/just)

# Just

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that emits an output to each subscriber just once, and then finishes.

## Declaration

```swift
struct Just<Output>
```

<a id="overview"></a>

## Overview

You can use a [Just](just.md) publisher to start a chain of publishers. A [Just](just.md) publisher is also useful when replacing a value with [Publishers.Catch](publishers/catch.md).

In contrast with [Result.Publisher](https://developer.apple.com/documentation/swift/result/publisher-swift.struct), a [Just](just.md) publisher can’t fail with an error. And unlike [Optional.Publisher](https://developer.apple.com/documentation/swift/optional/publisher-swift.struct), a [Just](just.md) publisher always produces a value.

## Topics

### Creating a just ublisher

- [init(\_:)](just/init%28__%29.md): Initializes a publisher that emits the specified output just once.

### Inspecting publisher properties

- [output](just/output.md): The one element that the publisher emits.

### Comparing publishers

- [==(\_:\_:)](just/==%28____%29.md): Conforms when `Output` conforms to `Equatable`. Returns a Boolean value that indicates whether two publishers are equivalent.

### Applying operators

- [Publisher Operators](just-publisher-operators.md): Methods that create downstream publishers or subscribers to act on the elements they receive.

### Default Implementations

- [Equatable Implementations](just/equatable-implementations.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Publisher](publisher.md)

## See Also

### Convenience Publishers

- [Future](future.md): A publisher that eventually produces a single value and then finishes or fails.
- [Deferred](deferred.md): A publisher that awaits subscription before running the supplied closure to create a publisher for the new subscriber.
- [Empty](empty.md): A publisher that never publishes any values, and optionally finishes immediately.
- [Fail](fail.md): A publisher that immediately terminates with the specified error.
- [Record](record.md): A publisher that allows for recording a series of inputs and a completion, for later playback to each subscriber.
