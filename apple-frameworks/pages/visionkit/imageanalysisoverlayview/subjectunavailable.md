> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/visionkit/imageanalysisoverlayview/subjectunavailable

# ImageAnalysisOverlayView.SubjectUnavailable

**Framework:** VisionKit  
**Kind:** Enumeration  
**Availability:** macOS 13.0+

Error conditions that can occur during subject analysis.

## Declaration

```swift
enum SubjectUnavailable
```

<a id="overview"></a>

## Overview

This enumeration contains a failure [ImageAnalysisOverlayView.SubjectUnavailable.imageUnavailable](subjectunavailable/imageunavailable.md) that can occur when the [ImageAnalysisOverlayView.Subject](subject.md) property [image](subject/image.md) fails to produce a result.

## Topics

### Enumeration Cases

- [ImageAnalysisOverlayView.SubjectUnavailable.imageUnavailable](subjectunavailable/imageunavailable.md): An error that indicates the subject fails to produce an image.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
