> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/asyncstream/continuation/yield(_:)](https://developer.apple.com/documentation/swift/asyncstream/continuation/yield(_:))

# yield(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Resume the task awaiting the next iteration point by having it return normally from its suspension point with a given element.

## Declaration

```swift
@discardableResult func yield(_ value: sending Element) -> AsyncStream<Element>.Continuation.YieldResult
```

## Parameters

- `value`: The value to yield from the continuation.

<a id="return-value"></a>

## Return Value

A `YieldResult` that indicates the success or failure of the yield operation.

<a id="discussion"></a>

## Discussion

If nothing is awaiting the next value, this method attempts to buffer the result’s element.

This can be called more than once and returns to the caller immediately without blocking for any awaiting consumption from the iteration.

## See Also

### Producing Elements

- [yield(with:)](yield%28with_%29.md): Resume the task awaiting the next iteration point by having it return normally from its suspension point with a given result’s success value.
- [yield()](yield%28%29.md): Resume the task awaiting the next iteration point by having it return normally from its suspension point.
- [AsyncStream.Continuation.YieldResult](yieldresult.md): A type that indicates the result of yielding a value to a client, by way of the continuation.
