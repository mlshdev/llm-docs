> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticpatternplayer/sendparameters(_:attime:)](https://developer.apple.com/documentation/corehaptics/chhapticpatternplayer/sendparameters(_:attime:))

# sendParameters(\_:atTime:) (Swift)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Sends an array of haptic parameters, starting at the specified time.

## Declaration

```swift
func sendParameters(_ parameters: [CHHapticDynamicParameter], atTime time: TimeInterval) throws
```

## Parameters

- `parameters`: An array of dynamic parameters to send together.
- `time`: The time at which to send the dynamic parameters.

<a id="Discussion"></a>

## Discussion

If `time` is `0` or any value less than the haptic engine’s [currentTime](../chhapticengine/currenttime.md), this method sends parameters immediately.

## See Also

### Sending Parameters to a Haptic

- [scheduleParameterCurve(\_:atTime:)](scheduleparametercurve%28__attime_%29.md): Schedules a parameter curve to begin transitioning a parameter at a certain time.

# sendParameters:atTime:error: (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Sends an array of haptic parameters, starting at the specified time.

## Declaration

```objectivec
- (BOOL) sendParameters:(NSArray<CHHapticDynamicParameter *> *) parameters atTime:(NSTimeInterval) time error:(NSError **) outError;
```

## Parameters

- `parameters`: An array of dynamic parameters to send together.
- `time`: The time at which to send the dynamic parameters.
- `outError`: Any error that occurs during the sending process. If no error occurs, the value is `nil`.

<a id="Discussion"></a>

## Discussion

If `time` is `0` or any value less than the haptic engine’s [currentTime](../chhapticengine/currenttime.md), this method sends parameters immediately.

## See Also

### Sending Parameters to a Haptic

- [scheduleParameterCurve:atTime:error:](scheduleparametercurve%28__attime_%29.md): Schedules a parameter curve to begin transitioning a parameter at a certain time.
