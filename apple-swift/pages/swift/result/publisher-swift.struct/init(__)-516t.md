> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/result/publisher-swift.struct/init(_:)-516t](https://developer.apple.com/documentation/swift/result/publisher-swift.struct/init(_:)-516t)

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a publisher that delivers the specified result.

## Declaration

```swift
init(_ result: Result<Result<Success, Failure>.Publisher.Output, Failure>)
```

## Parameters

- `result`: The result to deliver to each subscriber.

<a id="discussion"></a>

## Discussion

If `result` is `Swift/Result/success`, then the publisher waits until it receives a request for at least one value, then sends the output to all subscribers and finishes normally. If `result` is `Swift/Result/failure`, then the publisher sends the failure immediately upon subscription.

## See Also

### Creating a Result Publisher

- [init(\_:)](init%28__%29-69fv4.md): Creates a publisher that immediately terminates upon subscription with the given failure.
- [init(\_:)](init%28__%29-7t2tt.md): Creates a publisher that sends the specified output to all subscribers and finishes normally.
