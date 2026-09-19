> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/urlerror/backgroundtaskcancelledreason-swift.enum/insufficientsystemresources

# URLError.BackgroundTaskCancelledReason.insufficientSystemResources

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A reason that indicates the system canceled the background task because it lacks sufficient resources to perform the task.

## Declaration

```swift
case insufficientSystemResources
```

<a id="Discussion"></a>

## Discussion

This error results from factors including (but not limited to) battery capacity, thermal condition, network connectivity, and cellular data plan.

## See Also

### Cancellation reasons

- [URLError.BackgroundTaskCancelledReason.backgroundUpdatesDisabled](backgroundupdatesdisabled.md): A reason that indicates the system canceled the background task because background tasks are disabled.
- [URLError.BackgroundTaskCancelledReason.userForceQuitApplication](userforcequitapplication.md): A reason that indicates the system canceled the background task because the user force-quit the application.
