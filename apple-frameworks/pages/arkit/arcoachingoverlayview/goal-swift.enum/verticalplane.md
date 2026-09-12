> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arcoachingoverlayview/goal-swift.enum/verticalplane](https://developer.apple.com/documentation/arkit/arcoachingoverlayview/goal-swift.enum/verticalplane)

# ARCoachingOverlayView.Goal.verticalPlane (Swift)

**Framework:** ARKit  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A goal that specifies your app requires a vertical plane.

## Declaration

```swift
case verticalPlane
```

<a id="Discussion"></a>

## Discussion

When you use this goal, coaching overlay won’t hide until the user has moved their device in a way that facilitates ARKit finding at least one vertical surface.

## See Also

### Defining a Goal

- [ARCoachingOverlayView.Goal.anyPlane](anyplane.md): A goal that specifies your app requires a plane of any type.
- [ARCoachingOverlayView.Goal.horizontalPlane](horizontalplane.md): A goal that specifies your app requires a horizontal plane.
- [ARCoachingOverlayView.Goal.tracking](tracking.md): A goal that specifies your app requires basic world tracking.
- [ARCoachingOverlayView.Goal.geoTracking](geotracking.md): A goal that specifies your app requires a precise geographic location.

# ARCoachingGoalVerticalPlane (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS

A goal that specifies your app requires a vertical plane.

## Declaration

```objectivec
ARCoachingGoalVerticalPlane
```

<a id="Discussion"></a>

## Discussion

When you use this goal, coaching overlay won’t hide until the user has moved their device in a way that facilitates ARKit finding at least one vertical surface.

## See Also

### Defining a Goal

- [ARCoachingGoalAnyPlane](anyplane.md): A goal that specifies your app requires a plane of any type.
- [ARCoachingGoalHorizontalPlane](horizontalplane.md): A goal that specifies your app requires a horizontal plane.
- [ARCoachingGoalTracking](tracking.md): A goal that specifies your app requires basic world tracking.
- [ARCoachingGoalGeoTracking](geotracking.md): A goal that specifies your app requires a precise geographic location.
