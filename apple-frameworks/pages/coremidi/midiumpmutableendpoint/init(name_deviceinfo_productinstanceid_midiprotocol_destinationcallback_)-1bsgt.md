> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiumpmutableendpoint/init(name:deviceinfo:productinstanceid:midiprotocol:destinationcallback:)-1bsgt](https://developer.apple.com/documentation/coremidi/midiumpmutableendpoint/init(name:deviceinfo:productinstanceid:midiprotocol:destinationcallback:)-1bsgt)

# init(name:deviceInfo:productInstanceID:midiProtocol:destinationCallback:) (Swift)

**Framework:** Core MIDI  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

## Declaration

```swift
init?(name: String, deviceInfo: MIDI2DeviceInfo, productInstanceID: String, midiProtocol MIDIProtocol: MIDIProtocolID, destinationCallback: @escaping MIDIReceiveBlock)
```

# initWithName:deviceInfo:productInstanceID:MIDIProtocol:destinationCallback: (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name deviceInfo:(MIDI2DeviceInfo *) deviceInfo productInstanceID:(NSString *) productInstanceID MIDIProtocol:(MIDIProtocolID) MIDIProtocol destinationCallback:(MIDIReceiveBlock) destinationCallback;
```
