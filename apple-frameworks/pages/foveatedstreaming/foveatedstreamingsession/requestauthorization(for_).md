> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foveatedstreaming/foveatedstreamingsession/requestauthorization(for:)](https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingsession/requestauthorization(for:))

# requestAuthorization(for:)

**Framework:** Foveated Streaming  
**Kind:** Instance Method  
**Availability:** visionOS 27.0+

Requests authorization for the given input capabilities, prompting the user for any capability whose status is [FoveatedStreamingSession.AuthorizationStatus.notDetermined](authorizationstatus/notdetermined.md).

## Declaration

```swift
@MainActor final func requestAuthorization(for inputCapabilities: Set<FoveatedStreamingSession.InputCapability>? = nil) async -> [FoveatedStreamingSession.InputCapability : FoveatedStreamingSession.AuthorizationStatus]
```

## Parameters

- `inputCapabilities`: The capabilities to authorize.  When `nil` (the default), the session’s [requestedInputCapabilities](requestedinputcapabilities.md) are used.

<a id="return-value"></a>

## Return Value

A dictionary mapping each requested capability to its authorization status following the prompt.

<a id="discussion"></a>

## Discussion

Use this method to drive authorization prompts ahead of [connect(endpoint:)](connect%28endpoint_%29.md) so apps that want to surface their own pre-flight UI can do so.  At [connect(endpoint:)](connect%28endpoint_%29.md) time the framework also calls this method automatically for [requestedInputCapabilities](requestedinputcapabilities.md).
