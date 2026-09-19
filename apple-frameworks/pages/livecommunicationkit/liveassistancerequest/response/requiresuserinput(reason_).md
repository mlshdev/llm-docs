> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/livecommunicationkit/liveassistancerequest/response/requiresuserinput(reason:)

# LiveAssistanceRequest.Response.requiresUserInput(reason:)

**Framework:** LiveCommunicationKit  
**Kind:** Case  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ beta · macOS 27.1+ · visionOS 27.1+

A response that indicates the extension needs to complete a task in the container app before the request can proceed.

## Declaration

```swift
case requiresUserInput(reason: LiveAssistanceLaunchReason)
```

## Parameters

- `reason`: The reason the container app needs to collect more information.

<a id="Discussion"></a>

## Discussion

Return this value from your implementations of [prepareAssistanceRequest(\_:)](../../liveassistanceextension/prepareassistancerequest%28__%29.md) and [resumeRequest(\_:)](../../liveassistanceextension/resumerequest%28__%29.md) when you need the person using the app to provide additional information. You use this case when you require actions like signing in, or setting a desired language for the interpreter service. The associated value `reason` supplies a [LiveAssistanceLaunchReason](../../liveassistancelaunchreason.md) to tell the container app what information it needs to collect.

When you return this value, FaceTime shows a popup for the person to continue in your container app.

- If the person continues, FaceTime launches your container app with an [NSUserActivity](../../../foundation/nsuseractivity.md). After your app collects the required information, it calls [returnToCall(requestID:)](../../liveassistance/returntocall%28requestid_%29.md) to re-invoke the extension with a call to [resumeRequest(\_:)](../../liveassistanceextension/resumerequest%28__%29.md).
- If the person chooses not to launch your container app, the popup dismisses and the request ends.

This response is deferral, not a failure. The request stays alive while the person interacts with the FaceTime popup. For genuine failures, your implementation of the [LiveAssistanceExtension](../../liveassistanceextension.md) throws an error instead of returning a value.

## See Also

### Working with responses

- [LiveAssistanceRequest.Response.proceed](proceed.md): A response that indicates the extension successfully handled the request and setting up live assistance can proceed.
- [LiveAssistanceLaunchReason](../../liveassistancelaunchreason.md): A type that indicates why the live assistance extension needs to launch its container app.
