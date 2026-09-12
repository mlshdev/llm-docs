> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticpatternplayer/scheduleparametercurve(_:attime:)](https://developer.apple.com/documentation/corehaptics/chhapticpatternplayer/scheduleparametercurve(_:attime:))

# scheduleParameterCurve(\_:atTime:) (Swift)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Schedules a parameter curve to begin transitioning a parameter at a certain time.

## Declaration

```swift
func scheduleParameterCurve(_ parameterCurve: CHHapticParameterCurve, atTime time: TimeInterval) throws
```

## Parameters

- `parameterCurve`: The curve along which to vary the parameter.
- `time`: The time at which to begin applying the parameter curve.

<a id="Discussion"></a>

## Discussion

Scheduling a parameter curve tells the haptic pattern player to vary a parameter gradually along the curve. For example, if the intensity of a haptic pattern is `0` at the time of application, then a curve created to set the haptic intensity to `1` will smoothly hit every single continuous value between `0` and `1` during the transition.

![A graph showing how dynamic parameters change instantly, whereas parameter curves vary gradually.](https://developer.apple.com/images/com.apple.corehaptics/media-3189138@2x.png)

Scheduling a parameter curve is analogous to sending a dynamic parameter with [sendParameters(\_:atTime:)](sendparameters%28__attime_%29.md); the only difference is that the curve transitions the parameter gradually, whereas the dynamic parameter changes the parameter immediately at a certain time.

**Swift**

```swift
let controlPoint = CHHapticParameterCurveControlPoint(relativeTime: 0.1, value: intensity)
let parameterCurve = CHHapticParameterCurve(parameterID: .hapticIntensityControl, controlPoints: [controlPoint], relativeTime: 0)
do {
    try continuousPlayer.scheduleParameterCurve(parameterCurve, atTime: 0)
} catch {
    print("Parameter Curve Error")
}
```

**Objective-C**

```objc
CHHapticParameterCurveControlPoint* intensityControlPoint = [[CHHapticParameterCurveControlPoint alloc] initWithRelativeTime:0.1 value:intensity];
CHHapticParameterCurve* intensityCurve = [[CHHapticParameterCurve alloc] initWithParameterID:CHHapticDynamicParameterIDHapticIntensityControl controlPoints:@[intensityControlPoint] relativeTime:0]; 
NSError* intensityCurveError;
[continuousPlayer scheduleParameterCurve:intensityCurve
                                  atTime:0
                                   error:&intensityCurveError];
```

Schedule a parameter curve for one parameter at a time, and specify control points to characterize the curve’s shape. For more information on creating or specifying a parameter curve, see [CHHapticParameterCurve](../chhapticparametercurve.md).

## See Also

### Sending Parameters to a Haptic

- [sendParameters(\_:atTime:)](sendparameters%28__attime_%29.md): Sends an array of haptic parameters, starting at the specified time.

# scheduleParameterCurve:atTime:error: (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Schedules a parameter curve to begin transitioning a parameter at a certain time.

## Declaration

```objectivec
- (BOOL) scheduleParameterCurve:(CHHapticParameterCurve *) parameterCurve atTime:(NSTimeInterval) time error:(NSError **) outError;
```

## Parameters

- `parameterCurve`: The curve along which to vary the parameter.
- `time`: The time at which to begin applying the parameter curve.
- `outError`: Any error that occurs during the scheduling process. If no error occurs, the value is `nil`.

<a id="Discussion"></a>

## Discussion

Scheduling a parameter curve tells the haptic pattern player to vary a parameter gradually along the curve. For example, if the intensity of a haptic pattern is `0` at the time of application, then a curve created to set the haptic intensity to `1` will smoothly hit every single continuous value between `0` and `1` during the transition.

![A graph showing how dynamic parameters change instantly, whereas parameter curves vary gradually.](https://developer.apple.com/images/com.apple.corehaptics/media-3189138@2x.png)

Scheduling a parameter curve is analogous to sending a dynamic parameter with [sendParameters:atTime:error:](sendparameters%28__attime_%29.md); the only difference is that the curve transitions the parameter gradually, whereas the dynamic parameter changes the parameter immediately at a certain time.

**Swift**

```swift
let controlPoint = CHHapticParameterCurveControlPoint(relativeTime: 0.1, value: intensity)
let parameterCurve = CHHapticParameterCurve(parameterID: .hapticIntensityControl, controlPoints: [controlPoint], relativeTime: 0)
do {
    try continuousPlayer.scheduleParameterCurve(parameterCurve, atTime: 0)
} catch {
    print("Parameter Curve Error")
}
```

**Objective-C**

```objc
CHHapticParameterCurveControlPoint* intensityControlPoint = [[CHHapticParameterCurveControlPoint alloc] initWithRelativeTime:0.1 value:intensity];
CHHapticParameterCurve* intensityCurve = [[CHHapticParameterCurve alloc] initWithParameterID:CHHapticDynamicParameterIDHapticIntensityControl controlPoints:@[intensityControlPoint] relativeTime:0]; 
NSError* intensityCurveError;
[continuousPlayer scheduleParameterCurve:intensityCurve
                                  atTime:0
                                   error:&intensityCurveError];
```

Schedule a parameter curve for one parameter at a time, and specify control points to characterize the curve’s shape. For more information on creating or specifying a parameter curve, see [CHHapticParameterCurve](../chhapticparametercurve.md).

## See Also

### Sending Parameters to a Haptic

- [sendParameters:atTime:error:](sendparameters%28__attime_%29.md): Sends an array of haptic parameters, starting at the specified time.
