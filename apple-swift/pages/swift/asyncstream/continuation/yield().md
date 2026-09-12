> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/asyncstream/continuation/yield()](https://developer.apple.com/documentation/swift/asyncstream/continuation/yield())

# yield()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Resume the task awaiting the next iteration point by having it return normally from its suspension point.

## Declaration

```swift
@discardableResult func yield() -> AsyncStream<Element>.Continuation.YieldResult where Element == ()
```

<a id="return-value"></a>

## Return Value

A `YieldResult` that indicates the success or failure of the yield operation.

<a id="discussion"></a>

## Discussion

Use this method with `AsyncStream` instances whose `Element` type is `Void`. In this case, the `yield()` call unblocks the awaiting iteration; there is no value to return.

If you call this method repeatedly, each call returns immediately, without blocking for any awaiting consumption from the iteration.

## See Also

### Producing Elements

- [yield(\_:)](yield%28__%29.md): Resume the task awaiting the next iteration point by having it return normally from its suspension point with a given element.
- [yield(with:)](yield%28with_%29.md): Resume the task awaiting the next iteration point by having it return normally from its suspension point with a given result’s success value.
- [AsyncStream.Continuation.YieldResult](yieldresult.md): A type that indicates the result of yielding a value to a client, by way of the continuation.
