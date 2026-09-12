> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/videoprocessor/cadence](https://developer.apple.com/documentation/vision/videoprocessor/cadence)

# VideoProcessor.Cadence

**Framework:** Vision  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

A type that describes the video processing cadence.

## Declaration

```swift
enum Cadence
```

## Topics

### Getting the intervals

- [VideoProcessor.Cadence.timeInterval(\_:)](cadence/timeinterval%28__%29.md): A cadence that processes, at most, one frame during each interval you specify.
- [VideoProcessor.Cadence.frameInterval(\_:)](cadence/frameinterval%28__%29.md): A cadence that processes every frame you specify.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Adding and removing a request

- [addRequest(\_:cadence:)](addrequest%28__cadence_%29.md): Adds a request to the video processor.
- [removeRequest(\_:)](removerequest%28__%29.md): Stops performing a request on future frames.
