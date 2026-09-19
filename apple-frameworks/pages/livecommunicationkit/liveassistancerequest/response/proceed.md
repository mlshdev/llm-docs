> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/livecommunicationkit/liveassistancerequest/response/proceed

# LiveAssistanceRequest.Response.proceed

**Framework:** LiveCommunicationKit  
**Kind:** Case  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ beta · macOS 27.1+ · visionOS 27.1+

A response that indicates the extension successfully handled the request and setting up live assistance can proceed.

## Declaration

```swift
case proceed
```

<a id="Discussion"></a>

## Discussion

When you return this value, FaceTime displays a “waiting” tile while your service finds a match.

Prior to returning this value, forward [url](../url.md) to your backend.

## See Also

### Working with responses

- [LiveAssistanceRequest.Response.requiresUserInput(reason:)](requiresuserinput%28reason_%29.md): A response that indicates the extension needs to complete a task in the container app before the request can proceed.
- [LiveAssistanceLaunchReason](../../liveassistancelaunchreason.md): A type that indicates why the live assistance extension needs to launch its container app.
