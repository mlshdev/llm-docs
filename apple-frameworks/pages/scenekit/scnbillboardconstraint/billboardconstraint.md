> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnbillboardconstraint/billboardconstraint](https://developer.apple.com/documentation/scenekit/scnbillboardconstraint/billboardconstraint)

# billboardConstraint

**Interface language:** Objective-C

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a new billboard constraint.

## Declaration

```objectivec
+ (instancetype) billboardConstraint;
```

<a id="return-value"></a>

## Return Value

A new billboard constraint object.

<a id="Discussion"></a>

## Discussion

A newly created constraint uses the [SCNBillboardAxisAll](../scnbillboardaxis/all.md) type, so nodes affected by the constraint never rotate with respect to the scene’s point of view. Change the [freeAxes](freeaxes.md) property to partially constrain a node’s orientation.
