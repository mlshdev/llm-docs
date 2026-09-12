> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysession/output/requestcomplete(_:_:)](https://developer.apple.com/documentation/realitykit/photogrammetrysession/output/requestcomplete(_:_:))

# PhotogrammetrySession.Output.requestComplete(\_:\_:)

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The session finished handling all pending requests.

## Declaration

```swift
case requestComplete(PhotogrammetrySession.Request, PhotogrammetrySession.Result)
```

## See Also

### Monitoring request status

- [PhotogrammetrySession.Output.requestProgress(\_:fractionComplete:)](requestprogress%28__fractioncomplete_%29.md): A progress update provided by the session.
- [PhotogrammetrySession.Output.requestError(\_:\_:)](requesterror%28____%29.md): The session aborted a request due to an error.
