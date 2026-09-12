> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foveatedstreaming/foveatedstreamingsession/queryauthorization(for:)](https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingsession/queryauthorization(for:))

# queryAuthorization(for:)

**Framework:** Foveated Streaming  
**Kind:** Instance Method  
**Availability:** visionOS 27.0+

Returns the current authorization status of the given input capabilities without presenting an authorization prompt.

## Declaration

```swift
@MainActor final func queryAuthorization(for inputCapabilities: Set<FoveatedStreamingSession.InputCapability>) async -> [FoveatedStreamingSession.InputCapability : FoveatedStreamingSession.AuthorizationStatus]
```

## Parameters

- `inputCapabilities`: The capabilities to query.

<a id="return-value"></a>

## Return Value

A dictionary mapping each queried capability to its current authorization status.
