> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsbackgroundactivityscheduler/result/finished](https://developer.apple.com/documentation/foundation/nsbackgroundactivityscheduler/result/finished)

# NSBackgroundActivityScheduler.Result.finished (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** macOS 10.10+

The activity has finished executing. If the activity repeats, the next invocation is scheduled by the system.

## Declaration

```swift
case finished
```

## See Also

### Constants

- [NSBackgroundActivityScheduler.Result.deferred](deferred.md): System conditions have changed since the time the activity began executing, and deferral of additional work is recommended.

# NSBackgroundActivityResultFinished (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** macOS 10.10+

The activity has finished executing. If the activity repeats, the next invocation is scheduled by the system.

## Declaration

```objectivec
NSBackgroundActivityResultFinished
```

## See Also

### Constants

- [NSBackgroundActivityResultDeferred](deferred.md): System conditions have changed since the time the activity began executing, and deferral of additional work is recommended.
