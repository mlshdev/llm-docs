> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextendedruntimesessionerrorcode](https://developer.apple.com/documentation/watchkit/wkextendedruntimesessionerrorcode)

# WKExtendedRuntimeSessionErrorCode (Swift)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS 6.0+

The error codes reported by extended runtime sessions.

## Declaration

```swift
enum WKExtendedRuntimeSessionErrorCode
```

<a id="overview"></a>

## Overview

The session passes these errors to the sesson delegate’s [extendedRuntimeSession(\_:didInvalidateWith:error:)](wkextendedruntimesessiondelegate/extendedruntimesession%28__didinvalidatewith_error_%29.md) method.

## Topics

### Error Codes

- [WKExtendedRuntimeSessionErrorCode.unknown](wkextendedruntimesessionerrorcode/unknown.md): An unknown error occurred.
- [WKExtendedRuntimeSessionErrorCode.scheduledTooFarInAdvance](wkextendedruntimesessionerrorcode/scheduledtoofarinadvance.md): The app attempted to schedule a session too far in the future.
- [WKExtendedRuntimeSessionErrorCode.mustBeActiveToStartOrSchedule](wkextendedruntimesessionerrorcode/mustbeactivetostartorschedule.md): The watchOS app attempted to start or schedule a session while not in an active state.
- [WKExtendedRuntimeSessionErrorCode.notYetStarted](wkextendedruntimesessionerrorcode/notyetstarted.md): The app invalidated the session before it started.
- [WKExtendedRuntimeSessionErrorCode.exceededResourceLimits](wkextendedruntimesessionerrorcode/exceededresourcelimits.md): The session exceeded its resource limits.
- [WKExtendedRuntimeSessionErrorCode.barDisabled](wkextendedruntimesessionerrorcode/bardisabled.md): The user has disabled background app refresh.
- [WKExtendedRuntimeSessionErrorCode.notApprovedToStartSession](wkextendedruntimesessionerrorcode/notapprovedtostartsession.md): The app attempted to start a session, but doesn’t have a valid session type.
- [WKExtendedRuntimeSessionErrorCode.notApprovedToSchedule](wkextendedruntimesessionerrorcode/notapprovedtoschedule.md): The app attempted to schedule a session, but the session type does not support scheduling.

### Enumeration Cases

- [WKExtendedRuntimeSessionErrorCode.mustBeActiveToPrompt](wkextendedruntimesessionerrorcode/mustbeactivetoprompt.md)
- [WKExtendedRuntimeSessionErrorCode.unsupportedSessionType](wkextendedruntimesessionerrorcode/unsupportedsessiontype.md)

### Initializers

- [init(rawValue:)](wkextendedruntimesessionerrorcode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling Errors

- [WKExtendedRuntimeSessionErrorDomain](wkextendedruntimesessionerrordomain.md): The domain for errors reported by extended runtime sessions.

# WKExtendedRuntimeSessionErrorCode (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS 6.0+

The error codes reported by extended runtime sessions.

## Declaration

```objectivec
enum WKExtendedRuntimeSessionErrorCode : NSInteger;
```

<a id="overview"></a>

## Overview

The session passes these errors to the sesson delegate’s [extendedRuntimeSession:didInvalidateWithReason:error:](wkextendedruntimesessiondelegate/extendedruntimesession%28__didinvalidatewith_error_%29.md) method.

## Topics

### Error Codes

- [WKExtendedRuntimeSessionErrorUnknown](wkextendedruntimesessionerrorcode/unknown.md): An unknown error occurred.
- [WKExtendedRuntimeSessionErrorScheduledTooFarInAdvance](wkextendedruntimesessionerrorcode/scheduledtoofarinadvance.md): The app attempted to schedule a session too far in the future.
- [WKExtendedRuntimeSessionErrorMustBeActiveToStartOrSchedule](wkextendedruntimesessionerrorcode/mustbeactivetostartorschedule.md): The watchOS app attempted to start or schedule a session while not in an active state.
- [WKExtendedRuntimeSessionErrorNotYetStarted](wkextendedruntimesessionerrorcode/notyetstarted.md): The app invalidated the session before it started.
- [WKExtendedRuntimeSessionErrorExceededResourceLimits](wkextendedruntimesessionerrorcode/exceededresourcelimits.md): The session exceeded its resource limits.
- [WKExtendedRuntimeSessionErrorBARDisabled](wkextendedruntimesessionerrorcode/bardisabled.md): The user has disabled background app refresh.
- [WKExtendedRuntimeSessionErrorNotApprovedToStartSession](wkextendedruntimesessionerrorcode/notapprovedtostartsession.md): The app attempted to start a session, but doesn’t have a valid session type.
- [WKExtendedRuntimeSessionErrorNotApprovedToSchedule](wkextendedruntimesessionerrorcode/notapprovedtoschedule.md): The app attempted to schedule a session, but the session type does not support scheduling.

### Enumeration Cases

- [WKExtendedRuntimeSessionErrorMustBeActiveToPrompt](wkextendedruntimesessionerrorcode/mustbeactivetoprompt.md)
- [WKExtendedRuntimeSessionErrorUnsupportedSessionType](wkextendedruntimesessionerrorcode/unsupportedsessiontype.md)

## See Also

### Handling Errors

- [WKExtendedRuntimeSessionErrorDomain](wkextendedruntimesessionerrordomain.md): The domain for errors reported by extended runtime sessions.
