> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/activitykit/activityauthorizationinfo/areactivitiesenabled

# areActivitiesEnabled

**Framework:** ActivityKit  
**Kind:** Instance Property  
**Availability:** iOS 16.1+ · iPadOS 16.1+

A Boolean value that indicates whether your app can start a Live Activity.

## Declaration

```swift
final var areActivitiesEnabled: Bool { get }
```

## Mentioned In

- [Displaying live data with Live Activities](../displaying-live-data-with-live-activities.md)

## See Also

### Observing Live Activity permission changes

- [activityEnablementUpdates](activityenablementupdates-swift.property.md): An asynchronous sequence you use to observe whether your app can start a Live Activity.
- [ActivityAuthorizationInfo.ActivityEnablementUpdates](activityenablementupdates-swift.struct.md): A structure that offers functionality to observe whether your app can start a Live Activity.
- [init()](init%28%29.md): Creates an object you use to observe user authorizations for starting Live Activities and updating them with ActivityKit push notifications.
