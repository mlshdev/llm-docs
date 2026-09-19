> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/immersivemediasupport/immersivecamerameshcalibration/init(name:usdzdata:)

# init(name:usdzData:)

**Framework:** Immersive Media Support  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

Creates an instance of `ImmersiveCameraMeshCalibration`.

## Declaration

```swift
init(name: String, usdzData: Data)
```

## Parameters

- `name`: The name of the calibration.
- `usdzData`: The raw data of the USDZ file that contains the calibration mesh.
