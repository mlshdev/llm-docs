> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arcoachingoverlayview/goal-swift.enum/tracking](https://developer.apple.com/documentation/arkit/arcoachingoverlayview/goal-swift.enum/tracking)

# ARCoachingOverlayView.Goal.tracking (Swift)

**Framework:** ARKit  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A goal that specifies your app requires basic world tracking.

## Declaration

```swift
case tracking
```

<a id="Discussion"></a>

## Discussion

When you use this goal, coaching overlay won’t hide until the user has moved their device in a way that facilitates ARKit starting up a basic world tracking session.

## See Also

### Defining a Goal

- [ARCoachingOverlayView.Goal.anyPlane](anyplane.md): A goal that specifies your app requires a plane of any type.
- [ARCoachingOverlayView.Goal.horizontalPlane](horizontalplane.md): A goal that specifies your app requires a horizontal plane.
- [ARCoachingOverlayView.Goal.verticalPlane](verticalplane.md): A goal that specifies your app requires a vertical plane.
- [ARCoachingOverlayView.Goal.geoTracking](geotracking.md): A goal that specifies your app requires a precise geographic location.

# ARCoachingGoalTracking (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS

A goal that specifies your app requires basic world tracking.

## Declaration

```objectivec
ARCoachingGoalTracking
```

<a id="Discussion"></a>

## Discussion

When you use this goal, coaching overlay won’t hide until the user has moved their device in a way that facilitates ARKit starting up a basic world tracking session.

## See Also

### Defining a Goal

- [ARCoachingGoalAnyPlane](anyplane.md): A goal that specifies your app requires a plane of any type.
- [ARCoachingGoalHorizontalPlane](horizontalplane.md): A goal that specifies your app requires a horizontal plane.
- [ARCoachingGoalVerticalPlane](verticalplane.md): A goal that specifies your app requires a vertical plane.
- [ARCoachingGoalGeoTracking](geotracking.md): A goal that specifies your app requires a precise geographic location.
