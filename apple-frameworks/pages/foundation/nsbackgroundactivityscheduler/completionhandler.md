> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsbackgroundactivityscheduler/completionhandler](https://developer.apple.com/documentation/foundation/nsbackgroundactivityscheduler/completionhandler)

# NSBackgroundActivityScheduler.CompletionHandler (Swift)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** macOS 10.10+

## Declaration

```swift
typealias CompletionHandler = @Sendable (NSBackgroundActivityScheduler.Result) -> Void
```

## See Also

### Scheduling Activity

- [schedule(\_:)](schedule%28__%29.md): Begins scheduling the background activity.

# NSBackgroundActivityCompletionHandler (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** macOS 10.10+

## Declaration

```objectivec
typedef void (^)(enum NSBackgroundActivityResult) NSBackgroundActivityCompletionHandler;
```

## See Also

### Scheduling Activity

- [scheduleWithBlock:](schedule%28__%29.md): Begins scheduling the background activity.
