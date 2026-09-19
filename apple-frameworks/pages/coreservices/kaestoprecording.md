> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/kaestoprecording

# kAEStopRecording

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```swift
var kAEStopRecording: AEEventID { get }
```

<a id="discussion"></a>

## Discussion

Event ID for an event sent by a scripting component to the recording process (or to any running process on the local computer), but handled by the Apple Event Manager. The Apple Event Manager responds by sending a `recording off` event to all running processes on the local computer. 

If sent by a PSN, this event must be addressed using a real PSN; it should never be sent to an address specified as `kCurrentProcess`.
