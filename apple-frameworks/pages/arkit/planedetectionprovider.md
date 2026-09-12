> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/planedetectionprovider](https://developer.apple.com/documentation/arkit/planedetectionprovider)

# PlaneDetectionProvider

**Framework:** ARKit  
**Kind:** Class  
**Availability:** visionOS 1.0+

A source of live data about planes in a person’s surroundings.

## Declaration

```swift
final class PlaneDetectionProvider
```

<a id="overview"></a>

## Overview

Use this provider to indicate to ARKit the types of plane anchors for your app to detect.

## Topics

### Detecting planes

- [init(alignments:)](planedetectionprovider/init%28alignments_%29.md): Creates a plane detection provider for the types of planes you want to detect.
- [allAnchors](planedetectionprovider/allanchors.md): An array that contains all the plane provider’s anchors.
- [anchorUpdates](planedetectionprovider/anchorupdates.md): A sequence of updates to planes a provider detects.
- [requiredAuthorizations](planedetectionprovider/requiredauthorizations.md): The types of authorizations necessary for detecting planes.
- [isSupported](planedetectionprovider/issupported.md): A Boolean value that indicates whether the current runtime environment supports plane detection providers.

### Inspecting a plane detection provider

- [alignments](planedetectionprovider/alignments.md): The plane alignments that you configure a provider to detect.
- [state](planedetectionprovider/state.md): The current status of data coming from a provider.
- [description](planedetectionprovider/description.md): A textual representation of this plane detection provider.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [DataProvider](dataprovider.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Plane detection

- [Placing content on detected planes](../visionos/placing-content-on-detected-planes.md): Detect horizontal surfaces like tables and floors, as well as vertical planes like walls and doors.
- [PlaneAnchor](planeanchor.md): An anchor that represents horizontal and vertical planes.
