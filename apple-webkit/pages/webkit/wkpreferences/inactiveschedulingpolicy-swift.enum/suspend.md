> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkpreferences/inactiveschedulingpolicy-swift.enum/suspend](https://developer.apple.com/documentation/webkit/wkpreferences/inactiveschedulingpolicy-swift.enum/suspend)

# WKPreferences.InactiveSchedulingPolicy.suspend (Swift)

**Framework:** WebKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A policy where a web view that’s not in a window fully suspends tasks.

## Declaration

```swift
case suspend
```

## See Also

### Scheduling policies

- [WKPreferences.InactiveSchedulingPolicy.none](none.md): A policy where a web view that’s not in a window runs tasks normally.
- [WKPreferences.InactiveSchedulingPolicy.throttle](throttle.md): A policy where a web view that’s not in a window limits processing, but does not fully suspend tasks.

# WKInactiveSchedulingPolicySuspend (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A policy where a web view that’s not in a window fully suspends tasks.

## Declaration

```objectivec
WKInactiveSchedulingPolicySuspend
```

## See Also

### Scheduling policies

- [WKInactiveSchedulingPolicyNone](none.md): A policy where a web view that’s not in a window runs tasks normally.
- [WKInactiveSchedulingPolicyThrottle](throttle.md): A policy where a web view that’s not in a window limits processing, but does not fully suspend tasks.
