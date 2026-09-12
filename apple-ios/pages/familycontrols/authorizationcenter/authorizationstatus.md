> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/familycontrols/authorizationcenter/authorizationstatus](https://developer.apple.com/documentation/familycontrols/authorizationcenter/authorizationstatus)

# authorizationStatus

**Framework:** Family Controls  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+

The status of your app’s authorization to provide parental controls.

## Declaration

```swift
@Published<AuthorizationStatus> var authorizationStatus: AuthorizationStatus { get }
```

<a id="discussion"></a>

## Discussion

The initial value is always [AuthorizationStatus.notDetermined](../authorizationstatus/notdetermined.md). The system sets this property only after a call to [requestAuthorization(for:)](requestauthorization%28for_%29.md) succeeds. It then updates the property until a call to [revokeAuthorization(completionHandler:)](revokeauthorization%28completionhandler_%29.md) succeeds or your app exits.

To track changes to your app’s authorization status, attach a [Subscriber](https://developer.apple.com/documentation/combine/subscriber) to the `authorizationStatus` property.

```swift
let cancellable = center.$authorizationStatus
.sink() {
    switch center.authorizationStatus {
    case .notDetermined:
        // Handle the change to notDetermined.
    case .denied:
        // Handle the change to denied.
    case .approved:
        // Handle the change to approved.
   }
}
```

Alternatively, you can assign the [AuthorizationCenter](../authorizationcenter.md) to an [ObservedObject](https://developer.apple.com/documentation/swiftui/observedobject) property inside a [View](https://developer.apple.com/documentation/swiftui/view). The system update the view whenever the status changes.

```swift
@ObservedObject var center = AuthorizationCenter.shared
```

The status may change due to external events, such as a child graduating to an adult account, or a parent or guardian changing the status in Settings.

Only access the `authorizationStatus` property on the [main](https://developer.apple.com/documentation/dispatch/dispatchqueue/main) queue.

## See Also

### Tracking authorization changes

- [$authorizationStatus]($authorizationstatus.md): A publisher for the authorization status property.
