> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxcustomparameterinterpolation_v2](https://developer.apple.com/documentation/professional_video_applications/fxcustomparameterinterpolation_v2)

# FxCustomParameterInterpolation_v2 (Swift)

**Framework:** Professional Video Applications  
**Kind:** Protocol  
**Availability:** FxPlug 4.0+

Defines the methods a plug-in needs to implement to support keyframing custom parameters.

## Declaration

```swift
protocol FxCustomParameterInterpolation_v2
```

<a id="overview"></a>

## Overview

An FxPlug 4 or later plug-in that wants to support keyframing custom parameters must conform to the `FxCustomParameterInterpolation_v2` or later protocol. This protocol allows the plug-in to generate interpolated (in-between) values between keyframes.

Note that this protocol intentionally does not inherit from the `FxCustomParameterInterpolation` protocol, which is for older-style plug-ins.

## Topics

### Instance Methods

- [interpolateBetween(\_:withWeight:)](fxcustomparameterinterpolation_v2/interpolatebetween%28__withweight_%29.md): Returns a new parameter value which has been calculated by interpolating between two key values.
- [isEqual(\_:)](fxcustomparameterinterpolation_v2/isequal%28__%29.md): Returns whether one custom parameter value is equal to another.

## See Also

### Custom Parameter APIs

- [FxCustomParameterViewHost_v2](fxcustomparameterviewhost_v2.md): Defines the methods a plug-in needs to implement to associate a custom NSView with one of its parameters.
- [FxCustomParameterActionAPI_v4](fxcustomparameteractionapi_v4.md): Defines the methods the host application provides to support a custom parameter view.

# FxCustomParameterInterpolation_v2 (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Protocol

Defines the methods a plug-in needs to implement to support keyframing custom parameters.

## Declaration

```objectivec
@protocol FxCustomParameterInterpolation_v2
```

<a id="overview"></a>

## Overview

An FxPlug 4 or later plug-in that wants to support keyframing custom parameters must conform to the `FxCustomParameterInterpolation_v2` or later protocol. This protocol allows the plug-in to generate interpolated (in-between) values between keyframes.

Note that this protocol intentionally does not inherit from the `FxCustomParameterInterpolation` protocol, which is for older-style plug-ins.

## Topics

### Instance Methods

- [interpolateBetween:withWeight:](fxcustomparameterinterpolation_v2/interpolatebetween%28__withweight_%29.md): Returns a new parameter value which has been calculated by interpolating between two key values.
- [isEqual:](fxcustomparameterinterpolation_v2/isequal%28__%29.md): Returns whether one custom parameter value is equal to another.

## See Also

### Custom Parameter APIs

- [FxCustomParameterViewHost_v2](fxcustomparameterviewhost_v2.md): Defines the methods a plug-in needs to implement to associate a custom NSView with one of its parameters.
- [FxCustomParameterActionAPI_v4](fxcustomparameteractionapi_v4.md): Defines the methods the host application provides to support a custom parameter view.
