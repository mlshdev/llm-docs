> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/replaceempty](https://developer.apple.com/documentation/combine/publishers/replaceempty)

# Publishers.ReplaceEmpty

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that replaces an empty stream with a provided element.

## Declaration

```swift
struct ReplaceEmpty<Upstream> where Upstream : Publisher
```

## Topics

### Creating a replace empty publisher

- [init(upstream:output:)](replaceempty/init%28upstream_output_%29.md): Creates a publisher that replaces an empty stream with a provided element.

### Declaring supporting types

- [Publishers.ReplaceEmpty.Output](replaceempty/output-swift.typealias.md): The kind of values published by this publisher.
- [Publishers.ReplaceEmpty.Output](replaceempty/output-swift.typealias.md): The kind of values published by this publisher.
- [Publishers.ReplaceEmpty.Failure](replaceempty/failure.md): The kind of errors this publisher might publish.

### Inspecting publisher properties

- [upstream](replaceempty/upstream.md): The publisher from which this publisher receives elements.
- [output](replaceempty/output-swift.property.md): The element to deliver when the upstream publisher finishes without delivering any elements.
- [output](replaceempty/output-swift.property.md): The element to deliver when the upstream publisher finishes without delivering any elements.

### Comparing publishers

- [==(\_:\_:)](replaceempty/==%28____%29.md): Conforms when `Upstream` conforms to `Publisher`, `Upstream` conforms to `Equatable`, and `Upstream.Output` conforms to `Equatable`. Returns a Boolean value that indicates whether two publishers are equivalent.

### Default Implementations

- [Equatable Implementations](replaceempty/equatable-implementations.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Publisher](../publisher.md)

## See Also

### Filtering elements

- [Publishers.Filter](filter.md): A publisher that republishes all elements that match a provided closure.
- [Publishers.TryFilter](tryfilter.md): A publisher that republishes all elements that match a provided error-throwing closure.
- [Publishers.CompactMap](compactmap.md): A publisher that republishes all non-nil results of calling a closure with each received element.
- [Publishers.TryCompactMap](trycompactmap.md): A publisher that republishes all non-nil results of calling an error-throwing closure with each received element.
- [Publishers.RemoveDuplicates](removeduplicates.md): A publisher that publishes only elements that don’t match the previous element.
- [Publishers.TryRemoveDuplicates](tryremoveduplicates.md): A publisher that publishes only elements that don’t match the previous element, as evaluated by a provided error-throwing closure.
- [Publishers.ReplaceError](replaceerror.md): A publisher that replaces any errors in the stream with a provided element.
