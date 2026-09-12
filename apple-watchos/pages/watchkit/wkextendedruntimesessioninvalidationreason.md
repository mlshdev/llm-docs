> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextendedruntimesessioninvalidationreason](https://developer.apple.com/documentation/watchkit/wkextendedruntimesessioninvalidationreason)

# WKExtendedRuntimeSessionInvalidationReason (Swift)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS 6.0+

The reasons why a session can become invalid.

## Declaration

```swift
enum WKExtendedRuntimeSessionInvalidationReason
```

<a id="overview"></a>

## Overview

Sessions become invalid when they encounter an error, or when they stop running.

## Topics

### Invalidation Reasons

- [WKExtendedRuntimeSessionInvalidationReason.error](wkextendedruntimesessioninvalidationreason/error.md): An error prevented the session from running.
- [WKExtendedRuntimeSessionInvalidationReason.none](wkextendedruntimesessioninvalidationreason/none.md): The session ended normally.
- [WKExtendedRuntimeSessionInvalidationReason.sessionInProgress](wkextendedruntimesessioninvalidationreason/sessioninprogress.md): This app already has a running session.
- [WKExtendedRuntimeSessionInvalidationReason.expired](wkextendedruntimesessioninvalidationreason/expired.md): The session used all of its allocated time.
- [WKExtendedRuntimeSessionInvalidationReason.resignedFrontmost](wkextendedruntimesessioninvalidationreason/resignedfrontmost.md): The app lost its frontmost status.
- [WKExtendedRuntimeSessionInvalidationReason.suppressedBySystem](wkextendedruntimesessioninvalidationreason/suppressedbysystem.md): The system is in a state that doesn’t allow sessions of this type.

### Initializers

- [init(rawValue:)](wkextendedruntimesessioninvalidationreason/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Monitoring State Changes

- [extendedRuntimeSessionDidStart(\_:)](wkextendedruntimesessiondelegate/extendedruntimesessiondidstart%28__%29.md): Indicates that the session has started running.
- [extendedRuntimeSessionWillExpire(\_:)](wkextendedruntimesessiondelegate/extendedruntimesessionwillexpire%28__%29.md): Indicates that the session is about to expire.
- [extendedRuntimeSession(\_:didInvalidateWith:error:)](wkextendedruntimesessiondelegate/extendedruntimesession%28__didinvalidatewith_error_%29.md): Indicates that the session has encountered an error or stopped running.

# WKExtendedRuntimeSessionInvalidationReason (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS 6.0+

The reasons why a session can become invalid.

## Declaration

```objectivec
enum WKExtendedRuntimeSessionInvalidationReason : NSInteger;
```

<a id="overview"></a>

## Overview

Sessions become invalid when they encounter an error, or when they stop running.

## Topics

### Invalidation Reasons

- [WKExtendedRuntimeSessionInvalidationReasonError](wkextendedruntimesessioninvalidationreason/error.md): An error prevented the session from running.
- [WKExtendedRuntimeSessionInvalidationReasonNone](wkextendedruntimesessioninvalidationreason/none.md): The session ended normally.
- [WKExtendedRuntimeSessionInvalidationReasonSessionInProgress](wkextendedruntimesessioninvalidationreason/sessioninprogress.md): This app already has a running session.
- [WKExtendedRuntimeSessionInvalidationReasonExpired](wkextendedruntimesessioninvalidationreason/expired.md): The session used all of its allocated time.
- [WKExtendedRuntimeSessionInvalidationReasonResignedFrontmost](wkextendedruntimesessioninvalidationreason/resignedfrontmost.md): The app lost its frontmost status.
- [WKExtendedRuntimeSessionInvalidationReasonSuppressedBySystem](wkextendedruntimesessioninvalidationreason/suppressedbysystem.md): The system is in a state that doesn’t allow sessions of this type.

## See Also

### Monitoring State Changes

- [extendedRuntimeSessionDidStart:](wkextendedruntimesessiondelegate/extendedruntimesessiondidstart%28__%29.md): Indicates that the session has started running.
- [extendedRuntimeSessionWillExpire:](wkextendedruntimesessiondelegate/extendedruntimesessionwillexpire%28__%29.md): Indicates that the session is about to expire.
- [extendedRuntimeSession:didInvalidateWithReason:error:](wkextendedruntimesessiondelegate/extendedruntimesession%28__didinvalidatewith_error_%29.md): Indicates that the session has encountered an error or stopped running.
