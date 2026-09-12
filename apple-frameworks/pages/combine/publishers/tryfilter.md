> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/tryfilter](https://developer.apple.com/documentation/combine/publishers/tryfilter)

# Publishers.TryFilter

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that republishes all elements that match a provided error-throwing closure.

## Declaration

```swift
struct TryFilter<Upstream> where Upstream : Publisher
```

## Topics

### Creating a try-filter publisher

- [init(upstream:isIncluded:)](tryfilter/init%28upstream_isincluded_%29.md): Creates a publisher that republishes all elements that match a provided error-throwing closure.

### Filtering elements

- [filter(\_:)](tryfilter/filter%28__%29.md): Conforms when `Upstream` conforms to `Publisher`.
- [tryFilter(\_:)](tryfilter/tryfilter%28__%29.md): Conforms when `Upstream` conforms to `Publisher`.

### Declaring supporting types

- [Publishers.TryFilter.Output](tryfilter/output.md): The kind of values published by this publisher.
- [Publishers.TryFilter.Failure](tryfilter/failure.md): The kind of errors this publisher might publish.

### Inspecting publisher properties

- [upstream](tryfilter/upstream.md): The publisher from which this publisher receives elements.
- [isIncluded](tryfilter/isincluded.md): An error-throwing closure that indicates whether this filter should republish an element.

## Relationships

### Conforms To

- [Publisher](../publisher.md)

## See Also

### Filtering elements

- [Publishers.Filter](filter.md): A publisher that republishes all elements that match a provided closure.
- [Publishers.CompactMap](compactmap.md): A publisher that republishes all non-nil results of calling a closure with each received element.
- [Publishers.TryCompactMap](trycompactmap.md): A publisher that republishes all non-nil results of calling an error-throwing closure with each received element.
- [Publishers.RemoveDuplicates](removeduplicates.md): A publisher that publishes only elements that don’t match the previous element.
- [Publishers.TryRemoveDuplicates](tryremoveduplicates.md): A publisher that publishes only elements that don’t match the previous element, as evaluated by a provided error-throwing closure.
- [Publishers.ReplaceEmpty](replaceempty.md): A publisher that replaces an empty stream with a provided element.
- [Publishers.ReplaceError](replaceerror.md): A publisher that replaces any errors in the stream with a provided element.
