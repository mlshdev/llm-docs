> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1527224-apple_event_recording_event_id_c/kaenotifyrecording](https://developer.apple.com/documentation/coreservices/1527224-apple_event_recording_event_id_c/kaenotifyrecording)

# kAENotifyRecording

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
kAENotifyRecording = 'recr'
```

<a id="discussion"></a>

## Discussion

Wildcard event class and event ID handled by a recording process in order to receive and record copies of recordable events sent to it by the Apple Event Manager. Scripting components install a handler for this event on behalf of a recording process when recording is turned on and remove the handler when recording is turned off.
