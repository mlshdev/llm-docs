> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foveatedstreaming/foveatedstreamingsession/endpoint/remote(servername:signalingheaders:)](https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingsession/endpoint/remote(servername:signalingheaders:))

# remote(serverName:signalingHeaders:)

**Framework:** Foveated Streaming  
**Kind:** Type Method  
**Availability:** visionOS 26.4+

Connects to a remote endpoint by server name.

## Declaration

```swift
static func remote(serverName: String, signalingHeaders: [String : String]) -> FoveatedStreamingSession.Endpoint
```

<a id="discussion"></a>

## Discussion

The framework uses the server name to look up the remote URL from the app’s [ApprovedStreamingEndpoints](../../../bundleresources/information-property-list/approvedstreamingendpoints.md) in `Info.plist`.

- Parameter

  - serverName: The server name corresponding to an entry in the `ApprovedStreamingEndpoints` dictionary.
  - signalingHeaders: HTTP headers which the session forwards to the remote server. Use these headers for authentication and session management.
