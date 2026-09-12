> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysession/output/requestprogress(_:fractioncomplete:)](https://developer.apple.com/documentation/realitykit/photogrammetrysession/output/requestprogress(_:fractioncomplete:))

# PhotogrammetrySession.Output.requestProgress(\_:fractionComplete:)

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A progress update provided by the session.

## Declaration

```swift
case requestProgress(PhotogrammetrySession.Request, fractionComplete: Double)
```

## Parameters

- `Request`: The request in progress.
- `fractionComplete`: A number from `0.0` to `1.0` indicating the current progress for the request.

## See Also

### Monitoring request status

- [PhotogrammetrySession.Output.requestComplete(\_:\_:)](requestcomplete%28____%29.md): The session finished handling all pending requests.
- [PhotogrammetrySession.Output.requestError(\_:\_:)](requesterror%28____%29.md): The session aborted a request due to an error.
