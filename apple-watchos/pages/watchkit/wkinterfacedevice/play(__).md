> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacedevice/play(_:)](https://developer.apple.com/documentation/watchkit/wkinterfacedevice/play(_:))

# play(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Gives haptic feedback to the user.

## Declaration

```swift
func play(_ type: WKHapticType)
```

## Parameters

- `type`: The type of haptic feedback to play. Always use the defined haptic types for their intended purposes. For a list of possible values, see [WKHapticType](../wkhaptictype.md).

<a id="Discussion"></a>

## Discussion

Use this method to engage the haptic engine in Apple Watch. The type of feedback you specify defines the specific feedback that is delivered.

This method has no effect when called while your shared [WKExtension](../wkextension.md) object’s [applicationState](../wkextension/applicationstate.md) property is either [WKApplicationState.background](../wkapplicationstate/background.md) or [WKApplicationState.inactive](../wkapplicationstate/inactive.md). By default, you cannot play haptic feedback in the background. The only exception are apps with an active workout session. For more information, see [Running workout sessions](https://developer.apple.com/documentation/healthkit/running-workout-sessions) in [HKWorkoutSession](https://developer.apple.com/documentation/healthkit/hkworkoutsession).

Do not call this method multiple times in quick succession. If the haptic engine is already engaged when you call this method, the system stops the current feedback and imposes a minimum delay of 100 milliseconds before engaging the engine to generate the new feedback. Use of the haptic engine also consumes power, and using the engine too much may create a noticeable drain on the Apple Watch battery, as well as a negative user experience.

> **Important**

>  Do not call this method while gathering heart rate data using HealthKit. When you engage the haptic engine, HealthKit stops gathering heart rate data until after the haptic engine finishes.

## See Also

### Playing Haptic Feedback

- [WKHapticType](../wkhaptictype.md): Constant indicating the style of feedback to deliver using haptics.

# playHaptic: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Gives haptic feedback to the user.

## Declaration

```objectivec
- (void) playHaptic:(WKHapticType) type;
```

## Parameters

- `type`: The type of haptic feedback to play. Always use the defined haptic types for their intended purposes. For a list of possible values, see [WKHapticType](../wkhaptictype.md).

<a id="Discussion"></a>

## Discussion

Use this method to engage the haptic engine in Apple Watch. The type of feedback you specify defines the specific feedback that is delivered.

This method has no effect when called while your shared [WKExtension](../wkextension.md) object’s [applicationState](../wkextension/applicationstate.md) property is either [WKApplicationStateBackground](../wkapplicationstate/background.md) or [WKApplicationStateInactive](../wkapplicationstate/inactive.md). By default, you cannot play haptic feedback in the background. The only exception are apps with an active workout session. For more information, see [Running workout sessions](https://developer.apple.com/documentation/healthkit/running-workout-sessions) in [HKWorkoutSession](https://developer.apple.com/documentation/healthkit/hkworkoutsession).

Do not call this method multiple times in quick succession. If the haptic engine is already engaged when you call this method, the system stops the current feedback and imposes a minimum delay of 100 milliseconds before engaging the engine to generate the new feedback. Use of the haptic engine also consumes power, and using the engine too much may create a noticeable drain on the Apple Watch battery, as well as a negative user experience.

> **Important**

>  Do not call this method while gathering heart rate data using HealthKit. When you engage the haptic engine, HealthKit stops gathering heart rate data until after the haptic engine finishes.

## See Also

### Playing Haptic Feedback

- [WKHapticType](../wkhaptictype.md): Constant indicating the style of feedback to deliver using haptics.
