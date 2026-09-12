> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/asyncthrowingstream/makestream(of:throwing:bufferingpolicy:)](https://developer.apple.com/documentation/swift/asyncthrowingstream/makestream(of:throwing:bufferingpolicy:))

# makeStream(of:throwing:bufferingPolicy:)

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Initializes a new [AsyncThrowingStream](../asyncthrowingstream.md) and an [AsyncThrowingStream.Continuation](continuation.md).

## Declaration

```swift
@backDeployed(before: macOS 14.0, iOS 17.0, watchOS 10.0, tvOS 17.0)
static func makeStream(of elementType: Element.Type = Element.self, throwing failureType: Failure.Type = Failure.self, bufferingPolicy limit: AsyncThrowingStream<Element, Failure>.Continuation.BufferingPolicy = .unbounded) -> (stream: AsyncThrowingStream<Element, Failure>, continuation: AsyncThrowingStream<Element, Failure>.Continuation) where Failure == any Error
```

## Parameters

- `elementType`: The element type of the stream.
- `failureType`: The failure type of the stream.
- `limit`: The buffering policy that the stream should use.

<a id="return-value"></a>

## Return Value

A tuple containing the stream and its continuation. The continuation should be passed to the producer while the stream should be passed to the consumer.
