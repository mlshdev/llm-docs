> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1527224-apple_event_recording_event_id_c/kaestoprecording](https://developer.apple.com/documentation/coreservices/1527224-apple_event_recording_event_id_c/kaestoprecording)

# kAEStopRecording

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
kAEStopRecording = 'recc'
```

<a id="discussion"></a>

## Discussion

Event ID for an event sent by a scripting component to the recording process (or to any running process on the local computer), but handled by the Apple Event Manager. The Apple Event Manager responds by sending a `recording off` event to all running processes on the local computer. 

If sent by a PSN, this event must be addressed using a real PSN; it should never be sent to an address specified as `kCurrentProcess`.
