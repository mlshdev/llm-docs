> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arbodytrackingconfiguration/automaticskeletonscaleestimationenabled](https://developer.apple.com/documentation/arkit/arbodytrackingconfiguration/automaticskeletonscaleestimationenabled)

# automaticSkeletonScaleEstimationEnabled (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A flag that determines whether ARKit estimates the height of a body that it’s tracking.

## Declaration

```swift
var automaticSkeletonScaleEstimationEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When you assign this property a value of [true](https://developer.apple.com/documentation/swift/true), you instruct ARKit to compute a value for [estimatedScaleFactor](../arbodyanchor/estimatedscalefactor.md) for a person’s body anchor. ARKit must know the physical height of a person in the real world to accurately estimate the person’s real-world position. You enable this property to tell ARKit to estimate a recognized person’s physical height before it assigns the body anchor’s position.

# automaticSkeletonScaleEstimationEnabled (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A flag that determines whether ARKit estimates the height of a body that it’s tracking.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL automaticSkeletonScaleEstimationEnabled;
```

<a id="Discussion"></a>

## Discussion

When you assign this property a value of [true](https://developer.apple.com/documentation/swift/true), you instruct ARKit to compute a value for [estimatedScaleFactor](../arbodyanchor/estimatedscalefactor.md) for a person’s body anchor. ARKit must know the physical height of a person in the real world to accurately estimate the person’s real-world position. You enable this property to tell ARKit to estimate a recognized person’s physical height before it assigns the body anchor’s position.
