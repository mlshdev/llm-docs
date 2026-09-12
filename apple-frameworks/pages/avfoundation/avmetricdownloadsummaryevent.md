> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetricdownloadsummaryevent](https://developer.apple.com/documentation/avfoundation/avmetricdownloadsummaryevent)

# AVMetricDownloadSummaryEvent (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Represents a summary metric event with aggregated metrics for the entire download task.

## Declaration

```swift
class AVMetricDownloadSummaryEvent
```

<a id="overview"></a>

## Overview

Subclasses of this type that are used from Swift must fulfill the requirements of a Sendable type.

## Topics

### Inspecting the download summary

- [downloadDuration](avmetricdownloadsummaryevent/downloadduration.md): Returns the total duration of the download in seconds.
- [bytesDownloadedCount](avmetricdownloadsummaryevent/bytesdownloadedcount.md): Returns the total number of bytes downloaded by the download task.
- [mediaResourceRequestCount](avmetricdownloadsummaryevent/mediaresourcerequestcount.md): Returns the total number of media requests performed by the download task. This includes playlist requests, media segment requests, and content key requests.
- [recoverableErrorCount](avmetricdownloadsummaryevent/recoverableerrorcount.md): Returns the total count of recoverable errors encountered during the download. If no errors were encountered, returns 0.
- [variants](avmetricdownloadsummaryevent/variants.md): Returns the variants that were downloaded.
- [errorEvent](avmetricdownloadsummaryevent/errorevent.md): Returns the error event if any. If no value is available, returns nil.

## Relationships

### Inherits From

- [AVMetricEvent](avmetricevent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Summary

- [AVMetricPlayerItemPlaybackSummaryEvent](avmetricplayeritemplaybacksummaryevent.md): An event that represents the combined metrics for the entire playback session.

# AVMetricDownloadSummaryEvent (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Represents a summary metric event with aggregated metrics for the entire download task.

## Declaration

```objectivec
@interface AVMetricDownloadSummaryEvent : AVMetricEvent
```

<a id="overview"></a>

## Overview

Subclasses of this type that are used from Swift must fulfill the requirements of a Sendable type.

## Topics

### Inspecting the download summary

- [downloadDuration](avmetricdownloadsummaryevent/downloadduration.md): Returns the total duration of the download in seconds.
- [bytesDownloadedCount](avmetricdownloadsummaryevent/bytesdownloadedcount.md): Returns the total number of bytes downloaded by the download task.
- [mediaResourceRequestCount](avmetricdownloadsummaryevent/mediaresourcerequestcount.md): Returns the total number of media requests performed by the download task. This includes playlist requests, media segment requests, and content key requests.
- [recoverableErrorCount](avmetricdownloadsummaryevent/recoverableerrorcount.md): Returns the total count of recoverable errors encountered during the download. If no errors were encountered, returns 0.
- [variants](avmetricdownloadsummaryevent/variants.md): Returns the variants that were downloaded.
- [errorEvent](avmetricdownloadsummaryevent/errorevent.md): Returns the error event if any. If no value is available, returns nil.

## Relationships

### Inherits From

- [AVMetricEvent](avmetricevent.md)

## See Also

### Summary

- [AVMetricPlayerItemPlaybackSummaryEvent](avmetricplayeritemplaybacksummaryevent.md): An event that represents the combined metrics for the entire playback session.
