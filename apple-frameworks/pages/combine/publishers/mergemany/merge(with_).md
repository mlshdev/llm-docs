> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/mergemany/merge(with:)](https://developer.apple.com/documentation/combine/publishers/mergemany/merge(with:))

# merge(with:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Combines elements from this publisher with those from another publisher of the same type, delivering an interleaved sequence of elements.

## Declaration

```swift
func merge(with other: Upstream) -> Publishers.MergeMany<Upstream>
```

## Parameters

- `other`: Another publisher of this publisher’s type.

<a id="return-value"></a>

## Return Value

A publisher that emits an event when either upstream publisher emits an event.
