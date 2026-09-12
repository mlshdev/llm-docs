> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nshapticfeedbackmanager/performancetime/now](https://developer.apple.com/documentation/appkit/nshapticfeedbackmanager/performancetime/now)

# NSHapticFeedbackManager.PerformanceTime.now (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 10.11+

Instructs the system to provide immediate haptic feedback to the user, rather than waiting for synchronization to occur with something visual occurring on screen.

## Declaration

```swift
case now
```

## See Also

### Constants

- [NSHapticFeedbackManager.PerformanceTime.default](default.md): Allows the system to choose the most appropriate time for feedback to be provided. Currently, this is the next time the screen is updated.
- [NSHapticFeedbackManager.PerformanceTime.drawCompleted](drawcompleted.md): Instructs the system to provide haptic feedback to the user the next time the screen is updated.

# NSHapticFeedbackPerformanceTimeNow (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.11+

Instructs the system to provide immediate haptic feedback to the user, rather than waiting for synchronization to occur with something visual occurring on screen.

## Declaration

```objectivec
NSHapticFeedbackPerformanceTimeNow
```

## See Also

### Constants

- [NSHapticFeedbackPerformanceTimeDefault](default.md): Allows the system to choose the most appropriate time for feedback to be provided. Currently, this is the next time the screen is updated.
- [NSHapticFeedbackPerformanceTimeDrawCompleted](drawcompleted.md): Instructs the system to provide haptic feedback to the user the next time the screen is updated.
