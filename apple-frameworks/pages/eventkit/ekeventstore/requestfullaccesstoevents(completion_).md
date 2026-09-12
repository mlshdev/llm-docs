> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekeventstore/requestfullaccesstoevents(completion:)](https://developer.apple.com/documentation/eventkit/ekeventstore/requestfullaccesstoevents(completion:))

# requestFullAccessToEvents(completion:) (Swift)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+ · watchOS 10.0+

Prompts people to grant or deny read and write access to event data.

## Declaration

```swift
func requestFullAccessToEvents(completion: @escaping @Sendable (Bool, (any Error)?) -> Void)
```

```swift
func requestFullAccessToEvents() async throws -> Bool
```

## Parameters

- `completion`: The block to call when the request completes.

## Mentioned In

- [Accessing the event store](../accessing-the-event-store.md)

<a id="Discussion"></a>

## Discussion

Requesting access to an event store asynchronously prompts people for permission to use their data. The operating system only prompts them the first time your app requests full access to events; any subsequent instantiations of [EKEventStore](../ekeventstore.md) uses existing permissions. When they grant or deny access, [EventKit](../../eventkit.md) calls the completion handler on an arbitrary queue.

> **Note**

>  Your iOS or Mac Catalyst app can present an [EKEventEditViewController](../../eventkitui/ekeventeditviewcontroller.md) to let people create events without requesting access to the event store. If your app creates events without using [EKEventEditViewController](../../eventkitui/ekeventeditviewcontroller.md), you must request at least write-only access to event data.

Your app isn’t blocked while the person decides to grant or deny permission. Because they may deny permission, your app should handle cases where it doesn’t receive access to the event store.

> **Important**

>  If your app has never requested access, or only has write-only access to events, you must request full access to events before attempting to fetch them. If you request events before prompting people for access with this method, you’ll need to reset the event store with the [reset()](reset%28%29.md) method to receive data after they grant access.

## See Also

### Requesting access to events and reminders

- [requestWriteOnlyAccessToEvents(completion:)](requestwriteonlyaccesstoevents%28completion_%29.md): Prompts the person using your app to grant or deny write access to event data.
- [requestFullAccessToReminders(completion:)](requestfullaccesstoreminders%28completion_%29.md): Prompts people to grant or deny read and write access to reminders.
- [authorizationStatus(for:)](authorizationstatus%28for_%29.md): Determines the authorization status for the given entity type.
- [EKAuthorizationStatus](../ekauthorizationstatus.md): The current authorization status for a specific entity type.
- [EKEventStoreRequestAccessCompletionHandler](../ekeventstorerequestaccesscompletionhandler.md): The signature for a closure that EventKit calls when requesting access to event and reminder data.
- [NSCalendarsFullAccessUsageDescription](../../bundleresources/information-property-list/nscalendarsfullaccessusagedescription.md): A message that tells people why the app is requesting access to read and write their calendar data.
- [NSCalendarsWriteOnlyAccessUsageDescription](../../bundleresources/information-property-list/nscalendarswriteonlyaccessusagedescription.md): A message that tells people why the app is requesting access to create calendar events.
- [NSRemindersFullAccessUsageDescription](../../bundleresources/information-property-list/nsremindersfullaccessusagedescription.md): A message that tells people why the app is requesting access to read and write their reminders data.

# requestFullAccessToEventsWithCompletion: (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+ · watchOS 10.0+

Prompts people to grant or deny read and write access to event data.

## Declaration

```objectivec
- (void) requestFullAccessToEventsWithCompletion:(EKEventStoreRequestAccessCompletionHandler) completion;
```

## Parameters

- `completion`: The block to call when the request completes.

## Mentioned In

- [Accessing the event store](../accessing-the-event-store.md)

<a id="Discussion"></a>

## Discussion

Requesting access to an event store asynchronously prompts people for permission to use their data. The operating system only prompts them the first time your app requests full access to events; any subsequent instantiations of [EKEventStore](../ekeventstore.md) uses existing permissions. When they grant or deny access, [EventKit](../../eventkit.md) calls the completion handler on an arbitrary queue.

> **Note**

>  Your iOS or Mac Catalyst app can present an [EKEventEditViewController](../../eventkitui/ekeventeditviewcontroller.md) to let people create events without requesting access to the event store. If your app creates events without using [EKEventEditViewController](../../eventkitui/ekeventeditviewcontroller.md), you must request at least write-only access to event data.

Your app isn’t blocked while the person decides to grant or deny permission. Because they may deny permission, your app should handle cases where it doesn’t receive access to the event store.

> **Important**

>  If your app has never requested access, or only has write-only access to events, you must request full access to events before attempting to fetch them. If you request events before prompting people for access with this method, you’ll need to reset the event store with the [reset](reset%28%29.md) method to receive data after they grant access.

## See Also

### Requesting access to events and reminders

- [requestWriteOnlyAccessToEventsWithCompletion:](requestwriteonlyaccesstoevents%28completion_%29.md): Prompts the person using your app to grant or deny write access to event data.
- [requestFullAccessToRemindersWithCompletion:](requestfullaccesstoreminders%28completion_%29.md): Prompts people to grant or deny read and write access to reminders.
- [authorizationStatusForEntityType:](authorizationstatus%28for_%29.md): Determines the authorization status for the given entity type.
- [EKAuthorizationStatus](../ekauthorizationstatus.md): The current authorization status for a specific entity type.
- [EKEventStoreRequestAccessCompletionHandler](../ekeventstorerequestaccesscompletionhandler.md): The signature for a closure that EventKit calls when requesting access to event and reminder data.
- [NSCalendarsFullAccessUsageDescription](../../bundleresources/information-property-list/nscalendarsfullaccessusagedescription.md): A message that tells people why the app is requesting access to read and write their calendar data.
- [NSCalendarsWriteOnlyAccessUsageDescription](../../bundleresources/information-property-list/nscalendarswriteonlyaccessusagedescription.md): A message that tells people why the app is requesting access to create calendar events.
- [NSRemindersFullAccessUsageDescription](../../bundleresources/information-property-list/nsremindersfullaccessusagedescription.md): A message that tells people why the app is requesting access to read and write their reminders data.
