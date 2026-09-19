> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/immersivemediasupport/parametricimmersiveassetinfo/isparametricimmersive(asset:)

# isParametricImmersive(asset:)

**Framework:** Immersive Media Support  
**Kind:** Type Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

Checks asynchronously whether the asset is already in the parametric immersive format.

## Declaration

```swift
class func isParametricImmersive(asset: AVURLAsset) async -> Bool
```

## Parameters

- `asset`: Original AVURLAsset.
