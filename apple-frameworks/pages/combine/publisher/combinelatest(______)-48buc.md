> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/combinelatest(_:_:_:)-48buc](https://developer.apple.com/documentation/combine/publisher/combinelatest(_:_:_:)-48buc)

# combineLatest(\_:\_:\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Subscribes to three additional publishers and publishes a tuple upon receiving output from any of the publishers.

## Declaration

```swift
func combineLatest<P, Q, R>(_ publisher1: P, _ publisher2: Q, _ publisher3: R) -> Publishers.CombineLatest4<Self, P, Q, R> where P : Publisher, Q : Publisher, R : Publisher, Self.Failure == P.Failure, P.Failure == Q.Failure, Q.Failure == R.Failure
```

## Parameters

- `publisher1`: A second publisher to combine with the first publisher.
- `publisher2`: A third publisher to combine with the first publisher.
- `publisher3`: A fourth publisher to combine with the first publisher.

<a id="return-value"></a>

## Return Value

A publisher that receives and combines elements from this publisher and three other publishers.

<a id="discussion"></a>

## Discussion

Use [combineLatest(\_:\_:\_:)](combinelatest%28______%29-48buc.md) when you want the downstream subscriber to receive a tuple of the most-recent element from multiple publishers when any of them emit a value. To combine elements from multiple publishers, use [zip(\_:\_:\_:)](zip%28______%29-16rcy.md) instead. To receive just the most-recent element from multiple publishers rather than tuples, use [merge(with:\_:\_:)](merge%28with_____%29.md).

> **Tip**

> The combined publisher doesn’t produce elements until each of its upstream publishers publishes at least one element.

The combined publisher passes through any requests to *all* upstream publishers. However, it still obeys the demand-fulfilling rule of only sending the request amount downstream. If the demand isn’t [unlimited](../subscribers/demand/unlimited.md), it drops values from upstream publishers. It implements this by using a buffer size of 1 for each upstream, and holds the most-recent value in each buffer.

All upstream publishers need to finish for this publisher to finish. If an upstream publisher never publishes a value, this publisher never finishes.

In the example below, [combineLatest(\_:\_:\_:)](combinelatest%28______%29-48buc.md) receives input from any of the publishers, combines the latest value from each publisher into a tuple and publishes it:

```swift
let pub = PassthroughSubject<Int, Never>()
let pub2 = PassthroughSubject<Int, Never>()
let pub3 = PassthroughSubject<Int, Never>()
let pub4 = PassthroughSubject<Int, Never>()

cancellable = pub
    .combineLatest(pub2, pub3, pub4)
    .sink { print("Result: \($0).") }

pub.send(1)
pub.send(2)
pub2.send(2)
pub3.send(9)
pub4.send(1)

pub.send(3)
pub2.send(12)
pub.send(13)
pub3.send(19)
//
// Prints:
//  Result: (2, 2, 9, 1).
//  Result: (3, 2, 9, 1).
//  Result: (3, 12, 9, 1).
//  Result: (13, 12, 9, 1).
//  Result: (13, 12, 19, 1).
```

If any individual publisher of the combined set terminates with a failure, this publisher also fails.

## See Also

### Collecting and republishing the latest elements from multiple publishers

- [combineLatest(\_:\_:)](combinelatest%28____%29-1n30g.md): Subscribes to an additional publisher and invokes a closure upon receiving output from either publisher.
- [combineLatest(\_:)](combinelatest%28__%29.md): Subscribes to an additional publisher and publishes a tuple upon receiving output from either publisher.
- [combineLatest(\_:\_:\_:)](combinelatest%28______%29-6ekpz.md): Subscribes to two additional publishers and invokes a closure upon receiving output from any of the publishers.
- [combineLatest(\_:\_:)](combinelatest%28____%29-5crqg.md): Subscribes to two additional publishers and publishes a tuple upon receiving output from any of the publishers.
- [combineLatest(\_:\_:\_:\_:)](combinelatest%28________%29.md): Subscribes to three additional publishers and invokes a closure upon receiving output from any of the publishers.
