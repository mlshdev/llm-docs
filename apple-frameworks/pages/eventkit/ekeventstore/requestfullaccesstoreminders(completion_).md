> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekeventstore/requestfullaccesstoreminders(completion:)](https://developer.apple.com/documentation/eventkit/ekeventstore/requestfullaccesstoreminders(completion:))

# requestFullAccessToReminders(completion:) (Swift)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+ · watchOS 10.0+

Prompts people to grant or deny read and write access to reminders.

## Declaration

```swift
func requestFullAccessToReminders(completion: @escaping @Sendable (Bool, (any Error)?) -> Void)
```

```swift
func requestFullAccessToReminders() async throws -> Bool
```

## Parameters

- `completion`: The block to call when the request completes.

## Mentioned In

- [Accessing the event store](../accessing-the-event-store.md)

<a id="Discussion"></a>

## Discussion

Requesting access to an event store asynchronously prompts people for permission to use their data. The operating system only prompts them the first time your app requests access to reminders; any subsequent instantiations of [EKEventStore](../ekeventstore.md) uses existing permissions. When they grant or deny access, [EventKit](../../eventkit.md) calls the completion handler on an arbitrary queue.

Your app isn’t blocked while the person decides to grant or deny permission. Because they may deny permission, your app should handle cases where it doesn’t receive access to the event store.

> **Important**

>  If your app has never requested access, you must request access to reminders before attempting to fetch or create them. If you request reminders before prompting the person for access with this method, you’ll need to reset the event store with the [reset()](reset%28%29.md) method to receive data after they grant access.

## See Also

### Requesting access to events and reminders

- [requestWriteOnlyAccessToEvents(completion:)](requestwriteonlyaccesstoevents%28completion_%29.md): Prompts the person using your app to grant or deny write access to event data.
- [requestFullAccessToEvents(completion:)](requestfullaccesstoevents%28completion_%29.md): Prompts people to grant or deny read and write access to event data.
- [authorizationStatus(for:)](authorizationstatus%28for_%29.md): Determines the authorization status for the given entity type.
- [EKAuthorizationStatus](../ekauthorizationstatus.md): The current authorization status for a specific entity type.
- [EKEventStoreRequestAccessCompletionHandler](../ekeventstorerequestaccesscompletionhandler.md): The signature for a closure that EventKit calls when requesting access to event and reminder data.
- [NSCalendarsFullAccessUsageDescription](../../bundleresources/information-property-list/nscalendarsfullaccessusagedescription.md): A message that tells people why the app is requesting access to read and write their calendar data.
- [NSCalendarsWriteOnlyAccessUsageDescription](../../bundleresources/information-property-list/nscalendarswriteonlyaccessusagedescription.md): A message that tells people why the app is requesting access to create calendar events.
- [NSRemindersFullAccessUsageDescription](../../bundleresources/information-property-list/nsremindersfullaccessusagedescription.md): A message that tells people why the app is requesting access to read and write their reminders data.

# requestFullAccessToRemindersWithCompletion: (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+ · watchOS 10.0+

Prompts people to grant or deny read and write access to reminders.

## Declaration

```objectivec
- (void) requestFullAccessToRemindersWithCompletion:(EKEventStoreRequestAccessCompletionHandler) completion;
```

## Parameters

- `completion`: The block to call when the request completes.

## Mentioned In

- [Accessing the event store](../accessing-the-event-store.md)

<a id="Discussion"></a>

## Discussion

Requesting access to an event store asynchronously prompts people for permission to use their data. The operating system only prompts them the first time your app requests access to reminders; any subsequent instantiations of [EKEventStore](../ekeventstore.md) uses existing permissions. When they grant or deny access, [EventKit](../../eventkit.md) calls the completion handler on an arbitrary queue.

Your app isn’t blocked while the person decides to grant or deny permission. Because they may deny permission, your app should handle cases where it doesn’t receive access to the event store.

> **Important**

>  If your app has never requested access, you must request access to reminders before attempting to fetch or create them. If you request reminders before prompting the person for access with this method, you’ll need to reset the event store with the [reset](reset%28%29.md) method to receive data after they grant access.

## See Also

### Requesting access to events and reminders

- [requestWriteOnlyAccessToEventsWithCompletion:](requestwriteonlyaccesstoevents%28completion_%29.md): Prompts the person using your app to grant or deny write access to event data.
- [requestFullAccessToEventsWithCompletion:](requestfullaccesstoevents%28completion_%29.md): Prompts people to grant or deny read and write access to event data.
- [authorizationStatusForEntityType:](authorizationstatus%28for_%29.md): Determines the authorization status for the given entity type.
- [EKAuthorizationStatus](../ekauthorizationstatus.md): The current authorization status for a specific entity type.
- [EKEventStoreRequestAccessCompletionHandler](../ekeventstorerequestaccesscompletionhandler.md): The signature for a closure that EventKit calls when requesting access to event and reminder data.
- [NSCalendarsFullAccessUsageDescription](../../bundleresources/information-property-list/nscalendarsfullaccessusagedescription.md): A message that tells people why the app is requesting access to read and write their calendar data.
- [NSCalendarsWriteOnlyAccessUsageDescription](../../bundleresources/information-property-list/nscalendarswriteonlyaccessusagedescription.md): A message that tells people why the app is requesting access to create calendar events.
- [NSRemindersFullAccessUsageDescription](../../bundleresources/information-property-list/nsremindersfullaccessusagedescription.md): A message that tells people why the app is requesting access to read and write their reminders data.
