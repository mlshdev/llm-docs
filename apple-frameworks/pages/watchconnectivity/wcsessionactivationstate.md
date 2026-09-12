> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcsessionactivationstate](https://developer.apple.com/documentation/watchconnectivity/wcsessionactivationstate)

# WCSessionActivationState (Swift)

**Framework:** Watch Connectivity  
**Kind:** Enumeration  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.2+

Constants indicating the activation state of a session.

## Declaration

```swift
enum WCSessionActivationState
```

## Topics

### Constants

- [WCSessionActivationState.notActivated](wcsessionactivationstate/notactivated.md): The session is not activated. When in this state, no communication occurs between the Watch app and iOS app. It is a programmer error to try to send data to the counterpart app while in this state.
- [WCSessionActivationState.inactive](wcsessionactivationstate/inactive.md): The session was active but is transitioning to the deactivated state. The session’s delegate object may still receive data while in this state, but it is a programmer error to try to send data to the counterpart app.
- [WCSessionActivationState.activated](wcsessionactivationstate/activated.md): The session is active and the Watch app and iOS app may communicate with each other freely.

### Initializers

- [init(rawValue:)](wcsessionactivationstate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [WCErrorDomain](wcerrordomain.md): The domain for errors associated with the Watch Connectivity framework.
- [WCError](wcerror.md): A structure that contains Watch Connectivity error information.
- [WCError.Code](wcerror/code.md): Constants for errors during a session.

# WCSessionActivationState (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Enumeration  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.2+

Constants indicating the activation state of a session.

## Declaration

```objectivec
enum WCSessionActivationState : NSInteger;
```

## Topics

### Constants

- [WCSessionActivationStateNotActivated](wcsessionactivationstate/notactivated.md): The session is not activated. When in this state, no communication occurs between the Watch app and iOS app. It is a programmer error to try to send data to the counterpart app while in this state.
- [WCSessionActivationStateInactive](wcsessionactivationstate/inactive.md): The session was active but is transitioning to the deactivated state. The session’s delegate object may still receive data while in this state, but it is a programmer error to try to send data to the counterpart app.
- [WCSessionActivationStateActivated](wcsessionactivationstate/activated.md): The session is active and the Watch app and iOS app may communicate with each other freely.

## See Also

### Constants

- [WCErrorDomain](wcerrordomain.md): The domain for errors associated with the Watch Connectivity framework.
- [WCErrorCode](wcerror/code.md): Constants for errors during a session.
