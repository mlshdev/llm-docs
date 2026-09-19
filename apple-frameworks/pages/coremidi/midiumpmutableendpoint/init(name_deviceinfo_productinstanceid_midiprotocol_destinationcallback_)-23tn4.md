> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremidi/midiumpmutableendpoint/init(name:deviceinfo:productinstanceid:midiprotocol:destinationcallback:)-23tn4

# init(name:deviceInfo:productInstanceID:MIDIProtocol:destinationCallback:)

**Framework:** Core MIDI  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

## Declaration

```swift
init?(name: String, deviceInfo: MIDI2DeviceInfo, productInstanceID: String, MIDIProtocol: MIDIProtocolID, destinationCallback: @escaping MIDIReceiveBlock)
```
