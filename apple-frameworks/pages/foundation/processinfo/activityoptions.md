> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/processinfo/activityoptions](https://developer.apple.com/documentation/foundation/processinfo/activityoptions)

# ProcessInfo.ActivityOptions (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Option flags used with [beginActivity(options:reason:)](beginactivity%28options_reason_%29.md) and [performActivity(options:reason:using:)](performactivity%28options_reason_using_%29.md).

## Declaration

```swift
struct ActivityOptions
```

<a id="overview"></a>

## Overview

To include one of these individual flags in one of the sets, use bitwise `OR`; for example, during a presentation you might use:

```objc
NSActivityUserInitiated | NSActivityIdleDisplaySleepDisabled
```

To exclude from one of the sets, use bitwise `AND` with `NOT`; for example, during a user initiated action that may be safely terminated with no application interaction in case of logout you might use:

```objc
NSActivityUserInitiated & ~NSActivitySuddenTerminationDisabled
```

## Topics

### Constants

- [idleDisplaySleepDisabled](activityoptions/idledisplaysleepdisabled.md): A flag to require the screen to stay powered on.
- [idleSystemSleepDisabled](activityoptions/idlesystemsleepdisabled.md): A flag to prevent idle sleep.
- [suddenTerminationDisabled](activityoptions/suddenterminationdisabled.md): A flag to prevent sudden termination.
- [automaticTerminationDisabled](activityoptions/automaticterminationdisabled.md): A flag to prevent automatic termination.
- [userInitiated](activityoptions/userinitiated.md): A flag to indicate the app is performing a user-requested action.
- [userInteractive](activityoptions/userinteractive.md): A flag to indicate the app is responding to user interaction.
- [userInitiatedAllowingIdleSystemSleep](activityoptions/userinitiatedallowingidlesystemsleep.md): A flag to indicate the app is performing a user-requested action, but that the system can sleep on idle.
- [background](activityoptions/background.md): A flag to indicate the app has initiated some kind of work, but not as the direct result of user request.
- [latencyCritical](activityoptions/latencycritical.md): A flag to indicate the activity requires the highest amount of timer and I/O precision available.
- [animationTrackingEnabled](activityoptions/animationtrackingenabled.md): A flag to track the activity with an animation signpost interval.
- [trackingEnabled](activityoptions/trackingenabled.md): A flag to track the activity with a signpost interval.

### Initializers

- [init(rawValue:)](activityoptions/init%28rawvalue_%29.md)
- [idleDisplaySleepDisabled](activityoptions/idledisplaysleepdisabled.md): A flag to require the screen to stay powered on.
- [idleSystemSleepDisabled](activityoptions/idlesystemsleepdisabled.md): A flag to prevent idle sleep.
- [suddenTerminationDisabled](activityoptions/suddenterminationdisabled.md): A flag to prevent sudden termination.
- [automaticTerminationDisabled](activityoptions/automaticterminationdisabled.md): A flag to prevent automatic termination.
- [userInitiated](activityoptions/userinitiated.md): A flag to indicate the app is performing a user-requested action.
- [userInteractive](activityoptions/userinteractive.md): A flag to indicate the app is responding to user interaction.
- [userInitiatedAllowingIdleSystemSleep](activityoptions/userinitiatedallowingidlesystemsleep.md): A flag to indicate the app is performing a user-requested action, but that the system can sleep on idle.
- [background](activityoptions/background.md): A flag to indicate the app has initiated some kind of work, but not as the direct result of user request.
- [latencyCritical](activityoptions/latencycritical.md): A flag to indicate the activity requires the highest amount of timer and I/O precision available.
- [animationTrackingEnabled](activityoptions/animationtrackingenabled.md): A flag to track the activity with an animation signpost interval.
- [trackingEnabled](activityoptions/trackingenabled.md): A flag to track the activity with a signpost interval.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Managing activities

- [beginActivity(options:reason:)](beginactivity%28options_reason_%29.md): Begin an activity using the given options and reason.
- [endActivity(\_:)](endactivity%28__%29.md): Ends the given activity.
- [performActivity(options:reason:using:)](performactivity%28options_reason_using_%29.md): Synchronously perform an activity defined by a given block using the given options.
- [performExpiringActivity(withReason:using:)](performexpiringactivity%28withreason_using_%29.md): Performs the specified block asynchronously and notifies you if the process is about to be suspended.

# NSActivityOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Option flags used with [beginActivityWithOptions:reason:](beginactivity%28options_reason_%29.md) and [performActivityWithOptions:reason:usingBlock:](performactivity%28options_reason_using_%29.md).

## Declaration

```objectivec
enum NSActivityOptions : uint64_t;
```

<a id="overview"></a>

## Overview

To include one of these individual flags in one of the sets, use bitwise `OR`; for example, during a presentation you might use:

```objc
NSActivityUserInitiated | NSActivityIdleDisplaySleepDisabled
```

To exclude from one of the sets, use bitwise `AND` with `NOT`; for example, during a user initiated action that may be safely terminated with no application interaction in case of logout you might use:

```objc
NSActivityUserInitiated & ~NSActivitySuddenTerminationDisabled
```

## Topics

### Constants

- [NSActivityIdleDisplaySleepDisabled](activityoptions/idledisplaysleepdisabled.md): A flag to require the screen to stay powered on.
- [NSActivityIdleSystemSleepDisabled](activityoptions/idlesystemsleepdisabled.md): A flag to prevent idle sleep.
- [NSActivitySuddenTerminationDisabled](activityoptions/suddenterminationdisabled.md): A flag to prevent sudden termination.
- [NSActivityAutomaticTerminationDisabled](activityoptions/automaticterminationdisabled.md): A flag to prevent automatic termination.
- [NSActivityUserInitiated](activityoptions/userinitiated.md): A flag to indicate the app is performing a user-requested action.
- [NSActivityUserInteractive](activityoptions/userinteractive.md): A flag to indicate the app is responding to user interaction.
- [NSActivityUserInitiatedAllowingIdleSystemSleep](activityoptions/userinitiatedallowingidlesystemsleep.md): A flag to indicate the app is performing a user-requested action, but that the system can sleep on idle.
- [NSActivityBackground](activityoptions/background.md): A flag to indicate the app has initiated some kind of work, but not as the direct result of user request.
- [NSActivityLatencyCritical](activityoptions/latencycritical.md): A flag to indicate the activity requires the highest amount of timer and I/O precision available.
- [NSActivityAnimationTrackingEnabled](activityoptions/animationtrackingenabled.md): A flag to track the activity with an animation signpost interval.
- [NSActivityTrackingEnabled](activityoptions/trackingenabled.md): A flag to track the activity with a signpost interval.

### Initializers

- [NSActivityIdleDisplaySleepDisabled](activityoptions/idledisplaysleepdisabled.md): A flag to require the screen to stay powered on.
- [NSActivityIdleSystemSleepDisabled](activityoptions/idlesystemsleepdisabled.md): A flag to prevent idle sleep.
- [NSActivitySuddenTerminationDisabled](activityoptions/suddenterminationdisabled.md): A flag to prevent sudden termination.
- [NSActivityAutomaticTerminationDisabled](activityoptions/automaticterminationdisabled.md): A flag to prevent automatic termination.
- [NSActivityUserInitiated](activityoptions/userinitiated.md): A flag to indicate the app is performing a user-requested action.
- [NSActivityUserInteractive](activityoptions/userinteractive.md): A flag to indicate the app is responding to user interaction.
- [NSActivityUserInitiatedAllowingIdleSystemSleep](activityoptions/userinitiatedallowingidlesystemsleep.md): A flag to indicate the app is performing a user-requested action, but that the system can sleep on idle.
- [NSActivityBackground](activityoptions/background.md): A flag to indicate the app has initiated some kind of work, but not as the direct result of user request.
- [NSActivityLatencyCritical](activityoptions/latencycritical.md): A flag to indicate the activity requires the highest amount of timer and I/O precision available.
- [NSActivityAnimationTrackingEnabled](activityoptions/animationtrackingenabled.md): A flag to track the activity with an animation signpost interval.
- [NSActivityTrackingEnabled](activityoptions/trackingenabled.md): A flag to track the activity with a signpost interval.

## See Also

### Managing activities

- [beginActivityWithOptions:reason:](beginactivity%28options_reason_%29.md): Begin an activity using the given options and reason.
- [endActivity:](endactivity%28__%29.md): Ends the given activity.
- [performActivityWithOptions:reason:usingBlock:](performactivity%28options_reason_using_%29.md): Synchronously perform an activity defined by a given block using the given options.
- [performExpiringActivityWithReason:usingBlock:](performexpiringactivity%28withreason_using_%29.md): Performs the specified block asynchronously and notifies you if the process is about to be suspended.
