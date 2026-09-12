> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/processinfo/activityoptions/automaticterminationdisabled](https://developer.apple.com/documentation/foundation/processinfo/activityoptions/automaticterminationdisabled)

# automaticTerminationDisabled (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A flag to prevent automatic termination.

## Declaration

```swift
static var automaticTerminationDisabled: ProcessInfo.ActivityOptions { get }
```

<a id="Discussion"></a>

## Discussion

This is included by [userInitiatedAllowingIdleSystemSleep](userinitiatedallowingidlesystemsleep.md).

## See Also

### Constants

- [idleDisplaySleepDisabled](idledisplaysleepdisabled.md): A flag to require the screen to stay powered on.
- [idleSystemSleepDisabled](idlesystemsleepdisabled.md): A flag to prevent idle sleep.
- [suddenTerminationDisabled](suddenterminationdisabled.md): A flag to prevent sudden termination.
- [userInitiated](userinitiated.md): A flag to indicate the app is performing a user-requested action.
- [userInteractive](userinteractive.md): A flag to indicate the app is responding to user interaction.
- [userInitiatedAllowingIdleSystemSleep](userinitiatedallowingidlesystemsleep.md): A flag to indicate the app is performing a user-requested action, but that the system can sleep on idle.
- [background](background.md): A flag to indicate the app has initiated some kind of work, but not as the direct result of user request.
- [latencyCritical](latencycritical.md): A flag to indicate the activity requires the highest amount of timer and I/O precision available.
- [animationTrackingEnabled](animationtrackingenabled.md): A flag to track the activity with an animation signpost interval.
- [trackingEnabled](trackingenabled.md): A flag to track the activity with a signpost interval.

# NSActivityAutomaticTerminationDisabled (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A flag to prevent automatic termination.

## Declaration

```objectivec
NSActivityAutomaticTerminationDisabled
```

<a id="Discussion"></a>

## Discussion

This is included by [NSActivityUserInitiatedAllowingIdleSystemSleep](userinitiatedallowingidlesystemsleep.md).

## See Also

### Constants

- [NSActivityIdleDisplaySleepDisabled](idledisplaysleepdisabled.md): A flag to require the screen to stay powered on.
- [NSActivityIdleSystemSleepDisabled](idlesystemsleepdisabled.md): A flag to prevent idle sleep.
- [NSActivitySuddenTerminationDisabled](suddenterminationdisabled.md): A flag to prevent sudden termination.
- [NSActivityUserInitiated](userinitiated.md): A flag to indicate the app is performing a user-requested action.
- [NSActivityUserInteractive](userinteractive.md): A flag to indicate the app is responding to user interaction.
- [NSActivityUserInitiatedAllowingIdleSystemSleep](userinitiatedallowingidlesystemsleep.md): A flag to indicate the app is performing a user-requested action, but that the system can sleep on idle.
- [NSActivityBackground](background.md): A flag to indicate the app has initiated some kind of work, but not as the direct result of user request.
- [NSActivityLatencyCritical](latencycritical.md): A flag to indicate the activity requires the highest amount of timer and I/O precision available.
- [NSActivityAnimationTrackingEnabled](animationtrackingenabled.md): A flag to track the activity with an animation signpost interval.
- [NSActivityTrackingEnabled](trackingenabled.md): A flag to track the activity with a signpost interval.
