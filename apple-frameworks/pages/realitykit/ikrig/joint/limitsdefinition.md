> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/ikrig/joint/limitsdefinition](https://developer.apple.com/documentation/realitykit/ikrig/joint/limitsdefinition)

# IKRig.Joint.LimitsDefinition

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A definition of joint rotation limits.

## Declaration

```swift
struct LimitsDefinition
```

<a id="overview"></a>

## Overview

Limit angles are defined as relative to the rest pose.

> **Important**

> The minimum angles need to be less than the maximum angles.

## Topics

### Initializers

- [init(weight:boneAxis:minimumAngles:maximumAngles:)](limitsdefinition/init%28weight_boneaxis_minimumangles_maximumangles_%29.md): Creates a joint limits definition.

### Instance Properties

- [boneAxis](limitsdefinition/boneaxis.md): The axis around which the bone twists.
- [maximumAngles](limitsdefinition/maximumangles.md): The positive delta from the rest pose per-axis in radians.
- [minimumAngles](limitsdefinition/minimumangles.md): The negative delta from the rest pose per-axis in radians.
- [weight](limitsdefinition/weight.md): The weight of the joint rotation limit demand.

### Enumerations

- [IKRig.Joint.LimitsDefinition.Axis](limitsdefinition/axis.md)
