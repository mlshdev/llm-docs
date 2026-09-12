> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmorphercalculationmode/normalized](https://developer.apple.com/documentation/scenekit/scnmorphercalculationmode/normalized)

# SCNMorpherCalculationMode.normalized (Swift)

**Framework:** SceneKit  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Target weights must be in the range between `0.0` and `1.0`, and the contribution of the base geometry to the morphed surface is related to the sum of target weights. This is the default mode.

## Declaration

```swift
case normalized
```

## See Also

### Constants

- [SCNMorpherCalculationMode.additive](additive.md): Target weights may take on any value, and weighted contributions for each target are added to the base geometry,

# SCNMorpherCalculationModeNormalized (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Target weights must be in the range between `0.0` and `1.0`, and the contribution of the base geometry to the morphed surface is related to the sum of target weights. This is the default mode.

## Declaration

```objectivec
SCNMorpherCalculationModeNormalized
```

## See Also

### Constants

- [SCNMorpherCalculationModeAdditive](additive.md): Target weights may take on any value, and weighted contributions for each target are added to the base geometry,
