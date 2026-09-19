> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/livecommunicationkit/liveassistance/returntocall(requestid:)

# returnToCall(requestID:)

**Framework:** LiveCommunicationKit  
**Kind:** Type Method  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ beta · macOS 27.1+ · visionOS 27.1+

Requests that framework return to the FaceTime call, in order to resume the live assistance request.

## Declaration

```swift
@MainActor static func returnToCall(requestID: UUID)
```

<a id="Discussion"></a>

## Discussion

Use this method when the framework launches your app in order to satisfy a request from your extension for the person using the app to sign in or provide other information. After your app collects the needed information, call this method from inside the [onContinueUserActivity(\_:perform:)](https://developer.apple.com/documentation/swiftui/view/oncontinueuseractivity%28_:perform:%29) (SwiftUI) or [application(\_:continue:restorationHandler:)](../../uikit/uiapplicationdelegate/application%28__continue_restorationhandler_%29.md) (UIKit) method where you handle the activity type [containerAppLaunchActivityType](containerapplaunchactivitytype.md). For the parameter `requestID`, fetch the value of [containerAppLaunchRequestIDKey](containerapplaunchrequestidkey.md) from the [userInfo](../../foundation/nsuseractivity/userinfo.md) dictionary of the [NSUserActivity](../../foundation/nsuseractivity.md) sent to the launch method.

This method returns immediately. After you call it, the system foregrounds the FaceTime call and invokes the extension’s [resumeRequest(\_:)](../liveassistanceextension/resumerequest%28__%29.md) to indicate that the container app has finished its work and the extension can continue setting up live assistance.

If the system doesn’t recognize `requestID` — possibly because the call ended or the person canceled the request — the framework silently ignores `returnToCall(_:)`. The container app doesn’t need to perform any clean-up work in this situation.
