> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkpreferences/inactiveschedulingpolicy-swift.enum/none](https://developer.apple.com/documentation/webkit/wkpreferences/inactiveschedulingpolicy-swift.enum/none)

# WKPreferences.InactiveSchedulingPolicy.none (Swift)

**Framework:** WebKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A policy where a web view that’s not in a window runs tasks normally.

## Declaration

```swift
case none
```

## See Also

### Scheduling policies

- [WKPreferences.InactiveSchedulingPolicy.suspend](suspend.md): A policy where a web view that’s not in a window fully suspends tasks.
- [WKPreferences.InactiveSchedulingPolicy.throttle](throttle.md): A policy where a web view that’s not in a window limits processing, but does not fully suspend tasks.

# WKInactiveSchedulingPolicyNone (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A policy where a web view that’s not in a window runs tasks normally.

## Declaration

```objectivec
WKInactiveSchedulingPolicyNone
```

## See Also

### Scheduling policies

- [WKInactiveSchedulingPolicySuspend](suspend.md): A policy where a web view that’s not in a window fully suspends tasks.
- [WKInactiveSchedulingPolicyThrottle](throttle.md): A policy where a web view that’s not in a window limits processing, but does not fully suspend tasks.
