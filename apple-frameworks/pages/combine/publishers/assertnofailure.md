> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/assertnofailure](https://developer.apple.com/documentation/combine/publishers/assertnofailure)

# Publishers.AssertNoFailure

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that raises a fatal error upon receiving any failure, and otherwise republishes all received input.

## Declaration

```swift
struct AssertNoFailure<Upstream> where Upstream : Publisher
```

<a id="overview"></a>

## Overview

Use this function for internal integrity checks that are active during testing but don’t affect performance of shipping code.

## Topics

### Creating an assert no failure publisher

- [init(upstream:prefix:file:line:)](assertnofailure/init%28upstream_prefix_file_line_%29.md): Creates a publisher that raises a fatal error upon receiving any failure, and otherwise republishes all received input.

### Declaring supporting types

- [Publishers.AssertNoFailure.Output](assertnofailure/output.md): The kind of values published by this publisher.
- [Publishers.AssertNoFailure.Failure](assertnofailure/failure.md): The kind of errors this publisher might publish.

### Inspecting publisher properties

- [upstream](assertnofailure/upstream.md): The publisher from which this publisher receives elements.
- [file](assertnofailure/file.md): The filename used in the error message.
- [line](assertnofailure/line.md): The line number used in the error message.
- [prefix](assertnofailure/prefix.md): The string used at the beginning of the fatal error message.

## Relationships

### Conforms To

- [Publisher](../publisher.md)

## See Also

### Handling errors

- [Publishers.Catch](catch.md): A publisher that handles errors from an upstream publisher by replacing the failed publisher with another publisher.
- [Publishers.TryCatch](trycatch.md): A publisher that handles errors from an upstream publisher by replacing the failed publisher with another publisher or producing a new error.
- [Publishers.Retry](retry.md): A publisher that attempts to recreate its subscription to a failed upstream publisher.
