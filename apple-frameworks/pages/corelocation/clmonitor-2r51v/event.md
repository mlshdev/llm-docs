> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clmonitor-2r51v/event](https://developer.apple.com/documentation/corelocation/clmonitor-2r51v/event)

# CLMonitor.Event

**Framework:** Core Location  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

An event object that the framework passes to the events sequence in the monitor.

## Declaration

```swift
struct Event
```

<a id="overview"></a>

## Overview

The framework delivers these events to an asynchronous sequence in the monitor that your app processes.

## Topics

### Event states

- [accuracyLimited](event/accuracylimited.md): A Boolean value that indicates whether the app receives accuracy-limited location updates.
- [authorizationDenied](event/authorizationdenied.md): A Boolean value that indicates whether the app has local authorization.
- [authorizationDeniedGlobally](event/authorizationdeniedglobally.md): A Boolean value that indicates whether the app has system-wide authorization.
- [authorizationRequestInProgress](event/authorizationrequestinprogress.md)
- [authorizationRestricted](event/authorizationrestricted.md): A Boolean value that indicates whether the app can make authorization changes.
- [conditionLimitExceeded](event/conditionlimitexceeded.md): A Boolean value that indicates whether the app receives location updates based on other monitoring conditions.
- [conditionUnsupported](event/conditionunsupported.md): A Boolean value that indicates whether the app receives location updates based on the supported condition.
- [insufficientlyInUse](event/insufficientlyinuse.md): A Boolean value that indicates whether the app receives location updates because it’s insufficiently in use.
- [persistenceUnavailable](event/persistenceunavailable.md): A Boolean value that indicates whether it receives location updates based on successful persistence.
- [serviceSessionRequired](event/servicesessionrequired.md)

### Event characteristics

- [date](event/date.md): A date indicating the time of the event.
- [identifier](event/identifier.md): A string that identifies the event.
- [refinement](event/refinement.md): An optional instance of a condition that represents the most specific condition that this event can apply to.
- [state](event/state-swift.property.md): The event’s state.

### Type aliases

- [CLMonitor.Event.State](event/state-swift.typealias.md): The type that represents the state of the monitoring event.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Monitor events

- [CLMonitor.Record](record.md): A structure that represents a condition and its associated event information that the framework is monitoring.
- [CLMonitor.Events](events-swift.struct.md): A type that represents an asynchronous sequence of events.
