> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcsessionactivationstate/activated](https://developer.apple.com/documentation/watchconnectivity/wcsessionactivationstate/activated)

# WCSessionActivationState.activated (Swift)

**Framework:** Watch Connectivity  
**Kind:** Case  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.2+

The session is active and the Watch app and iOS app may communicate with each other freely.

## Declaration

```swift
case activated
```

## See Also

### Constants

- [WCSessionActivationState.notActivated](notactivated.md): The session is not activated. When in this state, no communication occurs between the Watch app and iOS app. It is a programmer error to try to send data to the counterpart app while in this state.
- [WCSessionActivationState.inactive](inactive.md): The session was active but is transitioning to the deactivated state. The session’s delegate object may still receive data while in this state, but it is a programmer error to try to send data to the counterpart app.

# WCSessionActivationStateActivated (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Enumeration Case  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.2+

The session is active and the Watch app and iOS app may communicate with each other freely.

## Declaration

```objectivec
WCSessionActivationStateActivated
```

## See Also

### Constants

- [WCSessionActivationStateNotActivated](notactivated.md): The session is not activated. When in this state, no communication occurs between the Watch app and iOS app. It is a programmer error to try to send data to the counterpart app while in this state.
- [WCSessionActivationStateInactive](inactive.md): The session was active but is transitioning to the deactivated state. The session’s delegate object may still receive data while in this state, but it is a programmer error to try to send data to the counterpart app.
