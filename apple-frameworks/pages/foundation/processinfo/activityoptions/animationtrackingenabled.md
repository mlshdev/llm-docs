> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/processinfo/activityoptions/animationtrackingenabled](https://developer.apple.com/documentation/foundation/processinfo/activityoptions/animationtrackingenabled)

# animationTrackingEnabled (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A flag to track the activity with an animation signpost interval.

## Declaration

```swift
static var animationTrackingEnabled: ProcessInfo.ActivityOptions { get }
```

<a id="Discussion"></a>

## Discussion

To help you investigate perfomance issues in your app, use [animationTrackingEnabled](animationtrackingenabled.md) to track the timing of a user interaction by annotating the beginning and end of an activity using an animation signpost interval.

Calling [beginActivity(options:reason:)](../beginactivity%28options_reason_%29.md) to begin the activity returns an object token that you retain for the duration of the activity. The logging system produces a distinct message, useful in debugging, if the object token is de-allocated before you call [endActivity(\_:)](../endactivity%28__%29.md).

The flag [animationTrackingEnabled](animationtrackingenabled.md) differs from [trackingEnabled](trackingenabled.md) in the type of interval signposts the logging system emits. Use [animationTrackingEnabled](animationtrackingenabled.md) when the interaction involves an animation.

## See Also

### Related Documentation

- [Recording Performance Data](../../../os/recording-performance-data.md): Add signposts to record interesting time-based events.

### Constants

- [idleDisplaySleepDisabled](idledisplaysleepdisabled.md): A flag to require the screen to stay powered on.
- [idleSystemSleepDisabled](idlesystemsleepdisabled.md): A flag to prevent idle sleep.
- [suddenTerminationDisabled](suddenterminationdisabled.md): A flag to prevent sudden termination.
- [automaticTerminationDisabled](automaticterminationdisabled.md): A flag to prevent automatic termination.
- [userInitiated](userinitiated.md): A flag to indicate the app is performing a user-requested action.
- [userInteractive](userinteractive.md): A flag to indicate the app is responding to user interaction.
- [userInitiatedAllowingIdleSystemSleep](userinitiatedallowingidlesystemsleep.md): A flag to indicate the app is performing a user-requested action, but that the system can sleep on idle.
- [background](background.md): A flag to indicate the app has initiated some kind of work, but not as the direct result of user request.
- [latencyCritical](latencycritical.md): A flag to indicate the activity requires the highest amount of timer and I/O precision available.
- [trackingEnabled](trackingenabled.md): A flag to track the activity with a signpost interval.

# NSActivityAnimationTrackingEnabled (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A flag to track the activity with an animation signpost interval.

## Declaration

```objectivec
NSActivityAnimationTrackingEnabled
```

<a id="Discussion"></a>

## Discussion

To help you investigate perfomance issues in your app, use [NSActivityAnimationTrackingEnabled](animationtrackingenabled.md) to track the timing of a user interaction by annotating the beginning and end of an activity using an animation signpost interval.

Calling [beginActivityWithOptions:reason:](../beginactivity%28options_reason_%29.md) to begin the activity returns an object token that you retain for the duration of the activity. The logging system produces a distinct message, useful in debugging, if the object token is de-allocated before you call [endActivity:](../endactivity%28__%29.md).

The flag [NSActivityAnimationTrackingEnabled](animationtrackingenabled.md) differs from [NSActivityTrackingEnabled](trackingenabled.md) in the type of interval signposts the logging system emits. Use [NSActivityAnimationTrackingEnabled](animationtrackingenabled.md) when the interaction involves an animation.

## See Also

### Related Documentation

- [Recording Performance Data](../../../os/recording-performance-data.md): Add signposts to record interesting time-based events.

### Constants

- [NSActivityIdleDisplaySleepDisabled](idledisplaysleepdisabled.md): A flag to require the screen to stay powered on.
- [NSActivityIdleSystemSleepDisabled](idlesystemsleepdisabled.md): A flag to prevent idle sleep.
- [NSActivitySuddenTerminationDisabled](suddenterminationdisabled.md): A flag to prevent sudden termination.
- [NSActivityAutomaticTerminationDisabled](automaticterminationdisabled.md): A flag to prevent automatic termination.
- [NSActivityUserInitiated](userinitiated.md): A flag to indicate the app is performing a user-requested action.
- [NSActivityUserInteractive](userinteractive.md): A flag to indicate the app is responding to user interaction.
- [NSActivityUserInitiatedAllowingIdleSystemSleep](userinitiatedallowingidlesystemsleep.md): A flag to indicate the app is performing a user-requested action, but that the system can sleep on idle.
- [NSActivityBackground](background.md): A flag to indicate the app has initiated some kind of work, but not as the direct result of user request.
- [NSActivityLatencyCritical](latencycritical.md): A flag to indicate the activity requires the highest amount of timer and I/O precision available.
- [NSActivityTrackingEnabled](trackingenabled.md): A flag to track the activity with a signpost interval.
