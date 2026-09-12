> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arbodyanchor/estimatedscalefactor](https://developer.apple.com/documentation/arkit/arbodyanchor/estimatedscalefactor)

# estimatedScaleFactor (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A factor that relates the body’s default height with the height ARKit estimates at runtime.

## Declaration

```swift
var estimatedScaleFactor: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

The default value is 1.0. If you set [automaticSkeletonScaleEstimationEnabled](../arbodytrackingconfiguration/automaticskeletonscaleestimationenabled.md) to [true](https://developer.apple.com/documentation/swift/true) on [ARBodyTrackingConfiguration](../arbodytrackingconfiguration.md), ARKit sets this property to a value between 0.0 and 1.0.

ARKit must know the height of a person in the camera feed to estimate an accurate world position for the person’s body anchor. ARKit uses the value of [estimatedScaleFactor](estimatedscalefactor.md) to correct the body anchor’s position in the physical environment.

The default body is 1.8 meters tall.

# estimatedScaleFactor (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A factor that relates the body’s default height with the height ARKit estimates at runtime.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat estimatedScaleFactor;
```

<a id="Discussion"></a>

## Discussion

The default value is 1.0. If you set [automaticSkeletonScaleEstimationEnabled](../arbodytrackingconfiguration/automaticskeletonscaleestimationenabled.md) to [true](https://developer.apple.com/documentation/swift/true) on [ARBodyTrackingConfiguration](../arbodytrackingconfiguration.md), ARKit sets this property to a value between 0.0 and 1.0.

ARKit must know the height of a person in the camera feed to estimate an accurate world position for the person’s body anchor. ARKit uses the value of [estimatedScaleFactor](estimatedscalefactor.md) to correct the body anchor’s position in the physical environment.

The default body is 1.8 meters tall.
