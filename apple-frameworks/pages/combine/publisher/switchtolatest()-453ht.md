> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/switchtolatest()-453ht](https://developer.apple.com/documentation/combine/publisher/switchtolatest()-453ht)

# switchToLatest()

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Republishes elements sent by the most recently received publisher.

## Declaration

```swift
func switchToLatest() -> Publishers.SwitchToLatest<Self.Output, Self>
```

<a id="discussion"></a>

## Discussion

This operator works with an upstream publisher of publishers, flattening the stream of elements to appear as if they were coming from a single stream of elements. It switches the inner publisher as new ones arrive but keeps the outer publisher constant for downstream subscribers.

For example, given the type `AnyPublisher<URLSession.DataTaskPublisher, NSError>`, calling `switchToLatest()` results in the type `SwitchToLatest<(Data, URLResponse), URLError>`. The downstream subscriber sees a continuous stream of `(Data, URLResponse)` elements from what looks like a single [URLSession.DataTaskPublisher](../../foundation/urlsession/datataskpublisher.md) even though the elements are coming from different upstream publishers.

When this operator receives a new publisher from the upstream publisher, it cancels its previous subscription. Use this feature to prevent earlier publishers from performing unnecessary work, such as creating network request publishers from frequently updating user interface publishers.

The following example updates a [PassthroughSubject](../passthroughsubject.md) with a new value every `0.1` seconds. A [map(\_:)](map%28__%29-99evh.md) operator receives the new value and uses it to create a new [URLSession.DataTaskPublisher](../../foundation/urlsession/datataskpublisher.md). By using the `switchToLatest()` operator, the downstream sink subscriber receives the `(Data, URLResponse)` output type from the data task publishers, rather than the [URLSession.DataTaskPublisher](../../foundation/urlsession/datataskpublisher.md) type produced by the [map(\_:)](map%28__%29-99evh.md) operator. Furthermore, creating each new data task publisher cancels the previous data task publisher.

```swift
let subject = PassthroughSubject<Int, Never>()
cancellable = subject
    .setFailureType(to: URLError.self)
    .map() { index -> URLSession.DataTaskPublisher in
        let url = URL(string: "https://example.org/get?index=\(index)")!
        return URLSession.shared.dataTaskPublisher(for: url)
    }
    .switchToLatest()
    .sink(receiveCompletion: { print("Complete: \($0)") },
          receiveValue: { (data, response) in
            guard let url = response.url else { print("Bad response."); return }
            print("URL: \(url)")
    })

for index in 1...5 {
    DispatchQueue.main.asyncAfter(deadline: .now() + TimeInterval(index/10)) {
        subject.send(index)
    }
}

// Prints "URL: https://example.org/get?index=5"
```

The exact behavior of this example depends on the value of `asyncAfter` and the speed of the network connection. If the delay value is longer, or the network connection is fast, the earlier data tasks may complete before `switchToLatest()` can cancel them. If this happens, the output includes multiple URLs whose tasks complete before cancellation.

## See Also

### Republishing elements by subscribing to new publishers

- [flatMap(maxPublishers:\_:)](flatmap%28maxpublishers___%29-3k7z5.md): Transforms all elements from an upstream publisher into a new publisher up to a maximum number of publishers you specify.
- [flatMap(maxPublishers:\_:)](flatmap%28maxpublishers___%29-qxf.md): Conforms when `Failure` is `Never`. Transforms all elements from an upstream publisher into a new publisher up to a maximum number of publishers you specify.
- [flatMap(maxPublishers:\_:)](flatmap%28maxpublishers___%29-hyb0.md): Conforms when `Failure` is `Never`. Transforms all elements from an upstream publisher into a new publisher up to a maximum number of publishers you specify.
- [flatMap(maxPublishers:\_:)](flatmap%28maxpublishers___%29-4of8w.md): Transforms all elements from an upstream publisher into a new publisher up to a maximum number of publishers you specify.
- [switchToLatest()](switchtolatest%28%29-1c51y.md): Conforms when `Failure` is `Never` and `Output` conforms to `Publisher`. Republishes elements sent by the most recently received publisher.
- [switchToLatest()](switchtolatest%28%29-20v3t.md): Conforms when `Output` conforms to `Publisher` and `Output.Failure` is `Never`. Republishes elements sent by the most recently received publisher.
- [switchToLatest()](switchtolatest%28%29-9eb3r.md): Conforms when `Failure` is `Never`, `Output` conforms to `Publisher`, and `Output.Failure` is `Never`. Republishes elements sent by the most recently received publisher.
