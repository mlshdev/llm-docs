> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/visualfidelityprovider](https://developer.apple.com/documentation/arkit/visualfidelityprovider)

# VisualFidelityProvider

**Framework:** ARKit  
**Kind:** Class  
**Availability:** visionOS 27.0+

A data provider that delivers visual fidelity monitoring data.

## Declaration

```swift
final class VisualFidelityProvider
```

## Topics

### Structures

- [VisualFidelityProvider.FieldOfView](visualfidelityprovider/fieldofview.md): A field of view (FoV) specification.

### Initializers

- [init(fieldOfView:requestDeviceFitUpdates:presentCoachingAlerts:)](visualfidelityprovider/init%28fieldofview_requestdevicefitupdates_presentcoachingalerts_%29.md): Create a visual fidelity data provider.

### Instance Properties

- [anchorUpdates](visualfidelityprovider/anchorupdates.md): An async sequence of anchor updates for visualizing a preset field of view (FoV).
- [description](visualfidelityprovider/description.md): A textual representation of this visual fidelity data provider.
- [fidelityDataUpdates](visualfidelityprovider/fidelitydataupdates.md): An async sequence of visual fidelity data updates.
- [state](visualfidelityprovider/state.md): The state of this visual fidelity data provider.

### Type Properties

- [isSupported](visualfidelityprovider/issupported.md): Determines whether this device supports the visual fidelity data provider.
- [requiredAuthorizations](visualfidelityprovider/requiredauthorizations.md): The authorization type(s) required by the visual fidelity data provider.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [DataProvider](dataprovider.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Visual Fidelity

- [VisualFidelityData](visualfidelitydata.md): Visual fidelity data containing device fit and field of view verification.
- [FieldOfViewAnchor](fieldofviewanchor.md): An anchor representing a set of field of view (FoV) boundary polygon points in immersive space.
- [DeviceFitStatus](devicefitstatus.md): Device fit validation status indicating the user’s eye position relative to the optimal device fit range.
