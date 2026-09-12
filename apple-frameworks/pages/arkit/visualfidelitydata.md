> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/visualfidelitydata](https://developer.apple.com/documentation/arkit/visualfidelitydata)

# VisualFidelityData

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** visionOS 27.0+

Visual fidelity data containing device fit and field of view verification.

## Declaration

```swift
struct VisualFidelityData
```

## Topics

### Operators

- [==(\_:\_:)](visualfidelitydata/==%28____%29.md): Compares two visual fidelity data instances for equality.

### Instance Properties

- [description](visualfidelitydata/description.md): A textual representation of this visual fidelity data.
- [deviceFitStatus](visualfidelitydata/devicefitstatus.md): The device fit validation status.
- [isFieldOfViewValid](visualfidelitydata/isfieldofviewvalid.md): Indicates whether the field of view (FoV) is valid.
- [timestamp](visualfidelitydata/timestamp.md): The timestamp when this validation data was captured.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Visual Fidelity

- [VisualFidelityProvider](visualfidelityprovider.md): A data provider that delivers visual fidelity monitoring data.
- [FieldOfViewAnchor](fieldofviewanchor.md): An anchor representing a set of field of view (FoV) boundary polygon points in immersive space.
- [DeviceFitStatus](devicefitstatus.md): Device fit validation status indicating the user’s eye position relative to the optimal device fit range.
