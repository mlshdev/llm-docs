> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsbackgroundactivityscheduler/result/deferred

# NSBackgroundActivityScheduler.Result.deferred (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** macOS 10.10+

System conditions have changed since the time the activity began executing, and deferral of additional work is recommended.

## Declaration

```swift
case deferred
```

## See Also

### Constants

- [NSBackgroundActivityScheduler.Result.finished](finished.md): The activity has finished executing. If the activity repeats, the next invocation is scheduled by the system.

# NSBackgroundActivityResultDeferred (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** macOS 10.10+

System conditions have changed since the time the activity began executing, and deferral of additional work is recommended.

## Declaration

```objectivec
NSBackgroundActivityResultDeferred
```

## See Also

### Constants

- [NSBackgroundActivityResultFinished](finished.md): The activity has finished executing. If the activity repeats, the next invocation is scheduled by the system.
