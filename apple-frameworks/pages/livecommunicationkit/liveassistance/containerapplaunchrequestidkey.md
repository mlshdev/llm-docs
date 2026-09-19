> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/livecommunicationkit/liveassistance/containerapplaunchrequestidkey

# containerAppLaunchRequestIDKey

**Framework:** LiveCommunicationKit  
**Kind:** Type Property  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ beta · macOS 27.1+ · visionOS 27.1+

A key the container app uses to retrieve a unique identifier for the live assistance request.

## Declaration

```swift
static let containerAppLaunchRequestIDKey: String
```

<a id="Discussion"></a>

## Discussion

When launched with the user activity type [containerAppLaunchReasonKey](containerapplaunchreasonkey.md), your app retrieves this key from the [userInfo](../../foundation/nsuseractivity/userinfo.md) dictionary of the [NSUserActivity](../../foundation/nsuseractivity.md) received by the launch method. After your container app finishes performing sign-in or collecting any needed information from the person using the service, your app sends the request id to [returnToCall(requestID:)](returntocall%28requestid_%29.md) to return to the FaceTime call and allow your app extension to finish setting up the live assistance service.

## See Also

### Responding to a container app launch

- [containerAppLaunchActivityType](containerapplaunchactivitytype.md): The user activity type sent to the container app.
- [containerAppLaunchReasonKey](containerapplaunchreasonkey.md): A key the container app uses to retrieve the reason the app extension requested the framework to launch the container app.
- [LiveAssistanceLaunchReason](../liveassistancelaunchreason.md): A type that indicates why the live assistance extension needs to launch its container app.
