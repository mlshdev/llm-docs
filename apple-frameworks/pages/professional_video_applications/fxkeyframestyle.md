> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxkeyframestyle](https://developer.apple.com/documentation/professional_video_applications/fxkeyframestyle)

# FxKeyframeStyle (Swift)

**Framework:** Professional Video Applications  
**Kind:** Type Alias  
**Availability:** FxPlug 3.1+

Constants for specifying the type of keyframe.

## Declaration

```swift
typealias FxKeyframeStyle = Int
```

## Topics

### Constants

- [kFxKeyframeStyle_Constant](kfxkeyframestyle_constant.md): Also known as “Hold,” constant keyframes have a constant value between keyframes.
- [kFxKeyframeStyle_Linear](kfxkeyframestyle_linear.md): The values are interpolated along a straight line between keyframes.
- [kFxKeyframeStyle_Quadratic](kfxkeyframestyle_quadratic.md): The values are interpolated along a quadratic curve.
- [kFxKeyframeStyle_Cubic](kfxkeyframestyle_cubic.md): The values are interpolated along a cubic curve.
- [kFxKeyframeStyle_Bezier](kfxkeyframestyle_bezier.md): The values are interpolated along a cubic curve the user can control by varying the tangent handles.
- [kFxKeyframeStyle_EaseIn](kfxkeyframestyle_easein.md): The values are interpolated along a pre-calculated cubic curve that smoothly transitions into the next value.
- [kFxKeyframeStyle_EaseOut](kfxkeyframestyle_easeout.md): The values are interpolated along a pre-calculated cubic curve that smoothly transitions out of the previous value.
- [kFxKeyframeStyle_BSpline](kfxkeyframestyle_bspline.md): The values are interpolated along a B-Spline.
- [kFxKeyframeStyle_XSpline](kfxkeyframestyle_xspline.md): The values are interpolated along a weighted X-Spline.
- [kFxKeyframeStyle_Exponential](kfxkeyframestyle_exponential.md): The values are interpolated along an exponential curve.
- [kFxKeyframeStyle_Logarithmic](kfxkeyframestyle_logarithmic.md): The values are interpolated along a logarithmic curve.
- [kFxKeyframeStyle_Mixed](kfxkeyframestyle_mixed.md): The keyframe is a mixture of two of the other style types.
- [kFxKeyframeStyle_All](kfxkeyframestyle_all.md): A mask for all types.

## See Also

### Constants

- [kFxKeyframe_V3](kfxkeyframe_v3.md)
- [kFxKeyframe_CurrentVersion](kfxkeyframe_currentversion.md)

# FxKeyframeStyle (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Type Alias

Constants for specifying the type of keyframe.

## Declaration

```objectivec
typedef NSUInteger FxKeyframeStyle;
```

## Topics

### Constants

- [kFxKeyframeStyle_Constant](kfxkeyframestyle_constant.md): Also known as “Hold,” constant keyframes have a constant value between keyframes.
- [kFxKeyframeStyle_Linear](kfxkeyframestyle_linear.md): The values are interpolated along a straight line between keyframes.
- [kFxKeyframeStyle_Quadratic](kfxkeyframestyle_quadratic.md): The values are interpolated along a quadratic curve.
- [kFxKeyframeStyle_Cubic](kfxkeyframestyle_cubic.md): The values are interpolated along a cubic curve.
- [kFxKeyframeStyle_Bezier](kfxkeyframestyle_bezier.md): The values are interpolated along a cubic curve the user can control by varying the tangent handles.
- [kFxKeyframeStyle_EaseIn](kfxkeyframestyle_easein.md): The values are interpolated along a pre-calculated cubic curve that smoothly transitions into the next value.
- [kFxKeyframeStyle_EaseOut](kfxkeyframestyle_easeout.md): The values are interpolated along a pre-calculated cubic curve that smoothly transitions out of the previous value.
- [kFxKeyframeStyle_BSpline](kfxkeyframestyle_bspline.md): The values are interpolated along a B-Spline.
- [kFxKeyframeStyle_XSpline](kfxkeyframestyle_xspline.md): The values are interpolated along a weighted X-Spline.
- [kFxKeyframeStyle_Exponential](kfxkeyframestyle_exponential.md): The values are interpolated along an exponential curve.
- [kFxKeyframeStyle_Logarithmic](kfxkeyframestyle_logarithmic.md): The values are interpolated along a logarithmic curve.
- [kFxKeyframeStyle_Mixed](kfxkeyframestyle_mixed.md): The keyframe is a mixture of two of the other style types.
- [kFxKeyframeStyle_All](kfxkeyframestyle_all.md): A mask for all types.

## See Also

### Constants

- [kFxKeyframe_V3](kfxkeyframe_v3.md)
- [kFxKeyframe_CurrentVersion](kfxkeyframe_currentversion.md)
