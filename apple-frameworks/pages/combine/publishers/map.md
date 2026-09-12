> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/map](https://developer.apple.com/documentation/combine/publishers/map)

# Publishers.Map

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that transforms all elements from the upstream publisher with a provided closure.

## Declaration

```swift
struct Map<Upstream, Output> where Upstream : Publisher
```

## Topics

### Creating a map publisher

- [init(upstream:transform:)](map/init%28upstream_transform_%29.md): Creates a publisher that transforms all elements from the upstream publisher with a provided closure.

### Mapping elements

- [map(\_:)](map/map%28__%29.md): Conforms when `Upstream` conforms to `Publisher`.
- [tryMap(\_:)](map/trymap%28__%29.md): Conforms when `Upstream` conforms to `Publisher`.

### Declaring supporting types

- [Publishers.Output](output.md): A publisher that publishes elements specified by a range in the sequence of published elements.
- [Publishers.Map.Failure](map/failure.md): The kind of errors this publisher might publish.

### Inspecting publisher properties

- [upstream](map/upstream.md): The publisher from which this publisher receives elements.
- [transform](map/transform.md): The closure that transforms elements from the upstream publisher.

## Relationships

### Conforms To

- [Publisher](../publisher.md)

## See Also

### Mapping elements

- [Publishers.TryMap](trymap.md): A publisher that transforms all elements from the upstream publisher with a provided error-throwing closure.
- [Publishers.MapError](maperror.md): A publisher that converts any failure from the upstream publisher into a new error.
- [Publishers.Scan](scan.md): A publisher that transforms elements from the upstream publisher by providing the current element to a closure along with the last value returned by the closure.
- [Publishers.TryScan](tryscan.md): A publisher that transforms elements from the upstream publisher by providing the current element to a failable closure along with the last value returned by the closure.
- [Publishers.SetFailureType](setfailuretype.md): A publisher that appears to send a specified failure type.
