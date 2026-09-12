> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/filter](https://developer.apple.com/documentation/combine/publishers/filter)

# Publishers.Filter

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that republishes all elements that match a provided closure.

## Declaration

```swift
struct Filter<Upstream> where Upstream : Publisher
```

## Topics

### Creating a filter publisher

- [init(upstream:isIncluded:)](filter/init%28upstream_isincluded_%29.md): Creates a publisher that republishes all elements that match a provided closure.

### Filtering elements

- [filter(\_:)](filter/filter%28__%29.md): Conforms when `Upstream` conforms to `Publisher`.
- [tryFilter(\_:)](filter/tryfilter%28__%29.md): Conforms when `Upstream` conforms to `Publisher`.

### Declaring supporting types

- [Publishers.Filter.Output](filter/output.md): The kind of values published by this publisher.
- [Publishers.Filter.Failure](filter/failure.md): The kind of errors this publisher might publish.

### Inspecting publisher properties

- [upstream](filter/upstream.md): The publisher from which this publisher receives elements.
- [isIncluded](filter/isincluded.md): A closure that indicates whether to republish an element.

## Relationships

### Conforms To

- [Publisher](../publisher.md)

## See Also

### Filtering elements

- [Publishers.TryFilter](tryfilter.md): A publisher that republishes all elements that match a provided error-throwing closure.
- [Publishers.CompactMap](compactmap.md): A publisher that republishes all non-nil results of calling a closure with each received element.
- [Publishers.TryCompactMap](trycompactmap.md): A publisher that republishes all non-nil results of calling an error-throwing closure with each received element.
- [Publishers.RemoveDuplicates](removeduplicates.md): A publisher that publishes only elements that don’t match the previous element.
- [Publishers.TryRemoveDuplicates](tryremoveduplicates.md): A publisher that publishes only elements that don’t match the previous element, as evaluated by a provided error-throwing closure.
- [Publishers.ReplaceEmpty](replaceempty.md): A publisher that replaces an empty stream with a provided element.
- [Publishers.ReplaceError](replaceerror.md): A publisher that replaces any errors in the stream with a provided element.
