> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekeventstore/requestwriteonlyaccesstoevents(completion:)](https://developer.apple.com/documentation/eventkit/ekeventstore/requestwriteonlyaccesstoevents(completion:))

# requestWriteOnlyAccessToEvents(completion:) (Swift)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+ · watchOS 10.0+

Prompts the person using your app to grant or deny write access to event data.

## Declaration

```swift
func requestWriteOnlyAccessToEvents(completion: @escaping @Sendable (Bool, (any Error)?) -> Void)
```

```swift
func requestWriteOnlyAccessToEvents() async throws -> Bool
```

## Parameters

- `completion`: The block to call when the request completes.

## Mentioned In

- [Accessing the event store](../accessing-the-event-store.md)

<a id="Discussion"></a>

## Discussion

Requesting access to an event store asynchronously prompts people for permission to use their data. The operating system only prompts them the first time your app requests write-only event access; any subsequent instantiations of [EKEventStore](../ekeventstore.md) uses existing permissions. When they grant or deny access, [EventKit](../../eventkit.md) calls the completion handler on an arbitrary queue.

> **Important**

>  If your app has never requested access, you must request write-only or full access to events before attempting to create them. If you request events before prompting the user for access with this method, you’ll need to reset the event store with the [reset()](reset%28%29.md) method to receive data after the user grants access.

Your app isn’t blocked while the person decides to grant or deny permission. Because they may deny permission, your app needs to handle the case where it doesn’t receive access to the event store.

If the person grants permission, your app receives write-only access to the event store. Your app can create events, but it can’t access any of the existing calendars and events on the device, including events your app created. API calls to read event data from the event store don’t return any events.

> **Note**

>  Your iOS or Mac Catalyst app can present an [EKEventEditViewController](../../eventkitui/ekeventeditviewcontroller.md) to let your user create events without requesting access to the event store. If your app creates events without using [EKEventEditViewController](../../eventkitui/ekeventeditviewcontroller.md), you must request at least write-only access to event data.

## See Also

### Requesting access to events and reminders

- [requestFullAccessToEvents(completion:)](requestfullaccesstoevents%28completion_%29.md): Prompts people to grant or deny read and write access to event data.
- [requestFullAccessToReminders(completion:)](requestfullaccesstoreminders%28completion_%29.md): Prompts people to grant or deny read and write access to reminders.
- [authorizationStatus(for:)](authorizationstatus%28for_%29.md): Determines the authorization status for the given entity type.
- [EKAuthorizationStatus](../ekauthorizationstatus.md): The current authorization status for a specific entity type.
- [EKEventStoreRequestAccessCompletionHandler](../ekeventstorerequestaccesscompletionhandler.md): The signature for a closure that EventKit calls when requesting access to event and reminder data.
- [NSCalendarsFullAccessUsageDescription](../../bundleresources/information-property-list/nscalendarsfullaccessusagedescription.md): A message that tells people why the app is requesting access to read and write their calendar data.
- [NSCalendarsWriteOnlyAccessUsageDescription](../../bundleresources/information-property-list/nscalendarswriteonlyaccessusagedescription.md): A message that tells people why the app is requesting access to create calendar events.
- [NSRemindersFullAccessUsageDescription](../../bundleresources/information-property-list/nsremindersfullaccessusagedescription.md): A message that tells people why the app is requesting access to read and write their reminders data.

# requestWriteOnlyAccessToEventsWithCompletion: (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+ · watchOS 10.0+

Prompts the person using your app to grant or deny write access to event data.

## Declaration

```objectivec
- (void) requestWriteOnlyAccessToEventsWithCompletion:(EKEventStoreRequestAccessCompletionHandler) completion;
```

## Parameters

- `completion`: The block to call when the request completes.

## Mentioned In

- [Accessing the event store](../accessing-the-event-store.md)

<a id="Discussion"></a>

## Discussion

Requesting access to an event store asynchronously prompts people for permission to use their data. The operating system only prompts them the first time your app requests write-only event access; any subsequent instantiations of [EKEventStore](../ekeventstore.md) uses existing permissions. When they grant or deny access, [EventKit](../../eventkit.md) calls the completion handler on an arbitrary queue.

> **Important**

>  If your app has never requested access, you must request write-only or full access to events before attempting to create them. If you request events before prompting the user for access with this method, you’ll need to reset the event store with the [reset](reset%28%29.md) method to receive data after the user grants access.

Your app isn’t blocked while the person decides to grant or deny permission. Because they may deny permission, your app needs to handle the case where it doesn’t receive access to the event store.

If the person grants permission, your app receives write-only access to the event store. Your app can create events, but it can’t access any of the existing calendars and events on the device, including events your app created. API calls to read event data from the event store don’t return any events.

> **Note**

>  Your iOS or Mac Catalyst app can present an [EKEventEditViewController](../../eventkitui/ekeventeditviewcontroller.md) to let your user create events without requesting access to the event store. If your app creates events without using [EKEventEditViewController](../../eventkitui/ekeventeditviewcontroller.md), you must request at least write-only access to event data.

## See Also

### Requesting access to events and reminders

- [requestFullAccessToEventsWithCompletion:](requestfullaccesstoevents%28completion_%29.md): Prompts people to grant or deny read and write access to event data.
- [requestFullAccessToRemindersWithCompletion:](requestfullaccesstoreminders%28completion_%29.md): Prompts people to grant or deny read and write access to reminders.
- [authorizationStatusForEntityType:](authorizationstatus%28for_%29.md): Determines the authorization status for the given entity type.
- [EKAuthorizationStatus](../ekauthorizationstatus.md): The current authorization status for a specific entity type.
- [EKEventStoreRequestAccessCompletionHandler](../ekeventstorerequestaccesscompletionhandler.md): The signature for a closure that EventKit calls when requesting access to event and reminder data.
- [NSCalendarsFullAccessUsageDescription](../../bundleresources/information-property-list/nscalendarsfullaccessusagedescription.md): A message that tells people why the app is requesting access to read and write their calendar data.
- [NSCalendarsWriteOnlyAccessUsageDescription](../../bundleresources/information-property-list/nscalendarswriteonlyaccessusagedescription.md): A message that tells people why the app is requesting access to create calendar events.
- [NSRemindersFullAccessUsageDescription](../../bundleresources/information-property-list/nsremindersfullaccessusagedescription.md): A message that tells people why the app is requesting access to read and write their reminders data.
