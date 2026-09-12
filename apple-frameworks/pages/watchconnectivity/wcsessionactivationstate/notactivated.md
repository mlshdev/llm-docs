> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcsessionactivationstate/notactivated](https://developer.apple.com/documentation/watchconnectivity/wcsessionactivationstate/notactivated)

# WCSessionActivationState.notActivated (Swift)

**Framework:** Watch Connectivity  
**Kind:** Case  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.2+

The session is not activated. When in this state, no communication occurs between the Watch app and iOS app. It is a programmer error to try to send data to the counterpart app while in this state.

## Declaration

```swift
case notActivated
```

## See Also

### Constants

- [WCSessionActivationState.inactive](inactive.md): The session was active but is transitioning to the deactivated state. The session’s delegate object may still receive data while in this state, but it is a programmer error to try to send data to the counterpart app.
- [WCSessionActivationState.activated](activated.md): The session is active and the Watch app and iOS app may communicate with each other freely.

# WCSessionActivationStateNotActivated (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Enumeration Case  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.2+

The session is not activated. When in this state, no communication occurs between the Watch app and iOS app. It is a programmer error to try to send data to the counterpart app while in this state.

## Declaration

```objectivec
WCSessionActivationStateNotActivated
```

## See Also

### Constants

- [WCSessionActivationStateInactive](inactive.md): The session was active but is transitioning to the deactivated state. The session’s delegate object may still receive data while in this state, but it is a programmer error to try to send data to the counterpart app.
- [WCSessionActivationStateActivated](activated.md): The session is active and the Watch app and iOS app may communicate with each other freely.
