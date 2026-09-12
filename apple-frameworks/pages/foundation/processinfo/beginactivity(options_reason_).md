> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/processinfo/beginactivity(options:reason:)](https://developer.apple.com/documentation/foundation/processinfo/beginactivity(options:reason:))

# beginActivity(options:reason:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Begin an activity using the given options and reason.

## Declaration

```swift
func beginActivity(options: ProcessInfo.ActivityOptions = [], reason: String) -> any NSObjectProtocol
```

## Parameters

- `options`: Options for the activity. See [ProcessInfo.ActivityOptions](activityoptions.md) for possible values.
- `reason`: A string used in debugging to indicate the reason the activity began.

<a id="return-value"></a>

## Return Value

An object token representing the activity.

<a id="Discussion"></a>

## Discussion

Indicate completion of the activity by calling [endActivity(\_:)](endactivity%28__%29.md) passing the returned object as the argument.

## See Also

### Managing activities

- [endActivity(\_:)](endactivity%28__%29.md): Ends the given activity.
- [performActivity(options:reason:using:)](performactivity%28options_reason_using_%29.md): Synchronously perform an activity defined by a given block using the given options.
- [performExpiringActivity(withReason:using:)](performexpiringactivity%28withreason_using_%29.md): Performs the specified block asynchronously and notifies you if the process is about to be suspended.
- [ProcessInfo.ActivityOptions](activityoptions.md): Option flags used with [beginActivity(options:reason:)](beginactivity%28options_reason_%29.md) and [performActivity(options:reason:using:)](performactivity%28options_reason_using_%29.md).

# beginActivityWithOptions:reason: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Begin an activity using the given options and reason.

## Declaration

```objectivec
- (id<NSObject>) beginActivityWithOptions:(NSActivityOptions) options reason:(NSString *) reason;
```

## Parameters

- `options`: Options for the activity. See [NSActivityOptions](activityoptions.md) for possible values.
- `reason`: A string used in debugging to indicate the reason the activity began.

<a id="return-value"></a>

## Return Value

An object token representing the activity.

<a id="Discussion"></a>

## Discussion

Indicate completion of the activity by calling [endActivity:](endactivity%28__%29.md) passing the returned object as the argument.

## See Also

### Managing activities

- [endActivity:](endactivity%28__%29.md): Ends the given activity.
- [performActivityWithOptions:reason:usingBlock:](performactivity%28options_reason_using_%29.md): Synchronously perform an activity defined by a given block using the given options.
- [performExpiringActivityWithReason:usingBlock:](performexpiringactivity%28withreason_using_%29.md): Performs the specified block asynchronously and notifies you if the process is about to be suspended.
- [NSActivityOptions](activityoptions.md): Option flags used with [beginActivityWithOptions:reason:](beginactivity%28options_reason_%29.md) and [performActivityWithOptions:reason:usingBlock:](performactivity%28options_reason_using_%29.md).
