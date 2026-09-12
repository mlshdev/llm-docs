> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/videoprocessor/removerequest(_:)](https://developer.apple.com/documentation/vision/videoprocessor/removerequest(_:))

# removeRequest(\_:)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

Stops performing a request on future frames.

## Declaration

```swift
final func removeRequest(_ request: any VisionRequest) async -> Bool
```

## Parameters

- `request`: The request to remove.

## See Also

### Adding and removing a request

- [addRequest(\_:cadence:)](addrequest%28__cadence_%29.md): Adds a request to the video processor.
- [VideoProcessor.Cadence](cadence.md): A type that describes the video processing cadence.
