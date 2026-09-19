> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiotoolbox/aumidieventlist/init(next:eventsampletime:eventtype:reserved:cable:eventlist:)

# init(next:eventSampleTime:eventType:reserved:cable:eventList:)

**Framework:** Audio Toolbox  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
init(next: UnsafeMutablePointer<AURenderEvent>?, eventSampleTime: AUEventSampleTime, eventType: AURenderEventType, reserved: UInt8, cable: UInt8, eventList: MIDIEventList)
```
