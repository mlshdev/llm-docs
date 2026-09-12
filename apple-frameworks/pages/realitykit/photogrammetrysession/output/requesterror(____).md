> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysession/output/requesterror(_:_:)](https://developer.apple.com/documentation/realitykit/photogrammetrysession/output/requesterror(_:_:))

# PhotogrammetrySession.Output.requestError(\_:\_:)

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The session aborted a request due to an error.

## Declaration

```swift
case requestError(PhotogrammetrySession.Request, any Error)
```

## Parameters

- `Request`: The request in progress.
- `Error`: Details of the error.

## See Also

### Monitoring request status

- [PhotogrammetrySession.Output.requestProgress(\_:fractionComplete:)](requestprogress%28__fractioncomplete_%29.md): A progress update provided by the session.
- [PhotogrammetrySession.Output.requestComplete(\_:\_:)](requestcomplete%28____%29.md): The session finished handling all pending requests.
