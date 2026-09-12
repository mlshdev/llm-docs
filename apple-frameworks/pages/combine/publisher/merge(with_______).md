> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/merge(with:_:_:_:)](https://developer.apple.com/documentation/combine/publisher/merge(with:_:_:_:))

# merge(with:\_:\_:\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Combines elements from this publisher with those from four other publishers, delivering an interleaved sequence of elements.

## Declaration

```swift
func merge<B, C, D, E>(with b: B, _ c: C, _ d: D, _ e: E) -> Publishers.Merge5<Self, B, C, D, E> where B : Publisher, C : Publisher, D : Publisher, E : Publisher, Self.Failure == B.Failure, Self.Output == B.Output, B.Failure == C.Failure, B.Output == C.Output, C.Failure == D.Failure, C.Output == D.Output, D.Failure == E.Failure, D.Output == E.Output
```

## Parameters

- `b`: A second publisher.
- `c`: A third publisher.
- `d`: A fourth publisher.
- `e`: A fifth publisher.

<a id="return-value"></a>

## Return Value

A publisher that emits an event when any upstream publisher emits an event.

<a id="discussion"></a>

## Discussion

Use [merge(with:\_:\_:\_:)](merge%28with_______%29.md) when you want to receive a new element whenever any of the upstream publishers emits an element. To receive tuples of the most-recent value from all the upstream publishers whenever any of them emit a value, use [combineLatest(\_:\_:\_:)](combinelatest%28______%29-48buc.md). To combine elements from multiple upstream publishers, use [zip(\_:\_:\_:)](zip%28______%29-16rcy.md).

In this example, as [merge(with:\_:\_:\_:)](merge%28with_______%29.md) receives input from the upstream publishers, it republishes the interleaved elements to the downstream:

```swift
 let pubA = PassthroughSubject<Int, Never>()
 let pubB = PassthroughSubject<Int, Never>()
 let pubC = PassthroughSubject<Int, Never>()
 let pubD = PassthroughSubject<Int, Never>()
 let pubE = PassthroughSubject<Int, Never>()

 cancellable = pubA
     .merge(with: pubB, pubC, pubD, pubE)
     .sink { print("\($0)", terminator: " " ) }

 pubA.send(1)
 pubB.send(40)
 pubC.send(90)
 pubD.send(-1)
 pubE.send(33)
 pubA.send(2)
 pubB.send(50)
 pubC.send(100)
 pubD.send(-2)
 pubE.send(33)

 // Prints: "1 40 90 -1 33 2 50 100 -2 33"
```

The merged publisher continues to emit elements until all upstream publishers finish. If an upstream publisher produces an error, the merged publisher fails with that error.

## See Also

### Republishing elements from multiple publishers as an interleaved stream

- [merge(with:)](merge%28with_%29-7fk3a.md): Combines elements from this publisher with those from another publisher of the same type, delivering an interleaved sequence of elements.
- [merge(with:)](merge%28with_%29-7qt71.md): Combines elements from this publisher with those from another publisher, delivering an interleaved sequence of elements.
- [merge(with:\_:)](merge%28with___%29.md): Combines elements from this publisher with those from two other publishers, delivering an interleaved sequence of elements.
- [merge(with:\_:\_:)](merge%28with_____%29.md): Combines elements from this publisher with those from three other publishers, delivering an interleaved sequence of elements.
- [merge(with:\_:\_:\_:\_:)](merge%28with_________%29.md): Combines elements from this publisher with those from five other publishers, delivering an interleaved sequence of elements.
- [merge(with:\_:\_:\_:\_:\_:)](merge%28with___________%29.md): Combines elements from this publisher with those from six other publishers, delivering an interleaved sequence of elements.
- [merge(with:\_:\_:\_:\_:\_:\_:)](merge%28with_____________%29.md): Combines elements from this publisher with those from seven other publishers, delivering an interleaved sequence of elements.
