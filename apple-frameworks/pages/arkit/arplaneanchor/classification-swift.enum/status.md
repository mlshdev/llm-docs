> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arplaneanchor/classification-swift.enum/status](https://developer.apple.com/documentation/arkit/arplaneanchor/classification-swift.enum/status)

# ARPlaneAnchor.Classification.Status

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+

Reasons ARKit is unable to classify a plane.

## Declaration

```swift
enum Status
```

<a id="overview"></a>

## Overview

[ARPlaneAnchor.Classification.Status](status.md) tells you why a plane anchor’s [classification](../classification-2r4x8.md) is [ARPlaneAnchor.Classification.none(\_:)](none%28__%29.md).

## Topics

### Classification Status

- [ARPlaneAnchor.Classification.Status.notAvailable](status/notavailable.md): ARKit cannot currently provide plane classification information.
- [ARPlaneAnchor.Classification.Status.undetermined](status/undetermined.md): ARKit has not yet produced a classification for the plane anchor.
- [ARPlaneAnchor.Classification.Status.unknown](status/unknown.md): ARKit has completed its classification process for the plane anchor, but the result is inconclusive.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Missing Classification Status

- [ARPlaneAnchor.Classification.none(\_:)](none%28__%29.md): No classification is available for the plane anchor.
