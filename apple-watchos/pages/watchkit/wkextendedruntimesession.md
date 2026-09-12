> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextendedruntimesession](https://developer.apple.com/documentation/watchkit/wkextendedruntimesession)

# WKExtendedRuntimeSession (Swift)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 6.0+

A session that continues to run your app after the user has stopped interacting.

## Declaration

```swift
class WKExtendedRuntimeSession
```

## Mentioned In

- [Using extended runtime sessions](using-extended-runtime-sessions.md)
- [Using background tasks](using-background-tasks.md)

<a id="overview"></a>

## Overview

With extended runtime sessions, your app continues to run after the user stops interacting with it. The app can continue to communicate with Bluetooth devices, process data, or play sounds or haptics, even after the watch’s screen turns off.

Each app can support a single type of extended runtime session: self care, mindfulness, physical therapy, or smart alarm. Select the session by enabling the appropriate Background Modes capability.

For more information, see [Using extended runtime sessions](using-extended-runtime-sessions.md).

## Topics

### Creating a Session

- [delegate](wkextendedruntimesession/delegate.md): A delegate object for monitoring the session and responding to state changes and errors.
- [WKExtendedRuntimeSessionDelegate](wkextendedruntimesessiondelegate.md): A set of optional methods for monitoring an extended runtime session.

### Managing the Session State

- [start()](wkextendedruntimesession/start%28%29.md): Starts running the session.
- [start(at:)](wkextendedruntimesession/start%28at_%29.md): Schedules a session to start running at a future date.
- [invalidate()](wkextendedruntimesession/invalidate%28%29.md): Stops the session.
- [state](wkextendedruntimesession/state.md): The session’s current state.
- [WKExtendedRuntimeSessionState](wkextendedruntimesessionstate.md): The activation states for an extended runtime session.
- [expirationDate](wkextendedruntimesession/expirationdate.md): The time and date when the session expires.
- [requestAutoLaunchAuthorizationStatus(completion:)](wkextendedruntimesession/requestautolaunchauthorizationstatus%28completion_%29.md)
- [WKExtendedRuntimeSessionAutoLaunchAuthorizationStatus](wkextendedruntimesessionautolaunchauthorizationstatus.md)

### Alerting the User

- [notifyUser(hapticType:repeatHandler:)](wkextendedruntimesession/notifyuser%28haptictype_repeathandler_%29.md): Play a repeating haptic alert.

### Handling Errors

- [WKExtendedRuntimeSessionErrorCode](wkextendedruntimesessionerrorcode.md): The error codes reported by extended runtime sessions.
- [WKExtendedRuntimeSessionErrorDomain](wkextendedruntimesessionerrordomain.md): The domain for errors reported by extended runtime sessions.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Runtime management

- [Background execution](background-execution.md): Manage background sessions and tasks.
- [Life cycles](life-cycles.md): Receive and respond to life-cycle notifications.
- [Using extended runtime sessions](using-extended-runtime-sessions.md): Create an extended runtime session that continues running your app after the user stops interacting with it.
- [Interacting with Bluetooth peripherals during background app refresh](interacting-with-bluetooth-peripherals-during-background-app-refresh.md): Keep your complications up-to-date by reading values from a Bluetooth peripheral while your app is running in the background.

# WKExtendedRuntimeSession (Objective-C)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 6.0+

A session that continues to run your app after the user has stopped interacting.

## Declaration

```objectivec
@interface WKExtendedRuntimeSession : NSObject
```

## Mentioned In

- [Using extended runtime sessions](using-extended-runtime-sessions.md)
- [Using background tasks](using-background-tasks.md)

<a id="overview"></a>

## Overview

With extended runtime sessions, your app continues to run after the user stops interacting with it. The app can continue to communicate with Bluetooth devices, process data, or play sounds or haptics, even after the watch’s screen turns off.

Each app can support a single type of extended runtime session: self care, mindfulness, physical therapy, or smart alarm. Select the session by enabling the appropriate Background Modes capability.

For more information, see [Using extended runtime sessions](using-extended-runtime-sessions.md).

## Topics

### Creating a Session

- [session](wkextendedruntimesession/session.md): Instantiates a new session object.
- [delegate](wkextendedruntimesession/delegate.md): A delegate object for monitoring the session and responding to state changes and errors.
- [WKExtendedRuntimeSessionDelegate](wkextendedruntimesessiondelegate.md): A set of optional methods for monitoring an extended runtime session.

### Managing the Session State

- [start](wkextendedruntimesession/start%28%29.md): Starts running the session.
- [startAtDate:](wkextendedruntimesession/start%28at_%29.md): Schedules a session to start running at a future date.
- [invalidate](wkextendedruntimesession/invalidate%28%29.md): Stops the session.
- [state](wkextendedruntimesession/state.md): The session’s current state.
- [WKExtendedRuntimeSessionState](wkextendedruntimesessionstate.md): The activation states for an extended runtime session.
- [expirationDate](wkextendedruntimesession/expirationdate.md): The time and date when the session expires.
- [requestAutoLaunchAuthorizationStatusWithCompletion:](wkextendedruntimesession/requestautolaunchauthorizationstatus%28completion_%29.md)
- [WKExtendedRuntimeSessionAutoLaunchAuthorizationStatus](wkextendedruntimesessionautolaunchauthorizationstatus.md)

### Alerting the User

- [notifyUserWithHaptic:repeatHandler:](wkextendedruntimesession/notifyuser%28haptictype_repeathandler_%29.md): Play a repeating haptic alert.

### Handling Errors

- [WKExtendedRuntimeSessionErrorCode](wkextendedruntimesessionerrorcode.md): The error codes reported by extended runtime sessions.
- [WKExtendedRuntimeSessionErrorDomain](wkextendedruntimesessionerrordomain.md): The domain for errors reported by extended runtime sessions.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Runtime management

- [Background execution](background-execution.md): Manage background sessions and tasks.
- [Life cycles](life-cycles.md): Receive and respond to life-cycle notifications.
- [Using extended runtime sessions](using-extended-runtime-sessions.md): Create an extended runtime session that continues running your app after the user stops interacting with it.
- [Interacting with Bluetooth peripherals during background app refresh](interacting-with-bluetooth-peripherals-during-background-app-refresh.md): Keep your complications up-to-date by reading values from a Bluetooth peripheral while your app is running in the background.
