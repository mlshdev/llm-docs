> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/distributed/distributedactor/hash(into:)](https://developer.apple.com/documentation/distributed/distributedactor/hash(into:))

# hash(into:)

**Framework:** Distributed  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A distributed actor’s hash and equality is implemented by directly delegating to its [id](id.md).

## Declaration

```swift
nonisolated func hash(into hasher: inout Hasher)
```

<a id="discussion"></a>

## Discussion

For more details see the “Hashable and Identifiable conformance” section of [DistributedActor](../distributedactor.md).
