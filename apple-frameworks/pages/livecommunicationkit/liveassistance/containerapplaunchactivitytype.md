> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/livecommunicationkit/liveassistance/containerapplaunchactivitytype

# containerAppLaunchActivityType

**Framework:** LiveCommunicationKit  
**Kind:** Type Property  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ beta · macOS 27.1+ · visionOS 27.1+

The user activity type sent to the container app.

## Declaration

```swift
static let containerAppLaunchActivityType: String
```

<a id="Discussion"></a>

## Discussion

This string is the value of the [activityType](../../foundation/nsuseractivity/activitytype.md) of the [NSUserActivity](../../foundation/nsuseractivity.md) sent by the framework when it launches the container app, following a request from the app extension for sign-in or other information. Container apps should validate that the user activity received by [onContinueUserActivity(\_:perform:)](https://developer.apple.com/documentation/swiftui/view/oncontinueuseractivity%28_:perform:%29) (SwiftUI) or [application(\_:continue:restorationHandler:)](../../uikit/uiapplicationdelegate/application%28__continue_restorationhandler_%29.md) (UIKit) matches this string. If it does, then the user activity’s [userInfo](../../foundation/nsuseractivity/userinfo.md) dictionary contains a request id. The container app sends the request id to [returnToCall(requestID:)](returntocall%28requestid_%29.md) after it completes logging in or collecting the other needed information from the person using the service.

Your container app also needs to include this string in the app’s information property list, as a member of the `NSUserActivityTypes` array.

## See Also

### Responding to a container app launch

- [containerAppLaunchRequestIDKey](containerapplaunchrequestidkey.md): A key the container app uses to retrieve a unique identifier for the live assistance request.
- [containerAppLaunchReasonKey](containerapplaunchreasonkey.md): A key the container app uses to retrieve the reason the app extension requested the framework to launch the container app.
- [LiveAssistanceLaunchReason](../liveassistancelaunchreason.md): A type that indicates why the live assistance extension needs to launch its container app.
