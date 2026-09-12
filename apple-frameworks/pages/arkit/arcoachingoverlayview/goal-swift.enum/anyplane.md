> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arcoachingoverlayview/goal-swift.enum/anyplane](https://developer.apple.com/documentation/arkit/arcoachingoverlayview/goal-swift.enum/anyplane)

# ARCoachingOverlayView.Goal.anyPlane (Swift)

**Framework:** ARKit  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A goal that specifies your app requires a plane of any type.

## Declaration

```swift
case anyPlane
```

<a id="Discussion"></a>

## Discussion

When you use this goal, coaching overlay won’t hide until the user has moved their device in a way that facilitates ARKit finding at least one surface. For the available surface types, see [ARPlaneClassification](../../arplaneclassification.md).

## See Also

### Defining a Goal

- [ARCoachingOverlayView.Goal.horizontalPlane](horizontalplane.md): A goal that specifies your app requires a horizontal plane.
- [ARCoachingOverlayView.Goal.tracking](tracking.md): A goal that specifies your app requires basic world tracking.
- [ARCoachingOverlayView.Goal.verticalPlane](verticalplane.md): A goal that specifies your app requires a vertical plane.
- [ARCoachingOverlayView.Goal.geoTracking](geotracking.md): A goal that specifies your app requires a precise geographic location.

# ARCoachingGoalAnyPlane (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS

A goal that specifies your app requires a plane of any type.

## Declaration

```objectivec
ARCoachingGoalAnyPlane
```

<a id="Discussion"></a>

## Discussion

When you use this goal, coaching overlay won’t hide until the user has moved their device in a way that facilitates ARKit finding at least one surface. For the available surface types, see [ARPlaneClassification](../../arplaneclassification.md).

## See Also

### Defining a Goal

- [ARCoachingGoalHorizontalPlane](horizontalplane.md): A goal that specifies your app requires a horizontal plane.
- [ARCoachingGoalTracking](tracking.md): A goal that specifies your app requires basic world tracking.
- [ARCoachingGoalVerticalPlane](verticalplane.md): A goal that specifies your app requires a vertical plane.
- [ARCoachingGoalGeoTracking](geotracking.md): A goal that specifies your app requires a precise geographic location.
