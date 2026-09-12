> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/activityauthorizationinfo/activityenablementupdates-swift.property](https://developer.apple.com/documentation/activitykit/activityauthorizationinfo/activityenablementupdates-swift.property)

# activityEnablementUpdates

**Framework:** ActivityKit  
**Kind:** Instance Property  
**Availability:** iOS 16.1+ · iPadOS 16.1+

An asynchronous sequence you use to observe whether your app can start a Live Activity.

## Declaration

```swift
final let activityEnablementUpdates: ActivityAuthorizationInfo.ActivityEnablementUpdates
```

## Mentioned In

- [Displaying live data with Live Activities](../displaying-live-data-with-live-activities.md)

## See Also

### Observing Live Activity permission changes

- [areActivitiesEnabled](areactivitiesenabled.md): A Boolean value that indicates whether your app can start a Live Activity.
- [ActivityAuthorizationInfo.ActivityEnablementUpdates](activityenablementupdates-swift.struct.md): A structure that offers functionality to observe whether your app can start a Live Activity.
- [init()](init%28%29.md): Creates an object you use to observe user authorizations for starting Live Activities and updating them with ActivityKit push notifications.
