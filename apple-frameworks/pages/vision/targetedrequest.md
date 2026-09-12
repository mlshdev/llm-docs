> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/targetedrequest](https://developer.apple.com/documentation/vision/targetedrequest)

# TargetedRequest

**Framework:** Vision  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

A type for analyzing two images together.

## Declaration

```swift
protocol TargetedRequest : VisionRequest
```

## Relationships

### Inherits From

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [VisionRequest](visionrequest.md)

### Conforming Types

- [TrackHomographicImageRegistrationRequest](trackhomographicimageregistrationrequest.md)
- [TrackOpticalFlowRequest](trackopticalflowrequest.md)
- [TrackTranslationalImageRegistrationRequest](tracktranslationalimageregistrationrequest.md)

## See Also

### Protocols

- [ImageProcessingRequest](imageprocessingrequest.md): A type for image-analysis requests that focus on a specific part of an image.
- [PoseProviding](poseproviding.md): An observation that provides a collection of joints that make up a pose.
- [StatefulRequest](statefulrequest.md): The protocol for a type that builds evidence of a condition over time.
- [VisionObservation](visionobservation.md): A type for objects produced by image-analysis requests.
- [VisionRequest](visionrequest.md): A type for image-analysis requests.
- [DownloadableAssetsRequest](downloadableassetsrequest.md): A request whose execution depends on assets that may need to be downloaded.
- [DownloadableAssetsRequestStatus](downloadableassetsrequeststatus.md): The status of the assets required by a [DownloadableAssetsRequest](downloadableassetsrequest.md).
