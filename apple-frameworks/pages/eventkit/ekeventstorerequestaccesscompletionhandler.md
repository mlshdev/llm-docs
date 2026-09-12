> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekeventstorerequestaccesscompletionhandler](https://developer.apple.com/documentation/eventkit/ekeventstorerequestaccesscompletionhandler)

# EKEventStoreRequestAccessCompletionHandler (Swift)

**Framework:** EventKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The signature for a closure that EventKit calls when requesting access to event and reminder data.

## Declaration

```swift
typealias EKEventStoreRequestAccessCompletionHandler = (Bool, (any Error)?) -> Void
```

## Parameters

- `granted`: [true](https://developer.apple.com/documentation/swift/true) if the user allows the app to access data in the event store; otherwise, [false](https://developer.apple.com/documentation/swift/false).
- `error`: The error that occurred, if any; otherwise, `nil`.

## See Also

### Requesting access to events and reminders

- [requestWriteOnlyAccessToEvents(completion:)](ekeventstore/requestwriteonlyaccesstoevents%28completion_%29.md): Prompts the person using your app to grant or deny write access to event data.
- [requestFullAccessToEvents(completion:)](ekeventstore/requestfullaccesstoevents%28completion_%29.md): Prompts people to grant or deny read and write access to event data.
- [requestFullAccessToReminders(completion:)](ekeventstore/requestfullaccesstoreminders%28completion_%29.md): Prompts people to grant or deny read and write access to reminders.
- [authorizationStatus(for:)](ekeventstore/authorizationstatus%28for_%29.md): Determines the authorization status for the given entity type.
- [EKAuthorizationStatus](ekauthorizationstatus.md): The current authorization status for a specific entity type.
- [NSCalendarsFullAccessUsageDescription](../bundleresources/information-property-list/nscalendarsfullaccessusagedescription.md): A message that tells people why the app is requesting access to read and write their calendar data.
- [NSCalendarsWriteOnlyAccessUsageDescription](../bundleresources/information-property-list/nscalendarswriteonlyaccessusagedescription.md): A message that tells people why the app is requesting access to create calendar events.
- [NSRemindersFullAccessUsageDescription](../bundleresources/information-property-list/nsremindersfullaccessusagedescription.md): A message that tells people why the app is requesting access to read and write their reminders data.

# EKEventStoreRequestAccessCompletionHandler (Objective-C)

**Framework:** EventKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The signature for a closure that EventKit calls when requesting access to event and reminder data.

## Declaration

```objectivec
typedef void (^)(_Bool, NSError *) EKEventStoreRequestAccessCompletionHandler;
```

## Parameters

- `granted`: [true](https://developer.apple.com/documentation/swift/true) if the user allows the app to access data in the event store; otherwise, [false](https://developer.apple.com/documentation/swift/false).
- `error`: The error that occurred, if any; otherwise, `nil`.

## See Also

### Requesting access to events and reminders

- [requestWriteOnlyAccessToEventsWithCompletion:](ekeventstore/requestwriteonlyaccesstoevents%28completion_%29.md): Prompts the person using your app to grant or deny write access to event data.
- [requestFullAccessToEventsWithCompletion:](ekeventstore/requestfullaccesstoevents%28completion_%29.md): Prompts people to grant or deny read and write access to event data.
- [requestFullAccessToRemindersWithCompletion:](ekeventstore/requestfullaccesstoreminders%28completion_%29.md): Prompts people to grant or deny read and write access to reminders.
- [authorizationStatusForEntityType:](ekeventstore/authorizationstatus%28for_%29.md): Determines the authorization status for the given entity type.
- [EKAuthorizationStatus](ekauthorizationstatus.md): The current authorization status for a specific entity type.
- [NSCalendarsFullAccessUsageDescription](../bundleresources/information-property-list/nscalendarsfullaccessusagedescription.md): A message that tells people why the app is requesting access to read and write their calendar data.
- [NSCalendarsWriteOnlyAccessUsageDescription](../bundleresources/information-property-list/nscalendarswriteonlyaccessusagedescription.md): A message that tells people why the app is requesting access to create calendar events.
- [NSRemindersFullAccessUsageDescription](../bundleresources/information-property-list/nsremindersfullaccessusagedescription.md): A message that tells people why the app is requesting access to read and write their reminders data.
