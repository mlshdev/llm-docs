> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxcustomparameterinterpolation_v2/interpolatebetween(_:withweight:)](https://developer.apple.com/documentation/professional_video_applications/fxcustomparameterinterpolation_v2/interpolatebetween(_:withweight:))

# interpolateBetween(\_:withWeight:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Returns a new parameter value which has been calculated by interpolating between                 two key values.

## Declaration

```swift
func interpolateBetween(_ rightValue: any NSCopying & NSSecureCoding & NSObjectProtocol, withWeight weight: Float) -> any NSCopying & NSSecureCoding & NSObjectProtocol
```

## Parameters

- `rightValue`: The value of the custom parameter at the keypoint to the right of the current time in the timeline.
- `weight`: A floating-point value between `0` and `1` representing the weight of the keyframe to the right of the current time vs the keyframe to the left of the current time. A weight of `0` means the same value as the keyframe to the left; a weight of `1` means the same value as the keyframe to the right.

<a id="return-value"></a>

## Return Value

A new custom parameter value.

<a id="discussion"></a>

## Discussion

This plug-in method is called by the host application when the user has added keyframes to a custom parameter, and the application needs to know the value of the parameter between keyframes. This may be when the application is rendering a frame between keyframes, or when the plugin requests the value of its parameter at a time between keyframes, or when the application displays UI.

## See Also

### Instance Methods

- [isEqual(\_:)](isequal%28__%29.md): Returns whether one custom parameter value is equal to another.

# interpolateBetween:withWeight: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Returns a new parameter value which has been calculated by interpolating between                 two key values.

## Declaration

```objectivec
- (NSObject<NSCopying,NSSecureCoding> *) interpolateBetween:(NSObject<NSCopying,NSSecureCoding> *) rightValue withWeight:(float) weight;
```

## Parameters

- `rightValue`: The value of the custom parameter at the keypoint to the right of the current time in the timeline.
- `weight`: A floating-point value between `0` and `1` representing the weight of the keyframe to the right of the current time vs the keyframe to the left of the current time. A weight of `0` means the same value as the keyframe to the left; a weight of `1` means the same value as the keyframe to the right.

<a id="return-value"></a>

## Return Value

A new custom parameter value.

<a id="discussion"></a>

## Discussion

This plug-in method is called by the host application when the user has added keyframes to a custom parameter, and the application needs to know the value of the parameter between keyframes. This may be when the application is rendering a frame between keyframes, or when the plugin requests the value of its parameter at a time between keyframes, or when the application displays UI.

## See Also

### Instance Methods

- [isEqual:](isequal%28__%29.md): Returns whether one custom parameter value is equal to another.
