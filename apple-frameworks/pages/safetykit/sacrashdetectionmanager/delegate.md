> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safetykit/sacrashdetectionmanager/delegate](https://developer.apple.com/documentation/safetykit/sacrashdetectionmanager/delegate)

# delegate (Swift)

**Framework:** SafetyKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · watchOS 10.1+

The object that receives Crash Detection events.

## Declaration

```swift
weak var delegate: (any SACrashDetectionDelegate)? { get set }
```

## See Also

### Requesting authorization

- [requestAuthorization(completionHandler:)](requestauthorization%28completionhandler_%29.md): Requests permission to access Crash Detection information.

# delegate (Objective-C)

**Framework:** SafetyKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · watchOS 10.1+

The object that receives Crash Detection events.

## Declaration

```objectivec
@property (nonatomic, weak, readwrite) id<SACrashDetectionDelegate> delegate;
```

## See Also

### Requesting authorization

- [requestAuthorizationWithCompletionHandler:](requestauthorization%28completionhandler_%29.md): Requests permission to access Crash Detection information.
