> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/livecommunicationkit/liveassistance/containerapplaunchreasonkey

# containerAppLaunchReasonKey

**Framework:** LiveCommunicationKit  
**Kind:** Type Property  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ beta · macOS 27.1+ · visionOS 27.1+

A key the container app uses to retrieve the reason the app extension requested the framework to launch the container app.

## Declaration

```swift
static let containerAppLaunchReasonKey: String
```

<a id="Discussion"></a>

## Discussion

When launched with the user activity type [containerAppLaunchReasonKey](containerapplaunchreasonkey.md), your app retrieves this key from the [userInfo](../../foundation/nsuseractivity/userinfo.md) dictionary of the [NSUserActivity](../../foundation/nsuseractivity.md) received by the launch method. The value is a string that you pass to `LiveAssistanceLaunchReason(rawValue:)` to create an instance of the [LiveAssistanceLaunchReason](../liveassistancelaunchreason.md) enumeration. Compare this instance against the defined cases in the enumeration to determine why the container app launched, such as to perform sign-in or to collect further information or approval. The string you receive from the user activity is only appropriate for instantiating a [LiveAssistanceLaunchReason](../liveassistancelaunchreason.md) to compare against; it’s not appropriate for use in your user interface.

## See Also

### Responding to a container app launch

- [containerAppLaunchActivityType](containerapplaunchactivitytype.md): The user activity type sent to the container app.
- [containerAppLaunchRequestIDKey](containerapplaunchrequestidkey.md): A key the container app uses to retrieve a unique identifier for the live assistance request.
- [LiveAssistanceLaunchReason](../liveassistancelaunchreason.md): A type that indicates why the live assistance extension needs to launch its container app.
