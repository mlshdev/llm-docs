> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmheadphoneactivitymanager/statushandler](https://developer.apple.com/documentation/coremotion/cmheadphoneactivitymanager/statushandler)

# CMHeadphoneActivityManager.StatusHandler (Swift)

**Framework:** Core Motion  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · watchOS 2.0+

The type for a handler to be invoked with status updates.

## Declaration

```swift
typealias StatusHandler = (CMHeadphoneActivityManager.Status, (any Error)?) -> Void
```

## See Also

### Supporting Types

- [CMHeadphoneActivityManager.Status](status.md): Headphone connection status updates.
- [CMHeadphoneActivityManager.ActivityHandler](activityhandler.md): The type for a handler to be invoked when headphone motion activity data is available.

# CMHeadphoneActivityStatusHandler (Objective-C)

**Framework:** Core Motion  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

The type for a handler to be invoked with status updates.

## Declaration

```objectivec
typedef void (^)(enum CMHeadphoneActivityStatus, NSError *) CMHeadphoneActivityStatusHandler;
```

## See Also

### Supporting Types

- [CMHeadphoneActivityStatus](status.md): Headphone connection status updates.
- [CMHeadphoneActivityHandler](activityhandler.md): The type for a handler to be invoked when headphone motion activity data is available.
