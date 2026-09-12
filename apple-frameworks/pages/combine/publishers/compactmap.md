> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/compactmap](https://developer.apple.com/documentation/combine/publishers/compactmap)

# Publishers.CompactMap

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that republishes all non-nil results of calling a closure with each received element.

## Declaration

```swift
struct CompactMap<Upstream, Output> where Upstream : Publisher
```

## Topics

### Creating a compact map publisher

- [init(upstream:transform:)](compactmap/init%28upstream_transform_%29.md): Creates a publisher that republishes all non-`nil` results of calling a closure with each received element.

### Declaring supporting types

- [Publishers.Output](output.md): A publisher that publishes elements specified by a range in the sequence of published elements.
- [Publishers.CompactMap.Failure](compactmap/failure.md): The kind of errors this publisher might publish.

### Mapping elements

- [map(\_:)](compactmap/map%28__%29.md): Conforms when `Upstream` conforms to `Publisher`.
- [compactMap(\_:)](compactmap/compactmap%28__%29.md): Conforms when `Upstream` conforms to `Publisher`.

### Inspecting publisher properties

- [upstream](compactmap/upstream.md): The publisher from which this publisher receives elements.
- [transform](compactmap/transform.md): A closure that receives values from the upstream publisher and returns optional values.

## Relationships

### Conforms To

- [Publisher](../publisher.md)

## See Also

### Filtering elements

- [Publishers.Filter](filter.md): A publisher that republishes all elements that match a provided closure.
- [Publishers.TryFilter](tryfilter.md): A publisher that republishes all elements that match a provided error-throwing closure.
- [Publishers.TryCompactMap](trycompactmap.md): A publisher that republishes all non-nil results of calling an error-throwing closure with each received element.
- [Publishers.RemoveDuplicates](removeduplicates.md): A publisher that publishes only elements that don’t match the previous element.
- [Publishers.TryRemoveDuplicates](tryremoveduplicates.md): A publisher that publishes only elements that don’t match the previous element, as evaluated by a provided error-throwing closure.
- [Publishers.ReplaceEmpty](replaceempty.md): A publisher that replaces an empty stream with a provided element.
- [Publishers.ReplaceError](replaceerror.md): A publisher that replaces any errors in the stream with a provided element.
