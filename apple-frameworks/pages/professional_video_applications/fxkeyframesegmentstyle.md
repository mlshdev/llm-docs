> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxkeyframesegmentstyle](https://developer.apple.com/documentation/professional_video_applications/fxkeyframesegmentstyle)

# FxKeyframeSegmentStyle (Swift)

**Framework:** Professional Video Applications  
**Kind:** Enumeration  
**Availability:** FxPlug 4.1+

Styles for the segment between keyframes.

## Declaration

```swift
enum FxKeyframeSegmentStyle
```

<a id="overview"></a>

## Overview

Each style describes the segment between the keyframe you’re working with and the next keyframe.

## Topics

### Keyframe Segment Styles

- [FxKeyframeSegmentStyle.constant](fxkeyframesegmentstyle/constant.md): A parameter value that is constant between this keyframe and the next one.
- [FxKeyframeSegmentStyle.linear](fxkeyframesegmentstyle/linear.md): A parameter value that changes linearly between this keyframe and the next.
- [FxKeyframeSegmentStyle.bezier](fxkeyframesegmentstyle/bezier.md): A parameter value that changes along a cubic Bézier curve defined by the keypoints and tangents in the FxKeyframe structure.
- [FxKeyframeSegmentStyle.continuous](fxkeyframesegmentstyle/continuous.md): A parameter value that changes along a cubic Catmull-Rom spline defined by the the keypoints and tangents in the FxKeyframe structure.
- [FxKeyframeSegmentStyle.easeInNext](fxkeyframesegmentstyle/easeinnext.md): A parameter value that performs a gentle ease-in interpolation to the next keyframe value.
- [FxKeyframeSegmentStyle.easeOutCurrent](fxkeyframesegmentstyle/easeoutcurrent.md): A parameter value that performs a gentle ease-out interpolation from the current keyframe value.
- [FxKeyframeSegmentStyle.easeOutCurrentEaseInNext](fxkeyframesegmentstyle/easeoutcurrenteaseinnext.md): A parameter value that performs a gentle ease-out interpolation from the current keyframe value and a gentle ease-in interpolation to the next keyframe value.
- [FxKeyframeSegmentStyle.exponential](fxkeyframesegmentstyle/exponential.md): A parameter value that increases or decreases exponentially between the current keyframe and the next.
- [FxKeyframeSegmentStyle.logarithmic](fxkeyframesegmentstyle/logarithmic.md): A parameter value that increases or decreases logarithmically between the current keyframe and the next.

### Initializers

- [init(rawValue:)](fxkeyframesegmentstyle/init%28rawvalue_%29.md)

### Default Implementations

- [Equatable Implementations](fxkeyframesegmentstyle/equatable-implementations.md)
- [RawRepresentable Implementations](fxkeyframesegmentstyle/rawrepresentable-implementations.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# FxKeyframeSegmentStyle (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Enumeration

Styles for the segment between keyframes.

## Declaration

```objectivec
enum FxKeyframeSegmentStyle: NSUInteger;
```

<a id="overview"></a>

## Overview

Each style describes the segment between the keyframe you’re working with and the next keyframe.

## Topics

### Keyframe Segment Styles

- [kFxKeyframeSegmentStyle_Constant](fxkeyframesegmentstyle/constant.md): A parameter value that is constant between this keyframe and the next one.
- [kFxKeyframeSegmentStyle_Linear](fxkeyframesegmentstyle/linear.md): A parameter value that changes linearly between this keyframe and the next.
- [kFxKeyframeSegmentStyle_Bezier](fxkeyframesegmentstyle/bezier.md): A parameter value that changes along a cubic Bézier curve defined by the keypoints and tangents in the FxKeyframe structure.
- [kFxKeyframeSegmentStyle_Continuous](fxkeyframesegmentstyle/continuous.md): A parameter value that changes along a cubic Catmull-Rom spline defined by the the keypoints and tangents in the FxKeyframe structure.
- [kFxKeyframeSegmentStyle_EaseInNext](fxkeyframesegmentstyle/easeinnext.md): A parameter value that performs a gentle ease-in interpolation to the next keyframe value.
- [kFxKeyframeSegmentStyle_EaseOutCurrent](fxkeyframesegmentstyle/easeoutcurrent.md): A parameter value that performs a gentle ease-out interpolation from the current keyframe value.
- [kFxKeyframeSegmentStyle_EaseOutCurrentEaseInNext](fxkeyframesegmentstyle/easeoutcurrenteaseinnext.md): A parameter value that performs a gentle ease-out interpolation from the current keyframe value and a gentle ease-in interpolation to the next keyframe value.
- [kFxKeyframeSegmentStyle_Exponential](fxkeyframesegmentstyle/exponential.md): A parameter value that increases or decreases exponentially between the current keyframe and the next.
- [kFxKeyframeSegmentStyle_Logarithmic](fxkeyframesegmentstyle/logarithmic.md): A parameter value that increases or decreases logarithmically between the current keyframe and the next.
