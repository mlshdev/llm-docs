> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmorpher/calculationmode](https://developer.apple.com/documentation/scenekit/scnmorpher/calculationmode)

# calculationMode (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The interpolation formula for blending between target geometries.

## Declaration

```swift
var calculationMode: SCNMorpherCalculationMode { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [SCNMorpherCalculationMode.normalized](../scnmorphercalculationmode/normalized.md). See [SCNMorpherCalculationMode](../scnmorphercalculationmode.md) for allowed values.

# calculationMode (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

The interpolation formula for blending between target geometries.

## Declaration

```objectivec
@property (nonatomic) SCNMorpherCalculationMode calculationMode;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [SCNMorpherCalculationModeNormalized](../scnmorphercalculationmode/normalized.md). See [SCNMorpherCalculationMode](../scnmorphercalculationmode.md) for allowed values.
