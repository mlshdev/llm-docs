> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/screencapturekit/scstreamerror/userstopped

# userStopped

**Framework:** ScreenCaptureKit  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

An error message that indicates the user stopped the stream.

## Declaration

```swift
static var userStopped: SCStreamError.Code { get }
```

<a id="discussion"></a>

## Discussion

As a best practice, handle errors of this type as an intentional user interaction rather than an error.
