> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/videoprocessor/addrequest(_:cadence:)](https://developer.apple.com/documentation/vision/videoprocessor/addrequest(_:cadence:))

# addRequest(\_:cadence:)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

Adds a request to the video processor.

## Declaration

```swift
final func addRequest<T>(_ request: T, cadence: VideoProcessor.Cadence? = nil) async throws -> some AsyncSequence<T.Result, any Error> where T : VisionRequest

```

## Parameters

- `request`: The request to perform.
- `cadence`: The cadency that specifies how to process the frames.

<a id="return-value"></a>

## Return Value

An [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence) that produces a request result for each frame.

<a id="Discussion"></a>

## Discussion

By default, the framework processes every frame.

## See Also

### Adding and removing a request

- [VideoProcessor.Cadence](cadence.md): A type that describes the video processing cadence.
- [removeRequest(\_:)](removerequest%28__%29.md): Stops performing a request on future frames.
