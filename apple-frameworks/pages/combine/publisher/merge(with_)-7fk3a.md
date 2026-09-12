> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/merge(with:)-7fk3a](https://developer.apple.com/documentation/combine/publisher/merge(with:)-7fk3a)

# merge(with:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Combines elements from this publisher with those from another publisher of the same type, delivering an interleaved sequence of elements.

## Declaration

```swift
func merge(with other: Self) -> Publishers.MergeMany<Self>
```

## Parameters

- `other`: Another publisher of this publisher’s type.

<a id="return-value"></a>

## Return Value

A publisher that emits an event when either upstream publisher emits an event.

## See Also

### Republishing elements from multiple publishers as an interleaved stream

- [merge(with:)](merge%28with_%29-7qt71.md): Combines elements from this publisher with those from another publisher, delivering an interleaved sequence of elements.
- [merge(with:\_:)](merge%28with___%29.md): Combines elements from this publisher with those from two other publishers, delivering an interleaved sequence of elements.
- [merge(with:\_:\_:)](merge%28with_____%29.md): Combines elements from this publisher with those from three other publishers, delivering an interleaved sequence of elements.
- [merge(with:\_:\_:\_:)](merge%28with_______%29.md): Combines elements from this publisher with those from four other publishers, delivering an interleaved sequence of elements.
- [merge(with:\_:\_:\_:\_:)](merge%28with_________%29.md): Combines elements from this publisher with those from five other publishers, delivering an interleaved sequence of elements.
- [merge(with:\_:\_:\_:\_:\_:)](merge%28with___________%29.md): Combines elements from this publisher with those from six other publishers, delivering an interleaved sequence of elements.
- [merge(with:\_:\_:\_:\_:\_:\_:)](merge%28with_____________%29.md): Combines elements from this publisher with those from seven other publishers, delivering an interleaved sequence of elements.
