> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foveatedstreaming/foveatedstreamingextension/connect(context:)](https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingextension/connect(context:))

# connect(context:)

**Framework:** Foveated Streaming  
**Kind:** Instance Method  
**Availability:** visionOS 27.0+

Connect to the provided endpoint.

## Declaration

```swift
@MainActor func connect(context: Self.Context) async throws
```

## Parameters

- `context`: An object used to communicate state back to the host app.

<a id="discussion"></a>

## Discussion

This is called when the session begins. Your extension should begin connecting to `context.endpoint` immediately.

> **Throws**

> If the connection fails.  The error will be presented to the host app.
