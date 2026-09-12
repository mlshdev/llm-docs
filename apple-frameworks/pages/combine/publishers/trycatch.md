> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/trycatch](https://developer.apple.com/documentation/combine/publishers/trycatch)

# Publishers.TryCatch

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that handles errors from an upstream publisher by replacing the failed publisher with another publisher or producing a new error.

## Declaration

```swift
struct TryCatch<Upstream, NewPublisher> where Upstream : Publisher, NewPublisher : Publisher, Upstream.Output == NewPublisher.Output
```

<a id="overview"></a>

## Overview

Because this publisher’s handler can throw an error, [Publishers.TryCatch](trycatch.md) defines its [Failure](../publisher/failure.md) type as `Error`. This is different from [Publishers.Catch](catch.md), which gets its failure type from the replacement publisher.

## Topics

### Creating a try-catch publisher

- [init(upstream:handler:)](trycatch/init%28upstream_handler_%29.md): Creates a publisher that handles errors from an upstream publisher by replacing the failed publisher with another publisher or by throwing an error.

### Declaring supporting types

- [Publishers.TryCatch.Output](trycatch/output.md): The kind of values published by this publisher.
- [Publishers.TryCatch.Failure](trycatch/failure.md): The kind of errors this publisher might publish.

### Inspecting publisher properties

- [upstream](trycatch/upstream.md): The publisher from which this publisher receives its elements.
- [handler](trycatch/handler.md): A closure that accepts the upstream failure as input and either returns a publisher to replace the upstream publisher or throws an error.

## Relationships

### Conforms To

- [Publisher](../publisher.md)

## See Also

### Handling errors

- [Publishers.AssertNoFailure](assertnofailure.md): A publisher that raises a fatal error upon receiving any failure, and otherwise republishes all received input.
- [Publishers.Catch](catch.md): A publisher that handles errors from an upstream publisher by replacing the failed publisher with another publisher.
- [Publishers.Retry](retry.md): A publisher that attempts to recreate its subscription to a failed upstream publisher.
