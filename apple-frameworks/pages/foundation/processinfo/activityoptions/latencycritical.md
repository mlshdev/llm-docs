> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/processinfo/activityoptions/latencycritical](https://developer.apple.com/documentation/foundation/processinfo/activityoptions/latencycritical)

# latencyCritical (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A flag to indicate the activity requires the highest amount of timer and I/O precision available.

## Declaration

```swift
static var latencyCritical: ProcessInfo.ActivityOptions { get }
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  Very few applications should need to use this constant.

## See Also

### Constants

- [idleDisplaySleepDisabled](idledisplaysleepdisabled.md): A flag to require the screen to stay powered on.
- [idleSystemSleepDisabled](idlesystemsleepdisabled.md): A flag to prevent idle sleep.
- [suddenTerminationDisabled](suddenterminationdisabled.md): A flag to prevent sudden termination.
- [automaticTerminationDisabled](automaticterminationdisabled.md): A flag to prevent automatic termination.
- [userInitiated](userinitiated.md): A flag to indicate the app is performing a user-requested action.
- [userInteractive](userinteractive.md): A flag to indicate the app is responding to user interaction.
- [userInitiatedAllowingIdleSystemSleep](userinitiatedallowingidlesystemsleep.md): A flag to indicate the app is performing a user-requested action, but that the system can sleep on idle.
- [background](background.md): A flag to indicate the app has initiated some kind of work, but not as the direct result of user request.
- [animationTrackingEnabled](animationtrackingenabled.md): A flag to track the activity with an animation signpost interval.
- [trackingEnabled](trackingenabled.md): A flag to track the activity with a signpost interval.

# NSActivityLatencyCritical (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A flag to indicate the activity requires the highest amount of timer and I/O precision available.

## Declaration

```objectivec
NSActivityLatencyCritical
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  Very few applications should need to use this constant.

## See Also

### Constants

- [NSActivityIdleDisplaySleepDisabled](idledisplaysleepdisabled.md): A flag to require the screen to stay powered on.
- [NSActivityIdleSystemSleepDisabled](idlesystemsleepdisabled.md): A flag to prevent idle sleep.
- [NSActivitySuddenTerminationDisabled](suddenterminationdisabled.md): A flag to prevent sudden termination.
- [NSActivityAutomaticTerminationDisabled](automaticterminationdisabled.md): A flag to prevent automatic termination.
- [NSActivityUserInitiated](userinitiated.md): A flag to indicate the app is performing a user-requested action.
- [NSActivityUserInteractive](userinteractive.md): A flag to indicate the app is responding to user interaction.
- [NSActivityUserInitiatedAllowingIdleSystemSleep](userinitiatedallowingidlesystemsleep.md): A flag to indicate the app is performing a user-requested action, but that the system can sleep on idle.
- [NSActivityBackground](background.md): A flag to indicate the app has initiated some kind of work, but not as the direct result of user request.
- [NSActivityAnimationTrackingEnabled](animationtrackingenabled.md): A flag to track the activity with an animation signpost interval.
- [NSActivityTrackingEnabled](trackingenabled.md): A flag to track the activity with a signpost interval.
