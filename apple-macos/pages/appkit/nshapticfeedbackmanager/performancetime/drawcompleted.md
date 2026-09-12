> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nshapticfeedbackmanager/performancetime/drawcompleted](https://developer.apple.com/documentation/appkit/nshapticfeedbackmanager/performancetime/drawcompleted)

# NSHapticFeedbackManager.PerformanceTime.drawCompleted (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 10.11+

Instructs the system to provide haptic feedback to the user the next time the screen is updated.

## Declaration

```swift
case drawCompleted
```

## See Also

### Constants

- [NSHapticFeedbackManager.PerformanceTime.default](default.md): Allows the system to choose the most appropriate time for feedback to be provided. Currently, this is the next time the screen is updated.
- [NSHapticFeedbackManager.PerformanceTime.now](now.md): Instructs the system to provide immediate haptic feedback to the user, rather than waiting for synchronization to occur with something visual occurring on screen.

# NSHapticFeedbackPerformanceTimeDrawCompleted (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.11+

Instructs the system to provide haptic feedback to the user the next time the screen is updated.

## Declaration

```objectivec
NSHapticFeedbackPerformanceTimeDrawCompleted
```

## See Also

### Constants

- [NSHapticFeedbackPerformanceTimeDefault](default.md): Allows the system to choose the most appropriate time for feedback to be provided. Currently, this is the next time the screen is updated.
- [NSHapticFeedbackPerformanceTimeNow](now.md): Instructs the system to provide immediate haptic feedback to the user, rather than waiting for synchronization to occur with something visual occurring on screen.
