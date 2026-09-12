> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstreamerror/nocapturesource](https://developer.apple.com/documentation/screencapturekit/scstreamerror/nocapturesource)

# noCaptureSource

**Framework:** ScreenCaptureKit  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

An error message that indicates a stream doesn’t have a source to capture.

## Declaration

```swift
static var noCaptureSource: SCStreamError.Code { get }
```

## See Also

### Shareable content

- [noDisplayList](nodisplaylist.md): An error message that indicates a stream doesn’t have displays available.
- [noWindowList](nowindowlist.md): An error message that indicates a stream doesn’t have windows available.
- [failedApplicationConnectionInvalid](failedapplicationconnectioninvalid.md): An error message that indicates the stream lost its connection to an app.
- [failedApplicationConnectionInterrupted](failedapplicationconnectioninterrupted.md): An error message that indicates there was an interruption in a connection to an app.
- [failedNoMatchingApplicationContext](failednomatchingapplicationcontext.md): An error message that indicates there isn’t a matching app context for streaming.
