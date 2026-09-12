> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/downloadableassetsrequeststatus](https://developer.apple.com/documentation/vision/downloadableassetsrequeststatus)

# DownloadableAssetsRequestStatus

**Framework:** Vision  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The status of the assets required by a [DownloadableAssetsRequest](downloadableassetsrequest.md).

## Declaration

```swift
enum DownloadableAssetsRequestStatus
```

## Topics

### Download status cases

- [DownloadableAssetsRequestStatus.error(\_:)](downloadableassetsrequeststatus/error%28__%29.md): The asset download failed with an error.
- [DownloadableAssetsRequestStatus.notReady](downloadableassetsrequeststatus/notready.md): The assets are not ready or the status is unknown. Call [downloadAssets()](downloadableassetsrequest/downloadassets%28%29.md) or [downloadAssets(progress:)](downloadableassetsrequest/downloadassets%28progress_%29.md) to initiate the download.
- [DownloadableAssetsRequestStatus.ready](downloadableassetsrequeststatus/ready.md): The assets are ready.
- [DownloadableAssetsRequestStatus.downloading](downloadableassetsrequeststatus/downloading.md): The assets are being downloaded. Check progress through the subprogress that was passed to [downloadAssets(progress:)](downloadableassetsrequest/downloadassets%28progress_%29.md).

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Protocols

- [ImageProcessingRequest](imageprocessingrequest.md): A type for image-analysis requests that focus on a specific part of an image.
- [PoseProviding](poseproviding.md): An observation that provides a collection of joints that make up a pose.
- [StatefulRequest](statefulrequest.md): The protocol for a type that builds evidence of a condition over time.
- [TargetedRequest](targetedrequest.md): A type for analyzing two images together.
- [VisionObservation](visionobservation.md): A type for objects produced by image-analysis requests.
- [VisionRequest](visionrequest.md): A type for image-analysis requests.
- [DownloadableAssetsRequest](downloadableassetsrequest.md): A request whose execution depends on assets that may need to be downloaded.
