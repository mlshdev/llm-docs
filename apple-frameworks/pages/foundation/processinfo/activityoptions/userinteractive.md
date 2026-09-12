> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/processinfo/activityoptions/userinteractive](https://developer.apple.com/documentation/foundation/processinfo/activityoptions/userinteractive)

# userInteractive (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A flag to indicate the app is responding to user interaction.

## Declaration

```swift
static var userInteractive: ProcessInfo.ActivityOptions { get }
```

<a id="Discussion"></a>

## Discussion

Examples of user-interactive actions include scrolling and interactively dismissing from a navigation controller.

## See Also

### Constants

- [idleDisplaySleepDisabled](idledisplaysleepdisabled.md): A flag to require the screen to stay powered on.
- [idleSystemSleepDisabled](idlesystemsleepdisabled.md): A flag to prevent idle sleep.
- [suddenTerminationDisabled](suddenterminationdisabled.md): A flag to prevent sudden termination.
- [automaticTerminationDisabled](automaticterminationdisabled.md): A flag to prevent automatic termination.
- [userInitiated](userinitiated.md): A flag to indicate the app is performing a user-requested action.
- [userInitiatedAllowingIdleSystemSleep](userinitiatedallowingidlesystemsleep.md): A flag to indicate the app is performing a user-requested action, but that the system can sleep on idle.
- [background](background.md): A flag to indicate the app has initiated some kind of work, but not as the direct result of user request.
- [latencyCritical](latencycritical.md): A flag to indicate the activity requires the highest amount of timer and I/O precision available.
- [animationTrackingEnabled](animationtrackingenabled.md): A flag to track the activity with an animation signpost interval.
- [trackingEnabled](trackingenabled.md): A flag to track the activity with a signpost interval.

# NSActivityUserInteractive (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A flag to indicate the app is responding to user interaction.

## Declaration

```objectivec
NSActivityUserInteractive
```

<a id="Discussion"></a>

## Discussion

Examples of user-interactive actions include scrolling and interactively dismissing from a navigation controller.

## See Also

### Constants

- [NSActivityIdleDisplaySleepDisabled](idledisplaysleepdisabled.md): A flag to require the screen to stay powered on.
- [NSActivityIdleSystemSleepDisabled](idlesystemsleepdisabled.md): A flag to prevent idle sleep.
- [NSActivitySuddenTerminationDisabled](suddenterminationdisabled.md): A flag to prevent sudden termination.
- [NSActivityAutomaticTerminationDisabled](automaticterminationdisabled.md): A flag to prevent automatic termination.
- [NSActivityUserInitiated](userinitiated.md): A flag to indicate the app is performing a user-requested action.
- [NSActivityUserInitiatedAllowingIdleSystemSleep](userinitiatedallowingidlesystemsleep.md): A flag to indicate the app is performing a user-requested action, but that the system can sleep on idle.
- [NSActivityBackground](background.md): A flag to indicate the app has initiated some kind of work, but not as the direct result of user request.
- [NSActivityLatencyCritical](latencycritical.md): A flag to indicate the activity requires the highest amount of timer and I/O precision available.
- [NSActivityAnimationTrackingEnabled](animationtrackingenabled.md): A flag to track the activity with an animation signpost interval.
- [NSActivityTrackingEnabled](trackingenabled.md): A flag to track the activity with a signpost interval.
