> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/processinfo/performactivity(options:reason:using:)](https://developer.apple.com/documentation/foundation/processinfo/performactivity(options:reason:using:))

# performActivity(options:reason:using:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Synchronously perform an activity defined by a given block using the given options.

## Declaration

```swift
func performActivity(options: ProcessInfo.ActivityOptions = [], reason: String, using block: @escaping () -> Void)
```

## Parameters

- `options`: Options for the activity. See [ProcessInfo.ActivityOptions](activityoptions.md) for possible values.
- `reason`: A string used in debugging to indicate the reason the activity began.
- `block`: A block containing the work to be performed by the activity.

<a id="Discussion"></a>

## Discussion

The activity will be automatically ended after `block` returns.

## See Also

### Managing activities

- [beginActivity(options:reason:)](beginactivity%28options_reason_%29.md): Begin an activity using the given options and reason.
- [endActivity(\_:)](endactivity%28__%29.md): Ends the given activity.
- [performExpiringActivity(withReason:using:)](performexpiringactivity%28withreason_using_%29.md): Performs the specified block asynchronously and notifies you if the process is about to be suspended.
- [ProcessInfo.ActivityOptions](activityoptions.md): Option flags used with [beginActivity(options:reason:)](beginactivity%28options_reason_%29.md) and [performActivity(options:reason:using:)](performactivity%28options_reason_using_%29.md).

# performActivityWithOptions:reason:usingBlock: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Synchronously perform an activity defined by a given block using the given options.

## Declaration

```objectivec
- (void) performActivityWithOptions:(NSActivityOptions) options reason:(NSString *) reason usingBlock:(void (^)()) block;
```

## Parameters

- `options`: Options for the activity. See [NSActivityOptions](activityoptions.md) for possible values.
- `reason`: A string used in debugging to indicate the reason the activity began.
- `block`: A block containing the work to be performed by the activity.

<a id="Discussion"></a>

## Discussion

The activity will be automatically ended after `block` returns.

## See Also

### Managing activities

- [beginActivityWithOptions:reason:](beginactivity%28options_reason_%29.md): Begin an activity using the given options and reason.
- [endActivity:](endactivity%28__%29.md): Ends the given activity.
- [performExpiringActivityWithReason:usingBlock:](performexpiringactivity%28withreason_using_%29.md): Performs the specified block asynchronously and notifies you if the process is about to be suspended.
- [NSActivityOptions](activityoptions.md): Option flags used with [beginActivityWithOptions:reason:](beginactivity%28options_reason_%29.md) and [performActivityWithOptions:reason:usingBlock:](performactivity%28options_reason_using_%29.md).
