> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1527224-apple_event_recording_event_id_c

# Apple Event Recording Event ID Constants

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Specify event IDs for events that deal with Apple event recording.

## Declaration

```objectivec
enum : AEEventID {
    ...
};
```

## Topics

### Constants

- [kAEStartRecording](1527224-apple_event_recording_event_id_c/kaestartrecording.md)
- [kAEStopRecording](1527224-apple_event_recording_event_id_c/kaestoprecording.md)
- [kAENotifyStartRecording](1527224-apple_event_recording_event_id_c/kaenotifystartrecording.md): An event that notifies an application that recording has been turned on.
- [kAENotifyStopRecording](1527224-apple_event_recording_event_id_c/kaenotifystoprecording.md): An event that notifies an application that recording has been turned off.
- [kAENotifyRecording](1527224-apple_event_recording_event_id_c/kaenotifyrecording.md)
