> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nshapticfeedbackmanager/performancetime/default](https://developer.apple.com/documentation/appkit/nshapticfeedbackmanager/performancetime/default)

# NSHapticFeedbackManager.PerformanceTime.default (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 10.11+

Allows the system to choose the most appropriate time for feedback to be provided. Currently, this is the next time the screen is updated.

## Declaration

```swift
case `default`
```

## See Also

### Constants

- [NSHapticFeedbackManager.PerformanceTime.now](now.md): Instructs the system to provide immediate haptic feedback to the user, rather than waiting for synchronization to occur with something visual occurring on screen.
- [NSHapticFeedbackManager.PerformanceTime.drawCompleted](drawcompleted.md): Instructs the system to provide haptic feedback to the user the next time the screen is updated.

# NSHapticFeedbackPerformanceTimeDefault (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.11+

Allows the system to choose the most appropriate time for feedback to be provided. Currently, this is the next time the screen is updated.

## Declaration

```objectivec
NSHapticFeedbackPerformanceTimeDefault
```

## See Also

### Constants

- [NSHapticFeedbackPerformanceTimeNow](now.md): Instructs the system to provide immediate haptic feedback to the user, rather than waiting for synchronization to occur with something visual occurring on screen.
- [NSHapticFeedbackPerformanceTimeDrawCompleted](drawcompleted.md): Instructs the system to provide haptic feedback to the user the next time the screen is updated.
