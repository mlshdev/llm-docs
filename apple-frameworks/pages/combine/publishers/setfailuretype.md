> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/setfailuretype](https://developer.apple.com/documentation/combine/publishers/setfailuretype)

# Publishers.SetFailureType

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that appears to send a specified failure type.

## Declaration

```swift
struct SetFailureType<Upstream, Failure> where Upstream : Publisher, Failure : Error, Upstream.Failure == Never
```

<a id="overview"></a>

## Overview

The publisher can’t actually fail with the specified type and finishes normally. Use this publisher type when you need to match the error types for two mismatched publishers.

## Topics

### Creating a set failure type publisher

- [init(upstream:)](setfailuretype/init%28upstream_%29.md): Creates a publisher that appears to send a specified failure type.

### Setting failure type

- [setFailureType(to:)](setfailuretype/setfailuretype%28to_%29.md): Changes the failure type declared by the upstream publisher.

### Declaring supporting types

- [Publishers.SetFailureType.Output](setfailuretype/output.md): The kind of values published by this publisher.

### Inspecting publisher properties

- [upstream](setfailuretype/upstream.md): The publisher from which this publisher receives elements.

### Comparing publishers

- [==(\_:\_:)](setfailuretype/==%28____%29.md): Conforms when `Upstream` conforms to `Publisher`, `Upstream` conforms to `Equatable`, `Failure` conforms to `Error`, and `Upstream.Failure` is `Never`. Returns a Boolean value that indicates whether two publishers are equivalent.

### Default Implementations

- [Equatable Implementations](setfailuretype/equatable-implementations.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Publisher](../publisher.md)

## See Also

### Mapping elements

- [Publishers.Map](map.md): A publisher that transforms all elements from the upstream publisher with a provided closure.
- [Publishers.TryMap](trymap.md): A publisher that transforms all elements from the upstream publisher with a provided error-throwing closure.
- [Publishers.MapError](maperror.md): A publisher that converts any failure from the upstream publisher into a new error.
- [Publishers.Scan](scan.md): A publisher that transforms elements from the upstream publisher by providing the current element to a closure along with the last value returned by the closure.
- [Publishers.TryScan](tryscan.md): A publisher that transforms elements from the upstream publisher by providing the current element to a failable closure along with the last value returned by the closure.
