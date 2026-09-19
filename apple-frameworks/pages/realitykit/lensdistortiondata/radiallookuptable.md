> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lensdistortiondata/radiallookuptable

# radialLookupTable

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

A linear interpolation lookup table from the `center` to the maximum distance corner of the image.  This describes the magnification of radius at a given radius. This is the same structure as `lensDistortionLookupTable` in `AVCameraCalibrationData` and can be used in a similar manner, with the data already converted into a float array.

## Declaration

```swift
let radialLookupTable: [Float]
```
