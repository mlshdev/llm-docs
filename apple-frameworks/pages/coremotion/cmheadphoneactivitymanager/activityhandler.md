> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremotion/cmheadphoneactivitymanager/activityhandler

# CMHeadphoneActivityManager.ActivityHandler (Swift)

**Framework:** Core Motion  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · watchOS 2.0+

The type for a handler to be invoked when headphone motion activity data is available.

## Declaration

```swift
typealias ActivityHandler = (CMMotionActivity?, (any Error)?) -> Void
```

## See Also

### Supporting Types

- [CMHeadphoneActivityManager.Status](status.md): Headphone connection status updates.
- [CMHeadphoneActivityManager.StatusHandler](statushandler.md): The type for a handler to be invoked with status updates.

# CMHeadphoneActivityHandler (Objective-C)

**Framework:** Core Motion  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · watchOS 2.0+

The type for a handler to be invoked when headphone motion activity data is available.

## Declaration

```objectivec
typedef void (^)(CMMotionActivity *, NSError *) CMHeadphoneActivityHandler;
```

## See Also

### Supporting Types

- [CMHeadphoneActivityStatus](status.md): Headphone connection status updates.
- [CMHeadphoneActivityStatusHandler](statushandler.md): The type for a handler to be invoked with status updates.
