> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/fieldofviewanchor](https://developer.apple.com/documentation/arkit/fieldofviewanchor)

# FieldOfViewAnchor

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** visionOS 27.0+

An anchor representing a set of field of view (FoV) boundary polygon points in immersive space.

## Declaration

```swift
struct FieldOfViewAnchor
```

<a id="overview"></a>

## Overview

This anchor provides polygon points that define preset FoV boundaries, allowing applications to visualize these FoVs in the immersive space.

## Topics

### Instance Properties

- [description](fieldofviewanchor/description.md): A textual representation of this anchor.
- [id](fieldofviewanchor/id.md): The unique identifier of this anchor.
- [leftPolygonPoints](fieldofviewanchor/leftpolygonpoints.md): Left eye polygon boundary points defining the preset field of view.
- [originFromAnchorTransform](fieldofviewanchor/originfromanchortransform.md): The transform from the anchor to the origin coordinate system.
- [rightPolygonPoints](fieldofviewanchor/rightpolygonpoints.md): Right eye polygon boundary points defining the preset field of view.
- [timestamp](fieldofviewanchor/timestamp.md): The timestamp of this anchor.

### Instance Methods

- [coordinateSpace(correction:)](fieldofviewanchor/coordinatespace%28correction_%29.md): The anchor’s coordinate space.

## Relationships

### Conforms To

- [ARKitCoordinateSpaceProviding](arkitcoordinatespaceproviding.md)
- [Anchor](anchor.md)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Visual Fidelity

- [VisualFidelityProvider](visualfidelityprovider.md): A data provider that delivers visual fidelity monitoring data.
- [VisualFidelityData](visualfidelitydata.md): Visual fidelity data containing device fit and field of view verification.
- [DeviceFitStatus](devicefitstatus.md): Device fit validation status indicating the user’s eye position relative to the optimal device fit range.
