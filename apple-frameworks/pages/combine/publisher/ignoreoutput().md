> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/ignoreoutput()](https://developer.apple.com/documentation/combine/publisher/ignoreoutput())

# ignoreOutput()

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Ignores all upstream elements, but passes along the upstream publisher’s completion state (finished or failed).

## Declaration

```swift
func ignoreOutput() -> Publishers.IgnoreOutput<Self>
```

<a id="return-value"></a>

## Return Value

A publisher that ignores all upstream elements.

<a id="discussion"></a>

## Discussion

Use the [ignoreOutput()](ignoreoutput%28%29.md) operator to determine if a publisher is able to complete successfully or would fail.

In the example below, the array publisher (`numbers`) delivers the first five of its elements successfully, as indicated by the [ignoreOutput()](ignoreoutput%28%29.md) operator. The operator consumes, but doesn’t republish the elements downstream. However, the sixth element, `0`, causes the error throwing closure to catch a `NoZeroValuesAllowedError` that terminates the stream.

```swift
struct NoZeroValuesAllowedError: Error {}
let numbers = [1, 2, 3, 4, 5, 0, 6, 7, 8, 9]
cancellable = numbers.publisher
    .tryFilter({ anInt in
        guard anInt != 0 else { throw NoZeroValuesAllowedError() }
        return anInt < 20
    })
    .ignoreOutput()
    .sink(receiveCompletion: {print("completion: \($0)")},
          receiveValue: {print("value \($0)")})

// Prints: "completion: failure(NoZeroValuesAllowedError())"
```

The output type of this publisher is [Never](https://developer.apple.com/documentation/swift/never).

## See Also

### Reducing elements

- [collect()](collect%28%29.md): Collects all received elements, and emits a single array of the collection when the upstream publisher finishes.
- [collect(\_:)](collect%28__%29.md): Collects up to the specified number of elements, and then emits a single array of the collection.
- [collect(\_:options:)](collect%28__options_%29.md): Collects elements by a given time-grouping strategy, and emits a single array of the collection.
- [Publishers.TimeGroupingStrategy](../publishers/timegroupingstrategy.md): A strategy for collecting received elements.
- [reduce(\_:\_:)](reduce%28____%29.md): Applies a closure that collects each element of a stream and publishes a final result upon completion.
- [tryReduce(\_:\_:)](tryreduce%28____%29.md): Applies an error-throwing closure that collects each element of a stream and publishes a final result upon completion.
