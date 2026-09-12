> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arcoachingoverlayview/goal-swift.enum](https://developer.apple.com/documentation/arkit/arcoachingoverlayview/goal-swift.enum)

# ARCoachingOverlayView.Goal (Swift)

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+

The options that specify your app’s tracking requirements.

## Declaration

```swift
enum Goal
```

<a id="overview"></a>

## Overview

This property contains the available options when you set a coaching overlay’s [goal](goal-swift.property.md). The coaching overlay adjusts its messaging to the user based on the value.

## Topics

### Defining a Goal

- [ARCoachingOverlayView.Goal.anyPlane](goal-swift.enum/anyplane.md): A goal that specifies your app requires a plane of any type.
- [ARCoachingOverlayView.Goal.horizontalPlane](goal-swift.enum/horizontalplane.md): A goal that specifies your app requires a horizontal plane.
- [ARCoachingOverlayView.Goal.tracking](goal-swift.enum/tracking.md): A goal that specifies your app requires basic world tracking.
- [ARCoachingOverlayView.Goal.verticalPlane](goal-swift.enum/verticalplane.md): A goal that specifies your app requires a vertical plane.
- [ARCoachingOverlayView.Goal.geoTracking](goal-swift.enum/geotracking.md): A goal that specifies your app requires a precise geographic location.

### Initializers

- [init(rawValue:)](goal-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Defining a Goal

- [goal](goal-swift.property.md): A field that indicates your app’s tracking requirements.

# ARCoachingGoal (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS

The options that specify your app’s tracking requirements.

## Declaration

```objectivec
enum ARCoachingGoal : NSInteger;
```

<a id="overview"></a>

## Overview

This property contains the available options when you set a coaching overlay’s [goal](goal-swift.property.md). The coaching overlay adjusts its messaging to the user based on the value.

## Topics

### Defining a Goal

- [ARCoachingGoalAnyPlane](goal-swift.enum/anyplane.md): A goal that specifies your app requires a plane of any type.
- [ARCoachingGoalHorizontalPlane](goal-swift.enum/horizontalplane.md): A goal that specifies your app requires a horizontal plane.
- [ARCoachingGoalTracking](goal-swift.enum/tracking.md): A goal that specifies your app requires basic world tracking.
- [ARCoachingGoalVerticalPlane](goal-swift.enum/verticalplane.md): A goal that specifies your app requires a vertical plane.
- [ARCoachingGoalGeoTracking](goal-swift.enum/geotracking.md): A goal that specifies your app requires a precise geographic location.

## See Also

### Defining a Goal

- [goal](goal-swift.property.md): A field that indicates your app’s tracking requirements.
