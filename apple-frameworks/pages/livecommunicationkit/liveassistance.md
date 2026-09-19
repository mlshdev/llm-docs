> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/livecommunicationkit/liveassistance

# LiveAssistance

**Framework:** LiveCommunicationKit  
**Kind:** Enumeration  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ beta · macOS 27.1+ · visionOS 27.1+

A namespace to collect APIs for use by container apps that provide live assistance services.

## Declaration

```swift
enum LiveAssistance
```

<a id="overview"></a>

## Overview

To provide interpreter, captioning, or other services that work with FaceTime calls, create a container app that uses the [LiveAssistance](liveassistance.md) APIs, as well as an app extension that conforms to the [LiveAssistanceExtension](liveassistanceextension.md) protocol.

When a participant in a FaceTime calls wants to use live assistance services, they primarily interact with the app extension. If the extension needs further information to set up the service, it launches the app by returning [LiveAssistanceRequest.Response.requiresUserInput(reason:)](liveassistancerequest/response/requiresuserinput%28reason_%29.md) to the request from the framework. This response causes the system to launch the container app, which uses the APIs in this type.

<a id="Handling-app-launch"></a>

### Handling app launch

To prepare your container app, start by adding `com.apple.conversation-accessibility.container-app-launch` to the `NSUserActivityTypes` in your app’s information property list. This allows the framework to launch your app when the extension needs the person using the app to sign in or provide other information.

The framework launches your app with [onContinueUserActivity(\_:perform:)](https://developer.apple.com/documentation/swiftui/view/oncontinueuseractivity%28_:perform:%29) (SwiftUI) or [application(\_:continue:restorationHandler:)](../uikit/uiapplicationdelegate/application%28__continue_restorationhandler_%29.md) (UIKit). Inspect the [NSUserActivity](../foundation/nsuseractivity.md) to verify that the activity type is [containerAppLaunchActivityType](liveassistance/containerapplaunchactivitytype.md). If so, retrieve the launch reason and the request identifier from the [userInfo](../foundation/nsuseractivity/userinfo.md). The launch reason indicates whether the extension needs the app to authenticate the person requesting the service, or if they need to perform some other configuration or approval. Once your app resolves that, you use the request identifier and call [returnToCall(requestID:)](liveassistance/returntocall%28requestid_%29.md) to resume or relaunch the extension and continue setting up the live assistance service.

The following example shows how a SwiftUI container app would handle being launched in response to a request from its app extension. It retrieves the request identifier and launch reason from the [NSUserActivity](../foundation/nsuseractivity.md), and then calls an asynchronous `myHandleAccessibilityLaunch(requestID:reason:)` method to handle any needed login or configuration and then resume the request.

```swift
var body: some Scene {
    WindowGroup {
        ContentView()
            .onContinueUserActivity(LiveAssistance.containerAppLaunchActivityType) { activity in
                guard
                    let requestID = activity.userInfo?[LiveAssistance.containerAppLaunchRequestIDKey] as? /// UUID,
                    let rawReason = activity.userInfo?[LiveAssistance.containerAppLaunchReasonKey] as? /// String,
                    let reason = LiveAssistanceLaunchReason(rawValue: rawReason)
                else { return }
                Task { await myHandleAccessibilityLaunch(requestID: requestID, reason: reason) }
            }
    }
}
```

## Topics

### Identifying the app extension

- [extensionPointName](liveassistance/extensionpointname.md): The extension point identifier.

### Responding to a container app launch

- [containerAppLaunchActivityType](liveassistance/containerapplaunchactivitytype.md): The user activity type sent to the container app.
- [containerAppLaunchRequestIDKey](liveassistance/containerapplaunchrequestidkey.md): A key the container app uses to retrieve a unique identifier for the live assistance request.
- [containerAppLaunchReasonKey](liveassistance/containerapplaunchreasonkey.md): A key the container app uses to retrieve the reason the app extension requested the framework to launch the container app.
- [LiveAssistanceLaunchReason](liveassistancelaunchreason.md): A type that indicates why the live assistance extension needs to launch its container app.

### Returning to a call

- [returnToCall(requestID:)](liveassistance/returntocall%28requestid_%29.md): Requests that framework return to the FaceTime call, in order to resume the live assistance request.

## See Also

### Conversation assistance

- [LiveAssistanceExtension](liveassistanceextension.md): The protocol you extend to provide live assistance services.
