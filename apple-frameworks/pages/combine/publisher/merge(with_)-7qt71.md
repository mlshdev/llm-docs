> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/merge(with:)-7qt71](https://developer.apple.com/documentation/combine/publisher/merge(with:)-7qt71)

# merge(with:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Combines elements from this publisher with those from another publisher, delivering an interleaved sequence of elements.

## Declaration

```swift
func merge<P>(with other: P) -> Publishers.Merge<Self, P> where P : Publisher, Self.Failure == P.Failure, Self.Output == P.Output
```

## Parameters

- `other`: Another publisher.

<a id="return-value"></a>

## Return Value

A publisher that emits an event when either upstream publisher emits an event.

<a id="discussion"></a>

## Discussion

Use [merge(with:)](merge%28with_%29-7fk3a.md) when you want to receive a new element whenever any of the upstream publishers emits an element. To receive tuples of the most-recent value from all the upstream publishers whenever any of them emit a value, use [combineLatest(\_:)](combinelatest%28__%29.md). To combine elements from multiple upstream publishers, use [zip(\_:)](zip%28__%29.md).

In this example, as [merge(with:)](merge%28with_%29-7fk3a.md) receives input from either upstream publisher, it republishes it to the downstream:

```swift
let publisher = PassthroughSubject<Int, Never>()
let pub2 = PassthroughSubject<Int, Never>()

cancellable = publisher
    .merge(with: pub2)
    .sink { print("\($0)", terminator: " " )}

publisher.send(2)
pub2.send(2)
publisher.send(3)
pub2.send(22)
publisher.send(45)
pub2.send(22)
publisher.send(17)

// Prints: "2 2 3 22 45 22 17"
```

The merged publisher continues to emit elements until all upstream publishers finish. If an upstream publisher produces an error, the merged publisher fails with that error.

## See Also

### Republishing elements from multiple publishers as an interleaved stream

- [merge(with:)](merge%28with_%29-7fk3a.md): Combines elements from this publisher with those from another publisher of the same type, delivering an interleaved sequence of elements.
- [merge(with:\_:)](merge%28with___%29.md): Combines elements from this publisher with those from two other publishers, delivering an interleaved sequence of elements.
- [merge(with:\_:\_:)](merge%28with_____%29.md): Combines elements from this publisher with those from three other publishers, delivering an interleaved sequence of elements.
- [merge(with:\_:\_:\_:)](merge%28with_______%29.md): Combines elements from this publisher with those from four other publishers, delivering an interleaved sequence of elements.
- [merge(with:\_:\_:\_:\_:)](merge%28with_________%29.md): Combines elements from this publisher with those from five other publishers, delivering an interleaved sequence of elements.
- [merge(with:\_:\_:\_:\_:\_:)](merge%28with___________%29.md): Combines elements from this publisher with those from six other publishers, delivering an interleaved sequence of elements.
- [merge(with:\_:\_:\_:\_:\_:\_:)](merge%28with_____________%29.md): Combines elements from this publisher with those from seven other publishers, delivering an interleaved sequence of elements.
