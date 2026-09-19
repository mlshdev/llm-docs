> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/hovereffectcomponent/highlighthovereffectstyle/strength

# strength

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

A floating-point value that represents the intensity of the effect.

## Declaration

```swift
var strength: Float
```

<a id="discussion"></a>

## Discussion

Defaults to 1.0.

Higher values increase the intensity of the effect and make it more prominent while lower values decrease it. Setting this to 0.0 stops the effect from displaying.
