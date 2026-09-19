> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/livecommunicationkit/liveassistancelaunchreason

# LiveAssistanceLaunchReason

**Framework:** LiveCommunicationKit  
**Kind:** Enumeration  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ beta · macOS 27.1+ · visionOS 27.1+

A type that indicates why the live assistance extension needs to launch its container app.

## Declaration

```swift
enum LiveAssistanceLaunchReason
```

<a id="overview"></a>

## Overview

You provide this type from your extension in the [LiveAssistanceRequest.Response.requiresUserInput(reason:)](liveassistancerequest/response/requiresuserinput%28reason_%29.md) enumeration case. Your container app receives a reason string in the [userInfo](../foundation/nsuseractivity/userinfo.md) of the [NSUserActivity](../foundation/nsuseractivity.md) when the system launches your app. Send this value to `init(rawValue:)` to get an instance of `LiveAssistanceLaunchReason` that your app can act on by comparing it to the defined cases of the enumeration. The string you receive from the user activity is only appropriate for instantiating a `LiveAssistanceLaunchReason` to compare against; it’s not appropriate for use in your user interface.

## Topics

### Working with launch reasons

- [LiveAssistanceLaunchReason.signIn](liveassistancelaunchreason/signin.md): A launch reason that indicates the person using the extension isn’t signed into the VRS provider service.
- [LiveAssistanceLaunchReason.additionalInfo](liveassistancelaunchreason/additionalinfo.md): A launch reason that indicates the person using the extension needs to provide some information not related to authentication.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Responding to a container app launch

- [containerAppLaunchActivityType](liveassistance/containerapplaunchactivitytype.md): The user activity type sent to the container app.
- [containerAppLaunchRequestIDKey](liveassistance/containerapplaunchrequestidkey.md): A key the container app uses to retrieve a unique identifier for the live assistance request.
- [containerAppLaunchReasonKey](liveassistance/containerapplaunchreasonkey.md): A key the container app uses to retrieve the reason the app extension requested the framework to launch the container app.
