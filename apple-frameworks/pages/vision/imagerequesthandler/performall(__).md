> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/imagerequesthandler/performall(_:)](https://developer.apple.com/documentation/vision/imagerequesthandler/performall(_:))

# performAll(\_:)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

Schedules a collection of framework requests to perform on the handler’s image.

## Declaration

```swift
final func performAll(_ requests: some Collection<any VisionRequest>) -> some AsyncSequence<VisionResult, Never>

```

## Parameters

- `requests`: A collection of requests to perform.

<a id="return-value"></a>

## Return Value

A sequence of requests results.

<a id="Discussion"></a>

## Discussion

This function doesn’t wait for requests to complete before returning. You can receive request results from the `AsyncSequence` as they become available.

## See Also

### Performing the request

- [perform(\_:)](perform%28__%29-l6er.md): Performs one or more framework requests on the handler’s image.
- [perform(\_:)](perform%28__%29-7b6g5.md): Performs a framework request on the handler’s image.
