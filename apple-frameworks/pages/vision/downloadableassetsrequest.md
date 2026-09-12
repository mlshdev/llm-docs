> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/downloadableassetsrequest](https://developer.apple.com/documentation/vision/downloadableassetsrequest)

# DownloadableAssetsRequest

**Framework:** Vision  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A request whose execution depends on assets that may need to be downloaded.

## Declaration

```swift
protocol DownloadableAssetsRequest
```

<a id="overview"></a>

## Overview

Inspect [assetStatus](downloadableassetsrequest/assetstatus.md) to determine whether the required assets are ready, and call [downloadAssets()](downloadableassetsrequest/downloadassets%28%29.md) to initiate the download when they are not.

## Topics

### Getting the asset status

- [assetStatus](downloadableassetsrequest/assetstatus.md): The current download status of the assets required by the request.

### Downloading assets

- [downloadAssets()](downloadableassetsrequest/downloadassets%28%29.md): Downloads the assets required to perform the request.
- [downloadAssets(progress:)](downloadableassetsrequest/downloadassets%28progress_%29.md): Downloads the assets required to perform the request, reporting progress through the provided subprogress.

## Relationships

### Conforming Types

- [GenerateIterativeSegmentationRequest](generateiterativesegmentationrequest.md)

## See Also

### Protocols

- [ImageProcessingRequest](imageprocessingrequest.md): A type for image-analysis requests that focus on a specific part of an image.
- [PoseProviding](poseproviding.md): An observation that provides a collection of joints that make up a pose.
- [StatefulRequest](statefulrequest.md): The protocol for a type that builds evidence of a condition over time.
- [TargetedRequest](targetedrequest.md): A type for analyzing two images together.
- [VisionObservation](visionobservation.md): A type for objects produced by image-analysis requests.
- [VisionRequest](visionrequest.md): A type for image-analysis requests.
- [DownloadableAssetsRequestStatus](downloadableassetsrequeststatus.md): The status of the assets required by a [DownloadableAssetsRequest](downloadableassetsrequest.md).
