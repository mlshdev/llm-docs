> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/dockkit/dockaccessory/observation/init(identifier:type:rect:faceyawangle:)

# init(identifier:type:rect:faceYawAngle:)

**Framework:** DockKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

Creates a new observation.

## Declaration

```swift
init(identifier: Int, type: DockAccessory.Observation.ObservationType, rect: CGRect, faceYawAngle: Measurement<UnitAngle>? = nil)
```

## Parameters

- `identifier`: A unique identifier representing the subject in the frame.
- `type`: The type of subject in the frame.
- `rect`: The coordinates of the subject in the frame.
- `faceYawAngle`: The angle of the subject’s face in radians.
