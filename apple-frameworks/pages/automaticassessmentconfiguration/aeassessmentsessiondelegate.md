> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentsessiondelegate](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentsessiondelegate)

# AEAssessmentSessionDelegate (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Protocol  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 14.0+ · macOS 10.15.4+

An interface that the session uses to provide information about session state changes to a delegate.

## Declaration

```swift
protocol AEAssessmentSessionDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

An assessment session operates asynchronously because it takes time to make the changes associated with starting or stopping a session, and external events might affect the state of the session. Adopt the [AEAssessmentSessionDelegate](aeassessmentsessiondelegate.md) protocol to receive callbacks at key points in the session life cycle. Store your adopter in the session’s [delegate](aeassessmentsession/delegate.md) property before starting a session.

By listening for delegate callbacks, you learn when you can safely start an assessment after calling the session’s [begin()](aeassessmentsession/begin%28%29.md) method, when the session has finished after calling the [end()](aeassessmentsession/end%28%29.md) method, or if the session has been interrupted for some reason. You also find out when it’s safe to proceed after changing a session’s configuration.

The session calls all delegate methods on the main thread.

## Topics

### Responding to session start and stop

- [assessmentSessionDidBegin(\_:)](aeassessmentsessiondelegate/assessmentsessiondidbegin%28__%29.md): Tells the delegate that the session started.
- [assessmentSession(\_:failedToBeginWithError:)](aeassessmentsessiondelegate/assessmentsession%28__failedtobeginwitherror_%29.md): Tells the delegate that the session failed to start.
- [assessmentSession(\_:wasInterruptedWithError:)](aeassessmentsessiondelegate/assessmentsession%28__wasinterruptedwitherror_%29.md): Tells the delegate that a system failure interrupted the session.
- [assessmentSessionDidEnd(\_:)](aeassessmentsessiondelegate/assessmentsessiondidend%28__%29.md): Tells the delegate that the session ended.

### Responding to configuration changes

- [assessmentSessionDidUpdate(\_:)](aeassessmentsessiondelegate/assessmentsessiondidupdate%28__%29.md): Tells the delegate that a configuration update succeeded.
- [assessmentSession(\_:failedToUpdateTo:error:)](aeassessmentsessiondelegate/assessmentsession%28__failedtoupdateto_error_%29.md): Tells the delegate that a configuration update failed.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to session updates

- [delegate](aeassessmentsession/delegate.md): A delegate to which the session provides state change updates.

# AEAssessmentSessionDelegate (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Protocol  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 14.0+ · macOS 10.15.4+

An interface that the session uses to provide information about session state changes to a delegate.

## Declaration

```objectivec
@protocol AEAssessmentSessionDelegate <NSObject>
```

<a id="overview"></a>

## Overview

An assessment session operates asynchronously because it takes time to make the changes associated with starting or stopping a session, and external events might affect the state of the session. Adopt the [AEAssessmentSessionDelegate](aeassessmentsessiondelegate.md) protocol to receive callbacks at key points in the session life cycle. Store your adopter in the session’s [delegate](aeassessmentsession/delegate.md) property before starting a session.

By listening for delegate callbacks, you learn when you can safely start an assessment after calling the session’s [begin](aeassessmentsession/begin%28%29.md) method, when the session has finished after calling the [end](aeassessmentsession/end%28%29.md) method, or if the session has been interrupted for some reason. You also find out when it’s safe to proceed after changing a session’s configuration.

The session calls all delegate methods on the main thread.

## Topics

### Responding to session start and stop

- [assessmentSessionDidBegin:](aeassessmentsessiondelegate/assessmentsessiondidbegin%28__%29.md): Tells the delegate that the session started.
- [assessmentSession:failedToBeginWithError:](aeassessmentsessiondelegate/assessmentsession%28__failedtobeginwitherror_%29.md): Tells the delegate that the session failed to start.
- [assessmentSession:wasInterruptedWithError:](aeassessmentsessiondelegate/assessmentsession%28__wasinterruptedwitherror_%29.md): Tells the delegate that a system failure interrupted the session.
- [assessmentSessionDidEnd:](aeassessmentsessiondelegate/assessmentsessiondidend%28__%29.md): Tells the delegate that the session ended.

### Responding to configuration changes

- [assessmentSessionDidUpdate:](aeassessmentsessiondelegate/assessmentsessiondidupdate%28__%29.md): Tells the delegate that a configuration update succeeded.
- [assessmentSession:failedToUpdateToConfiguration:error:](aeassessmentsessiondelegate/assessmentsession%28__failedtoupdateto_error_%29.md): Tells the delegate that a configuration update failed.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to session updates

- [delegate](aeassessmentsession/delegate.md): A delegate to which the session provides state change updates.
