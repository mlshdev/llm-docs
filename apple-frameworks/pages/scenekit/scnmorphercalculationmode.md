> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmorphercalculationmode](https://developer.apple.com/documentation/scenekit/scnmorphercalculationmode)

# SCNMorpherCalculationMode (Swift)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The interpolation formulas for blending between target geometries.

## Declaration

```swift
enum SCNMorpherCalculationMode
```

<a id="overview"></a>

## Overview

A morpher computes its current surface by summing weighted geometry elements from the base geometry and all target geometries. The position of a vertex on the surface is produced by adding the position vector of a point on the base geometry to the position vectors of the corresponding points on all target geometries. The morpher’s [calculationMode](scnmorpher/calculationmode.md) property selects the formula used to calculate this sum.

If the mode is [SCNMorpherCalculationMode.normalized](scnmorphercalculationmode/normalized.md), the position from the base geometry is weighted by one minus the sum of all target weights, as in the following formula:

```objc
Position = (1 - weight0 - weight1 - ...) * Base + weight0 * Target0 + weight1 * Target1 + ...
```

If the mode is [SCNMorpherCalculationMode.additive](scnmorphercalculationmode/additive.md), the position from the base geometry is not weighted, and SceneKit uses the following formula instead:

```objc
Position = Base + weight0 * Target0 + weight1 * Target1 + ...
```

## Topics

### Constants

- [SCNMorpherCalculationMode.normalized](scnmorphercalculationmode/normalized.md): Target weights must be in the range between `0.0` and `1.0`, and the contribution of the base geometry to the morphed surface is related to the sum of target weights. This is the default mode.
- [SCNMorpherCalculationMode.additive](scnmorphercalculationmode/additive.md): Target weights may take on any value, and weighted contributions for each target are added to the base geometry,

### Initializers

- [init(rawValue:)](scnmorphercalculationmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# SCNMorpherCalculationMode (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The interpolation formulas for blending between target geometries.

## Declaration

```objectivec
enum SCNMorpherCalculationMode : NSInteger;
```

<a id="overview"></a>

## Overview

A morpher computes its current surface by summing weighted geometry elements from the base geometry and all target geometries. The position of a vertex on the surface is produced by adding the position vector of a point on the base geometry to the position vectors of the corresponding points on all target geometries. The morpher’s [calculationMode](scnmorpher/calculationmode.md) property selects the formula used to calculate this sum.

If the mode is [SCNMorpherCalculationModeNormalized](scnmorphercalculationmode/normalized.md), the position from the base geometry is weighted by one minus the sum of all target weights, as in the following formula:

```objc
Position = (1 - weight0 - weight1 - ...) * Base + weight0 * Target0 + weight1 * Target1 + ...
```

If the mode is [SCNMorpherCalculationModeAdditive](scnmorphercalculationmode/additive.md), the position from the base geometry is not weighted, and SceneKit uses the following formula instead:

```objc
Position = Base + weight0 * Target0 + weight1 * Target1 + ...
```

## Topics

### Constants

- [SCNMorpherCalculationModeNormalized](scnmorphercalculationmode/normalized.md): Target weights must be in the range between `0.0` and `1.0`, and the contribution of the base geometry to the morphed surface is related to the sum of target weights. This is the default mode.
- [SCNMorpherCalculationModeAdditive](scnmorphercalculationmode/additive.md): Target weights may take on any value, and weighted contributions for each target are added to the base geometry,
