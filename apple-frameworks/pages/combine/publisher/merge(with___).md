> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/merge(with:_:)](https://developer.apple.com/documentation/combine/publisher/merge(with:_:))

# merge(with:\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Combines elements from this publisher with those from two other publishers, delivering an interleaved sequence of elements.

## Declaration

```swift
func merge<B, C>(with b: B, _ c: C) -> Publishers.Merge3<Self, B, C> where B : Publisher, C : Publisher, Self.Failure == B.Failure, Self.Output == B.Output, B.Failure == C.Failure, B.Output == C.Output
```

## Parameters

- `b`: A second publisher.
- `c`: A third publisher.

<a id="return-value"></a>

## Return Value

A publisher that emits an event when any upstream publisher emits an event.

<a id="discussion"></a>

## Discussion

Use [merge(with:\_:)](merge%28with___%29.md) when you want to receive a new element whenever any of the upstream publishers emits an element. To receive tuples of the most-recent value from all the upstream publishers whenever any of them emit a value, use [combineLatest(\_:\_:)](combinelatest%28____%29-5crqg.md). To combine elements from multiple upstream publishers, use [zip(\_:\_:)](zip%28____%29-8d7k7.md).

In this example, as [merge(with:\_:)](merge%28with___%29.md) receives input from the upstream publishers, it republishes the interleaved elements to the downstream:

```swift
let pubA = PassthroughSubject<Int, Never>()
let pubB = PassthroughSubject<Int, Never>()
let pubC = PassthroughSubject<Int, Never>()

cancellable = pubA
    .merge(with: pubB, pubC)
    .sink { print("\($0)", terminator: " " )}

pubA.send(1)
pubB.send(40)
pubC.send(90)
pubA.send(2)
pubB.send(50)
pubC.send(100)

// Prints: "1 40 90 2 50 100"
```

The merged publisher continues to emit elements until all upstream publishers finish. If an upstream publisher produces an error, the merged publisher fails with that error.

## See Also

### Republishing elements from multiple publishers as an interleaved stream

- [merge(with:)](merge%28with_%29-7fk3a.md): Combines elements from this publisher with those from another publisher of the same type, delivering an interleaved sequence of elements.
- [merge(with:)](merge%28with_%29-7qt71.md): Combines elements from this publisher with those from another publisher, delivering an interleaved sequence of elements.
- [merge(with:\_:\_:)](merge%28with_____%29.md): Combines elements from this publisher with those from three other publishers, delivering an interleaved sequence of elements.
- [merge(with:\_:\_:\_:)](merge%28with_______%29.md): Combines elements from this publisher with those from four other publishers, delivering an interleaved sequence of elements.
- [merge(with:\_:\_:\_:\_:)](merge%28with_________%29.md): Combines elements from this publisher with those from five other publishers, delivering an interleaved sequence of elements.
- [merge(with:\_:\_:\_:\_:\_:)](merge%28with___________%29.md): Combines elements from this publisher with those from six other publishers, delivering an interleaved sequence of elements.
- [merge(with:\_:\_:\_:\_:\_:\_:)](merge%28with_____________%29.md): Combines elements from this publisher with those from seven other publishers, delivering an interleaved sequence of elements.
