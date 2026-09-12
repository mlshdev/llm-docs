> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/retry](https://developer.apple.com/documentation/combine/publishers/retry)

# Publishers.Retry

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that attempts to recreate its subscription to a failed upstream publisher.

## Declaration

```swift
struct Retry<Upstream> where Upstream : Publisher
```

## Topics

### Creating a retry publisher

- [init(upstream:retries:)](retry/init%28upstream_retries_%29.md): Creates a publisher that attempts to recreate its subscription to a failed upstream publisher.

### Declaring supporting types

- [Publishers.Retry.Output](retry/output.md): The kind of values published by this publisher.
- [Publishers.Retry.Failure](retry/failure.md): The kind of errors this publisher might publish.

### Inspecting publisher properties

- [upstream](retry/upstream.md): The publisher from which this publisher receives elements.
- [retries](retry/retries.md): The maximum number of retry attempts to perform.

### Comparing publishers

- [==(\_:\_:)](retry/==%28____%29.md): Conforms when `Upstream` conforms to `Publisher` and `Equatable`. Returns a Boolean value that indicates whether two publishers are equivalent.

### Default Implementations

- [Equatable Implementations](retry/equatable-implementations.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Publisher](../publisher.md)

## See Also

### Handling errors

- [Publishers.AssertNoFailure](assertnofailure.md): A publisher that raises a fatal error upon receiving any failure, and otherwise republishes all received input.
- [Publishers.Catch](catch.md): A publisher that handles errors from an upstream publisher by replacing the failed publisher with another publisher.
- [Publishers.TryCatch](trycatch.md): A publisher that handles errors from an upstream publisher by replacing the failed publisher with another publisher or producing a new error.
