> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextendedruntimesessiondelegate](https://developer.apple.com/documentation/watchkit/wkextendedruntimesessiondelegate)

# WKExtendedRuntimeSessionDelegate (Swift)

**Framework:** WatchKit  
**Kind:** Protocol  
**Availability:** watchOS 6.0+

A set of optional methods for monitoring an extended runtime session.

## Declaration

```swift
protocol WKExtendedRuntimeSessionDelegate : NSObjectProtocol
```

## Mentioned In

- [Using extended runtime sessions](using-extended-runtime-sessions.md)

<a id="overview"></a>

## Overview

Implement these methods to track the changes to your session’s state.

## Topics

### Monitoring State Changes

- [extendedRuntimeSessionDidStart(\_:)](wkextendedruntimesessiondelegate/extendedruntimesessiondidstart%28__%29.md): Indicates that the session has started running.
- [extendedRuntimeSessionWillExpire(\_:)](wkextendedruntimesessiondelegate/extendedruntimesessionwillexpire%28__%29.md): Indicates that the session is about to expire.
- [extendedRuntimeSession(\_:didInvalidateWith:error:)](wkextendedruntimesessiondelegate/extendedruntimesession%28__didinvalidatewith_error_%29.md): Indicates that the session has encountered an error or stopped running.
- [WKExtendedRuntimeSessionInvalidationReason](wkextendedruntimesessioninvalidationreason.md): The reasons why a session can become invalid.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Creating a Session

- [delegate](wkextendedruntimesession/delegate.md): A delegate object for monitoring the session and responding to state changes and errors.

# WKExtendedRuntimeSessionDelegate (Objective-C)

**Framework:** WatchKit  
**Kind:** Protocol  
**Availability:** watchOS 6.0+

A set of optional methods for monitoring an extended runtime session.

## Declaration

```objectivec
@protocol WKExtendedRuntimeSessionDelegate <NSObject>
```

## Mentioned In

- [Using extended runtime sessions](using-extended-runtime-sessions.md)

<a id="overview"></a>

## Overview

Implement these methods to track the changes to your session’s state.

## Topics

### Monitoring State Changes

- [extendedRuntimeSessionDidStart:](wkextendedruntimesessiondelegate/extendedruntimesessiondidstart%28__%29.md): Indicates that the session has started running.
- [extendedRuntimeSessionWillExpire:](wkextendedruntimesessiondelegate/extendedruntimesessionwillexpire%28__%29.md): Indicates that the session is about to expire.
- [extendedRuntimeSession:didInvalidateWithReason:error:](wkextendedruntimesessiondelegate/extendedruntimesession%28__didinvalidatewith_error_%29.md): Indicates that the session has encountered an error or stopped running.
- [WKExtendedRuntimeSessionInvalidationReason](wkextendedruntimesessioninvalidationreason.md): The reasons why a session can become invalid.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Creating a Session

- [session](wkextendedruntimesession/session.md): Instantiates a new session object.
- [delegate](wkextendedruntimesession/delegate.md): A delegate object for monitoring the session and responding to state changes and errors.
