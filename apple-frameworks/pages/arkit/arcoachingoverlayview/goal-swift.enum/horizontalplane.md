> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arcoachingoverlayview/goal-swift.enum/horizontalplane](https://developer.apple.com/documentation/arkit/arcoachingoverlayview/goal-swift.enum/horizontalplane)

# ARCoachingOverlayView.Goal.horizontalPlane (Swift)

**Framework:** ARKit  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A goal that specifies your app requires a horizontal plane.

## Declaration

```swift
case horizontalPlane
```

<a id="Discussion"></a>

## Discussion

When you use this goal, coaching overlay won’t hide until the user has moved their device in a way that facilitates ARKit finding at least one horizontal surface.

## See Also

### Defining a Goal

- [ARCoachingOverlayView.Goal.anyPlane](anyplane.md): A goal that specifies your app requires a plane of any type.
- [ARCoachingOverlayView.Goal.tracking](tracking.md): A goal that specifies your app requires basic world tracking.
- [ARCoachingOverlayView.Goal.verticalPlane](verticalplane.md): A goal that specifies your app requires a vertical plane.
- [ARCoachingOverlayView.Goal.geoTracking](geotracking.md): A goal that specifies your app requires a precise geographic location.

# ARCoachingGoalHorizontalPlane (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS

A goal that specifies your app requires a horizontal plane.

## Declaration

```objectivec
ARCoachingGoalHorizontalPlane
```

<a id="Discussion"></a>

## Discussion

When you use this goal, coaching overlay won’t hide until the user has moved their device in a way that facilitates ARKit finding at least one horizontal surface.

## See Also

### Defining a Goal

- [ARCoachingGoalAnyPlane](anyplane.md): A goal that specifies your app requires a plane of any type.
- [ARCoachingGoalTracking](tracking.md): A goal that specifies your app requires basic world tracking.
- [ARCoachingGoalVerticalPlane](verticalplane.md): A goal that specifies your app requires a vertical plane.
- [ARCoachingGoalGeoTracking](geotracking.md): A goal that specifies your app requires a precise geographic location.
