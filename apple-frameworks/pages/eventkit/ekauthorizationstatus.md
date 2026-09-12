> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekauthorizationstatus](https://developer.apple.com/documentation/eventkit/ekauthorizationstatus)

# EKAuthorizationStatus (Swift)

**Framework:** EventKit  
**Kind:** Enumeration  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+ · watchOS 2.0+

The current authorization status for a specific entity type.

## Declaration

```swift
enum EKAuthorizationStatus
```

## Topics

### Status

- [EKAuthorizationStatus.fullAccess](ekauthorizationstatus/fullaccess.md): The app has both read and write access to the requested entity type.
- [EKAuthorizationStatus.writeOnly](ekauthorizationstatus/writeonly.md): The app has write-only access to the requested entity type.
- [EKAuthorizationStatus.denied](ekauthorizationstatus/denied.md): The person explicitly denied access to the service for the app.
- [EKAuthorizationStatus.notDetermined](ekauthorizationstatus/notdetermined.md): The person hasn’t chosen whether the app may access the service.
- [EKAuthorizationStatus.restricted](ekauthorizationstatus/restricted.md): The app isn’t authorized to access the service.

### Deprecated values

- [authorized](ekauthorizationstatus/authorized.md): Deprecated. The app can access the service.

### Initializers

- [init(rawValue:)](ekauthorizationstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Requesting access to events and reminders

- [requestWriteOnlyAccessToEvents(completion:)](ekeventstore/requestwriteonlyaccesstoevents%28completion_%29.md): Prompts the person using your app to grant or deny write access to event data.
- [requestFullAccessToEvents(completion:)](ekeventstore/requestfullaccesstoevents%28completion_%29.md): Prompts people to grant or deny read and write access to event data.
- [requestFullAccessToReminders(completion:)](ekeventstore/requestfullaccesstoreminders%28completion_%29.md): Prompts people to grant or deny read and write access to reminders.
- [authorizationStatus(for:)](ekeventstore/authorizationstatus%28for_%29.md): Determines the authorization status for the given entity type.
- [EKEventStoreRequestAccessCompletionHandler](ekeventstorerequestaccesscompletionhandler.md): The signature for a closure that EventKit calls when requesting access to event and reminder data.
- [NSCalendarsFullAccessUsageDescription](../bundleresources/information-property-list/nscalendarsfullaccessusagedescription.md): A message that tells people why the app is requesting access to read and write their calendar data.
- [NSCalendarsWriteOnlyAccessUsageDescription](../bundleresources/information-property-list/nscalendarswriteonlyaccessusagedescription.md): A message that tells people why the app is requesting access to create calendar events.
- [NSRemindersFullAccessUsageDescription](../bundleresources/information-property-list/nsremindersfullaccessusagedescription.md): A message that tells people why the app is requesting access to read and write their reminders data.

# EKAuthorizationStatus (Objective-C)

**Framework:** EventKit  
**Kind:** Enumeration  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+ · watchOS 2.0+

The current authorization status for a specific entity type.

## Declaration

```objectivec
enum EKAuthorizationStatus : NSInteger;
```

## Topics

### Status

- [EKAuthorizationStatusFullAccess](ekauthorizationstatus/fullaccess.md): The app has both read and write access to the requested entity type.
- [EKAuthorizationStatusWriteOnly](ekauthorizationstatus/writeonly.md): The app has write-only access to the requested entity type.
- [EKAuthorizationStatusDenied](ekauthorizationstatus/denied.md): The person explicitly denied access to the service for the app.
- [EKAuthorizationStatusNotDetermined](ekauthorizationstatus/notdetermined.md): The person hasn’t chosen whether the app may access the service.
- [EKAuthorizationStatusRestricted](ekauthorizationstatus/restricted.md): The app isn’t authorized to access the service.

### Deprecated values

- [EKAuthorizationStatusAuthorized](ekauthorizationstatus/authorized.md): Deprecated. The app can access the service.

## See Also

### Requesting access to events and reminders

- [requestWriteOnlyAccessToEventsWithCompletion:](ekeventstore/requestwriteonlyaccesstoevents%28completion_%29.md): Prompts the person using your app to grant or deny write access to event data.
- [requestFullAccessToEventsWithCompletion:](ekeventstore/requestfullaccesstoevents%28completion_%29.md): Prompts people to grant or deny read and write access to event data.
- [requestFullAccessToRemindersWithCompletion:](ekeventstore/requestfullaccesstoreminders%28completion_%29.md): Prompts people to grant or deny read and write access to reminders.
- [authorizationStatusForEntityType:](ekeventstore/authorizationstatus%28for_%29.md): Determines the authorization status for the given entity type.
- [EKEventStoreRequestAccessCompletionHandler](ekeventstorerequestaccesscompletionhandler.md): The signature for a closure that EventKit calls when requesting access to event and reminder data.
- [NSCalendarsFullAccessUsageDescription](../bundleresources/information-property-list/nscalendarsfullaccessusagedescription.md): A message that tells people why the app is requesting access to read and write their calendar data.
- [NSCalendarsWriteOnlyAccessUsageDescription](../bundleresources/information-property-list/nscalendarswriteonlyaccessusagedescription.md): A message that tells people why the app is requesting access to create calendar events.
- [NSRemindersFullAccessUsageDescription](../bundleresources/information-property-list/nsremindersfullaccessusagedescription.md): A message that tells people why the app is requesting access to read and write their reminders data.
