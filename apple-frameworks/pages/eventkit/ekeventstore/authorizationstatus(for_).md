> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekeventstore/authorizationstatus(for:)](https://developer.apple.com/documentation/eventkit/ekeventstore/authorizationstatus(for:))

# authorizationStatus(for:) (Swift)

**Framework:** EventKit  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+ · watchOS 2.0+

Determines the authorization status for the given entity type.

## Declaration

```swift
class func authorizationStatus(for entityType: EKEntityType) -> EKAuthorizationStatus
```

## Parameters

- `entityType`: The event or reminder entity type.

<a id="return-value"></a>

## Return Value

The app’s authorization status of the given type.

## See Also

### Requesting access to events and reminders

- [requestWriteOnlyAccessToEvents(completion:)](requestwriteonlyaccesstoevents%28completion_%29.md): Prompts the person using your app to grant or deny write access to event data.
- [requestFullAccessToEvents(completion:)](requestfullaccesstoevents%28completion_%29.md): Prompts people to grant or deny read and write access to event data.
- [requestFullAccessToReminders(completion:)](requestfullaccesstoreminders%28completion_%29.md): Prompts people to grant or deny read and write access to reminders.
- [EKAuthorizationStatus](../ekauthorizationstatus.md): The current authorization status for a specific entity type.
- [EKEventStoreRequestAccessCompletionHandler](../ekeventstorerequestaccesscompletionhandler.md): The signature for a closure that EventKit calls when requesting access to event and reminder data.
- [NSCalendarsFullAccessUsageDescription](../../bundleresources/information-property-list/nscalendarsfullaccessusagedescription.md): A message that tells people why the app is requesting access to read and write their calendar data.
- [NSCalendarsWriteOnlyAccessUsageDescription](../../bundleresources/information-property-list/nscalendarswriteonlyaccessusagedescription.md): A message that tells people why the app is requesting access to create calendar events.
- [NSRemindersFullAccessUsageDescription](../../bundleresources/information-property-list/nsremindersfullaccessusagedescription.md): A message that tells people why the app is requesting access to read and write their reminders data.

# authorizationStatusForEntityType: (Objective-C)

**Framework:** EventKit  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+ · watchOS 2.0+

Determines the authorization status for the given entity type.

## Declaration

```objectivec
+ (EKAuthorizationStatus) authorizationStatusForEntityType:(EKEntityType) entityType;
```

## Parameters

- `entityType`: The event or reminder entity type.

<a id="return-value"></a>

## Return Value

The app’s authorization status of the given type.

## See Also

### Requesting access to events and reminders

- [requestWriteOnlyAccessToEventsWithCompletion:](requestwriteonlyaccesstoevents%28completion_%29.md): Prompts the person using your app to grant or deny write access to event data.
- [requestFullAccessToEventsWithCompletion:](requestfullaccesstoevents%28completion_%29.md): Prompts people to grant or deny read and write access to event data.
- [requestFullAccessToRemindersWithCompletion:](requestfullaccesstoreminders%28completion_%29.md): Prompts people to grant or deny read and write access to reminders.
- [EKAuthorizationStatus](../ekauthorizationstatus.md): The current authorization status for a specific entity type.
- [EKEventStoreRequestAccessCompletionHandler](../ekeventstorerequestaccesscompletionhandler.md): The signature for a closure that EventKit calls when requesting access to event and reminder data.
- [NSCalendarsFullAccessUsageDescription](../../bundleresources/information-property-list/nscalendarsfullaccessusagedescription.md): A message that tells people why the app is requesting access to read and write their calendar data.
- [NSCalendarsWriteOnlyAccessUsageDescription](../../bundleresources/information-property-list/nscalendarswriteonlyaccessusagedescription.md): A message that tells people why the app is requesting access to create calendar events.
- [NSRemindersFullAccessUsageDescription](../../bundleresources/information-property-list/nsremindersfullaccessusagedescription.md): A message that tells people why the app is requesting access to read and write their reminders data.
