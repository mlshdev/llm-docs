> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/processinfo/endactivity(_:)](https://developer.apple.com/documentation/foundation/processinfo/endactivity(_:))

# endActivity(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Ends the given activity.

## Declaration

```swift
func endActivity(_ activity: any NSObjectProtocol)
```

## Parameters

- `activity`: An activity object returned by [beginActivity(options:reason:)](beginactivity%28options_reason_%29.md).

## See Also

### Managing activities

- [beginActivity(options:reason:)](beginactivity%28options_reason_%29.md): Begin an activity using the given options and reason.
- [performActivity(options:reason:using:)](performactivity%28options_reason_using_%29.md): Synchronously perform an activity defined by a given block using the given options.
- [performExpiringActivity(withReason:using:)](performexpiringactivity%28withreason_using_%29.md): Performs the specified block asynchronously and notifies you if the process is about to be suspended.
- [ProcessInfo.ActivityOptions](activityoptions.md): Option flags used with [beginActivity(options:reason:)](beginactivity%28options_reason_%29.md) and [performActivity(options:reason:using:)](performactivity%28options_reason_using_%29.md).

# endActivity: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Ends the given activity.

## Declaration

```objectivec
- (void) endActivity:(id<NSObject>) activity;
```

## Parameters

- `activity`: An activity object returned by [beginActivityWithOptions:reason:](beginactivity%28options_reason_%29.md).

## See Also

### Managing activities

- [beginActivityWithOptions:reason:](beginactivity%28options_reason_%29.md): Begin an activity using the given options and reason.
- [performActivityWithOptions:reason:usingBlock:](performactivity%28options_reason_using_%29.md): Synchronously perform an activity defined by a given block using the given options.
- [performExpiringActivityWithReason:usingBlock:](performexpiringactivity%28withreason_using_%29.md): Performs the specified block asynchronously and notifies you if the process is about to be suspended.
- [NSActivityOptions](activityoptions.md): Option flags used with [beginActivityWithOptions:reason:](beginactivity%28options_reason_%29.md) and [performActivityWithOptions:reason:usingBlock:](performactivity%28options_reason_using_%29.md).
